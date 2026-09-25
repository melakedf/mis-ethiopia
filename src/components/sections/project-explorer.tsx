"use client";

import { ProjectPhoto } from "@/components/sections/project-photo";
import { getProjectMedia } from "@/data/project-media";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectTopics } from "@/data/project-topics";
import { historicalProjects } from "@/data/project-history";

const records = [
  ...projects.map(p => ({ ...p, theme: "Recent projects" })),
  ...historicalProjects.map(p => ({ ...p, status: "Earlier experience" })),
];
const regions = ["Addis Ababa", "Benishangul-Gumuz", "Amhara", "Shebedino"];

export function ProjectExplorer() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [region, setRegion] = useState("");
  const [topic, setTopic] = useState("");
  const filtered = records.filter(p =>
    (!topic || projectTopics[p.slug]?.includes(topic)) &&
    (!status || p.status === status) &&
    (!region || p.location?.includes(region)) &&
    [p.title, p.partner, p.location, p.theme, projectTopics[p.slug]?.join(" "), p.body].join(" ").toLowerCase().includes(query.trim().toLowerCase())
  );
  function reset() { setQuery(""); setStatus(""); setRegion(""); setTopic(""); }
  return <div>
    <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 xl:grid-cols-4">
      <label className="text-sm font-semibold text-navy">Search projects<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Project, partner or area of work" className="mt-2 w-full rounded-lg border border-slate-300 p-3 font-normal" /></label>
      <label className="text-sm font-semibold text-navy">Project status<select value={status} onChange={e => setStatus(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 font-normal"><option value="">All experience</option>{["Active", "Completed", "Earlier experience"].map(s => <option key={s}>{s}</option>)}</select></label>
      <label className="text-sm font-semibold text-navy">Location<select value={region} onChange={e => setRegion(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 font-normal"><option value="">All locations</option>{regions.map(r => <option key={r}>{r}</option>)}</select></label>
      <label className="text-sm font-semibold text-navy">Program area<select value={topic} onChange={e => setTopic(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 font-normal"><option value="">All program areas</option>{[...new Set(Object.values(projectTopics).flat())].sort().map(t => <option key={t}>{t}</option>)}</select></label>
    </div>
    <div className="my-6 flex items-center justify-between gap-4"><p role="status" className="text-sm text-slate-600">{filtered.length} project records shown</p>{(query || status || region || topic) && <button onClick={reset} className="text-link">Clear filters</button>}</div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(p => <article key={p.slug} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-navy/40 hover:shadow-md">
      <ProjectPhoto media={getProjectMedia(p.slug)} className="-mx-7 -mt-7 mb-6 rounded-t-2xl"/>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-600">{p.status}</p>
      <h2 className="mt-4 text-2xl font-semibold leading-tight text-navy"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h2>
      <p className="mt-3 text-sm text-slate-600">{p.period || "Earlier program experience"}</p>
      {p.location && <p className="mt-2 text-sm text-slate-600">{p.location}</p>}
      {p.partner && <p className="mt-3 text-sm font-medium text-navy">With {p.partner}</p>}
      <p className="my-5 line-clamp-3 leading-7 text-slate-600">{p.body}</p>
      <Link href={`/projects/${p.slug}`} className="text-link mt-auto" aria-label={`Read about ${p.title}`}>Explore project →</Link>
    </article>)}</div>
    {filtered.length === 0 && <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center"><h2 className="text-xl font-semibold text-navy">No matching projects</h2><p className="mt-3 text-slate-600">Try another keyword or clear the filters to explore all our experience.</p><button className="text-link mt-5" onClick={reset}>Show all projects</button></div>}
  </div>;
}
