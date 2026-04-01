import Image from "next/image";
import { Target, Eye, Heart, Shield, Award, Users, Clock } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { team, boardMembers } from "@/data/team";
import { CTABanner } from "@/components/sections/cta-banner";

const timeline = [
  {
    year: "2001",
    title: "Foundation",
    description: "MIS Ethiopia was established with a vision to address pressing community needs in Addis Ababa.",
  },
  {
    year: "2005",
    title: "Expansion to Rural Areas",
    description: "Extended programs to Oromia and Amhara regions, reaching thousands of underserved families.",
  },
  {
    year: "2010",
    title: "Healthcare Initiative",
    description: "Launched comprehensive primary healthcare program with mobile clinics serving remote communities.",
  },
  {
    year: "2015",
    title: "Education Program",
    description: "Began school construction and scholarship programs, supporting over 5,000 students.",
  },
  {
    year: "2020",
    title: "Emergency Response",
    description: "Responded to humanitarian crises with rapid deployment of aid and relief supplies.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description: "Embracing technology to improve program delivery and monitoring across all operations.",
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
        subtitle="25+ Years of Service"
        description="We are a non-profit organization dedicated to improving the lives of vulnerable communities across Ethiopia through sustainable development, healthcare, education, and humanitarian assistance."
        ctaText="Our Programs"
        ctaSecondaryText="Partner With Us"
        ctaHref="/programs"
        compact
      />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Our Mission"
                title="Creating Lasting Change"
                description="Since 2001, MIS Ethiopia has been working tirelessly to address the root causes of poverty and inequality, empowering communities to build sustainable futures."
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Our integrated approach combines immediate humanitarian relief with long-term development programs, ensuring that communities are not just surviving but thriving. We work in partnership with local leaders, government agencies, and international organizations to maximize our impact.
              </p>
              <p className="text-gray-600">
                Every program we deliver is designed with community input and ownership, ensuring relevance, sustainability, and genuine transformation. We measure our success not just in numbers served, but in the lasting positive change we create in people's lives.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=500&fit=crop"
                alt="Community development"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-warm text-white rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-white/90">Years of Impact</div>
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
                To improve the lives of vulnerable communities in Ethiopia through integrated sustainable development programs, humanitarian assistance, and capacity building that empowers people to reach their full potential.
              </p>
            </div>
            <div className="bg-ngo-secondary rounded-2xl p-8 border-l-4 border-navy">
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A prosperous Ethiopia where all people have access to quality healthcare, education, and opportunities for sustainable livelihood, regardless of their background or circumstances.
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
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-warm/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-warm" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title="25 Years of Impact"
            description="From humble beginnings to becoming one of Ethiopia's leading NGOs, our history reflects our commitment to serving communities."
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
            title="Our Dedicated Team"
            description="Meet the experienced professionals leading MIS Ethiopia's mission."
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

      <CTABanner />
    </>
  );
}
