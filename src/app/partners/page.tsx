import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { partners, partnerTiers } from "@/data/partners";
import { CTABanner } from "@/components/sections/cta-banner";

export default function PartnersPage() {
  const platinumPartners = partners.filter((p) => p.tier === "platinum");
  const goldPartners = partners.filter((p) => p.tier === "gold");
  const silverPartners = partners.filter((p) => p.tier === "silver");

  return (
    <>
      <Hero
        title="Our Partners"
        subtitle="Collaboration for Impact"
        description="We work alongside government agencies, international organizations, corporations, and local communities to maximize our reach and effectiveness."
        ctaText="Become a Partner"
        ctaSecondaryText="View Reports"
        ctaHref="#contact"
        compact
      />

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Partner With Us"
            title="Together We Achieve More"
            description="Partnerships are at the heart of everything we do. Join a network of organizations committed to sustainable development in Ethiopia."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Expand Your Reach</h3>
              <p className="text-gray-600">
                Leverage our local expertise and community networks to extend your organization's impact.
              </p>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparent Operations</h3>
              <p className="text-gray-600">
                Benefit from our proven track record, independent audits, and commitment to accountability.
              </p>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Shared Values</h3>
              <p className="text-gray-600">
                Join partners who share your commitment to sustainable development and community empowerment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {partnerTiers.map((tier) => {
        const tierPartners = partners.filter((p) => p.tier === tier.key);
        return (
          <Section key={tier.key} className="bg-ngo-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 mb-8">
                {tier.key === "platinum" && <Star className="w-6 h-6 text-[#1E3A5F]" fill="#1E3A5F" />}
                {tier.key === "gold" && <Star className="w-6 h-6 text-warm" fill="#E67E22" />}
                <h3 className="text-2xl font-bold" style={{ color: tier.color }}>
                  {tier.name}
                </h3>
                {tier.key === "platinum" && <Star className="w-6 h-6 text-[#1E3A5F]" fill="#1E3A5F" />}
                {tier.key === "gold" && <Star className="w-6 h-6 text-warm" fill="#E67E22" />}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500 font-medium text-center leading-tight">
                          {partner.name.split(" ").map((word, i) => (
                            <span key={i}>{word}<br /></span>
                          ))}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{partner.name}</h4>
                        <p className="text-xs text-gray-500 uppercase">{partner.tier} Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm hover:text-warm-dark text-sm font-medium inline-flex items-center gap-1"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Partnership Opportunities"
                title="Become a Partner"
                description="Whether you're a corporation, foundation, or government agency, we have partnership opportunities that align with your goals."
                centered={false}
              />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-warm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Strategic Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      Long-term collaborations with shared goals and joint program development.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-warm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Corporate Sponsorship</h4>
                    <p className="text-gray-600 text-sm">
                      Support specific programs or events with measurable brand visibility.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-warm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">In-Kind Support</h4>
                    <p className="text-gray-600 text-sm">
                      Donate products, services, or expertise to support our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="bg-navy rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner?</h3>
              <p className="text-gray-300 mb-8">
                Contact our partnerships team to explore how we can work together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
              >
                Contact Partnerships Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
