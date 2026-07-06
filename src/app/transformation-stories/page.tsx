import Link from "next/link";

const stories = [
  {
    id: 1,
    category: "Revenue Growth",
    industry: "Technology",
    client: "Series B SaaS Platform",
    headline: "147% Increase In Qualified Pipeline Within 6 Months",
    results: [{ number: "147%", label: "Pipeline Growth" }, { number: "3.2x", label: "Sales Velocity" }, { number: "68%", label: "Reduced CAC" }],
    challenge: "A high-growth SaaS company had built strong product-market fit but their revenue system was entirely reactive. Marketing produced leads that sales ignored, CRM data was unreliable, and leadership had no visibility into what was actually driving revenue.",
    solution: "BrandIron rebuilt the entire revenue architecture — repositioning the brand, implementing HubSpot with full pipeline intelligence, deploying AI-powered outbound, and creating executive dashboards that gave leadership real-time clarity.",
    tags: ["Revenue Strategy", "CRM Build", "AI Outbound", "Brand Positioning"],
    image: "/images/bg-fence.jpg",
  },
  {
    id: 2,
    category: "Capital Raise",
    industry: "Healthcare Technology",
    client: "Digital Health Platform",
    headline: "$40M Series B Secured With Investor-Ready Positioning",
    results: [{ number: "$40M", label: "Capital Raised" }, { number: "3", label: "New Markets Entered" }, { number: "8 Wks", label: "To Close" }],
    challenge: "A healthcare technology company had transformative technology but struggled to articulate their market opportunity, competitive moat, and growth narrative to institutional investors. Previous raise attempts had stalled at due diligence.",
    solution: "We developed a comprehensive investor positioning framework — refining the market sizing narrative, rebuilding the pitch deck, creating financial storytelling that connected unit economics to the growth thesis, and preparing leadership for institutional investor conversations.",
    tags: ["Capital Raise", "Investor Messaging", "Pitch Development", "Market Validation"],
    image: "/images/bg-haybales.jpg",
  },
  {
    id: 3,
    category: "AI Transformation",
    industry: "Financial Services",
    client: "Regional Financial Advisory Firm",
    headline: "AI Agents Deployed Across Sales & Service — 68% Less Manual Work",
    results: [{ number: "68%", label: "Manual Work Reduced" }, { number: "2.4x", label: "Conversion Rate" }, { number: "94%", label: "Client Satisfaction" }],
    challenge: "A financial advisory firm was losing competitive ground as larger firms deployed AI capabilities. Their team was spending 60% of time on manual processes — data entry, follow-ups, report generation — leaving little time for high-value client advisory work.",
    solution: "BrandIron conducted an AI Readiness Assessment, identified the highest-value automation opportunities, and deployed a suite of AI agents across sales qualification, client onboarding, reporting, and service operations.",
    tags: ["AI Agents", "Workflow Automation", "Sales AI", "Process Intelligence"],
    image: "/images/hero-saddle.jpg",
  },
  {
    id: 4,
    category: "Digital Transformation",
    industry: "Manufacturing",
    client: "Industrial Equipment Manufacturer",
    headline: "Full RevOps Overhaul Driving 2.3x Revenue Efficiency",
    results: [{ number: "2.3x", label: "Revenue Efficiency" }, { number: "41%", label: "Faster Sales Cycles" }, { number: "$8M+", label: "Pipeline Unlocked" }],
    challenge: "A manufacturing company with 25 years of operational excellence was leaving significant revenue on the table. Their sales team used spreadsheets, marketing had no digital presence, and leadership made decisions based on gut feel rather than data.",
    solution: "A comprehensive digital transformation spanning Salesforce implementation, digital demand generation, sales enablement content, and an executive intelligence dashboard that unified all revenue data into a single source of truth.",
    tags: ["CRM Implementation", "Demand Generation", "Revenue Intelligence", "Sales Enablement"],
    image: "/images/bg-barn.jpg",
  },
  {
    id: 5,
    category: "Market Expansion",
    industry: "Professional Services",
    client: "Management Consulting Firm",
    headline: "Entered 4 New Industry Verticals With Targeted GTM Strategies",
    results: [{ number: "4", label: "New Verticals" }, { number: "210%", label: "Revenue Growth" }, { number: "18 Mo", label: "Timeline" }],
    challenge: "A consulting firm was overly dependent on a single industry vertical and facing cyclical revenue swings. They needed to diversify but lacked the positioning clarity, messaging frameworks, and go-to-market infrastructure to credibly enter new markets.",
    solution: "BrandIron developed vertical-specific positioning and messaging for four target industries, built tailored content and demand generation programs for each, and implemented CRM segmentation that allowed precise measurement of expansion performance.",
    tags: ["GTM Strategy", "Brand Positioning", "Demand Generation", "Revenue Strategy"],
    image: "/images/bg-fence.jpg",
  },
  {
    id: 6,
    category: "Sales Automation",
    industry: "Real Estate Technology",
    client: "PropTech Scale-Up",
    headline: "Outbound Revenue Engine Generating 400+ Qualified Meetings Monthly",
    results: [{ number: "400+", label: "Meetings/Month" }, { number: "28%", label: "Meeting-to-Close" }, { number: "6x", label: "Pipeline ROI" }],
    challenge: "A PropTech company was entirely dependent on inbound leads from a declining organic source. They needed to build a scalable outbound engine but had no infrastructure, no sequences, no targeting data, and a sales team with no outbound experience.",
    solution: "Built a full outbound revenue engine: ICP definition, intent data sourcing, AI-assisted personalization engine, multi-channel sequences across email and LinkedIn, SDR playbooks, and a Salesforce pipeline built to track and optimize outbound performance.",
    tags: ["Outbound Systems", "Sales AI", "CRM Build", "Revenue Operations"],
    image: "/images/bg-barn.jpg",
  },
];

export default function TransformationStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,40,0.30)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Real Results. Real Impact.</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "transparent", WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800, lineHeight: 1.0, marginBottom: 28,
          }}>
            Transformation Stories
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560, marginBottom: 48 }}>
            Every engagement has a story. Here are some of the transformations we&apos;ve had the privilege of building alongside our clients.
          </p>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[["$5B+", "Capital Raised"], ["500+", "Initiatives Delivered"], ["25+", "Years Experience"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 48, fontWeight: 700, color: "#d87307", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section style={{ background: "#0D1A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {stories.map((story) => (
            <div key={story.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr" }}>
                {/* Image */}
                <div style={{
                  backgroundImage: `url('${story.image}')`, backgroundSize: "cover", backgroundPosition: "center",
                  minHeight: 340, position: "relative",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,40,0.45)" }} />
                  <div style={{ position: "absolute", top: 20, left: 20 }}>
                    <span style={{ padding: "4px 12px", background: "#d87307", borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF" }}>{story.category}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(10,20,40,0.9) 0%, transparent 100%)", padding: "32px 24px 20px", display: "flex", gap: 20 }}>
                    {story.results.map((r) => (
                      <div key={r.label}>
                        <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 28, fontWeight: 700, color: "#d87307", lineHeight: 1 }}>{r.number}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", padding: "3px 10px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 4 }}>{story.industry}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", padding: "3px 10px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 4 }}>{story.client}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(18px, 2vw, 24px)", textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 20, lineHeight: 1.2 }}>{story.headline}</h2>
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d87307", marginBottom: 6 }}>The Challenge</p>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{story.challenge}</p>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d87307", marginBottom: 6 }}>The Solution</p>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{story.solution}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {story.tags.map(tag => (
                      <span key={tag} style={{ padding: "4px 12px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d87307" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              Your Transformation Story Starts Here
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Every client engagement begins with understanding your current state and designing the system that will power your next stage of growth.
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
