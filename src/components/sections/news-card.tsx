import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  slug: string;
}

export function NewsCard({ title, excerpt, image, date, category, author, readTime, slug }: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-lg font-bold text-navy group-hover:text-warm transition-colors mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">By {author}</span>
          <Link
            href={`/news/${slug}`}
            className="text-sm font-medium text-warm hover:text-warm-dark transition-colors flex items-center gap-1"
          >
            Read more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
