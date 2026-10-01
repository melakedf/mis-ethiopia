"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const partners: { short: string; name: string; current?: boolean; project: string; logo?: string }[] = [
  { short: "IGO", logo: "/partners/igo.png", name: "Institute for Global Outreach", current: true, project: "integrated-child-protection" },
  { short: "IOM", name: "International Organization for Migration · RRF", project: "metekel-nfi-response" },
  { short: "MoWSA", name: "Ministry of Women and Social Affairs", project: "urban-destitute-support" },
  { short: "Nexus", name: "Nexus Ethiopia", project: "fenote-selam-child-protection" },
  { short: "UNHCR", logo: "/partners/unhcr.png", name: "UN Refugee Agency", project: "tsore-refugee-support" },
  { short: "ARRA", name: "Administration for Refugees and Returnees Affairs", project: "tsore-refugee-support" },
  { short: "British Council", logo: "/partners/british-council.jpg", name: "Civil Society Support Programme", project: "cssp1-social-inclusion" },
  { short: "NSAC", name: "Non-State Actors Coalition", project: "cssp2-community-inclusion" },
  { short: "MCMDO", logo: "/partners/mcmdo.png", name: "MCMDO · women’s and girls’ empowerment", project: "mcmdo-women-girls" },
  { short: "CDHRA", name: "CDHRA · livelihoods partnership", project: "cdhra-livelihoods-2011" },
  { short: "French Embassy", name: "PISCCA Program · school sanitation and hygiene", project: "student-led-school-sanitation-hygiene" },
];
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerMotion = () => true;

export function PartnerCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerMotion);

  const move = useCallback((direction: number) => {
    const element = track.current;
    if (!element) return;
    const step = (element.firstElementChild?.getBoundingClientRect().width ?? 280) + 20;
    const maximum = element.scrollWidth - element.clientWidth;
    const atEnd = element.scrollLeft >= maximum - 4;
    const atStart = element.scrollLeft <= 4;
    const left = direction > 0 && atEnd ? 0 : direction < 0 && atStart ? maximum : element.scrollLeft + direction * step;
    element.scrollTo({ left, behavior: reducedMotion ? "instant" : "smooth" });
  }, [reducedMotion]);
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => { if (!document.hidden) move(1); }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, move]);

  return <section className="partner-carousel" aria-labelledby="partner-carousel-title" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="site-wrap">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div><p className="giving-kicker">Our partners</p><h2 id="partner-carousel-title" className="mt-3 text-3xl font-semibold tracking-tight text-navy">Shared commitment. Local action.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Current and past partnerships, connected to the projects we delivered together.</p></div>
        <div className="flex items-center gap-2">
          {!reducedMotion && <button type="button" className="partner-control" aria-label={paused ? "Resume partner slideshow" : "Pause partner slideshow"} onClick={() => setPaused(value => !value)}>{paused ? <Play size={18}/> : <Pause size={18}/>}</button>}
          <button type="button" className="partner-control" aria-label="Previous partners" aria-controls="partner-track" onClick={() => { setPaused(true); move(-1); }}><ArrowLeft size={20}/></button>
          <button type="button" className="partner-control" aria-label="Next partners" aria-controls="partner-track" onClick={() => { setPaused(true); move(1); }}><ArrowRight size={20}/></button>
        </div>
      </div>
      <ul id="partner-track" ref={track} className="partner-track" aria-label="Current and past MIS partners" onTouchStart={() => setPaused(true)} onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}>
        {partners.map(partner => <li key={partner.short} className="partner-slide"><Link href={`/projects/${partner.project}`} className="partner-tile"><span className={`partner-status ${partner.current ? "partner-status-current" : ""}`}>{partner.current ? "Current initiative" : "Past project partner"}</span><span className="partner-logo-box">{partner.logo ? <Image src={partner.logo} alt={`${partner.short} logo`} width={160} height={65} sizes="160px"/> : <span className="partner-name">{partner.short}</span>}</span><span className="partner-description">{partner.name}</span><span className="mt-auto flex items-center gap-2 pt-3 text-xs font-semibold text-navy">View shared project <ArrowRight size={14}/></span></Link></li>)}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs leading-6 text-slate-500">Swipe or use the arrows to explore. Historical partnerships do not imply current funding.</p><Link href="/partners" className="text-link text-sm">All partnership records <ArrowRight size={16}/></Link></div>
    </div>
  </section>;
}
