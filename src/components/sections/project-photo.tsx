import Image from "next/image";
import type { MediaItem } from "@/data/project-media";
export function ProjectPhoto({media, className = "", sizes = "(max-width: 768px) 100vw, 33vw"}: {media: MediaItem; className?: string; sizes?: string}) {
 return <div className={`project-photo relative isolate aspect-[16/10] overflow-hidden bg-slate-200 ${className}`}>
   <Image src={media.src} alt={media.alt} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-105"/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
   {media.placeholder && <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-navy">Temporary stock photo · MIS photo coming soon</span>}
 </div>;
}
