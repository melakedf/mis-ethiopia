import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  Home,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education & Child Development",
    text: "School support, tutoring, learning materials, summer learning, and follow-up that help children stay engaged and progress.",
  },
  {
    icon: Heart,
    title: "Child Protection & Sponsorship",
    text: "Long-term support for vulnerable children and families, combining financial assistance with safeguarding and regular follow-up.",
  },
  {
    icon: Home,
    title: "Family & Community Support",
    text: "Practical assistance that strengthens households, connects families to services, and supports safer, more stable communities.",
  },
  {
    icon: Shield,
    title: "Humanitarian Response",
    text: "Locally informed support for crisis-affected communities, including non-food items, protection-focused assistance, and coordination.",
  },
  {
    icon: Users,
    title: "Livelihoods & Inclusion",
    text: "Activities that strengthen resilience, participation, and economic opportunity for women, caregivers, young people, and excluded groups.",
  },
  {
    icon: Handshake,
    title: "Partnership & Localization",
    text: "Collaboration with communities, public institutions, donors, clusters, and civil-society partners to deliver accountable results.",
  },
];

const principles = [
  "Community-led planning and implementation",
  "Safeguarding and protection at the center",
  "Transparent financial and narrative reporting",
  "Partnership with local institutions and communities",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-navy-dark pt-24 lg:min-h-[820px]">
        <div
          className="absolute inset-0 bg-cover bg-[center_34%] bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&h=1200&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,43,.97)_0%,rgba(12,48,66,.92)_45%,rgba(12,48,66,.62)_72%,rgba(12,48,66,.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(232,162,58,.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[660px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[720px] lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-warm" />
              Multi Integrated Support (MIS) Ethiopia
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Stronger families. Safer children. More resilient communities.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              MIS Ethiopia is a locally rooted civil-society organization working across child protection, education, family support, humanitarian response, and community development.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-warm px-7 text-base font-semibold text-navy-dark shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-warm-light"
              >
                Explore Our Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/partners"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Partner With MIS
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold text-white">15+ years</div>
                <div className="mt-1 text-sm text-white/60">Serving communities in Ethiopia</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Locally led</div>
                <div className="mt-1 text-sm text-white/60">Community-informed delivery</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Multi-sector</div>
                <div className="mt-1 text-sm text-white/60">Development and humanitarian work</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-dark/82 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 text-sm text-white/70 sm:px-8 lg:px-10">
            <span className="font-semibold text-white">Our approach</span>
            <span>Safeguarding</span>
            <span>Accountability</span>
            <span>Localization</span>
            <span>Community participation</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <div className="eyebrow">Who we are</div>
            <h2 className="section-title mt-4">Local knowledge. Practical action. Long-term commitment.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              MIS works with children, families, communities, local authorities, and partners to address immediate needs while strengthening the systems and relationships that make progress sustainable.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our work combines direct assistance with education, protection, community engagement, and institutional partnership—so support is relevant, accountable, and connected to local priorities.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-navy transition hover:text-warm-dark"
            >
              Learn about MIS Ethiopia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-ngo-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow">What we do</div>
            <h2 className="section-title mt-4">Integrated programs built around real community needs.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              MIS brings related services together instead of treating each challenge in isolation. This makes programs more practical for families and more effective for partners.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="group rounded-xl border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,35,48,.045)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_48px_rgba(15,35,48,.08)]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-navy/8 text-navy transition group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-navy-dark">{program.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{program.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-md border border-navy/15 bg-white px-5 py-3 font-semibold text-navy shadow-sm transition hover:border-navy/30"
            >
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-navy-dark shadow-[0_30px_80px_rgba(15,35,48,.12)] lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[590px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=900&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="inline-flex rounded-md bg-white/92 px-4 py-2 text-sm font-semibold text-navy-dark shadow-lg backdrop-blur-sm">
                Child sponsorship, education follow-up & family support
              </div>
            </div>
          </div>

          <div className="flex items-center p-8 sm:p-12 lg:p-14">
            <div>
              <div className="eyebrow text-warm">Featured program</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Support that stays connected to the child and the family.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Our child sponsorship work links regular family support with education monitoring, children&apos;s activities, nutrition support, and direct communication with partners.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 text-white/80">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-warm" />
                  <span>Regular follow-up with children and caregivers</span>
                </div>
                <div className="flex gap-3 text-white/80">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-warm" />
                  <span>Education support and learning-focused activities</span>
                </div>
                <div className="flex gap-3 text-white/80">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-warm" />
                  <span>Transparent program and financial reporting</span>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/sponsorship"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-warm px-6 font-semibold text-navy-dark transition hover:bg-warm-light"
                >
                  Child Sponsorship <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 font-semibold text-white transition hover:bg-white/8"
                >
                  Contact our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ngo-secondary py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <div className="eyebrow">How we work</div>
            <h2 className="section-title mt-4">Accountability is part of program quality.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Donors, partners, communities, and families need clear information about what is planned, what was delivered, and what changed. MIS builds documentation and follow-up into implementation.
            </p>
            <Link
              href="/reports"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 font-semibold text-white transition hover:bg-navy-light"
            >
              <FileText className="h-4 w-4" />
              Reports & accountability
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-warm/12 text-sm font-bold text-warm-dark">
                  0{index + 1}
                </div>
                <p className="font-semibold leading-7 text-navy-dark">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f7faf8_0%,#ffffff_58%)] p-8 sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:p-14">
            <div>
              <div className="eyebrow">Work with us</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-navy-dark sm:text-5xl">
                Looking for a capable local partner in Ethiopia?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                MIS works with donors, NGOs, public institutions, networks, and community structures to design and deliver programs that are locally grounded and operationally accountable.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/partners"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-navy px-6 font-semibold text-white transition hover:bg-navy-light sm:w-auto"
              >
                Partnership information <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 font-semibold text-navy transition hover:border-slate-400 sm:w-auto"
              >
                <MapPin className="h-4 w-4" />
                Contact MIS Ethiopia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          <Link href="/about" className="group flex items-center gap-4 rounded-xl p-4 transition hover:bg-ngo-secondary">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-navy-dark">About MIS</div>
              <div className="mt-1 text-sm text-slate-500">Mission, experience and governance</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link href="/reports" className="group flex items-center gap-4 rounded-xl p-4 transition hover:bg-ngo-secondary">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-navy-dark">Reports</div>
              <div className="mt-1 text-sm text-slate-500">Transparency and organizational documents</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
          </Link>

          <Link href="/contact" className="group flex items-center gap-4 rounded-xl p-4 transition hover:bg-ngo-secondary">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-navy-dark">Get in touch</div>
              <div className="mt-1 text-sm text-slate-500">Programs, partnerships and general enquiries</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
