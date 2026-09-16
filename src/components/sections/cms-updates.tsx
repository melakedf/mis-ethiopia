import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hasDatabase, prisma } from "@/lib/prisma";

export async function CmsUpdates() {
  if (!hasDatabase()) return null;
  try {
    const [notice, entries] = await Promise.all([
      prisma.siteSetting.findUnique({ where: { key: "homepage_notice" } }),
      prisma.contentEntry.findMany({ where: { status: "PUBLISHED", featured: true }, orderBy: [{ sortOrder: "asc" }, { publishedAt: "desc" }], take: 3 }),
    ]);
    return <>{notice?.value ? <div className="bg-warm px-4 py-3 text-center text-sm font-semibold text-white">{notice.value}</div> : null}{entries.length ? <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-wider text-warm">Latest from MIS</p><h2 className="mt-2 text-3xl font-bold text-navy">Current programs and updates</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{entries.map((entry) => <article key={entry.id} className="rounded-2xl bg-white p-6 shadow-sm"><span className="text-xs font-bold uppercase tracking-wider text-warm">{entry.type}</span><h3 className="mt-2 text-xl font-bold text-navy">{entry.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{entry.summary}</p>{entry.location ? <p className="mt-3 text-xs font-medium text-slate-500">{entry.location}</p> : null}<Link href={`/content/${entry.type}/${entry.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">Read more <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></section> : null}</>;
  } catch {
    return null;
  }
}
