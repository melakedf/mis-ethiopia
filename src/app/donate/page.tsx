import Link from "next/link";
import { Building2, Heart, Mail, ShieldCheck } from "lucide-react";
import { Hero, Section } from "@/components/sections";
import { siteConfig } from "@/data/constants";

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Support MIS Ethiopia"
        subtitle="Give responsibly"
        description="Your support helps MIS strengthen education, child protection, nutrition, family resilience and humanitarian response in Ethiopia."
        ctaText="Contact MIS"
        ctaHref="/contact"
        ctaSecondaryText="Explore Our Work"
        ctaSecondaryHref="/programs"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=1080&fit=crop"
      />
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-warm/10 text-warm"><ShieldCheck className="h-7 w-7" /></span>
              <h2 className="mt-5 text-3xl font-bold text-navy">Approved giving arrangements only</h2>
              <p className="mt-4 leading-7 text-slate-600">MIS Ethiopia is finalizing the account, payment processor, receipt procedure, privacy notice and financial-control workflow required for safe online giving. The website does not currently collect card or mobile-money payments.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border p-6"><Building2 className="h-7 w-7 text-warm" /><h3 className="mt-4 text-xl font-bold text-navy">Donation or bank-transfer inquiry</h3><p className="mt-2 text-sm leading-6 text-slate-600">Contact MIS directly to confirm the currently approved account details, purpose and receipt process before sending funds.</p><a href={`mailto:${siteConfig.email}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-warm"><Mail className="h-4 w-4" />{siteConfig.email}</a></div>
              <div className="rounded-2xl border p-6"><Heart className="h-7 w-7 text-warm" /><h3 className="mt-4 text-xl font-bold text-navy">Child sponsorship</h3><p className="mt-2 text-sm leading-6 text-slate-600">Learn about MIS&apos;s child-centered sponsorship approach and contact our team to discuss an approved sponsorship arrangement.</p><Link href="/sponsorship" className="mt-5 inline-flex font-semibold text-warm">Learn about sponsorship →</Link></div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
