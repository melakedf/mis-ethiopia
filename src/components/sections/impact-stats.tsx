"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Calendar, MapPin, Home, Heart } from "lucide-react";
import { impactStats } from "@/data/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Calendar,
  MapPin,
  Home,
  Heart,
};

function StatItem({
  value,
  label,
  icon,
  suffix,
}: {
  value: number;
  label: string;
  icon: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const IconComponent = iconMap[icon] || Heart;

  return (
    <div ref={ref} className="text-center p-6">
      <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-8 h-8 text-warm" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export function ImpactStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
