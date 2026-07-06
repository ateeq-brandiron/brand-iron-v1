import Link from "next/link";

const maturityLevels = [
  { level: "Level 1", title: "AI Aware", desc: "Leadership is aware of AI but has no formal strategy or implementation." },
  { level: "Level 2", title: "AI Experimenting", desc: "Individual tools deployed but no integrated strategy or measurable ROI." },
  { level: "Level 3", title: "AI Adopting", desc: "AI integrated into key workflows with some measurable business impact." },
  { level: "Level 4", title: "AI Scaling", desc: "AI strategy drives business decisions and is core to competitive positioning." },
  { level: "Level 5", title: "AI Transforming", desc: "AI powers every revenue function creating compounding competitive advantage." },
];

const useCases = [
  {
    dept: "Sales",
    color: "#d87307",
    cases: ["AI-powered lead scoring", "Automated outreach sequences", "Deal intelligence & coaching", "Pipeline forecasting", "Competitor intelligence"],
  },
  {
    dept: "Marketing",
    color: "#d87307",
    cases: ["Content generation & optimization", "Audience segmentation", "Campaign performance intelligence", "SEO automation", "Personalization at scale"],
  },
  {
    dept: "Customer Success",
    color: "#d87307",
    cases: ["Churn prediction", "AI support agents", "Health scoring automation", "Expansion opportunity detection", "Voice of customer analysis"],
  },
  {
    dept: "Operations",
    color: "#d87307",
    cases: ["Process automation", "Document intelligence", "Workflow optimization", "Reporting automation", "Resource planning AI"],
  },
];

const roadmapPhases = [
  { phase: "Phase 1", title: "AI Readiness Assessment", weeks: "Weeks 1-2", desc: "Audit current AI maturity, technology stack, data infrastructure, and identify highest-value opportunities." },
  { phase: "Phase 2", title: "Strategy & Roadmap", weeks: "Weeks 3-4", desc: "Develop prioritized AI roadmap aligned to revenue objectives with clear ROI projections." },
  { phase: "Phase 3", title: "Pilot Deployment", weeks: "Weeks 5-10", desc: "Deploy 2-3 high-impact AI use cases to validate ROI and build organizational confidence." },
  { phase: "Phase 4", title: "Scale & Optimize", weeks: "Months 3-6", desc: "Scale proven solutions, deploy additional use cases, and establish AI governance framework." },
  { phase: "Phase 5", title: "AI-First Organization", weeks: "Months 6-12", desc: "Embed AI into all revenue functions, build internal capability, and establish continuous improvement systems." },
];

export default function AITransformationPage() {
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
          <div style={{ maxWidth: 780 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 20,
            }}>AI Transformation</span>
            <h1 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 28,
            }}>
              AI Without Strategy Creates Complexity.{" "}
              <span style={{ color: "#d87307" }}>AI With Strategy Creates Revenue.</span>
            </h1>
            <p style={{ fontSize: 20, color: "#444444", lineHeight: 1.7, marginBottom: 16, maxWidth: 680 }}>
              Most organizations are experimenting with AI. Few are transforming their business.
            </p>
            <p style={{ fontSize: 20, color: "#444444", lineHeight: 1.7, marginBottom: 48, maxWidth: 680 }}>
              BrandIron helps leadership teams identify where AI creates measurable business value and deploys practical solutions aligned with growth objectives.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary" style={{ background: "#d87307", fontSize: 16, padding: "14px 28px" }}>
                Book AI Strategy Session
              </Link>
              <Link href="#roadmap" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#1c3652", fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: 6, textDecoration: "none", border: "2px solid #1c3652" }}>
                View AI Roadmap Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Maturity */}
      <section style={{ padding: "120px 0", background: "#F8F8F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>AI Maturity Model</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              Where Does Your Organization Stand?
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {maturityLevels.map((m, i) => (
              <div key={m.level} style={{
                display: "flex", alignItems: "center", gap: 24,
                background: i === 4 ? "#1c3652" : "#FFFFFF",
                border: "1px solid #E8E8E8",
                borderRadius: i === 0 ? "16px 16px 0 0" : i === 4 ? "0 0 16px 16px" : 0,
                padding: "24px 32px",
                borderBottom: i < 4 ? "none" : "1px solid #E8E8E8",
              }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
                  fontSize: 13, color: i === 4 ? "rgba(255,255,255,0.85)" : "#d87307",
                  minWidth: 80,
                }}>{m.level}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 18,
                    color: i === 4 ? "#FFFFFF" : "#111111", marginBottom: 4,
                  }}>{m.title}</h3>
                  <p style={{ fontSize: 15, color: i === 4 ? "rgba(255,255,255,0.8)" : "#555555" }}>{m.desc}</p>
                </div>
                <div style={{
                  width: `${(i + 1) * 20}%`, height: 8, borderRadius: 4,
                  background: i === 4 ? "rgba(255,255,255,0.3)" : "#E8E8E8",
                  minWidth: 60, maxWidth: 160,
                }}>
                  <div style={{
                    width: "100%", height: "100%", borderRadius: 4,
                    background: i === 4 ? "#FFFFFF" : "#d87307",
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Department */}
      <section style={{ padding: "120px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>AI Use Cases</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              Department-Level <span style={{ color: "#d87307" }}>AI Opportunities</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {useCases.map((uc) => (
              <div key={uc.dept} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8" }}>
                <h3 style={{
                  fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 22,
                  color: uc.color, marginBottom: 20,
                }}>{uc.dept} AI</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {uc.cases.map((c) => (
                    <li key={c} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: uc.color, flexShrink: 0 }}></span>
                      <span style={{ fontSize: 15, color: "#444444" }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" style={{ padding: "120px 0", background: "#F8F8F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>Implementation</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D",
            }}>
              AI Transformation <span style={{ color: "#d87307" }}>Roadmap</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {roadmapPhases.map((phase, i) => (
              <div key={phase.phase} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8", display: "flex", gap: 32, alignItems: "flex-start" }}>
                <div style={{
                  background: "#1c3652", color: "#FFFFFF",
                  borderRadius: 12, padding: "12px 20px", flexShrink: 0, textAlign: "center",
                }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, opacity: 0.8 }}>{phase.phase}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 22 }}>{String(i + 1).padStart(2, "0")}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F1B2D" }}>
                      {phase.title}
                    </h3>
                    <span style={{
                      background: "#FFF7ED", color: "#d87307",
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12,
                      padding: "3px 10px", borderRadius: 100,
                    }}>{phase.weeks}</span>
                  </div>
                  <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6 }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Governance */}
      <section style={{ padding: "120px 0", background: "#1c3652" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <span style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#d87307", display: "block", marginBottom: 16,
              }}>AI Governance</span>
              <h2 style={{
                fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
                fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF",
                marginBottom: 24, lineHeight: 1.2,
              }}>
                Responsible AI That <span style={{ color: "#d87307" }}>Scales With Confidence</span>
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                Every AI deployment we design includes governance frameworks that ensure your AI systems are reliable, compliant, and trusted by your team.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Data Security & Privacy", "AI Ethics Framework", "Human-in-the-Loop Design", "Model Monitoring & Accuracy", "Compliance Documentation", "Team Training & Adoption"].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)",
                  borderRadius: 12, padding: "16px 24px",
                }}>
                  <span style={{ color: "#d87307", fontSize: 16, fontWeight: 700 }}>✓</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: "#FFFFFF" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 0", background: "#d87307", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/bg-fence.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
          opacity: 0.12,
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
            fontSize: "clamp(30px, 4vw, 52px)", textTransform: "uppercase", letterSpacing: "0.02em",
            color: "#FFFFFF", marginBottom: 24,
          }}>
            Ready To Make AI Work For Your Business?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 520, margin: "0 auto 48px" }}>
            Start with an AI Readiness Assessment to identify your highest-value AI opportunities.
          </p>
          <a href="mailto:contact@brandiron.com" style={{
            display: "inline-flex", alignItems: "center",
            background: "#FFFFFF", color: "#d87307",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 17,
            padding: "16px 36px", borderRadius: 12, textDecoration: "none",
          }}>
            Book AI Strategy Session →
          </a>
        </div>
      </section>
    </>
  );
}
