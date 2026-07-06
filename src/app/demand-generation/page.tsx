"use client";
import Link from "next/link";

const OutboundEmailIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="22" height="16" rx="2" stroke="#d87307" strokeWidth="2" />
    <path d="M3 11 L14 18 L25 11" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 14 L33 18 L28 22" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="18" x2="33" y2="18" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="16" height="20" rx="2" stroke="#d87307" strokeWidth="2" />
    <path d="M10 14 L10 22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 17 L13 22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 17 C13 15 16 15 16 17 L16 22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="12" r="1" stroke="#d87307" strokeWidth="1.5" />
    <circle cx="26" cy="14" r="4" stroke="#d87307" strokeWidth="2" />
    <circle cx="30" cy="22" r="3" stroke="#d87307" strokeWidth="2" />
    <line x1="27.5" y1="17" x2="29" y2="19.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SEOIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="9" stroke="#d87307" strokeWidth="2" />
    <line x1="22" y1="22" x2="31" y2="31" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="8" y="20" width="14" height="10" rx="1.5" stroke="#d87307" strokeWidth="1.8" />
    <line x1="10" y1="24" x2="20" y2="24" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="27" x2="16" y2="27" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PaidMediaIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" stroke="#d87307" strokeWidth="2" />
    <circle cx="18" cy="18" r="8" stroke="#d87307" strokeWidth="2" />
    <path d="M18 10 L18 13 M18 23 L18 26" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 14.5 C15 13.1 16.3 12 18 12 C19.7 12 21 13.1 21 14.5 C21 17 18 18 18 18 C18 18 15 19 15 21.5 C15 22.9 16.3 24 18 24 C19.7 24 21 22.9 21 21.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EventsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6 C14 6 12 10 12 15 C12 20 14 23 18 23 C22 23 24 20 24 15 C24 10 22 6 22 6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 15 C9 15 7 17 7 19 L7 21 C7 22 8 23 9 23 L12 23" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 15 C27 15 29 17 29 19 L29 21 C29 22 28 23 27 23 L24 23" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="23" x2="18" y2="29" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="29" x2="24" y2="29" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const PartnerIcon = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="18" r="6" stroke="#d87307" strokeWidth="2" />
    <circle cx="26" cy="18" r="6" stroke="#d87307" strokeWidth="2" />
    <path d="M13.5 14 C13.5 14 16 18 18 18 C20 18 22.5 14 22.5 14" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
    <path d="M13.5 22 C13.5 22 16 18 18 18 C20 18 22.5 22 22.5 22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const channels = [
  { icon: <OutboundEmailIcon />, title: "Outbound Email", body: "AI-personalised cold email campaigns with A/B testing, deliverability optimisation, and automated follow-ups that book meetings." },
  { icon: <LinkedInIcon />, title: "LinkedIn Outreach", body: "Strategic LinkedIn sequences — connection requests, messaging, content — that build relationships and create pipeline." },
  { icon: <SEOIcon />, title: "SEO & Content", body: "Search-optimised content that attracts your ICP, builds authority, and generates inbound leads consistently." },
  { icon: <PaidMediaIcon />, title: "Paid Media", body: "Google, LinkedIn, and Meta campaigns engineered for pipeline, not just clicks — with conversion tracking from ad to closed deal." },
  { icon: <EventsIcon />, title: "Events & Webinars", body: "Virtual and in-person events that generate qualified pipeline and accelerate deals already in the funnel." },
  { icon: <PartnerIcon />, title: "Partner & Referral", body: "Structured referral and partner programmes that turn your network into a predictable pipeline channel." },
];

const stats = [
  { num: "3X", label: "Pipeline increase in 90 days" },
  { num: "55%", label: "Lower cost per qualified meeting" },
  { num: "8X", label: "More outreach capacity vs manual" },
  { num: "40%", label: "Increase in inbound leads" },
];

const howWeOperate = [
  { n: "01", title: "ICP & Targeting", body: "We define your ideal customer profile, buying committee, and build precision target lists from multiple data sources." },
  { n: "02", title: "Messaging & Creative", body: "We develop channel-specific messaging and creative that speaks directly to your buyer's pain points." },
  { n: "03", title: "Launch & Test", body: "We launch campaigns across selected channels, A/B testing everything to find what converts." },
  { n: "04", title: "Optimise & Scale", body: "We double down on what works, kill what doesn't, and systematically scale pipeline production month over month." },
];

export default function DemandGenerationPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-haybales.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,27,45,0.88)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Services</p>
          <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5vw, 68px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", maxWidth: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Demand Generation<br /><span style={{ color: "#d87307" }}>& Pipeline</span>
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 560, marginBottom: 40 }}>
            Turn strategy into consistent, qualified opportunities. We run multi-channel demand generation campaigns that fill your pipeline with the right buyers.
          </p>
          <Link href="/contact" className="btn-primary">Book a Strategy Session</Link>
        </div>
      </section>

      {/* Channels */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Channels &amp; Tactics</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 44px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D" }}>Full-Funnel Demand Generation</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {channels.map(({ icon, title, body }) => (
              <div key={title} className="channel-card" style={{ background: "#F8F7F4", borderRadius: 8, padding: "32px 28px" }}>
                <div style={{ marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 19, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0F1B2D", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.65, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#0F1B2D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", textAlign: "center", marginBottom: 56 }}>What Results Look Like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, textAlign: "center" }}>
            {stats.map(({ num, label }) => (
              <div key={num} className="stat-block-sm">
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 52, fontWeight: 700, color: "#d87307", lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: "#F8F7F4", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#0F1B2D", textAlign: "center", marginBottom: 56 }}>How We Operate</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {howWeOperate.map(({ n, title, body }) => (
              <div key={n} className="process-card" style={{ background: "#FFFFFF", borderRadius: 8, padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 44, fontWeight: 700, color: "rgba(216,115,7,0.2)", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontSize: 18, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.65, color: "#666" }}>{body}</p>
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
              Ready to Fill Your Pipeline?
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a session and we&apos;ll build your demand generation plan — channels, targeting, and 90-day pipeline forecast.
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
