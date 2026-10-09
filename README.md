# ZELVO storefront

A six-page responsive fashion storefront built with plain HTML, CSS, and JavaScript. The pages are already linked through the navigation and footer.

## Pages

- index.html — home and featured collection
- shop.html — full catalog, category and season filters, search, and sorting
- new.html — latest arrivals
- seasons.html — spring, summer, autumn, and winter edits
- studio.html — brand story
- contact.html — contact form and FAQs

## Run it

Install Node.js if it is not already available, then open a terminal in this folder and run:

`npm start`

Open http://127.0.0.1:4173. You can also run `node server.cjs`.

The local Node server has no third-party dependencies. It serves the site and provides:

- GET /api/health — confirms that the local backend is running
- POST /api/contact — validates the contact form and accepts a message

Contact messages stay in server memory and are cleared when the server stops. The backend does not send email or persist submissions. The bag and favorites save in the browser's local storage. Checkout and newsletter signup are clearly marked demos; no payment or email service is connected.

## Project notes

Product descriptions, pricing, and the ZELVO brand are sample class-project content. Product photography and fonts load from Unsplash and Google Fonts, so those visual assets need an internet connection.
