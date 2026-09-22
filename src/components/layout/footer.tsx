import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { navItems, siteConfig } from "@/data/constants";

export function Footer() {
  const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook" },
    { href: siteConfig.social.linkedin, label: "LinkedIn" },
    { href: siteConfig.social.instagram, label: "Instagram" },
    { href: siteConfig.social.youtube, label: "YouTube" },
  ].filter((item) => item.href && item.href !== "#");

  return (
    <footer className="bg-navy-dark text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-warm">Multi Integrated Support</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Working with communities across Ethiopia.</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 font-semibold text-navy-dark transition hover:bg-slate-100"
          >
            Contact MIS Ethiopia
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-sm font-bold tracking-wider text-navy-dark">
                MIS
              </div>
              <div>
                <div className="font-bold text-white">MIS Ethiopia</div>
                <div className="text-xs text-white/50">Multi Integrated Support</div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">{siteConfig.description}</p>

            <div className="mt-6 space-y-3 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-warm" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              {siteConfig.email && !siteConfig.email.includes("example") && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-warm" />
                  <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                    {siteConfig.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/85">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/85">Resources</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/reports" className="text-sm text-white/60 transition hover:text-white">Reports</Link></li>
              <li><Link href="/partners" className="text-sm text-white/60 transition hover:text-white">Partnerships</Link></li>
              <li><Link href="/sponsorship" className="text-sm text-white/60 transition hover:text-white">Child Sponsorship</Link></li>
              <li><Link href="/news" className="text-sm text-white/60 transition hover:text-white">News & Updates</Link></li>
              <li><Link href="/donate" className="text-sm text-white/60 transition hover:text-white">Support Our Work</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/85">Our commitment</h3>
            <p className="mt-5 text-sm leading-7 text-white/60">
              Community participation, safeguarding, responsible stewardship, and transparent reporting guide how MIS plans and delivers its work.
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-white/65 transition hover:border-white/25 hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
