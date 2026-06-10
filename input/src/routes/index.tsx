import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Activity,
  Workflow,
  Network,
  LineChart,
  Users,
  BarChart3,
  Settings,
  FlaskConical,
  UserCheck,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-nurse-monitor.png.asset.json";

const TITLE =
  "Rural Healthcare Solutions | Patient Monitoring for Rural Hospitals";
const DESCRIPTION =
  "Connected patient monitoring, centralized surveillance, and predictive analytics designed to help rural hospitals improve outcomes, support lean clinical teams, and extend access to care.";

const faqs = [
  {
    q: "What is a rural hospital?",
    a: "A rural hospital provides healthcare services to communities located outside major metropolitan areas and often serves as a primary source of care for local populations.",
  },
  {
    q: "What is a Critical Access Hospital?",
    a: "Critical Access Hospitals are designated rural hospitals that meet specific federal requirements intended to improve healthcare access in underserved communities.",
  },
  {
    q: "How can patient monitoring improve rural healthcare?",
    a: "Patient monitoring technologies provide continuous visibility into patient conditions, helping clinicians identify changes sooner and support timely intervention.",
  },
  {
    q: "What is centralized patient monitoring?",
    a: "Centralized monitoring allows trained clinicians to monitor patients remotely from a central location, improving visibility and supporting efficient care delivery.",
  },
  {
    q: "How can predictive analytics help hospitals?",
    a: "Predictive analytics identify trends and patterns that may indicate patient deterioration, helping clinicians prioritize care and intervene earlier.",
  },
  {
    q: "Why is connected care important?",
    a: "Connected care improves communication and visibility across departments and facilities, supporting continuity of care and more informed clinical decision-making.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroBg.url },
      { name: "twitter:image", content: heroBg.url },
      {
        name: "keywords",
        content:
          "rural healthcare solutions, rural hospital patient monitoring, critical access hospital technology, centralized patient monitoring, clinical surveillance, predictive analytics healthcare, Sphere IQ, Spacelabs Healthcare",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Rural Hospital Patient Monitoring Solutions",
          provider: { "@type": "Organization", name: "Spacelabs Healthcare" },
          areaServed: "United States",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

/* -------- Reusable button styles (match reference: hero / hero-outline / cta / outline) -------- */

const heroBtn =
  "inline-flex items-center justify-center rounded-md bg-highlight px-6 py-3 text-base font-semibold text-highlight-foreground transition hover:opacity-90";
const heroOutlineBtn =
  "inline-flex items-center justify-center rounded-md border border-hero-foreground/40 bg-transparent px-6 py-3 text-base font-semibold text-hero-foreground transition hover:bg-hero-foreground/10";
const ctaBtn =
  "inline-flex items-center justify-center rounded-md bg-highlight px-6 py-3 text-base font-semibold text-highlight-foreground transition hover:opacity-90";
const outlineBtn =
  "inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition hover:bg-secondary";

function Index() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ChallengeSection />
      <WhyMattersSection />
      <EarlierInterventionSection />
      <LeanTeamsSection />
      <ConnectedCareSection />
      <CentralizedMonitoringSection />
      <PredictiveSection />
      <SphereSection />
      <FinancingSection />
      <WhySpacelabsSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0">
        <img
          src={heroBg.url}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/90 to-hero/60" />
      </div>
      <div className="container-page relative z-10 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-hero-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Rural Healthcare Solutions
          </h1>
          <p className="mt-4 text-2xl font-semibold text-highlight md:text-3xl">
            Improve patient outcomes. Expand access.
            <br />
            Optimize resources.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-hero-foreground/85 md:text-lg">
            Rural hospitals serve millions of patients across the United States
            while operating with lean teams and rising pressure. Connected
            patient monitoring, clinical surveillance, and predictive analytics
            help healthcare leaders strengthen care delivery and make the most
            of every resource.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className={heroBtn}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */

function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Clinically Validated Monitoring",
      desc: "Patient monitoring solutions trusted across acute and progressive care environments in hospitals worldwide.",
    },
    {
      icon: Network,
      title: "Built for Rural Networks",
      desc: "Designed to extend clinical expertise across critical access hospitals and dispersed community facilities.",
    },
    {
      icon: HeartPulse,
      title: "Continuous Patient Visibility",
      desc: "Real-time surveillance and decision support that help clinicians intervene before complications develop.",
    },
    {
      icon: Users,
      title: "Partner to Rural Healthcare",
      desc: "Decades of experience supporting hospitals through innovative monitoring and dedicated implementation.",
    },
  ];
  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="mx-auto h-8 w-8 text-highlight" />
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION TEMPLATES ---------------- */

function ChallengeSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Understanding the Challenges Facing Rural Hospitals
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Rural healthcare organizations operate in an environment unlike any
          other healthcare setting. Many rural hospitals serve large geographic
          regions with limited access to specialty services and a relatively
          small workforce. Recruiting and retaining qualified nurses,
          physicians, respiratory therapists, and other healthcare professionals
          remains a persistent challenge.
        </p>
        <p className="mt-4 text-center leading-relaxed text-foreground/85">
          Additional pressures include rising operational costs, limited capital
          budgets, aging patient populations, higher prevalence of chronic
          disease, reduced access to specialty care, increased regulatory
          requirements, and growing demand for services.
        </p>
        <div className="mt-8 rounded-lg border-l-4 border-highlight bg-card p-6 shadow-sm">
          <p className="font-semibold text-foreground">
            Key takeaway:{" "}
            <span className="font-normal text-foreground/85">
              The goal is not simply to do more with less — it is to deliver
              exceptional patient care while maximizing available resources and
              supporting long-term community health.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyMattersSection() {
  const goals = [
    "Improving patient outcomes",
    "Supporting clinician well-being",
    "Reducing preventable complications",
    "Enhancing care coordination",
    "Increasing operational efficiency",
    "Strengthening financial performance",
  ];
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          <span className="text-highlight">Why Rural Healthcare Transformation Matters</span>
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          The future of rural healthcare depends on the ability to deliver
          high-quality care in a sustainable and scalable manner. Technology
          solutions that improve visibility into patient conditions and
          streamline care delivery help organizations build a stronger
          foundation for future growth.
        </p>
        <p className="mt-4 text-center leading-relaxed text-foreground/85">
          Transformation is not about replacing clinicians — it is about
          providing care teams with the information and tools they need to make
          faster, more informed decisions.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {goals.map((g) => (
            <div
              key={g}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-highlight" />
              <span className="text-sm font-medium text-foreground">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlierInterventionSection() {
  const benefits = [
    "Improved patient safety",
    "Reduced mortality",
    "Fewer unexpected ICU transfers",
    "Reduced hospital length of stay",
    "Improved care quality metrics",
    "Better patient experiences",
  ];
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Improving Patient Outcomes Through Earlier Intervention
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Changes in patient condition are often subtle and may develop over
          time. Without continuous visibility, deterioration can go unnoticed
          until a patient experiences a significant clinical event. Advanced
          patient monitoring and clinical surveillance technologies help
          clinicians recognize changes sooner by continuously analyzing patient
          data and highlighting potential concerns.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
            >
              <HeartPulse className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
              <span className="text-sm font-medium text-foreground">{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border-l-4 border-highlight bg-card p-6 shadow-sm">
          <p className="font-semibold text-foreground">
            Key takeaway:{" "}
            <span className="font-normal text-foreground/85">
              For rural hospitals, earlier intervention may help patients
              receive appropriate care locally — before requiring transfer to
              higher-acuity facilities.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function LeanTeamsSection() {
  const items = [
    { icon: Workflow, title: "Streamline Communication", desc: "Cut noise and route the right alert to the right clinician." },
    { icon: ShieldCheck, title: "Reduce Interruptions", desc: "Smart alarms and prioritization to fight alarm fatigue." },
    { icon: Activity, title: "Situational Awareness", desc: "A unified view of every patient, in every unit." },
    { icon: Settings, title: "Simplify Telemetry", desc: "One consistent workflow across care environments." },
    { icon: UserCheck, title: "Standardize Care", desc: "Embed best practices into the everyday workflow." },
    { icon: Users, title: "Optimize Staffing", desc: "Extend clinical expertise without adding headcount." },
  ];
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container-page max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Supporting Lean Clinical Teams
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-foreground/85">
          Clinicians are being asked to care for more patients while managing
          increasing administrative responsibilities. Technology should support
          care teams — not create additional complexity. When clinicians spend
          less time navigating systems and more time at the bedside,
          organizations improve both efficiency and outcomes.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
            >
              <i.icon className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {i.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {i.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedCareSection() {
  const stops = [
    "Emergency Departments",
    "Medical-Surgical Units",
    "Progressive Care Units",
    "Intensive Care Units",
    "Outpatient Settings",
    "Remote Monitoring",
  ];
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Connected Care Across the Continuum
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Patients move through multiple care environments throughout their
          healthcare journey. Maintaining visibility across these transitions is
          essential for delivering coordinated care. Connected monitoring
          platforms ensure critical information remains accessible across
          departments and locations.
        </p>
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stops.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-highlight text-sm font-bold text-highlight-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CentralizedMonitoringSection() {
  const benefits = [
    "Continuous patient visibility",
    "Enhanced clinical oversight",
    "Faster escalation of concerns",
    "Improved workflow consistency",
    "Better resource utilization",
    "Support for dispersed care environments",
  ];
  return (
    <section className="bg-section-alt py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          <span className="text-highlight">Centralized Monitoring</span>
          <br />
          for Rural Healthcare Networks
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Through centralized monitoring models, designated clinical teams can
          oversee patients across multiple departments or facilities from a
          single location. For rural healthcare networks, this approach can
          help extend access to specialized clinical expertise without
          requiring additional staff at every facility.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-highlight" />
              <span className="text-sm font-medium text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PredictiveSection() {
  const items = [
    "Risk stratification",
    "Prioritized clinical attention",
    "Earlier intervention opportunities",
    "Enhanced situational awareness",
    "More efficient resource allocation",
  ];
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          The Role of Predictive Analytics in Rural Healthcare
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Healthcare organizations are increasingly moving beyond reactive care
          models toward proactive and predictive approaches. Predictive
          analytics solutions analyze patient data trends and patterns to
          identify risks before serious clinical deterioration occurs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {items.map((i) => (
            <div
              key={i}
              className="flex w-full items-start gap-3 rounded-lg border border-border bg-card p-4 sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]"
            >
              <LineChart className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
              <span className="text-sm font-medium text-foreground">{i}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border-l-4 border-highlight bg-card p-6 shadow-sm">
          <p className="font-semibold text-foreground">
            Key takeaway:{" "}
            <span className="font-normal text-foreground/85">
              Rather than waiting for a clinical event to occur, care teams can
              focus on patients who may require intervention before
              complications develop.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function SphereSection() {
  const pillars = [
    { icon: Network, title: "Universal Monitoring Platform", desc: "Scalable monitoring across multiple care environments through a consistent workflow and user experience." },
    { icon: Stethoscope, title: "Clinical Decision Support", desc: "Advanced surveillance designed to help clinicians identify changes in patient condition and support earlier intervention." },
    { icon: Workflow, title: "Workflow Optimization", desc: "Streamline communication, reduce operational complexity, and support efficient care delivery." },
    { icon: Activity, title: "Centralized Monitoring", desc: "Configurable monitoring that extends clinical oversight across facilities and departments." },
    { icon: HeartPulse, title: "Connected Care", desc: "Integrated technologies that support continuity of care throughout the patient journey." },
  ];
  return (
    <section id="sphere" className="bg-section-alt py-16 md:py-20">
      <div className="container-page max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Introducing the <span className="text-highlight">Sphere IQ Monitoring Suite™</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-foreground/85">
          Spacelabs Healthcare's Sphere IQ Monitoring Suite™ is designed to
          support healthcare organizations through a connected, intelligent
          approach to patient monitoring and clinical surveillance — built with
          the realities of modern rural care in mind.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex w-full items-start gap-3 rounded-lg border border-border bg-card p-5 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
            >
              <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Financing Options Designed for Rural Healthcare
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Capital budgets remain a significant concern for many rural healthcare
          organizations. Spacelabs Healthcare offers flexible financing
          approaches that may help organizations pursue technology upgrades
          while supporting financial predictability.
        </p>
        <p className="mt-4 text-center leading-relaxed text-foreground/85">
          These options can provide access to advanced monitoring capabilities
          without requiring large upfront capital expenditure, helping
          healthcare leaders align investments with organizational goals.
        </p>
      </div>
    </section>
  );
}

function WhySpacelabsSection() {
  const features = [
    { icon: ShieldCheck, title: "Advanced Monitoring Technology", desc: "Patient monitoring built for the realities of modern care delivery." },
    { icon: Stethoscope, title: "Clinical Expertise", desc: "Decades of experience supporting hospitals and health systems." },
    { icon: Workflow, title: "Workflow Optimization", desc: "Strategies that fit how rural teams actually deliver care." },
    { icon: UserCheck, title: "Dedicated Implementation", desc: "Hands-on partnership through go-live and beyond." },
    { icon: FlaskConical, title: "Ongoing Service & Education", desc: "Continuous support for your clinicians and biomed teams." },
    { icon: BarChart3, title: "Long-Term Partnership", desc: "A commitment to meaningful outcomes for patients and communities." },
  ];
  return (
    <section className="bg-section-alt pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="container-page max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-highlight md:text-3xl">
          Why Partner with Spacelabs Healthcare
        </h2>
        <p className="mt-6 text-center leading-relaxed text-foreground/85">
          Healthcare organizations need more than technology — they need a
          partner that understands their challenges. As a company focused
          exclusively on patient monitoring, we understand the critical role
          that actionable clinical intelligence plays in improving care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex w-full items-start gap-3 rounded-lg border border-border bg-card p-4 sm:w-[calc(50%-8px)]"
            >
              <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contact" className={ctaBtn}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-section-alt pt-6 pb-16 md:pt-8 md:pb-20">

      <div className="container-page max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-highlight" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="bg-hero py-16 md:py-24">
      <div className="container-page max-w-5xl text-center">
        <h2 className="whitespace-nowrap text-xl font-bold text-hero-foreground sm:text-2xl md:text-3xl">
          Strengthen Care in the Communities You Serve
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-hero-foreground/80">
          Talk with our rural healthcare specialists about Sphere IQ, centralized monitoring,
          <br />
          and a roadmap tailored to your facility.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:rural@spacelabs.example" className={heroBtn}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}
