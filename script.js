document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Preloader ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2100);
});

/* ---------- Navbar scroll state ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---------- Mobile drawer ---------- */
const burger = document.getElementById('burgerBtn');
const drawer = document.getElementById('mobileDrawer');
const scrim = document.getElementById('scrim');
const drawerClose = document.getElementById('drawerClose');
function openDrawer(){
  drawer.classList.add('open'); scrim.classList.add('show');
  burger.setAttribute('aria-expanded','true');
}
function closeDrawer(){
  drawer.classList.remove('open'); scrim.classList.remove('show');
  burger.setAttribute('aria-expanded','false');
}
burger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

/* ---------- Scroll reveal via IntersectionObserver ---------- */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* ---------- Product data (12 items) ---------- */
const PRODUCTS = [
  { id:'noir-velours',    name:'Noir Velours',     notes:'Oud · Black Amber · Leather',       desc:'A midnight accord of smoked oud wrapped in soft leather.',        price:8400,  liquid:'#2b1210', cap:'#C9A75A', shape:'square' },
  { id:'ambre-royale',    name:'Ambre Royale',     notes:'Amber · Vanilla · Tonka',            desc:'Golden amber warmed by tonka bean and a whisper of vanilla.',     price:7900,  liquid:'#8a5a1e', cap:'#C9A75A', shape:'round' },
  { id:'rose-ecarlate',   name:'Rose Écarlate',    notes:'Bulgarian Rose · Saffron · Musk',    desc:'A deep crimson rose sharpened with saffron.',                     price:8900,  liquid:'#7a1f2b', cap:'#C9A75A', shape:'facet' },
  { id:'oud-imperial',    name:'Oud Impérial',     notes:'Cambodian Oud · Rose · Spice',       desc:'Our most opulent accord — aged oud at full strength.',            price:11200, liquid:'#3a1408', cap:'#E4CE97', shape:'square' },
  { id:'santal-blanc',    name:'Santal Blanc',     notes:'Mysore Sandalwood · Iris · Musk',    desc:'Creamy sandalwood softened by iris.',                             price:7500,  liquid:'#d9c9a8', cap:'#C9A75A', shape:'round' },
  { id:'musc-dore',       name:'Musc Doré',        notes:'White Musk · Jasmine · Amberwood',   desc:'A luminous skin-scent of white musk and jasmine.',                price:6900,  liquid:'#e8dcc2', cap:'#C9A75A', shape:'facet' },
  { id:'iris-nocturne',   name:'Iris Nocturne',    notes:'Iris · Violet · Grey Amber',         desc:'Powdery iris at dusk, cool and enigmatic.',                       price:9200,  liquid:'#4b3f57', cap:'#E4CE97', shape:'square' },
  { id:'vetiver-sauvage', name:'Vetiver Sauvage',  notes:'Vetiver · Bergamot · Cedar',         desc:'Green, earthy vetiver cut with bright bergamot.',                 price:7200,  liquid:'#3f5a3a', cap:'#C9A75A', shape:'round' },
  { id:'cedre-silencieux',name:'Cèdre Silencieux', notes:'Cedarwood · Iris · Musk',            desc:'Quiet cedar and soft musk — a scent that settles rather than announces.', price:6700, liquid:'#5c4630', cap:'#C9A75A', shape:'facet' },
  { id:'fleur-de-nuit',   name:'Fleur de Nuit',    notes:'Tuberose · Jasmine · Sandalwood',    desc:'Heady night-blooming florals over warm sandalwood.',              price:8100,  liquid:'#6b1f3a', cap:'#E4CE97', shape:'square' },
  { id:'ambre-noir',      name:'Ambre Noir',       notes:'Black Amber · Patchouli · Vanilla',  desc:'A darker take on amber, deepened with patchouli.',                price:9700,  liquid:'#241512', cap:'#C9A75A', shape:'round' },
  { id:'safran-doux',     name:'Safran Doux',      notes:'Saffron · Rose · Honey',             desc:'Golden saffron softened with honey and a trace of rose.',        price:8600,  liquid:'#a5641f', cap:'#E4CE97', shape:'facet' }
];

/* Generates a distinctive inline SVG bottle illustration per product —
   custom vector art, so no external images or licensing concerns. */
function bottleSVG(p, suffix=''){
  const uid = p.id + suffix;
  const bodyPath = {
    square: `M28 34 Q22 42 22 55 L22 165 Q22 175 32 175 L68 175 Q78 175 78 165 L78 55 Q78 42 72 34 Z`,
    round:  `M50 34 C24 34 22 55 22 70 L22 160 C22 172 30 176 50 176 C70 176 78 172 78 160 L78 70 C78 55 76 34 50 34 Z`,
    facet:  `M30 34 L70 34 L78 60 L78 165 Q78 176 66 176 L34 176 Q22 176 22 165 L22 60 Z`
  }[p.shape];
  return `
  <svg class="card-glass" viewBox="0 0 100 190" role="img" aria-label="${p.name} bottle illustration">
    <defs>
      <linearGradient id="liq-${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.liquid}" stop-opacity=".95"/>
        <stop offset="100%" stop-color="${p.liquid}" stop-opacity=".65"/>
      </linearGradient>
      <linearGradient id="glass-${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity=".18"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="38" y="8" width="24" height="16" rx="3" fill="${p.cap}" opacity=".9"/>
    <rect x="44" y="22" width="12" height="12" fill="${p.cap}" opacity=".6"/>
    <path d="${bodyPath}" fill="url(#liq-${uid})" stroke="${p.cap}" stroke-width="1.2"/>
    <path d="${bodyPath}" fill="url(#glass-${uid})"/>
    <rect x="26" y="98" width="48" height="30" fill="#0B0B0C" opacity=".55"/>
    <text x="50" y="117" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="7.5" fill="${p.cap}" letter-spacing="1.5">VELOURA</text>
  </svg>`;
}

function hexToRgba(hex, alpha){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ---------- Render product grid ---------- */
const PRODUCT_PHOTOS = [
  'https://images.unsplash.com/photo-1592842312573-dca0b185d2e0?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591892212776-a09de24dbe84?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590580463662-88d585eda98f?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1708265500552-c256df13d3ca?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564644411635-5ec7c9aca726?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588163282942-bdc63a1d57ab?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601284687405-78283d7e3b2d?q=80&w=600&auto=format&fit=crop'
];
const collectionGrid = document.getElementById('collectionGrid');
PRODUCTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.transitionDelay = `${(i % 6) * 0.11 + 0.04}s`;
  const wash = `radial-gradient(90% 90% at 100% 110%, ${hexToRgba(p.cap,.14)} 0%, transparent 60%),
                linear-gradient(160deg,#151013,#0c0808 75%)`;
  const photo = PRODUCT_PHOTOS[i % PRODUCT_PHOTOS.length];
  card.innerHTML = `
    <div class="card-inner" data-tilt style="background:${wash};">
      <div class="card-photo" style="background-image:url('${photo}');" role="img" aria-label="${p.name} perfume bottle photograph"></div>
      <h3 class="serif">${p.name}</h3>
      <span class="notes">${p.notes}</span>
      <p class="desc">${p.desc}</p>
      <span class="price">₹${p.price.toLocaleString('en-IN')}</span>
      <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
    </div>`;
  collectionGrid.appendChild(card);
});

/* ---------- Render gallery: real perfume photography from Unsplash, tinted with each scent's palette ---------- */
const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1592842312573-dca0b185d2e0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564644411635-5ec7c9aca726?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588163282942-bdc63a1d57ab?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591892212776-a09de24dbe84?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601284687405-78283d7e3b2d?q=80&w=800&auto=format&fit=crop'
];
const galleryGrid = document.getElementById('galleryGrid');
const galleryHeights = [220,150,260,190,230,170,210,150,240,180,200,160];
PRODUCTS.forEach((p, i) => {
  const tile = document.createElement('div');
  tile.className = 'masonry-item';
  const h = galleryHeights[i % galleryHeights.length];
  const tint = `linear-gradient(160deg, ${hexToRgba(p.liquid,.38)}, transparent 55%),
                radial-gradient(100% 120% at 100% 100%, ${hexToRgba(p.cap,.22)} 0%, transparent 55%)`;
  const photo = GALLERY_IMAGES[i % GALLERY_IMAGES.length];
  tile.innerHTML = `
    <div class="ph" style="height:${h}px;background:${tint}, url('${photo}');background-size:cover;background-position:center;">
    </div>
    <div class="zoom-overlay"><span>${p.name}</span></div>`;
  galleryGrid.appendChild(tile);
});

/* ---------- 3D tilt on product cards ---------- */
document.querySelectorAll('[data-tilt]').forEach(card => {
  const strength = 12;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
  });
});
// Re-observe cards for scroll reveal now that they exist in the DOM
document.querySelectorAll('#collectionGrid.reveal-stagger').forEach(el => io.observe(el));

/* ---------- Cart (in-memory, resets on reload — no localStorage) ---------- */
const cart = {}; // { id: qty }
const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  const product = PRODUCTS.find(p => p.id === id);
  showToast(`${product.name} added to cart`);
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] += delta;
  if(cart[id] <= 0) delete cart[id];
  renderCart();
}
function removeFromCart(id){
  delete cart[id];
  renderCart();
}

document.getElementById('collectionGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('.add-to-cart');
  if(!btn) return;
  addToCart(btn.dataset.id);
  btn.textContent = 'Added ✓';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1400);
});

const cartItemsEl = document.getElementById('cartItems');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartCountEl = document.getElementById('cartCount');
const cartCountMobileEl = document.getElementById('cartCountMobile');

function renderCart(){
  const ids = Object.keys(cart);
  const totalCount = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCountEl.textContent = totalCount;
  cartCountMobileEl.textContent = totalCount;

  if(ids.length === 0){
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty. Discover the collection below.</p>';
    cartSubtotalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;
  cartItemsEl.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(prod => prod.id === id);
    const qty = cart[id];
    const lineTotal = p.price * qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <div class="thumb">${bottleSVG(p, '-cart')}</div>
        <div class="ci-info">
          <h4 class="serif">${p.name}</h4>
          <div class="ci-price">₹${p.price.toLocaleString('en-IN')} each</div>
          <div class="qty-row">
            <button data-action="dec" data-id="${id}" aria-label="Decrease quantity">−</button>
            <span class="qty-val">${qty}</span>
            <button data-action="inc" data-id="${id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="remove-item" data-action="remove" data-id="${id}">Remove</button>
        </div>
      </div>`;
  }).join('');
  cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if(!btn) return;
  const { action, id } = btn.dataset;
  if(action === 'inc') changeQty(id, 1);
  if(action === 'dec') changeQty(id, -1);
  if(action === 'remove') removeFromCart(id);
});

/* ---------- Cart drawer open/close (shares the scrim with mobile nav) ---------- */
const cartDrawer = document.getElementById('cartDrawer');
function openCart(){ cartDrawer.classList.add('open'); scrim.classList.add('show'); }
function closeCart(){ cartDrawer.classList.remove('open'); scrim.classList.remove('show'); }
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartBtnMobile').addEventListener('click', openCart);
document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
scrim.addEventListener('click', () => { closeDrawer(); closeCart(); });

/* ---------- Checkout: WhatsApp / Email order summary ---------- */
const WHATSAPP_NUMBER = '910000000000'; // Placeholder — replace with real number, country code first, no + or spaces
const ORDER_EMAIL = 'orders@veloura.com'; // Placeholder

function buildOrderSummary(){
  const ids = Object.keys(cart);
  let subtotal = 0;
  const lines = ids.map(id => {
    const p = PRODUCTS.find(prod => prod.id === id);
    const qty = cart[id];
    subtotal += p.price * qty;
    return `${p.name} x${qty} — ₹${(p.price * qty).toLocaleString('en-IN')}`;
  });
  return { lines, subtotal };
}

document.getElementById('checkoutWhatsapp').addEventListener('click', () => {
  if(Object.keys(cart).length === 0){ showToast('Your cart is empty'); return; }
  const { lines, subtotal } = buildOrderSummary();
  const text = `Hello VELOURA, I'd like to order:%0A%0A${lines.join('%0A')}%0A%0ASubtotal: ₹${subtotal.toLocaleString('en-IN')}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
});

document.getElementById('checkoutEmail').addEventListener('click', () => {
  if(Object.keys(cart).length === 0){ showToast('Your cart is empty'); return; }
  const { lines, subtotal } = buildOrderSummary();
  const subject = encodeURIComponent('New VELOURA Order');
  const body = encodeURIComponent(`Hello VELOURA, I'd like to order:\n\n${lines.join('\n')}\n\nSubtotal: ₹${subtotal.toLocaleString('en-IN')}`);
  window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
});

renderCart();

/* ---------- Hero cursor parallax ---------- */
const heroContent = document.querySelector('.hero-content');
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);
  heroContent.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
});

/* ---------- Gold particle shimmer canvas ---------- */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
function initParticles(){
  const count = Math.floor((canvas.width * canvas.height) / 22000);
  particles = Array.from({length: count}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    vy: Math.random() * 0.25 + 0.05,
    o: Math.random() * 0.5 + 0.15,
    tw: Math.random() * Math.PI * 2
  }));
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.y -= p.vy;
    p.tw += 0.02;
    if(p.y < -5) p.y = canvas.height + 5;
    const alpha = p.o * (0.6 + 0.4 * Math.sin(p.tw));
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(201,167,90,${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
resizeCanvas(); initParticles(); animateParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

/* ---------- Animated counter ---------- */
const counterEl = document.getElementById('counter');
let counterStarted = false;
const counterIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !counterStarted){
      counterStarted = true;
      const target = parseInt(counterEl.dataset.target, 10);
      const duration = 2200;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counterEl.textContent = Math.floor(eased * target).toLocaleString('en-IN');
        if(progress < 1) requestAnimationFrame(tick);
        else counterEl.textContent = target.toLocaleString('en-IN');
      }
      requestAnimationFrame(tick);
    }
  });
}, { threshold: 0.5 });
counterIo.observe(counterEl);

/* ---------- Testimonial carousel ---------- */
const slides = document.querySelectorAll('.t-slide');
const dotsWrap = document.getElementById('tDots');
let tIndex = 0;
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if(i === 0) dot.classList.add('active');
  dot.setAttribute('aria-label', `Show testimonial ${i+1}`);
  dot.addEventListener('click', () => showSlide(i));
  dotsWrap.appendChild(dot);
});
function showSlide(i){
  slides[tIndex].classList.remove('active');
  dotsWrap.children[tIndex].classList.remove('active');
  tIndex = i;
  slides[tIndex].classList.add('active');
  dotsWrap.children[tIndex].classList.add('active');
}
setInterval(() => {
  showSlide((tIndex + 1) % slides.length);
}, 5000);

/* ---------- Contact form (placeholder handling) ---------- */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you — this form is a placeholder. Connect it to your email/CRM backend to receive real enquiries.');
  e.target.reset();
});
