import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "../actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="admin-shell min-h-screen bg-slate-100">
      <header className="border-b bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div><Link href="/admin" className="text-lg font-bold">MIS Website Admin</Link><p className="text-xs text-slate-400">Content, messages and settings</p></div>
          <div className="flex items-center gap-4"><Link href="/" className="text-sm text-slate-300 hover:text-white">View website</Link><form action={logoutAction}><button className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Sign out</button></form></div>
        </div>
      </header>
      {children}
    </div>
  );
}
