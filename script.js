/* ============ DATA ============ */
const PERFUMES = [
  { id:'mv', name:'Midnight Velvet', cls:'mv', category:'Eau de Parfum · Woody', notes:'Black amber · Leather · Dark vanilla',
    desc:'A brooding, magnetic scent for the hours after dusk — smoked woods wrapped in velvet amber.', price:265 },
  { id:'gb', name:'Golden Bloom', cls:'gb', category:'Eau de Parfum · Floral', notes:'Jasmine · Honey · White musk',
    desc:'Sunlit petals and warm honey, radiant as the first bloom of spring.', price:240 },
  { id:'ow', name:'Ocean Whisper', cls:'ow', category:'Eau de Toilette · Aquatic', notes:'Sea salt · Bergamot · Driftwood',
    desc:'The hush of a coastline at dawn, cool and endlessly clean.', price:210 },
  { id:'ro', name:'Royal Oud', cls:'ro', category:'Extrait de Parfum · Oud', notes:'Assam oud · Saffron · Rosewood',
    desc:'An opulent oud built for those who wear their presence quietly and completely.', price:320 },
  { id:'re', name:'Rose Éternelle', cls:'re', category:'Eau de Parfum · Floral', notes:'Bulgarian rose · Peony · Iris',
    desc:'A love letter to the rose, layered and endlessly unfolding.', price:255 },
  { id:'an', name:'Amber Noir', cls:'an', category:'Parfum · Oriental', notes:'Amber · Tobacco leaf · Cacao',
    desc:'Rich, resinous, and unforgettable — an amber built for cold nights.', price:280 },
];

const FEATURES = [
  { n:'01', t:'Long-Lasting Fragrance', d:'Formulated to unfold in stages and hold for twelve hours or more.' },
  { n:'02', t:'Luxury Ingredients', d:'Rare absolutes and resins sourced directly from their regions of origin.' },
  { n:'03', t:'Elegant Packaging', d:'Hand-finished crystal glass and gold-weighted caps in every bottle.' },
  { n:'04', t:'Expert Perfumers', d:'Formulas composed by six master noses with decades of craft.' },
  { n:'05', t:'Worldwide Inspiration', d:'Scents shaped by souks, orchards, coastlines, and forests abroad.' },
  { n:'06', t:'Premium Quality', d:'Every batch tested for depth, longevity, and true fidelity to the brief.' },
];

const REVIEWS = [
  { q:'VELOURA doesn\\'t make perfume, it makes memories you can wear. Royal Oud is unlike anything in my collection.', who:'— Amara, Dubai' },
  { q:'Golden Bloom got me stopped on the street twice this week. That has never happened with any other scent.', who:'— Elise, Paris' },
  { q:'The packaging alone feels like a gift. Midnight Velvet is dark, confident, and lasts all night.', who:'— Daniel, New York' },
  { q:'Rose Éternelle is the most honest rose fragrance I\\'ve worn — no sugar, just the real thing.', who:'— Priya, London' },
];

/* ============ RENDER BOTTLE (CSS accent, used in hero) ============ */
function bottleHTML(cls, label){
  return `<div class="bottle ${cls}"><div class="cap"></div><div class="neck"></div>
    <div class="body"><div class="shine"></div>${label?`<div class="label">${label}</div>`:''}</div></div>`;
}

/* ============ PRODUCT PHOTOGRAPHY ============ */
/* Royalty-free stock photography (Pexels license — free to use, no attribution required),
   each chosen to echo its fragrance's colour story. Swap any URL below to use your own imagery. */
const IMAGES = {
  mv: 'https://images.pexels.com/photos/8796322/pexels-photo-8796322.jpeg?auto=compress&cs=tinysrgb&w=800',
  gb: 'https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=800',
  ow: 'https://images.pexels.com/photos/30990130/pexels-photo-30990130.jpeg?auto=compress&cs=tinysrgb&w=800',
  ro: 'https://images.pexels.com/photos/32566124/pexels-photo-32566124.jpeg?auto=compress&cs=tinysrgb&w=800',
  re: 'https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=800',
  an: 'https://images.pexels.com/photos/29805437/pexels-photo-29805437.jpeg?auto=compress&cs=tinysrgb&w=800',
};
function photoHTML(cls, name, tallClass){
  return `<div class="photo-frame tone-${cls} ${tallClass||''}">
    <img src="${IMAGES[cls]}" alt="${name} — VELOURA luxury perfume bottle" loading="lazy">
    <div class="shine"></div>
  </div>`;
}

/* ============ RENDER COLLECTION ============ */
const collectionGrid = document.getElementById('collectionGrid');
PERFUMES.forEach(p=>{
  const el = document.createElement('div');
  el.className = 'card reveal';
  el.innerHTML = `
    <div class="cat">${p.category}</div>
    <div class="stage photo-stage">${photoHTML(p.cls, p.name)}</div>
    <h3>${p.name}</h3>
    <div class="notes">${p.notes}</div>
    <div class="desc">${p.desc}</div>
    <div class="card-foot">
      <span class="price">$${p.price}</span>
      <button class="add-btn" data-id="${p.id}">Add to Wishlist</button>
    </div>`;
  collectionGrid.appendChild(el);
});

const footerCollections = document.getElementById('footerCollections');
PERFUMES.forEach(p=>{
  const li = document.createElement('li');
  li.innerHTML = `<a href="#collection">${p.name}</a>`;
  footerCollections.appendChild(li);
});

/* ============ RENDER FEATURES ============ */
const featuresGrid = document.getElementById('featuresGrid');
FEATURES.forEach(f=>{
  const el = document.createElement('div');
  el.className = 'feature reveal';
  el.innerHTML = `<div class="fnum">${f.n}</div><h4>${f.t}</h4><p>${f.d}</p>`;
  featuresGrid.appendChild(el);
});

/* ============ RENDER BESTSELLERS ============ */
const bestsellerScroll = document.getElementById('bestsellerScroll');
const BESTSELLERS = [PERFUMES[3], PERFUMES[0], PERFUMES[5], PERFUMES[1], PERFUMES[4]];
BESTSELLERS.forEach((p,i)=>{
  const el = document.createElement('div');
  el.className = 'bs-card reveal';
  el.innerHTML = `
    ${i===0?'<div class="ribbon">Bestseller</div>':''}
    <div class="stage photo-stage">${photoHTML(p.cls, p.name)}</div>
    <div class="stars">★★★★★</div>
    <h4>${p.name}</h4>
    <div class="price">$${p.price}</div>
    <div class="bs-actions">
      <button class="wish-btn" data-id="${p.id}">♡ Wishlist</button>
      <button class="quick-btn" data-id="${p.id}">Quick View</button>
    </div>`;
  bestsellerScroll.appendChild(el);
});

/* ============ RENDER GALLERY ============ */
const galleryGrid = document.getElementById('galleryGrid');
const GALLERY_HEIGHTS = [260,190,230,170,250,200,280,210,190,240];
PERFUMES.concat(PERFUMES.slice(0,4)).forEach((p,i)=>{
  const el = document.createElement('div');
  el.className = 'g-item reveal';
  el.style.height = GALLERY_HEIGHTS[i % GALLERY_HEIGHTS.length] + 'px';
  el.innerHTML = `${photoHTML(p.cls, p.name)}<div class="cap-tag">${p.name}</div>`;
  galleryGrid.appendChild(el);
});

/* ============ WISHLIST ============ */
let wishlist = new Set();
const wishCount = document.getElementById('wishCount');
function updateWishCount(){ wishCount.textContent = wishlist.size; }
document.body.addEventListener('click', (e)=>{
  const btn = e.target.closest('.add-btn, .wish-btn');
  if(!btn) return;
  const id = btn.dataset.id;
  if(wishlist.has(id)){ wishlist.delete(id); btn.classList.remove('wished'); btn.textContent = btn.classList.contains('wish-btn') ? '♡ Wishlist' : 'Add to Wishlist'; }
  else { wishlist.add(id); btn.classList.add('wished'); btn.textContent = btn.classList.contains('wish-btn') ? '♥ Wishlisted' : 'Wishlisted ✓'; }
  updateWishCount();
});
document.body.addEventListener('click', (e)=>{
  const btn = e.target.closest('.quick-btn');
  if(!btn) return;
  const p = PERFUMES.find(x=>x.id===btn.dataset.id);
  alert(`${p.name}\\n${p.category}\\nNotes: ${p.notes}\\n$${p.price}`);
});

/* ============ TESTIMONIALS ============ */
const testiWrap = document.getElementById('testiWrap');
const testiDots = document.getElementById('testiDots');
REVIEWS.forEach((r,i)=>{
  const s = document.createElement('div');
  s.className = 'testi-slide' + (i===0?' active':'');
  s.innerHTML = `<div class="stars">★★★★★</div><q>${r.q}</q><div class="who">${r.who}</div>`;
  testiWrap.appendChild(s);
  const d = document.createElement('button');
  if(i===0) d.classList.add('active');
  d.addEventListener('click', ()=>showTesti(i));
  testiDots.appendChild(d);
});
let testiIndex = 0;
function showTesti(i){
  document.querySelectorAll('.testi-slide').forEach((s,idx)=>s.classList.toggle('active', idx===i));
  document.querySelectorAll('.testi-dots button').forEach((d,idx)=>d.classList.toggle('active', idx===i));
  testiIndex = i;
}
setInterval(()=>{ showTesti((testiIndex+1) % REVIEWS.length); }, 5500);

/* ============ LOADER ============ */
/* Fixed timer, independent of image/font load speed, so the loader never
   hangs waiting on slow network requests. */
setTimeout(()=>{ document.getElementById('loader').classList.add('hide'); }, 4500);

/* ============ CURSOR ============ */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
window.addEventListener('mousemove', (e)=>{
  cursorDot.style.left = e.clientX+'px'; cursorDot.style.top = e.clientY+'px';
  cursorRing.style.left = e.clientX+'px'; cursorRing.style.top = e.clientY+'px';
});
document.querySelectorAll('a, button').forEach(el=>{
  el.addEventListener('mouseenter', ()=>cursorRing.classList.add('grow'));
  el.addEventListener('mouseleave', ()=>cursorRing.classList.remove('grow'));
});

/* ============ HEADER SCROLL ============ */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 700);
});

/* ============ THEME TOGGLE ============ */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
  const cur = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', cur==='dark' ? 'light' : 'dark');
});

/* ============ MOBILE MENU ============ */
const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('burgerBtn').addEventListener('click', ()=>mobileMenu.classList.add('open'));
document.getElementById('mobileCloseBtn').addEventListener('click', ()=>mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

/* ============ SEARCH ============ */
const searchOverlay = document.getElementById('searchOverlay');
document.getElementById('searchOpenBtn').addEventListener('click', ()=>{
  searchOverlay.classList.add('open');
  setTimeout(()=>document.getElementById('searchInput').focus(), 300);
});
document.getElementById('searchCloseBtn').addEventListener('click', ()=>searchOverlay.classList.remove('open'));
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') searchOverlay.classList.remove('open'); });

/* ============ BACK TO TOP ============ */
document.getElementById('backToTop').addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('.reveal, .reveal-zoom');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, { threshold:0.15 });
revealEls.forEach(el=>io.observe(el));

/* ============ COUNTERS ============ */
const statEls = document.querySelectorAll('.stat h3');
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.max(1, Math.ceil(target/80));
      const t = setInterval(()=>{
        cur += step;
        if(cur >= target){ cur = target; clearInterval(t); }
        el.textContent = cur.toLocaleString();
      }, 20);
      counterIO.unobserve(el);
    }
  });
}, { threshold:0.5 });
statEls.forEach(el=>counterIO.observe(el));

/* ============ PARTICLES ============ */
const particleField = document.getElementById('particles');
for(let i=0;i<28;i++){
  const p = document.createElement('div');
  p.className = 'particle';
  const size = 2 + Math.random()*5;
  p.style.width = size+'px'; p.style.height = size+'px';
  p.style.left = Math.random()*100+'%';
  p.style.bottom = '-' + (Math.random()*20) + 'px';
  p.style.animationDuration = (8 + Math.random()*10)+'s';
  p.style.animationDelay = (Math.random()*10)+'s';
  particleField.appendChild(p);
}

/* ============ NEWSLETTER FORM ============ */
document.getElementById('newsForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('newsEmail').value;
  document.getElementById('newsMsg').textContent = `Welcome to the circle — a confirmation has been sent to ${email}.`;
  e.target.reset();
});

/* ============ CONTACT FORM ============ */
document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  document.getElementById('contactMsg').textContent = 'Thank you — our concierge team will reply within one business day.';
  e.target.reset();
});

/* ============ FOOTER YEAR ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ LAZY-STYLE FADE FOR STAGE BOTTLES ============ */
document.querySelectorAll('.card, .bs-card, .g-item').forEach(el=>{
  el.style.willChange = 'transform';
});
