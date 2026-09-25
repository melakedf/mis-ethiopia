"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { historicalProjects } from "@/data/project-history";
const areas = [
  {name: "Addis Ababa", status: "Active initiative + past experience", bbox: "38.60,8.88,38.90,9.12", marker: "9,38.75", description: "Our current IGO-supported child-protection initiative operates in Kolfe Keranyo. The marker indicates Addis Ababa, not a service or household address."},
  {name: "Amhara", status: "Completed project", bbox: "37.10,10.55,37.42,10.81", marker: "10.68,37.2601", description: "Community-based child protection in Fenote Selam, implemented with Nexus Ethiopia from December 2024 to June 2025. The marker indicates the town."},
  {name: "Benishangul-Gumuz", status: "Past project experience", bbox: "34.10,9.10,36.70,12.00", marker: "", description: "Past work includes Metekel NFI response, Guba shelter support, Dibate livelihoods, Tsore refugee support and Mao-Komo civil-society inclusion. This regional view does not mark individual sites."},
];
export function CoverageMap() {
  const [selected, setSelected] = useState(0);
  const area = areas[selected];
  const related = [...projects, ...historicalProjects].filter(p => p.location?.includes(area.name));
  return <section className="site-section"><div className="site-wrap"><p className="eyebrow">Where we work</p><h2 className="section-title">Explore our geographic experience</h2><p className="mt-5 max-w-3xl leading-8 text-slate-600">Select an area to explore its project records. Past experience does not indicate a current field presence. Map locations are approximate.</p>
    <div className="mt-8 flex flex-wrap gap-3" aria-label="Choose a project area">{areas.map((a,i) => <button key={a.name} aria-pressed={i === selected} onClick={() => setSelected(i)} className={`rounded-full border px-5 py-3 font-semibold ${i === selected ? "bg-navy text-white border-navy" : "bg-white text-navy border-slate-300"}`}>{a.name}</button>)}</div>
    <div className="mt-6 grid overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-[1.3fr_1fr]"><div className="bg-slate-100"><iframe key={area.name} title={`Project area map: ${area.name}`} loading="lazy" referrerPolicy="no-referrer" className="h-[360px] w-full border-0 lg:h-full lg:min-h-[430px]" src={`https://www.openstreetmap.org/export/embed.html?bbox=${area.bbox}&layer=mapnik${area.marker ? `&marker=${area.marker}` : ""}`} /><p className="px-4 py-2 text-xs text-slate-600">Map data © <a href="https://www.openstreetmap.org/copyright" className="underline">OpenStreetMap contributors</a></p></div>
      <div className="p-7" aria-live="polite"><p className="eyebrow">{area.status}</p><h3 className="mt-3 text-2xl font-semibold text-navy">{area.name}</h3><p className="mt-4 leading-7 text-slate-600">{area.description}</p><ul className="mt-5 space-y-3">{related.map(p => <li key={p.slug}><Link className="text-link text-sm" href={`/projects/${p.slug}`}>{p.title}</Link></li>)}</ul></div>
    </div><p className="mt-4 text-sm leading-6 text-slate-500">MIS’s wider profile also records experience in Oromia. Additional locations will be mapped when project-level location records are available. Shebedino school-feeding experience is listed in the portfolio.</p>
  </div></section>;
}
