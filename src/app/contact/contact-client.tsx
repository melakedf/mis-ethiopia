"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { siteConfig, departmentContacts } from "@/data/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage({formAvailable}: {formAvailable: boolean}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({...formData, consent: true}) });
      if (!response.ok) throw new Error("Unable to send message");
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setError("Your message could not be sent. Please try again or email info@miseth.org.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How can I make a donation?",
      answer: "Email MIS to discuss a donation and confirm payment details and receipt arrangements. This website does not currently accept online payments.",
    },
    {
      question: "How does child sponsorship work?",
      answer: "MIS’s child-centered initiative supports education, family assistance and child well-being. Contact us to discuss support options and reporting arrangements that respect children’s privacy.",
    },
    {
      question: "What percentage of my donation goes to programs?",
      answer: "We are committed to maximizing the impact of every donation. Contact us for details about our program spending ratio.",
    },
    {
      question: "Can I visit the programs in Ethiopia?",
      answer: "Please contact MIS to discuss whether a visit is appropriate and possible. Visits must follow safeguarding requirements and program needs.",
    },
    {
      question: "How can my organization partner with MIS Ethiopia?",
      answer: "We welcome partnerships with corporations, foundations, and other organizations. Please email our team with your organization, areas of interest and proposed collaboration.",
    },
  ];

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team across Ethiopia"
        description="We'd love to hear from you. Whether you have questions about our programs, want to get involved, or need more information, we're here to help."
        ctaText="Discuss a donation"
        ctaSecondaryText="Explore sponsorship"
        ctaSecondaryHref="/sponsorship"
        ctaHref="/donate"
        compact
      />

      <Section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-warm/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-warm" />
                </div>
                <div className="text-white font-bold">Headquarters</div>
              </div>
              <p className="text-gray-300 text-sm ml-13">Addis Ababa, Ethiopia</p>
              <p className="text-gray-400 text-sm ml-13">{siteConfig.address.street}</p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-warm/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-warm" />
                </div>
                <div className="text-white font-bold">Phone</div>
              </div>
              <p className="text-gray-300 text-sm ml-13">{siteConfig.phone}</p>
              <p className="text-gray-400 text-sm ml-13">Call to arrange a conversation</p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-warm/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-warm" />
                </div>
                <div className="text-white font-bold">Email</div>
              </div>
              <p className="text-gray-300 text-sm ml-13">{siteConfig.email}</p>
              <p className="text-gray-400 text-sm ml-13">General and partnership inquiries</p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-warm/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-warm" />
                </div>
                <div className="text-white font-bold">Office Visits</div>
              </div>
              <p className="text-gray-300 text-sm ml-13">By arrangement</p>
              <p className="text-gray-400 text-sm ml-13">Contact us before visiting</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                subtitle="Get in Touch"
                title="Send Us a Message"
                description={formAvailable ? "Have a question or want to work with us? Send your inquiry below." : "Have a question or want to work with us? Email our team to start a conversation."}
              />

              {!formAvailable ? (
                <div className="rounded-2xl bg-slate-50 p-8"><h3 className="text-2xl font-semibold text-navy">Email the MIS team</h3><p className="mt-4 leading-7 text-slate-600">For partnerships, program information or volunteering, email us with your name, organization and inquiry.</p><a href={`mailto:${siteConfig.email}`} className="mt-6 inline-flex rounded-md bg-navy px-6 py-3 font-semibold text-white">{siteConfig.email}</a><p className="mt-5 text-sm leading-6 text-slate-600">Please do not include sensitive personal details or child-protection case information in a general inquiry.</p></div>
              ) : submitted ? (
                <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-warm hover:bg-warm-dark"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-red-800">{error}</p>}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        required
                        id="firstName" value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Your first name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        required
                        id="lastName" value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Your last name"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        id="email" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 XX XXX XXXX"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      id="subject" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-warm focus:outline-none focus:ring-1 focus:ring-warm"
                    >
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Programs">Programs</option>
                      <option value="Media & Press">Media & Press</option>
                      <option value="Careers">Careers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      id="message" value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <p className="text-sm leading-6 text-slate-600">Please do not include sensitive personal details or child-protection case information. This form is not an emergency service.</p>
                  <label className="flex items-start gap-3 text-sm leading-6 text-slate-700"><input type="checkbox" required className="mt-1 h-4 w-4"/><span>I have read the <a href="/privacy" className="underline">privacy notice</a> and agree that MIS may use my details to respond.</span></label>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-warm hover:bg-warm-dark text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">Inquiry Topics</h3>
                <p className="text-gray-600 text-sm mb-4">Our team can direct your inquiry to the appropriate person.</p>
                <div className="space-y-4">
                  {departmentContacts.map((dept, index) => (
                    <div key={index} className="bg-ngo-secondary rounded-xl p-4">
                      <h4 className="font-semibold text-navy mb-1">{dept.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-warm hover:text-warm-dark text-sm font-medium">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-warm" />
                  <h3 className="text-lg font-bold">Connect With Us</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about sponsorship or donations? Our team is here to help.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-warm hover:text-warm-light"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <p className="text-sm font-medium text-navy mb-1">Contact Person</p>
                <p className="text-gray-600 text-sm">Melake Fisseha Desta</p>
                <p className="text-sm text-gray-600">Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ngo-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about MIS Ethiopia and our programs."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-navy">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-warm" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
}
