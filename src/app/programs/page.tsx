import Link from "next/link";
import { ArrowRight, Shield, BookOpen, Users, Heart, Sprout, Droplets, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { programs } from "@/data/programs";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  BookOpen,
  Users,
  Heart,
  Sprout,
  Droplets,
  AlertTriangle,
  TrendingUp,
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="Integrated development approaches across eight thematic areas"
        description="MIS Ethiopia implements integrated multi-sector programs including child sponsorship, humanitarian response, health, education, women economic empowerment, WASH, nutrition, and skills support."
        ctaText="Sponsor a Child"
        ctaSecondaryText="Make a Donation"
        ctaHref="/sponsorship"
        compact
      />

      <Section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Programs"
            title="What We Do"
            description="MIS delivers integrated development across eight thematic areas, working with communities, local structures, and government stakeholders."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || Heart;
              return (
                <Link
                  key={program.id}
                  href={`/programs#${program.slug}`}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors group"
                >
                  <div className="w-14 h-14 bg-warm/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-warm" />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-sm">{program.title}</h3>
                  <p className="text-gray-300 text-xs">{program.impact}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                subtitle="Child Sponsorship"
                title="Our Flagship Program"
                description="Our child sponsorship program provides comprehensive support to children in need, ensuring they have access to education, healthcare, nutrition, and emotional support."
                centered={false}
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Education Support</h4>
                    <p className="text-gray-600 text-sm">School fees, supplies, uniforms, and tutoring to help children succeed academically</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Healthcare & Nutrition</h4>
                    <p className="text-gray-600 text-sm">Regular medical check-ups, vaccinations, and nutritious meals for healthy development</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Family Support</h4>
                    <p className="text-gray-600 text-sm">Resources and training to help families create stable home environments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Emotional Support</h4>
                    <p className="text-gray-600 text-sm">Regular contact, encouragement, and connection with sponsors</p>
                  </div>
                </div>
              </div>
              <Link
                href="/sponsorship"
                className="inline-flex items-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
              >
                Learn About Sponsorship
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=500&fit=crop"
                alt="Child sponsorship"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="All Programs"
            title="Our Program Areas"
            description="Alongside child sponsorship, MIS delivers broader thematic programs across humanitarian and development priorities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || Heart;
              return (
                <div key={program.id} id={program.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-warm text-white text-xs font-medium rounded-full">
                        {program.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-warm" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{program.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-success">{program.impact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Approach"
            title="Integrated Development"
            description="We take a holistic approach to community development, recognizing that sustainable change comes from addressing multiple factors simultaneously."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-ngo-secondary rounded-xl p-8">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Community-Led</h3>
              <p className="text-gray-600">Programs are designed with communities, not for them. We ensure local ownership and sustainable outcomes.</p>
            </div>
            <div className="bg-ngo-secondary rounded-xl p-8">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Link href="#" className="w-7 h-7 text-warm">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </Link>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Partnership-Based</h3>
              <p className="text-gray-600">We collaborate with government, NGOs, and private sector to leverage resources and expertise.</p>
            </div>
            <div className="bg-ngo-secondary rounded-xl p-8">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Evidence-Based</h3>
              <p className="text-gray-600">We use data and research to design, monitor, and improve our programs for maximum impact.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy mb-4">Get Involved</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our work. Choose the option that best fits your capacity and passion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-warm" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Sponsor a Child</h4>
              <p className="text-gray-600 mb-6">Provide direct, ongoing support to a specific child in need.</p>
              <Link
                href="/sponsorship"
                className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Make a Donation</h4>
              <p className="text-gray-600 mb-6">One-time or recurring donations to support our programs.</p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark"
              >
                Donate Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-warm" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Partner With Us</h4>
              <p className="text-gray-600 mb-6">Corporate partnerships and collaborations to expand our impact.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Your support helps us continue providing essential services to children and families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-2 bg-white text-warm-dark font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Sponsor a Child
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
