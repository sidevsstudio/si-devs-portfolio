# SI Devs — Studio Website

A fast, static-friendly marketing site for **SI Devs**, built with Next.js 16, React 19 and Tailwind CSS v4. Designed around your brand: **Chalk / Obsidian / Linen** with an **Ember** accent on light sections and a **Horizon** accent on dark sections, using **Fraunces** for headings and **Plus Jakarta Sans** for body copy.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4** (brand tokens defined in `app/globals.css`)
- **lucide-react** for icons
- Fonts loaded via `next/font/google`

## Project structure

```
app/
  layout.tsx        # Fonts, SEO metadata, <html> background
  globals.css       # Brand color tokens + the .surface-obsidian dark theme
  page.tsx          # Assembles all sections
components/
  logo.tsx          # LOGO PLACEHOLDER (see below)
  site-header.tsx   # Sticky nav
  hero.tsx
  what-we-build.tsx # Website types
  process.tsx       # 4-phase "peace of mind" process
  services.tsx      # Features + integrations (dark section)
  work.tsx          # Portfolio — "Coming Soon" placeholders
  why-us.tsx        # Differentiators
  faq.tsx
  contact-cta.tsx   # Tally enquiry form + Booking / WhatsApp
  reveal.tsx        # Scroll-reveal animation wrapper
  site-footer.tsx
```

## Things to replace before launch

Everything below is marked with a `TODO` comment in the code:

1. **Logo** — `components/logo.tsx` currently renders an on-brand text lockup.
   Drop your exported logo into `/public` and swap in an `<img>` (instructions are in the file).
   Use the Obsidian fill on light backgrounds, the Chalk fill on the dark footer.
2. **Favicon / social image** — replace the default icons in `/public` and update `openGraph`/`twitter` images in `app/layout.tsx`.
3. **Tally enquiry form** — `components/contact-cta.tsx`: create your form at [tally.so](https://tally.so), then set `TALLY_FORM_ID` to the ID from the embed URL (e.g. `https://tally.so/embed/wABC12` → `wABC12`). Until then a styled placeholder is shown. Also add your Calendly link and `https://wa.me/<number>` for the quick-contact cards.
4. **Social + email** — `components/site-footer.tsx`: add your Instagram, LinkedIn, X and WhatsApp URLs and contact email.
5. **Domain** — update `metadataBase` in `app/layout.tsx` to your live domain.
6. **Work section** — `components/work.tsx`: replace the "Coming Soon" cards with real project screenshots when ready.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy to Vercel

### Option A — via GitHub (recommended)
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the defaults and click **Deploy**.
4. Once live, open **Project Settings → Domains** and add your custom domain (e.g. `sidevs.tech`), then update your DNS as instructed.

### Option B — via Vercel CLI
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

No environment variables are required — the site is fully static-friendly and needs no backend.

---

*Guided, not just built.*
