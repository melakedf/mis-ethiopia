import Link from "next/link";
import { Download, FileText, DollarSign, Shield, CheckCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { reports } from "@/data/reports";

export default function ReportsPage() {
  const annualReports = reports.filter((r) => r.type === "annual");
  const impactReports = reports.filter((r) => r.type === "impact");
  const financialReports = reports.filter((r) => r.type === "financial");

  return (
    <>
      <Hero
        title="Reports & Publications"
        subtitle="Transparency & Accountability"
        description="We are committed to transparency and accountability. Access our annual reports, program impact assessments, and financial statements."
        ctaText="Make a Donation"
        ctaSecondaryText="Contact Us"
        ctaHref="/donate"
        compact
      />

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Commitment"
            title="Transparency You Can Trust"
            description="We believe in complete transparency with our sponsors, donors, and stakeholders. Here's how we ensure accountability."
          />
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-warm" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">[XX]%</div>
              <div className="text-gray-600 text-sm">Program Spending</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-warm" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">Annual</div>
              <div className="text-gray-600 text-sm">Independent Audits</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-warm" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">100%</div>
              <div className="text-gray-600 text-sm">Financial Reporting</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-warm" />
              </div>
              <div className="text-3xl font-bold text-navy mb-1">Regular</div>
              <div className="text-gray-600 text-sm">Program Updates</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Annual Reports"
            title="Yearly Reports"
            description="Comprehensive reports covering our programs, financials, and impact for each fiscal year."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualReports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-48">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-navy text-xs font-medium rounded-full">
                      {report.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{report.fileSize}</span>
                    <button className="flex items-center gap-2 text-warm hover:text-warm-dark font-medium text-sm">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Impact Reports"
            title="Program Impact"
            description="Detailed assessments of our programs and their measurable impact on children and communities."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {impactReports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <span className="inline-block px-2 py-0.5 bg-warm/10 text-warm text-xs font-medium rounded-full mb-2">
                    Impact Report
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  <button className="flex items-center gap-2 text-warm hover:text-warm-dark font-medium text-sm mt-auto">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Financial Transparency"
            title="Financial Statements"
            description="Complete audited financial statements ensuring full accountability to our donors and stakeholders."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialReports.map((report) => (
              <div key={report.id} className="bg-ngo-secondary rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{report.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-4">
                  <span>{report.year}</span>
                  <span>•</span>
                  <span>{report.fileSize}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-navy text-white py-2 rounded-lg hover:bg-navy-light transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Our Commitment"
                title="Financial Responsibility"
                description="We maintain the highest standards of financial transparency and accountability."
                centered={false}
              />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Independent Audits</h4>
                    <p className="text-gray-600 text-sm">All financials are independently audited by reputable firms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Program Efficiency</h4>
                    <p className="text-gray-600 text-sm">High percentage of donations go directly to program activities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Open Data</h4>
                    <p className="text-gray-600 text-sm">We publish detailed program data and outcomes for public review.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy mb-6">Our Commitment to You</h3>
              <p className="text-gray-600 mb-6">
                We are committed to ensuring that every dollar donated is used wisely and effectively to support the children and families in our programs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Transparent financial reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Regular program updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Direct sponsor connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Independent audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Our Work?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            We're happy to provide additional information about our programs, finances, or impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-warm-dark font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
