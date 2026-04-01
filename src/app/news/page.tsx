import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Hero, NewsCard, Section, SectionHeader } from "@/components/sections";
import { news, newsCategories } from "@/data/news";

export default function NewsPage() {
  const featuredArticle = news[0];
  const otherNews = news.slice(1);

  return (
    <>
      <Hero
        title="News & Updates"
        subtitle="Stories of Impact"
        description="Stay informed about our latest initiatives, community impact stories, and announcements from MIS Ethiopia."
        ctaText="Subscribe to Updates"
        ctaSecondaryText="View Reports"
        ctaHref="#newsletter"
        compact
      />

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-warm text-white text-sm font-medium rounded-full mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {otherNews.slice(0, 2).map((article) => (
                <div key={article.id} className="flex gap-6 bg-ngo-secondary rounded-xl p-4 hover:shadow-md transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 bg-warm/10 text-warm text-xs font-medium rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-navy mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-gray-500">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SectionHeader
            subtitle="All Stories"
            title="Latest News & Articles"
            description="Explore our collection of stories, updates, and impact reports."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.slice(2).map((article) => (
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

          <div id="newsletter" className="mt-16 bg-navy rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter to receive updates on our programs, impact stories, and ways to get involved.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-warm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-warm hover:bg-warm-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
