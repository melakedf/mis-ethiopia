import Link from "next/link";
import { Heart, Gift, MessageCircle, Camera, CheckCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { children } from "@/data/children";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/cta-banner";

const howItWorks = [
  {
    step: 1,
    title: "Choose a Child",
    description: "Browse profiles and find a child whose story resonates with you.",
    icon: Heart,
  },
  {
    step: 2,
    title: "Make a Commitment",
    description: "Sponsor monthly or annually. Your contribution goes directly to the child's needs.",
    icon: Gift,
  },
  {
    step: 3,
    title: "Exchange Letters",
    description: "Build a personal connection through letters and updates from your sponsored child.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "Witness Growth",
    description: "Receive progress reports and see the transformative impact of your support.",
    icon: Camera,
  },
];

const sponsorshipLevels = [
  {
    name: "Basic",
    amount: 35,
    description: "Provides education supplies and basic nutrition",
    features: [
      "Monthly newsletter",
      "Annual progress report",
      "Photo of your sponsored child",
    ],
  },
  {
    name: "Standard",
    amount: 75,
    description: "Full educational support including school fees",
    features: [
      "Everything in Basic",
      "Quarterly updates",
      "Personal letter exchange",
      "School materials",
    ],
    popular: true,
  },
  {
    name: "Comprehensive",
    amount: 150,
    description: "Complete care including healthcare and nutrition",
    features: [
      "Everything in Standard",
      "Monthly photo updates",
      "Healthcare access",
      "Special events invitations",
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <Hero
        title="Sponsor a Child"
        subtitle="Transform a Life Forever"
        description="Your sponsorship provides education, healthcare, nutrition, and hope to a child in need. Build a lasting connection that creates lasting change."
        ctaText="Become a Sponsor"
        ctaSecondaryText="View Children"
        ctaHref="#children"
        backgroundImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop"
      />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="How It Works"
            title="Your Journey as a Sponsor"
            description="Sponsoring a child is simple, meaningful, and creates real impact."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md text-center h-full">
                  <div className="w-12 h-12 bg-warm text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-warm/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-warm" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Sponsorship Options"
            title="Choose Your Impact Level"
            description="Every sponsorship level makes a meaningful difference in a child's life."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level) => (
              <div
                key={level.name}
                className={`rounded-2xl p-8 ${
                  level.popular
                    ? "bg-navy text-white shadow-xl scale-105"
                    : "bg-ngo-secondary"
                }`}
              >
                {level.popular && (
                  <span className="inline-block px-3 py-1 bg-warm text-white text-xs font-bold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${level.popular ? "text-white" : "text-navy"}`}>
                  {level.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${level.popular ? "text-white" : "text-navy"}`}>
                    ${level.amount}
                  </span>
                  <span className={level.popular ? "text-gray-300" : "text-gray-600"}>/month</span>
                </div>
                <p className={`mb-6 ${level.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {level.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${level.popular ? "text-warm" : "text-success"}`} />
                      <span className={level.popular ? "text-gray-200" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    level.popular
                      ? "bg-warm hover:bg-warm-dark text-white"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Select {level.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark id="children">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Meet Our Children"
            title="Waiting for a Sponsor"
            description="These children are ready to start their journey with you by their side."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children.map((child) => (
              <div
                key={child.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-dark to-transparent h-24" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-success text-white text-xs font-medium rounded-full">
                      Available
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">{child.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{child.age} years old</span>
                    <span>•</span>
                    <span>{child.region}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{child.story}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-ngo-secondary text-gray-600 text-xs rounded">
                      {child.educationLevel}
                    </span>
                    <span className="px-2 py-1 bg-ngo-secondary text-gray-600 text-xs rounded">
                      Interests: {child.interests}
                    </span>
                  </div>
                  <Button className="w-full bg-warm hover:bg-warm-dark text-white">
                    Sponsor {child.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Looking for a specific child? We can help you find the perfect match.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us for Matching
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Sponsor Stories"
                title="Real Impact, Real Connections"
                description="Hear from sponsors and sponsored children about their experiences."
                centered={false}
              />
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    "Sponsoring Samuel has been one of the most rewarding experiences of my life. Watching him grow and succeed has been incredible."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Sponsor"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-navy">Michael T.</div>
                      <div className="text-gray-500 text-sm">Sponsor since 2019</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    "Thanks to my sponsor, I can go to school and dream big. One day I want to become a doctor and help my community."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=100&h=100&fit=crop&crop=face"
                      alt="Child"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-navy">Hiwot T., Age 12</div>
                      <div className="text-gray-500 text-sm">Sponsored child</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=700&fit=crop"
                alt="Sponsor and child"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-warm text-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold mb-1">1,000+</div>
                <div className="text-white/90 text-sm">Active Sponsorships</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
