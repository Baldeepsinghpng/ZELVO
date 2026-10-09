(() => {
  'use strict';

  const products = [
    { id: 'halo-tee', name: 'Halo boxy tee', category: 'Tops', season: ['Spring', 'Summer', 'Autumn'], price: 48, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=82', alt: 'Relaxed heavyweight cotton T-shirt', meta: 'Heavyweight cotton · 240 gsm', label: 'Bestseller', featured: true, isNew: false, colors: [['Bone', '#e6e0d4'], ['Olive', '#686f59'], ['Ink', '#262927']] },
    { id: 'solstice-shirt', name: 'Solstice linen shirt', category: 'Tops', season: ['Spring', 'Summer'], price: 96, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=82', alt: 'Easy, relaxed button-up shirt', meta: 'European linen · Garment washed', label: 'New drop', featured: true, isNew: true, colors: [['Sand', '#c5b59a'], ['Cloud', '#e7e4dc'], ['Ink', '#282b2a']] },
    { id: 'drift-trouser', name: 'Drift wide-leg trouser', category: 'Bottoms', season: ['Spring', 'Summer', 'Autumn'], price: 128, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=82', alt: 'Model in fluid wide-leg trousers', meta: 'Linen blend · Easy drape', label: 'Staff pick', featured: true, isNew: false, colors: [['Oat', '#d5c9b4'], ['Moss', '#737666'], ['Ink', '#333530']] },
    { id: 'city-shell', name: 'City shell jacket', category: 'Outerwear', season: ['Spring', 'Autumn'], price: 188, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=82', alt: 'Modern utility jacket with a clean silhouette', meta: 'Recycled nylon · Water resistant', label: 'New drop', featured: true, isNew: true, colors: [['Clay', '#9a7258'], ['Moss', '#596252'], ['Ink', '#303330']] },
    { id: 'ember-knit', name: 'Ember knit polo', category: 'Knitwear', season: ['Autumn', 'Winter'], price: 112, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=82', alt: 'Soft textured knitwear in a warm neutral color', meta: 'Cotton merino · Soft rib', label: 'New drop', featured: false, isNew: true, colors: [['Cocoa', '#897366'], ['Cream', '#e3ddcf'], ['Pine', '#556251']] },
    { id: 'cloud-puffer', name: 'Cloud puffer', category: 'Outerwear', season: ['Winter'], price: 248, image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=82', alt: 'Warm oversized puffer jacket for winter', meta: 'Recycled fill · Weather ready', label: 'Winter essential', featured: false, isNew: false, colors: [['Stone', '#c6c0b4'], ['Moss', '#51594d'], ['Ink', '#262826']] },
    { id: 'meridian-trench', name: 'Meridian trench', category: 'Outerwear', season: ['Spring', 'Autumn'], price: 228, image: 'https://images.unsplash.com/photo-1548624149-f5f8b3e07e6e?auto=format&fit=crop&w=900&q=82', alt: 'Long tailored trench coat in a light neutral shade', meta: 'Cotton twill · Adjustable belt', label: 'Limited run', featured: false, isNew: true, colors: [['Khaki', '#a99b7f'], ['Ink', '#343634']] },
    { id: 'form-denim', name: 'Form straight denim', category: 'Bottoms', season: ['Spring', 'Summer', 'Autumn', 'Winter'], price: 124, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=82', alt: 'Everyday straight-leg denim jeans', meta: 'Recycled cotton denim · 12 oz', label: 'Core piece', featured: true, isNew: false, colors: [['Vintage blue', '#657180'], ['Washed black', '#454645']] },
    { id: 'sculpt-dress', name: 'Sculpt knit dress', category: 'Dresses', season: ['Spring', 'Summer', 'Autumn'], price: 156, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82', alt: 'Modern everyday dress with a sculpted silhouette', meta: 'Stretch rib knit · Easy fit', label: 'New drop', featured: false, isNew: true, colors: [['Espresso', '#59443b'], ['Olive', '#737864'], ['Black', '#282927']] },
    { id: 'afterdark-slip', name: 'Afterdark slip dress', category: 'Dresses', season: ['Spring', 'Summer', 'Autumn', 'Winter'], price: 168, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=82', alt: 'Minimal long-line slip dress', meta: 'Fluid recycled satin · Bias cut', label: 'Best dressed', featured: false, isNew: false, colors: [['Black', '#252725'], ['Champagne', '#d4c6ad']] },
    { id: 'run-short', name: 'Run club short', category: 'Activewear', season: ['Spring', 'Summer'], price: 64, image: 'https://images.unsplash.com/photo-1506629905607-d9a7c2c6a310?auto=format&fit=crop&w=900&q=82', alt: 'Lightweight athletic shorts for movement', meta: 'Quick-dry stretch · Built-in liner', label: 'New drop', featured: false, isNew: true, colors: [['Lime', '#caff52'], ['Ink', '#252725'], ['Cloud', '#e6e3dc']] },
    { id: 'tempo-legging', name: 'Tempo legging', category: 'Activewear', season: ['Spring', 'Summer', 'Autumn', 'Winter'], price: 88, image: 'https://images.unsplash.com/photo-1506629905607-d9a7c2c6a310?auto=format&fit=crop&w=900&q=82', alt: 'Comfortable technical leggings for training', meta: 'Sculpt stretch · High rise', label: 'Core piece', featured: false, isNew: false, colors: [['Ink', '#252725'], ['Moss', '#636d5a']] },
    { id: 'orbit-crossbody', name: 'Orbit crossbody', category: 'Accessories', season: ['Spring', 'Summer', 'Autumn', 'Winter'], price: 78, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=82', alt: 'Compact everyday crossbody bag', meta: 'Recycled nylon · Adjustable strap', label: 'Small but mighty', featured: false, isNew: true, colors: [['Ink', '#262927'], ['Clay', '#a56e57']] },
    { id: 'frame-tote', name: 'Frame daily tote', category: 'Accessories', season: ['Spring', 'Summer', 'Autumn', 'Winter'], price: 58, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=82', alt: 'Structured tote bag for everyday carry', meta: 'Heavy canvas · Roomy inside', label: 'Daily carry', featured: false, isNew: false, colors: [['Natural', '#d6cebd'], ['Ink', '#343634']] },
    { id: 'merino-beanie', name: 'Merino beanie', category: 'Accessories', season: ['Autumn', 'Winter'], price: 44, image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=900&q=82', alt: 'Ribbed wool beanie in a warm neutral tone', meta: 'Responsible merino · Rib knit', label: 'Cold weather', featured: false, isNew: false, colors: [['Cocoa', '#897366'], ['Moss', '#5d6658'], ['Cream', '#e4dece']] },
    { id: 'studio-sweat', name: 'Studio heavyweight sweat', category: 'Tops', season: ['Autumn', 'Winter'], price: 98, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=82', alt: 'Heavyweight relaxed sweatshirt', meta: 'Brushed organic cotton · 400 gsm', label: 'Core piece', featured: false, isNew: false, colors: [['Heather', '#aaa99f'], ['Pine', '#52604f'], ['Ink', '#282a28']] },
    { id: 'breeze-tank', name: 'Breeze rib tank', category: 'Tops', season: ['Spring', 'Summer'], price: 38, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=82', alt: 'Lightweight sleeveless summer top', meta: 'Cotton rib · Close but comfortable', label: 'Warm days', featured: false, isNew: true, colors: [['Cloud', '#e6e3dc'], ['Coral', '#bd765e'], ['Ink', '#292b29']] },
    { id: 'dune-cargo', name: 'Dune relaxed cargo', category: 'Bottoms', season: ['Spring', 'Summer', 'Autumn'], price: 118, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82', alt: 'Relaxed cargo trousers for everyday wear', meta: 'Cotton ripstop · Easy waist', label: 'New drop', featured: false, isNew: true, colors: [['Sand', '#c7b99f'], ['Olive', '#69705c']] },
    { id: 'frost-fleece', name: 'Frost half-zip fleece', category: 'Outerwear', season: ['Autumn', 'Winter'], price: 148, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=82', alt: 'Warm fleece half-zip for cold-weather layering', meta: 'Recycled fleece · Soft touch', label: 'Winter essential', featured: false, isNew: false, colors: [['Oat', '#cfc6b5'], ['Moss', '#606a59']] },
    { id: 'slow-cardigan', name: 'Slow morning cardigan', category: 'Knitwear', season: ['Autumn', 'Winter', 'Spring'], price: 138, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=82', alt: 'Soft everyday cardigan in a classic knit', meta: 'Cotton wool blend · Relaxed shape', label: 'Soft layers', featured: false, isNew: false, colors: [['Oat', '#d0c7b6'], ['Cocoa', '#887366'], ['Pine', '#586150']] }
  ];

  const STORAGE = { cart: 'zelvo-cart-v1', wishlist: 'zelvo-wishlist-v1' };
  const FREE_SHIPPING = 150;
  const SIZE_RUN = ['XS', 'S', 'M', 'L', 'XL'];
  const money = amount => '$' + Number(amount).toFixed(2).replace(/\.00$/, '');
  const byId = id => document.getElementById(id);
  const safeRead = (key, fallback) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value === null ? fallback : value;
    } catch (_) { return fallback; }
  };
  const save = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { showToast('Your browser could not save this change.'); }
  };
  const cart = (() => {
    const saved = safeRead(STORAGE.cart, []);
    if (!Array.isArray(saved)) return [];
    return saved.filter(item => item && products.some(product => product.id === item.productId) &&
      typeof item.size === 'string' && typeof item.color === 'string' &&
      Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99);
  })();
  const wishlist = (() => {
    const saved = safeRead(STORAGE.wishlist, []);
    return Array.isArray(saved) ? saved.filter(id => products.some(product => product.id === id)) : [];
  })();
  let toastTimer;
  let focusBeforeDrawer = null;
  let openOverlay = null;

  function make(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function showToast(message) {
    const toast = byId('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function setImageFallback(image) {
    image.addEventListener('error', () => {
      image.hidden = true;
      image.parentElement.classList.add('image-unavailable');
    }, { once: true });
  }

  function makeProductCard(product) {
    const card = make('article', 'product-card');
    card.dataset.productId = product.id;

    const media = make('div', 'product-media');
    const image = make('img');
    image.src = product.image;
    image.alt = product.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    setImageFallback(image);
    media.append(image);

    const tag = make('span', 'product-label', product.label);
    media.append(tag);

    const favorite = make('button', 'favorite-toggle');
    favorite.type = 'button';
    favorite.dataset.action = 'favorite';
    favorite.setAttribute('aria-label', 'Add ' + product.name + ' to favorites');
    favorite.setAttribute('aria-pressed', String(wishlist.includes(product.id)));
    favorite.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.6 4.6 0 0 1 8.8-1.3 4.6 4.6 0 0 1 8.8 1.3Z"/></svg>';
    media.append(favorite);

    const info = make('div', 'product-info');
    const heading = make('div', 'product-heading');
    heading.append(make('h3', 'product-name', product.name));
    heading.append(make('span', 'product-price', money(product.price)));
    info.append(heading);
    info.append(make('p', 'product-meta', product.category + ' / ' + product.meta));

    const options = make('div', 'product-options');
    const swatches = make('div', 'product-swatches');
    swatches.setAttribute('role', 'group');
    swatches.setAttribute('aria-label', 'Choose a colour for ' + product.name);
    product.colors.forEach((color, index) => {
      const swatch = make('button', 'swatch');
      swatch.type = 'button';
      swatch.style.backgroundColor = color[1];
      swatch.dataset.color = color[0];
      swatch.dataset.hex = color[1];
      swatch.setAttribute('aria-label', color[0]);
      swatch.setAttribute('aria-pressed', String(index === 0));
      swatches.append(swatch);
    });
    const colorLabel = make('span', 'color-name', product.colors[0][0]);
    swatches.append(colorLabel);
    options.append(swatches);

    const size = make('select', 'size-select');
    size.setAttribute('aria-label', 'Choose a size for ' + product.name);
    size.required = true;
    const placeholder = make('option', '', 'Size');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    size.append(placeholder);
    const sizes = product.category === 'Accessories' ? ['One size'] : SIZE_RUN;
    sizes.forEach(value => {
      const option = make('option', '', value);
      option.value = value;
      size.append(option);
    });
    options.append(size);
    info.append(options);

    const add = make('button', 'add-button');
    add.type = 'button';
    add.dataset.action = 'add';
    add.disabled = true;
    add.setAttribute('aria-label', 'Choose a size to add ' + product.name + ' to bag');
    add.append(document.createTextNode('Choose size to add'));
    add.append(make('span', '', '＋'));
    info.append(add);

    card.append(media, info);
    return card;
  }

  function renderGrid(grid) {
    const mode = grid.dataset.productGrid || 'catalog';
    const pageUrl = new URL(window.location.href);
    const query = (byId('catalogSearch') ? byId('catalogSearch').value : pageUrl.searchParams.get('q') || '').trim().toLowerCase();
    const categoryButton = document.querySelector('.filter-chip[aria-pressed="true"]');
    const category = categoryButton ? categoryButton.dataset.category : (pageUrl.searchParams.get('category') || 'all');
    const seasonSelect = byId('seasonFilter');
    const season = seasonSelect ? seasonSelect.value : (pageUrl.searchParams.get('season') || 'all');
    const sort = byId('sortFilter') ? byId('sortFilter').value : 'featured';

    let visible = products.filter(product => {
      if (mode === 'featured' && !product.featured) return false;
      if (mode === 'new' && !product.isNew) return false;
      if (mode === 'seasonal' && !product.season.includes('Autumn') && !product.season.includes('Winter')) return false;
      if (category !== 'all' && product.category.toLowerCase() !== category.toLowerCase()) return false;
      if (season !== 'all' && !product.season.includes(season)) return false;
      if (query && !(product.name + ' ' + product.category + ' ' + product.meta + ' ' + product.season.join(' ')).toLowerCase().includes(query)) return false;
      return true;
    });

    if (sort === 'price-low') visible.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') visible.sort((a, b) => b.price - a.price);
    if (sort === 'name') visible.sort((a, b) => a.name.localeCompare(b.name));
    if (mode === 'featured' || mode === 'new' || mode === 'seasonal') visible = visible.slice(0, Number(grid.dataset.limit) || 24);

    grid.replaceChildren(...visible.map(makeProductCard));
    const count = byId('resultsCount');
    if (count) count.textContent = visible.length + (visible.length === 1 ? ' piece' : ' pieces');
    const empty = byId('catalogEmpty');
    if (empty) empty.hidden = visible.length > 0;
  }

  function renderAllGrids() {
    document.querySelectorAll('[data-product-grid]').forEach(renderGrid);
  }

  function updateCounts() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach(node => {
      node.textContent = itemCount;
      node.setAttribute('aria-label', itemCount + (itemCount === 1 ? ' item in bag' : ' items in bag'));
    });
    document.querySelectorAll('[data-wishlist-count]').forEach(node => {
      node.textContent = wishlist.length;
      node.setAttribute('aria-label', wishlist.length + (wishlist.length === 1 ? ' favorite' : ' favorites'));
    });
    save(STORAGE.cart, cart);
    save(STORAGE.wishlist, wishlist);
  }

  function renderCart() {
    const list = byId('cartItems');
    if (!list) { updateCounts(); return; }
    list.replaceChildren();
    if (!cart.length) {
      list.append(make('p', 'drawer-empty', 'Your bag is clear. Find a piece that feels like you.'));
    } else {
      cart.forEach(item => {
        const product = products.find(entry => entry.id === item.productId);
        if (!product) return;
        const row = make('article', 'cart-line');
        const image = make('img');
        image.src = product.image;
        image.alt = '';
        setImageFallback(image);
        const details = make('div');
        details.append(make('h3', '', product.name));
        details.append(make('p', '', item.color + ' · ' + item.size));
        details.append(make('strong', '', money(product.price * item.quantity)));
        const actions = make('div', 'cart-actions');
        const qty = make('div', 'quantity-control');
        const minus = make('button', '', '−');
        minus.type = 'button';
        minus.dataset.cartAction = 'decrease';
        minus.dataset.cartKey = item.key;
        minus.setAttribute('aria-label', 'Decrease quantity');
        qty.append(minus, make('span', '', String(item.quantity)));
        const plus = make('button', '', '+');
        plus.type = 'button';
        plus.dataset.cartAction = 'increase';
        plus.dataset.cartKey = item.key;
        plus.setAttribute('aria-label', 'Increase quantity');
        qty.append(plus);
        const remove = make('button', 'remove-button', 'Remove');
        remove.type = 'button';
        remove.dataset.cartAction = 'remove';
        remove.dataset.cartKey = item.key;
        actions.append(qty, remove);
        details.append(actions);
        row.append(image, details);
        list.append(row);
      });
    }
    const total = cart.reduce((sum, item) => {
      const product = products.find(entry => entry.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    if (byId('cartSubtotal')) byId('cartSubtotal').textContent = money(total);
    const shipping = byId('shippingProgress');
    if (shipping) {
      if (total >= FREE_SHIPPING) {
        shipping.firstChild.textContent = 'You unlocked complimentary shipping.';
      } else {
        shipping.firstChild.textContent = 'You are ' + money(FREE_SHIPPING - total) + ' away from complimentary shipping.';
      }
      const bar = shipping.querySelector('.progress-track span');
      if (bar) bar.style.width = Math.min(100, total / FREE_SHIPPING * 100) + '%';
    }
    const checkout = byId('checkoutButton');
    if (checkout) checkout.disabled = cart.length === 0;
    updateCounts();
  }

  function renderWishlist() {
    const list = byId('wishlistItems');
    if (!list) { updateCounts(); return; }
    list.replaceChildren();
    const savedProducts = products.filter(product => wishlist.includes(product.id));
    if (!savedProducts.length) {
      list.append(make('p', 'drawer-empty', 'Keep the pieces you love close. Tap the heart on any item to save it.'));
    } else {
      savedProducts.forEach(product => {
        const row = make('article', 'cart-line');
        const image = make('img');
        image.src = product.image;
        image.alt = '';
        setImageFallback(image);
        const details = make('div');
        details.append(make('h3', '', product.name));
        details.append(make('p', '', product.category));
        details.append(make('strong', '', money(product.price)));
        const remove = make('button', 'remove-button', 'Remove');
        remove.type = 'button';
        remove.dataset.wishlistRemove = product.id;
        details.append(remove);
        row.append(image, details);
        list.append(row);
      });
    }
    updateCounts();
  }

  function updateFavoriteButtons() {
    document.querySelectorAll('[data-action="favorite"]').forEach(button => {
      const card = button.closest('.product-card');
      const selected = Boolean(card && wishlist.includes(card.dataset.productId));
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', selected ? 'Remove from favorites' : 'Add to favorites');
    });
  }

  function openDrawer(id) {
    const overlay = byId(id);
    if (!overlay) return;
    closeMobileMenu();
    focusBeforeDrawer = document.activeElement;
    openOverlay = overlay;
    overlay.hidden = false;
    document.body.classList.add('no-scroll');
    window.requestAnimationFrame(() => overlay.classList.add('open'));
    const close = overlay.querySelector('[data-close-overlay]');
    if (close) close.focus();
  }

  function closeDrawer(overlay) {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
    openOverlay = null;
    window.setTimeout(() => { overlay.hidden = true; }, 280);
    if (focusBeforeDrawer && typeof focusBeforeDrawer.focus === 'function') focusBeforeDrawer.focus();
  }

  function closeMobileMenu() {
    const menu = byId('mobileMenu');
    const toggle = byId('menuToggle');
    if (menu) menu.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function setFavorite(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
      wishlist.push(productId);
      showToast('Saved to your favorites.');
    } else {
      wishlist.splice(index, 1);
      showToast('Removed from your favorites.');
    }
    renderWishlist();
    updateFavoriteButtons();
  }

  function addToCart(card) {
    const product = products.find(item => item.id === card.dataset.productId);
    const size = card.querySelector('.size-select');
    const selectedSwatch = card.querySelector('.swatch[aria-pressed="true"]');
    if (!product || !size || !size.value) {
      if (size) {
        size.focus();
        size.reportValidity();
      }
      return;
    }
    const color = selectedSwatch ? selectedSwatch.dataset.color : product.colors[0][0];
    const key = product.id + ':' + size.value + ':' + color;
    const existing = cart.find(item => item.key === key);
    if (existing) {
      if (existing.quantity >= 99) { showToast('That size is at the bag limit.'); return; }
      existing.quantity += 1;
    } else {
      cart.push({ key, productId: product.id, size: size.value, color, quantity: 1 });
    }
    renderCart();
    showToast(product.name + ' added to your bag.');
    openDrawer('cartOverlay');
  }

  function setActiveNavigation() {
    const page = document.body.dataset.page;
    document.querySelectorAll('[data-nav-page]').forEach(link => {
      if (link.dataset.navPage === page) link.setAttribute('aria-current', 'page');
    });
  }

  function applyQueryToShop() {
    const params = new URLSearchParams(window.location.search);
    const search = byId('catalogSearch');
    if (search && params.has('q')) search.value = params.get('q');
    const season = byId('seasonFilter');
    if (season && params.has('season')) season.value = params.get('season');
    const category = params.get('category');
    if (category) {
      document.querySelectorAll('.filter-chip').forEach(button => {
        const active = button.dataset.category.toLowerCase() === category.toLowerCase();
        button.setAttribute('aria-pressed', String(active));
      });
    }
  }

  document.addEventListener('click', event => {
    const add = event.target.closest('[data-action="add"]');
    if (add) { addToCart(add.closest('.product-card')); return; }
    const favorite = event.target.closest('[data-action="favorite"]');
    if (favorite) { setFavorite(favorite.closest('.product-card').dataset.productId); return; }
    const swatch = event.target.closest('.swatch');
    if (swatch) {
      const group = swatch.closest('.product-swatches');
      group.querySelectorAll('.swatch').forEach(item => item.setAttribute('aria-pressed', String(item === swatch)));
      const label = group.querySelector('.color-name');
      if (label) label.textContent = swatch.dataset.color;
      return;
    }
    const close = event.target.closest('[data-close-overlay]');
    if (close) { closeDrawer(close.closest('.overlay')); return; }
    const cartAction = event.target.closest('[data-cart-action]');
    if (cartAction) {
      const item = cart.find(entry => entry.key === cartAction.dataset.cartKey);
      if (!item) return;
      if (cartAction.dataset.cartAction === 'increase' && item.quantity < 99) item.quantity += 1;
      if (cartAction.dataset.cartAction === 'decrease') item.quantity -= 1;
      if (cartAction.dataset.cartAction === 'remove' || item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
      renderCart();
      return;
    }
    const removeFavorite = event.target.closest('[data-wishlist-remove]');
    if (removeFavorite) {
      const index = wishlist.indexOf(removeFavorite.dataset.wishlistRemove);
      if (index >= 0) wishlist.splice(index, 1);
      renderWishlist();
      updateFavoriteButtons();
      return;
    }
    const open = event.target.closest('[data-open-overlay]');
    if (open) { openDrawer(open.dataset.openOverlay); return; }
    if (event.target.classList.contains('overlay')) closeDrawer(event.target);
  });

  document.addEventListener('change', event => {
    if (event.target.matches('.size-select')) {
      const card = event.target.closest('.product-card');
      const button = card.querySelector('[data-action="add"]');
      button.disabled = !event.target.value;
      button.firstChild.textContent = event.target.value ? 'Add to bag · ' + event.target.value : 'Choose size to add';
      button.setAttribute('aria-label', event.target.value ? 'Add size ' + event.target.value + ' to bag' : 'Choose a size to add this item');
    }
    if (event.target.matches('#sortFilter, #seasonFilter')) renderAllGrids();
  });

  document.addEventListener('input', event => {
    if (event.target.matches('#catalogSearch')) renderAllGrids();
  });

  document.querySelectorAll('[data-product-grid]').forEach(grid => {
    grid.addEventListener('click', event => {
      if (event.target.closest('[data-action]') || event.target.closest('.swatch')) return;
    });
  });

  const filterList = byId('filterList');
  if (filterList) filterList.addEventListener('click', event => {
    const button = event.target.closest('.filter-chip');
    if (!button) return;
    filterList.querySelectorAll('.filter-chip').forEach(chip => chip.setAttribute('aria-pressed', String(chip === button)));
    renderAllGrids();
  });

  const globalSearchPanel = byId('globalSearchPanel');
  document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', () => {
    if (!globalSearchPanel) return;
    globalSearchPanel.hidden = false;
    const input = byId('globalSearchInput');
    if (input) input.focus();
    closeMobileMenu();
  }));
  document.querySelectorAll('[data-close-search]').forEach(button => button.addEventListener('click', () => {
    if (globalSearchPanel) globalSearchPanel.hidden = true;
  }));
  const searchForm = byId('globalSearchForm');
  if (searchForm) searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = byId('globalSearchInput').value.trim();
    window.location.href = 'shop.html' + (query ? '?q=' + encodeURIComponent(query) : '');
  });

  const menuToggle = byId('menuToggle');
  if (menuToggle) menuToggle.addEventListener('click', () => {
    const menu = byId('mobileMenu');
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', closeMobileMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (globalSearchPanel && !globalSearchPanel.hidden) globalSearchPanel.hidden = true;
      if (openOverlay) closeDrawer(openOverlay);
      closeMobileMenu();
    }
    if (event.key === 'Tab' && openOverlay) {
      const focusable = Array.from(openOverlay.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  const newsletter = byId('newsletterForm');
  if (newsletter) newsletter.addEventListener('submit', event => {
    event.preventDefault();
    const status = byId('newsletterStatus');
    status.textContent = 'Thanks for your interest. This class-project preview is not connected to an email service.';
    newsletter.reset();
  });

  const contactForm = byId('contactForm');
  if (contactForm) contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const status = byId('contactStatus');
    const submit = contactForm.querySelector('[type="submit"]');
    const values = Object.fromEntries(new FormData(contactForm).entries());
    status.textContent = 'Sending your note…';
    submit.disabled = true;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'The message could not be sent.');
      status.textContent = result.message;
      contactForm.reset();
    } catch (error) {
      status.textContent = window.location.protocol === 'file:'
        ? 'Start the included local server to use this demo contact form.'
        : (error.message || 'The local contact service is unavailable.');
    } finally {
      submit.disabled = false;
    }
  });

  const checkout = byId('checkoutButton');
  if (checkout) checkout.addEventListener('click', () => {
    const note = byId('cartNote');
    if (note) note.textContent = 'Demo checkout only. Connect a payment provider before accepting real orders.';
  });

  applyQueryToShop();
  setActiveNavigation();
  renderAllGrids();
  renderCart();
  renderWishlist();
})();
