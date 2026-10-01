"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navItems } from "@/data/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 35); update(); window.addEventListener("scroll", update, {passive:true}); return () => window.removeEventListener("scroll", update); }, []);
  const primaryNav = navItems.filter((item) => !["/contact", "/", "/impact", "/news", "/gallery"].includes(item.href));

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`mis-header fixed left-0 right-0 top-0 z-50 ${pathname === "/" && !scrolled ? "mis-header-overlay" : "mis-header-solid"}`}>
      
      <nav className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="MIS Ethiopia home">
          <Image src="/brand/mis-logo.png" alt="MIS logo" width={62} height={52} className="h-12 w-auto shrink-0 rounded bg-white object-contain p-1" />
          <div className="min-w-0">
            <div className="truncate text-[15px] font-bold leading-tight tracking-[-0.01em] text-navy-dark sm:text-base">
              MIS Ethiopia
            </div>
            <div className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.13em] text-slate-500 sm:block">
              Multi Integrated Support
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const children = item.href === "/projects" ? [
              { title: "All projects", href: "/projects" },
              { title: "Active projects", href: "/projects?status=Active#portfolio" },
              { title: "Completed projects", href: "/projects?status=Completed#portfolio" },
              { title: "Earlier experience", href: "/projects?status=Earlier%20experience#portfolio" },
            ] : item.href === "/reports" ? [
              { title: "Publications and reports", href: "/reports" },
              { title: "News and updates", href: "/news" },
              { title: "Project gallery", href: "/gallery" },
            ] : null;
            if (children) return <div key={item.href} className="nav-dropdown relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null); }} onKeyDown={event => { if (event.key === "Escape") { setOpenMenu(null); event.currentTarget.querySelector("button")?.focus(); } }}>
              <button type="button" className="nav-dropdown-toggle flex items-center gap-1.5 py-3 text-sm font-semibold" aria-expanded={openMenu === item.href} aria-controls={`nav-${item.title.toLowerCase()}`} onClick={() => setOpenMenu(openMenu === item.href ? null : item.href)}>{item.title}<ChevronDown size={14}/></button>
              {openMenu === item.href && <div id={`nav-${item.title.toLowerCase()}`} className="nav-dropdown-panel absolute left-0 top-full min-w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">{children.map(child => <Link key={child.href} href={child.href} onClick={() => setOpenMenu(null)} className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">{child.title}</Link>)}</div>}
            </div>;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[14px] font-semibold transition-colors ${
                  active ? "text-navy" : "text-slate-600 hover:text-navy"
                }`}
              >
                {item.title}
                {active && <span className="absolute inset-x-0 -bottom-[20px] h-0.5 rounded-full bg-warm" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 px-5 text-sm font-semibold text-navy transition hover:border-navy/30 hover:bg-slate-50"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-warm px-5 text-sm font-semibold text-navy-dark shadow-sm transition hover:bg-warm-light"
          >
            Support Our Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="xl:hidden"
            render={
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy transition hover:bg-slate-50"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(360px,100vw)] overflow-y-auto overscroll-contain p-0">
            <SheetTitle className="sr-only">MIS navigation</SheetTitle>
            <div className="border-b border-slate-200 px-6 py-5">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <Image src="/brand/mis-logo.png" alt="MIS logo" width={62} height={52} className="h-12 w-auto shrink-0 rounded bg-white object-contain p-1" />
                <div>
                  <div className="font-bold text-navy-dark">MIS Ethiopia</div>
                  <div className="text-xs text-slate-500">Multi Integrated Support</div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col px-6 py-6">
              {navItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-slate-100 py-3.5 text-base font-semibold transition-colors ${
                      active ? "text-warm-dark" : "text-slate-700 hover:text-navy"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}

              <div className="mt-4 grid grid-cols-2 gap-2" aria-label="Project shortcuts">
                {[{ title: "Active projects", href: "/projects?status=Active#portfolio" }, { title: "Completed projects", href: "/projects?status=Completed#portfolio" }].map(item => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg bg-slate-100 p-3 text-center text-sm font-semibold text-navy">{item.title}</Link>)}
              </div>
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-warm px-5 font-semibold text-navy-dark"
              >
                Support Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
