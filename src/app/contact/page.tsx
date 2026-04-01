"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { siteConfig } from "@/data/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "How can I make a donation?",
      answer: "You can donate online through our secure donation portal, by bank transfer, or by mailing a check. Visit our Donate page for all options.",
    },
    {
      question: "What percentage of my donation goes to programs?",
      answer: "95% of all donations go directly to our program activities. Only 5% is used for administrative and fundraising costs.",
    },
    {
      question: "How do I sponsor a child?",
      answer: "Visit our Child Sponsorship page to browse profiles of children available for sponsorship. Choose a child and complete the sponsorship form.",
    },
    {
      question: "Can I visit your programs in Ethiopia?",
      answer: "Yes, we organize supervised field visits for donors and sponsors. Contact us to arrange a visit that fits your schedule.",
    },
    {
      question: "How can my company partner with MIS Ethiopia?",
      answer: "We offer various corporate partnership opportunities. Please contact our partnerships team through this form with your interests.",
    },
  ];

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions about our work? Want to get involved? We'd love to hear from you."
        ctaText="Donate Now"
        ctaSecondaryText="Sponsor a Child"
        ctaHref="/donate"
        compact
      />

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                subtitle="Send Us a Message"
                title="Contact Form"
                description="Fill out the form below and our team will get back to you within 24-48 hours."
              />

              {submitted ? (
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 XXX XXX XXX"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-warm hover:bg-warm-dark text-white"
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
              <div className="bg-ngo-secondary rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-navy">Head Office</div>
                      <div className="text-gray-600 text-sm">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, Ethiopia<br />
                        {siteConfig.address.postalCode}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-warm flex-shrink-0" />
                    <a href={`tel:${siteConfig.phone}`} className="text-gray-600 hover:text-warm">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-warm flex-shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-600 hover:text-warm">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-warm flex-shrink-0" />
                    <span className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM (EAT)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-warm" />
                  <h3 className="text-lg font-bold">Live Chat</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Need immediate assistance? Chat with our team during business hours.
                </p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  Start Chat
                </Button>
              </div>

              <div className="bg-warm/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Emergency?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For urgent humanitarian inquiries, please call our emergency line.
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-warm" />
                  <span className="font-bold text-navy">+251 911 123 456</span>
                </div>
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
            description="Quick answers to common questions about MIS Ethiopia and our work."
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
