import Image from "next/image";
import Link from "next/link";
import { appreciationPhotos } from "@/data/sponsor-appreciation";
export function AppreciationPhotos(){
 return <section className="mt-12" aria-labelledby="appreciation-photos-title"><p className="giving-kicker">MIS and IGO</p><h2 id="appreciation-photos-title" className="section-title">Sponsor Appreciation Day</h2><p className="mt-4 leading-7 text-slate-600">Moments of connection with children and families. Photographs shared by MIS.</p><div className="mt-8 grid items-start gap-6 md:grid-cols-3">{appreciationPhotos.map(photo=><figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 768px) 100vw, 33vw" className="h-auto w-full"/><figcaption className="p-5 text-sm leading-7 text-slate-600">{photo.caption}</figcaption></figure>)}</div><Link href="/news/sponsor-appreciation-day" className="text-link mt-6">Read the Sponsor Appreciation Day story →</Link></section>;
}
