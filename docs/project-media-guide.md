# Replacing temporary project photos

The supplied MIS logo is preserved unchanged in public/brand/mis-logo.png and appears in desktop navigation, mobile navigation and the footer.

Temporary stock photos are configured in src/data/project-media.ts. All cards and detail pages use getProjectMedia(slug). Add a project-specific entry to projectMedia for each replacement. Place approved web-sized photographs under public/images/projects and set src to /images/projects/filename.jpg. Give each image a factual alt description and set placeholder:false only for real approved MIS media. The badge disappears automatically for that image.

The homepage gallery uses the mediaLibrary entries. Its descriptive copy is in src/components/sections/project-gallery.tsx; replace the temporary-slot wording with confirmed photo captions when the images change. The hero background is configured in src/components/sections/hero.tsx; replace its image and temporary label together. Avoid adding identifying case information in photo captions.

Image slots reserve their aspect ratio to reduce page movement while images load. Cards use lazy-loaded Next.js optimized images. Gallery navigation is manual, without autoplay. Section animations progressively enhance visible content and respect prefers-reduced-motion, including changes to that setting during a visit.
