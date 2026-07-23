"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import OutboundStrategyReviewModal from "@/components/OutboundStrategyReviewModal";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const coreServices = [
  {
    title: "LinkedIn Outreach",
    lead: "Get in Front of the People Who Make the Call",
    body: "We build LinkedIn outreach campaigns that create familiarity, start conversations, and move qualified prospects toward a meeting.",
    items: ["Decision-maker targeting", "Prospect-list building", "Profile positioning", "Connection messaging", "Follow-up sequences", "Conversation management", "Lead qualification", "Meeting booking"],
    tagline: "Build the connection. Earn the conversation.",
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#d87307" strokeWidth="1.8"/><path d="M7.5 10.5v6M7.5 7.75v.01M12 16.5v-3.75c0-1.24 1-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.75M12 10.5v6" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "Email Outreach",
    lead: "Cut Through the Noise",
    body: "We create targeted email campaigns built around the prospect, not a generic sales pitch.",
    items: ["Lead research and segmentation", "Contact verification", "Offer positioning", "Cold email copy", "Follow-up sequences", "Campaign setup", "Reply management", "Testing and optimization"],
    tagline: "Right prospect. Right message. Right time.",
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#d87307" strokeWidth="1.8"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "SDR Programs",
    lead: "Give Your Sales Development Team a System That Works",
    body: "A good SDR needs more than a list and a script. We build the structure behind consistent prospecting.",
    items: ["SDR workflows", "Outreach cadences", "Email, LinkedIn, and call scripts", "Qualification standards", "Objection handling", "CRM stages", "Sales handoff processes", "KPIs and reporting", "Training documentation"],
    tagline: "Less guesswork. More accountability. Stronger execution.",
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="#d87307" strokeWidth="1.8"/><path d="M5 19.5c0-3.4 3.13-5.5 7-5.5s7 2.1 7 5.5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
  {
    title: "Appointment Setting",
    lead: "Turn Interest Into a Meeting",
    body: "A positive reply is only the beginning. We help move interested prospects from first response to qualified appointment.",
    items: ["Reply monitoring", "Lead qualification", "Follow-up communication", "Calendar scheduling", "Meeting confirmations", "Reminder sequences", "Prospect briefing notes", "No-show follow-up"],
    tagline: "Don't let a warm lead go cold.",
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4.5" width="17" height="16" rx="2" stroke="#d87307" strokeWidth="1.8"/><path d="M3.5 9.5h17M8 3v3M16 3v3" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><path d="M8.5 13.5l2 2 4.5-4.5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: "Sales Enablement",
    lead: "Arm Your Sales Team With Better Tools",
    body: "Your team should never walk into a sales conversation unprepared. We create the messaging, materials, and workflows that help move deals forward.",
    items: ["Sales scripts", "Discovery call frameworks", "Sales decks", "Proposal templates", "Case studies", "Service one-sheets", "Objection-handling guides", "Competitive talking points", "Follow-up templates", "Sales process documentation"],
    tagline: "Better tools. Better conversations. Better odds.",
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 19.5V6.5a2 2 0 0 1 2-2h8.5L20 8.5V19.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 12h8M8 16h5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
];

const howItWorks = [
  { num: "01", title: "Find the Target", body: "We define the companies, markets, and decision-makers worth pursuing." },
  { num: "02", title: "Sharpen the Message", body: "We position the offer so the prospect quickly understands why it matters." },
  { num: "03", title: "Build the Campaign", body: "We create the lists, sequences, workflows, and sales tools." },
  { num: "04", title: "Start the Conversation", body: "We launch outreach through LinkedIn, email, SDR activity, or a coordinated campaign." },
  { num: "05", title: "Qualify the Opportunity", body: "We separate real interest from empty activity." },
  { num: "06", title: "Book the Meeting", body: "Qualified prospects move into a clear appointment-setting and sales-handoff process." },
  { num: "07", title: "Tighten the System", body: "We track performance, test the message, and improve the campaign." },
];

const builtFor = [
  "Professional services firms", "SaaS and technology companies", "Consulting businesses", "Agencies",
  "Financial services firms", "High-value B2B companies", "Companies entering new markets",
  "Businesses launching new offers", "Sales teams that need more structure", "Companies that cannot rely on inbound alone",
];

const faqs = [
  {
    q: "What is Outbound Growth?",
    a: "Outbound Growth is a structured process for identifying, contacting, qualifying, and converting potential customers through channels such as LinkedIn, email, and direct sales outreach.",
  },
  {
    q: "Does Brand Iron provide prospect lists?",
    a: "Yes. Prospect research, lead-list development, verification, enrichment, and segmentation may be included based on the engagement.",
  },
  {
    q: "Can Brand Iron manage the campaign?",
    a: "Yes. Managed engagements may include campaign setup, outreach execution, reply management, qualification, appointment setting, reporting, and optimization.",
  },
  {
    q: "Do you guarantee sales?",
    a: "No. We help generate qualified conversations and pipeline opportunities. Closing results depend on the offer, pricing, market, sales process, and sales-team performance.",
  },
  {
    q: "Can you work with our internal sales team?",
    a: "Yes. We can support internal teams with outbound strategy, messaging, SDR systems, sales materials, workflows, documentation, and reporting.",
  },
];

export default function OutboundGrowthPage() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {reviewOpen && <OutboundStrategyReviewModal onClose={() => setReviewOpen(false)} />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="og-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/home-hero.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.45) 0%, rgba(8,16,36,0.35) 45%, rgba(8,16,36,0.75) 100%)" }} />

        <div className="og-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="og-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Don&apos;t Wait for the Right Buyers. Go Find Them.
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Build Your Outbound Growth Engine
                </Link>
                <Link href="#services" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore Outbound Services
                </Link>
              </div>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                Brand Iron builds outbound growth systems that put your business in front of the right decision-makers: LinkedIn, email, SDR outreach, appointment setting, and sales enablement.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                No random prospecting. No spray-and-pray campaigns. No wasted motion. Just a smarter path from cold prospect to real sales conversation.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .og-hero-section { height: auto !important; min-height: 100vh; }
            .og-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .og-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: PROSPECT WITH PURPOSE ───────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Prospect With Purpose
          </h2>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 24, maxWidth: 780 }}>
            Outbound works when the target is right, the message is sharp, and the follow-up does not quit too soon. We help you:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px 32px", marginBottom: 32, maxWidth: 780 }}>
            {["Find the right accounts", "Reach the right decision-makers", "Lead with a stronger message", "Qualify real opportunities", "Book more sales conversations", "Give your team the tools to close"].map(item => (
              <div key={item} className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#d87307" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, color: "#333", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>

          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 700, marginBottom: 32 }}>
            More activity is not the goal. Better pipeline is.
          </p>

          <button onClick={() => setReviewOpen(true)} className={`reveal${s2View.inView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
          >Request an Outbound Strategy Review</button>
        </div>
      </section>

      {/* ── S3: CORE OUTBOUND SERVICES ──────────────────────── */}
      <section id="services" style={{ position: "relative", overflow: "hidden", padding: "120px 40px", background: "#0F1B2D" }}>
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 56, textAlign: "left" }}>
            Core Outbound Services
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {coreServices.map(({ title, lead, body, items, tagline, icon }, i) => (
              <div key={title}
                className={`reveal stagger-${(i % 3) + 1}${s3View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "32px 28px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "background 0.25s, border-color 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(216,115,7,0.14)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.92)", fontWeight: 600, marginBottom: 10 }}>{lead}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginTop: "auto" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>May Include</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {items.map(it => (
                      <span key={it} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, padding: "3px 8px" }}>{it}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "#f0a860", fontStyle: "italic", fontWeight: 600, margin: 0 }}>{tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "120px 40px" }}>
        <div ref={s4View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
            How It Works
          </h2>
          <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "0.02em", color: "#d87307", marginBottom: 48 }}>
            Aim. Engage. Qualify. Book. Improve.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {howItWorks.map(({ num, title, body }, i) => (
              <div key={num}
                className={`reveal stagger-${(i % 3) + 1}${s4View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14, padding: "28px 24px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 32, color: "rgba(216,115,7,0.18)", lineHeight: 1, display: "block", marginBottom: 14 }}>{num}</span>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.7, color: "#666", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: BUILT FOR B2B GROWTH ─────────────────────────── */}
      <section style={{ background: "#F8F5EF", padding: "120px 40px" }}>
        <div ref={s5View.ref} style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 40 }}>
            Built for B2B Growth
          </h2>
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {builtFor.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 24, padding: "10px 18px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "#333", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: FINAL CTA + FAQ ──────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px 40px", background: "linear-gradient(160deg, #0F1B2D 0%, #16273f 100%)" }}>
        <CircuitOverlay />
        <div ref={s6View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto 96px", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s6View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 20 }}>
            Stop Prospecting Like It&apos;s a Numbers Game
          </h2>
          <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>
            More names do not always create more pipeline. The right market, message, and system do.
          </p>
          <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: 40 }}>
            Brand Iron helps you build outbound campaigns with more focus, more structure, and more firepower. Ready to put more qualified opportunities in the pipeline?
          </p>
          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact" style={{
              display: "inline-block", padding: "16px 40px", borderRadius: 6,
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              background: "#d87307", color: "#FFFFFF", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#c46305")}
            onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
            >
              Build Your Outbound Growth Engine
            </Link>
            <button onClick={() => setReviewOpen(true)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#f0a860"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
            >
              Request an Outbound Strategy Review
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
          <h3 className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#FFFFFF", marginBottom: 32, textAlign: "center" }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 80 }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i}
                className={`reveal${s6View.inView ? ' visible' : ''}`}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(216,115,7,0.35)"; el.style.background = "rgba(216,115,7,0.06)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.background = "rgba(255,255,255,0.05)"; }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.5 }}>{q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? "#d87307" : "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke={openFaq === i ? "#FFFFFF" : "#d87307"} strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", margin: 0 }}>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
