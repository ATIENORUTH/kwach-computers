# Kwach Computers — Website

Business website for **Kwach Computers** (KWACH_001): computers, accessories, repairs and IT solutions in Kenya.

Built with **React + TypeScript + Vite + Tailwind CSS** and **Lucide** icons. It is a single, fast, fully static page that deploys straight to Netlify.

---

## 1. Install

You need [Node.js](https://nodejs.org/) 18 or newer (20 LTS recommended).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173). Changes reload instantly.

## 3. Build

```bash
npm run build     # type-checks and builds to /dist
npm run preview   # serves the built site locally to double-check it
```

## 4. Deploy to Netlify

The repo includes a `netlify.toml`, so Netlify picks up the settings automatically
(build command `npm run build`, publish directory `dist`, Node 20).

**Option A — connect GitHub (recommended, auto-deploys on every push)**

1. Log in to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
2. Choose **GitHub** and select this repository.
3. Leave the detected settings as they are and click **Deploy**.

**Option B — drag and drop**

1. Run `npm run build`.
2. Drag the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## 5. Change business contact information

Everything lives in **`src/config/site.ts`**:

| Field              | What it controls                                          |
| ------------------ | --------------------------------------------------------- |
| `phones`           | Phone numbers for Call and WhatsApp buttons (first = main) |
| `email`            | Email shown in the site and used by "Email Us"            |
| `location`, `hours`| Shown in the contact section and footer                   |
| `whatsappGreeting` | Message pre-filled when someone taps WhatsApp             |
| `whatsappChannel`  | Link behind the "Join our channel" QR card                |
| `socials`          | Facebook, Instagram and TikTok profile links              |

Phone numbers need both a `display` value (`0785 859 442`) and an `international`
value (`+254785859442`). WhatsApp links are generated automatically in the official
`https://wa.me/254785859442` format.

Also update the matching details in `index.html` (the structured-data block and the
`<noscript>` text) if you change the main phone number or email.

**Brand colours** are defined once in `tailwind.config.js` (`navy`, `brand`, `royal`, `whatsapp`).

## 6. Add / edit products

- **Featured products:** `src/data/products.ts`
  Copy an existing object, change `name`, `description`, `category` and `image`.
  - Put the photo in `public/images/` and reference it as `/images/your-file.webp`.
  - Add `priceFrom: 45000` to show **"From KSh 45,000"**. Leave it out to show **"Contact for price"**.
  - Add `badge: 'New stock'` for a small label on the image.
  - Categories used by the filter tabs are listed in `productCategories` at the top of the file.
- **Product categories (the three big cards):** `src/data/categories.ts`

Each "Request Price" button opens WhatsApp with a message that already names the product.

## 7. Add / edit services

Edit **`src/data/services.ts`**. Each service has a `title`, `description` and an
`icon` from [lucide.dev/icons](https://lucide.dev/icons) (import it at the top of the file).

Other editable content:

- "Why choose us" points, "How it works" steps and the "What we sell" strip: `src/data/highlights.ts`
- Options in the contact form's "What do you need?" field: `src/data/contact.ts`
- Navigation links: `src/config/navigation.ts`

## 8. Connect a custom domain

1. In Netlify open your site → **Domain management** → **Add a domain** and enter e.g. `kwachcomputers.com`.
2. Either:
   - **Use Netlify DNS** (easiest): change the domain's nameservers at your registrar to the four Netlify nameservers shown, or
   - **Keep your current DNS**: add an `A` record for `@` pointing to `75.2.60.5` and a `CNAME` record for `www` pointing to `your-site-name.netlify.app`.
3. Wait for DNS to update (minutes to a few hours). Netlify issues a free HTTPS certificate automatically.
4. If your domain is **not** `kwachcomputers.com`, search and replace it in `index.html`,
   `public/robots.txt`, `public/sitemap.xml` and `src/config/site.ts`.

---

## Contact form

The form validates input and shows a success message, then offers to send the request via
WhatsApp. It does **not** send emails yet. To connect a service (Netlify Forms, Formspree,
EmailJS or your own API), see the `TODO` in `src/components/ContactForm.tsx`.

## Project structure

```
public/            static files: images, favicon, robots.txt, sitemap.xml, og-image.jpg
src/
  config/          business details (site.ts) and navigation
  data/            products, categories, services and other editable content
  components/      UI sections (Navbar, Hero, ProductCard, ServiceCard, CTA, ContactForm, Footer, ...)
  hooks/           scroll reveal and active-section helpers
  lib/             WhatsApp / phone / email link builders
```

Product and category photos are from [Unsplash](https://unsplash.com) (free to use under the Unsplash License).
Replace them with photos of your own stock whenever you can.
