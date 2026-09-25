import { Hero } from "@/components/sections/hero";
import { ProjectExplorer } from "@/components/sections/project-explorer";
export const metadata = { title: "Projects", description: "Explore MIS’s current initiatives and past projects by location, status and partner." };
export default function Projects() {
  return <><Hero title="Local action. Across communities." subtitle="Our projects" description="Explore current initiatives and documented experience in humanitarian response and community development." compact ctaHref="#portfolio" ctaText="Explore projects" ctaSecondaryHref="/impact" ctaSecondaryText="See our impact" />
    <section id="portfolio" className="site-section bg-slate-50"><div className="site-wrap">
      <div id="earlier-work" className="mb-8 max-w-3xl"><p className="eyebrow">Our portfolio</p><p className="mt-4 leading-8 text-slate-600">Our active child-protection initiative is based in Kolfe Keranyo, Addis Ababa. The records below also describe completed projects and earlier partnerships. Historical locations do not imply a current operational presence.</p></div>
      <ProjectExplorer />
      <section className="mt-14 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-semibold">Additional thematic experience</h2><p className="mt-5 leading-8 text-white/80">MIS’s organizational profile also records four women’s economic-empowerment projects using savings and credit cooperatives and village savings groups in Benishangul-Gumuz, as well as HIV prevention, care and support, maternal and child health, and community family-planning activities. These are presented as broader program experience rather than additional, separately counted projects.</p></section>
    </div></section></>;
}
