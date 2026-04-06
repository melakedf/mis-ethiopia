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
                <div className="text-3xl font-bold text-navy mb-1">1,500</div>
                <div className="text-gray-600 text-sm">Households Supported</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-warm" />
                </div>
                <div className="text-3xl font-bold text-navy mb-1">98%</div>
                <div className="text-gray-600 text-sm">Beneficiary Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-warm" />
                </div>
                <div className="text-3xl font-bold text-navy mb-1">87%</div>
                <div className="text-gray-600 text-sm">Timely Delivery</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-14 h-14 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-warm" />
                </div>
                <div className="text-3xl font-bold text-navy mb-1">314</div>
                <div className="text-gray-600 text-sm">PDM Sample Size</div>
              </div>
            </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Annual Reports"
            title="Institutional Publications"
            description="Core institutional documents describing MIS governance, strategic direction, and organization profile updates."
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
            description="Implementation and monitoring reports showing measurable results from field programs and emergency response support."
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
            description="Budget utilization and financial summaries that support accountability to communities, donors, and partners."
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
                    <h4 className="font-semibold text-navy">Documented Project Financials</h4>
                    <p className="text-gray-600 text-sm">Project-level planned, received, and utilized budgets are included in final reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Evidence-Based Monitoring</h4>
                    <p className="text-gray-600 text-sm">Post Distribution Monitoring and stakeholder feedback are integrated into reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Operational Accountability</h4>
                    <p className="text-gray-600 text-sm">Reporting includes activities, achievements, constraints, and lessons from implementation areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy mb-6">Our Commitment to You</h3>
              <p className="text-gray-600 mb-6">
                We are committed to transparent program delivery and credible reporting, including publication of institutional profile updates and field implementation results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Project budget plan and utilization disclosure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Documented implementation updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Post distribution monitoring and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Stakeholder coordination and verification records</span>
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
