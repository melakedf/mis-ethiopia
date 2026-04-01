import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero, ProgramCard, Section, SectionHeader } from "@/components/sections";
import { programs, categories } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="Comprehensive Development Initiatives"
        description="We implement integrated programs addressing healthcare, education, food security, and community development across Ethiopia."
        ctaText="Support Our Work"
        ctaSecondaryText="Learn More"
        ctaHref="/donate"
        compact
      />

      <Section className="bg-ngo-secondary -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-warm mb-1">150,000+</div>
              <div className="text-gray-600 text-sm">Beneficiaries Reached</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-warm mb-1">6</div>
              <div className="text-gray-600 text-sm">Core Program Areas</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-warm mb-1">12</div>
              <div className="text-gray-600 text-sm">Regional Offices</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-warm mb-1">50+</div>
              <div className="text-gray-600 text-sm">Partner Organizations</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Focus Areas"
            title="Program Categories"
            description="Our integrated approach addresses multiple dimensions of community development."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ngo-secondary rounded-2xl p-8">
              <div className="w-16 h-16 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Health & Nutrition</h3>
              <p className="text-gray-600 mb-4">
                Providing essential healthcare services, maternal care, vaccinations, and nutrition programs to vulnerable populations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Primary healthcare clinics</li>
                <li>• Maternal and child health</li>
                <li>• Nutrition supplementation</li>
                <li>• Health education</li>
              </ul>
            </div>

            <div className="bg-ngo-secondary rounded-2xl p-8">
              <div className="w-16 h-16 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Education</h3>
              <p className="text-gray-600 mb-4">
                Supporting school access, teacher training, and educational materials to ensure every child can learn and succeed.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• School construction</li>
                <li>• Scholarship programs</li>
                <li>• Teacher training</li>
                <li>• Learning materials</li>
              </ul>
            </div>

            <div className="bg-ngo-secondary rounded-2xl p-8">
              <div className="w-16 h-16 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Food Security</h3>
              <p className="text-gray-600 mb-4">
                Implementing sustainable agriculture and food distribution to combat hunger and ensure community food sovereignty.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sustainable farming</li>
                <li>• Food distribution</li>
                <li>• Agricultural training</li>
                <li>• Irrigation projects</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="All Programs"
            title="Explore Our Initiatives"
            description="Discover the various programs making a difference in communities across Ethiopia."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.description}
                image={program.image}
                category={program.category}
                impact={program.impact}
                icon={program.icon}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Get Involved"
                title="Support Our Programs"
                description="Your contribution helps us expand our reach and deepen our impact in communities across Ethiopia."
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Whether you choose to donate, volunteer, or partner with us, your support directly enables us to deliver life-changing programs to those who need them most.
              </p>
              <div className="space-y-4">
                <Link
                  href="/donate"
                  className="flex items-center gap-3 p-4 bg-ngo-secondary rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center">
                    <span className="text-warm font-bold">$</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Make a Donation</h4>
                    <p className="text-gray-600 text-sm">Support specific programs or general operations</p>
                  </div>
                </Link>
                <Link
                  href="/sponsorship"
                  className="flex items-center gap-3 p-4 bg-ngo-secondary rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Sponsor a Child</h4>
                    <p className="text-gray-600 text-sm">Transform a child's life through education</p>
                  </div>
                </Link>
                <Link
                  href="/partners"
                  className="flex items-center gap-3 p-4 bg-ngo-secondary rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Partner With Us</h4>
                    <p className="text-gray-600 text-sm">Corporate partnerships and collaborations</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=500&fit=crop"
                alt="Community engagement"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
