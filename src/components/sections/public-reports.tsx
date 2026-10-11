import { prisma,hasDatabase } from "@/lib/prisma";
export async function PublicReports(){
 if(!hasDatabase())return null;
 try{const reviewed=await prisma.siteSetting.findMany({where:{key:{startsWith:"reviewed-report:"}},select:{key:true,value:true}});const ids=reviewed.filter(r=>r.value===true).map(r=>r.key.slice("reviewed-report:".length));
 const reports=await prisma.report.findMany({where:{id:{in:ids},status:"PUBLISHED"},orderBy:{year:"desc"}});
 if(!reports.length)return null;
 return <section className="site-section"><div className="site-wrap"><h2 className="section-title">Reports and policies</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{reports.map(r=><article key={r.id} className="rounded-2xl border p-7"><p>{r.year} · PDF</p><h3 className="mt-3 text-xl font-semibold">{r.title}</h3><p className="my-4">{r.shortDescription}</p><a className="text-link" href={r.fileUrl||"/contact"}>Download PDF ↓</a></article>)}</div></div></section>;
 }catch{return null;}
}
