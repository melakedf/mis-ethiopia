import { redirect } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { getAdminSession } from "@/lib/auth";
import { loginAction } from "../actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getAdminSession()) redirect("/admin");
  const { error } = await searchParams;
  return (
    <div className="admin-shell flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-7 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warm text-white"><Heart /></span>
          <div><h1 className="text-2xl font-bold text-navy">MIS Website Admin</h1><p className="text-sm text-slate-500">Authorized staff access only</p></div>
        </div>
        {error ? <p className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">The email or password is incorrect.</p> : null}
        <form action={loginAction} className="space-y-5">
          <label className="block text-sm font-semibold text-slate-700">Email<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal" /></label>
          <label className="block text-sm font-semibold text-slate-700">Password<input name="password" type="password" required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal" /></label>
          <button className="w-full rounded-xl bg-navy px-4 py-3 font-semibold text-white hover:bg-navy-light">Sign in</button>
        </form>
        <Link href="/" className="mt-6 block text-center text-sm text-slate-500 hover:text-warm">Return to website</Link>
      </div>
    </div>
  );
}
