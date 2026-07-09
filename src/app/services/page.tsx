"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "AI Strategy & Consulting",
    href: "/ai-strategy",
    description: "Executive-level AI roadmapping that connects artificial intelligence to real revenue outcomes. We identify where AI creates the highest ROI in your specific business, and build the plan to get there.",
    deliverables: ["AI Readiness Assessment", "ROI-Mapped AI Roadmap", "Use Case Prioritization", "Build vs. Buy Analysis"],
  },
  {
    number: "02",
    title: "AI Execution & Automation",
    href: "/ai-execution",
    description: "We don't just advise, we build. From AI agents to automated workflows, we deploy intelligent systems that run your revenue operations while your team focuses on high-value work.",
    deliverables: ["AI Agent Deployment", "Workflow Automation", "Lead Scoring & Routing", "Revenue Ops Automation"],
  },
  {
    number: "03",
    title: "GTM & Sales Systems",
    href: "/gtm-sales-systems",
    description: "Go-to-market strategy and sales infrastructure built to convert. We design the systems, sequences, and processes that turn your sales team into a predictable revenue engine.",
    deliverables: ["GTM Strategy", "ICP & Segmentation", "Sales Playbooks", "Pipeline Infrastructure"],
  },
  {
    number: "04",
    title: "Branding & High-Converting Decks",
    href: "/branding-decks",
    description: "Brand positioning and visual storytelling that commands attention and drives action. From investor pitch decks to full brand systems, built to win in competitive markets.",
    deliverables: ["Brand Strategy", "Visual Identity", "Pitch Deck Design", "Sales Collateral"],
  },
  {
    number: "05",
    title: "Data & Revenue Visibility",
    href: "/data-revenue-visibility",
    description: "Real-time revenue intelligence that gives leadership full-funnel clarity. We build the dashboards, data pipelines, and reporting systems that turn raw data into decisive action.",
    deliverables: ["Executive Dashboards", "Revenue Attribution", "KPI Framework", "Predictive Analytics"],
  },
  {
    number: "06",
    title: "Demand Generation & Pipeline",
    href: "/demand-generation",
    description: "Multi-channel demand generation that fills your pipeline with qualified opportunities, consistently, predictably, and at scale. Not campaigns. A system.",
    deliverables: ["Multi-Channel Campaigns", "Content Strategy", "Outbound Engine", "Pipeline Reporting"],
  },
];

function useInView(threshold = 0.12) {
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

function ServiceCard({ number, title, href, description, deliverables, index, inView }: {
  number: string; title: string; href: string; description: string;
  deliverables: string[]; index: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [scanPos, setScanPos] = useState(-100);

  useEffect(() => {
    if (!hovered) { setScanPos(-100); return; }
    setScanPos(-100);
    const t = setTimeout(() => setScanPos(110), 20);
    return () => clearTimeout(t);
  }, [hovered]);

  return (
    <div
      className={`reveal stagger-${index + 1}${inView ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link href={href} style={{ textDecoration: "none", display: "block" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            background: hovered ? "rgba(216,115,7,0.07)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? "rgba(216,115,7,0.45)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: 10,
            padding: "36px 40px",
            display: "grid", gridTemplateColumns: "72px 1fr auto",
            gap: 32, alignItems: "center",
            marginBottom: 12,
            overflow: "hidden",
            transition: "background 0.3s ease, border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease",
            transform: hovered ? "translateX(6px)" : "translateX(0)",
            boxShadow: hovered ? "0 8px 40px rgba(216,115,7,0.12), inset 0 0 0 1px rgba(216,115,7,0.1)" : "none",
          }}
        >
          {/* Scan line effect on hover */}
          <div style={{
            position: "absolute", top: 0, left: `${scanPos}%`, width: "40%", height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(0,220,255,0.05), transparent)",
            transform: "skewX(-12deg)",
            transition: hovered ? "left 0.55s ease" : "none",
            pointerEvents: "none", zIndex: 0,
          }} />

          {/* Left copper accent bar */}
          <div style={{
            position: "absolute", left: 0, top: "20%", bottom: "20%", width: 3,
            background: "#d87307",
            borderRadius: 2,
            transform: hovered ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }} />

          {/* Number */}
          <div style={{
            position: "relative", zIndex: 1,
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
            fontSize: hovered ? 64 : 56, fontWeight: 700,
            color: hovered ? "#d87307" : "#d87307",
            lineHeight: 1, flexShrink: 0,
            textShadow: hovered
              ? "0 0 30px rgba(216,115,7,0.7), 0 0 60px rgba(216,115,7,0.3)"
              : "0 0 20px rgba(216,115,7,0.4)",
            transition: "font-size 0.25s ease, text-shadow 0.3s ease",
          }}>{number}</div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif",
              fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 36px)",
              textTransform: "uppercase", letterSpacing: "0.06em",
              color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.9)",
              marginBottom: 10,
              transition: "color 0.2s ease",
            }}>{title}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 16, maxWidth: 620 }}>{description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {deliverables.map((d, i) => (
                <span key={d} style={{
                  padding: "4px 12px",
                  border: `1px solid ${hovered ? "rgba(216,115,7,0.6)" : "rgba(216,115,7,0.35)"}`,
                  borderRadius: 4,
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307",
                  background: hovered ? "rgba(216,115,7,0.08)" : "transparent",
                  transition: `all 0.2s ease ${i * 0.04}s`,
                  transform: hovered ? "translateY(-1px)" : "translateY(0)",
                }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            position: "relative", zIndex: 1,
            color: "#d87307", flexShrink: 0,
            transform: hovered ? "translateX(6px)" : "translateX(0)",
            transition: "transform 0.25s ease",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const listView = useInView(0.05);
  const ctaView  = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <style>{`
        @keyframes scanLine {
          from { left: -40%; }
          to   { left: 110%; }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stripFlicker {
          0%,100% { opacity: 0.7; } 48% { opacity: 1; } 50% { opacity: 0.5; } 52% { opacity: 1; }
        }
        .strip-item { animation: stripFlicker 6s ease-in-out infinite; }
        .strip-item:nth-child(2) { animation-delay: 1.5s; }
        .strip-item:nth-child(3) { animation-delay: 3s; }
        .strip-item:nth-child(4) { animation-delay: 4.5s; }
      `}</style>

      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "55vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-barn.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.45)" }} />

        {/* Animated horizontal scan lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
          {[0.2, 0.55, 0.8].map((top, i) => (
            <div key={i} style={{
              position: "absolute", top: `${top * 100}%`, left: "-40%", width: "40%", height: 1,
              background: "linear-gradient(90deg, transparent, rgba(0,220,255,0.3), transparent)",
              animation: `scanLine ${5 + i * 1.5}s linear ${i * 1.8}s infinite`,
            }} />
          ))}
        </div>

        <div ref={heroRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p className={`reveal stagger-1${heroVisible ? " visible" : ""}`}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
            What We Do
          </p>
          <h1 className={`reveal stagger-2${heroVisible ? " visible" : ""}`} style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            Our Services
          </h1>
          <p className={`reveal stagger-3${heroVisible ? " visible" : ""}`} style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 600 }}>
            Six integrated capabilities that work together as a complete revenue system, not isolated services, but one unified engine.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section style={{ background: "#0F1B2D", borderBottom: "1px solid rgba(216,115,7,0.25)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {["Strategy → Execution", "AI-Powered Systems", "Full-Funnel Visibility", "Compounding Growth"].map((item, i) => (
            <div key={item} className="strip-item" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {i > 0 && <span style={{ color: "rgba(216,115,7,0.4)", fontSize: 18, marginRight: 2 }}>·</span>}
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div ref={listView.ref} style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column" }}>
          {services.map(({ number, title, href, description, deliverables }, i) => (
            <ServiceCard
              key={href}
              number={number} title={title} href={href}
              description={description} deliverables={deliverables}
              index={i} inView={listView.inView}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-leather">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #d87307 30%, #d87307 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(216,115,7,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div ref={ctaView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className={`reveal stagger-1${ctaView.inView ? " visible" : ""}`}>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              Not Sure Where To Start?
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div className={`reveal stagger-2${ctaView.inView ? " visible" : ""}`}>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a strategy session and we&apos;ll map the exact services your business needs to build a complete revenue engine.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/about" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>Meet The Team →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
