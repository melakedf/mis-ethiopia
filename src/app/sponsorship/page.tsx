import Link from "next/link";
import { Heart, Gift, MessageCircle, Camera, CheckCircle, ArrowRight, Users } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { children } from "@/data/children";

const howItWorks = [
  {
    step: 1,
    title: "Choose a Child",
    description: "Browse profiles of children waiting for sponsors and find one whose story resonates with you.",
    icon: Heart,
  },
  {
    step: 2,
    title: "Make a Commitment",
    description: "Sponsor monthly. Your contribution provides education, healthcare, nutrition, and emotional support.",
    icon: Gift,
  },
  {
    step: 3,
    title: "Connect",
    description: "Exchange letters and receive updates. Build a meaningful relationship with your sponsored child.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "See the Impact",
    description: "Receive progress reports and witness the transformative difference your support makes.",
    icon: Camera,
  },
];

const sponsorshipLevels = [
  {
    name: "Essential",
    amount: 35,
    description: "Provides basic educational support and school supplies",
    features: [
      "Monthly newsletter",
      "Annual progress report",
      "Photo of your sponsored child",
    ],
  },
  {
    name: "Comprehensive",
    amount: 75,
    description: "Full educational support including school fees and tutoring",
    features: [
      "Everything in Essential",
      "Quarterly updates",
      "Personal letter exchange",
      "School materials and supplies",
    ],
    popular: true,
  },
  {
    name: "Complete",
    amount: 150,
    description: "Comprehensive support including healthcare and nutrition",
    features: [
      "Everything in Comprehensive",
      "Monthly photo updates",
      "Healthcare access",
      "Nutrition support",
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <Hero
        title="Sponsor a Child"
        subtitle="Change a Life Forever"
        description="Your sponsorship provides a child with education, healthcare, nutrition, and the emotional support they need to thrive. Build a lasting relationship that creates lasting change."
        ctaText="Meet Children Waiting"
        ctaSecondaryText="Learn How It Works"
        ctaHref="#children"
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
      />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="How It Works"
            title="Your Journey as a Sponsor"
            description="Sponsoring a child is simple, meaningful, and creates real, measurable impact."
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
            title="Choose Your Level of Support"
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
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-3 rounded-lg font-semibold transition-colors ${
                    level.popular
                      ? "bg-warm hover:bg-warm-dark text-white"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark id="children">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Meet Our Children"
            title="Children Waiting for Sponsors"
            description="These children are ready to start their journey with you by their side. Each child has a unique story and dreams for their future."
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
                      Waiting for Sponsor
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
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center bg-warm hover:bg-warm-dark text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Sponsor {child.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Don't see a child that feels like the right fit? Contact us and we'll help you find your perfect match.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us for Matching
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Sponsor Benefits"
                title="What You Receive"
                description="As a sponsor, you'll receive regular updates and the opportunity to build a meaningful relationship with your sponsored child."
                centered={false}
              />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Regular Photos</h4>
                    <p className="text-gray-600 text-sm">Photos of your sponsored child throughout the year</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Letters & Updates</h4>
                    <p className="text-gray-600 text-sm">Personal letters from your sponsored child and program updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Progress Reports</h4>
                    <p className="text-gray-600 text-sm">Annual reports on your child's educational progress and wellbeing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Sponsor Community</h4>
                    <p className="text-gray-600 text-sm">Access to sponsor events and a community of like-minded supporters</p>
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
                <div className="text-3xl font-bold mb-1">Direct</div>
                <div className="text-white/90 text-sm">Connection</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Change a Child's Life?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Your sponsorship can transform a child's future. Join us in providing love, support, and opportunity to children who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
              >
                <Heart className="w-5 h-5" />
                Start Sponsoring
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
