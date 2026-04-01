import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Us Make a Difference Today
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Your donation directly supports communities in need across Ethiopia.
              Every contribution helps us provide healthcare, education, and hope.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-white text-warm-dark hover:bg-gray-100 font-semibold px-8 h-14 text-lg rounded-lg transition-colors"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 font-semibold px-8 h-14 text-lg rounded-lg transition-colors"
            >
              Sponsor a Child
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
