"use client";
import Link from "next/link";

// SVG Icons — copper stroke, no fill, 44x44 viewBox 0 0 36 36

function IconStrategyDoc() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Document body */}
      <rect x="6" y="4" width="18" height="24" rx="2" stroke="#d87307" strokeWidth="2.5" />
      <line x1="10" y1="11" x2="20" y2="11" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="15" x2="20" y2="15" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="19" x2="16" y2="19" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkle star top-right */}
      <line x1="26" y1="4" x2="26" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="23" y1="7" x2="29" y2="7" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="23.8" y1="4.8" x2="28.2" y2="9.2" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28.2" y1="4.8" x2="23.8" y2="9.2" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconRoadmap() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Horizontal timeline line */}
      <line x1="4" y1="18" x2="32" y2="18" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" />
      {/* 4 milestone dots */}
      <circle cx="8" cy="18" r="3" stroke="#d87307" strokeWidth="2" />
      <circle cx="16" cy="18" r="3" stroke="#d87307" strokeWidth="2" />
      <circle cx="24" cy="18" r="3" stroke="#d87307" strokeWidth="2" />
      <circle cx="32" cy="18" r="3" stroke="#d87307" strokeWidth="2" />
      {/* Tick marks below each dot */}
      <line x1="8" y1="23" x2="8" y2="27" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="23" x2="16" y2="27" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="23" x2="24" y2="27" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="23" x2="32" y2="27" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconROI() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* X axis */}
      <line x1="4" y1="30" x2="32" y2="30" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      {/* Bar chart */}
      <rect x="5" y="20" width="5" height="10" stroke="#d87307" strokeWidth="2" />
      <rect x="13" y="14" width="5" height="16" stroke="#d87307" strokeWidth="2" />
      <rect x="21" y="10" width="5" height="20" stroke="#d87307" strokeWidth="2" />
      {/* Upward trend line */}
      <polyline points="7,22 15,16 23,10 30,6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow head */}
      <polyline points="27,5 30,6 29,9" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconVendor() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left circle */}
      <circle cx="14" cy="18" r="9" stroke="#d87307" strokeWidth="2" />
      {/* Right circle */}
      <circle cx="22" cy="18" r="9" stroke="#d87307" strokeWidth="2" />
      {/* Checkmark in overlap centre */}
      <polyline points="15,18 17.5,21 22,15" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const outcomeItems = [
  { icon: <IconStrategyDoc />, title: "AI Strategy Document", body: "A clear, board-ready AI strategy aligned to your revenue goals." },
  { icon: <IconRoadmap />, title: "Phased Roadmap", body: "Quarter-by-quarter implementation plan with milestones and KPIs." },
  { icon: <IconROI />, title: "ROI Projections", body: "Quantified estimates of revenue impact and cost savings per initiative." },
  { icon: <IconVendor />, title: "Vendor Shortlist", body: "Curated recommendations of tools and partners that fit your stack and budget." },
];

export default function AIStrategyPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,54,82,0.85) 0%, rgba(20,32,55,0.75) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            AI Strategy &<br /><span style={{ color: "#d87307" }}>Consulting</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Know where to go before you start moving. We build your AI roadmap so every investment compounds toward revenue.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* What It Is */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>What We Do</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Strategy Before Execution</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>
              Most companies rush into AI tools without a plan. The result: fragmented tech, wasted spend, and zero competitive advantage. We fix that by starting with strategy.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#555" }}>
              Our AI Strategy engagement maps your current state, identifies the highest-ROI opportunities, and builds a phased roadmap your team can actually execute — tied directly to revenue outcomes.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {["AI Readiness Audit", "Use Case Prioritisation", "ROI Modelling", "Vendor Selection", "Implementation Roadmap", "Team Enablement Plan"].map(item => (
              <div key={item} className="process-card" style={{ background: "#F8F7F4", borderRadius: 8, padding: "20px", borderTop: "2px solid #d87307" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>How It Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "Discovery Call", body: "We learn your business model, current tools, goals, and gaps — no templates, just real conversation." },
              { n: "02", title: "AI Audit", body: "We assess your data infrastructure, team capability, and existing AI initiatives against revenue objectives." },
              { n: "03", title: "Opportunity Map", body: "We identify and score AI use cases by ROI potential, effort, and strategic fit." },
              { n: "04", title: "Roadmap Delivery", body: "You receive a phased, prioritised AI roadmap with success metrics, budget guidance, and vendor recommendations." },
            ].map(({ n, title, body }) => (
              <div key={n} className="process-card" style={{ borderTop: "3px solid #d87307", padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 44, fontWeight: 700, color: "rgba(216,115,7,0.65)", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 48 }}>What You Walk Away With</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, textAlign: "left" }}>
            {outcomeItems.map(({ icon, title, body }) => (
              <div key={title} className="outcome-card" style={{ background: "#FFFFFF", borderRadius: 8, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-leather">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #d87307 30%, #d87307 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(216,115,7,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              Ready to Build Your AI Strategy?
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a 30-minute strategy session and we&apos;ll show you exactly where AI can move the needle in your business.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/services" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>View All Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
