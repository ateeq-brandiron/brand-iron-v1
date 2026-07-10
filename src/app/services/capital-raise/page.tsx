"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";

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

export default function CapitalRaisePage() {
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Capital Raise Support?",
      a: "Capital Raise Support is a strategic service that helps organizations prepare for fundraising by strengthening their investor story, presentation materials, investor targeting, and outreach strategy. Rather than focusing on a single deliverable, Brand Iron helps organizations build the clarity, credibility, and confidence needed to engage investors throughout the fundraising journey.",
    },
    {
      q: "What's the difference between a Capital Raise Deck and Capital Raise Support?",
      a: "A Capital Raise Deck is one important fundraising asset. Capital Raise Support is the broader strategy that includes investor messaging, presentation development, investor targeting, outreach support, and fundraising guidance. The deck tells your story, while the overall strategy helps ensure that story reaches the right investors and creates meaningful conversations.",
    },
    {
      q: "Do I need a Capital Raise Deck before approaching investors?",
      a: "In most cases, yes. A well-structured investor deck helps communicate your opportunity clearly and consistently. It provides investors with the information they need to quickly understand your business, evaluate its potential, and determine whether to continue the conversation.",
    },
    {
      q: "What is BrandStorm™, and why is it recommended?",
      a: "BrandStorm™ is Brand Iron's strategic discovery session. It helps clarify your market positioning, value proposition, investor messaging, and overall investment narrative before presentation materials are created. This strategic foundation helps ensure every fundraising asset communicates a consistent and compelling story.",
    },
    {
      q: "What is included in the Investor Database?",
      a: "Our Investor Database helps identify investors based on factors such as industry focus, investment stage, geographic preference, and funding interests. This allows your fundraising efforts to focus on investors who are more likely to align with your opportunity.",
    },
    {
      q: "How does Investor Outreach work?",
      a: "Investor Outreach combines research, messaging, and structured communication to introduce your opportunity to qualified investors. The objective isn't mass outreach, it's creating relevant, personalized conversations that can lead to meaningful investor relationships.",
    },
    {
      q: "Do you help after the deck is complete?",
      a: "Yes. Many organizations continue working with Brand Iron through Investor Outreach and Investor GTM Support to help manage fundraising activities, refine messaging based on investor feedback, and maintain momentum throughout the capital raise process.",
    },
    {
      q: "Do you create financial projections?",
      a: "We provide Proforma support to help organize and communicate financial assumptions, capital requirements, and projected performance. While we help present the financial story clearly, projections should be based on realistic business assumptions and validated by your leadership team and financial advisors.",
    },
    {
      q: "How long does a Capital Raise Support engagement take?",
      a: "Every engagement is tailored to the organization's needs, funding timeline, and readiness. The timeline depends on factors such as the complexity of the business, the availability of information, the scope of services selected, and the review process. Throughout the engagement, we work collaboratively to keep the project aligned with your fundraising objectives and milestones.",
    },
    {
      q: "What industries do you work with?",
      a: "Brand Iron supports startups, growth-stage companies, and established organizations across a variety of industries that are preparing to raise capital, secure strategic partnerships, or strengthen investor communications. Our focus is on developing clear investment narratives and strategic fundraising support rather than serving a single industry vertical.",
    },
  ];

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="cr-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/BI Video background.mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="cr-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="cr-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "'Burford Rustic Inline', sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.05,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Raising Capital Requires More Than a Great Pitch Deck.
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 14 }}>
                <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 14, padding: "15px 32px" }}>
                  Schedule a Capital Raise Strategy Session
                </Link>
                <Link href="#framework" className="hero-btn-outline" style={{ fontSize: 14, padding: "14px 30px" }}>
                  Explore the Capital Raise Framework
                </Link>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                From strategic messaging and investor-ready presentations to investor outreach and fundraising support, we help organizations prepare for every stage of the capital raise journey.
              </p>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                Investors evaluate more than financials. They invest in a compelling story, a credible team, a clear market opportunity, and confidence in your growth strategy.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                Brand Iron helps founders prepare for every stage of the fundraising journey through strategic positioning, investor storytelling, presentation development, investor targeting, and outreach, creating an investment narrative that inspires confidence and moves conversations forward.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cr-hero-section { height: auto !important; min-height: 100vh; }
            .cr-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .cr-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: WHY COMPANIES STRUGGLE TO RAISE CAPITAL ─────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
            Why Great Companies Still Struggle to Raise Capital
          </p>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 24, textAlign: "left" }}>
            Investors Don&apos;t Invest in Slides. They Invest in Confidence.
          </h2>

          <div style={{ maxWidth: 800, margin: "0 0 72px" }}>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              Investors review countless opportunities, but only a few move forward. The difference is rarely the idea alone, it&apos;s the confidence founders create in their vision, leadership, market opportunity, and ability to execute.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              Successful fundraising isn&apos;t about sharing more information. It&apos;s about delivering the right story to build trust, reduce uncertainty, and inspire investment.
            </p>
          </div>

          {/* What investors are evaluating table */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 12 }}>
              What Investors Are Really Evaluating
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 720, marginBottom: 32 }}>
              A capital raise presentation is only one part of the decision-making process. Behind every investment conversation are a series of questions that determine whether investors move forward.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#0F1B2D", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 28px", textAlign: "left", width: "35%" }}>Investors Want to Understand</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 28px", textAlign: "left", width: "65%" }}>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["The Problem", "Is the challenge significant enough to create a meaningful market opportunity?"],
                    ["The Solution", "Does the company solve the problem in a differentiated and scalable way?"],
                    ["The Market Opportunity", "Is the addressable market large enough to support long-term growth?"],
                    ["The Business Model", "Can the company generate sustainable revenue and profitability?"],
                    ["The Leadership Team", "Does the team have the experience and capability to execute?"],
                    ["Competitive Positioning", "Why is this opportunity different from the alternatives?"],
                    ["Growth Strategy", "Is there a credible and repeatable plan for scaling the business?"],
                    ["Financial Story", "Are the projections realistic, defensible, and aligned with the strategy?"],
                  ].map(([q, why], i) => (
                    <tr key={q} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "18px 28px", color: "#0F1B2D", fontWeight: 600, lineHeight: 1.5, borderBottom: "1px solid #EEEBE7" }}>{q}</td>
                      <td style={{ padding: "18px 28px", color: "#666", lineHeight: 1.65, borderBottom: "1px solid #EEEBE7" }}>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Beyond the pitch deck */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ maxWidth: 800, margin: "0 0 56px" }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 16 }}>
              Beyond the Pitch Deck
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              A great presentation helps, but it doesn&apos;t earn investor confidence. Confidence comes from a clear investment story, credible financials, strategic positioning, and consistent messaging throughout the fundraising journey. That&apos;s why Brand Iron goes beyond deck design to prepare your organization for every stage of the capital raise process.
            </p>
          </div>

          {/* Key insight */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ position: "relative", background: "#0F1B2D", borderRadius: 16, padding: "48px 64px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16, textAlign: "center" }}>Key Insight</p>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", textAlign: "center", lineHeight: 1.4, margin: 0 }}>
              The strongest fundraising presentations don&apos;t try to answer every question. They answer the questions that matter most, clearly, confidently, and in a way that earns the next conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: THE BRAND IRON CAPITAL RAISE FRAMEWORK ──────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.72)" }} />
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
              The Brand Iron Capital Raise Framework
            </p>
            <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20, textAlign: "left" }}>
              Not a Process. A Strategic Framework.
            </h2>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 760 }}>
              Successful fundraising requires more than a pitch deck. Brand Iron connects strategy, investor materials, investor targeting, and outreach into one integrated fundraising system.
            </p>
          </div>

          {/* 4 Pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }}>
            {[
              {
                num: "01", title: "Strategic Foundation", color: "#0F1B2D",
                lead: "Build the clarity behind your fundraising story.",
                focuses: ["BrandStorm™ Strategy Session", "Investor Messaging", "Value Proposition", "Company Positioning", "Investment Narrative"],
                icon: (<img src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "02", title: "Investor Readiness", color: "#1c3652",
                lead: "Transform your strategy into investor-ready materials.",
                focuses: ["Capital Raise Deck", "Executive Deck", "Teaser Piece", "Proforma", "Investor Storytelling"],
                icon: (<img src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "03", title: "Investor Access", color: "#2d4f72",
                lead: "Identify and prioritize the investors most aligned with your opportunity.",
                focuses: ["Investor Database", "Investor Research", "Segmentation", "Qualification", "Target Lists"],
                icon: (<img src="/images/icons/icon-barchart.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
              {
                num: "04", title: "Investor Engagement", color: "#0F1B2D",
                lead: "Create meaningful conversations that build fundraising momentum.",
                focuses: ["Investor Outreach", "Follow-up Strategy", "Investor GTM Support", "Relationship Management", "Campaign Tracking"],
                icon: (<img src="/images/icons/icon-chat.svg" alt="" style={{ width: 26, height: 26 }} />),
              },
            ].map(({ num, title, color, lead, focuses, icon }, i) => (
              <div key={num}
                className={`reveal${s3View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: color, borderRadius: 14, padding: "32px 24px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 16px 48px rgba(15,27,45,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 34, color: "rgba(216,115,7,0.12)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 10, lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: 18 }}>{lead}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 14 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>Focus Areas</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {focuses.map(f => (
                      <span key={f} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", borderRadius: 4, padding: "3px 8px" }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(12px)", borderRadius: 16, padding: "40px 56px", borderLeft: "4px solid #d87307" }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 16, lineHeight: 1.3 }}>
              One Framework. One Investor Journey.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.85, color: "#555", margin: 0 }}>
              Each pillar builds on the last, strengthening your story, improving investor targeting, and creating more meaningful conversations. Together, they form a connected fundraising framework designed to prepare, present, connect, and engage with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: CAPITAL RAISE JOURNEY ───────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-logs.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,15,32,0.93)" }} />
        <CircuitOverlay />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
              How We Help You Raise Capital
            </p>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 20, textAlign: "left" }}>
              From Investor Story to Fundraising Momentum
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 720 }}>
              Successful fundraising is built on a connected journey. Brand Iron guides founders from strategic positioning to investor engagement through a structured framework that builds confidence at every stage.
            </p>
          </div>

          {/* 6-step journey */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { num: "01", title: "Discover Your Story", body: "Define your vision, market opportunity, and investment thesis." },
              { num: "02", title: "Build Your Foundation", body: "Develop a clear investment narrative and messaging strategy." },
              { num: "03", title: "Prepare Investor-Ready Assets", body: "Create the materials investors expect to see." },
              { num: "04", title: "Identify the Right Investors", body: "Focus on investors aligned with your stage, industry, and goals." },
              { num: "05", title: "Engage Investors", body: "Support outreach, follow-up, and relationship building." },
              { num: "06", title: "Maintain Momentum", body: "Refine your messaging and sustain fundraising progress as conversations evolve." },
            ].map(({ num, title, body }, i) => (
              <div key={num}
                className={`reveal${s4View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "32px 28px", overflow: "hidden", transition: "background 0.25s, border-color 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.2)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 13, color: "#d87307" }}>{num}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 15, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>{title}</h3>
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: CHOOSE THE RIGHT SOLUTION ────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 72 }}>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
              Choose the Right Capital Raise Solution
            </p>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20, textAlign: "left" }}>
              Support for Every Stage of Your Fundraising Journey
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 760 }}>
              Whether you&apos;re preparing your first investor pitch, refining your story, identifying qualified investors, or executing outreach, Brand Iron offers specialized solutions that can stand alone or work together as a complete fundraising system.
            </p>
          </div>

          {/* 4 solution cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 64 }}>
            {[
              {
                name: "Capital Raise Deck", tagline: "Turn your opportunity into a compelling investment story.",
                desc: "We develop investor presentations that clearly communicate your vision, market opportunity, competitive advantage, and growth potential, helping you present with confidence.",
                bestFor: ["Startups preparing for investor meetings", "Companies seeking funding", "Leadership teams refining their investment story"],
                outcome: "A clear, investor-ready presentation that builds confidence and supports productive fundraising conversations.",
                href: "/services/capital-raise/deck", highlight: true,
              },
              {
                name: "Investor Database", tagline: "Connect with investors who align with your opportunity.",
                desc: "Successful fundraising isn't measured by how many investors you contact, it's measured by how many are the right fit. Our Investor Database helps identify, organize, and prioritize investors based on industry focus, investment stage, geographic preferences, and funding interests.",
                bestFor: ["Companies beginning investor outreach", "Teams expanding fundraising efforts", "Organizations seeking targeted investor research"],
                outcome: "A qualified investor pipeline aligned with your fundraising objectives.",
                href: "/services/capital-raise/investor-database", highlight: false,
              },
              {
                name: "Investor Outreach Campaigns", tagline: "Turn investor research into meaningful conversations.",
                desc: "Finding the right investors is only the beginning. We help develop investor outreach campaigns designed to introduce your opportunity, generate interest, and create qualified fundraising conversations.",
                bestFor: ["Active fundraising campaigns", "Companies ready to engage investors", "Teams seeking structured outreach support"],
                outcome: "More strategic investor conversations and stronger fundraising momentum.",
                href: "/services/capital-raise/outreach", highlight: false,
              },
              {
                name: "Investor GTM Support", tagline: "Build a fundraising strategy that creates long-term momentum.",
                desc: "Fundraising follows many of the same principles as a successful Go-to-Market strategy. Investor GTM Support brings positioning, outreach, messaging, and measurement together into a coordinated fundraising strategy.",
                bestFor: ["Growth-stage companies", "Leadership teams managing ongoing fundraising", "Organizations seeking strategic fundraising guidance"],
                outcome: "A coordinated fundraising strategy that supports long-term investor engagement and capital raise success.",
                href: "/services/capital-raise/gtm-support", highlight: false,
              },
            ].map(({ name, tagline, desc, bestFor, outcome, href, highlight }, i) => (
              <div key={name}
                className={`reveal${s5View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: highlight ? "#0F1B2D" : "#FFFFFF", border: highlight ? "none" : "1px solid rgba(15,27,45,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: highlight ? "0 20px 60px rgba(15,27,45,0.2)" : "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = highlight ? "0 28px 72px rgba(15,27,45,0.3)" : "0 12px 40px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = highlight ? "0 20px 60px rgba(15,27,45,0.2)" : "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ padding: "36px 32px 28px", flex: 1 }}>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 20, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: highlight ? "#FFFFFF" : "#0F1B2D", marginBottom: 12, lineHeight: 1.2 }}>{name}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: highlight ? "rgba(255,255,255,0.85)" : "#444", fontWeight: 600, marginBottom: 14 }}>{tagline}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: highlight ? "rgba(255,255,255,0.65)" : "#666", marginBottom: 24 }}>{desc}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: highlight ? "rgba(255,255,255,0.35)" : "#aaa", marginBottom: 10 }}>Ideal For</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                    {bestFor.map(b => (
                      <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0, marginTop: 5 }} />
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: highlight ? "rgba(255,255,255,0.7)" : "#555", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 32px 28px", borderTop: highlight ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.65, color: highlight ? "rgba(255,255,255,0.8)" : "#444", marginBottom: 20, fontStyle: "italic" }}>{outcome}</p>
                  <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#d87307", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Compare capital raise deck components */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 8 }}>
              Compare Capital Raise Solutions
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#666", maxWidth: 640, marginBottom: 32 }}>
              Every deliverable includes client onboarding, dedicated project management, and two rounds of revisions.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#0F1B2D", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 20px", textAlign: "left" }}>Component</th>
                    <th style={{ background: "#0F1B2D", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 20px", textAlign: "center" }}>Essentials Deck</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 20px", textAlign: "center" }}>Executive Deck</th>
                    <th style={{ background: "#1c3652", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 20px", textAlign: "center" }}>Teaser Piece</th>
                    <th style={{ background: "#1c3652", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 20px", textAlign: "center" }}>Proforma</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["BrandStorm™ Strategy Session", "Add-on", "Add-on", "Optional", "Optional"],
                    ["Messaging Platform", "Add-on", "Add-on", "Optional", "Optional"],
                    ["Deck Length", "Up to 12 slides", "Up to 24 slides", "—", "—"],
                    ["Investor Storytelling", "✓", "✓", "✓", "—"],
                    ["Financial Modeling Support", "—", "Optional", "—", "✓"],
                    ["Client Portal & Project Management", "Included", "Included", "Included", "Included"],
                    ["Included Revision Rounds", "2 rounds", "2 rounds", "2 rounds", "2 rounds"],
                  ].map(([cap, e1, e2, t, p], i) => (
                    <tr key={cap} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "14px 20px", color: "#0F1B2D", fontWeight: 600, borderBottom: "1px solid #EEEBE7" }}>{cap}</td>
                      <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7" }}>{e1}</td>
                      <td style={{ padding: "14px 20px", color: "#0F1B2D", fontWeight: 500, textAlign: "center", borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)" }}>{e2}</td>
                      <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7" }}>{t}</td>
                      <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7" }}>{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Not sure where to start */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ position: "relative", background: "rgba(216,115,7,0.08)", border: "1px solid rgba(216,115,7,0.2)", borderRadius: 16, padding: "48px 56px", marginTop: 56, overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 16, textAlign: "center" }}>
              Not Sure Where to Start?
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.85, color: "#555", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
              Every organization enters the fundraising process at a different stage. Some need to establish a compelling investor story before approaching the market. Others already have presentation materials but require access to qualified investors or support executing an effective outreach strategy. During a Capital Raise Strategy Session, we&apos;ll assess your current stage of investor readiness, identify the most impactful next steps, and recommend the solutions that best align with your fundraising objectives. Our solutions are designed to work independently, but they&apos;re most powerful when connected as part of a complete Capital Raise Support strategy, from investor story to investor engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── S6: WHAT SUCCESS LOOKS LIKE + FAQ ────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/BIRepresentationImage1Scale.jpeg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(248,242,232,0.93)" }} />
        <div ref={s6View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
              What Success Looks Like
            </p>
            <h2 className={`section-heading reveal${s6View.inView ? ' visible' : ''}`} style={{ color: "#0F1B2D", marginBottom: 20, textAlign: "left" }}>
              Investor Confidence That Creates Fundraising Momentum
            </h2>
            <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 720, marginBottom: 16 }}>
              A successful capital raise isn&apos;t measured by the number of presentations you deliver, it&apos;s measured by your ability to build investor confidence, create meaningful conversations, and move your fundraising forward.
            </p>
            <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 720 }}>
              Our Capital Raise Support framework is designed to help you communicate your opportunity with clarity, engage the right investors, and create the momentum needed to support long-term growth.
            </p>
          </div>

          {/* 4 outcome cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 56 }}>
            {[
              {
                title: "Strategic Clarity",
                body: "Build a clear investment story supported by strong positioning, consistent messaging, and a compelling value proposition.",
                impacts: ["Stronger positioning", "Clearer messaging", "More compelling investor narrative"],
              },
              {
                title: "Investor Confidence",
                body: "Present a business opportunity investors can quickly understand, evaluate, and trust.",
                impacts: ["Greater credibility", "Stronger executive presence", "Improved investment readiness"],
              },
              {
                title: "Meaningful Investor Conversations",
                body: "Connect with qualified investors through targeted research, strategic outreach, and consistent engagement.",
                impacts: ["Better investor fit", "Higher-quality conversations", "Improved fundraising momentum"],
              },
              {
                title: "Long-Term Business Value",
                body: "Create strategic assets and messaging that continue supporting future fundraising, partnerships, and business growth.",
                impacts: ["Reusable investor assets", "Consistent communications", "Scalable fundraising foundation"],
              },
            ].map(({ title, body, impacts }, i) => (
              <div key={title}
                className={`reveal${s6View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.92)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "28px 24px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 40px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 15, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#0F1B2D", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", marginBottom: 18 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(216,115,7,0.2)", paddingTop: 14 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>Outcome</p>
                  {impacts.map(im => (
                    <div key={im} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "#444" }}>{im}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic insight */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ position: "relative", background: "#0F1B2D", borderRadius: 16, padding: "40px 56px", marginBottom: 56, overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Strategic Insight</p>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF", lineHeight: 1.4, margin: 0 }}>
              Capital is the outcome. Investor confidence is what makes it possible.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
              Frequently Asked Questions
            </p>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em", color: "#0F1B2D", marginBottom: 8 }}>
              Common Questions About Capital Raise Support
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 660, margin: "0 0 40px" }}>
              Preparing for a capital raise often raises as many questions as it answers. Below are some of the most common questions founders and leadership teams ask as they prepare for investor conversations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
                  >
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600, color: "#0F1B2D", lineHeight: 1.5 }}>{q}</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? "#d87307" : "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke={openFaq === i ? "#FFFFFF" : "#d87307"} strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "140px 40px",
        backgroundImage: "url('/images/bg-leather.svg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,3,0.55)" }} />
        <div ref={ctaView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40, justifyContent: "center" }}>
            <div style={{ flex: 1, maxWidth: 200, height: 1, background: "rgba(216,115,7,0.35)" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d87307" }} />
            <div style={{ flex: 1, maxWidth: 200, height: 1, background: "rgba(216,115,7,0.35)" }} />
          </div>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
            Build Investor Confidence Before You Raise Capital
          </p>
          <h2 className={`reveal${ctaView.inView ? ' visible' : ''} section-heading`} style={{ color: "transparent", WebkitTextStroke: "2px #FFFFFF", marginBottom: 24 }}>
            Let&apos;s Build Your Capital Raise Strategy.
          </h2>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.8)", maxWidth: 700, margin: "0 auto 20px" }}>
            Every successful fundraising journey begins with a clear strategy. Whether you&apos;re preparing for your first investor meeting or managing an active capital raise, success depends on more than presentation materials. It requires a compelling investment story, the right investor strategy, and a structured approach that builds confidence at every stage of the fundraising journey.
          </p>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: 680, margin: "0 auto 48px" }}>
            Let&apos;s build a capital raise strategy that helps your organization prepare, connect, and engage with confidence.
          </p>
          <div className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
            <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 15, padding: "18px 44px" }}>
              Schedule a Capital Raise Strategy Session
            </Link>
            <Link href="/services/gtm" className="hero-btn-outline" style={{ fontSize: 15, padding: "18px 44px" }}>
              Explore Our Go-to-Market Strategy Services
            </Link>
          </div>
          <p className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto" }}>
            Raising capital is only one part of sustainable growth. Discover how our Go-to-Market Strategy helps organizations become discoverable, trusted, and chosen while building predictable revenue systems.
          </p>
        </div>
      </section>

    </main>
  );
}
