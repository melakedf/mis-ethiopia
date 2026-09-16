import Link from "next/link";
import { hasDatabase, prisma } from "@/lib/prisma";
import { deleteContentAction, markMessageReadAction, saveContentAction, saveSettingAction, uploadMediaAction } from "../actions";

const types = ["page", "program", "project", "region", "sponsorship", "story", "partner", "report", "news", "homepage"];

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ type?: string; edit?: string }> }) {
  const query = await searchParams;
  const selectedType = types.includes(query.type ?? "") ? query.type! : "project";
  const databaseReady = hasDatabase();
  const [entries, messages, settings, media] = databaseReady
    ? await Promise.all([
        prisma.contentEntry.findMany({ where: { type: selectedType }, orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] }),
        prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
        prisma.siteSetting.findMany({ orderBy: { key: "asc" } }),
        prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" }, take: 24 }),
      ])
    : [[], [], [], []];
  const editing = query.edit ? entries.find((entry) => entry.id === query.edit) : undefined;

  return (
    <main className="mx-auto max-w-7xl px-5 py-8">
      {!databaseReady ? <div className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-900"><b>Database setup required.</b> Add the Neon database settings, run the migration and seed, then this dashboard will become editable.</div> : null}
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">Content</p>
          <nav className="space-y-1">{types.map((type) => <Link key={type} href={`/admin?type=${type}`} className={`block rounded-lg px-3 py-2 text-sm capitalize ${selectedType === type ? "bg-navy text-white" : "text-slate-700 hover:bg-slate-100"}`}>{type}</Link>)}</nav>
          <a href="#messages" className="mt-5 block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Contact messages</a>
          <a href="#settings" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Site settings</a>
          <a href="#media" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Media library</a>
        </aside>
        <div className="space-y-7">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between"><div><h1 className="text-2xl font-bold capitalize text-navy">{selectedType}</h1><p className="text-sm text-slate-500">Create, edit, draft and publish website content.</p></div><Link href={`/admin?type=${selectedType}`} className="rounded-lg bg-warm px-4 py-2 text-sm font-semibold text-white">New item</Link></div>
            <div className="mb-8 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b text-slate-500"><th className="py-3">Title</th><th>Status</th><th>Updated</th><th className="text-right">Actions</th></tr></thead><tbody>{entries.map((entry) => <tr key={entry.id} className="border-b last:border-0"><td className="py-3 font-medium text-slate-900">{entry.title}</td><td><span className={`rounded-full px-2 py-1 text-xs ${entry.status === "PUBLISHED" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}>{entry.status}</span></td><td className="text-slate-500">{entry.updatedAt.toLocaleDateString()}</td><td className="text-right"><Link href={`/admin?type=${selectedType}&edit=${entry.id}`} className="mr-3 text-navy underline">Edit</Link><form action={deleteContentAction} className="inline"><input type="hidden" name="id" value={entry.id} /><button className="text-red-600 underline">Delete</button></form></td></tr>)}</tbody></table>{entries.length === 0 ? <p className="py-6 text-center text-sm text-slate-500">No {selectedType} entries yet.</p> : null}</div>
            <form action={saveContentAction} className="grid gap-4 md:grid-cols-2">
              <input type="hidden" name="id" value={editing?.id ?? ""} /><input type="hidden" name="type" value={selectedType} />
              <label className="text-sm font-semibold text-slate-700">Title<input name="title" required defaultValue={editing?.title ?? ""} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Slug<input name="slug" required defaultValue={editing?.slug ?? ""} placeholder="automatic-friendly-url" className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="md:col-span-2 text-sm font-semibold text-slate-700">Summary<textarea name="summary" defaultValue={editing?.summary ?? ""} rows={2} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="md:col-span-2 text-sm font-semibold text-slate-700">Body<textarea name="body" defaultValue={editing?.body ?? ""} rows={7} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Image URL<input name="imageUrl" type="url" defaultValue={editing?.imageUrl ?? ""} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Document/PDF URL<input name="documentUrl" type="url" defaultValue={editing?.documentUrl ?? ""} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Location<input name="location" defaultValue={editing?.location ?? ""} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Display order<input name="sortOrder" type="number" defaultValue={editing?.sortOrder ?? 0} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-semibold text-slate-700">Status<select name="status" defaultValue={editing?.status ?? "DRAFT"} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal"><option>DRAFT</option><option>PUBLISHED</option></select></label>
              <label className="flex items-center gap-2 pt-7 text-sm font-semibold text-slate-700"><input name="featured" type="checkbox" defaultChecked={editing?.featured ?? false} /> Featured item</label>
              <button disabled={!databaseReady} className="md:col-span-2 rounded-xl bg-navy px-5 py-3 font-semibold text-white disabled:opacity-40">{editing ? "Update content" : "Save content"}</button>
            </form>
          </section>
          <section id="messages" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-navy">Contact messages</h2><div className="mt-4 space-y-3">{messages.map((message) => <article key={message.id} className={`rounded-xl border p-4 ${message.isRead ? "bg-white" : "border-warm/40 bg-orange-50"}`}><div className="flex flex-wrap justify-between gap-2"><b>{message.firstName} {message.lastName} · {message.subject}</b><span className="text-xs text-slate-500">{message.createdAt.toLocaleString()}</span></div><a className="text-sm text-navy underline" href={`mailto:${message.email}`}>{message.email}</a><p className="mt-2 whitespace-pre-wrap text-sm text-slate-700">{message.message}</p>{!message.isRead ? <form action={markMessageReadAction} className="mt-3"><input type="hidden" name="id" value={message.id} /><button className="text-xs font-semibold text-warm">Mark as read</button></form> : null}</article>)}{messages.length === 0 ? <p className="text-sm text-slate-500">No messages yet.</p> : null}</div></section>
          <section id="settings" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-navy">Site settings</h2><p className="mt-1 text-sm text-slate-500">Use homepage_notice for a temporary banner. Add other simple text settings as needed.</p><div className="mt-4 space-y-2">{settings.map((setting) => <div key={setting.key} className="rounded-lg bg-slate-50 px-3 py-2 text-sm"><b>{setting.key}</b>: {setting.value}</div>)}</div><form action={saveSettingAction} className="mt-5 grid gap-3 md:grid-cols-[1fr_2fr_auto]"><input name="key" placeholder="homepage_notice" className="rounded-lg border px-3 py-2" /><input name="value" placeholder="Setting value" className="rounded-lg border px-3 py-2" /><button disabled={!databaseReady} className="rounded-lg bg-navy px-4 py-2 text-white disabled:opacity-40">Save</button></form></section>
          <section id="media" className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-navy">Media library</h2><p className="mt-1 text-sm text-slate-500">Upload images and PDFs, then copy their URL into any content item.</p><form action={uploadMediaAction} className="mt-5 grid gap-3 md:grid-cols-2" encType="multipart/form-data"><input name="title" required placeholder="File title" className="rounded-lg border px-3 py-2" /><input name="altText" placeholder="Image description (accessibility)" className="rounded-lg border px-3 py-2" /><input name="file" type="file" required accept="image/*,.pdf" className="md:col-span-2 rounded-lg border p-3" /><button disabled={!databaseReady} className="md:col-span-2 rounded-lg bg-navy px-4 py-2 text-white disabled:opacity-40">Upload file</button></form><div className="mt-6 grid gap-3 sm:grid-cols-2">{media.map((asset) => <div key={asset.id} className="rounded-xl border p-3"><b className="text-sm text-slate-800">{asset.title}</b><input readOnly value={asset.url} className="mt-2 w-full rounded border bg-slate-50 px-2 py-1 text-xs" /></div>)}</div></section>
        </div>
      </div>
    </main>
  );
}
