import Link from "next/link";
import { ArrowRight, Star, Users, Heart, Handshake } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { partners, partnerTiers } from "@/data/partners";

function getPartnerInitials(name: string) {
  return name
    .split(" ")
    .filter((word) => /[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("") || "P";
}

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Our Partners"
        subtitle="Working Together"
        description="We collaborate with organizations, businesses, and communities who share our commitment to supporting children and families in Ethiopia."
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
            description="Partnerships are essential to our mission. By working together, we can create greater impact and reach more children and families."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Make an Impact</h3>
              <p className="text-gray-600">
                Partner with us to directly support children and families through our proven programs.
              </p>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Reach & Resources</h3>
              <p className="text-gray-600">
                Leverage our local expertise, community networks, and program infrastructure.
              </p>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparent Partnership</h3>
              <p className="text-gray-600">
                Benefit from our commitment to accountability, reporting, and shared success metrics.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Partnership Opportunities"
            title="Ways to Partner"
            description="We offer various partnership opportunities to match your organization's goals and capacity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-warm" />
              </div>
              <h4 className="font-bold text-navy mb-2">Child Sponsorship</h4>
              <p className="text-gray-600 text-sm">Corporate sponsorship of children in our program</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-warm" />
              </div>
              <h4 className="font-bold text-navy mb-2">Program Support</h4>
              <p className="text-gray-600 text-sm">Fund specific programs or initiatives</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-warm" />
              </div>
              <h4 className="font-bold text-navy mb-2">In-Kind Donations</h4>
              <p className="text-gray-600 text-sm">Products, services, or expertise donations</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-7 h-7 text-warm" />
              </div>
              <h4 className="font-bold text-navy mb-2">Strategic Partnership</h4>
              <p className="text-gray-600 text-sm">Long-term collaborative relationships</p>
            </div>
          </div>
        </div>
      </Section>

      {partnerTiers.map((tier) => {
        const tierPartners = partners.filter((p) => p.tier === tier.key);
        return (
          <Section key={tier.key}>
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
                        <span className="text-sm text-navy font-semibold tracking-wide" aria-hidden="true">
                          {getPartnerInitials(partner.name)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{partner.name}</h4>
                        <p className="text-xs text-gray-500 uppercase">{partner.tier} Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                    <span className="text-warm hover:text-warm-dark text-sm font-medium inline-flex items-center gap-1">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="bg-ngo-secondary">
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
                    <h4 className="font-semibold text-navy mb-1">Contact Us</h4>
                    <p className="text-gray-600 text-sm">
                      Reach out to discuss your partnership interests and goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-warm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Explore Options</h4>
                    <p className="text-gray-600 text-sm">
                      We'll help you find the partnership model that best fits.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-warm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Make an Impact</h4>
                    <p className="text-gray-600 text-sm">
                      Together, we'll create meaningful change for children and families.
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

      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Support Our Mission
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Every partnership helps us reach more children and create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-white text-warm-dark font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
