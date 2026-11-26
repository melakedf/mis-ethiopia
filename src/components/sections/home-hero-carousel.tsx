"use client";
import {useEffect,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,ChevronLeft,ChevronRight,Pause,Play} from "lucide-react";
const slides=[["/images/summer-2026-scholars-celebration.jpg","Summer Scholars celebration","Local action.","Lasting opportunity.","English and Mathematics learning, meals and family engagement with IGO.","Summer Scholars · Kolfe, 2026","/projects/kolfe-summer-school"],["/images/bullen-irrigation-garden.webp","Irrigated garden beds in Bullen","Stronger livelihoods.","Community-led change.","Savings, livestock and agriculture support for women in Bullen.","Historical livelihoods activities · Bullen","/projects/mcmdo-women-girls"],["/images/summer-2026-classroom.jpg","Summer Scholars taking part in classroom activities","Learning together.","Building brighter futures.","Supporting children through English and Mathematics learning.","Summer Scholars learning · Kolfe, 2026","/news/summer-scholars-opening"]];
export function HomeHeroCarousel(){
 const [index,setIndex]=useState(0);
 const [playing,setPlaying]=useState(false);
 const [hover,setHover]=useState(false);
 const [focused,setFocused]=useState(false);
 useEffect(()=>{const m=window.matchMedia("(prefers-reduced-motion: reduce)"); const sync=()=>setPlaying(!m.matches);sync();m.addEventListener("change",sync);return()=>m.removeEventListener("change",sync)},[]);
 useEffect(()=>{if(!playing||hover||focused)return;const timer=window.setInterval(()=>setIndex(i=>(i+1)%slides.length),7000);return()=>window.clearInterval(timer)},[playing,hover,focused,index]);
 function move(n:number){setPlaying(false);setIndex(i=>(i+n+slides.length)%slides.length)}
 const [src,alt,title,subtitle,description,label,href]=slides[index];
 return <section className="giving-hero" aria-label="Featured MIS projects" aria-roledescription="carousel" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setFocused(false)}}>
 <Image key={src} src={src} alt={alt} fill loading={index===0?"eager":"lazy"} fetchPriority={index===0?"high":"auto"} sizes="100vw" className="giving-hero-image" style={{animation:"none",objectPosition:index===1?"center 50%":"center 38%"}}/>
 <div className="giving-hero-shade"/>
 <div className="site-wrap giving-hero-main"><div className="hero-copy giving-hero-content" aria-live={playing?"off":"polite"}><p className="giving-kicker giving-kicker-light">Support. Empower. Transform.</p><h1>{title}<br/><span>{subtitle}</span></h1><p className="giving-hero-description">{description}</p><div className="giving-hero-actions"><Link href="/donate" className="giving-button">Support our work<span><ArrowUpRight size={22}/></span></Link><Link href={href} className="giving-story-link"><span><ArrowUpRight size={23}/></span>Explore this project</Link></div></div></div>
 <div className="site-wrap relative flex flex-wrap items-center justify-between gap-4 pb-6 text-white"><p className="text-sm">{label}</p><div className="flex flex-wrap items-center gap-2"><button type="button" aria-label={playing?"Pause automatic slides":"Play automatic slides"} onClick={()=>setPlaying(v=>!v)} className="rounded-full border border-white/60 bg-black/30 p-3">{playing?<Pause size={18}/>:<Play size={18}/>}</button><button type="button" aria-label="Previous slide" onClick={()=>move(-1)} className="rounded-full border border-white/60 bg-black/30 p-3"><ChevronLeft size={18}/></button>{slides.map((s,i)=><button key={s[0]} type="button" aria-label={`Show slide ${i+1}: ${s[2]}`} aria-current={i===index?"true":undefined} onClick={()=>{setPlaying(false);setIndex(i)}} className="grid h-11 w-8 place-items-center"><span className={`h-2.5 w-2.5 rounded-full border border-white ${i===index?"bg-white":"bg-transparent"}`}/></button>)}<button type="button" aria-label="Next slide" onClick={()=>move(1)} className="rounded-full border border-white/60 bg-black/30 p-3"><ChevronRight size={18}/></button></div></div>
 </section>
}
