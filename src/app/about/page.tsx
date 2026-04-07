import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Shield, Award, Users, Clock, CheckCircle, HandHeart, Link2, Sparkles } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { team, boardMembers } from "@/data/team";
import { siteConfig, aboutStats } from "@/data/constants";

const timeline = [
  {
    year: "2010",
    title: "Organization Registered",
    description: "MIS Ethiopia was established as an Ethiopian Resident Charity on 08/07/2010 G.C.",
  },
  {
    year: "2015",
    title: "Integrated Program Expansion",
    description: "Expanded work across health, education, WASH, women economic empowerment, and humanitarian response pathways.",
  },
  {
    year: "2020",
    title: "COVID-19 Community Response",
    description: "Implemented awareness and community-level response activities in vulnerable and hard-to-reach areas.",
  },
  {
    year: "2023",
    title: "Emergency NFI Support",
    description: "Delivered non-food item assistance to 1,500 conflict-affected households across Dangur, Dibate, and Bulen Woredas.",
  },
  {
    year: "2024",
    title: "Organizational Profile Update",
    description: "Published an updated institutional profile covering governance, thematic priorities, and partnership direction.",
  },
  {
    year: "Today",
    title: "Community-Led Multi-Sector Delivery",
    description: "Continues delivering integrated, community-based support with strong accountability and partnership focus.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Dignity",
    description: "Every person deserves respect and equal opportunity",
  },
  {
    icon: Users,
    title: "Local Ownership",
    description: "Communities lead their own development",
  },
  {
    icon: Sparkles,
    title: "Sustainability",
    description: "Long-term impact over short-term results",
  },
  {
    icon: Link2,
    title: "Collaboration",
    description: "Partnerships multiply our reach",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About MIS Ethiopia"
        subtitle="About Our Organization"
        description="MIS Ethiopia is an Ethiopian Resident Charity established in 2010, delivering integrated community-based programs for disadvantaged and hard-to-reach communities."
        ctaText="Our Programs"
        ctaSecondaryText="Sponsor a Child"
        ctaHref="/programs"
        compact
      />

      <Section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Story"
            title="15+ Years of Community-Led Development"
            description="MIS was founded in 2010 with a vision to create meaningful, lasting change in Ethiopian communities. What began as a small initiative has grown into a nationally recognized NGO operating across multiple thematic areas."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {aboutStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-warm mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Our Story"
                title="Who We Are"
                description="MIS works at grassroots level with communities, local structures, and government stakeholders to deliver practical, multi-sector support."
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Multi Integrated Support (MIS) Ethiopia is an Ethiopian Resident Charity registered in 2010 and headquartered in Addis Ababa. The organization works with poor, marginalized, and hard-to-reach communities, with a particular focus on women and children.
              </p>
              <p className="text-gray-600 mb-6">
                MIS implements integrated programs in humanitarian response, health, education, women economic empowerment, WASH, nutrition, and skills-oriented support. Our delivery model is participatory and community-based, with active engagement of local stakeholders at regional, woreda, and kebele levels.
              </p>
              <p className="text-gray-600">
                Across implementation areas including Oromia, Benishangul Gumuz, and Addis Ababa, MIS works to build local resilience, improve access to services, and sustain long-term impact through partnership, accountability, and strong institutional systems.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=500&fit=crop"
                alt="Community development"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-warm text-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="text-lg font-bold mb-1">Our Commitment</div>
                <p className="text-white/90 text-sm">Community-led, transparent, and practical support for long-term change</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Mission & Vision"
            title="Our Guiding Principles"
            description="Our mission and vision statements define who we are and drive every decision we make."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ngo-secondary rounded-2xl p-8 border-l-4 border-warm">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {siteConfig.mission}
              </p>
            </div>
            <div className="bg-ngo-secondary rounded-2xl p-8 border-l-4 border-navy">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {siteConfig.vision}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            light
          />
          <div className="grid grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-warm/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-warm" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones"
            description="From establishment to current operations, MIS continues to expand practical support across priority sectors."
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <span className="inline-block px-3 py-1 bg-warm text-white text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-warm rounded-full border-4 border-white shadow z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Leadership"
            title="Our Team"
            description="Meet the dedicated professionals leading MIS Ethiopia's mission."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-warm font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Governance"
            title="Board of Directors"
            description="Our board provides strategic oversight and ensures we remain true to our mission."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div key={member.id} className="bg-ngo-secondary rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-warm font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Transparency Section */}
      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Accountability"
                title="Transparency & Trust"
                description="We believe in complete transparency with our sponsors, donors, and stakeholders."
                centered={false}
              />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Regular Financial Reporting</h4>
                    <p className="text-gray-600 text-sm">Annual audits and detailed financial statements available to all stakeholders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Program Impact Updates</h4>
                    <p className="text-gray-600 text-sm">Regular reports on program outcomes and child progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Direct Sponsor Connection</h4>
                    <p className="text-gray-600 text-sm">Letters, photos, and updates directly from sponsored children</p>
                  </div>
                </div>
              </div>
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark mt-6"
              >
                View our reports and financials
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy mb-6">Our Commitment to You</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">100% commitment to our mission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Transparent operations and finances</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Direct impact on children's lives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Regular communication and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Responsive to sponsor questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Changing Lives
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Your support helps us continue our mission to support children, families, and communities across Ethiopia.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
