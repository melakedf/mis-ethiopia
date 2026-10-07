import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
export const metadata = {
 title: "A small beginning, a meaningful difference: Asima’s education",
 description: "How a community monitoring committee supported a student’s access to education through MIS’s CSSP2-supported work in Mao Komo.",
 alternates: { canonical: "/news/asima-inclusive-education" },
 openGraph: { images: [{ url: "/images/asima-inclusive-education.jpg" }] },
};
export default function AsimaStory() {
 return <><Hero title="A small beginning. A meaningful difference." subtitle="Inclusive education · CSSP2 community story" description="Community action helped Asima access a wheelchair to continue her education in Tongo." compact ctaText="Read Asima’s story" ctaHref="#asima-story" ctaSecondaryText="Explore the project" ctaSecondaryHref="/projects/cssp2-community-inclusion"/>
 <article id="asima-story" className="site-section"><div className="site-wrap"><div className="mx-auto max-w-4xl">
 <p className="giving-kicker">From Multi Integrated Support · Mao Komo, Benishangul-Gumuz</p>
 <h2 className="section-title">Supporting Asima’s opportunity to learn</h2>
 <p className="mt-6 text-lg leading-8 text-slate-600">At the time of this story, Asima Mustefa was a Grade 6 student at Aba Harun Primary School in Tongo, Mao Komo Special Woreda. She relied on her family’s assistance to move around, creating a barrier to accessing education.</p>
 <figure className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5"><Image src="/images/asima-inclusive-education.jpg" alt="MIS photo collage showing Asima using a wheelchair and seated at a classroom desk" width={500} height={261} sizes="(max-width: 540px) 90vw, 500px" className="mx-auto h-auto w-full max-w-[500px]"/><figcaption className="mt-4 text-sm leading-6 text-slate-600">Asima’s story, shared in MIS’s original Facebook photo collage.</figcaption></figure>
 <p className="mt-5 leading-8 text-slate-600">In December 2020, MIS launched a CSSP2-supported project that established community monitoring committees to support education and health service provision across six kebeles.</p>
 <p className="mt-5 leading-8 text-slate-600">Through this work, a monitoring committee identified the difficulty Asima faced and helped secure a wheelchair so she could continue her education.</p>
 <p className="mt-5 leading-8 text-slate-600">Her story shows how listening to community members and responding to a specific barrier can make a meaningful difference. We thank the monitoring committee for taking action and CSSP2 for supporting this work.</p>
 <p className="mt-8 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">Historical story adapted from MIS’s Facebook update. December 2020 refers to the project launch; the date of the wheelchair support was not recorded in the supplied post.</p>
 <Link href="/projects/cssp2-community-inclusion" className="text-link mt-6">Explore our CSSP2 community inclusion work →</Link>
 </div></div></article></>;
}
