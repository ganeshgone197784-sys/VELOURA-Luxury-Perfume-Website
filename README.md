# VELOURA — Luxury Perfume Website

A premium, responsive one-page website for **VELOURA**, a fictional luxury fragrance house.
Built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no paid APIs.

> "Where Every Drop Becomes a Memory."

---

## File Structure

```
├── index.html   → Page markup / structure
├── style.css    → All styling, animations, and responsive layout
├── script.js    → Interactivity (rendering, menus, forms, effects)
└── README.md    → This file
```

**Keep all three files in the same folder.** `index.html` links to `style.css` and
`script.js` by relative path, so they won't work correctly if separated.

## How to View It

No installation needed:
1. Download all three files into one folder.
2. Double-click `index.html`, or drag it into a browser window.

To run it through a local server instead (recommended if you plan to keep editing):
```bash
# from inside the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's Inside

| Section | Description |
|---|---|
| Loading Screen | 4.5s animated intro with the VELOURA wordmark |
| Hero | Full-screen intro with background photo, floating particles, and CTAs |
| Maison (About) | Brand story with a product photo and inline stats |
| Featured Collection | 6 fragrance cards (notes, description, price, wishlist) |
| Why VELOURA | 6 feature tiles |
| Bestsellers | Horizontally scrollable product rail with quick view + wishlist |
| Reviews | Auto-rotating testimonial slider |
| Brand Stats | Animated counters (customers, fragrances, countries, ingredients) |
| Gallery | Masonry photo grid |
| Newsletter | Email signup with inline confirmation |
| Contact | Contact form, info, map placeholder, and social links |
| Footer | Links, collections, contact details, legal |

**Extras included:** dark/light mode toggle, sticky nav with scroll effect, animated mobile
menu, search overlay, wishlist counter badge, back-to-top button, scroll-triggered reveal
animations, custom cursor (desktop only), and `prefers-reduced-motion` support.

## Customizing

**Colors** — all defined as CSS variables at the top of `style.css`:
```css
:root{
  --ink: ...       /* near-black */
  --gold: ...      /* primary accent */
  --champagne: ... /* light neutral */
  --burgundy: ...  /* newsletter/accent */
}
```

**Fonts** — Cormorant Garamond (headings) + Jost (body), loaded from Google Fonts in
`index.html`. Swap the `<link>` tag and the `font-family` values in `style.css` to change them.

**Products** — all six fragrances (name, notes, description, price, image) are defined in one
place: the `PERFUMES` array near the top of `script.js`. Edit values there and every section
(collection, bestsellers, gallery, footer) updates automatically.

**Images** — each fragrance links to a royalty-free stock photo (Pexels, free license, no
attribution required) chosen to match its color story. To swap an image, replace the URL for
that product's `id` in the `IMAGES` object in `script.js`. To use your own photos instead of
links, place image files in the project folder and point to them with a relative path, e.g.
`mv: 'images/midnight-velvet.jpg'`.

**Loading screen duration** — controlled in `script.js`:
```js
setTimeout(()=>{ document.getElementById('loader').classList.add('hide'); }, 4500);
```
Change `4500` (in milliseconds) to adjust the length. If you do, also update the matching
delay values (`4.7s`, `5s`, `5.3s`, `5.7s`) on the hero fade-in animations in `style.css` so
the hero content reveals right as the loader disappears rather than before or after it.

## Notes

- Newsletter and contact forms are front-end only — they show a confirmation message but
  don't send data anywhere. Wire them up to your email service or backend of choice.
- The map in the Contact section is a styled placeholder, not a live embed.
- Built for modern evergreen browsers (Chrome, Safari, Firefox, Edge).
- 
