import Link from "next/link";
import { ArrowRight, Heart, Shield, Users, BookOpen, CheckCircle, GraduationCap } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/constants";

const priorityPrograms = programs.slice(0, 4);

const trustIndicators = [
  { icon: Shield, title: "Registered Organization", description: "Officially registered and operating in compliance with Ethiopian law" },
  { icon: Users, title: "Community-Focused", description: "Working directly with local communities to understand and address real needs" },
  { icon: BookOpen, title: "Transparent Operations", description: "Regular reporting and open communication with all stakeholders" },
  { icon: Heart, title: "Child-Centered Approach", description: "Every child's wellbeing and development is our top priority" },
];

const whySupportReasons = [
  "Direct impact on children's lives through sponsorship",
  "Regular updates and communication with sponsored children",
  "Transparent use of funds with detailed reporting",
  "Local staff who understand community needs",
  "Sustainable programs that create lasting change",
  "Family support that strengthens home environments",
];

export default function Home() {
  return (
    <>
      <Hero
        title="Transforming Lives, One Child at a Time"
        subtitle="Child Sponsorship & Family Support"
        description="MIS Ethiopia connects compassionate sponsors with children and families in need, providing education, healthcare, and hope for a brighter future."
        ctaText="Sponsor a Child"
        ctaSecondaryText="Learn About Us"
        ctaHref="/sponsorship"
      />

      {/* Who We Are */}
      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Who We Are"
                title="About MIS Ethiopia"
                description="We are a dedicated organization committed to supporting vulnerable children and families in Ethiopia through comprehensive sponsorship and development programs."
                centered={false}
              />
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Multi Integrated Support (MIS) Ethiopia was established to address the critical needs of children and families facing hardship. We believe every child deserves access to education, healthcare, and opportunities for a better future.
                </p>
                <p className="mb-6">
                  Through our child sponsorship program, we connect sponsors with specific children, providing direct support for education, nutrition, healthcare, and emotional development. We also work to strengthen families and build stronger communities.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark transition-colors"
              >
                Learn more about our story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=500&fit=crop"
                alt="Children learning together"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="text-warm font-bold text-lg mb-1">{siteConfig.mission.split(".")[0]}</div>
                <p className="text-gray-600 text-sm">Our mission in action</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Do"
            title="Our Priority Programs"
            description="We focus on four key areas that create the greatest impact on children's lives and their communities."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorityPrograms.map((program) => (
              <div key={program.id} className="bg-ngo-secondary rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-warm" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <Link
                  href={`/programs#${program.slug}`}
                  className="text-warm hover:text-warm-dark text-sm font-medium inline-flex items-center gap-1"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-colors"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Support MIS */}
      <Section dark>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Make a Difference"
                title="Why Support MIS Ethiopia?"
                description="When you choose to support MIS Ethiopia, you're making a direct investment in a child's future."
                light
              />
              <ul className="space-y-4">
                {whySupportReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-warm flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sponsorship"
                  className="inline-flex items-center justify-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Sponsor a Child
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Make a Donation
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=700&fit=crop"
                alt="Sponsor and child"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Transparency & Accountability */}
      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Trust & Transparency"
            title="Accountability You Can Count On"
            description="We are committed to transparency in all our operations. Here's how we ensure your support makes a real difference."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-warm" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark transition-colors"
            >
              View our annual reports and financial statements
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Child Sponsorship Focus */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=500&fit=crop"
                alt="Sponsored child"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-warm text-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold mb-1">Direct</div>
                <div className="text-white/90 text-sm">Connection</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                subtitle="Make an Impact"
                title="Child Sponsorship"
                description="When you sponsor a child through MIS Ethiopia, you're not just providing support—you're building a relationship that can transform a life."
                centered={false}
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Education Support</h4>
                    <p className="text-gray-600 text-sm">School fees, supplies, and tutoring to help children succeed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Healthcare & Nutrition</h4>
                    <p className="text-gray-600 text-sm">Regular check-ups and nutritious meals for healthy growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Family Support</h4>
                    <p className="text-gray-600 text-sm">Resources and training to strengthen home environments</p>
                  </div>
                </div>
              </div>
              <Link
                href="/sponsorship"
                className="inline-flex items-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
              >
                Meet Children Who Need Sponsors
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Change a Child's Life?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join us in our mission to support children, strengthen families, and build communities across Ethiopia.
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
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
