"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import BrandingProposalModal from "@/components/BrandingProposalModal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

const processSteps = [
  {
    title: "Discover",
    body: "Every great brand starts with understanding. We immerse ourselves in your business, uncover what makes you different, align on goals, and build the foundation for everything that follows.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    title: "Align",
    body: "We begin with BrandStorm™, bringing key decision-makers together to clarify your brand's direction, audience, differentiation, market position, and priorities before the work begins.",
    icon: (<img loading="lazy" src="/images/icons/icon-chat.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Define",
    body: "We transform strategic insights into a messaging platform, positioning framework, value proposition, and, when needed, a new brand name.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Design",
    body: "We develop a complete visual identity system that brings your strategy to life, defining logo direction, color, typography, graphic elements, and visual applications that create a cohesive brand experience.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12.5 6.5l5 5" stroke="#d87307" strokeWidth="1.8" /></svg>),
  },
  {
    title: "Build",
    body: "Whether it's a website, capital raise deck, sales collateral, or everyday brand touchpoint, we bring your brand to life through digital experiences, presentation systems, graphic standards, and practical tools your team can use to move the business forward.",
    icon: (<img loading="lazy" src="/images/icons/icon-gear.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Launch",
    body: "For organizations preparing to enter or re-enter the market, we connect the brand foundation to a structured go-to-market launch plan.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Strengthen",
    body: "Throughout the engagement, weekly meetings, reports, agendas, and client check-ins keep priorities aligned and decisions moving forward.",
    icon: (<img loading="lazy" src="/images/icons/icon-trending.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
];

const solutions = [
  {
    name: "Brand Foundation",
    tagline: "Build the Strategic, Verbal, Visual, and Digital Foundation of Your Brand.",
    bestFor: "Best for organizations launching a new company, repositioning an existing business, consolidating multiple brands, or preparing for a major stage of growth.",
    includes: [
      "BrandStorm™ Strategy Session", "Messaging platform", "Name development, when required",
      "Brand/Identity development", "Mood and application boards", "Graphic Standards Manual",
      "Branded PowerPoint template", "Multi-page website design and development", "Internal brand rollout",
    ],
    timeline: "Approximately three months",
    outcome: "A complete brand system that aligns strategy, messaging, visual identity, digital presence, and internal adoption.",
    cta: "Explore the Brand Foundation",
    interest: "Brand Foundation",
  },
  {
    name: "Brand Foundation + Market Launch",
    tagline: "Build the Brand, and the Plan to Take It to Market.",
    bestFor: "Best for organizations that need a complete brand foundation combined with a clear go-to-market strategy for launch, repositioning, expansion, or market entry.",
    includes: [
      "Everything in Brand Foundation, plus:", "Ideal customer profile development", "Competitor and market review",
      "Launch positioning", "Sales strategy", "Marketing channel plan", "KPI development",
      "Launch coordination", "Go-to-market roadmap",
    ],
    timeline: "Approximately three months",
    outcome: "A launch-ready brand supported by aligned messaging, market strategy, sales direction, channel planning, and measurable growth priorities.",
    cta: "Plan Your Market Launch",
    interest: "Brand Foundation + Market Launch",
  },
];

const coreServices = [
  {
    num: "01", title: "BrandStorm™ Strategy Session",
    body: "A focused strategic working session that aligns leadership around the business, market, audience, positioning, and future direction. We clarify value propositions, identify positioning priorities, define areas of differentiation, and establish the strategic direction for the engagement.",
    deliverable: "A strategic direction summary that guides messaging, naming, visual identity, website development, rollout, and launch planning.",
    outcome: "A shared foundation for confident decision-making.",
    scope: undefined,
    icon: (<img loading="lazy" src="/images/icons/icon-chat.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "02", title: "Messaging and Positioning",
    body: "Clear positioning helps the market understand where your organization fits, why it matters, and why it should be considered. We define the strategic message your business needs to communicate across customer, investor, employee, partner, and market-facing touchpoints.",
    deliverable: "A clear positioning direction that strengthens the organization's market narrative.",
    outcome: "Greater clarity, consistency, and differentiation.",
    scope: undefined,
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "03", title: "Messaging Platform",
    body: "The messaging platform becomes the internal source of truth for how the organization communicates. It may include the company vision, voice, ethos, differentiators, value proposition, value points, and elevator pitch.",
    deliverable: "A branded messaging presentation deck.",
    outcome: "A reusable communication system that helps teams speak with one clear voice.",
    scope: undefined,
    icon: (<img loading="lazy" src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "04", title: "Name Development",
    body: "A strong name should reflect the organization's positioning, support future growth, and create a foundation for recognition. Our naming process includes themed naming territories, multiple rounds of name development and refinement, tagline exploration, and preliminary URL, intellectual property, trademark, and social page availability review.",
    deliverable: "Curated naming options, strategic themes, preliminary availability findings, tagline exploration, and a recommended naming direction.",
    outcome: "A clear and ownable brand name direction built to support the company's long-term identity.",
    scope: undefined,
    icon: (<img loading="lazy" src="/images/icons/icon-arrow.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "05", title: "Brand Development",
    body: "We bring the full brand identity together in one connected system, from the name and logo to the overall look, feel, and standards that guide how the brand is used.",
    deliverable: undefined, outcome: undefined,
    scope: ["Name development", "Logo development", "Visual direction", "Mood and application boards", "Color palette", "Typography", "Graphic style", "Brand guidelines", "Practical application guidance"],
    icon: (<img loading="lazy" src="/images/icons/icon-gear.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "06", title: "Logo, Mood, and Application Boards",
    body: "A logo should not exist in isolation. We show how the identity can work across digital environments, presentations, collateral, communication materials, and launch applications.",
    deliverable: "Logo concepts, mood boards, application boards, and visual usage examples.",
    outcome: "A practical view of how the brand will come to life across real business touchpoints.",
    scope: undefined,
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12.5 6.5l5 5" stroke="#d87307" strokeWidth="1.8" /></svg>),
  },
  {
    num: "07", title: "PowerPoint Template & Graphic Standards Manual",
    body: "Consistency becomes easier when teams have the right tools. We create a branded presentation template and a practical standards manual that explains how the identity should be used.",
    deliverable: undefined, outcome: undefined,
    scope: ["Six to eight branded slide layouts", "Logo usage", "Color specifications", "Typography", "Graphic elements", "Supporting visual styles", "Sample applications", "Brand usage guidance"],
    icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "08", title: "Multi-Page Website Design and Development",
    body: "We design and develop modern, responsive websites that communicate your position clearly, support audience engagement, and give your organization a credible platform for growth.",
    deliverable: undefined, outcome: undefined,
    scope: ["Single-page or multi-page website", "Up to eight custom-designed pages", "Responsive design", "User-friendly navigation", "SEO-friendly site structure", "Messaging hierarchy", "Conversion pathways", "Brand-aligned visual experience"],
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#d87307" strokeWidth="1.8"/><path d="M3 9h18" stroke="#d87307" strokeWidth="1.8"/><circle cx="6.5" cy="6.5" r="0.75" fill="#d87307"/><circle cx="9" cy="6.5" r="0.75" fill="#d87307"/></svg>),
  },
  {
    num: "09", title: "Brand Rollout",
    body: "A successful brand launch begins inside the organization. We help leadership introduce the new brand, explain why it matters, and give employees the clarity and tools needed to represent it consistently.",
    deliverable: undefined, outcome: undefined,
    scope: ["Internal brand rollout presentation", "Brand Iron-led presentation", "Internal communication plan", "Staff incentive brainstorming", "Employee engagement ideas", "Two internal communication pieces", "Email announcements", "Staff letters", "Office posters or launch materials"],
    icon: (<img loading="lazy" src="/images/icons/icon-lightning.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "10", title: "Go-to-Market Launch Plan",
    body: "A strong brand creates the foundation. A go-to-market plan creates direction for how the organization will reach the market, generate awareness, support sales, and measure progress.",
    deliverable: undefined, outcome: undefined,
    scope: ["Ideal customer profile", "Buyer and audience priorities", "Competitor and market review", "Positioning", "Sales strategy", "Marketing channel plan", "Launch coordination", "KPIs and success measures"],
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
];

const compareRows: [string, string, string][] = [
  ["Business and brand alignment", "Included", "Included"],
  ["Messaging and positioning", "Included", "Included"],
  ["Name development, if needed", "Included", "Included"],
  ["Visual identity system", "Included", "Included"],
  ["Logo and application boards", "Included", "Included"],
  ["Graphic Standards Manual", "Included", "Included"],
  ["Branded presentation template", "Included", "Included"],
  ["Multi-page website", "Included", "Included"],
  ["Internal brand rollout", "Included", "Included"],
  ["Ideal customer profile", "—", "Included"],
  ["Market and competitor review", "—", "Included"],
  ["Sales strategy", "—", "Included"],
  ["Marketing channel plan", "—", "Included"],
  ["Launch KPIs", "—", "Included"],
  ["GTM launch roadmap", "—", "Included"],
  ["Primary outcome", "Complete brand foundation", "Complete brand and market launch system"],
];

const CheckIcon = () => (
  <svg style={{ flexShrink: 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function BrandStrategyPage() {
  const [proposalOpen, setProposalOpen] = useState(false);
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
    const card = el.querySelector<HTMLElement>(".core-service-card");
    const step = card ? card.getBoundingClientRect().width + 20 : 340;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  const faqs = [
    {
      q: "What is the difference between branding and brand strategy?",
      a: "Branding includes the verbal, visual, and experiential elements people associate with an organization. Brand strategy defines the business thinking behind those elements, including positioning, differentiation, audience, value proposition, messaging, and market direction. Brand Iron begins with strategy so the name, logo, messaging, website, and rollout all support the same business goals.",
    },
    {
      q: "When should an organization consider rebranding?",
      a: "A rebrand may be appropriate when the organization has outgrown its current identity, entered a new market, changed its business model, expanded its services, completed a merger or acquisition, experienced inconsistent messaging, or needs to rebuild market relevance and trust.",
    },
    {
      q: "Can Brand Iron work with our existing name or logo?",
      a: "Yes. Not every engagement requires a completely new identity. Brand Iron can evaluate existing brand assets and determine which elements should be retained, refined, repositioned, or replaced.",
    },
    {
      q: "What happens during BrandStorm™?",
      a: "BrandStorm™ is a focused strategy session used to align leadership around the organization's goals, audiences, value proposition, differentiation, positioning, communication needs, and launch direction. The session creates the strategic foundation for messaging, naming, visual identity, website development, rollout, and go-to-market planning.",
    },
    {
      q: "Does Brand Iron offer company naming services?",
      a: "Yes. Name development can include themed naming territories, multiple rounds of name options and refinement, tagline exploration, and preliminary URL, intellectual property, trademark, and social page availability research. Formal legal clearance should still be completed by qualified legal counsel.",
    },
    {
      q: "Does the branding engagement include website development?",
      a: "Both branding solutions include multi-page website design and development. The website is built to reflect the new strategy, messaging, and visual identity while supporting usability, discoverability, credibility, and audience engagement.",
    },
    {
      q: "How long does the branding process take?",
      a: "The complete branding engagement is typically completed in approximately three months. The exact schedule may vary depending on the project scope, stakeholder availability, approval timelines, naming requirements, and website complexity.",
    },
    {
      q: "Does Brand Iron help launch the new brand internally?",
      a: "Yes. Brand rollout may include an internal presentation, communication plan, employee engagement ideas, and supporting communication pieces designed to help teams understand and consistently represent the brand.",
    },
    {
      q: "Can Brand Iron support the external market launch?",
      a: "Yes. The Brand Foundation + Market Launch solution includes a go-to-market launch plan covering ideal customers, market and competitor insights, positioning, sales strategy, marketing channels, KPIs, and launch coordination.",
    },
    {
      q: "How does brand strategy support AI visibility?",
      a: "AI systems rely on clear, consistent, and credible information to understand and recommend organizations. A strong brand strategy improves messaging consistency, entity clarity, authority signals, content alignment, and digital trust across the website and other online touchpoints. Branding alone does not guarantee AI visibility, but it creates an important strategic foundation for SEO, AEO, GEO, entity optimization, and AI discoverability.",
    },
    {
      q: "Is Brand Iron a traditional branding agency?",
      a: "No. Brand Iron is a strategic growth consultancy. We connect brand strategy with messaging, website development, go-to-market planning, AI visibility, revenue strategy, capital raise support, and business growth. The brand is built as part of a larger connected system, not as a standalone design exercise.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Services", url: "https://brandiron.net/services" },
          { name: "Brand Strategy", url: "https://brandiron.net/services/brand-strategy" },
        ]}
      />

      {proposalOpen && <BrandingProposalModal onClose={() => setProposalOpen(false)} />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bs-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/brand-strategy/brand-strategy-hero.mp4"
          aria-label="A solitary oak tree in a sunlit field with glowing circuit-root lines at its base, representing strong brand positioning roots"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="bs-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="bs-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                We Forge Brands That Get Chosen
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
                  Schedule a Brand Strategy Session
                </Link>
                <Link href="#solutions" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore Branding Solutions
                </Link>
              </div>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                A strong brand does more than look the part. It stakes out your position, earns trust, and gives your team a clear direction.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                At Brand Iron, we forge strategy, messaging, identity, digital experiences, and go-to-market execution into one connected brand system built to drive growth.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .bs-hero-section { height: auto !important; min-height: 100vh; }
            .bs-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .bs-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: BRANDING SHOULD RUN DEEPER THAN THE SURFACE ─── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Branding Should Run Deeper Than the Surface.
          </h2>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            Strong branding starts by staking out who you serve, what sets you apart, why the market should believe you, and how the brand should support growth.
          </p>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16 }}>
            Brand Iron builds branding as a business system, not a collection of creative assets.
          </p>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#444", fontWeight: 600, marginBottom: 32 }}>
            The goal is a clear, credible market position built to hold its ground and scale.
          </p>
          <button onClick={() => setProposalOpen(true)} className={`reveal${s2View.inView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
          >Request a Branding Proposal</button>
        </div>
      </section>

      {/* ── S3: FROM BUSINESS STRATEGY TO MARKET IMPACT ─────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/brand-strategy/brand-strategy-hero-haybales.webp')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Golden hay bale field at sunset with rolled bales and sun flare" style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.85)" }} />
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              From Business Strategy to Market Impact
            </h2>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(0,0,0,0.65)" }}>
              Every engagement follows a structured path from strategic clarity to market execution.
            </p>
          </div>

          {/* 7-step process grid */}
          <div className={`reveal${s3View.inView ? ' visible' : ''} bs-process-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}>
            {processSteps.map(({ title, body, icon }, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <div key={title}
                  style={{
                    position: "relative", borderRadius: 14, padding: "26px 20px", overflow: "hidden",
                    background: isLast ? "#d87307" : "#F9F8F6",
                    border: isLast ? "none" : "1px solid #EEEBE7",
                    boxShadow: isLast ? "0 10px 32px rgba(216,115,7,0.3)" : "none",
                    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-5px)";
                    if (isLast) { el.style.boxShadow = "0 16px 44px rgba(216,115,7,0.45)"; }
                    else { el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.1)"; el.style.borderColor = "rgba(216,115,7,0.3)"; }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    if (isLast) { el.style.boxShadow = "0 10px 32px rgba(216,115,7,0.3)"; }
                    else { el.style.boxShadow = "none"; el.style.borderColor = "#EEEBE7"; }
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: isLast ? "rgba(255,255,255,0.35)" : "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: isLast ? "rgba(255,255,255,0.95)" : "rgba(216,115,7,0.15)", border: isLast ? "none" : "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </div>
                    <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, color: isLast ? "rgba(255,255,255,0.85)" : "#d87307" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: isLast ? "#FFFFFF" : "#1a1a1a", marginBottom: 8, lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.6, color: isLast ? "rgba(255,255,255,0.9)" : "#666", margin: 0 }}>{body}</p>
                </div>
              );
            })}
          </div>

          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ textAlign: "center" }}>
            <Link href="/contact" style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Book a Strategy Session</Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .bs-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 520px) {
            .bs-process-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S4: BRANDING SOLUTIONS ───────────────────────────── */}
      <section id="solutions" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s4View.ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Branding Solutions
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Every organization has different goals, timelines, and branding requirements. Whether you need a complete brand foundation or a foundation paired with a go-to-market launch plan, Brand Iron provides solutions designed to meet your current needs while supporting future growth.
            </p>
          </div>

          {/* 2 solution cards */}
          <div className="bs-solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 64 }}>
            {solutions.map(({ name, tagline, bestFor, includes, timeline, outcome, cta, interest }) => (
              <div key={name}
                className={`reveal${s4View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 16px 44px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ padding: "36px 32px 28px", flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.2 }}>{name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: "#333", marginBottom: 14 }}>{tagline}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13.5, lineHeight: 1.7, color: "#666", marginBottom: 20 }}>{bestFor}</p>

                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 10 }}>Includes</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 4 }}>
                    {includes.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        {!item.endsWith(":") && <span style={{ marginTop: 3 }}><CheckIcon /></span>}
                        <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.5, color: item.endsWith(":") ? "#999" : "#444", fontStyle: item.endsWith(":") ? "italic" : "normal" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 32px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Timeline</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 16 }}>{timeline}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Business Outcome</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.6, color: "#d87307", fontWeight: 600, marginBottom: 20 }}>{outcome}</p>
                  <Link href={`/contact?interest=${encodeURIComponent(interest)}`} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none",
                    color: "#d87307", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#b8691f")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#d87307")}
                  >{cta} →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s4View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32, textAlign: "center" }}>
              Compare Your Strategic Options
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Strategic Area</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Brand Foundation</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Foundation + Market Launch</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([area, foundation, launch], i) => (
                    <tr key={area}
                      style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF", transition: "background 0.2s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = "rgba(216,115,7,0.06)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = i % 2 === 0 ? "#F9F8F6" : "#FFFFFF")}
                    >
                      <td style={{ padding: "18px 24px", color: "#1a1a1a", fontWeight: 600, borderBottom: "1px solid #EEEBE7" }}>{area}</td>
                      <td style={{ padding: "18px 24px", color: foundation === "—" ? "#bbb" : "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{foundation}</td>
                      <td style={{ padding: "18px 24px", color: launch === "—" ? "#bbb" : "#1a1a1a", fontWeight: 500, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)" }}>{launch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .bs-solutions-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S5: CORE BRANDING SERVICES ───────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 0" }}>
        <div ref={s5View.ref} style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
                Core Branding Services
              </h2>
              <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
                Every branding engagement draws from the same connected set of capabilities, scoped to what your organization needs.
              </p>
            </div>
            <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 10, flexShrink: 0 }}>
              <button
                aria-label="Previous service"
                onClick={() => scrollCoreCarousel(-1)}
                className="core-carousel-arrow"
                style={{ width: 44, height: 44, borderRadius: "50%", background: "#F9F8F6", border: "1px solid #EEEBE7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s, background 0.2s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                aria-label="Next service"
                onClick={() => scrollCoreCarousel(1)}
                className="core-carousel-arrow"
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
            className="core-services-carousel"
            style={{
              display: "flex", gap: 20, overflowX: "auto",
              scrollSnapType: "x mandatory", scrollBehavior: "smooth",
            }}
          >
            {coreServices.map(({ num, title, body, deliverable, outcome, scope, icon }, i) => (
              <div key={num}
                className={`core-service-card reveal${s5View.inView ? ' visible' : ''}`}
                style={{
                  position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                  padding: "32px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  scrollSnapAlign: "start", scrollSnapStop: "always", display: "flex", flexDirection: "column",
                  minHeight: 440, boxShadow: "0 4px 16px rgba(0,0,0,0.05)", transitionDelay: `${(i % 4) * 0.05}s`,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 34, color: "rgba(216,115,7,0.14)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, marginTop: "auto" }}>
                  {scope ? (
                    <>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Scope May Include</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {scope.map(s => (
                          <span key={s} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{s}</span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 8 }}>Deliverable</p>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#555", marginBottom: 14 }}>{deliverable}</p>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 8 }}>Outcome</p>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#d87307", fontWeight: 600, margin: 0 }}>{outcome}</p>
                    </>
                  )}
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
          .core-carousel-arrow:hover { border-color: #d87307 !important; background: rgba(216,115,7,0.08) !important; }
          .core-services-carousel { scrollbar-width: none; -ms-overflow-style: none; }
          .core-services-carousel::-webkit-scrollbar { display: none; }
          .core-service-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .core-service-card { flex: 0 0 calc((100% - 40px) / 3); }
          @media (max-width: 900px) {
            .core-service-card { flex: 0 0 calc((100% - 20px) / 2); }
          }
          @media (max-width: 600px) {
            .core-service-card { flex: 0 0 100%; }
          }
        `}</style>
      </section>

      {/* ── S6: STATEMENT + FAQ ──────────────────────────────── */}
      <section style={{ background: "#F8F5EF", padding: "120px 40px 48px" }}>
        <div ref={s6View.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className={`s6-statement reveal${s6View.inView ? ' visible' : ''}`} style={{
            fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.3,
            textAlign: "center", margin: "0 auto 72px", whiteSpace: "nowrap",
          }}>
            Your Brand Should Strengthen Everything Around It.
          </p>

          <style>{`
            @media (max-width: 900px) {
              .s6-statement { white-space: normal !important; font-size: clamp(20px, 3.6vw, 26px) !important; }
            }
          `}</style>

          {/* FAQ Accordion */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32 }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i}
                  style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(216,115,7,0.3)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(15,27,45,0.08)"; el.style.boxShadow = "none"; }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
                  >
                    <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{q}</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? "#d87307" : "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke={openFaq === i ? "#FFFFFF" : "#d87307"} strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/brand-strategy/brand-strategy-cta-lake.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Snow-capped mountain range reflected in a still lake surrounded by golden autumn aspen trees" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Build a Brand That Supports Everything That Comes Next
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 680, margin: "0 auto 48px" }}>
                Whether you&apos;re launching a new organization, repositioning an established business, preparing for investment, entering a new market, or building the foundation for future growth, your brand should create clarity, not confusion. It should strengthen trust, align your people, clarify your value, support your sales process, and improve your market presence, giving every future growth initiative a stronger place to begin.
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
                  Schedule a Brand Strategy Session
                </Link>
                <button onClick={() => setProposalOpen(true)} style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#f0a860"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Request a Branding Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
