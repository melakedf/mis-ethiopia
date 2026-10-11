# MIS launch checks — 11 October 2026

## Verified baseline
PageSpeed Insights: https://pagespeed.web.dev/analysis/https-mis-ethiopia-4vjh-vercel-app/6w9e3uji9m?form_factor=mobile

Mobile: performance 92, accessibility 100, best practices 100, SEO 100.
FCP 1.4 s; LCP 3.1 s; TBT 0 ms; CLS 0; Speed Index 4.1 s.
Desktop: all four scores 100; FCP 0.3 s; LCP 0.7 s; TBT 10 ms; CLS 0; Speed Index 0.5 s.
Lighthouse 13.5.0, mobile emulation with slow 4G. No field data or physical-device test. Scores precede this admin update; public homepage unchanged.

## Implemented
Existing bcrypt staff accounts, database role checks, database-backed login/contact limits; draft-first editing; public JPEG/PNG/WebP/PDF uploads (2 MB limit); project images on detail pages; explicitly reviewed report listing; configurable canonical origin.
PDF uploads are public immediately, even if their resource listing is a draft. Only approved public documents should be uploaded. Database storage is bounded per file and intended for a small collection; bulk archives should use object storage.

## Activation requirements
Automatic approval review blocked credential transfer. DATABASE_URL and NEXTAUTH_SECRET remain unset on Vercel. Do not retry without explicit authorization. Staff login, uploads and saved contact inbox cannot be end-to-end tested until connection is approved. Existing account passwords are retained.
miseth.org points to Namecheap (198.54.115.41), with external nameservers. DNS/registrar access is needed to switch hosting while preserving email records. Set NEXT_PUBLIC_SITE_URL only when the domain is connected.
Donation checkout requires official MIS merchant checkout URLs. Do not use sample payment links.
No approved annual report or audited financial statement was supplied for public release in this task; existing public briefs remain available.

## Final checks after activation
Use an existing staff account to sign in; upload a permitted sample, add a draft project and verify it is hidden, publish and verify its image. Submit a contact inquiry and check the private inbox. Verify published approved PDF and logout. Review the imported legacy CMS records before featuring any.
