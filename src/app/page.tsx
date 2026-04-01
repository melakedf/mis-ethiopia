import Link from "next/link";
import { ArrowRight, Heart, Shield, Users, BookOpen, CheckCircle, GraduationCap, Target, Eye, FileText, Download, Star, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/data/constants";

export default function Home() {
  return (
    <>
      <Hero
        title="Give Every Child a Chance to Thrive"
        subtitle="Child Sponsorship & Family Support"
        description="MIS Ethiopia connects compassionate sponsors with children and families who need it most. Through education, healthcare, and community support, we're building brighter futures—one child at a time."
        ctaText="Sponsor a Child Today"
        ctaSecondaryText="Learn How It Works"
        ctaHref="/sponsorship"
      />

      {/* Trust & Credibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
              Why Trust MIS Ethiopia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Built on Integrity, Driven by Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand that your trust is earned, not given. That's why we maintain the highest standards of transparency, accountability, and ethical operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-ngo-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Registered & Compliant</h3>
              <p className="text-gray-600 text-sm">
                Officially registered organization operating in full compliance with Ethiopian regulations and international standards.
              </p>
            </div>
            
            <div className="bg-ngo-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparent Reporting</h3>
              <p className="text-gray-600 text-sm">
                Detailed annual reports, independent audits, and regular program updates available to all stakeholders.
              </p>
            </div>
            
            <div className="bg-ngo-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Local Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our team lives and works in the communities we serve, understanding local needs firsthand.
              </p>
            </div>
            
            <div className="bg-ngo-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Child-Centered Focus</h3>
              <p className="text-gray-600 text-sm">
                Every decision we make prioritizes the wellbeing, safety, and development of the children in our care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-warm/20 text-warm rounded-full text-sm font-medium mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Community Dedicated to Children's Futures
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                MIS Ethiopia was founded with a simple but powerful belief: every child deserves the opportunity to reach their full potential. We work alongside vulnerable children and families, providing the support, resources, and encouragement they need to build fulfilling lives.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our holistic approach addresses not just immediate needs, but the root causes of disadvantage—ensuring that the support we provide creates lasting, sustainable change.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-warm flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Our Mission</h4>
                    <p className="text-gray-400 text-sm">Support vulnerable children and families through comprehensive programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-warm flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Our Vision</h4>
                    <p className="text-gray-400 text-sm">Every child reaches their full potential in a supportive community</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-warm hover:bg-warm-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                  alt="Children learning together"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="text-warm font-bold text-3xl mb-1">25+</div>
                <div className="text-navy font-semibold">Years of Service</div>
                <div className="text-gray-500 text-sm">Dedicated to Ethiopian communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Child Sponsorship Section */}
      <section className="py-20 bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop"
                  alt="Sponsored child"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-warm text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white/90 text-sm">Direct Connection</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
                Featured Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Child Sponsorship: Your Link to a Child's Future
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you sponsor a child through MIS Ethiopia, you're not just making a donation—you're building a relationship. You'll receive letters, photos, and updates directly from your sponsored child, watching them grow and thrive over time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Education Support</h4>
                    <p className="text-gray-600 text-sm">School fees, supplies, and tutoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Healthcare & Nutrition</h4>
                    <p className="text-gray-600 text-sm">Regular check-ups and nutritious meals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Family Support</h4>
                    <p className="text-gray-600 text-sm">Resources to strengthen home environments</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sponsorship"
                  className="inline-flex items-center justify-center gap-2 bg-warm hover:bg-warm-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Sponsor a Child
                </Link>
                <Link
                  href="/sponsorship"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg hover:bg-navy hover:text-white transition-colors"
                >
                  View Children
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Making a Measurable Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every program we run, every child we support, every family we assist contributes to real, tangible outcomes. Here's the difference we're making together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="text-5xl font-bold text-warm mb-2">0+</div>
              <div className="text-navy font-semibold mb-1">Children Supported</div>
              <div className="text-gray-500 text-sm">Through sponsorship and programs</div>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="text-5xl font-bold text-warm mb-2">0+</div>
              <div className="text-navy font-semibold mb-1">Families Served</div>
              <div className="text-gray-500 text-sm">With comprehensive support</div>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="text-5xl font-bold text-warm mb-2">0+</div>
              <div className="text-navy font-semibold mb-1">Communities</div>
              <div className="text-gray-500 text-sm">Across Ethiopia</div>
            </div>
            <div className="text-center p-8 bg-ngo-secondary rounded-2xl">
              <div className="text-5xl font-bold text-warm mb-2">0%</div>
              <div className="text-navy font-semibold mb-1">To Programs</div>
              <div className="text-gray-500 text-sm">Of every donation</div>
            </div>
          </div>
          
          <div className="bg-navy rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-warm" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Education Access</h4>
                  <p className="text-gray-300 text-sm">Children receive school fees, supplies, and academic support to succeed in their education.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-warm" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Health & Nutrition</h4>
                  <p className="text-gray-300 text-sm">Regular health check-ups and nutrition programs ensure children grow up healthy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-warm" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Family Stability</h4>
                  <p className="text-gray-300 text-sm">Family support programs create stable home environments where children can flourish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus our resources on programs that create the greatest, most sustainable impact on children's lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                  alt="Child sponsorship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-warm" />
                  <h3 className="text-xl font-bold text-navy">Child Sponsorship</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Direct sponsorship connecting you with a specific child, providing education, healthcare, and emotional support.
                </p>
                <Link href="/sponsorship" className="text-warm hover:text-warm-dark font-medium text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
                  alt="Education"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-warm" />
                  <h3 className="text-xl font-bold text-navy">Education Support</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  School fees, supplies, tutoring, and scholarships helping children access and succeed in education.
                </p>
                <Link href="/programs" className="text-warm hover:text-warm-dark font-medium text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Family support"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-warm" />
                  <h3 className="text-xl font-bold text-navy">Family Support</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Resources, training, and assistance helping families create stable, nurturing home environments.
                </p>
                <Link href="/programs" className="text-warm hover:text-warm-dark font-medium text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency & Reports Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
                Accountability
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Transparency You Can Trust
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that complete transparency is essential to maintaining your trust. That's why we provide detailed reports on our finances, programs, and outcomes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">Independent financial audits every year</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">Detailed annual program reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">Regular updates to sponsors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">Open books policy for stakeholders</span>
                </div>
              </div>
              
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FileText className="w-5 h-5" />
                View Reports
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-ngo-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-7 h-7 text-navy" />
                </div>
                <h4 className="font-bold text-navy mb-2">Annual Reports</h4>
                <p className="text-gray-600 text-sm mb-3">Comprehensive yearly reviews of our work and finances</p>
                <span className="text-warm text-sm font-medium">Download PDF →</span>
              </div>
              <div className="bg-ngo-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-navy" />
                </div>
                <h4 className="font-bold text-navy mb-2">Financial Statements</h4>
                <p className="text-gray-600 text-sm mb-3">Audited accounts and financial breakdowns</p>
                <span className="text-warm text-sm font-medium">Download PDF →</span>
              </div>
              <div className="bg-ngo-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-navy" />
                </div>
                <h4 className="font-bold text-navy mb-2">Impact Reports</h4>
                <p className="text-gray-600 text-sm mb-3">Program outcomes and success stories</p>
                <span className="text-warm text-sm font-medium">Download PDF →</span>
              </div>
              <div className="bg-ngo-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-navy" />
                </div>
                <h4 className="font-bold text-navy mb-2">Newsletter</h4>
                <p className="text-gray-600 text-sm mb-3">Regular updates on our work and impact</p>
                <span className="text-warm text-sm font-medium">Subscribe →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Placeholder */}
      <section className="py-20 bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-warm/10 text-warm rounded-full text-sm font-medium mb-4">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Partners & Collaborators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work alongside organizations and institutions who share our commitment to children's welfare. (Partner logos coming soon)
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-24 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/partners" className="text-warm hover:text-warm-dark font-medium inline-flex items-center gap-1">
              Learn about partnership opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-dark to-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Change a Child's Life?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Your support— whether through sponsorship, donation, or partnership— helps us continue our mission to uplift children and families across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sponsorship"
              className="inline-flex items-center justify-center gap-2 bg-white text-warm-dark font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Heart className="w-6 h-6" />
              Sponsor a Child
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-warm rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-bold text-lg">MIS Ethiopia</span>
                  <span className="block text-xs text-gray-400">Multi Integrated Support</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm transition-colors">
                  <span className="text-sm">F</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm transition-colors">
                  <span className="text-sm">T</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm transition-colors">
                  <span className="text-sm">In</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-warm transition-colors text-sm">About Us</Link></li>
                <li><Link href="/programs" className="text-gray-400 hover:text-warm transition-colors text-sm">Our Programs</Link></li>
                <li><Link href="/sponsorship" className="text-gray-400 hover:text-warm transition-colors text-sm">Child Sponsorship</Link></li>
                <li><Link href="/news" className="text-gray-400 hover:text-warm transition-colors text-sm">News & Updates</Link></li>
                <li><Link href="/reports" className="text-gray-400 hover:text-warm transition-colors text-sm">Reports</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Get Involved</h4>
              <ul className="space-y-3">
                <li><Link href="/donate" className="text-gray-400 hover:text-warm transition-colors text-sm">Donate</Link></li>
                <li><Link href="/sponsorship" className="text-gray-400 hover:text-warm transition-colors text-sm">Sponsor a Child</Link></li>
                <li><Link href="/partners" className="text-gray-400 hover:text-warm transition-colors text-sm">Partner With Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-warm transition-colors text-sm">Volunteer</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-warm transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, Ethiopia<br />
                    {siteConfig.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-warm flex-shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-warm transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-warm flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-warm transition-colors text-sm">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-warm transition-colors text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-warm transition-colors text-sm">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
