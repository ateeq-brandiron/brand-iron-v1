import Link from "next/link";

const engineComponents = [
  {
    step: "01", title: "Current State Assessment",
    desc: "We map your existing revenue infrastructure — people, process, technology, and data — to identify gaps and growth leakage points.",
    items: ["Revenue flow mapping", "Pipeline analysis", "Technology audit", "Team structure review"],
  },
  {
    step: "02", title: "Revenue Engine Model",
    desc: "We design the integrated system that will power your growth — aligned to your market, customers, and competitive position.",
    items: ["Ideal customer profile", "Revenue model design", "Channel strategy", "Growth levers identification"],
  },
  {
    step: "03", title: "Revenue Leak Analysis",
    desc: "We identify exactly where revenue is being lost across marketing, sales, and customer success — and quantify the opportunity.",
    items: ["Funnel conversion analysis", "Sales cycle assessment", "Retention & expansion gaps", "Attribution modeling"],
  },
  {
    step: "04", title: "Revenue Architecture",
    desc: "We design the systems, processes, and technology stack that will power predictable, scalable revenue growth.",
    items: ["CRM architecture", "Sales process design", "Marketing infrastructure", "Data & reporting framework"],
  },
  {
    step: "05", title: "Transformation Roadmap",
    desc: "A prioritized, phased implementation plan that delivers quick wins while building long-term revenue infrastructure.",
    items: ["90-day quick wins", "6-month milestones", "12-month transformation plan", "Resource requirements"],
  },
  {
    step: "06", title: "Revenue Intelligence",
    desc: "Executive dashboards and KPI frameworks that give leadership real-time visibility into revenue performance.",
    items: ["Executive dashboards", "KPI frameworks", "Forecasting models", "Attribution reporting"],
  },
];

const engagementOptions = [
  {
    title: "Revenue Engine Assessment",
    timeline: "2-4 Weeks",
    desc: "A comprehensive audit of your current revenue infrastructure with a detailed roadmap for transformation.",
    includes: ["Revenue flow analysis", "Technology audit", "Competitive benchmark", "Transformation roadmap", "Executive presentation"],
  },
  {
    title: "Revenue Engine Build",
    timeline: "3-6 Months",
    desc: "Full design and implementation of your integrated revenue engine — from strategy through execution.",
    includes: ["Full assessment", "Strategy development", "CRM build & optimization", "AI & automation deployment", "Team enablement", "Ongoing intelligence"],
    featured: true,
  },
  {
    title: "Revenue Engine Advisory",
    timeline: "Ongoing",
    desc: "Embedded executive advisory to guide your team through continuous revenue optimization.",
    includes: ["Monthly strategy sessions", "Performance reviews", "Optimization recommendations", "Technology guidance", "Team coaching"],
  },
];

export default function RevenueEnginePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 120, background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "50%",
          backgroundImage: "url('/images/bg-haybales.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.06,
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 20,
            }}>Revenue Engine Framework</span>
            <h1 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 28,
            }}>
              The Integrated System That Drives{" "}
              <span style={{ color: "#d87307" }}>Predictable Revenue Growth</span>
            </h1>
            <p style={{ fontSize: 20, color: "#444444", lineHeight: 1.7, marginBottom: 48, maxWidth: 640 }}>
              Most companies have the pieces. Strategy. Technology. Talent. The Revenue Engine is how you connect them into a system that compounds growth.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>Book Strategy Session</Link>
              <Link href="#engagement" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#1c3652", fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 6, textDecoration: "none", border: "2px solid #1c3652" }}>View Engagement Options</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Components */}
      <section style={{ padding: "120px 0", background: "#F8F8F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>The Framework</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              Revenue Engine <span style={{ color: "#d87307" }}>Components</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {engineComponents.map((comp) => (
              <div key={comp.step} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13,
                    color: "#d87307", background: "#FFF7ED", padding: "4px 10px",
                    borderRadius: 8, flexShrink: 0,
                  }}>{comp.step}</span>
                  <div>
                    <h3 style={{
                      fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 24,
                      color: "#0F1B2D", marginBottom: 12,
                    }}>{comp.title}</h3>
                    <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 20 }}>{comp.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {comp.items.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0 }}></span>
                          <span style={{ fontSize: 14, color: "#444444" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section style={{ padding: "120px 0", background: "#0D1A2E" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>Outcomes We Drive</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF",
            }}>
              KPIs That <span style={{ color: "#d87307" }}>Actually Matter</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { metric: "Pipeline Growth", color: "#d87307" },
              { metric: "Revenue Per Lead", color: "#d87307" },
              { metric: "Sales Cycle Length", color: "#1c3652" },
              { metric: "Customer Acquisition Cost", color: "#d87307" },
              { metric: "Customer Lifetime Value", color: "#d87307" },
              { metric: "Win Rate", color: "#1c3652" },
              { metric: "Revenue Predictability", color: "#d87307" },
              { metric: "Marketing ROI", color: "#d87307" },
            ].map((kpi) => (
              <div key={kpi.metric} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "20px 24px", textAlign: "center",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: kpi.color, margin: "0 auto 12px" }}></div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, color: "#FFFFFF" }}>{kpi.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section id="engagement" style={{ padding: "120px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>Engagement Options</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              How We <span style={{ color: "#d87307" }}>Work Together</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {engagementOptions.map((opt) => (
              <div key={opt.title} style={{
                background: opt.featured ? "#d87307" : "#FFFFFF",
                border: `1px solid ${opt.featured ? "#d87307" : "#E8E8E8"}`,
                borderRadius: 20, padding: 32,
                boxShadow: opt.featured ? "0px 20px 50px rgba(216,115,7,0.3)" : "0px 10px 30px rgba(0,0,0,0.05)",
              }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
                    color: opt.featured ? "rgba(255,255,255,0.7)" : "#d87307",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>{opt.timeline}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 26,
                  color: opt.featured ? "#FFFFFF" : "#111111", marginBottom: 16, lineHeight: 1.3,
                }}>{opt.title}</h3>
                <p style={{ fontSize: 15, color: opt.featured ? "rgba(255,255,255,0.85)" : "#555555", lineHeight: 1.6, marginBottom: 24 }}>
                  {opt.desc}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {opt.includes.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: opt.featured ? "#FFFFFF" : "#d87307", fontSize: 16, fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: 14, color: opt.featured ? "rgba(255,255,255,0.9)" : "#444444" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" style={{
                  display: "block", textAlign: "center",
                  background: opt.featured ? "#FFFFFF" : "#d87307",
                  color: opt.featured ? "#d87307" : "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15,
                  padding: "12px 24px", borderRadius: 12, textDecoration: "none",
                }}>
                  Book Strategy Session
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 0", background: "#d87307", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/bg-barn.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.15, mixBlendMode: "multiply",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em",
            color: "#FFFFFF", marginBottom: 24,
          }}>
            Ready To Build Your Revenue Engine?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.88)", maxWidth: 520, margin: "0 auto 48px" }}>
            Start with a Revenue Strategy Session to identify where you&apos;re leaving growth on the table.
          </p>
          <a href="mailto:contact@brandiron.com" style={{
            display: "inline-flex", alignItems: "center",
            background: "#FFFFFF", color: "#d87307",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 17,
            padding: "16px 36px", borderRadius: 12, textDecoration: "none",
          }}>
            Book A Revenue Strategy Session →
          </a>
        </div>
      </section>
    </>
  );
}
