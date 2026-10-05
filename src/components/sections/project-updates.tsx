import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectPhoto } from "@/components/sections/project-photo";
import { getProjectMedia } from "@/data/project-media";
import { projectUpdates } from "@/data/project-updates";

export function ProjectUpdates() {
  return <section className="site-section giving-soft" aria-labelledby="project-updates-title">
    <div className="site-wrap">
      <div className="giving-section-heading">
        <div><p className="giving-kicker">Stories from our work</p><h2 id="project-updates-title" className="section-title">The work behind the numbers.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Program updates and reflections from our documented project experience.</p></div>
        <Link href="/news" className="text-link">All updates <ArrowUpRight size={20}/></Link>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projectUpdates.slice(0, 3).map(entry => <article key={entry.href} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <ProjectPhoto media={getProjectMedia(entry.href.split("/").pop()!)} />
          <div className="flex flex-1 flex-col p-6"><p className="eyebrow">{entry.category}</p><p className="mt-3 text-xs leading-5 text-slate-500">{entry.period}</p><h3 className="mt-3 text-2xl font-semibold leading-tight text-navy"><Link href={entry.href}>{entry.title}</Link></h3><p className="mt-4 mb-6 text-sm leading-7 text-slate-600">{entry.description}</p><Link href={entry.href} className="text-link mt-auto" aria-label={`Read the project story: ${entry.title}`}>Read the project story <ArrowUpRight size={18}/></Link></div>
        </article>)}
      </div>
      <p className="mt-7 text-sm leading-6 text-slate-600">Explore the <Link href="/gallery" className="underline underline-offset-4">project gallery</Link> or browse our <Link href="/reports" className="underline underline-offset-4">publications and reports</Link>.</p>
    </div>
  </section>;
}
