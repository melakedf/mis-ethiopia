import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Shield } from "lucide-react";
import { Hero, ImpactStats, ProgramCard, NewsCard, Section, SectionHeader, CTABanner, PartnersSection } from "@/components/sections";
import { programs } from "@/data/programs";
import { news } from "@/data/news";

export default function Home() {
  const featuredPrograms = programs.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <>
      <Hero
        title="Empowering Communities, Transforming Lives"
        subtitle="Ethiopia's Trusted Development Partner"
        description="For over 25 years, MIS Ethiopia has been working alongside vulnerable communities to create lasting change through sustainable development, healthcare, education, and humanitarian assistance."
        ctaText="Make a Difference"
        ctaSecondaryText="Our Story"
        ctaHref="/donate"
        showVideoButton
      />

      <ImpactStats />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Mission"
            title="Building a Better Ethiopia Together"
            description="We believe in the power of community-driven development. Through partnership, transparency, and sustainable programs, we create lasting impact in the lives of those we serve."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To improve the lives of vulnerable communities in Ethiopia through integrated sustainable development programs, humanitarian assistance, and capacity building.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A prosperous Ethiopia where all people have access to quality healthcare, education, and opportunities for sustainable livelihood.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, compassion, and respect guide everything we do. We work transparently with communities to ensure sustainable, locally-owned development.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Programs"
            title="Creating Impact Where It Matters"
            description="From healthcare to education, agriculture to emergency response, our comprehensive programs address the most pressing needs of Ethiopian communities."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
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

      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-warm rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Child Sponsorship"
                title="Change a Child's Life Forever"
                description="Through our child sponsorship program, you can provide education, healthcare, and nutrition to a child in need. Your support creates ripple effects that transform entire communities."
                light
              />
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-warm" />
                  <span className="text-gray-300">100% transparent operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-warm" />
                  <span className="text-gray-300">Direct community impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-warm" />
                  <span className="text-gray-300">Regular updates on your sponsored child</span>
                </div>
              </div>
              <Link
                href="/sponsorship"
                className="inline-flex items-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-lg hover:bg-warm-dark transition-colors"
              >
                Sponsor a Child
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=700&fit=crop"
                alt="Children learning together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-warm mb-1">1,000+</div>
                <div className="text-gray-600 text-sm">Children Sponsored</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Latest News"
            title="Stories of Impact"
            description="Stay updated with our latest initiatives, success stories, and community impact."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <NewsCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                category={article.category}
                author={article.author}
                readTime={article.readTime}
                slug={article.slug}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-warm font-semibold hover:text-warm-dark transition-colors"
            >
              View All News
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>

      <PartnersSection />

      <CTABanner />
    </>
  );
}
