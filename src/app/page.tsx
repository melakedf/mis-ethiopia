import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  BookOpen,
  CheckCircle,
  FileText,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Leaf,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { FloatingOrb, ParallaxImageStack, Reveal, TiltCard } from "@/components/sections/motion";
import { homepageMetrics } from "@/data/constants";

const credibilityStrip = [
  "15+ Years of Experience",
  "Multi-Sector Programming",
  "Community-Led Delivery",
  "Transparent Reporting",
  "Trusted Partnerships",
];

const trustBlocks = [
  {
    title: "15+ Years of Experience",
    description:
      "MIS Ethiopia brings over 15 years of local implementation experience across diverse community programs.",
    icon: Shield,
  },
  {
    title: "Multi-Sector Programming",
    description:
      "Our integrated programs support children, families, women, youth, and communities through practical interventions.",
    icon: Target,
  },
  {
    title: "Community-Led Delivery",
    description:
      "Programs are designed with local communities to ensure relevance, dignity, and long-term impact.",
    icon: Users,
  },
  {
    title: "Transparent Reporting",
    description:
      "We provide donor, partner, and stakeholder visibility through regular reports and accountability documents.",
    icon: FileText,
  },
];

const thematicAreas = [
  {
    title: "Child Protection",
    description: "Protective services and safe environments that support child wellbeing and dignity.",
    icon: Shield,
  },
  {
    title: "Education Support",
    description: "Access to schooling, learning materials, and follow-up support for better outcomes.",
    icon: GraduationCap,
  },
  {
    title: "Women & Girls Empowerment",
    description: "Practical support that strengthens participation, safety, and opportunity for women and girls.",
    icon: Heart,
  },
  {
    title: "Youth Development",
    description: "Skills, guidance, and pathways that help young people build resilient futures.",
    icon: Users,
  },
  {
    title: "Community Health",
    description: "Locally grounded support promoting household health, care access, and wellbeing awareness.",
    icon: HomeIcon,
  },
  {
    title: "Livelihoods & Resilience",
    description: "Community resilience approaches that strengthen household stability and adaptive capacity.",
    icon: Leaf,
  },
  {
    title: "Humanitarian Support",
    description: "Timely support for vulnerable populations in periods of crisis and urgent need.",
    icon: AlertTriangle,
  },
  {
    title: "Capacity Building",
    description: "Institutional and community capacity strengthening for sustainable local leadership.",
    icon: BookOpen,
  },
];

const stories = [
  {
    theme: "Education Support",
    quote:
      "Through MIS support, our children stayed in school and regained confidence in learning.",
    source: "Parent participant, community education program",
  },
  {
    theme: "Youth Development",
    quote:
      "Youth mentoring and practical guidance helped me move from uncertainty to clear direction.",
    source: "Youth participant, local development initiative",
  },
  {
    theme: "Family Support",
    quote:
      "Family support and sponsorship follow-up gave us stability and helped us plan for our children's future.",
    source: "Caregiver, family strengthening program",
  },
  {
    theme: "Community Impact",
    quote:
      "Community-led planning with MIS helped our neighborhood organize local solutions that continue beyond one project cycle.",
    source: "Community leader, local resilience initiative",
  },
];

const hasVerifiedPartners = false;

export default function Home() {
  return (
    <>
      <Hero
        title="Strengthening children, families, and communities across Ethiopia"
        subtitle="15+ Years of Multi-Sector Service"
        description="MIS is an Ethiopian NGO delivering integrated, community-based programs across multiple sectors, with a strong commitment to child wellbeing and sustainable local impact."
        ctaText="Explore Our Work"
        ctaSecondaryText="Sponsor a Child"
        ctaSecondaryHref="/sponsorship"
        ctaHref="/programs"
        showReportsLink
        floatingStats={homepageMetrics.heroFloatingStats}
      />

      <section className="bg-navy-dark py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {credibilityStrip.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <FloatingOrb className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-warm/10 blur-3xl" />
        <FloatingOrb className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
                Trust and Credibility
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">Why Donors Trust MIS Ethiopia</h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                MIS combines local roots, institutional experience, and practical accountability to deliver credible results.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustBlocks.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05}>
                <div className="h-full rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-ngo-secondary p-7 shadow-[0_14px_38px_rgba(15,31,51,0.09)] ring-1 ring-white transition-shadow hover:shadow-[0_20px_48px_rgba(15,31,51,0.16)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white shadow-lg shadow-navy/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-[1.05rem] font-bold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              A trusted Ethiopian NGO with broad, community-based experience
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-gray-600">
              Multi Integrated Support (MIS) is an Ethiopian Resident Charity established in 2010. With over 15 years of implementation experience, MIS delivers integrated, community-based programs that respond to real local needs across children, women, families, youth, and wider community systems.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Locally rooted implementation",
                "Partnership-driven delivery",
                "Accountability-focused systems",
                "Multi-sector field experience",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-ngo-secondary p-7 shadow-[0_14px_38px_rgba(15,31,51,0.12)]">
              <h3 className="text-xl font-bold text-navy">Institutional Focus</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                MIS delivers integrated programming that links child wellbeing, family resilience, and community systems. Governance is provided by a board under national CSO legislation, while implementation is managed through dedicated program and support departments led by the Executive Director.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-warm" />
                  <p className="text-sm text-gray-700">Strong governance and institutional accountability</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-warm" />
                  <p className="text-sm text-gray-700">Community-led design and implementation practice</p>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-warm" />
                  <p className="text-sm text-gray-700">Transparent reporting for donors and partners</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ngo-secondary py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
                Our Areas of Work
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">Multi-sector programs rooted in local realities</h2>
              <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                MIS delivers integrated programs across thematic areas that respond to immediate needs while building long-term resilience.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {thematicAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.04}>
                <TiltCard
                  intensity={3.2}
                  perspective={1500}
                  hoverLift={-2.4}
                  hoverScale={1.008}
                  className="h-full rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-white p-6 shadow-[0_14px_34px_rgba(15,31,51,0.11)] ring-1 ring-white transition-shadow hover:shadow-[0_20px_44px_rgba(15,31,51,0.16)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white shadow-md shadow-navy/20">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{area.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <FloatingOrb className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-warm/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <ParallaxImageStack
                className="mx-auto max-w-xl"
                images={[
                  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=640&fit=crop",
                  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&h=640&fit=crop",
                  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&h=640&fit=crop",
                ]}
                alt="Children participating in MIS sponsorship and learning support"
                badge={{ title: "Featured", subtitle: "Child Sponsorship" }}
              />
            </div>
          </Reveal>

          <Reveal>
            <span className="mb-3 inline-block rounded-full border border-navy/15 bg-navy/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              From Multi-sector Impact to Flagship Delivery
            </span>
            <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
              Featured Flagship Program
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
              Child Sponsorship & Family Support
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-gray-600">
              Child sponsorship is one of MIS's strongest pathways for lasting change. Within MIS's broader multi-sector approach, sponsorship helps vulnerable children access education, family support, wellbeing services, and practical care with clear accountability to supporters.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 text-warm" />
                <p className="text-sm text-gray-700">Education support: school fees, materials, and learning follow-up</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="mt-0.5 h-5 w-5 text-warm" />
                <p className="text-sm text-gray-700">Child wellbeing support: nutrition, health referrals, and psychosocial care</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 text-warm" />
                <p className="text-sm text-gray-700">Family and community strengthening for sustainable outcomes</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/sponsorship"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-warm px-7 py-3.5 font-semibold text-white shadow-lg shadow-warm/25 transition-all hover:bg-warm-dark hover:shadow-xl"
              >
                Sponsor a Child
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-7 py-3.5 font-semibold text-white transition-all hover:bg-navy-light"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-7 py-3.5 font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ngo-secondary py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
                Impact Snapshot
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Progress You Can Track</h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Organization-wide indicators that reflect MIS's institutional scope, consistency, and accountability.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homepageMetrics.impact.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.05}>
                <div className="rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-ngo-secondary/60 p-7 text-center shadow-[0_12px_35px_rgba(15,31,51,0.08)] ring-1 ring-white transition-shadow hover:shadow-[0_18px_45px_rgba(15,31,51,0.14)]">
                  <p className="text-4xl font-bold tracking-tight text-warm">{stat.value}</p>
                  <p className="mt-2 font-semibold text-navy">{stat.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{stat.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
                Stories from the Field
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Voices of community change</h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story, idx) => (
              <Reveal key={story.theme} delay={idx * 0.06}>
                <div className="h-full rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-ngo-secondary p-7 shadow-[0_12px_32px_rgba(15,31,51,0.08)] ring-1 ring-white">
                  <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy">
                    {story.theme}
                  </span>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-gray-700">"{story.quote}"</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gray-500">{story.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
              Why Support MIS
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Invest in community-led, lasting change</h2>
            <div className="mt-6 space-y-4">
              {[
                "15+ years of proven, locally rooted implementation",
                "Trusted governance and accountability for donors and partners",
                "Partnership models for institutions, companies, and foundations",
                "Community-led collaboration across multiple thematic sectors",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-gray-100/80 bg-gradient-to-b from-white to-ngo-secondary/50 p-7 shadow-[0_16px_40px_rgba(15,31,51,0.12)] ring-1 ring-white">
              <h3 className="text-xl font-bold text-navy">Support Pathways</h3>
              <p className="mt-2 text-sm text-gray-600">
                Choose how you want to engage with MIS as a donor, partner, or sponsor.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link href="/partners" className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light">
                  Partner With MIS
                </Link>
                <Link href="/donate" className="inline-flex items-center justify-center rounded-lg bg-warm px-5 py-3 text-sm font-semibold text-white hover:bg-warm-dark">
                  Donate Now
                </Link>
                <Link href="/sponsorship" className="inline-flex items-center justify-center rounded-lg border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
                  Sponsor a Child
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:border-navy hover:text-navy">
                  Contact MIS
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {hasVerifiedPartners ? (
        <section className="bg-ngo-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-navy md:text-4xl">Verified Partners and Donors</h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                  Trusted institutions supporting our mission.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="relative bg-ngo-secondary py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        <FloatingOrb className="pointer-events-none absolute -right-16 top-12 h-56 w-56 rounded-full bg-warm/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-warm/10 px-4 py-1.5 text-sm font-medium text-warm">
              Transparency
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Reports & Transparency</h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-gray-600">
              MIS Ethiopia is committed to responsible stewardship. Supporters can review annual reports, financial statements, and program updates.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Annual program and financial reporting
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Clear use-of-funds communication
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Donor updates and child progress visibility
              </li>
            </ul>
            <Link
              href="/reports"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-light"
            >
              View Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-ngo-secondary/50 p-7 shadow-[0_16px_40px_rgba(15,31,51,0.12)] ring-1 ring-white">
              <h3 className="text-lg font-bold text-navy">Key Documents</h3>
              <div className="mt-4 grid gap-3">
                {[
                  "Annual Reports",
                  "Organization Profile",
                  "Governance Overview",
                  "Compliance & Key Documents",
                  "Financial / Audit Highlights",
                ].map((doc) => (
                  <div key={doc} className="flex items-center justify-between rounded-xl border border-gray-100 bg-ngo-secondary px-4 py-3">
                    <p className="text-sm font-medium text-gray-700">{doc}</p>
                    <ArrowRight className="h-4 w-4 text-warm" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-warm-dark via-warm to-warm-light py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.26),transparent_36%),radial-gradient(circle_at_78%_72%,rgba(15,31,51,0.22),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] md:text-5xl">Let's build lasting change together</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/95">
              Support MIS in strengthening children, families, and communities through integrated, community-based development across Ethiopia.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-warm-dark shadow-xl shadow-warm-dark/30 transition-all hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Partner With MIS
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-warm-dark shadow-xl shadow-warm-dark/30 transition-all hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Donate Now
              </Link>
              <Link
                href="/sponsorship"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-warm-dark shadow-xl shadow-warm-dark/30 transition-all hover:-translate-y-0.5 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
                Sponsor a Child
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
              >
                Contact Us
              </Link>
            </div>
            <Link href="/reports" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              View Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
