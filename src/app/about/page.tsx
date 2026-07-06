"use client";
import Link from "next/link";

const BURFORD = "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif";
const MONTSERRAT = "'Montserrat', sans-serif";
const COPPER = "#d87307";
const NAVY1 = "#0F1B2D";
const NAVY2 = "#0D1A2E";
const WHITE = "#FFFFFF";
const WHITE80 = "rgba(255,255,255,0.8)";
const WHITE04 = "rgba(255,255,255,0.04)";
const WHITE08 = "rgba(255,255,255,0.08)";

// ── SVG Icons ──────────────────────────────────────────────────────────────────
function IconRevenueFirst() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="2,26 10,16 16,20 24,8 30,8" stroke={COPPER} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="24,8 30,8 30,14" stroke={COPPER} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconIntegratedThinking() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="16" r="3" stroke={COPPER} strokeWidth="2" />
      <circle cx="26" cy="7" r="3" stroke={COPPER} strokeWidth="2" />
      <circle cx="26" cy="25" r="3" stroke={COPPER} strokeWidth="2" />
      <line x1="9" y1="16" x2="23" y2="8.5" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="16" x2="23" y2="23.5" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="10" x2="26" y2="22" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconAIAugmented() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22 C8 16 10 10 16 10 C22 10 24 16 24 22" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="10" x2="16" y2="6" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="22" x2="24" y2="22" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.5" stroke={COPPER} strokeWidth="1.5" />
      <circle cx="20" cy="18" r="1.5" stroke={COPPER} strokeWidth="1.5" />
      <line x1="12" y1="18" x2="20" y2="18" stroke={COPPER} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="14" r="1.5" stroke={COPPER} strokeWidth="1.5" />
      <line x1="16" y1="14" x2="12" y2="18" stroke={COPPER} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="14" x2="20" y2="18" stroke={COPPER} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconRadicalTransparency() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16 C6 8 10 5 16 5 C22 5 26 8 30 16 C26 24 22 27 16 27 C10 27 6 24 2 16Z" stroke={COPPER} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="5" stroke={COPPER} strokeWidth="2" />
      <circle cx="16" cy="16" r="2" stroke={COPPER} strokeWidth="1.5" />
    </svg>
  );
}

function IconMeasurableImpact() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" stroke={COPPER} strokeWidth="2" />
      <circle cx="16" cy="16" r="8" stroke={COPPER} strokeWidth="2" />
      <circle cx="16" cy="16" r="3" stroke={COPPER} strokeWidth="2" />
      <line x1="16" y1="3" x2="16" y2="7" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="25" x2="16" y2="29" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="16" x2="7" y2="16" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="16" x2="29" y2="16" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconExecutionOverTheory() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="9" stroke={COPPER} strokeWidth="2" />
      <path d="M16 7 A9 9 0 0 1 25 16" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" stroke={COPPER} strokeWidth="2" />
      <polyline points="20,8 22,6 24,8" stroke={COPPER} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="27,23 29,25 27,27" stroke={COPPER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="24" x2="28" y2="26" stroke={COPPER} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const VALUE_ICONS: Record<string, React.ReactNode> = {
  "Revenue First": <IconRevenueFirst />,
  "Integrated Thinking": <IconIntegratedThinking />,
  "AI-Augmented Excellence": <IconAIAugmented />,
  "Radical Transparency": <IconRadicalTransparency />,
  "Measurable Impact": <IconMeasurableImpact />,
  "Execution Over Theory": <IconExecutionOverTheory />,
};

// ── Data ───────────────────────────────────────────────────────────────────────
const VALUES = [
  { title: "Revenue First", body: "Every decision is evaluated through the lens of revenue impact. We don't do things that look good. We do things that work." },
  { title: "Integrated Thinking", body: "We connect strategy to execution, marketing to sales, technology to outcomes. Silos are the enemy of revenue." },
  { title: "AI-Augmented Excellence", body: "We combine the power of AI with the judgment of experienced operators to deliver outcomes neither could achieve alone." },
  { title: "Radical Transparency", body: "We tell you what you need to hear, not what you want to hear. Our clients grow because we hold them to a higher standard." },
  { title: "Measurable Impact", body: "If we can't measure it, we don't do it. Every engagement is structured around KPIs that connect to business performance." },
  { title: "Execution Over Theory", body: "Strategy without execution is just planning. We are operators who build the systems and run the plays alongside you." },
];

const TEAM = [
  {
    name: "Michael Doyle",
    initials: "MD",
    title: "CEO | Brand Champion",
    bio: "Michael Doyle is a trailblazer in Brand Marketing and has reshaped the industry for 20+ years. He launched Brand Iron in 2002, after successfully building and selling a multi-million dollar tech-based advertising agency. His tough precision has steered countless businesses in different industries to success worldwide.",
  },
  {
    name: "Carmen Barker",
    initials: "CB",
    title: "CFO",
    bio: "Carmen Barker is the financial genius at Brand Iron — handling everything that's money-related from payroll to HR. Carmen's roots go back to being a partner in an award-winning startup business that provides water treatment for humanitarian and disaster relief efforts. Under her leadership, the company was recognized by Fast Company in 2011 for the Top 50 Colorado Companies to Watch and Top 100 Women Owned Companies.",
  },
  {
    name: "Valeria Rodriguez Quintanilla",
    initials: "VR",
    title: "Project Manager / Business Development",
    bio: "Valeria was born and raised in Northern Mexico near the Texas border, and she attended the University of Texas at Austin, where she received a degree in Mathematics and Actuarial Science in 2019. She's applied her knowledge working in tech as an Analyst and Team Lead prior to lending her many talents to Brand Iron. Valeria is analytical, creative, and always up for a challenge.",
  },
  {
    name: "Shelly Barson",
    initials: "SB",
    title: "Design Manager",
    bio: "Born in Utah, Shelly grew up living in most of the Western states, spending summers on her grandpa's Wyoming cattle ranch. Shelly is passionate about creating simple, smart design that tells a compelling story. She's a seasoned art director with experience working on projects for small startups to global brands like Intel, Vivint and Microsoft.",
  },
  {
    name: "Katrina",
    initials: "KA",
    title: "Account Manager",
    bio: "Katrina brings sharp client relationship skills and a results-driven approach to every account she manages. She ensures our clients receive seamless communication, timely delivery, and consistent value across every engagement.",
  },
  {
    name: "Ateeq",
    initials: "AT",
    title: "Program Manager",
    bio: "Ateeq oversees the execution of Brand Iron's integrated programs, ensuring strategy translates into measurable outcomes. He connects teams, tools, and timelines to keep every initiative on track and aligned to client goals.",
  },
];

const APPROACH_STEPS = [
  { step: "01", title: "Diagnose", body: "We start by understanding how revenue actually flows through your business — not how it's supposed to work, but how it does." },
  { step: "02", title: "Design", body: "We design the integrated revenue system your business needs — strategy, positioning, technology, and processes aligned to outcomes." },
  { step: "03", title: "Build", body: "We build the infrastructure: CRM systems, AI automation, demand generation engines, and revenue intelligence platforms." },
  { step: "04", title: "Deploy", body: "We deploy the system with your team, ensuring adoption, training, and the organizational buy-in that determines success." },
  { step: "05", title: "Optimize", body: "We continuously monitor performance, identify optimization opportunities, and iterate based on real revenue data." },
];

const STATS = [
  { num: "3X", label: "Average Pipeline Growth" },
  { num: "60%", label: "Less Manual Work" },
  { num: "50+", label: "Clients Transformed" },
  { num: "100%", label: "Revenue Visibility" },
];

// ── Shared styles ──────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  fontFamily: MONTSERRAT,
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: COPPER,
  marginBottom: 12,
};

const h2Style: React.CSSProperties = {
  fontFamily: BURFORD,
  fontWeight: 700,
  fontSize: "clamp(30px, 4vw, 52px)",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  color: WHITE,
  lineHeight: 1.1,
  marginBottom: 20,
};

// ── Page ───────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section style={{
        position: "relative", minHeight: "60vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/hero-saddle.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,54,82,0.50) 0%, rgba(20,32,55,0.38) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px" }}>
          <p style={labelStyle}>About BrandIron</p>
          <h1 style={{
            fontFamily: BURFORD,
            fontWeight: 700,
            fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color: "transparent",
            WebkitTextStroke: "2px #FFFFFF",
            maxWidth: 800,
            lineHeight: 1.0,
            marginBottom: 28,
          }}>
            We Build Revenue Engines.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 560, fontFamily: MONTSERRAT }}>
            BrandIron exists because too many organizations invest in disconnected strategies, tools, and agencies — and wonder why growth doesn&apos;t compound.
          </p>
        </div>
      </section>

      {/* ── Mission + Stats ── */}
      <section style={{ background: NAVY2, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 80 }}>
            <div>
              <p style={labelStyle}>Our Mission</p>
              <h2 style={h2Style}>Transform How Companies Generate Revenue</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, marginBottom: 16, fontFamily: MONTSERRAT }}>
                We combine strategy, branding, go-to-market, AI, automation, CRM, and revenue operations into integrated systems that drive compounding, measurable growth.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, fontFamily: MONTSERRAT }}>
                Companies don&apos;t fail because they lack effort. They fail because their revenue systems are fragmented — marketing, sales, technology, and data all operating in separate lanes.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(216,115,7,0.2)", borderRadius: 12, overflow: "hidden" }}>
              {STATS.map(({ num, label }) => (
                <div key={num} className="stat-cell" style={{ background: NAVY1, padding: "36px 24px", textAlign: "center", transition: "background 0.2s" }}>
                  <div style={{ fontFamily: BURFORD, fontSize: 52, fontWeight: 700, color: COPPER, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 13, color: WHITE80, lineHeight: 1.4, marginTop: 8, fontFamily: MONTSERRAT }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Core Values ── */}
          <p style={labelStyle}>Core Values</p>
          <h2 style={{ ...h2Style, marginBottom: 40 }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {VALUES.map(({ title, body }) => (
              <div key={title} className="value-card" style={{
                background: WHITE04,
                border: `1px solid ${WHITE08}`,
                borderRadius: 10,
                padding: "32px 28px",
                borderLeft: `3px solid ${COPPER}`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <div style={{ marginBottom: 14 }}>{VALUE_ICONS[title]}</div>
                <h3 style={{ fontFamily: BURFORD, fontSize: 22, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: COPPER, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: WHITE80, fontFamily: MONTSERRAT }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section style={{ background: NAVY1, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3px 1fr", gap: "0 48px", alignItems: "start" }}>
            {/* Vision */}
            <div style={{ paddingRight: 24 }}>
              <p style={labelStyle}>Vision</p>
              <h2 style={{ fontFamily: BURFORD, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)", textTransform: "uppercase", letterSpacing: "0.03em", color: WHITE, lineHeight: 1.1, marginBottom: 24 }}>
                A World Where Revenue Is Engineered, Not Hoped For
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, fontFamily: MONTSERRAT }}>
                We envision a future where every revenue-generating organization operates with complete alignment — where strategy, brand, technology, and talent work as a single compounding system rather than competing factions.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, fontFamily: MONTSERRAT, marginTop: 16 }}>
                In that world, growth is predictable. Pipelines are engineered. And revenue becomes a function of design — not luck.
              </p>
            </div>
            {/* Vertical copper divider */}
            <div style={{ background: COPPER, minHeight: 360, borderRadius: 2 }} />
            {/* Mission */}
            <div style={{ paddingLeft: 24 }}>
              <p style={labelStyle}>Mission</p>
              <h2 style={{ fontFamily: BURFORD, fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)", textTransform: "uppercase", letterSpacing: "0.03em", color: WHITE, lineHeight: 1.1, marginBottom: 24 }}>
                Transform How Companies Generate Revenue
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, fontFamily: MONTSERRAT }}>
                We combine strategy, brand, go-to-market, AI automation, CRM, and revenue operations into integrated systems that produce compounding, measurable growth.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: WHITE80, fontFamily: MONTSERRAT, marginTop: 16 }}>
                Our work is not advisory. We build, deploy, and optimize the revenue infrastructure our clients need — and we stay accountable to results, not deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: NAVY2, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={labelStyle}>Our People</p>
            <h2 style={{ ...h2Style, marginBottom: 0 }}>Meet The Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, maxWidth: 1200, margin: "0 auto" }}>
            {TEAM.map(({ name, initials, title, bio }) => (
              <div key={name} className="team-card" style={{
                background: WHITE04,
                border: `1px solid ${WHITE08}`,
                borderRadius: 12,
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                {/* Top copper stripe */}
                <div style={{ height: 4, background: COPPER }} />
                <div style={{ padding: "36px 28px 32px" }}>
                  {/* Avatar */}
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: NAVY1,
                    border: `2px solid ${COPPER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    <span style={{ fontFamily: BURFORD, fontSize: 20, fontWeight: 700, color: COPPER }}>{initials}</span>
                  </div>
                  {/* Name */}
                  <h3 style={{ fontFamily: BURFORD, fontSize: 24, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE, marginBottom: 6 }}>{name}</h3>
                  {/* Title */}
                  <p style={{ fontFamily: MONTSERRAT, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: COPPER, marginBottom: 16 }}>{title}</p>
                  {/* Bio */}
                  <p style={{ fontFamily: MONTSERRAT, fontSize: 14, lineHeight: 1.75, color: WHITE80 }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section style={{ background: NAVY1, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p style={labelStyle}>Our Approach</p>
          <h2 style={{ ...h2Style, marginBottom: 56 }}>How We Work</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {APPROACH_STEPS.map(({ step, title, body }) => (
              <div key={step} className="approach-step" style={{
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
                padding: "24px 28px",
                background: WHITE04,
                border: `1px solid ${WHITE08}`,
                borderRadius: 10,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <div className="approach-circle" style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: NAVY2,
                  border: `2px solid ${COPPER}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s, border-color 0.2s",
                }}>
                  <span style={{ fontFamily: BURFORD, fontWeight: 700, fontSize: 18, color: COPPER }}>{step}</span>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <h3 style={{ fontFamily: BURFORD, fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE, marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: WHITE80, fontFamily: MONTSERRAT }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-leather">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent 0%, #d87307 30%, #d87307 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(216,115,7,0.10) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>Ready To Start?</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, Lucida, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 54px)", textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 28 }}>
              Ready To Work With BrandIron?
            </h2>
            <div style={{ width: 64, height: 3, background: "#d87307", borderRadius: 2 }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 36 }}>
              Book a strategy session and let&apos;s design the revenue system your business deserves.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-primary">Book Strategy Session</Link>
              <Link href="/services" style={{ fontFamily: "'Montserrat', Helvetica, Arial, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2, transition: "color 0.2s ease, border-color 0.2s ease" }}>Our Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
