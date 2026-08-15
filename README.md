# Drei Königen Trade Shop

A responsive Vue 3 storefront for Drei Königen Trade, featuring solar products, energy storage, fitness products and direct WhatsApp inquiries.

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run build
npm run preview
```

## Main editable files

- `src/config/site.ts` — company/contact information
- `src/styles/tokens.css` — global brand colors, fonts, radius, shadows and layout tokens
- `src/data/products.ts` — product data
- `src/data/categories.ts` — category presentation data

## Current ordering flow

There is no online payment or checkout yet. Product inquiries open WhatsApp with a pre-filled message. The contact form currently opens the visitor's local email program using `mailto:`.

## Version 2 improvements

- refined active navigation states
- improved homepage hero and category presentation
- all four categories surfaced on the homepage
- new trust/benefit sections
- improved product cards with direct WhatsApp inquiry
- shop search, category filter, sorting and filter reset
- improved category cards
- richer product page with quantity selector and related products
- improved About and Contact pages
- improved footer
- centralized category names/data
- reduced-motion accessibility fallback

## Before publishing

Review the legal pages for the actual business model, hosting, sales process and services used before publishing.

## V3 additions
- Dedicated category pages at `/kategorie/:category` for quick category-first browsing.
- Category cards now open the dedicated category page instead of only applying a shop filter.
- Product data supports `images[]` and product pages include a thumbnail gallery.
- Product cards link their category label to the relevant category page.

## V4 UX cleanup
- Simplified homepage: Hero → Categories → Popular products → WhatsApp CTA → Footer.
- General multi-category hero collage instead of solar-only imagery.
- Removed repeated homepage information sections.
- Product hover action now uses the brand green instead of black.
- Focus states use the brand green instead of the gold outline.
- Category discovery remains direct via dedicated category pages.
