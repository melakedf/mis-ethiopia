import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  showVideoButton?: boolean;
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText = "Get Involved",
  ctaSecondaryText = "Learn More",
  ctaHref = "/programs",
  backgroundImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop",
  showVideoButton = false,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact ? "h-[50vh] min-h-[400px]" : "h-[90vh] min-h-[600px]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy-dark/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <span className="inline-block px-4 py-1.5 bg-warm/20 text-warm rounded-full text-sm font-medium mb-6 border border-warm/30">
              {subtitle}
            </span>
          )}
          
          <h1 className={`font-bold text-white mb-6 ${compact ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl lg:text-7xl"}`}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-gray-200 mb-8 ${compact ? "text-lg max-w-2xl mx-auto" : "text-xl md:text-2xl max-w-3xl mx-auto"}`}>
              {description}
            </p>
          )}

          <div className={`flex flex-wrap items-center justify-center gap-4 ${compact ? "mt-6" : "mt-10"}`}>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-warm hover:bg-warm-dark text-white font-semibold px-8 h-12 text-lg rounded-lg transition-colors"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            {showVideoButton ? (
              <button className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 px-8 h-12 text-lg rounded-lg transition-colors">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </button>
            ) : (
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 px-8 h-12 text-lg rounded-lg transition-colors"
              >
                {ctaSecondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
