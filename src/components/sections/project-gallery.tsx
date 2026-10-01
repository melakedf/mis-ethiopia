"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectPhoto } from "@/components/sections/project-photo";
import { mediaLibrary } from "@/data/project-media";
const slides = [
 {title:"Celebrating our Summer Scholars",label:"Summer Scholars · 2026",body:"Thirty-one children completed six weeks of learning across 18 teaching days. Completion certificates marked the milestone, with families, teachers and volunteers joining the celebration.",href:"/projects/kolfe-summer-school",media:mediaLibrary.summerGroup},
 {title:"A celebration shared together",label:"IGO and MIS",body:"The children celebrated with a cake, while IGO founder Dr. Velma joined the ceremony to share in their achievement.",href:"/projects/kolfe-summer-school",media:mediaLibrary.summerCelebration},
 {title:"Families at the heart of the day",label:"Community participation",body:"Families joined the children and program team to celebrate the completion of the summer program.",href:"/projects/kolfe-summer-school",media:mediaLibrary.summerFamilies},
 {title:"Thank you to our teachers and volunteers",label:"Appreciation and recognition",body:"Appreciation certificates recognized the dedication and support of the teachers and volunteers who helped make the summer program possible.",href:"/projects/kolfe-summer-school",media:mediaLibrary.summerTeacher},
];
export function ProjectGallery(){
 const [index,setIndex]=useState(0);const slide=slides[index];
 return <section className="site-section bg-[#f6f6f6]" aria-label="Project photo gallery"><div className="site-wrap"><div className="mb-9 flex flex-wrap items-end justify-between gap-6"><div><p className="giving-kicker">Our work in pictures</p><h2 className="section-title">People. Participation. Possibility.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">Photographs from the 2026 Summer Scholars completion celebration, delivered in partnership by IGO and MIS.</p></div>
 <div className="overflow-hidden rounded-3xl bg-white shadow-sm lg:grid lg:grid-cols-[1.25fr_1fr]">
 <ProjectPhoto key={index} media={slide.media} className="gallery-image h-full min-h-[260px]" sizes="(max-width: 1024px) 100vw, 60vw"/>
 <div className="flex flex-col justify-center p-7 sm:p-10"><div aria-live="polite" aria-atomic="true"><p className="giving-kicker">{slide.label}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight text-navy">{slide.title}</h3><p className="mt-5 leading-8 text-slate-600">{slide.body}</p><Link href={slide.href} className="text-link mt-6">Explore this work <ArrowRight size={17}/></Link></div>
 <div className="mt-9 flex items-center gap-4"><button type="button" aria-label="Previous project photo" onClick={()=>setIndex((index+slides.length-1)%slides.length)} className="gallery-control"><ArrowLeft size={20}/></button><span className="text-sm text-slate-500">{index+1} / {slides.length}</span><button type="button" aria-label="Next project photo" onClick={()=>setIndex((index+1)%slides.length)} className="gallery-control"><ArrowRight size={20}/></button></div></div>
 </div></div></section>;
}
