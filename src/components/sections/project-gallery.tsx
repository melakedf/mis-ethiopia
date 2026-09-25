"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectPhoto } from "@/components/sections/project-photo";
import { mediaLibrary } from "@/data/project-media";
const slides = [
 {title:"Learning together in Kolfe",label:"Education and nutrition",body:"A space for summer-school photographs: learning activities, teaching materials and shared meals.",href:"/projects/kolfe-summer-school",media:mediaLibrary.education},
 {title:"Supporting children and families",label:"Child protection",body:"A space for photographs of community participation and family support in our current initiative.",href:"/projects/integrated-child-protection",media:mediaLibrary.community},
 {title:"Responding alongside communities",label:"Humanitarian response",body:"A space for field photographs from MIS’s past shelter and essential household support projects.",href:"/projects/metekel-nfi-response",media:mediaLibrary.support},
];
export function ProjectGallery(){
 const [index,setIndex]=useState(0);const slide=slides[index];
 return <section className="site-section bg-[#f4f7f5]" aria-label="Project photo gallery"><div className="site-wrap"><div className="mb-9 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Our work in pictures</p><h2 className="section-title">People. Participation. Possibility.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">Preview gallery with temporary stock images. MIS project photographs will replace these images.</p></div>
 <div className="overflow-hidden rounded-3xl bg-white shadow-sm lg:grid lg:grid-cols-[1.25fr_1fr]">
 <ProjectPhoto key={index} media={slide.media} className="gallery-image h-full min-h-[260px]" sizes="(max-width: 1024px) 100vw, 60vw"/>
 <div className="flex flex-col justify-center p-7 sm:p-10"><div aria-live="polite" aria-atomic="true"><p className="eyebrow">{slide.label}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight text-navy">{slide.title}</h3><p className="mt-5 leading-8 text-slate-600">{slide.body}</p><Link href={slide.href} className="text-link mt-6">Explore this work <ArrowRight size={17}/></Link></div>
 <div className="mt-9 flex items-center gap-4"><button type="button" aria-label="Previous project photo" onClick={()=>setIndex((index+slides.length-1)%slides.length)} className="gallery-control"><ArrowLeft size={20}/></button><span className="text-sm text-slate-500">{index+1} / {slides.length}</span><button type="button" aria-label="Next project photo" onClick={()=>setIndex((index+1)%slides.length)} className="gallery-control"><ArrowRight size={20}/></button></div></div>
 </div></div></section>;
}
