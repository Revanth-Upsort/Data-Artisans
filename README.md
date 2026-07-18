# Data Artisans — React Site

A fast, content-led static site for the Data Artisans IT consultancy, built with
**React + TypeScript + Vite**, **React Router**, **Tailwind CSS**, **Framer Motion**,
and **Lucide** icons. Editorial "Charcoal" design system; all seven service pages are
driven from a single typed data array through one reusable template.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build to ./dist
npm run preview  # serve the production build locally
npm run lint     # tsc --noEmit type check
```

## Structure

```
src/
  components/
    layout/    Nav (useState hamburger), Footer (mobile accordions), PageLayout
    ui/        CTAButton, ServiceCard, ProcessStep, CaseStudyCard, FAQAccordion,
               StatBlock, SectionHeading, HeroGraphic, Reveal (Framer Motion wrapper)
    sections/  Hero, TrustBar, ServicesBentoGrid, HowWeWork, ResultsSection,
               Testimonials, InsightsTeaser, CTABanner
    ScrollToTop.tsx
  pages/       Home, ServicePage (shared template via useParams), About,
               CaseStudies, Insights, Contact
  data/        services.ts (Service[] — drives all 7 pages), caseStudies.ts,
               testimonials.ts, insights.ts, site.ts
  App.tsx      React Router routes
  main.tsx     entry
```

## Design tokens

Defined in [`tailwind.config.js`](tailwind.config.js) as theme colors, so utilities
like `bg-ink`, `text-accent`, `bg-paper-dim`, `shadow-soft`, `text-hero` stay in sync:

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#1B2430` | nav, hero, dark sections |
| `paper` / `paper-dim` | `#F7F5F0` / `#EAE6DC` | page bg / secondary cards |
| `fg-on-ink` / `fg-muted` | `#F7F5F0` / `#B7BBC2` | text on charcoal |
| `accent` | `#D8823A` | the single accent — CTAs, links, active states |

## Before launch — swap the `PLACEHOLDER` content

Every invented figure is flagged with `PLACEHOLDER` in code and UI. Find them all:

```bash
grep -rn "PLACEHOLDER" src/
```

Key spots: trust-bar stats + `howWeWork` copy in `src/data/site.ts`, case-study
metrics in `src/data/caseStudies.ts` and each service's `caseStudy` in
`src/data/services.ts`, testimonials in `src/data/testimonials.ts`, contact details
in `src/data/site.ts`, the Formspree `action` in `Contact.tsx` and `Footer.tsx`, and
About company history.

## Deploy (static, SPA)

`npm run build` outputs static assets to `./dist`. Because routing is client-side,
configure an SPA fallback so deep links resolve:

- **Netlify / Cloudflare Pages:** [`public/_redirects`](public/_redirects) (`/* /index.html 200`) is included.
- **Vercel:** [`vercel.json`](vercel.json) rewrites are included.

Build command `npm run build`, output directory `dist`.
