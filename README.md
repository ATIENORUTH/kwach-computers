# KWACH_001 COMPUTERS Website

Responsive single-page website for KWACH_001 COMPUTERS, built with React, TypeScript, Vite, Tailwind CSS and Lucide icons.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy

The Netlify configuration uses `npm run build` and publishes `dist/`. Connect the repository to Netlify or upload the built `dist` folder. Add a custom domain only after the business confirms the domain name.

## Business content

- Confirmed phone, email and social profile URLs: `src/config/site.ts`
- Product categories and product cards: `src/data/categories.ts` and `src/data/products.ts`
- Contact-form category options: `src/data/contact.ts`
- Page metadata: `index.html`
- Image assets: `public/images/`

The five confirmed product categories are Laptops & Computers; Computer Accessories; Flash Disks & Memory Cards; Earphones & Headphones; and Chargers, Cables & Adapters. Product cards intentionally have no preset prices and display "Contact for price". WhatsApp enquiry links use the confirmed main number, 0785859442.

Do not add brands, specific models, prices, services, social profiles, location details or business claims unless they are confirmed by KWACH_001 COMPUTERS.
