import Link from "next/link";
import { SummerLearningPhotos } from "@/components/sections/summer-learning-photos";
import { SummerPhotoStory } from "@/components/sections/summer-photo-story";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { ProjectPhoto } from "@/components/sections/project-photo";
import { getProjectMedia } from "@/data/project-media";
import { historicalProjects } from "@/data/project-history";
import { projects } from "@/data/projects";
import { projectStories } from "@/data/project-stories";
import { projectDetails } from "@/data/project-details";

const portfolio = [...projects, ...historicalProjects];
export function generateStaticParams() { return portfolio.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find(p => p.slug === slug);
  return { title: project?.title, description: project?.body, alternates: { canonical: `/projects/${slug}` } };
}
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find(p => p.slug === slug);
  if (!project) notFound();
  const details = projectDetails[slug];
  const recent = "status" in project;
  const facts = [
    ["Period", project.period], ["Partner", project.partner], ["Location", project.location],
    ["Focus", "theme" in project ? project.theme : null],
    [details?.budgetLabel || "Recorded project budget", details?.budget],
    ["Recorded beneficiaries", details?.beneficiaries],
  ].filter(([, value]) => value);
  return <>
    <Hero title={project.title} subtitle={recent ? `${project.status} · ${project.location}` : "Past project experience"} compact ctaText="Discuss a partnership" ctaHref="/contact" ctaSecondaryText="All projects" ctaSecondaryHref="/projects#portfolio" />
    <section className="site-section"><div className="site-wrap grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div className="min-w-0">
        <ProjectPhoto media={getProjectMedia(slug)} className="mb-8 rounded-2xl" sizes="(max-width: 1024px) 100vw, 60vw" />
        <h2 className="section-title">About the project</h2>
        {details?.fullTitle && <p className="mt-5 font-semibold leading-7 text-navy">{details.fullTitle}</p>}
        <p className="mt-6 text-lg leading-8 text-slate-600">{project.body}</p>
        {projectStories[slug]?.map(section => <section key={section.heading} className="mt-9"><h2 className="text-2xl font-semibold text-navy">{section.heading}</h2><p className="mt-4 leading-8 text-slate-600">{section.text}</p></section>)}
        {details?.contributions && <section className="mt-9"><h2 className="text-2xl font-semibold text-navy">Project contributions</h2><dl className="mt-5 divide-y divide-slate-200">{details.contributions.map(item => <div key={item.label} className="flex flex-wrap justify-between gap-3 py-4"><dt className="text-slate-600">{item.label}</dt><dd className="font-semibold text-navy">{item.amount}</dd></div>)}</dl><p className="mt-3 text-sm leading-6 text-slate-600">The target schools’ contribution included follow-up and technical support.</p></section>}
        {slug === "kolfe-summer-school" && <Link href="/resources/mis-summer-school-2026.pdf" className="text-link mt-8">Download the summer-school brief (PDF) →</Link>}
        {slug === "kolfe-summer-school" && <><section className="mt-9"><h2 className="text-2xl font-semibold text-navy">Looking back at the opening</h2><p className="mt-4 leading-7 text-slate-600">The program began with classroom activities and teaching support, alongside meals on program days.</p><Link href="/news/summer-scholars-opening" className="text-link mt-4">Read the opening-day story →</Link></section><SummerLearningPhotos/><SummerPhotoStory/></>}
        {slug === "integrated-child-protection" && <section className="mt-9 rounded-2xl bg-slate-50 p-6"><h2 className="text-2xl font-semibold text-navy">Sponsor Appreciation Day</h2><p className="mt-4 leading-7 text-slate-600">Children and families gathered with MIS and IGO to exchange messages of appreciation, discuss education and connect with Dr. Velma Kirksey-Tarver by Zoom.</p><Link href="/news/sponsor-appreciation-day" className="text-link mt-5">Read the gathering’s story →</Link></section>}
        <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-6"><Link href="/reports" className="text-link">Public resources →</Link><Link href="/contact" className="text-link">Ask about this project →</Link></div>
      </div>
      <aside className="h-fit min-w-0 rounded-2xl bg-slate-100 p-6 sm:p-8">
        {recent ? <><p className="text-5xl font-semibold text-navy">{project.figure}</p><h2 className="mt-3 text-xl font-semibold text-navy">{project.unit}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{project.qualifier}</p></> : <h2 className="text-xl font-semibold text-navy">Project overview</h2>}
        <dl className="mt-7 space-y-6 border-t border-slate-300 pt-6">{facts.map(([label, value]) => <div key={label}><dt className="text-sm font-semibold text-slate-500">{label}</dt><dd className="mt-1 leading-7 text-navy">{value}</dd></div>)}</dl>
        {details?.budget && <p className="mt-6 text-xs leading-6 text-slate-600">Budget amounts describe recorded project allocations, not audited expenditure.</p>}
        {details?.recordNote && <div className="mt-6 border-t border-slate-300 pt-6"><h3 className="font-semibold text-navy">About this record</h3><p className="mt-2 text-sm leading-6 text-slate-600">{details.recordNote}</p></div>}
      </aside>
    </div></section>
  </>;
}
