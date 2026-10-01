import Image from "next/image";
import { summerPhotos } from "@/data/project-media";

export function SummerPhotoStory() {
  return <section className="mt-12" aria-labelledby="summer-photo-story-title"><p className="giving-kicker">Summer Scholars · 2026</p><h2 id="summer-photo-story-title" className="section-title">A milestone worth celebrating.</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">Photographs from the IGO–MIS summer-program completion celebration, shared by MIS.</p><div className="mt-8 grid items-start gap-7 sm:grid-cols-2">{summerPhotos.map(photo => <figure key={photo.media.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={photo.media.src} alt={photo.media.alt} width={photo.width} height={photo.height} sizes="(max-width: 640px) 100vw, 50vw" className="h-auto w-full"/><figcaption className="p-5 text-sm leading-7 text-slate-600">{photo.caption}</figcaption></figure>)}</div></section>;
}
