"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioItems } from "@/data/portfolio";

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
  { number: "100+", label: "Brands Forged", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#d87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="5" stroke="#d87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="1.5" fill="#d87307" /></svg>) },
  { number: "25+", label: "Industries Served", icon: (<img loading="lazy" src="/images/icons/icon-trending.svg" alt="" style={{ width: 28, height: 28 }} />) },
  { number: "20+", label: "Years in the Saddle", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#d87307" strokeWidth="1.6" /><circle cx="17" cy="9" r="2.3" stroke="#d87307" strokeWidth="1.6" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /><path d="M15 14.2c2.3.4 4 2.3 4 4.8" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>) },
  { number: "Award-Winning", label: "Strategy & Creative", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 14v3M9 20h6M9.5 17h5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>) },
];

const categoryCards = [
  {
    id: "websites",
    category: "Websites",
    headline: "Build a Stronger Front Door.",
    body: "Your website is often where the first handshake happens. We create digital experiences that make the right first impression, communicate value clearly, and guide visitors toward action.",
    image: "/images/about/about-hero-barn.webp",
    imageAlt: "Warmly lit rustic building exterior at dusk, representing a website as a brand's front door",
  },
  {
    id: "brand-identity",
    category: "Brand Identity",
    headline: "Give Your Brand a Face.",
    body: "A strong identity does more than look good. We build logos, brand guidelines, and visual systems that give your brand a face people recognize, trust, and remember.",
    image: "/images/portfolio/portfolio-category-brand-identity-horse.jpg",
    imageAlt: "Striking black and white portrait of a horse with a full mane, representing bold brand identity",
  },
  {
    id: "capital-raise",
    category: "Capital Raise",
    headline: "Make the Story Worth Backing.",
    body: "Capital follows confidence. We help companies tell a stronger investor story through clear positioning, compelling narratives, and raise materials built to communicate the opportunity with clarity.",
    image: "/images/shared/shared-fence-pasture.jpg",
    imageAlt: "Wooden fence along a pasture at golden hour, representing staking a claim for capital raise support",
  },
  {
    id: "go-to-market",
    category: "Go-To-Market",
    headline: "Know the Territory. Make Your Move.",
    body: "Going to market without a clear plan is like riding blind. We help businesses map the landscape, sharpen the offer, and build a practical launch roadmap from market entry to measurable growth.",
    image: "/images/shared/shared-mountain-peaks.jpg",
    imageAlt: "Rocky mountain range and open valley terrain, representing mapping the market before a go-to-market launch",
  },
  {
    id: "ai-visibility",
    category: "AI Visibility",
    headline: "Be Found Where the Market Is Looking.",
    body: "Discovery is moving beyond traditional search. We help businesses strengthen the signals that make them easier to find, understand, trust, and recommend across search engines and AI-driven platforms.",
    image: "/images/shared/shared-blacksmith-tech-lines.jpg",
    imageAlt: "Blacksmith's hands forging metal overlaid with glowing circuit-line data signals, representing AI visibility",
  },
  {
    id: "revenue-growth",
    category: "Revenue Growth",
    headline: "Turn Momentum Into a System.",
    body: "Growth shouldn't depend on luck. We connect marketing, sales, automation, funnels, and reporting into a more consistent system designed to create demand, improve follow-up, and strengthen revenue performance. Less chasing. More traction.",
    image: "/images/portfolio/portfolio-category-revenue-growth-dashboard.jpg",
    imageAlt: "Laptop displaying a Brand Iron revenue and call-performance dashboard, representing revenue growth reporting",
  },
];

const processSteps = [
  {
    title: "Discover",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    title: "Position",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Build",
    icon: (<img loading="lazy" src="/images/icons/icon-gear.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Launch",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Measure",
    icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "Grow",
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
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="pf-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="pf-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — kicker, headline, CTAs */}
            <div>
              <p className="hero-h1-anim" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                Portfolio
              </p>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Brands Forged<span style={{ color: "#d87307" }}>.</span><br />Growth Built to Last<span style={{ color: "#d87307" }}>.</span>
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <a href="#selected-work" style={{
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
      <section style={{ background: "#FFFFFF", padding: "16px 40px 56px" }}>
        <div ref={s2ViewRef} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", textAlign: "center", marginBottom: 24 }}>
            Built With Purpose. Proven in the Field.
          </p>
          <div className={`reveal${s2ViewInView ? ' visible' : ''} pf-stats-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {stats.map(({ number, label, icon }, i) => (
              <div key={label} style={{
                textAlign: "center", padding: "0 16px",
                borderRight: i < stats.length - 1 ? "1px solid #EEEBE7" : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>{icon}</div>
                <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.1, marginBottom: 6 }}>{number}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#777", margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .pf-stats-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px; }
            .pf-stats-grid > div:nth-child(2n) { border-right: none !important; }
            .pf-stats-grid > div:nth-child(1), .pf-stats-grid > div:nth-child(2) { border-bottom: 1px solid #EEEBE7; padding-bottom: 24px; }
          }
          @media (max-width: 520px) {
            .pf-stats-grid { grid-template-columns: 1fr !important; }
            .pf-stats-grid > div { border-right: none !important; border-bottom: 1px solid #EEEBE7; padding-bottom: 24px !important; }
            .pf-stats-grid > div:last-child { border-bottom: none; }
          }
        `}</style>
      </section>

      {/* ── S3: FEATURED WORK ────────────────────────────────── */}
      <section id="selected-work" style={{ background: "#FFFFFF", padding: "40px 40px 48px" }}>
        <div ref={s3ViewRef} className={`reveal${s3ViewInView ? ' visible' : ''} pf-featured-row`} style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>
              Featured Work
            </p>
            <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 14 }}>
              Strategy With Backbone. Creative With Purpose.
            </h2>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.75, color: "#666" }}>
              Good-looking work is only part of the job. The real work is creating a brand people understand, trust, and choose. We partner with organizations that are ready to sharpen their story, stake out a stronger position, and build momentum across branding, go-to-market, digital, capital raising, visibility, and revenue growth.
            </p>
          </div>
          <a href="#all-projects" style={{
            display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0,
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "transparent", color: "#1a1a1a", border: "1px solid #d87307",
            padding: "13px 24px", borderRadius: 6, transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#d87307"; e.currentTarget.style.color = "#FFFFFF"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
          >
            See All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .pf-featured-row { flex-direction: column !important; align-items: flex-start !important; }
          }
        `}</style>
      </section>

      {/* ── S4: SELECTED WORK (CATEGORY CARDS) ───────────────── */}
      <section style={{ background: "#FFFFFF", padding: "8px 40px 96px" }}>
        <div ref={s4ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 40 }}>
            Selected Work
          </h2>
          <div className="pf-category-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {categoryCards.map(({ id, category, headline, body, image, imageAlt }, i) => (
              <a key={id} href={`#all-projects`}
                className={`reveal${s4ViewInView ? ' visible' : ''} pf-category-card`}
                style={{
                  display: "block", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 12,
                  overflow: "hidden", textDecoration: "none", transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 10, right: 10, width: 28, height: 28, opacity: 0, transition: "opacity 0.25s ease" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 10, left: 10, width: 28, height: 28, opacity: 0, transition: "opacity 0.25s ease" }} />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>{category}</p>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{headline}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13.5, lineHeight: 1.65, color: "#666", marginBottom: 16 }}>{body}</p>
                  <span className="pf-view-work" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d87307" }}>
                    View the Work
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <style>{`
          .pf-category-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .pf-category-card:hover .pf-view-work { text-decoration: underline; }
          .pf-category-card:hover .corner-bracket { opacity: 1 !important; }
          @media (max-width: 900px) {
            .pf-category-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .pf-category-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S4B: EXPLORE ALL PROJECTS (GALLERY) ──────────────── */}
      <section id="all-projects" style={{ background: "#F9F8F6", padding: "80px 40px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="section-heading" style={{ color: "#1a1a1a", marginBottom: 16 }}>
            Explore All Projects
          </h2>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
            Filter by category and click any thumbnail for a closer look.
          </p>
          <PortfolioGallery items={portfolioItems} />
        </div>
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
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
              From there, we dig in: we uncover the challenge, sharpen the position, build the right tools, launch with purpose, measure what matters, and keep pushing forward.
            </p>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 14, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", color: "#d87307" }}>
              Discover &rarr; Position &rarr; Build &rarr; Launch &rarr; Measure &rarr; Grow
            </p>
          </div>

          <div className={`reveal${s5ViewInView ? ' visible' : ''} pf-process-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
            {processSteps.map(({ title, icon }, i) => {
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
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 0, lineHeight: 1.25 }}>{title}</h3>
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
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s6ViewRef} style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
            See What Happened After the Dust Settled.
          </h2>
          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
            The finished work is only part of the story. Explore selected case studies to see the challenge, thinking, execution, and outcomes behind Brand Iron engagements.
          </p>
          <Link href="/case-studies" className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >Explore Case Studies</Link>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "0 24px 96px" }}>
        <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''} pf-cta-bar`} style={{
          maxWidth: 900, margin: "0 auto", border: "1px solid #EEEBE7", borderRadius: 14,
          textAlign: "center", padding: "56px 48px",
        }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(216,115,7,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
              <path d="M8 34h32M12 34v-6h8l4-4h8a4 4 0 0 1 4 4v2H12Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" />
              <path d="M22 24V16M18 20l4-6 4 6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 10l2 2M34 8l1 3M37 12l3 1" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 16 }}>
            Ready to Forge What&apos;s Next?
          </h2>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 8px" }}>
            Whether you&apos;re launching a new venture, repositioning an established company, raising capital, entering new territory, or building your next growth engine, Brand Iron can help you create a stronger path forward.
          </p>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 24px" }}>
            Bring us the challenge. We&apos;ll help you shape what comes next.
          </p>
          <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 14, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", color: "#d87307", marginBottom: 28 }}>
            Forging Brands. Driving Revenue.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              background: "#d87307", color: "#FFFFFF",
              padding: "15px 28px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >
              Book a Strategy Session
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/services" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              color: "#1a1a1a", transition: "color 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#d87307")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#1a1a1a")}
            >
              Explore Our Services
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
