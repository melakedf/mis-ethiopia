import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { team, boardMembers } from "@/data/team";
import { siteConfig } from "@/data/constants";

const timeline = [
  {
    year: "[Year]",
    title: "Organization Founded",
    description: "MIS Ethiopia was established to address the needs of vulnerable children and families in [region].",
  },
  {
    year: "[Year]",
    title: "Child Sponsorship Launched",
    description: "Started our flagship child sponsorship program to provide direct support to children in need.",
  },
  {
    year: "[Year]",
    title: "Program Expansion",
    description: "Expanded to include family support services and community development initiatives.",
  },
  {
    year: "[Year]",
    title: "Education Initiative",
    description: "Launched comprehensive education support programs including school fee assistance and supplies.",
  },
  {
    year: "[Year]",
    title: "Community Development",
    description: "Began working on sustainable community development projects to create lasting change.",
  },
  {
    year: "[Year]",
    title: "Continuing Our Mission",
    description: "Remains committed to supporting children, families, and communities across Ethiopia.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every interaction with empathy and genuine care for those we serve.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency and accountability are the foundations of our operations and relationships.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside communities, respecting their knowledge and empowering local solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, continuously learning and improving.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About MIS Ethiopia"
        subtitle="About Our Organization"
        description="We are dedicated to supporting vulnerable children and families in Ethiopia through comprehensive sponsorship programs, education support, family assistance, and community development."
        ctaText="Our Programs"
        ctaSecondaryText="Sponsor a Child"
        ctaHref="/programs"
        compact
      />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Our Story"
                title="Who We Are"
                description="MIS Ethiopia was founded with a simple but powerful vision: to ensure every child has the opportunity to thrive."
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Multi Integrated Support (MIS) Ethiopia is a [registered organization type] dedicated to supporting vulnerable children, families, and communities across Ethiopia. We believe that by investing in children today, we can create a brighter future for individuals, families, and society as a whole.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach is holistic—we don't just support individual children; we work to strengthen families, empower communities, and create sustainable systems of support. Through our child sponsorship program, education initiatives, family support services, and community development work, we address the multiple factors that affect a child's wellbeing and development.
              </p>
              <p className="text-gray-600">
                We are committed to transparency, accountability, and making every sponsor's contribution count. Regular reporting, open communication, and direct connections between sponsors and sponsored children ensure that your support makes a real, measurable difference.
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
                <p className="text-white/90 text-sm">Every child deserves love, support, and opportunity</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-warm" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
            description="From our founding to today, we have grown and evolved to serve more children and families."
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
