import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  ctaHref?: string;
  ctaSecondaryHref?: string;
  showReportsLink?: boolean;
  floatingStats?: {value: string; label: string}[];
  backgroundImage?: string;
  showVideoButton?: boolean;
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText = "Explore Our Work",
  ctaSecondaryText = "About MIS",
  ctaHref = "/programs",
  ctaSecondaryHref = "/about",
  backgroundImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop",
  showVideoButton = false,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-navy-dark pt-20 ${
        compact ? "" : "min-h-[600px]"
      }`}
    >
      {!compact && <div
        className="hero-photo absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,43,.96)_0%,rgba(12,48,66,.86)_52%,rgba(12,48,66,.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(232,162,58,.15),transparent_32%)]" />

      <div
        className={`relative mx-auto flex max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10 ${
          compact ? "" : "min-h-[520px]"
        }`}
      >
        <div className="hero-copy max-w-3xl">
          {subtitle && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold tracking-wide text-white/85 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-warm" />
              {subtitle}
            </div>
          )}

          <h1
            className={`font-semibold leading-[1.05] tracking-[-0.035em] text-white ${
              compact ? "text-3xl sm:text-4xl lg:text-5xl" : "text-5xl sm:text-6xl lg:text-7xl"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-6 max-w-2xl leading-8 text-white/75 ${
                compact ? "text-lg" : "text-lg sm:text-xl"
              }`}
            >
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-warm px-6 font-semibold text-navy-dark shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-warm-light"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>

            {showVideoButton ? (
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                <Play className="h-4 w-4" />
                Watch Our Story
              </button>
            ) : (
              <Link
                href={ctaSecondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                {ctaSecondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
      {!compact && <p className="absolute bottom-4 right-5 rounded-full bg-navy-dark/80 px-3 py-1.5 text-[11px] text-white/85">Temporary stock background · MIS photograph coming soon</p>}
    </section>
  );
}
