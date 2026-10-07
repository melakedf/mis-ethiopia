import Link from "next/link";
import { Hero } from "@/components/sections/hero";

export const metadata = {
  title: "Inclusion and solidarity with displaced communities in Bambasi",
  description: "MIS continued CSSP2-supported advocacy with displaced communities in Bambasi and provided staff-contributed soap and clothing during the 16 Days of Activism.",
  alternates: { canonical: "/news/bambasi-inclusion-solidarity" },
};

export default function BambasiStory() {
  return <>
    <Hero title="Standing with displaced communities in Bambasi." subtitle="Social inclusion · Field story" description="Continuing advocacy and providing practical support with communities displaced from Mao Komo Special Woreda." compact ctaText="Read the story" ctaHref="#bambasi-story" ctaSecondaryText="Explore the project" ctaSecondaryHref="/projects/cssp2-community-inclusion" />
    <article id="bambasi-story" className="site-section">
      <div className="site-wrap"><div className="mx-auto max-w-4xl">
        <p className="giving-kicker">From Multi Integrated Support</p>
        <h2 className="section-title">Continuing our commitment to inclusion.</h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">During an eight-month extension of our project in Mao Komo Special Woreda, MIS worked to strengthen the inclusion of social minorities, with funding from CSSP2 through the British Council.</p>
        <p className="mt-5 leading-8 text-slate-600">Conflict forced the communities participating in the project to leave their homes and relocate to the Bambasi internally displaced persons (IDP) site. Despite the challenges of implementing development activities in a displacement setting, we continued facilitating advocacy platforms with the communities.</p>
        <h3 className="mt-9 text-2xl font-semibold text-navy">Advocacy accompanied by practical support</h3>
        <p className="mt-5 leading-8 text-slate-600">During the 16 Days of Activism against Gender-Based Violence, MIS also responded to immediate needs by distributing multipurpose soap and clothing collected from our staff. The annual campaign, observed from 25 November to 10 December, calls for an end to violence against women and girls.</p>
        <p className="mt-5 leading-8 text-slate-600">These contributions expressed our solidarity with displaced families while our advocacy work continued. We thank our staff for their generosity and CSSP2 for supporting the inclusion project.</p>
        <div className="mt-9 border-t border-slate-200 pt-6"><Link href="/projects/cssp2-community-inclusion" className="text-link">Explore our CSSP2 community inclusion work →</Link></div>
      </div></div>
    </article>
  </>;
}
