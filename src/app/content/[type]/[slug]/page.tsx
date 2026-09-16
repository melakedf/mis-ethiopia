import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasDatabase, prisma } from "@/lib/prisma";

type Props = { params: Promise<{ type: string; slug: string }> };

async function getEntry(type: string, slug: string) {
  if (!hasDatabase()) return null;
  return prisma.contentEntry.findFirst({ where: { type, slug, status: "PUBLISHED" } });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const entry = await getEntry(type, slug);
  return entry ? { title: entry.title, description: entry.summary ?? undefined } : {};
}

export default async function ContentDetailPage({ params }: Props) {
  const { type, slug } = await params;
  const entry = await getEntry(type, slug);
  if (!entry) notFound();
  return <article className="min-h-screen bg-white pb-20 pt-32"><div className="mx-auto max-w-3xl px-5"><Link href="/" className="text-sm font-semibold text-warm">← Back to MIS Ethiopia</Link><p className="mt-8 text-sm font-bold uppercase tracking-wider text-warm">{entry.type}</p><h1 className="mt-3 text-4xl font-bold leading-tight text-navy md:text-5xl">{entry.title}</h1>{entry.location ? <p className="mt-4 text-sm font-medium text-slate-500">{entry.location}</p> : null}{entry.imageUrl ? <img src={entry.imageUrl} alt={entry.title} className="mt-8 max-h-[480px] w-full rounded-3xl object-cover" /> : null}{entry.summary ? <p className="mt-8 text-xl leading-8 text-slate-700">{entry.summary}</p> : null}{entry.body ? <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-slate-700">{entry.body}</div> : null}{entry.documentUrl ? <a href={entry.documentUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-xl bg-navy px-5 py-3 font-semibold text-white">Open document</a> : null}</div></article>;
}
