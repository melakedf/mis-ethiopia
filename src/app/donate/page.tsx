"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, CreditCard, Building, Smartphone, Check, Shield, ArrowRight } from "lucide-react";
import { Hero, Section, SectionHeader } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/constants";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactLevels = [
  { amount: 25, impact: "Provides school supplies for one child" },
  { amount: 50, impact: "Covers medical checkups for a child" },
  { amount: 100, impact: "Supports a child's education for a month" },
  { amount: 250, impact: "Funds nutrition support for a family" },
  { amount: 500, impact: "Sponsors a child's education for a semester" },
  { amount: 1000, impact: "Supports an entire child's yearly needs" },
];

const paymentMethods = [
  { icon: CreditCard, name: "Credit/Debit Card", description: "Secure online payment" },
  { icon: Building, name: "Bank Transfer", description: "Direct to our account" },
  { icon: Smartphone, name: "Mobile Money", description: "Telebirr and approved local channels" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donated, setDonated] = useState(false);

  const currentAmount = selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;
  const currentImpact = impactLevels.find((i) => i.amount === currentAmount) || impactLevels[3];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setDonated(true);
  };

  return (
    <>
      <Hero
        title="Make a Donation"
        subtitle="Support Our Mission"
        description="Your generous donation helps us provide education, healthcare, and hope to children and families in Ethiopia. Every contribution makes a difference."
        ctaText="Sponsor a Child"
        ctaSecondaryText="Learn More"
        ctaHref="/sponsorship"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=1080&fit=crop"
      />

      {donated ? (
        <Section>
          <div className="max-w-2xl mx-auto px-4 text-center py-16">
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-success" />
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your donation of ${currentAmount} has been received. Together, we're making a difference in the lives of those who need it most.
            </p>
            <div className="bg-ngo-secondary rounded-xl p-6 mb-8">
              <h3 className="font-bold text-navy mb-2">What Your Gift Provides</h3>
              <p className="text-gray-600">{currentImpact.impact}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setDonated(false)} className="bg-warm hover:bg-warm-dark">
                Donate Again
              </Button>
              <Link href="/" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-2 text-sm font-medium hover:bg-muted transition-colors">
                Return Home
              </Link>
            </div>
          </div>
        </Section>
      ) : (
        <Section className="bg-ngo-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <SectionHeader
                  subtitle="Select Amount"
                  title="Choose Your Gift"
                  description="Your donation directly supports children and families through our programs."
                />

                <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setIsRecurring(false)}
                      className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                        !isRecurring
                          ? "bg-navy text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setIsRecurring(true)}
                      className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                        isRecurring
                          ? "bg-navy text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-4 rounded-xl font-semibold text-lg transition-all ${
                          selectedAmount === amount
                            ? "bg-warm text-white shadow-md scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter a custom amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                      <Input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("custom");
                        }}
                        placeholder="Enter amount"
                        className="pl-8 text-lg h-14"
                      />
                    </div>
                  </div>

                  {currentAmount > 0 && (
                    <div className="bg-warm/10 rounded-xl p-6 border border-warm/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-warm/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-warm" />
                        </div>
                        <div>
                          <div className="font-bold text-navy text-lg mb-1">
                            Your Impact: ${currentAmount}
                          </div>
                          <p className="text-gray-600">{currentImpact.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                    <h3 className="text-xl font-bold text-navy mb-6">Payment Method</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.name}
                          type="button"
                          onClick={() => setSelectedPayment(method.name.toLowerCase().split(" ")[0])}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            selectedPayment === method.name.toLowerCase().split(" ")[0]
                              ? "border-warm bg-warm/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <method.icon className={`w-8 h-8 mx-auto mb-2 ${
                            selectedPayment === method.name.toLowerCase().split(" ")[0]
                              ? "text-warm"
                              : "text-gray-500"
                          }`} />
                          <div className="font-medium text-navy text-sm">{method.name}</div>
                          <div className="text-xs text-gray-500">{method.description}</div>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input required placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input required placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input type="email" required placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <Input required placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <Input required placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <Input required placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || currentAmount === 0}
                    className="w-full bg-warm hover:bg-warm-dark text-white text-lg h-14"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="mr-2 h-5 w-5" />
                        Donate ${currentAmount} {isRecurring && "/month"}
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Why Donate to MIS?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Direct Impact</div>
                        <div className="text-gray-300 text-sm">
                          Your donation directly supports children and families.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Transparent</div>
                        <div className="text-gray-300 text-sm">
                          Regular updates on how your gift is making impact.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Secure</div>
                        <div className="text-gray-300 text-sm">
                          Bank-level encryption protects your information.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Tax Deductible</div>
                        <div className="text-gray-300 text-sm">
                          Your donation may be tax-deductible.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <Shield className="w-12 h-12 text-navy mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-2">Our Commitment</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We are committed to transparency and making every donation count.
                  </p>
                  <Link href="/reports" className="text-warm hover:text-warm-dark text-sm font-medium">
                    View our reports →
                  </Link>
                </div>

                <div className="bg-warm rounded-2xl p-8 text-white">
                  <h3 className="text-lg font-bold mb-4">Other Ways to Give</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Bank Transfer (contact us for details)
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Check payable to MIS Ethiopia
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Monthly Giving Program
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
