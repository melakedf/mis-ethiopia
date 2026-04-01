import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${dark ? "bg-navy text-white" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light ? "bg-white/20 text-white" : "bg-warm/10 text-warm"
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? "text-white" : "text-navy"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl mx-auto ${
          light ? "text-gray-300" : "text-gray-600"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
