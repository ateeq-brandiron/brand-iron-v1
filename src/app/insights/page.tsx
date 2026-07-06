import Link from "next/link";

const articles = [
  {
    category: "AI Transformation",
    title: "Why 90% of AI Implementations Fail to Create Business Value",
    excerpt: "Most organizations approach AI as a technology project. The ones that succeed treat it as a business transformation initiative with technology as the enabler.",
    readTime: "8 min read",
    date: "June 2026",
  },
  {
    category: "Revenue Strategy",
    title: "The Revenue System Problem: Why Disconnected Teams Destroy Growth",
    excerpt: "Marketing, sales, and operations all working hard but growth is stagnant. The problem isn't effort — it's architecture.",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    category: "Revenue Operations",
    title: "CRM as a Revenue Engine: Beyond Contact Management",
    excerpt: "A CRM that only tracks deals is a missed opportunity. Here's how the highest-performing revenue teams use their CRM to accelerate growth.",
    readTime: "7 min read",
    date: "May 2026",
  },
  {
    category: "Capital Raise",
    title: "What Investors Actually Want to See in Your Pitch Deck in 2026",
    excerpt: "The bar has changed. In a market with more scrutiny and less capital chasing deals, your story needs to be airtight.",
    readTime: "9 min read",
    date: "April 2026",
  },
  {
    category: "Demand Generation",
    title: "The Death of the MQL: How to Measure Marketing in a Revenue-Focused World",
    excerpt: "Marketing qualified leads are a vanity metric that disconnects marketing from revenue outcomes. Here's what to measure instead.",
    readTime: "5 min read",
    date: "April 2026",
  },
  {
    category: "AI Transformation",
    title: "AI Agents for Revenue Teams: What Works and What Doesn't",
    excerpt: "We've deployed AI agents across dozens of revenue organizations. Here's what we've learned about where they create real value.",
    readTime: "10 min read",
    date: "March 2026",
  },
  {
    category: "Automation",
    title: "Revenue Automation That Actually Works: A Practical Framework",
    excerpt: "Stop automating tasks and start automating outcomes. The difference determines whether automation creates leverage or just activity.",
    readTime: "7 min read",
    date: "March 2026",
  },
  {
    category: "Executive Leadership",
    title: "The CEO's Guide to Revenue Transformation in 2026",
    excerpt: "What separates companies that compound growth from those that plateau isn't strategy — it's the system they use to execute it.",
    readTime: "12 min read",
    date: "February 2026",
  },
  {
    category: "Digital Transformation",
    title: "Integrating AI Into Your Revenue Stack Without Starting Over",
    excerpt: "You don't need to replace your existing technology to transform with AI. Here's how to layer intelligence on what you already have.",
    readTime: "8 min read",
    date: "February 2026",
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "50vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.38)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Insights Hub</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            Revenue Intelligence
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560 }}>
            Perspectives on AI transformation, revenue operations, growth strategy, and the future of how companies generate revenue.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {articles.map(({ category, title, excerpt, readTime, date }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column",
                cursor: "pointer", transition: "border-color 0.2s",
              }}>
                <span style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 16, width: "fit-content" }}>{category}</span>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 17, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.35, flex: 1 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>{excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{date}</span>
                  <span style={{ fontSize: 12, color: "#d87307" }}>{readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-leather">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #d87307 30%, #d87307 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(216,115,7,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              Revenue Intelligence. Delivered Monthly.
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Insights on AI, revenue strategy, and growth from the BrandIron team.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/services" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>Explore Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
