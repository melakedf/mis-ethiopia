"use client";

import { MouseEvent, ReactNode, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrb({ className }: { className: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className} aria-hidden />;
  }

  return (
    <motion.div
      className={className}
      aria-hidden
      animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  hoverLift?: number;
  hoverScale?: number;
}

export function TiltCard({
  children,
  className = "",
  intensity = 5,
  perspective = 1200,
  hoverLift = -1.6,
  hoverScale = 1.01,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const style = useMemo(
    () => ({
      transformStyle: "preserve-3d" as const,
      transform: `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      willChange: "transform",
    }),
    [perspective, rotation]
  );

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={style}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * -intensity;
        const y = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
        setRotation({ x, y });
      }}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      whileHover={{ scale: hoverScale, y: hoverLift }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxBadge {
  title: string;
  subtitle: string;
}

interface ParallaxImageStackProps {
  images: [string, string, string];
  alt: string;
  className?: string;
  badge?: ParallaxBadge;
}

export function ParallaxImageStack({
  images,
  alt,
  className = "",
  badge,
}: ParallaxImageStackProps) {
  const reduce = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 92%", "end 20%"],
  });

  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.8 });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.9 });

  const baseRotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const baseRotateY = useTransform(smoothX, [-0.5, 0.5], [-6.5, 6.5]);
  const scrollRotateX = useTransform(smoothProgress, [0, 0.55, 1], [2.2, 0, -1.4]);
  const scrollRotateY = useTransform(smoothProgress, [0, 1], [-1.4, 1]);
  const rotateX = useTransform(() => baseRotateX.get() + scrollRotateX.get());
  const rotateY = useTransform(() => baseRotateY.get() + scrollRotateY.get());
  const stackY = useTransform(smoothProgress, [0, 1], [11, -8]);
  const stackScale = useTransform(smoothProgress, [0, 0.5, 1], [0.988, 1, 1.008]);

  const backX = useTransform(smoothX, [-0.5, 0.5], [-13, 13]);
  const backY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const backScrollY = useTransform(smoothProgress, [0, 1], [8, -10]);
  const backDepthY = useTransform(() => backY.get() + backScrollY.get());

  const midX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const midY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const midScrollY = useTransform(smoothProgress, [0, 1], [6, -7]);
  const midDepthY = useTransform(() => midY.get() + midScrollY.get());

  const frontX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const frontY = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);
  const frontScrollY = useTransform(smoothProgress, [0, 1], [2, -4]);
  const frontDepthY = useTransform(() => frontY.get() + frontScrollY.get());

  const badgeX = useTransform(smoothX, [-0.5, 0.5], [6, -6]);
  const badgePointerY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const badgeScrollY = useTransform(smoothProgress, [0, 0.55, 1], [13, -6, 7]);
  const badgeY = useTransform(() => badgePointerY.get() + badgeScrollY.get());

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const onLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  if (reduce) {
    return (
      <div ref={stackRef} className={`relative ${className}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/60 bg-white p-2 shadow-xl">
          <img
            src={images[0]}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        {badge ? (
          <div className="pointer-events-none absolute -right-5 -top-5 rounded-xl bg-warm px-4 py-3 text-white shadow-xl shadow-warm/30">
            <p className="text-xl font-bold">{badge.title}</p>
            <p className="text-xs text-white/90">{badge.subtitle}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <motion.div
      ref={stackRef}
      className={`relative ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1300,
        rotateX,
        rotateY,
        y: stackY,
        scale: stackScale,
        willChange: "transform",
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-2 -top-2 aspect-[4/3] w-[88%] overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-2 shadow-lg"
        style={{ x: backX, y: backDepthY, z: -30 }}
      >
        <img
          src={images[2]}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-1 top-8 aspect-[4/3] w-[90%] overflow-hidden rounded-2xl border border-white/50 bg-white/90 p-2 shadow-xl"
        style={{ x: midX, y: midDepthY, z: -10 }}
      >
        <img
          src={images[1]}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/60 bg-white p-2 shadow-2xl"
        style={{ x: frontX, y: frontDepthY, z: 20 }}
      >
        <img
          src={images[0]}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-xl object-cover"
        />
      </motion.div>

      {badge ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-5 -top-5 rounded-xl bg-warm px-4 py-3 text-white shadow-xl shadow-warm/30"
          style={{ x: badgeX, y: badgeY, z: 38 }}
        >
          <p className="text-xl font-bold">{badge.title}</p>
          <p className="text-xs text-white/90">{badge.subtitle}</p>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
