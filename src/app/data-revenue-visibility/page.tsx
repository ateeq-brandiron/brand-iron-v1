"use client";
import Link from "next/link";

const dashboardCards = [
  {
    title: "Revenue Dashboard",
    body: "Pipeline, bookings, churn, and expansion — all in one live view updated automatically.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="18" width="6" height="14" rx="1" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="13" y="10" width="6" height="22" rx="1" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="4" width="6" height="28" rx="1" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Marketing Attribution",
    body: "First-touch, last-touch, and multi-touch models showing true channel ROI.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="7" x2="12" y2="13" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="5" x2="18" y2="13" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="7" x2="24" y2="13" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 13 L26 13 L22 21 L14 21 Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M14 21 L12 29 L18 25 L24 29 L22 21" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Sales Performance",
    body: "Rep-level activity, conversion rates, deal velocity, and forecast accuracy.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="11" r="5" stroke="#d87307" strokeWidth="2"/>
        <path d="M8 30 C8 23 28 23 28 30" stroke="#d87307" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <polyline points="26,17 30,13 26,9" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="22" y1="13" x2="30" y2="13" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Revenue Forecasting",
    body: "AI-assisted forecasting that gives leadership confident pipeline projections.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="32" x2="32" y2="32" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="32" x2="4" y2="6" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="4,28 10,20 16,22 22,14 28,16" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="28" y1="16" x2="32" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeDasharray="2.5 2"/>
      </svg>
    ),
  },
  {
    title: "CAC & LTV Analysis",
    body: "Customer acquisition cost and lifetime value tracked by segment, channel, and cohort.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="18" r="9" stroke="#d87307" strokeWidth="2"/>
        <circle cx="22" cy="18" r="9" stroke="#d87307" strokeWidth="2"/>
        <polyline points="11,15 14,12 17,15" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="14" y1="12" x2="14" y2="24" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="19,21 22,24 25,21" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="22" y1="12" x2="22" y2="24" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Funnel Conversion",
    body: "Stage-by-stage conversion rates with automated alerts when metrics drop.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 5 L30 5 L24 13 L12 13 Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M12 13 L24 13 L21 21 L15 21 Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M15 21 L21 21 L19.5 29 L16.5 29 Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <text x="24" y="30" fill="#d87307" fontSize="8" fontFamily="Montserrat, sans-serif" fontWeight="700">%</text>
      </svg>
    ),
  },
];

export default function DataRevenueVisibilityPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.78)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Data &<br /><span style={{ color: "#d87307" }}>Revenue Visibility</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Everything working together. We build the data infrastructure and dashboards that give you complete, real-time visibility across every revenue function.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>The Problem</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Flying Blind</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Marketing, sales, and finance data live in different tools with no unified view",
                "Leadership asks for revenue forecasts and no one can answer confidently",
                "You can't tell which campaigns, channels, or reps are driving real ROI",
                "Data exists but takes days to pull into a usable report",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.55 }}>
                  <span style={{ color: "#d87307", fontSize: 18, flexShrink: 0 }}>✗</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>The Solution</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 2.5vw, 36px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 24 }}>Full Revenue Intelligence</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Single source of truth — all revenue data unified in one intelligence layer",
                "Live dashboards showing pipeline, CAC, LTV, win rate, and velocity in real-time",
                "Attribution models that show exactly which activities drive closed revenue",
                "Automated reports delivered to leadership every morning — no manual effort",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.55 }}>
                  <span style={{ color: "#22C55E", fontSize: 18, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What We Build</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {dashboardCards.map(({ icon, title, body }) => (
              <div key={title} className="dark-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "28px 24px" }}>
                <div style={{ marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>{body}</p>
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
              Get Complete Revenue Visibility
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a session and we&apos;ll audit your current data setup and show you exactly what&apos;s possible.
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
