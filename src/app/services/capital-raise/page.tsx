"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
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

const evaluations = [
  {
    title: "The Problem",
    body: "Is the challenge significant enough to create a meaningful market opportunity?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#d87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="5" stroke="#d87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="1.5" fill="#d87307" /></svg>),
  },
  {
    title: "The Solution",
    body: "Does the company solve the problem in a differentiated and scalable way?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.15 1 1.9V17h5v-1.2c0-.75.4-1.45 1-1.9A6 6 0 0 0 12 3Z" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "The Market Opportunity",
    body: "Is the addressable market large enough to support long-term growth?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8M21 7v5M21 7h-5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "The Business Model",
    body: "Can the company generate sustainable revenue and profitability?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" stroke="#d87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="3" stroke="#d87307" strokeWidth="1.6" /></svg>),
  },
  {
    title: "The Leadership Team",
    body: "Does the team have the experience and capability to execute?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#d87307" strokeWidth="1.6" /><circle cx="17" cy="9" r="2.5" stroke="#d87307" strokeWidth="1.6" /><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M15 15c2.8 0 5 1.6 5 4.5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Competitive Positioning",
    body: "Why is this opportunity different from the alternatives?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.3l-5.9 3.3 1.2-6.6-4.8-4.6 6.6-.9L12 2.5Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /></svg>),
  },
  {
    title: "Growth Strategy",
    body: "Is there a credible and repeatable plan for scaling the business?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 19V13M11 19V9M17 19V5M4 19h16" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "Financial Story",
    body: "Are the projections realistic, defensible, and aligned with the strategy?",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 12V3a9 9 0 1 1-9 9h9Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /></svg>),
  },
];

const solutions = [
  {
    num: "01", name: "Capital Raise Deck", tagline: "Turn your opportunity into a compelling investment story.",
    desc: "We develop investor presentations that clearly communicate your vision, market opportunity, competitive advantage, and growth potential, helping you present with confidence.",
    bestFor: ["Startups preparing for investor meetings", "Companies seeking funding", "Leadership teams refining their investment story"],
    outcome: "A clear, investor-ready presentation that builds confidence and supports productive fundraising conversations.",
    cta: "Learn More", href: "/contact",
    icon: (<img loading="lazy" src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 26, height: 26 }} />),
  },
  {
    num: "02", name: "Investor Database", tagline: "Connect with investors who align with your opportunity.",
    desc: "Successful fundraising isn’t measured by how many investors you contact. It’s measured by how many are the right fit. Our Investor Database helps identify, organize, and prioritize investors based on industry focus, investment stage, geographic preferences, and funding interests, giving your outreach strategy greater precision and efficiency.",
    bestFor: ["Companies beginning investor outreach", "Teams expanding fundraising efforts", "Organizations seeking targeted investor research"],
    outcome: "A qualified investor pipeline aligned with your fundraising objectives.",
    cta: "Explore Investor Database", href: "/contact",
    icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 26, height: 26 }} />),
  },
  {
    num: "03", name: "Investor Outreach Campaigns", tagline: "Turn investor research into meaningful conversations.",
    desc: "Finding the right investors is only the beginning. Building relationships requires thoughtful communication, consistent follow-up, and a structured outreach strategy. We help develop investor outreach campaigns designed to introduce your opportunity, generate interest, and create qualified fundraising conversations.",
    bestFor: ["Active fundraising campaigns", "Companies ready to engage investors", "Teams seeking structured outreach support"],
    outcome: "More strategic investor conversations and stronger fundraising momentum.",
    cta: "Learn More", href: "/contact",
    icon: (<img loading="lazy" src="/images/icons/icon-chat.svg" alt="" style={{ width: 26, height: 26 }} />),
  },
  {
    num: "04", name: "Investor GTM Support", tagline: "Build a fundraising strategy that creates long-term momentum.",
    desc: "Fundraising follows many of the same principles as a successful Go-to-Market strategy. It requires the right positioning, targeted outreach, consistent messaging, measurable progress, and continuous refinement. Investor GTM Support brings these elements together into a coordinated fundraising strategy, helping organizations manage investor engagement while adapting to feedback and maintaining momentum throughout the capital raise process.",
    bestFor: ["Growth-stage companies", "Leadership teams managing ongoing fundraising", "Organizations seeking strategic fundraising guidance"],
    outcome: "A coordinated fundraising strategy that supports long-term investor engagement and capital raise success.",
    cta: "Explore Investor GTM Support", href: "/services/gtm",
    icon: (<img loading="lazy" src="/images/icons/icon-lightning.svg" alt="" style={{ width: 26, height: 26 }} />),
  },
];

const comparisonRows = [
  ["Strategy Foundation", "BrandStorm™ Strategy Session", "Focused working session to align brand, financial narrative, value proposition, investor storytelling, partner credibility, and market positioning.", "Add-on", "Add-on", "Optional", "Optional"],
  ["Strategy Foundation", "Messaging Platform", "Internal strategic framework covering vision, company voice, key differentiators, company ethos, value proposition, value points, and elevator pitch.", "Add-on", "Add-on", "Optional", "Optional"],
  ["Capital Raise Deck", "Essentials Deck", "Investor-ready deck development for a concise raise story.", "✓ up to 12 slides", "—", "—", "—"],
  ["Capital Raise Deck", "Executive Deck", "Expanded deck development for a more robust investor narrative.", "—", "✓ up to 24 slides", "—", "—"],
  ["Investor Outreach Asset", "Teaser Piece", "Short-form teaser used to open investor conversations and summarize the opportunity.", "—", "Optional", "✓", "—"],
  ["Financial Narrative", "Proforma", "Financial modeling support to communicate projections, assumptions, and capital needs.", "—", "Optional", "—", "✓"],
  ["Project Management", "Client Setup + Meetings", "Client portal, Asana setup, dashboard/process, weekly meetings, agendas, reports, and check-ins as needed.", "Included", "Included", "Included", "Included"],
  ["Revision Process", "Included Revision Rounds", "Each deliverable includes two rounds of revisions to incorporate feedback.", "✓", "✓", "✓", "✓"],
];

const journeySteps = [
  { name: "Capital Raise Deck", icon: "/images/icons/icon-briefcase.svg" },
  { name: "Investor Database", icon: "/images/icons/icon-barchart.svg" },
  { name: "Investor Outreach", icon: "/images/icons/icon-chat.svg" },
  { name: "Investor GTM Support", icon: "/images/icons/icon-lightning.svg" },
];

const goalMap = [
  { goal: "Turn your opportunity into a compelling investment story", solution: "Capital Raise Deck" },
  { goal: "Connect with investors who align with your opportunity", solution: "Investor Database" },
  { goal: "Turn investor research into meaningful conversations", solution: "Investor Outreach Campaigns" },
  { goal: "Build a fundraising strategy that creates long-term momentum", solution: "Investor GTM Support" },
];

const ArrowConnector = () => (
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none"><path d="M1 7h22M17 1l6 6-6 6" stroke="rgba(216,115,7,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function CapitalRaisePage() {
  const { ref: s2ViewRef, inView: s2ViewInView } = useInView();
  const { ref: s3ViewRef, inView: s3ViewInView } = useInView();
  const { ref: s4ViewRef, inView: s4ViewInView } = useInView();
  const { ref: s5ViewRef, inView: s5ViewInView } = useInView();
  const { ref: s6ViewRef, inView: s6ViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();

  const faqs = [
    {
      q: "What is Capital Raise Support?",
      a: "Capital Raise Support is a strategic service that helps organizations prepare for fundraising by strengthening their investor story, presentation materials, investor targeting, and outreach strategy. Rather than focusing on a single deliverable, Brand Iron helps organizations build the clarity, credibility, and confidence needed to engage investors throughout the fundraising journey.",
    },
    {
      q: "What's the difference between a Capital Raise Deck and Capital Raise Support?",
      a: "A Capital Raise Deck is one important fundraising asset. Capital Raise Support is the broader strategy that includes investor messaging, presentation development, investor targeting, outreach support, and fundraising guidance. The deck tells your story, while the overall strategy helps ensure that story reaches the right investors and creates meaningful conversations.",
    },
    {
      q: "Do I need a Capital Raise Deck before approaching investors?",
      a: "In most cases, yes. A well-structured investor deck helps communicate your opportunity clearly and consistently. It provides investors with the information they need to quickly understand your business, evaluate its potential, and determine whether to continue the conversation.",
    },
    {
      q: "What is BrandStorm™, and why is it recommended?",
      a: "BrandStorm™ is Brand Iron's strategic discovery session. It helps clarify your market positioning, value proposition, investor messaging, and overall investment narrative before presentation materials are created. This strategic foundation helps ensure every fundraising asset communicates a consistent and compelling story.",
    },
    {
      q: "What is included in the Investor Database?",
      a: "Our Investor Database helps identify investors based on factors such as industry focus, investment stage, geographic preference, and funding interests. This allows your fundraising efforts to focus on investors who are more likely to align with your opportunity.",
    },
    {
      q: "How does Investor Outreach work?",
      a: "Investor Outreach combines research, messaging, and structured communication to introduce your opportunity to qualified investors. The objective isn't mass outreach. It's creating relevant, personalized conversations that can lead to meaningful investor relationships.",
    },
    {
      q: "Do you help after the deck is complete?",
      a: "Yes. Many organizations continue working with Brand Iron through Investor Outreach and Investor GTM Support to help manage fundraising activities, refine messaging based on investor feedback, and maintain momentum throughout the capital raise process.",
      related: [{ href: "/services/gtm", label: "Explore Our Go-to-Market Strategy Services" }],
    },
    {
      q: "Do you create financial projections?",
      a: "We provide Proforma support to help organize and communicate financial assumptions, capital requirements, and projected performance. While we help present the financial story clearly, projections should be based on realistic business assumptions and validated by your leadership team and financial advisors.",
    },
    {
      q: "How long does a Capital Raise Support engagement take?",
      a: "Every engagement is tailored to the organization's needs, funding timeline, and readiness. The timeline depends on factors such as the complexity of the business, the availability of information, the scope of services selected, and the review process. Throughout the engagement, we work collaboratively to keep the project aligned with your fundraising objectives and milestones.",
    },
    {
      q: "What industries do you work with?",
      a: "Brand Iron supports startups, growth-stage companies, and established organizations across a variety of industries that are preparing to raise capital, secure strategic partnerships, or strengthen investor communications. Our focus is on developing clear investment narratives and strategic fundraising support rather than serving a single industry vertical.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Services", url: "https://brandiron.net/services" },
          { name: "Capital Raise Support", url: "https://brandiron.net/services/capital-raise" },
        ]}
      />
      <ServiceSchema
        name="Capital Raise Support Service"
        serviceType="Capital Raise & Investor Relations Support"
        description="Brand Iron helps founders prepare for investment with compelling pitch decks, fundraising strategy, and targeted investor outreach for capital raise support."
      />
      {solutions.map(s => (
        <ServiceSchema
          key={s.num}
          name={s.name}
          serviceType="Capital Raise & Investor Relations Support"
          description={`${s.tagline} ${s.desc}`}
        />
      ))}
      <HowToSchema
        name="Brand Iron's Capital Raise Journey"
        description="How Brand Iron guides founders from strategic positioning to investor engagement."
        steps={[
          { name: "Discover Your Story", text: "Define your vision, market opportunity, and investment thesis." },
          { name: "Build Your Foundation", text: "Develop a clear investment narrative and messaging strategy." },
          { name: "Prepare Investor-Ready Assets", text: "Create the materials investors expect to see." },
          { name: "Identify the Right Investors", text: "Focus on investors aligned with your stage, industry, and goals." },
          { name: "Engage Investors", text: "Support outreach, follow-up, and relationship building." },
          { name: "Maintain Momentum", text: "Refine your messaging and sustain fundraising progress as conversations evolve." },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="cr-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/capital-raise/capital-raise-hero.mp4"
          aria-label="Cattle grazing on an open prairie under a dramatic sunset sky, representing steady investor outreach and capital raise support"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 100%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="cr-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="cr-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Raising Capital Requires More Than a Great Pitch Deck.
              </h1>

              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.5, marginBottom: 20, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                From strategic messaging and investor-ready presentations to investor outreach and fundraising support, we help organizations prepare for every stage of the capital raise journey.
              </p>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 14 }}>
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
                  Schedule a Capital Raise Session
                </Link>
                <Link href="#framework" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore the Framework
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
                Investors evaluate more than financials. They invest in a compelling story, a credible team, a clear market opportunity, and confidence in your growth strategy. Brand Iron helps founders prepare for every stage of the fundraising journey through strategic positioning, investor storytelling, presentation development, investor targeting, and outreach, creating an investment narrative that inspires confidence and moves conversations forward.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cr-hero-section { height: auto !important; min-height: 100vh; }
            .cr-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .cr-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .cr-evaluations-grid, .cr-pillars-grid, .cr-solutions-grid, .cr-outcomes-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .cr-journey-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .cr-evaluations-grid, .cr-pillars-grid, .cr-solutions-grid, .cr-outcomes-grid, .cr-journey-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .cr-goalmap-row { grid-template-columns: 1fr !important; gap: 8px !important; text-align: left; padding: 16px 4px !important; }
            .cr-goalmap-arrow { transform: rotate(90deg); margin: 2px 0; }
          }
        `}</style>
      </section>

      {/* ── S2: WHY COMPANIES STRUGGLE TO RAISE CAPITAL ─────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 48px",
        backgroundImage: "url('/images/shared/shared-haybales-field.jpg')", backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Close-up of a saddle with coiled rope resting on a horse's back" style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.87)" }} />
        <div ref={s2ViewRef} style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Investors Don&apos;t Invest in Slides. They Invest in Confidence.
          </h2>

          <div style={{ margin: "0 0 72px" }}>
            <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              Investors review countless opportunities, but only a few move forward. The difference is rarely the idea alone, it&apos;s the confidence founders create in their vision, leadership, market opportunity, and ability to execute.
            </p>
            <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              Successful fundraising isn&apos;t about sharing more information. It&apos;s about delivering the right story to build trust, reduce uncertainty, and inspire investment.
            </p>
          </div>

          {/* What investors are evaluating — icon grid */}
          <div className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 12 }}>
              What Investors Are Really Evaluating
            </h3>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
              A capital raise presentation is only one part of the decision-making process. Behind every investment conversation are a series of questions that determine whether investors move forward.
            </p>
            <div className="cr-evaluations-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {evaluations.map(({ title, body, icon }) => (
                <div key={title}
                  style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 12, padding: "26px 22px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {icon}
                  </div>
                  <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 8, lineHeight: 1.3 }}>{title}</h4>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.65, color: "#666", margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond the pitch deck */}
          <div className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ maxWidth: 800, margin: "0 0 56px" }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 16 }}>
              Beyond the Pitch Deck
            </h3>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              A great presentation helps, but it doesn&apos;t earn investor confidence. Confidence comes from a clear investment story, credible financials, strategic positioning, and consistent messaging throughout the fundraising journey. That&apos;s why Brand Iron goes beyond deck design to prepare your organization for every stage of the capital raise process.
            </p>
          </div>

          {/* Key insight */}
          <div className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Key Insight</p>
            <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.4, margin: 0 }}>
              The strongest fundraising presentations don&apos;t try to answer every question. They answer the questions that matter most: clearly, confidently, and in a way that earns the next conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: THE BRAND IRON CAPITAL RAISE FRAMEWORK ──────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/shared/shared-fence-pasture.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Dark, misty mountain ridge landscape at dusk" style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.72)" }} />
        <CircuitOverlay />
        <div ref={s3ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s3ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Not a Process. A Strategic Framework.
            </h2>
            <p className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Successful fundraising requires more than a pitch deck. Brand Iron connects strategy, investor materials, investor targeting, and outreach into one integrated fundraising system.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="cr-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }}>
            {[
              {
                num: "01", title: "Strategic Foundation",
                lead: "Build the clarity behind your fundraising story.",
                focuses: ["BrandStorm™ Strategy Session", "Investor Messaging", "Value Proposition", "Company Positioning", "Investment Narrative"],
                icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "02", title: "Investor Readiness",
                lead: "Transform your strategy into investor-ready materials.",
                focuses: ["Capital Raise Deck", "Executive Deck", "Teaser Piece", "Proforma", "Investor Storytelling"],
                icon: (<img loading="lazy" src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "03", title: "Investor Access",
                lead: "Identify and prioritize the investors most aligned with your opportunity.",
                focuses: ["Investor Database", "Investor Research", "Segmentation", "Qualification", "Target Lists"],
                icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "04", title: "Investor Engagement",
                lead: "Create meaningful conversations that build fundraising momentum.",
                focuses: ["Investor Outreach", "Follow-up Strategy", "Investor GTM Support", "Relationship Management", "Campaign Tracking"],
                icon: (<img loading="lazy" src="/images/icons/icon-chat.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
            ].map(({ num, title, lead, focuses, icon }) => (
              <div key={num}
                className={`reveal${s3ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 14, padding: "32px 24px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 34, color: "rgba(216,115,7,0.18)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "#555", fontWeight: 600, marginBottom: 18 }}>{lead}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 14 }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Focus Areas</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {focuses.map(f => (
                      <span key={f} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className={`reveal${s3ViewInView ? ' visible' : ''}`}>
            <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.3 }}>
              One Framework. One Investor Journey.
            </p>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.85, color: "#555", margin: 0 }}>
              Each pillar builds on the last, strengthening your story, improving investor targeting, and creating more meaningful conversations. Together, they form a connected fundraising framework designed to prepare, present, connect, and engage with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: CAPITAL RAISE JOURNEY ───────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#0F1B2D",
      }}>
        <CircuitOverlay />
        <div ref={s4ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))", marginBottom: 20, textAlign: "left" }}>
              From Investor Story to Fundraising Momentum
            </h2>
            <p className={`reveal${s4ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 720 }}>
              Successful fundraising is built on a connected journey. Brand Iron guides founders from strategic positioning to investor engagement through a structured framework that builds confidence at every stage.
            </p>
          </div>

          {/* 6-step journey */}
          <div className="cr-journey-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", title: "Discover Your Story", body: "Define your vision, market opportunity, and investment thesis." },
              { num: "02", title: "Build Your Foundation", body: "Develop a clear investment narrative and messaging strategy." },
              { num: "03", title: "Prepare Investor-Ready Assets", body: "Create the materials investors expect to see." },
              { num: "04", title: "Identify the Right Investors", body: "Focus on investors aligned with your stage, industry, and goals." },
              { num: "05", title: "Engage Investors", body: "Support outreach, follow-up, and relationship building." },
              { num: "06", title: "Maintain Momentum", body: "Refine your messaging and sustain fundraising progress as conversations evolve." },
            ].map(({ num, title, body }) => (
              <div key={num}
                className={`reveal${s4ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "32px 28px", overflow: "hidden", transition: "background 0.25s, border-color 0.25s, transform 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 13, color: "#d87307" }}>{num}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>{title}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: CHOOSE THE RIGHT SOLUTION ────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s5ViewRef} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s5ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Support for Every Stage of Your Fundraising Journey
            </h2>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Whether you&apos;re preparing your first investor pitch, refining your story, identifying qualified investors, or executing outreach, Brand Iron offers specialized solutions that can stand alone or work together as a complete fundraising system.
            </p>
          </div>

          {/* 4 solution cards — single row */}
          <div className="cr-solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 64 }}>
            {solutions.map(({ num, name, tagline, desc, bestFor, outcome, cta, href, icon }) => (
              <div key={name}
                className={`reveal${s5ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 16px 44px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ padding: "28px 22px 22px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                    <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 30, color: "rgba(216,115,7,0.18)", lineHeight: 1 }}>{num}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.6, color: "#444", fontWeight: 600, marginBottom: 12 }}>{tagline}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, lineHeight: 1.65, color: "#666", marginBottom: 18 }}>{desc}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", marginBottom: 8 }}>Ideal For</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                    {bestFor.map(b => (
                      <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#d87307", flexShrink: 0, marginTop: 5 }} />
                        <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11.5, color: "#555", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "16px 22px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, lineHeight: 1.6, color: "#444", marginBottom: 16, fontStyle: "italic" }}>{outcome}</p>
                  <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#d87307", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid transparent", transition: "color 0.2s, border-color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#b8691f"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#b8691f"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent"; }}
                  >
                    {cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Compare capital raise solutions */}
          <div className={`reveal${s5ViewInView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 8 }}>
              Compare Capital Raise Solutions
            </h3>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
              Every deliverable includes client onboarding, dedicated project management, and two rounds of revisions.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, minWidth: 980 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 16px", textAlign: "left" }}>Component</th>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 16px", textAlign: "left" }}>Service</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 16px", textAlign: "left", minWidth: 260 }}>Description / Scope</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 12px", textAlign: "center" }}>Essentials Deck</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 12px", textAlign: "center" }}>Executive Deck</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 12px", textAlign: "center" }}>Teaser Piece</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5, padding: "14px 12px", textAlign: "center" }}>Proforma</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([component, service, desc, e1, e2, t, p], i) => (
                    <tr key={`${component}-${service}`}
                      style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF", transition: "background 0.2s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = "rgba(216,115,7,0.06)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = i % 2 === 0 ? "#F9F8F6" : "#FFFFFF")}
                    >
                      <td style={{ padding: "14px 16px", color: "#1a1a1a", fontWeight: 600, borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{component}</td>
                      <td style={{ padding: "14px 16px", color: "#1a1a1a", fontWeight: 600, borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{service}</td>
                      <td style={{ padding: "14px 16px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{desc}</td>
                      <td style={{ padding: "14px 12px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{e1}</td>
                      <td style={{ padding: "14px 12px", color: "#1a1a1a", fontWeight: 500, textAlign: "center", borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)", verticalAlign: "top" }}>{e2}</td>
                      <td style={{ padding: "14px 12px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{t}</td>
                      <td style={{ padding: "14px 12px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7", verticalAlign: "top" }}>{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Not sure where to start */}
          <div className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ position: "relative", background: "#0F1B2D", borderRadius: 16, padding: "48px 56px", marginTop: 64, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />

            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", marginBottom: 20 }}>
              Not Sure Where to Start?
            </h3>

            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", marginBottom: 48 }}>
              Every organization enters the fundraising process at a different stage. Some need to establish a compelling investor story before approaching the market. Others already have presentation materials but require access to qualified investors or support executing an effective outreach strategy. During a Capital Raise Strategy Session, we&apos;ll assess your current stage of investor readiness, identify the most impactful next steps, and recommend the solutions that best align with your fundraising objectives.
            </p>

            {/* Solutions that work better together */}
            <div style={{ marginBottom: 48 }}>
              <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", textAlign: "center", marginBottom: 14 }}>
                Solutions That Work Better Together
              </h4>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>
                Our solutions are designed to work independently, but they&apos;re most powerful when connected as part of a complete Capital Raise Support strategy, from investor story to investor engagement.
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
                {journeySteps.map((step, i) => (
                  <div key={step.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 130 }}>
                      <div style={{ position: "relative", width: 56, height: 56, borderRadius: "50%", background: "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img loading="lazy" src={step.icon} alt="" style={{ width: 24, height: 24 }} />
                        <span style={{ position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: "50%", background: "#d87307", color: "#FFFFFF", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                      </div>
                      <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.75)", textAlign: "center", lineHeight: 1.3 }}>{step.name}</span>
                    </div>
                    {i < journeySteps.length - 1 && <ArrowConnector />}
                  </div>
                ))}
              </div>
            </div>

            {/* Which solution is right for you */}
            <div style={{ marginBottom: 48 }}>
              <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", textAlign: "center", marginBottom: 28 }}>
                Which Solution Is Right for You?
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 1, maxWidth: 880, margin: "0 auto" }}>
                {goalMap.map(({ goal, solution }) => (
                  <div key={solution} className="cr-goalmap-row" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 20, padding: "18px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>If your goal is to {goal}</span>
                    </div>
                    <svg className="cr-goalmap-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>Start with {solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — closes the section */}
            <div style={{ textAlign: "center", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                letterSpacing: "0.1em", textTransform: "uppercase",
                background: "#d87307", color: "#FFFFFF", textDecoration: "none",
                padding: "16px 32px", borderRadius: 6, transition: "background 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#fff" strokeWidth="1.8" /><path d="M3 9h18M8 3v4M16 3v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Schedule a Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: WHAT SUCCESS LOOKS LIKE + FAQ ────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#F8F2E8",
      }}>
        <div ref={s6ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Investor Confidence That Creates Fundraising Momentum
            </h2>
            <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              A successful capital raise isn&apos;t measured by the number of presentations you deliver, it&apos;s measured by your ability to build investor confidence, create meaningful conversations, and move your fundraising forward.
            </p>
            <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              Our Capital Raise Support framework is designed to help you communicate your opportunity with clarity, engage the right investors, and create the momentum needed to support long-term growth.
            </p>
          </div>

          {/* 4 outcome cards */}
          <div className="cr-outcomes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 56 }}>
            {[
              {
                title: "Strategic Clarity",
                body: "Build a clear investment story supported by strong positioning, consistent messaging, and a compelling value proposition.",
                impacts: ["Stronger positioning", "Clearer messaging", "More compelling investor narrative"],
              },
              {
                title: "Investor Confidence",
                body: "Present a business opportunity investors can quickly understand, evaluate, and trust.",
                impacts: ["Greater credibility", "Stronger executive presence", "Improved investment readiness"],
              },
              {
                title: "Meaningful Investor Conversations",
                body: "Connect with qualified investors through targeted research, strategic outreach, and consistent engagement.",
                impacts: ["Better investor fit", "Higher-quality conversations", "Improved fundraising momentum"],
              },
              {
                title: "Long-Term Business Value",
                body: "Create strategic assets and messaging that continue supporting future fundraising, partnerships, and business growth.",
                impacts: ["Reusable investor assets", "Consistent communications", "Scalable fundraising foundation"],
              },
            ].map(({ title, body, impacts }) => (
              <div key={title}
                className={`reveal${s6ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.92)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "28px 24px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", marginBottom: 18 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(216,115,7,0.2)", paddingTop: 14 }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>Outcome</p>
                  {impacts.map(im => (
                    <div key={im} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, color: "#444" }}>{im}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic insight */}
          <div className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 56px" }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Strategic Insight</p>
            <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.4, margin: 0 }}>
              Capital is the outcome. Investor confidence is what makes it possible.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className={`reveal${s6ViewInView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 8 }}>
              Common Questions About Capital Raise Support
            </h3>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 660, margin: "0 0 40px" }}>
              Preparing for a capital raise often raises as many questions as it answers. Below are some of the most common questions founders and leadership teams ask as they prepare for investor conversations.
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
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

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shared/shared-mountain-peaks.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Rocky mountain trail along a ridge crest at sunset" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.55)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Let&apos;s Build Your Capital Raise Strategy.
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 48px" }}>
                Let&apos;s build a capital raise strategy that helps your organization prepare, connect, and engage with confidence.
              </p>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 28 }}>
                  Choose Your Next Step
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Meet with our team to evaluate your investor readiness, identify opportunities to strengthen your fundraising strategy, and determine the right Capital Raise Support solutions for your business.
                    </p>
                    <Link href="/contact" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid #d87307", paddingBottom: 6,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Schedule a Capital Raise Strategy Session</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Raising capital is only one part of sustainable growth. Discover how our Go-to-Market Strategy helps organizations become discoverable, trusted, and chosen while building predictable revenue systems.
                    </p>
                    <Link href="/services/gtm" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid rgba(255,255,255,0.5)", paddingBottom: 6,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      e.currentTarget.style.borderBottomColor = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.5)";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Explore Our Go-to-Market Strategy Services</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
