"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  ctaHref?: string;
  backgroundImage?: string;
  showVideoButton?: boolean;
  showReportsLink?: boolean;
  floatingStats?: { value: string; label: string }[];
  compact?: boolean;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero({
  title,
  subtitle,
  description,
  ctaText = "Get Involved",
  ctaSecondaryText = "Learn More",
  ctaSecondaryHref = "/about",
  ctaHref = "/programs",
  backgroundImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop",
  showVideoButton = false,
  showReportsLink = false,
  floatingStats = [
    { value: "15+", label: "Years of Impact" },
    { value: "Multi-Sector", label: "Community Programs" },
  ],
  compact = false,
}: HeroProps) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 26, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 26, mass: 0.8 });

  const orbAX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const orbAY = useTransform(smoothY, [-0.5, 0.5], [-11, 11]);
  const orbBX = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const orbBY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const orbCX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const orbCY = useTransform(smoothY, [-0.5, 0.5], [13, -13]);
  const contentX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const contentY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const statAX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const statAY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const statBX = useTransform(smoothX, [-0.5, 0.5], [11, -11]);
  const statBY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  const sceneRotateX = useTransform(smoothY, [-0.5, 0.5], [1.4, -1.4]);
  const sceneRotateY = useTransform(smoothX, [-0.5, 0.5], [-2.2, 2.2]);

  const parallaxY = useTransform(scrollY, [0, 600], [0, 94]);
  const parallaxScale = useTransform(scrollY, [0, 600], [1, 1.056]);
  const gradientY = useTransform(scrollY, [0, 600], [0, 29]);
  const shapeLayerY = useTransform(scrollY, [0, 600], [0, 43]);
  const shapeLayerScale = useTransform(scrollY, [0, 600], [1, 1.032]);

  const contentScrollY = useTransform(scrollY, [0, 600], [0, -22]);
  const contentDepthY = useTransform(() => contentY.get() + contentScrollY.get());

  const statAScrollY = useTransform(scrollY, [0, 600], [0, -34]);
  const statBScrollY = useTransform(scrollY, [0, 600], [0, -43]);
  const statADepthY = useTransform(() => statAY.get() + statAScrollY.get());
  const statBDepthY = useTransform(() => statBY.get() + statBScrollY.get());
  const statAScale = useTransform(scrollY, [0, 600], [1, 1.024]);
  const statBScale = useTransform(scrollY, [0, 600], [1, 1.016]);

  const orbAScrollY = useTransform(scrollY, [0, 600], [0, 24]);
  const orbBScrollY = useTransform(scrollY, [0, 600], [0, 37]);
  const orbCScrollY = useTransform(scrollY, [0, 600], [0, 19]);
  const orbADepthY = useTransform(() => orbAY.get() + orbAScrollY.get());
  const orbBDepthY = useTransform(() => orbBY.get() + orbBScrollY.get());
  const orbCDepthY = useTransform(() => orbCY.get() + orbCScrollY.get());

  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  const onPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact ? "h-[50vh] min-h-[400px]" : "h-[90vh] min-h-[600px]"
      }`}
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
    >
      <motion.div
        className="absolute inset-0"
        style={!reduceMotion && !compact ? { transformPerspective: 1400, rotateX: sceneRotateX, rotateY: sceneRotateY, willChange: "transform" } : undefined}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: !reduceMotion ? parallaxY : undefined,
            scale: !reduceMotion ? parallaxScale : undefined,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-navy-dark/92 via-navy/80 to-navy-dark/76"
            style={{ opacity: overlayOpacity, y: !reduceMotion ? gradientY : undefined }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(230,126,34,0.26),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.12),transparent_40%)]"
            style={!reduceMotion ? { y: shapeLayerY, scale: shapeLayerScale } : undefined}
          />
        </motion.div>

        {!compact && !reduceMotion ? (
          <>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-warm/20 blur-3xl"
              style={{ x: orbAX, y: orbADepthY }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute bottom-8 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
              style={{ x: orbBX, y: orbBDepthY }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-warm/10 blur-2xl"
              style={{ x: orbCX, y: orbCDepthY }}
            />
          </>
        ) : null}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
        style={!reduceMotion ? { x: contentX, y: contentDepthY } : undefined}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl"
        >
          {subtitle ? (
            <motion.div variants={item}>
              <span className="mb-6 inline-block rounded-full border border-warm/30 bg-warm/20 px-5 py-2 text-sm font-medium tracking-wide text-warm backdrop-blur-sm">
                {subtitle}
              </span>
            </motion.div>
          ) : null}

          <motion.h1
            variants={item}
            className={`mb-6 font-bold leading-[0.96] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${compact ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl lg:text-7xl"}`}
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.p
              variants={item}
              className={`mb-8 text-gray-100/95 ${compact ? "mx-auto max-w-2xl text-lg" : "mx-auto max-w-3xl text-xl md:text-2xl"}`}
            >
              {description}
            </motion.p>
          ) : null}

          <motion.div variants={item} className={`flex flex-wrap items-center justify-center gap-4 ${compact ? "mt-6" : "mt-10"}`}>
            <Link
              href={ctaHref}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-warm px-8 text-lg font-semibold text-white transition-all duration-300 hover:bg-warm-dark hover:shadow-lg hover:shadow-warm/20"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {showVideoButton ? (
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white px-8 text-lg text-white transition-colors hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </button>
            ) : (
              <Link
                href={ctaSecondaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white px-8 text-lg text-white transition-colors hover:bg-white/10"
              >
                {ctaSecondaryText}
              </Link>
            )}
          </motion.div>

          {showReportsLink ? (
            <motion.div variants={item} className="mt-4">
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white"
              >
                View Reports
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>

      {!compact ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-6 top-[22%] hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md md:block"
            style={!reduceMotion ? { x: statAX, y: statADepthY, scale: statAScale } : undefined}
          >
            <p className="text-xl font-bold text-white">{floatingStats[0]?.value ?? "15+"}</p>
            <p className="text-xs text-white/80">{floatingStats[0]?.label ?? "Years of Impact"}</p>
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-[18%] right-6 hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md md:block"
            style={!reduceMotion ? { x: statBX, y: statBDepthY, scale: statBScale } : undefined}
          >
            <p className="text-xl font-bold text-white">{floatingStats[1]?.value ?? "Multi-Sector"}</p>
            <p className="text-xs text-white/80">{floatingStats[1]?.label ?? "Community Programs"}</p>
          </motion.div>
        </>
      ) : null}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
