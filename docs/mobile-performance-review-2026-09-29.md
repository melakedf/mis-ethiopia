# MIS website validation — 29 September 2026

## Scope and changes
Shortened homepage; specific Ethiopia-focused headline; documented results and current/past partnership summary moved below the hero; expanded three project stories; program-to-project links; Resources in main navigation; scrollable, named mobile navigation dialog; stronger footer contrast; bundled temporary WebP photos; high-priority hero image; on-demand OpenStreetMap loading. Temporary photos remain explicitly labeled.

## Mobile and responsive checks
Production build tested in headless Chrome 154.0.8037.57 through Playwright. This is browser emulation, not physical iPhone or Android testing.

- Widths: 320, 375, 390, 768, 1280 and 1440 CSS pixels, height 844px.
- Pages: home, projects, programs, partners, resources, support, contact and Kolfe summer-school project.
- All 48 page/width checks returned HTTP 200 with no horizontal overflow.
- At 320px, menu opened and Resources navigation completed.
- At 390px, project status filtering, no-result search and reset to all 14 records passed. Map iframe absent before activation, as intended.
- Gallery next control and FAQ expansion passed.
- Reduced-motion preference produced zero running animations.
- No uncaught JavaScript page errors recorded.
- Mobile and desktop homepage screenshots visually reviewed.

## Speed and automated accessibility
Lighthouse 13.5.0 against a local production build, default simulated mobile throttling and desktop preset. These are single-run lab measurements, not field Core Web Vitals or measurements of Vercel/network latency.

| Measure | Mobile | Desktop |
|---|---:|---:|
| Performance | 93/100 | 100/100 |
| Accessibility | 100/100 | 100/100 |
| Best practices | 100/100 | 100/100 |
| SEO | 100/100 | 100/100 |
| Largest Contentful Paint | 3.2 s | 0.8 s |
| Total Blocking Time | 30 ms | 10 ms |
| Cumulative Layout Shift | 0 | 0 |

The first run found timeouts fetching remote stock photos and insufficient contrast in footer legal text; both were corrected before the reported final run. Mobile LCP still exceeds the 2.5-second good threshold under simulated throttling. Keep replacement hero photos small and remeasure after replacing them. Automated accessibility checks do not establish complete accessibility conformance.

## Build validation
`npm run build`, TypeScript compilation, targeted ESLint checks and `git diff --check` passed.

## Remaining external setup
Real project photographs and approved publications still need to be supplied. Online payment credentials and CMS database/admin configuration are not active and were not treated as working features.
