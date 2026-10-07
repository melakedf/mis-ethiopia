"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PhotoCollectionRecord } from "@/data/photo-collections";
export function PhotoCollection({collection, preview=false}: {collection: PhotoCollectionRecord; preview?: boolean}) {
 const dialog=useRef<HTMLDialogElement>(null); const [index,setIndex]=useState(0); const [expanded,setExpanded]=useState(!preview);
 const photos=expanded?collection.photos:collection.photos.slice(0,4); const selected=collection.photos[index];
 function move(step:number){setIndex(i=>(i+step+collection.photos.length)%collection.photos.length);}
 return <section className="mt-12" aria-labelledby={`${collection.id}-photos-title`}>
 <p className="giving-kicker">{collection.year} · {collection.location}</p><h2 id={`${collection.id}-photos-title`} className="section-title">{collection.title}</h2>
 <div className="mt-7 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">{photos.map((photo,i)=><figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><button type="button" aria-label={`Enlarge photo: ${photo.alt}`} className="block w-full cursor-zoom-in bg-slate-100" onClick={()=>{setIndex(i);dialog.current?.showModal();}}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="aspect-[4/3] w-full object-contain"/></button><figcaption className="p-4 text-sm leading-6 text-slate-600">{photo.caption}</figcaption></figure>)}</div>
 <div className="mt-6 flex flex-wrap gap-6">{!expanded&&collection.photos.length>4?<button className="text-link" onClick={()=>setExpanded(true)}>View all {collection.photos.length} photos</button>:null}<Link href={collection.href} className="text-link">Read the project story →</Link></div>
 <dialog ref={dialog} className="photo-dialog" aria-label={`${collection.title} photo viewer`} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}}}>
 <div className="flex items-center justify-between gap-4 p-4"><p aria-live="polite">Photo {index+1} of {collection.photos.length}</p><button autoFocus type="button" onClick={()=>dialog.current?.close()} className="rounded-lg border px-4 py-2">Close ✕</button></div>
 <Image src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} sizes="90vw" className="max-h-[65vh] w-full object-contain"/>
 <p className="p-4 text-center">{selected.caption}</p><div className="flex justify-between gap-4 p-4"><button className="rounded-lg border px-5 py-3" onClick={()=>move(-1)}>← Previous</button><button className="rounded-lg border px-5 py-3" onClick={()=>move(1)}>Next →</button></div>
 </dialog></section>;
}
