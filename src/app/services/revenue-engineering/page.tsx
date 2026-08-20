"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import RevenueStrategistModal from "@/components/RevenueStrategistModal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import HowToSchema from "@/components/HowToSchema";
import FaqAccordion from "@/components/FaqAccordion";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const coreServices = [
  {
    num: "01",
    title: "Marketing Automation",
    lead: "Put Repetitive Work Out to Pasture",
    body: "We build automated workflows that keep leads moving and your team focused on closing.",
    items: ["Lead capture automation", "Email nurture workflows", "Automated follow-up", "Lead scoring", "Sales alerts", "Re-engagement campaigns", "Workflow integrations"],
    outcome: "Faster follow-up. Fewer missed opportunities.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#d87307" strokeWidth="1.8"/><path d="M19.4 13a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V19a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H4a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H10a1.65 1.65 0 0 0 1-1.51V4a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V10a1.65 1.65 0 0 0 1.51 1H20a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="#d87307" strokeWidth="1.5" strokeLinejoin="round"/></svg>),
  },
  {
    num: "02",
    title: "CRM Optimization",
    lead: "Make Your CRM Earn Its Keep",
    body: "We clean up your data, sharpen your pipeline, and build a system your team can actually use.",
    items: ["CRM audit and cleanup", "Pipeline setup", "Lifecycle mapping", "Lead-source tracking", "Custom fields", "Deal-stage configuration", "CRM dashboards", "System integrations"],
    outcome: "Cleaner data. Better visibility. Stronger control.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4" width="17" height="16" rx="2" stroke="#d87307" strokeWidth="1.8"/><path d="M3.5 9.5h17M9 4v5.5" stroke="#d87307" strokeWidth="1.8"/><path d="M12.5 14l2 2 3.5-3.5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    num: "03",
    title: "Revenue Operations",
    lead: "Get Marketing and Sales Riding in the Same Direction",
    body: "We align the people, processes, platforms, and handoffs behind one revenue plan.",
    items: ["Process mapping", "Lead routing", "Sales handoff workflows", "Pipeline governance", "Roles and responsibilities", "SOP development", "Performance frameworks", "Technology recommendations"],
    outcome: "Clear ownership. Fewer bottlenecks. Better execution.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.3" stroke="#d87307" strokeWidth="1.8"/><circle cx="18" cy="6" r="2.3" stroke="#d87307" strokeWidth="1.8"/><circle cx="12" cy="18" r="2.3" stroke="#d87307" strokeWidth="1.8"/><path d="M7.8 7.6L11 16M16.2 7.6L13 16M8.3 6h7.4" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  },
  {
    num: "04",
    title: "Funnel Optimization",
    lead: "Fix the Leaks Before Driving More Traffic",
    body: "We identify where prospects stall, drop off, or disappear, then strengthen the path to conversion.",
    items: ["Funnel analysis", "Customer journey mapping", "Landing page review", "Lead-form optimization", "CTA and offer refinement", "Appointment funnel setup", "Nurture optimization", "Drop-off analysis"],
    outcome: "A smoother path from interest to opportunity.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round"/></svg>),
  },
  {
    num: "05",
    title: "Reporting & Attribution",
    lead: "Know What Is Making Money and What Is Just Making Noise",
    body: "We connect marketing activity to pipeline and revenue so you can make smarter decisions.",
    items: ["KPI definition", "Conversion tracking", "UTM governance", "Lead-source attribution", "Revenue dashboards", "Funnel reporting", "Campaign analysis", "Revenue leakage review"],
    outcome: "Clear numbers. Better decisions. Smarter investment.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M11 20V4M18 20v-7" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><path d="M3 20h18" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
];

const process = [
  { num: "01", title: "Audit the Terrain", body: "We inspect your CRM, funnels, automation, reporting, and revenue workflows." },
  { num: "02", title: "Map the Route", body: "We define how leads enter, move, convert, and close." },
  { num: "03", title: "Build the System", body: "We configure the tools, workflows, pipelines, and reporting." },
  { num: "04", title: "Test the Machinery", body: "We fix breakdowns and tighten the handoffs." },
  { num: "05", title: "Keep It Running", body: "We monitor performance and optimize what matters." },
];

const builtFor = [
  "Lose leads between marketing and sales", "Struggle with slow or inconsistent follow-up", "Have a messy or underused CRM",
  "Rely too heavily on manual work", "Cannot track where revenue comes from", "Have funnel drop-offs",
  "Do not trust their reporting", "Need stronger systems before scaling",
];

const faqs = [
  {
    q: "Is Revenue Engineering software?",
    a: "No. Revenue Engineering is Brand Iron's service that connects marketing, sales, CRM, automation, funnels, and reporting into one coordinated revenue system, using tools you likely already have. We audit, optimize, and integrate what's in place rather than sell you another platform. Most companies don't need more software; they need what they already own to actually pull its weight.",
  },
  {
    q: "Is this the same as marketing automation?",
    a: "No. Marketing automation is one capability within Revenue Engineering. The full service also covers CRM optimization, revenue operations, funnel optimization, and reporting & attribution. Automation on its own can move leads through email sequences, but if your CRM data is messy or attribution is broken, automation just moves the problems faster.",
  },
  {
    q: "Do we need a new CRM?",
    a: "Usually not. Most engagements start with cleaning up, restructuring, and optimizing the CRM you already have, whether that's HubSpot, Salesforce, Zoho, or another platform. New CRM migrations are expensive and disruptive and often don't fix the underlying problem, which is usually process and data quality rather than the tool itself.",
  },
  {
    q: "Can you work with our current tools?",
    a: "Yes, that's typically how engagements start. We audit what's already deployed, your CRM, marketing automation platform, sales engagement tools, and reporting dashboards, then optimize, connect, and clean up what's in place. We're platform-agnostic and focused on making your existing revenue tech stack pull its weight before recommending any additions.",
  },
  {
    q: "What happens after setup?",
    a: "Once the system is built and tested, ongoing support keeps it running. That typically includes performance monitoring, workflow adjustments as processes evolve, quarterly optimization reviews, and troubleshooting when handoffs break down. Revenue systems drift over time, so the ongoing engagement keeps the machinery tuned rather than letting it degrade.",
  },
  {
    q: "How is Revenue Engineering different from a traditional marketing agency?",
    a: "Traditional marketing agencies focus on generating more leads and running campaigns. Revenue Engineering focuses on what happens to those leads after they enter your system: how they're captured, routed, followed up, tracked, and converted. Most companies don't have a lead volume problem; they have a lead handling and system integration problem.",
  },
  {
    q: "How long does a Revenue Engineering engagement take?",
    a: "Initial system audits and configuration typically run 4 to 8 weeks depending on CRM complexity and integration requirements. Full revenue system builds, including funnel optimization, RevOps alignment, and reporting infrastructure, often run 3 to 6 months, with ongoing optimization support continuing monthly as the system evolves with your business.",
  },
  {
    q: "What kind of results should we expect?",
    a: "Common outcomes include faster lead follow-up, cleaner CRM data, better sales and marketing alignment, reduced funnel drop-offs, and clearer visibility into what's actually driving revenue. Specific results depend on your starting point, and we define baseline metrics upfront so improvements are measurable.",
  },
  {
    q: "Do we need a large sales or marketing team to benefit from Revenue Engineering?",
    a: "No. Revenue Engineering scales to the team size you have. Smaller teams often benefit the most because automation and system optimization directly reduce manual work, freeing limited team capacity to focus on higher-value activities. Larger teams benefit through better alignment, cleaner reporting, and reduced coordination overhead.",
  },
  {
    q: "How does Revenue Engineering connect to your other services like GTM Strategy or AI Visibility?",
    a: "Revenue Engineering handles what happens after prospects enter your funnel: capture, routing, follow-up, conversion, and reporting. GTM Strategy defines the market approach and demand generation that fills the funnel, and AI Visibility ensures buyers can discover you across search and AI platforms before they even enter it. Together, the three services form Brand Iron's connected growth system.",
    related: [
      { href: "/services/gtm", label: "Explore Our Go-to-Market Strategy Services" },
      { href: "/services/ai-visibility", label: "Explore Our AI Visibility Services" },
    ],
  },
  {
    q: "What tools and platforms do you work with?",
    a: "We're platform-agnostic and work with the major revenue tech stacks, including HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, Marketo, and Klaviyo. We also integrate with the connected tools around the CRM: email platforms, scheduling tools, sales engagement platforms, analytics platforms, and business intelligence dashboards.",
  },
];

export default function RevenueEngineeringPage() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const { ref: s2ViewRef, inView: s2ViewInView } = useInView();
  const { ref: s3ViewRef, inView: s3ViewInView } = useInView();
  const { ref: s4ViewRef, inView: s4ViewInView } = useInView();
  const { ref: s5ViewRef, inView: s5ViewInView } = useInView();
  const { ref: s6ViewRef, inView: s6ViewInView } = useInView();
  const { ref: s7ViewRef, inView: s7ViewInView } = useInView();
  const { ref: s8ViewRef, inView: s8ViewInView } = useInView();

  const coreCarouselRef = useRef<HTMLDivElement>(null);
  const [coreScrollProgress, setCoreScrollProgress] = useState(0);
  const handleCoreScroll = () => {
    const el = coreCarouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCoreScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const scrollCoreCarousel = (dir: 1 | -1) => {
    const el = coreCarouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".re-service-card");
    const step = card ? card.getBoundingClientRect().width + 20 : 340;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Services", url: "https://brandiron.net/services" },
          { name: "Revenue Engineering", url: "https://brandiron.net/services/revenue-engineering" },
        ]}
      />
      <ServiceSchema
        name="Revenue Engineering Service"
        serviceType="Revenue Operations & Engineering"
        description="Build a stronger revenue system with CRM optimization, marketing automation, funnel improvement, RevOps, reporting, and attribution from Brand Iron."
      />
      {coreServices.map(s => (
        <ServiceSchema
          key={s.num}
          name={s.title}
          serviceType="Revenue Operations & Engineering"
          description={s.body}
        />
      ))}
      <HowToSchema
        name="Brand Iron's Revenue Engineering Process"
        description="How Brand Iron audits, builds, and maintains a connected revenue system."
        steps={process.map(p => ({ name: p.title, text: p.body }))}
      />

      {reviewOpen && <RevenueStrategistModal onClose={() => setReviewOpen(false)} />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="re-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/revenue-engineering/revenue-engineering-hero.mp4"
          aria-label="Animated wildflower meadow at sunset with glowing connective lines, representing a connected revenue operations system"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="re-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="re-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Build a Revenue System That Pulls Its Weight
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Engineer Your Revenue System
                </Link>
                <Link href="#services" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore What We Engineer
                </Link>
              </div>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>
                More leads will not fix a broken system. Revenue Engineering connects your marketing, sales, CRM, automation, funnels, and reporting into one hard-working growth machine. We find the leaks. Fix the handoffs. Automate the grind. Track what drives revenue.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .re-hero-section { height: auto !important; min-height: 100vh; }
            .re-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .re-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: STOP LETTING REVENUE SLIP THROUGH THE CRACKS ── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 64px" }}>
        <div ref={s2ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Stop Letting Revenue Slip Through the Cracks
          </h2>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            Most companies already have the tools. The problem? They are not working together. Leads go cold. Follow-ups fall behind. Data gets scattered. Reporting gets muddy.
          </p>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 700, marginBottom: 32 }}>
            We bring the whole operation into line. One system. Clear direction. Better revenue performance.
          </p>

          <button onClick={() => setReviewOpen(true)} className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
          >Talk to a Revenue Strategist</button>
        </div>
      </section>

      {/* ── S3: WHAT WE ENGINEER (carousel) ──────────────────── */}
      <section id="services" style={{ position: "relative", overflow: "hidden", padding: "64px 0 90px" }}>
        <div ref={s3ViewRef} style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <h2 className={`section-heading reveal${s3ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
                What We Engineer
              </h2>
              <p className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
                Every engagement draws from the same connected set of capabilities, scoped to where your revenue system is leaking.
              </p>
            </div>
            <div className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ display: "flex", gap: 10, flexShrink: 0 }}>
              <button
                aria-label="Previous service"
                onClick={() => scrollCoreCarousel(-1)}
                className="re-carousel-arrow"
                style={{ width: 44, height: 44, borderRadius: "50%", background: "#F9F8F6", border: "1px solid #EEEBE7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, background 0.2s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                aria-label="Next service"
                onClick={() => scrollCoreCarousel(1)}
                className="re-carousel-arrow"
                style={{ width: 44, height: 44, borderRadius: "50%", background: "#F9F8F6", border: "1px solid #EEEBE7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, background 0.2s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full-card paged carousel — exactly N complete cards per view, never cut off */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div
            ref={coreCarouselRef}
            onScroll={handleCoreScroll}
            className="re-services-carousel"
            style={{
              display: "flex", gap: 20, overflowX: "auto",
              scrollSnapType: "x mandatory", scrollBehavior: "smooth",
              paddingTop: 12, marginTop: -12,
            }}
          >
            {coreServices.map(({ num, title, lead, body, items, outcome, icon }, i) => (
              <div key={num}
                className={`re-service-card reveal${s3ViewInView ? ' visible' : ''}`}
                style={{
                  position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                  padding: "32px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  scrollSnapAlign: "start", scrollSnapStop: "always", display: "flex", flexDirection: "column",
                  minHeight: 480, boxShadow: "0 4px 16px rgba(0,0,0,0.05)", transitionDelay: `${(i % 3) * 0.06}s`,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 34, color: "rgba(216,115,7,0.14)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "#444", fontWeight: 600, marginBottom: 10 }}>{lead}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, marginTop: "auto" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>May Include</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {items.map(it => (
                      <span key={it} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{it}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>Outcome</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#d87307", fontWeight: 600, margin: 0 }}>{outcome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 32 }}>
            <div style={{ position: "relative", height: 3, background: "#EEEBE7", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, height: "100%", width: "30%", left: `${coreScrollProgress * (100 - 30)}%`, background: "#d87307", borderRadius: 2, transition: "left 0.1s linear" }} />
            </div>
          </div>
        </div>

        <style>{`
          .re-carousel-arrow:hover { border-color: #d87307 !important; background: rgba(216,115,7,0.08) !important; }
          .re-services-carousel { scrollbar-width: none; -ms-overflow-style: none; }
          .re-services-carousel::-webkit-scrollbar { display: none; }
          .re-service-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .re-service-card { flex: 0 0 calc((100% - 40px) / 3); }
          @media (max-width: 900px) {
            .re-service-card { flex: 0 0 calc((100% - 20px) / 2); }
          }
          @media (max-width: 600px) {
            .re-service-card { flex: 0 0 100%; }
          }
        `}</style>
      </section>

      {/* ── S4: OUR PROCESS ──────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "90px 40px",
        backgroundImage: "url('/images/revenue-engineering/revenue-engineering-process-grass-circuit-lines.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Grassy hillside at sunset with glowing digital circuit lines and a computer chip woven through the grass, representing a connected revenue operations system" style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.45)" }} />
        <div ref={s4ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 48, textAlign: "left" }}>
            Our Process
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {process.map(({ num, title, body }, i) => (
              <div key={num}
                className={`reveal stagger-${(i % 3) + 1}${s4ViewInView ? ' visible' : ''} growth-card`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid transparent", borderRadius: 14, padding: "28px 24px", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 8, right: 8, width: 20, height: 20, opacity: 0, transition: "opacity 0.25s ease" }} />
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 8, left: 8, width: 20, height: 20, opacity: 0, transition: "opacity 0.25s ease" }} />
                <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 32, color: "rgba(216,115,7,0.18)", lineHeight: 1, display: "block", marginBottom: 14 }}>{num}</span>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "#666", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: BUILT FOR BUSINESSES THAT... ─────────────────── */}
      <section style={{ background: "#F8F5EF", padding: "100px 40px" }}>
        <div ref={s5ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s5ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 40, textAlign: "left" }}>
            Revenue Engineering Is Built for Businesses That:
          </h2>
          <div className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 12 }}>
            {builtFor.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 24, padding: "10px 18px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "#333", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: GROWTH NEEDS MORE THAN GRIT ──────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div ref={s6ViewRef} style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
            Growth Needs More Than Grit
          </h2>
          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 32 }}>
            You do not need another disconnected tool. You need your current tools, workflows, teams, and data pulling together. Brand Iron engineers the system behind the sale.
          </p>
          <Link href="/contact" className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF",
            padding: "14px 36px", borderRadius: 6, textDecoration: "none", transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#c46305")}
          onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
          >Build Your Revenue Engine</Link>
        </div>
      </section>

      {/* ── S7: FAQ ───────────────────────────────────────────── */}
      <section style={{ background: "#F8F5EF", padding: "120px 40px" }}>
        <div ref={s7ViewRef} style={{ maxWidth: 900, margin: "0 auto" }}>
          <h3 className={`reveal${s7ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 8 }}>
            Frequently Asked Questions
          </h3>
          <p className={`reveal${s7ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 640, margin: "0 0 32px" }}>
            Common questions we hear from teams considering a Revenue Engineering engagement.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }),
          }}
        />
      </section>

      {/* ── S8: FINAL CTA ─────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={s8ViewRef} className={`reveal${s8ViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/revenue-engineering/revenue-engineering-cta-river-sunset.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Winding river with scattered stones flowing past a red cabin beneath a sunset sky" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Stop Losing Revenue Between the Cracks
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 680, margin: "0 auto 48px" }}>
                Build a revenue system with stronger handoffs, faster follow-up, and clearer visibility.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "18px 44px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Engineer Your Revenue System
                </Link>
                <button onClick={() => setReviewOpen(true)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#f0a860"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Talk to a Revenue Strategist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
