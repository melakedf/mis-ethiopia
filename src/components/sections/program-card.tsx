import { Heart, GraduationCap, Leaf, Droplets, Users, AlertTriangle } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  GraduationCap,
  Leaf,
  Droplets,
  Users,
  AlertTriangle,
};

export function ProgramCard({ title, description, image, category, impact, icon }: ProgramCardProps) {
  const IconComponent = iconMap[icon] || Heart;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-warm text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-warm" />
          </div>
          <h3 className="text-xl font-bold text-navy group-hover:text-warm transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs font-medium text-success">
            {impact}
          </span>
          <a
            href="#"
            className="text-sm font-medium text-warm hover:text-warm-dark transition-colors flex items-center gap-1"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
