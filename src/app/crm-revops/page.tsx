import Link from "next/link";

const platforms = [
  {
    name: "HubSpot",
    color: "#FF7A59",
    services: ["Portal setup & configuration", "Sales pipeline architecture", "Marketing automation", "Lead scoring & routing", "Custom reporting dashboards", "Integration & data migration"],
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    services: ["Org setup & customization", "CPQ & revenue cloud", "Sales process automation", "AppExchange integrations", "Einstein AI configuration", "Data quality & hygiene"],
  },
  {
    name: "GoHighLevel",
    color: "#00C16A",
    services: ["GHL setup & optimization", "Sales funnel automation", "SMS & email sequences", "Reputation management", "Client reporting", "Agency sub-account management"],
  },
];

const revopsServices = [
  {
    title: "Pipeline Optimization",
    icon: "📊",
    desc: "Redesign your sales pipeline to reflect how buyers actually buy — and eliminate the stages that slow you down.",
    items: ["Stage definition & criteria", "Velocity analysis", "Conversion benchmarking", "Pipeline health scoring"],
  },
  {
    title: "Revenue Operations",
    icon: "⚙️",
    desc: "Align Marketing, Sales, and Customer Success around unified processes, data, and accountability.",
    items: ["Cross-functional alignment", "Handoff process design", "SLA development", "Revenue accountability frameworks"],
  },
  {
    title: "Automation Services",
    icon: "🤖",
    desc: "Eliminate manual work that slows your team down and builds automation that scales.",
    items: ["Lead routing automation", "Follow-up sequences", "Data enrichment", "Task & activity automation"],
  },
  {
    title: "Reporting & Dashboards",
    icon: "📈",
    desc: "Give every leader in your organization visibility into the metrics that matter for their function.",
    items: ["Executive revenue dashboards", "Marketing attribution", "Sales performance reporting", "Customer health metrics"],
  },
];

export default function CRMRevOpsPage() {
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
            }}>CRM & Revenue Operations</span>
            <h1 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400,
              fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.1,
              textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 28,
            }}>
              Your CRM Should Drive Revenue.{" "}
              <span style={{ color: "#d87307" }}>Not Just Track It.</span>
            </h1>
            <p style={{ fontSize: 20, color: "#444444", lineHeight: 1.7, marginBottom: 48, maxWidth: 660 }}>
              Most CRM implementations fail because they&apos;re built to manage data, not accelerate revenue. BrandIron builds revenue operations infrastructure that drives performance at every stage of the customer journey.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary">Book RevOps Strategy Session</Link>
              <Link href="#platforms" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#1c3652", fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", padding: "13px 28px", borderRadius: 6, textDecoration: "none", border: "2px solid #1c3652" }}>View CRM Platforms</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Platforms */}
      <section id="platforms" style={{ padding: "120px 0", background: "#F8F8F8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>CRM Platforms</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "0.02em", textTransform: "uppercase", color: "#0F1B2D",
            }}>
              Expert Implementation Across <span style={{ color: "#d87307" }}>Leading Platforms</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {platforms.map((platform) => (
              <div key={platform.name} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: platform.color + "20", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 20,
                }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: platform.color }}></div>
                </div>
                <h3 style={{
                  fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 24,
                  textTransform: "uppercase", letterSpacing: "0.04em", color: "#0F1B2D", marginBottom: 20,
                }}>{platform.name}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {platform.services.map((s) => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: platform.color, flexShrink: 0 }}></span>
                      <span style={{ fontSize: 14, color: "#444444" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RevOps Services */}
      <section style={{ padding: "120px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#d87307", display: "block", marginBottom: 16,
            }}>Revenue Operations</span>
            <h2 style={{
              fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "0.02em", textTransform: "uppercase", color: "#0F1B2D",
            }}>
              End-To-End <span style={{ color: "#d87307" }}>RevOps Services</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {revopsServices.map((service) => (
              <div key={service.title} style={{ background: "#FFFFFF", borderRadius: 12, padding: "32px 28px", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid #E8E8E8" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: 22, textTransform: "uppercase", letterSpacing: "0.04em", color: "#0F1B2D", marginBottom: 12 }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 20 }}>{service.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0 }}></span>
                      <span style={{ fontSize: 14, color: "#444444" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 0", background: "#d87307" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700,
            fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "0.02em", textTransform: "uppercase",
            color: "#FFFFFF", marginBottom: 24,
          }}>
            Ready To Transform Your Revenue Operations?
          </h2>
          <a href="mailto:contact@brandiron.com" style={{
            display: "inline-flex", alignItems: "center",
            background: "#FFFFFF", color: "#d87307",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 17,
            padding: "16px 36px", borderRadius: 12, textDecoration: "none",
          }}>
            Book A RevOps Strategy Session →
          </a>
        </div>
      </section>
    </>
  );
}
