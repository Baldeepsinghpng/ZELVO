'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = __dirname;
const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 4173);
const MAX_BODY_BYTES = 12 * 1024;
const contactMessages = [];
const publicExtensions = new Set(['.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico']);
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function sendJson(response, status, value) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
  });
  response.end(JSON.stringify(value));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let tooLarge = false;
    request.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        tooLarge = true;
        return;
      }
      chunks.push(chunk);
    });
    request.on('end', () => {
      if (tooLarge) {
        const error = new Error('Message is too large.');
        error.statusCode = 413;
        reject(error);
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch (_) {
        const error = new Error('Send the form as valid JSON.');
        error.statusCode = 400;
        reject(error);
      }
    });
    request.on('error', reject);
  });
}

function validateContact(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { error: 'Send a valid contact form.' };
  }
  const name = typeof value.name === 'string' ? value.name.trim() : '';
  const email = typeof value.email === 'string' ? value.email.trim() : '';
  const subject = typeof value.subject === 'string' ? value.subject.trim() : '';
  const message = typeof value.message === 'string' ? value.message.trim() : '';
  if (name.length < 1 || name.length > 80) return { error: 'Name must be between 1 and 80 characters.' };
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Enter a valid email address.' };
  if (subject.length < 1 || subject.length > 120) return { error: 'Choose a topic for your message.' };
  if (message.length < 8 || message.length > 2000) return { error: 'Message must be between 8 and 2000 characters.' };
  return { value: { name, email, subject, message } };
}

function setSecurityHeaders(response) {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('X-Frame-Options', 'DENY');
  response.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https://images.unsplash.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'");
}

async function handleApi(request, response, pathname) {
  if (pathname === '/api/health' && request.method === 'GET') {
    sendJson(response, 200, { ok: true, service: 'ZELVO class-project backend' });
    return;
  }
  if (pathname !== '/api/contact' || request.method !== 'POST') {
    sendJson(response, 404, { error: 'API route not found.' });
    return;
  }
  const contentType = String(request.headers['content-type'] || '').toLowerCase();
  if (!contentType.includes('application/json')) {
    sendJson(response, 415, { error: 'Use application/json for the contact form.' });
    return;
  }
  try {
    const body = await readJsonBody(request);
    const result = validateContact(body);
    if (result.error) {
      sendJson(response, 400, { error: result.error });
      return;
    }
    contactMessages.push({ ...result.value, receivedAt: new Date().toISOString() });
    if (contactMessages.length > 100) contactMessages.shift();
    sendJson(response, 201, {
      ok: true,
      message: 'Message received by the local demo server. It will clear when the server stops.'
    });
  } catch (error) {
    sendJson(response, error.statusCode || 400, { error: error.message || 'Could not read the contact form.' });
  }
}

function serveFile(request, response, pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch (_) {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }
  if (decodedPath.includes(String.fromCharCode(0))) {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }
  const requestedPath = decodedPath === '/' ? '/index.html' : decodedPath;
  const filePath = path.resolve(ROOT, '.' + requestedPath);
  if (!filePath.startsWith(ROOT + path.sep)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }
  const extension = path.extname(filePath).toLowerCase();
  if (!publicExtensions.has(extension)) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }
  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    response.writeHead(200, {
      'Content-Type': contentTypes[extension],
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    if (request.method === 'HEAD') {
      response.end();
      return;
    }
    fs.createReadStream(filePath).pipe(response);
  });
}

const server = http.createServer(async (request, response) => {
  setSecurityHeaders(response);
  const url = new URL(request.url, 'http://' + HOST + ':' + PORT);
  if (url.pathname.startsWith('/api/')) {
    await handleApi(request, response, url.pathname);
    return;
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }
  serveFile(request, response, url.pathname);
});

server.listen(PORT, HOST, () => {
  console.log('ZELVO is ready at http://' + HOST + ':' + PORT);
  console.log('Contact messages are temporary and remain only in this server process.');
});
