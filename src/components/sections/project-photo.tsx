import Image from "next/image";
import type { MediaItem } from "@/data/project-media";
export function ProjectPhoto({media, className = "", sizes = "(max-width: 768px) 100vw, 33vw"}: {media: MediaItem; className?: string; sizes?: string}) {
 return <div className={`project-photo relative isolate aspect-[16/10] overflow-hidden bg-slate-200 ${className}`}>
   {media.placeholder ? <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-100 p-5 text-center text-slate-600"><span className="text-lg font-semibold">MIS Ethiopia</span><span className="text-sm">Project photograph not yet available</span></div> : <><Image src={media.src} alt={media.alt} fill sizes={sizes} className={`${media.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/></>}
 </div>;
}
