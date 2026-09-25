"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 35); update(); window.addEventListener("scroll", update, {passive:true}); return () => window.removeEventListener("scroll", update); }, []);
  const primaryNav = navItems.filter((item) => item.href !== "/contact");

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

        <div className="hidden items-center gap-6 xl:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
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
          <SheetContent side="right" className="w-[320px] p-0 sm:w-[360px]">
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
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-slate-100 py-3.5 text-base font-semibold transition-colors ${
                      active ? "text-warm-dark" : "text-slate-700 hover:text-navy"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}

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
