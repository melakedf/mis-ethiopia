"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function MotionEnhancements() {
 const pathname=usePathname();
 useEffect(()=>{
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(reduced.matches || !window.IntersectionObserver || pathname.startsWith("/admin")) return;
  const animations: Animation[]=[];
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(!entry.isIntersecting)return;observer.unobserve(entry.target);
    if(!reduced.matches && typeof entry.target.animate==="function") animations.push(entry.target.animate([{opacity:.25,transform:"translateY(22px)"},{opacity:1,transform:"translateY(0)"}],{duration:650,easing:"cubic-bezier(.2,.7,.2,1)"}));
   });
  },{threshold:.08});
  document.querySelectorAll(".site-section > .site-wrap, [data-reveal]").forEach(el=>observer.observe(el));
  const stop=()=>{if(reduced.matches){observer.disconnect();animations.forEach(a=>a.cancel());}};
  reduced.addEventListener("change",stop);
  return ()=>{observer.disconnect();animations.forEach(a=>a.cancel());reduced.removeEventListener("change",stop);};
 },[pathname]);
 return null;
}
