import { partners } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="py-16 bg-ngo-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work together with trusted organizations to maximize our impact
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.slice(0, 6).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-semibold">
                    {partner.name.split(" ").slice(0, 2).join("\n")}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-medium">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/partners"
            className="text-warm hover:text-warm-dark font-medium inline-flex items-center gap-1"
          >
            View all partners
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
