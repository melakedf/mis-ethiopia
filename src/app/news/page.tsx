import { Hero } from "@/components/sections/hero";
import { projects } from "@/data/projects";
import { NewsExplorer, type NewsEntry } from "@/components/sections/news-explorer";
import { hasDatabase, prisma } from "@/lib/prisma";
export const metadata={title:"News and Updates",description:"Search MIS program updates and field experience."};
export const revalidate=60;
export default async function News(){
 const entries: NewsEntry[]=[projects[5],projects[0]].map((p,i)=>({title:p.title,description:p.body,href:`/projects/${p.slug}`,category:i===0?"Education and nutrition":"Child protection",location:p.location,period:i===0?"2026 summer program":"Program overview · August 2026"}));
 if(hasDatabase()) {try {const updates=await prisma.project.findMany({where:{status:"PUBLISHED",featured:true},orderBy:{displayOrder:"asc"}});entries.push(...updates.map(e=>({title:e.title,description:e.description,href:`/content/project/${e.slug}`,category:"Program updates",location:"",period:"Published update"})));} catch { /* Verified static updates remain available during a database outage. */ }}
 return <><Hero title="From our work in communities." subtitle="News and updates" description="Learning, program activity and documented project experience from MIS Ethiopia." compact ctaText="View updates" ctaHref="#updates" ctaSecondaryText="Reports and resources" ctaSecondaryHref="/reports"/><section id="updates" className="site-section"><div className="site-wrap"><NewsExplorer entries={entries}/></div></section></>;
}
