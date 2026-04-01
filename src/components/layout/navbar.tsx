"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems, siteConfig } from "@/data/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-warm rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${isScrolled ? "text-navy" : "text-white"}`}>
                MIS Ethiopia
              </span>
              <span className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/80"}`}>
                {siteConfig.shortName}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-warm ${
                  pathname === item.href
                    ? "text-warm"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-warm hover:bg-warm-dark text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Donate Now
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="lg:hidden">
              <button
                className={`p-2 rounded-lg hover:bg-gray-100 ${isScrolled ? "text-gray-700" : "text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-4"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 bg-warm rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-navy">{siteConfig.shortName}</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-warm ${
                      pathname === item.href ? "text-warm" : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center bg-warm hover:bg-warm-dark text-white font-semibold mt-4 py-3 rounded-lg transition-colors"
                >
                  Donate Now
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
