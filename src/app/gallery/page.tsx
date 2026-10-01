import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { ProjectPhoto } from "@/components/sections/project-photo";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { getProjectMedia } from "@/data/project-media";
import { projects } from "@/data/projects";
export const metadata = { title: "Project Gallery", description: "Explore MIS project image spaces and documented activities in education, child protection and humanitarian response." };
export default function Gallery() {
  return <>
    <Hero title="Our work, in focus." subtitle="Project gallery" description="Explore the activities and communities behind MIS’s project portfolio." compact ctaText="Explore image spaces" ctaHref="#gallery" ctaSecondaryText="Read project updates" ctaSecondaryHref="/news"/>
    <div className="site-wrap pt-10"><p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">The photographs currently shown are illustrative stock images. They are temporary spaces for MIS’s own approved project photographs and do not depict the people or activities described.</p></div>
    <ProjectGallery/>
    <section id="gallery" className="site-section giving-soft"><div className="site-wrap"><p className="giving-kicker">Explore by project</p><h2 className="section-title">Places for every project story.</h2><div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{projects.map(project => <article key={project.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"><ProjectPhoto media={getProjectMedia(project.slug)}/><div className="p-6"><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{project.status} · {project.period}</p><h3 className="mt-3 text-xl font-semibold text-navy"><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p className="mt-3 text-sm leading-6 text-slate-600">{project.location}</p><Link href={`/projects/${project.slug}`} className="text-link mt-5">Explore this project →</Link></div></article>)}</div></div></section>
  </>;
}
