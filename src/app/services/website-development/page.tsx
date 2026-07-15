"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import WebsiteInquiryModal from "@/components/WebsiteInquiryModal";

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

// Crossfades through the given headlines once, then rests on the last one.
function useHeadlineCrossfade(count: number, pauseMs = 3500, fadeMs = 400) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const fadeOut = setTimeout(() => setVisible(false), pauseMs);
    const advance = setTimeout(() => { setIndex(i => (i + 1) % count); setVisible(true); }, pauseMs + fadeMs);
    return () => { clearTimeout(fadeOut); clearTimeout(advance); };
  }, [index, count, pauseMs, fadeMs]);
  return { index, visible, fadeMs };
}

const HEADLINES = [
  "Your Website Should Be Your Strongest Growth Asset.",
  "Your Website Is Where Strategy Becomes Experience.",
  "Every Growth Strategy Eventually Leads to Your Website.",
];

const pillars = [
  {
    num: "01", title: "Strategy",
    body: "Clarify goals, audience, messaging, and website structure.",
    icon: (<img src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "02", title: "User Experience",
    body: "Create intuitive navigation and user journeys that guide visitors toward action.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 3l4 16 2.5-6.5L18 10z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(216,115,7,0.12)"/></svg>),
  },
  {
    num: "03", title: "Design",
    body: "Develop a modern, responsive interface that reflects your brand and builds credibility.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12.5 6.5l5 5" stroke="#d87307" strokeWidth="1.8"/></svg>),
  },
  {
    num: "04", title: "Performance & Visibility",
    body: "Build a fast, technically sound website with SEO, AI Visibility, accessibility, and mobile best practices.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 18a8 8 0 1 1 16 0" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 18l4-6" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="18" r="1.3" fill="#d87307"/></svg>),
  },
  {
    num: "05", title: "Growth",
    body: "Connect your website to your business through analytics, lead capture, CRM integrations, and scalable content management.",
    icon: (<img src="/images/icons/icon-lightning.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
];

const processSteps = ["Discovery", "Strategy", "UX Planning", "Design", "Development", "Testing", "Launch", "Growth"];

const solutions = [
  {
    name: "Website Essentials",
    body: "Build a credible digital foundation with a modern, responsive website for smaller businesses or focused relaunches.",
    bestFor: "Up to 5 pages",
    outcome: "Professional online presence",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#d87307" strokeWidth="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  },
  {
    name: "Website Growth",
    body: "Create a marketing-ready website with stronger messaging, improved conversion paths, and deeper content.",
    bestFor: "Up to 8 pages",
    outcome: "Better user engagement and lead generation",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="14" height="16" rx="1.5" stroke="#d87307" strokeWidth="1.8"/><rect x="7" y="2" width="14" height="16" rx="1.5" stroke="#d87307" strokeWidth="1.4" opacity="0.55"/></svg>),
  },
  {
    name: "Website Advanced",
    body: "Develop a scalable digital platform with advanced functionality, integrations, and AI Visibility foundations.",
    bestFor: "Up to 12 pages",
    outcome: "Scalable digital platform with advanced capabilities",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#d87307" strokeWidth="1.8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
];

const successPoints = [
  "Strengthen credibility and trust",
  "Improve user experience",
  "Increase qualified inquiries",
  "Support SEO and AI Visibility",
  "Integrate with your marketing and business systems",
  "Scale as your organization grows",
];

const CheckIcon = () => (
  <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ArrowConnector = () => (
  <svg width="24" height="14" viewBox="0 0 24 14" fill="none"><path d="M1 7h18M14 1l6 6-6 6" stroke="rgba(216,115,7,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function WebsiteDevelopmentPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const headline = useHeadlineCrossfade(HEADLINES.length);

  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  const faqs = [
    {
      q: "What platforms do you develop websites on?",
      a: "We build websites on platforms such as Webflow, WordPress, Shopify, and other CMS solutions based on your project requirements.",
    },
    {
      q: "Will my website be SEO-ready?",
      a: "Yes. Every website includes a technical SEO foundation, responsive development, and best practices to support search visibility from launch.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Absolutely. We can modernize your current website while improving messaging, user experience, technical performance, and conversion opportunities.",
    },
    {
      q: "Do you provide website copywriting?",
      a: "Yes. We offer website copywriting and messaging refinement as optional services to help ensure your website communicates your value clearly and consistently.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We recommend post-launch support to assist with minor refinements, stabilization, and knowledge transfer following your website launch.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {inquiryOpen && <WebsiteInquiryModal onClose={() => setInquiryOpen(false)} />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="wd-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/Animate_this_image_and_these_d (2).mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="wd-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="wd-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — crossfading headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20, minHeight: "clamp(79px, 11.6vw, 152px)",
                opacity: headline.visible ? 1 : 0,
                transition: `opacity ${headline.fadeMs}ms ease`,
              }}>
                {HEADLINES[headline.index]}
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
                  Schedule a Website Strategy Session
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
                  Explore Website Solutions
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
                Your website is where buyers validate your credibility, AI platforms evaluate your authority, investors assess your business, and prospective customers decide whether to take the next step. Every search result, AI recommendation, social post, email campaign, and sales conversation eventually leads here.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                At Brand Iron, we don&apos;t just build websites. We create strategic digital experiences that connect your brand, messaging, user experience, AI Visibility, and business goals into one platform designed to help your organization become discoverable, trusted, and chosen.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .wd-hero-section { height: auto !important; min-height: 100vh; }
            .wd-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .wd-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: WHY MOST BUSINESS WEBSITES UNDERPERFORM ─────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Why Most Business Websites Underperform
          </h2>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            Most organizations don&apos;t struggle because they lack a website. They struggle because their website isn&apos;t connected to their business strategy.
          </p>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16 }}>
            Many websites are built around pages instead of customer journeys. They lack clear messaging, intuitive navigation, strong calls to action, and the technical foundation needed for search visibility and AI discoverability.
          </p>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
            At Brand Iron, every website begins with understanding your organization first. Only then do we design the digital experience that supports it.
          </p>
        </div>
      </section>

      {/* ── S3: THE BRAND IRON WEBSITE FRAMEWORK ────────────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-wood.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.85)" }} />
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Every Great Website Starts with Strategy.
            </h2>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Our approach combines five connected pillars that ensure your website supports both today&apos;s users and tomorrow&apos;s growth.
            </p>
          </div>

          {/* 5 pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 48 }}>
            {pillars.map(({ num, title, body, icon }) => (
              <div key={num}
                className={`reveal${s3View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 14, padding: "28px 20px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 28, color: "rgba(216,115,7,0.18)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.65, color: "#666", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ textAlign: "center" }}>
            <button onClick={() => setInquiryOpen(true)} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
            >Request a Website Proposal</button>
          </div>
        </div>
      </section>

      {/* ── S4: HOW WE BUILD WEBSITES ────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#0F1B2D",
      }}>
        <CircuitOverlay />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))", marginBottom: 20, textAlign: "left" }}>
              How We Build Websites
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
              Every project follows a structured process designed to reduce risk and create a smoother launch.
            </p>
          </div>

          {/* 8-step process chain */}
          <div className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, marginBottom: 48 }}>
            {processSteps.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  background: i === processSteps.length - 1 ? "#d87307" : "rgba(255,255,255,0.06)",
                  border: i === processSteps.length - 1 ? "none" : "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10, padding: "16px 18px", minWidth: 108, textAlign: "center",
                  boxShadow: i === processSteps.length - 1 ? "0 8px 28px rgba(216,115,7,0.35)" : "none",
                }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: i === processSteps.length - 1 ? "rgba(255,255,255,0.75)" : "#d87307", marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</p>
                  <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 13, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>{step}</p>
                </div>
                {i < processSteps.length - 1 && <div style={{ padding: "0 4px" }}><ArrowConnector /></div>}
              </div>
            ))}
          </div>

          <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
            This collaborative approach ensures your website is aligned with your business goals before it goes live.
          </p>
        </div>
      </section>

      {/* ── S5: CHOOSE THE RIGHT WEBSITE SOLUTION ───────────── */}
      <section id="solutions" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Every Organization Has Different Website Requirements
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Whether you need a focused website refresh, a marketing-ready platform, or a larger website with advanced functionality, Brand Iron provides solutions designed to meet your current needs while supporting future growth.
            </p>
          </div>

          {/* 3 solution cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 64 }}>
            {solutions.map(({ name, body, bestFor, outcome, icon }) => (
              <div key={name}
                className={`reveal${s5View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 16px 44px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ padding: "36px 32px 28px", flex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{icon}</div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 19, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>{name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666", marginBottom: 20 }}>{body}</p>
                </div>
                <div style={{ padding: "20px 32px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Best For</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 16 }}>{bestFor}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.55, color: "#d87307", fontWeight: 600, margin: 0 }}>{outcome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32, textAlign: "center" }}>
              Compare Website Solutions
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Solution</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Best For</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Primary Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Website Essentials", "Focused websites and relaunches", "Professional online presence"],
                    ["Website Growth", "Marketing-ready businesses", "Better user engagement and lead generation"],
                    ["Website Advanced", "Growing organizations", "Scalable digital platform with advanced capabilities"],
                  ].map(([name, bestFor, outcome], i) => (
                    <tr key={name} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "18px 24px", color: "#1a1a1a", fontWeight: 600, borderBottom: "1px solid #EEEBE7" }}>{name}</td>
                      <td style={{ padding: "18px 24px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{bestFor}</td>
                      <td style={{ padding: "18px 24px", color: "#1a1a1a", fontWeight: 500, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)" }}>{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ textAlign: "center" }}>
            <button onClick={() => setInquiryOpen(true)} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
            >Request Website Estimate</button>
          </div>
        </div>
      </section>

      {/* ── S6: WHAT SUCCESS LOOKS LIKE + FAQ ────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-outcomes.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(248,242,232,0.93)" }} />
        <div ref={s6View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 className={`section-heading reveal${s6View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              A Website That Becomes a Long-Term Business Asset
            </h2>
            <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "#555" }}>
              A successful website does more than launch—it becomes a long-term business asset. With Brand Iron, your website is designed to:
            </p>
          </div>

          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 40px", marginBottom: 48, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "32px 40px" }}>
            {successPoints.map(point => (
              <div key={point} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{point}</span>
              </div>
            ))}
          </div>

          <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, fontWeight: 700, lineHeight: 1.7, color: "#1a1a1a", textAlign: "center", marginBottom: 64 }}>
            A great website doesn&apos;t just represent your business—it helps grow it.
          </p>

          {/* FAQ Accordion */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32 }}>
              Common Questions About Website Development
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s" }}>
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
      <section style={{
        position: "relative", overflow: "hidden", padding: "140px 40px",
        backgroundImage: "url('/images/bg-leather.svg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,3,0.55)" }} />
        <div ref={ctaView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40, justifyContent: "center" }}>
            <div style={{ flex: 1, maxWidth: 200, height: 1, background: "rgba(216,115,7,0.35)" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d87307" }} />
            <div style={{ flex: 1, maxWidth: 200, height: 1, background: "rgba(216,115,7,0.35)" }} />
          </div>
          <h2 className={`reveal${ctaView.inView ? ' visible' : ''} section-heading`} style={{ color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))", marginBottom: 24 }}>
            Build a Website Designed for Growth
          </h2>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.8)", maxWidth: 700, margin: "0 auto 48px" }}>
            Whether you&apos;re launching a new website or transforming an existing one, Brand Iron helps you create a digital experience that supports your brand, strengthens credibility, and drives measurable business outcomes.
          </p>
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`}>
            <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 15, padding: "18px 44px" }}>
              Schedule a Website Strategy Session
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
