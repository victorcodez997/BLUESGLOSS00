if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

/* ── DATA ────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id:1, name:"Midnight Kiss", type:"Gloss", cat:"gloss", price:9000,
    desc:"Deep navy shimmer that makes your lips the star of every room. A statement shade with all-day wear.",
    fullDesc:"Midnight Kiss is our most dramatic gloss — a deep navy shimmer that catches light from every angle. Formulated with vitamin E and jojoba oil, it gives you a bold, glossy finish that lasts through dinner, dancing, and everything in between. Perfect for dark skin tones and anyone who loves a statement lip.",
    colors:["#0D1B3E","#2C5FC4"], pexels:null,
    ingredients:["Vitamin E","Jojoba Oil","Castor Oil","Mica","Natural Wax","Aloe Vera"],
    howTo:"Apply from the centre of your upper lip, follow the cupid's bow, then fill in. For a deeper effect, apply a second layer after 30 seconds.",
    badge:"Bestseller", badgeClass:"blue"
  },
  {
    id:2, name:"Cotton Cloud", type:"Gloss", cat:"gloss", price:8500,
    desc:"Sheer, soft-pink glow for your everyday effortless look.",
    fullDesc:"Cotton Cloud is your new everyday gloss. A sheer soft-pink tint with a high-shine, non-sticky formula that feels like nothing on your lips. Infused with shea butter for lasting comfort, this is the gloss you'll reach for every single morning.",
    colors:["#FFB3CB","#FFE0EC"], pexels:2533266,
    ingredients:["Shea Butter","Vitamin E","Castor Oil","Rose Extract","Natural Shimmer"],
    howTo:"Apply one coat for a natural flush. Layer for more colour. Works beautifully over lip liner.",
    badge:"", badgeClass:""
  },
  {
    id:3, name:"Berry Burst", type:"Gloss", cat:"gloss", price:9000,
    desc:"Rich berry that says bold without even trying.",
    fullDesc:"Berry Burst is a rich, plummy gloss that delivers serious pigment in one swipe. The formula is loaded with antioxidant-rich berry extracts that nourish while they colour. From Lagos to Abuja, this is the shade everyone's talking about.",
    colors:["#6B1A4A","#B8327A"], pexels:null,
    ingredients:["Berry Extract","Castor Oil","Vitamin E","Carnauba Wax","Shea Butter","Natural Pigment"],
    howTo:"Apply directly from the wand. Blot once for a matte-ish finish or leave glossy for full shine.",
    badge:"New", badgeClass:"rose"
  },
  {
    id:4, name:"Champagne Glow", type:"Gloss", cat:"gloss", price:9500,
    desc:"Warm nude shimmer with subtle champagne sparkle. Universally flattering.",
    fullDesc:"Champagne Glow is your go-to for every occasion. A warm nude base with ultra-fine champagne shimmer that flatters every skin tone — from the fairest to the deepest. The formula is enriched with hyaluronic acid to plump and hydrate.",
    colors:["#C9A96E","#E8D5B7"], pexels:4252890,
    ingredients:["Hyaluronic Acid","Champagne Mica","Jojoba Oil","Vitamin C","Natural Wax"],
    howTo:"Apply for an everyday polished look. Layer over your favourite nude liner for a fuller-lip effect.",
    badge:"Fan Fave", badgeClass:"gold"
  },
  {
    id:5, name:"Rose Velvet Balm", type:"Balm", cat:"balm", price:7500,
    desc:"Tinted balm with a hint of rose and serious hydration.",
    fullDesc:"Rose Velvet Balm gives you a natural rosy tint while delivering deep, lasting hydration. Formulated with shea butter, rose hip oil, and beeswax, it repairs dry and chapped lips overnight. Wear it alone or as a base for your favourite gloss.",
    colors:["#C97B93","#FFADC6"], pexels:1820808,
    ingredients:["Rose Hip Oil","Shea Butter","Beeswax","Vitamin E","Rose Extract","Aloe Vera"],
    howTo:"Apply generously morning and night. Use as a base before gloss application for extra moisture retention.",
    badge:"", badgeClass:""
  },
  {
    id:6, name:"Ocean Mist", type:"Gloss", cat:"gloss", price:8500,
    desc:"Cool blue-tinted clear for that fresh, dewy finish.",
    fullDesc:"Ocean Mist is a barely-there blue-tinted clear gloss that gives your lips an impossibly fresh, dewy look. A cult favourite for minimalist beauty lovers — one swipe and your lips look effortlessly polished.",
    colors:["#1A7A9A","#5BC4E8"], pexels:null,
    ingredients:["Blue Mica","Castor Oil","Vitamin E","Cucumber Extract","Aloe Vera"],
    howTo:"Apply alone for a fresh editorial look, or layer over any lipstick for a glossy dimension.",
    badge:"New", badgeClass:"rose"
  },
  {
    id:7, name:"Coral Kiss", type:"Gloss", cat:"gloss", price:9000,
    desc:"Sun-drenched coral that pairs with literally everything.",
    fullDesc:"Coral Kiss is the warm-toned gloss that works for every season and every skin tone. The sun-drenched coral shade with golden undertones brings life to your look instantly. A favourite for Afrocentric beauty editorial shoots.",
    colors:["#E07040","#F5A070"], pexels:3338682,
    ingredients:["Coral Pigment","Vitamin E","Jojoba Oil","Mango Butter","Natural Wax","SPF 15"],
    howTo:"Apply alone for a pop of colour. Pairs beautifully with bronzer and a natural eye look.",
    badge:"", badgeClass:""
  },
  {
    id:8, name:"Vanilla Dream Balm", type:"Balm", cat:"balm", price:6500,
    desc:"Ultra-moisturising clear balm with a light vanilla scent.",
    fullDesc:"Vanilla Dream Balm is the ultimate hydration hero. A clear, non-tinted formula enriched with vanilla extract, sweet almond oil, and vitamin E. The scent is warm, comforting, and subtle — never overwhelming. Perfect for dry harmattan weather.",
    colors:["#D4B896","#EED8C0"], pexels:3757952,
    ingredients:["Vanilla Extract","Sweet Almond Oil","Vitamin E","Shea Butter","Beeswax","Aloe Vera"],
    howTo:"Apply liberally throughout the day and before bed. Works as a lip mask overnight — apply a thick layer before sleeping.",
    badge:"", badgeClass:""
  },
  {
    id:9, name:"Peach Sunrise", type:"Gloss", cat:"gloss", price:8500,
    desc:"Soft peach with golden undertones — your morning must-have.",
    fullDesc:"Peach Sunrise is that effortless morning glow in gloss form. The soft peach shade with warm golden undertones brightens your complexion instantly. Lightweight, comfortable wear that keeps your lips moisturised all day.",
    colors:["#E8903A","#F5C07A"], pexels:null,
    ingredients:["Peach Extract","Vitamin C","Castor Oil","Carnauba Wax","Natural Shimmer"],
    howTo:"Apply one coat for a natural peach flush. Build up for a bolder statement.",
    badge:"", badgeClass:""
  },
  {
    id:10, name:"Ruby Nights", type:"Gloss", cat:"gloss", price:10000,
    desc:"Iconic red that feels just as classic as it looks.",
    fullDesc:"Ruby Nights is your classic red — elevated. A rich, deep ruby gloss that delivers high-impact colour with a glossy, mirror-like finish. Long-wearing formula with vitamin E and jojoba for comfortable all-night wear. This is the one you wear when you mean business.",
    colors:["#8B0020","#D4002C"], pexels:2586973,
    ingredients:["Ruby Pigment","Vitamin E","Jojoba Oil","Castor Oil","Carnauba Wax","Long-Wear Polymer"],
    howTo:"Apply with precision following your lip line. Use a lip liner for extra definition and longevity.",
    badge:"Bestseller", badgeClass:"blue"
  },
  {
    id:11, name:"Lavender Haze", type:"Gloss", cat:"gloss", price:9500,
    desc:"Purple shimmer for when you want people to stare.",
    fullDesc:"Lavender Haze is our most editorial gloss — a dreamy purple-lilac shimmer that catches every light. Limited edition formula with ultra-fine holographic shimmer. For the bold, the creative, and the unapologetically expressive.",
    colors:["#6040A8","#A87DD4"], pexels:null,
    ingredients:["Purple Mica","Holographic Shimmer","Vitamin E","Castor Oil","Argan Oil"],
    howTo:"Apply for a full editorial effect. Layer over a nude lip liner for extra definition. Best worn with minimal eye makeup.",
    badge:"Limited", badgeClass:"lim"
  },
  {
    id:12, name:"Honey Dew Balm", type:"Balm", cat:"balm", price:7500,
    desc:"Golden honey-infused balm that nourishes deeply.",
    fullDesc:"Honey Dew Balm harnesses the natural power of raw honey and beeswax to deliver intense, lasting nourishment to your lips. A light golden tint adds a natural warmth. Perfect for combating dry, harmattan-cracked lips. Gentle enough for sensitive lips.",
    colors:["#C8960C","#E8C84A"], pexels:null,
    ingredients:["Raw Honey","Beeswax","Jojoba Oil","Vitamin E","Sweet Almond Oil","Calendula"],
    howTo:"Apply generously throughout the day. For intensive repair, apply a thick layer before bed and wake up to soft, healed lips.",
    badge:"", badgeClass:""
  },
];

const FEATURED_IDS = [1, 3, 4, 10];

/* ── CART STATE ──────────────────────────────────────────── */
let cart = [];

/* ── RENDER HELPERS ──────────────────────────────────────── */
function tubeSVG(isBalm) {
  if (isBalm) return `<svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    <rect x="8" y="18" width="64" height="28" fill="rgba(255,255,255,0.28)"/>
    <ellipse cx="40" cy="18" rx="32" ry="10" fill="rgba(255,255,255,0.38)"/>
    <ellipse cx="40" cy="46" rx="32" ry="8"  fill="rgba(255,255,255,0.22)"/>
    <ellipse cx="28" cy="15" rx="14" ry="4"  fill="rgba(255,255,255,0.15)"/>
  </svg>`;
  return `<svg width="52" height="120" viewBox="0 0 52 120" fill="none">
    <rect x="8"  y="4"  width="36" height="46" rx="12" fill="rgba(255,255,255,0.38)"/>
    <rect x="10" y="48" width="32" height="62" rx="8"  fill="rgba(255,255,255,0.26)"/>
    <rect x="14" y="54" width="10" height="52" rx="5"  fill="rgba(255,255,255,0.12)"/>
    <ellipse cx="26" cy="113" rx="8" ry="5" fill="rgba(255,255,255,0.42)"/>
  </svg>`;
}

function pexelsImg(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;
}

function makeCard(p, delay = 0) {
  const isBalm = p.cat === 'balm';
  const badge  = p.badge ? `<div class="card-badge ${p.badgeClass}">${p.badge}</div>` : '';
  const imgContent = p.pexels
    ? `<img src="${pexelsImg(p.pexels)}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0" onload="onImgLoad(this)" onerror="this.remove()">`
    : '';
  const delayAttr = delay > 0 ? ` data-delay="${Math.min(delay, 6)}"` : '';
  return `
    <div class="product-card" data-category="${p.cat}" data-id="${p.id}" data-anim="up"${delayAttr} onclick="showProductDetail(${p.id})" style="cursor:pointer">
      <div class="card-img" style="background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]})">
        ${imgContent}
        ${badge}
        <button class="card-wish" onclick="event.stopPropagation();toggleWish(this)" title="Wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
        ${tubeSVG(isBalm)}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-type">${p.type}</span>
          <span class="card-price">₦${p.price.toLocaleString()}</span>
        </div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <button class="card-atc" onclick="event.stopPropagation();addToCart(${p.id}, this)">Add to Bag</button>
      </div>
    </div>`;
}

/* ── PRODUCT DETAIL ──────────────────────────────────────── */
function showProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const sparkleSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;
  const imgHtml = p.pexels
    ? `<img src="${pexelsImg(p.pexels)}" alt="${p.name}" loading="lazy" onload="onImgLoad(this)" onerror="this.style.display='none';document.getElementById('detail-fallback-${p.id}').style.display='flex'">
       <div id="detail-fallback-${p.id}" class="detail-img-fallback" style="display:none;background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]});position:absolute;inset:0;">${sparkleSVG}</div>`
    : `<div class="detail-img-fallback" style="background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]})">${sparkleSVG}</div>`;

  document.getElementById('detail-img-wrap').innerHTML = imgHtml;

  const waMsg = encodeURIComponent(`Hi BluesGloss! 👋 I'd love to order:\n\n*${p.name}* (${p.type}) — ₦${p.price.toLocaleString()}\n\nPlease let me know the next steps! 🩷`);
  const ings  = p.ingredients.map(i => `<span class="detail-ing-tag">${i}</span>`).join('');

  document.getElementById('detail-info').innerHTML = `
    <div class="detail-type-pill" data-anim="up">${p.type}</div>
    <h1 class="detail-name">${p.name}</h1>
    <div class="detail-price">₦${p.price.toLocaleString()}</div>
    <p class="detail-desc">${p.fullDesc}</p>
    <div class="detail-sec-label">Key Ingredients</div>
    <div class="detail-ingredients">${ings}</div>
    <div class="detail-sec-label">How to Apply</div>
    <div class="detail-howto">${p.howTo}</div>
    <div class="detail-actions">
      <button class="btn-detail-bag" onclick="addToCart(${p.id},this)">Add to Bag</button>
      <a class="btn-wa-order" href="https://wa.me/2347037893484?text=${waMsg}" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        Order on WhatsApp
      </a>
    </div>`;

  sessionStorage.setItem('bg-product', p.id);
  showPage('product-detail');
  requestAnimationFrame(() => observeAll());
}

/* ── INIT GRIDS ──────────────────────────────────────────── */
document.getElementById('featured-grid').innerHTML =
  FEATURED_IDS.map((id, i) => makeCard(PRODUCTS.find(p => p.id === id), i + 1)).join('');

document.getElementById('products-grid').innerHTML =
  PRODUCTS.map((p, i) => makeCard(p, i + 1)).join('');

requestAnimationFrame(() => observeAll());

/* ── PAGE NAV ────────────────────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === id);
  });
  document.querySelectorAll('[data-mob-page]').forEach(l => {
    l.classList.toggle('active', l.dataset.mobPage === id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sessionStorage.setItem('bg-page', id);
}

/* ── RESTORE PAGE ON RELOAD ─────────────────────────────── */
(function restoreSession() {
  const page      = sessionStorage.getItem('bg-page');
  const productId = parseInt(sessionStorage.getItem('bg-product'));
  if (!page || page === 'home') return;
  if (page === 'product-detail' && productId) {
    showProductDetail(productId);
  } else {
    showPage(page);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
})();

/* ── MOBILE NAV ──────────────────────────────────────────── */
function toggleMobileNav() {
  const open = document.getElementById('mobile-nav').classList.toggle('open');
  document.getElementById('mob-overlay').classList.toggle('open', open);
  document.getElementById('hamburger').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('mob-overlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── FILTER ──────────────────────────────────────────────── */
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#products-grid .product-card').forEach(card => {
    const show = cat === 'all' || card.dataset.category === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

/* ── CART ────────────────────────────────────────────────── */
function addToCart(productId, btn) {
  const p = PRODUCTS.find(x => x.id === productId);
  cart.push({ ...p, uid: Date.now() });
  updateCartBadge();
  renderCartItems();
  showToast(`${p.name} added to bag!`);
  btn.classList.add('adding');
  btn.textContent = '✓ Added';
  setTimeout(() => { btn.classList.remove('adding'); btn.textContent = 'Add to Bag'; }, 1500);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  badge.textContent = cart.length;
  badge.classList.toggle('show', cart.length > 0);
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></span>Your bag is empty.<br/>Time to fix that.</div>`;
    footer.style.display = 'none';
    return;
  }
  const total = cart.reduce((s, p) => s + p.price, 0);
  el.innerHTML = cart.map(p => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]})"></div>
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-sub">${p.type}</div>
      </div>
      <div class="cart-item-price">₦${p.price.toLocaleString()}</div>
    </div>`).join('');
  footer.style.display = 'block';
  document.getElementById('cart-total-price').textContent = `₦${total.toLocaleString()}`;
}

function openCart() {
  renderCartItems();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) return;
  const lines = cart.map(p => `• ${p.name} (${p.type}) — ₦${p.price.toLocaleString()}`).join('\n');
  const total = cart.reduce((s, p) => s + p.price, 0);
  const msg = `Hi BluesGloss! 👋 I'd like to place an order:\n\n${lines}\n\n*Total: ₦${total.toLocaleString()}*\n\nPlease let me know the next steps! 🩷`;
  window.open(`https://wa.me/2347037893484?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

/* ── WISHLIST ─────────────────────────────────────────────── */
const HEART_OUTLINE = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const HEART_FILLED  = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="var(--rose)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

function toggleWish(btn) {
  btn.classList.toggle('liked');
  btn.innerHTML = btn.classList.contains('liked') ? HEART_FILLED : HEART_OUTLINE;
}

/* ── FAQ ACCORDION ────────────────────────────────────────── */
function toggleFAQ(btn) {
  const item   = btn.parentElement;
  const answer = btn.nextElementSibling;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight = '';
  });
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

/* ── FORMS ────────────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  showToast('You\'re in! Welcome to the BluesGloss family.');
  e.target.reset();
}

function handleContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll be in touch soon.');
  e.target.reset();
}

/* ── TOAST ────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ── NAVBAR SCROLL ────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 40 ? 'rgba(11,20,40,0.97)' : 'rgba(11,20,40,0.88)';
});

/* ── PRELOADER ────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1400);
});

/* ── SCROLL ANIMATIONS (IntersectionObserver) ─────────────── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
  document.querySelectorAll('[data-anim]').forEach(el => {
    if (!el.classList.contains('in')) animObserver.observe(el);
  });
}
observeAll();

/* ── IMAGE LAZY FADE ──────────────────────────────────────── */
function onImgLoad(img) {
  img.classList.add('img-loaded');
}
