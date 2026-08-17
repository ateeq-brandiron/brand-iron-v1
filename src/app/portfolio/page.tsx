"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
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

const stats = [
  { number: "100+", label: "Brands Forged" },
  { number: "25+", label: "Industries Served" },
  { number: "20+", label: "Years in the Saddle" },
  { number: "Award-Winning", label: "Strategy & Creative" },
];

const selectedWork = [
  {
    category: "Brand Strategy & Positioning",
    headline: "Stake Your Claim.",
    body: "A brand without clear positioning gets lost in the crowd. We help businesses define what they stand for, who they serve, and why the market should pay attention. The result is a sharper position, stronger message, and a brand built to hold its ground.",
    services: ["Brand Strategy", "Positioning", "Messaging", "Identity"],
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
  {
    category: "Website & Digital Experience",
    headline: "Build a Stronger Front Door.",
    body: "Your website is often where the first handshake happens. We create digital experiences that make the right first impression, communicate value clearly, and guide visitors toward action. Built for credibility. Built for conversion. Built to keep working long after launch.",
    services: ["Website Design", "UX", "Messaging", "Conversion Optimization"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#d87307" strokeWidth="1.8"/><path d="M3 9h18" stroke="#d87307" strokeWidth="1.8"/><circle cx="6.5" cy="6.5" r="0.75" fill="#d87307"/><circle cx="9" cy="6.5" r="0.75" fill="#d87307"/></svg>),
  },
  {
    category: "Go-To-Market Strategy",
    headline: "Know the Territory. Make Your Move.",
    body: "Going to market without a clear strategy is like riding blind. We help businesses understand the landscape, identify the right audience, sharpen the offer, and build a practical path from market entry to measurable growth.",
    services: ["Market Research", "ICP Development", "GTM Strategy", "Demand Generation"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    category: "Capital Raise Strategy",
    headline: "Make the Story Worth Backing.",
    body: "Capital follows confidence. We help companies tell a stronger investor story through clear positioning, compelling narratives, and raise materials built to communicate the opportunity with clarity. No smoke. No fluff. Just a stronger case for why the business deserves attention.",
    services: ["Investor Positioning", "Pitch Decks", "Financial Narrative", "Raise Strategy"],
    icon: (<img loading="lazy" src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
  {
    category: "AI Visibility & Discoverability",
    headline: "Be Found Where the Market Is Looking.",
    body: "Discovery is moving beyond traditional search. We help businesses strengthen the signals that make them easier to find, understand, trust, and recommend across search engines and AI-driven platforms. Because being good isn't enough if nobody can find you.",
    services: ["AI Visibility", "AEO", "GEO", "Entity Optimization", "Search Strategy"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    category: "Revenue Growth & Automation",
    headline: "Turn Momentum Into a System.",
    body: "Growth shouldn't depend on luck. We connect marketing, sales, automation, funnels, and reporting into a more consistent system designed to create demand, improve follow-up, and strengthen revenue performance. Less chasing. More traction.",
    services: ["Revenue Strategy", "Automation", "CRM", "Funnels", "Reporting"],
    icon: (<img loading="lazy" src="/images/icons/icon-trending.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
];

const processSteps = [
  {
    title: "Discover",
    body: "We uncover what's standing between the business and its next stage of growth.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    title: "Position",
    body: "We sharpen the position so the market understands what the business stands for.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Build",
    body: "We build the right tools, strategy, creative, and systems needed to move forward.",
    icon: (<img loading="lazy" src="/images/icons/icon-gear.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Launch",
    body: "We launch with purpose, bringing the brand and strategy into the real world.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Measure",
    body: "We measure what matters so every engagement is grounded in real performance.",
    icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Grow",
    body: "We keep pushing forward, turning proven work into sustained business growth.",
    icon: (<img loading="lazy" src="/images/icons/icon-trending.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
];

export default function PortfolioPage() {
  const { ref: s2ViewRef, inView: s2ViewInView } = useInView();
  const { ref: s3ViewRef, inView: s3ViewInView } = useInView();
  const { ref: s4ViewRef, inView: s4ViewInView } = useInView();
  const { ref: s5ViewRef, inView: s5ViewInView } = useInView();
  const { ref: s6ViewRef, inView: s6ViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Portfolio", url: "https://brandiron.net/portfolio" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pf-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/portfolio/portfolio-hero-blacksmith-forging.mp4"
          aria-label="A blacksmith forging molten metal on an anvil, sparks flying, representing brands forged through strategy and craft"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.15) 0%, rgba(8,16,36,0.05) 45%, rgba(8,16,36,0.45) 100%)" }} />

        <div className="pf-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="pf-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Brands Forged. Growth Built to Last.
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <a href="#case-studies" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Explore the Work
                </a>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Book a Strategy Session
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
                Strong brands aren&apos;t made by accident. They&apos;re built with clarity, grit, and a clear sense of where they&apos;re headed. At Brand Iron, we help companies sharpen their position, strengthen their presence, and build the strategy, creative, and growth systems needed to move forward with confidence. From the first spark to the final execution, our work is built to stand up in the real world.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pf-hero-section { height: auto !important; min-height: 100vh; }
            .pf-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .pf-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: STATS BAND ───────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "88px 40px" }}>
        <div ref={s2ViewRef} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 48 }}>
            Built With Purpose. Proven in the Field.
          </h2>
          <div className={`reveal${s2ViewInView ? ' visible' : ''} pf-stats-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {stats.map(({ number, label }) => (
              <div key={label} style={{ background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 12, padding: "32px 20px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 34px)", fontWeight: 900, color: "#d87307", lineHeight: 1.1, marginBottom: 10 }}>{number}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#555", margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .pf-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 520px) {
            .pf-stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S3: FEATURED WORK ────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 80px" }}>
        <div ref={s3ViewRef} style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s3ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
            Strategy With Backbone. Creative With Purpose.
          </h2>
          <p className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
            Good-looking work is only part of the job. The real work is creating a brand people understand, trust, and choose. We partner with organizations that are ready to sharpen their story, stake out a stronger position, and build momentum across branding, go-to-market, digital, capital raising, visibility, and revenue growth.
          </p>
          <a href="#case-studies" className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >See All Projects</a>
        </div>
      </section>

      {/* ── S4: SELECTED WORK ────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "80px 40px 120px" }}>
        <div ref={s4ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 48 }}>
            Selected Work
          </h2>
          <div className="pf-work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {selectedWork.map(({ category, headline, body, services, icon }, i) => (
              <div key={category}
                className={`reveal${s4ViewInView ? ' visible' : ''} pf-work-card`}
                style={{
                  position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                  padding: "32px 28px", display: "flex", flexDirection: "column", overflow: "hidden",
                  transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {icon}
                </div>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>{category}</p>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.25 }}>{headline}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.7, color: "#666", marginBottom: 20 }}>{body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                  {services.map(s => (
                    <span key={s} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{s}</span>
                  ))}
                </div>
                <a href="#case-studies" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                  background: "#d87307", color: "#FFFFFF",
                  padding: "13px 20px", borderRadius: 6, marginTop: "auto",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#c46305")}
                onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
                >View the Work →</a>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .pf-work-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          @media (max-width: 900px) {
            .pf-work-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .pf-work-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S5: BEHIND THE BRAND ─────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "120px 40px" }}>
        <CircuitOverlay />
        <div ref={s5ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, margin: "0 auto 56px", textAlign: "center" }}>
            <h2 className={`section-heading reveal${s5ViewInView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 20 }}>
              Forged From Strategy. Built for the Real World.
            </h2>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
              Every project starts with a simple question: what&apos;s standing between this business and its next stage of growth?
            </p>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
              From there, we dig in: we uncover the challenge, sharpen the position, build the right tools, launch with purpose, measure what matters, and keep pushing forward.
            </p>
          </div>

          <div className={`reveal${s5ViewInView ? ' visible' : ''} pf-process-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {processSteps.map(({ title, body, icon }, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <div key={title}
                  style={{
                    position: "relative", borderRadius: 14, padding: "26px 20px", overflow: "hidden",
                    background: isLast ? "#d87307" : "rgba(255,255,255,0.04)",
                    border: isLast ? "none" : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isLast ? "0 10px 32px rgba(216,115,7,0.3)" : "none",
                    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    if (isLast) { el.style.boxShadow = "0 16px 44px rgba(216,115,7,0.45)"; }
                    else { el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.25)"; }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    if (isLast) { el.style.boxShadow = "0 10px 32px rgba(216,115,7,0.3)"; }
                    else { el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: isLast ? "rgba(255,255,255,0.35)" : "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: isLast ? "rgba(255,255,255,0.95)" : "rgba(216,115,7,0.15)", border: isLast ? "none" : "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </div>
                    <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, color: isLast ? "rgba(255,255,255,0.85)" : "#d87307" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 8, lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.6, color: isLast ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.7)", margin: 0 }}>{body}</p>
                </div>
              );
            })}
          </div>

          <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            We don&apos;t believe in strategy that sits on a shelf or creative that only looks good in a presentation. We build work designed to earn its keep.
          </p>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .pf-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 520px) {
            .pf-process-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S6: CASE STUDIES TEASER ───────────────────────────── */}
      <section id="case-studies" style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s6ViewRef} style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
            See What Happened After the Dust Settled.
          </h2>
          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
            The finished work is only part of the story. Explore selected case studies to see the challenge, thinking, execution, and outcomes behind Brand Iron engagements.
          </p>
          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", color: "#999", fontStyle: "italic" }}>
            Case studies are being finalized and will be published here soon.
          </p>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shared/shared-cta-banner-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%",
          }}>
            <div role="img" aria-label="Golden prairie landscape at sunset" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.55)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Forge What&apos;s Next?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 40px" }}>
                Whether you&apos;re launching a new venture, repositioning an established company, raising capital, entering new territory, or building your next growth engine, bring us the challenge and we&apos;ll help you shape what comes next.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                background: "#d87307", color: "#FFFFFF",
                padding: "18px 44px", borderRadius: 6,
                transition: "background 0.2s", marginBottom: 20,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >
                Book Strategy Session
              </Link>
              <div style={{ marginBottom: 24 }}>
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0a860"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)"; }}
                >
                  Explore Our Services →
                </Link>
              </div>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                Forging Brands. Driving Revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
