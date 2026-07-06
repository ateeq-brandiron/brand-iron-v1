import Link from "next/link";

const services = [
  {
    title: "Investor Decks",
    icon: "📋",
    desc: "Compelling pitch decks that communicate your vision, market opportunity, traction, and competitive advantage in a format investors respond to.",
    deliverables: ["Executive summary deck", "Full investor presentation", "Data room support", "Narrative development"],
  },
  {
    title: "Fundraising Strategy",
    icon: "🎯",
    desc: "A structured approach to capital raising that maximizes your probability of success and minimizes time away from building.",
    deliverables: ["Investor targeting strategy", "Raise timeline planning", "Valuation framing", "Terms negotiation prep"],
  },
  {
    title: "Market Validation",
    icon: "🔍",
    desc: "Rigorous market sizing, competitive analysis, and customer validation that gives investors confidence in your opportunity.",
    deliverables: ["TAM/SAM/SOM analysis", "Competitive landscape", "Customer evidence framework", "Market timing narrative"],
  },
  {
    title: "Financial Storytelling",
    icon: "📈",
    desc: "Turn your financial model into a compelling growth narrative that investors understand and trust.",
    deliverables: ["Financial narrative development", "Unit economics clarity", "Growth model presentation", "Use of funds story"],
  },
  {
    title: "Investor Messaging",
    icon: "💬",
    desc: "Craft the positioning and messaging that resonates with your target investor class — from seed funds to growth equity.",
    deliverables: ["Investor value proposition", "Positioning workshop", "Q&A preparation", "One-pager development"],
  },
  {
    title: "Investor Outreach Support",
    icon: "🤝",
    desc: "Systematic outreach strategy and materials to build pipeline with the right investors at the right time.",
    deliverables: ["Investor list development", "Outreach templates", "LinkedIn strategy", "Meeting prep support"],
  },
];

const capitalStats = [
  { number: "$5B+", label: "Capital Raised by Clients" },
  { number: "200+", label: "Investor Presentations Delivered" },
  { number: "Seed to Series D", label: "Raise Stage Experience" },
  { number: "25+ Years", label: "Fundraising Strategy Experience" },
];

const raiseProcess = [
  { step: "01", title: "Investor Readiness Audit", desc: "Assess your current narrative, financials, team story, and market position from an investor&apos;s perspective." },
  { step: "02", title: "Messaging & Narrative", desc: "Develop the core investment thesis, positioning, and narrative arc that investors will connect with." },
  { step: "03", title: "Materials Development", desc: "Build the pitch deck, one-pager, data room, and supporting materials to institutional standard." },
  { step: "04", title: "Investor Targeting", desc: "Identify and prioritize the right investors for your stage, sector, and raise objectives." },
  { step: "05", title: "Outreach & Pipeline", desc: "Execute systematic outreach to build investor pipeline and manage the process efficiently." },
  { step: "06", title: "Meeting Preparation", desc: "Prepare your leadership team for investor meetings, due diligence, and term negotiation." },
];

export default function CapitalRaisePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 120, background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 780 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 20,
            }}>Capital Raise Services</span>
            <h1 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 28,
            }}>
              Helping Companies Secure Capital And{" "}
              <span style={{ color: "#d87307" }}>Accelerate Growth</span>
            </h1>
            <p style={{ fontSize: 20, color: "#444444", lineHeight: 1.7, marginBottom: 48, maxWidth: 680 }}>
              BrandIron has helped organizations raise billions in capital through investor-ready positioning, messaging, pitch development, and growth strategies.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary">Book Capital Raise Strategy Session</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 0", background: "#F8F8F8", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {capitalStats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 40, color: "#d87307", lineHeight: 1 }}>{stat.number}</p>
                <p style={{ fontSize: 14, color: "#666666", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "120px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>Services</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              Everything You Need To <span style={{ color: "#d87307" }}>Close Your Round</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {services.map((service) => (
              <div key={service.title} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 22, textTransform: "uppercase", letterSpacing: "0.04em", color: "#0F1B2D", marginBottom: 12 }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.6, marginBottom: 20 }}>{service.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {service.deliverables.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#d87307", fontWeight: 700, fontSize: 13 }}>✓</span>
                      <span style={{ fontSize: 13, color: "#444444" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "120px 0", background: "#F8F8F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>The Process</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              The Capital Raise <span style={{ color: "#d87307" }}>Process</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {raiseProcess.map((p) => (
              <div key={p.step} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13,
                  color: "#d87307", background: "#FFF7ED", padding: "6px 12px",
                  borderRadius: 8, flexShrink: 0,
                }}>{p.step}</span>
                <div>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.04em", color: "#0F1B2D", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.6 }}
                     dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 0", background: "#0D1A2E" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
            fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "0.02em", textTransform: "uppercase",
            color: "#FFFFFF", marginBottom: 24,
          }}>
            Ready To Raise Your Next Round?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 520, margin: "0 auto 48px" }}>
            Start with a Capital Raise Strategy Session to assess your investor readiness.
          </p>
          <a href="mailto:contact@brandiron.com" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
            Book A Capital Raise Strategy Session →
          </a>
        </div>
      </section>
    </>
  );
}
