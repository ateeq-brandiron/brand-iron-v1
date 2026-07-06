"use client";
import Link from "next/link";

// SVG Icons — copper stroke, no fill, 44x44 viewBox 0 0 36 36

function IconOutbound() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Envelope body */}
      <rect x="3" y="9" width="22" height="16" rx="2" stroke="#d87307" strokeWidth="2.5" />
      {/* Envelope flap */}
      <polyline points="3,9 14,19 25,9" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Outbound arrow */}
      <line x1="27" y1="14" x2="33" y2="14" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <polyline points="29,10 33,14 29,18" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLeadScoring() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Funnel */}
      <polyline points="4,6 32,6 22,18 22,30 14,30 14,18 4,6" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Score star / dots */}
      <circle cx="29" cy="24" r="2" stroke="#d87307" strokeWidth="2" />
      <circle cx="25" cy="30" r="2" stroke="#d87307" strokeWidth="2" />
      <circle cx="33" cy="30" r="2" stroke="#d87307" strokeWidth="2" />
    </svg>
  );
}

function IconContent() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Pen/edit */}
      <path d="M8 26 L20 14 L26 20 L14 32 L8 34 Z" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="14" x2="26" y2="20" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkle lines top-right */}
      <line x1="28" y1="4" x2="28" y2="8" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="6" x2="30" y2="6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="10" x2="33.5" y2="11.5" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="10" x2="22.5" y2="11.5" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconNurture() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Circular refresh arrows */}
      <path d="M18 6 A12 12 0 1 1 6.5 24" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Arrow head on outer arc start */}
      <polyline points="18,2 18,8 24,6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Counter inner arc */}
      <path d="M18 30 A12 12 0 0 1 29.5 12" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
    </svg>
  );
}

function IconReporting() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* X axis */}
      <line x1="4" y1="30" x2="32" y2="30" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      {/* Bar chart */}
      <rect x="5" y="20" width="5" height="10" stroke="#d87307" strokeWidth="2" />
      <rect x="13" y="14" width="5" height="16" stroke="#d87307" strokeWidth="2" />
      <rect x="21" y="18" width="5" height="12" stroke="#d87307" strokeWidth="2" />
      {/* Auto/bolt symbol top-right */}
      <polyline points="30,6 27,14 31,14 28,22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMeeting() {
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Calendar body */}
      <rect x="4" y="7" width="28" height="24" rx="2" stroke="#d87307" strokeWidth="2.5" />
      {/* Calendar header bar */}
      <line x1="4" y1="14" x2="32" y2="14" stroke="#d87307" strokeWidth="2" />
      {/* Calendar hooks */}
      <line x1="11" y1="4" x2="11" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="4" x2="25" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
      {/* Checkmark inside calendar */}
      <polyline points="12,22 16,26 24,18" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const automationItems = [
  { icon: <IconOutbound />, title: "Outbound Sequences", body: "AI-personalised email and LinkedIn outreach that books meetings — without your team lifting a finger." },
  { icon: <IconLeadScoring />, title: "Lead Scoring & Routing", body: "Intelligent models that score inbound leads in real-time and route them to the right rep instantly." },
  { icon: <IconContent />, title: "Content Automation", body: "Blog posts, ads, social content, and case studies — generated at scale with your brand voice." },
  { icon: <IconNurture />, title: "Nurture Workflows", body: "Behaviour-triggered sequences that move prospects through the funnel with zero manual effort." },
  { icon: <IconReporting />, title: "Reporting Automation", body: "Daily, weekly, and monthly revenue reports assembled and delivered automatically." },
  { icon: <IconMeeting />, title: "Meeting Booking AI", body: "Conversational AI that qualifies, schedules, and follows up — 24/7 without a human in the loop." },
];

export default function AIExecutionPage() {
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
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            AI Execution &<br /><span style={{ color: "#d87307" }}>Automation</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            From lead generation to booked meetings — fully automated. We build and deploy the AI systems that run your revenue engine while your team focuses on closing.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* What We Automate */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>What We Automate</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Every Revenue-Generating Workflow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {automationItems.map(({ icon, title, body }) => (
              <div key={title} className="channel-card" style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px", borderTop: "3px solid #d87307" }}>
                <div style={{ marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, textAlign: "center" }}>
          {[
            { num: "20hrs", label: "Saved per rep, per week" },
            { num: "4X", label: "More outreach capacity" },
            { num: "65%", label: "Faster lead response time" },
          ].map(({ num, label }) => (
            <div key={num} className="stat-block-sm">
              <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#d87307", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Montserrat', sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", marginBottom: 16 }}>Platforms We Build On</h2>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 48 }}>We work with your existing stack or recommend the best tools for your use case.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["HubSpot", "Salesforce", "Make.com", "Zapier", "Clay", "Apollo", "Instantly", "OpenAI", "Anthropic Claude", "n8n", "ActiveCampaign", "Lemlist"].map(tool => (
              <div key={tool} className="tool-chip" style={{
                padding: "10px 20px", background: "#FFFFFF", border: "1px solid #E8E8E8",
                borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 14,
                fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0F1B2D",
              }}>{tool}</div>
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
              Let&apos;s Automate Your Revenue
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a session and we&apos;ll map out exactly which workflows to automate first for the biggest impact.
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
