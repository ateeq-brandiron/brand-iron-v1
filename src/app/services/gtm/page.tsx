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

export default function GTMPage() {
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const s7View = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a Go-to-Market (GTM) strategy?",
      a: "A Go-to-Market strategy is a structured plan for bringing your products or services to the right market with the right messaging, channels, and customer experience. At Brand Iron, we expand the traditional GTM approach by integrating strategy, AI Visibility, demand generation, sales enablement, analytics, and automation into one connected growth system. The objective isn't simply to launch campaigns, it's to create sustainable, measurable business growth.",
    },
    {
      q: "How is Brand Iron's GTM approach different from traditional marketing services?",
      a: "Traditional marketing engagements often focus on individual tactics such as SEO, advertising, content, or social media. Brand Iron begins with business strategy and connects every initiative, including visibility, authority, demand generation, sales, analytics, and automation, into a unified Go-to-Market framework. This holistic approach helps organizations create alignment across departments rather than optimizing isolated marketing activities.",
    },
    {
      q: "Why does AI Visibility matter in a Go-to-Market strategy?",
      a: "Today's buyers don't rely solely on search engines. They ask AI platforms, compare competitors, read reviews, explore thought leadership, and validate organizations before reaching out. AI Visibility helps your organization become discoverable across this modern buying journey by strengthening semantic search, entity optimization, structured data, knowledge graph signals, and answer-ready content. As AI continues to influence purchasing decisions, discoverability extends far beyond traditional SEO.",
    },
    {
      q: "Which Go-to-Market tier is right for my organization?",
      a: "The right engagement depends on your current stage of growth. Foundation is ideal for organizations building strategic clarity, visibility, and core marketing systems. Growth Engine is designed for companies seeking to expand authority, accelerate demand generation, and create predictable pipeline growth. Revenue Accelerator supports mature organizations that require enterprise-level automation, advanced AI Visibility, executive thought leadership, and scalable revenue systems. During a strategy session, we'll evaluate your current Go-to-Market maturity and recommend the level of execution best aligned with your business objectives.",
    },
    {
      q: "How long does a Go-to-Market engagement typically last?",
      a: "Most organizations see the greatest value through a structured, phased engagement. The Foundation engagement establishes strategic direction and core capabilities. As the business grows, organizations often expand into Growth Engine and Revenue Accelerator to strengthen demand generation, authority building, revenue intelligence, and automation. Our roadmap is designed to evolve with your business rather than forcing every initiative into a single implementation phase.",
    },
    {
      q: "When should an organization invest in a Go-to-Market strategy?",
      a: "Organizations often benefit from a GTM strategy when they are launching a new company, product, or service; entering a new market; repositioning their brand; experiencing inconsistent pipeline growth; expanding into new geographic regions; preparing to scale revenue operations; or looking to improve alignment between marketing and sales. The earlier strategic alignment is established, the easier it becomes to build sustainable growth.",
    },
    {
      q: "How do you measure success?",
      a: "Success isn't measured by marketing activity alone. We evaluate progress using business-focused metrics such as qualified pipeline growth, AI Visibility improvements, organic search performance, brand authority signals, conversion rates, revenue attribution, sales and marketing alignment, operational efficiency, and executive KPI dashboards. These metrics provide a more complete view of how your Go-to-Market strategy contributes to long-term business performance.",
    },
    {
      q: "Do I need to replace my existing marketing team?",
      a: "No. Brand Iron is designed to complement your existing team, not replace it. We frequently work alongside internal marketing, sales, executive leadership, and external partners to provide strategic direction, specialized expertise, and integrated execution. Our role is to strengthen the systems that support growth while helping your existing resources operate more effectively.",
    },
    {
      q: "Can Brand Iron work with organizations that already have marketing initiatives in place?",
      a: "Absolutely. Many organizations come to us with existing websites, SEO campaigns, content marketing, paid advertising, CRM platforms, or sales processes already in place. Rather than starting from scratch, we evaluate what's working, identify gaps, strengthen alignment, and build upon your existing investments to create a more connected and effective Go-to-Market system.",
    },
    {
      q: "What happens after the strategy session?",
      a: "Every engagement begins with understanding your business, not prescribing a solution. During the strategy session, we'll evaluate your market position, current Go-to-Market maturity, business objectives, and growth opportunities. Based on those insights, we'll recommend the level of execution that best supports your organization's goals and outline a phased roadmap for implementation.",
    },
  ];

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="gtm-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/The_connecting_line_should_not_Kling_O3_Video_Edit_60783.mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="gtm-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="gtm-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "'Burford Rustic Inline', sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Go-to-Market Strategies Built for How Buyers Make Decisions Today
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <Link href="/contact" className="hero-btn-primary" style={{ fontSize: 14, padding: "15px 32px" }}>
                  Schedule a GTM Strategy Session
                </Link>
                <Link href="#framework" className="hero-btn-outline" style={{ fontSize: 14, padding: "14px 30px" }}>
                  Explore the GTM Framework
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
                Today&apos;s buyers evaluate options long before speaking with sales. They use AI platforms, compare competitors, read reviews, validate expertise, and seek trusted recommendations across multiple channels.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                Growth today requires more than marketing campaigns. It demands a connected go-to-market system that aligns strategy, visibility, demand generation, sales, automation, and revenue.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .gtm-hero-section { height: auto !important; min-height: 100vh; }
            .gtm-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .gtm-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: BUYING JOURNEY EVOLVED ─────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            The Buying Journey Has Evolved. Your Go-to-Market Strategy Should Too.
          </h2>

          <div style={{ margin: "0 0 72px" }}>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              Traditional go-to-market strategies still provide the foundation, but today&apos;s buying journey is far more complex. Buyers move between search engines, AI platforms, industry communities, reviews, and peer recommendations long before engaging with sales.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16 }}>
              Growth now depends on more than marketing. It requires a connected system that makes your business discoverable, builds trust across every touchpoint, and aligns strategy, visibility, demand generation, sales, automation, and analytics.
            </p>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#444", fontWeight: 600 }}>
              The organizations winning market share aren&apos;t simply spending more—they&apos;re executing better through connected growth systems. That&apos;s the advantage of a modern go-to-market strategy.
            </p>
          </div>

          {/* Comparison table */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 28 }}>
              Traditional GTM vs. Today&apos;s Buying Reality
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 28px", textAlign: "left", width: "50%" }}>Traditional GTM</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 28px", textAlign: "left", width: "50%" }}>Today&apos;s Buying Reality</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Buyers relied primarily on search engines and sales conversations.", "Buyers research across AI platforms, search engines, LinkedIn, reviews, communities, and industry content before engaging."],
                    ["Marketing and sales often operated as separate functions.", "Marketing, sales, customer experience, and operations must work together to build trust."],
                    ["Search visibility focused largely on SEO.", "Organizations need visibility across SEO, AI search, conversational search, semantic search, and entity-based discovery."],
                    ["Success was measured by traffic and lead volume.", "Success is measured by qualified pipeline, trust, authority, and sustainable revenue growth."],
                    ["Growth initiatives were executed in silos.", "Growth requires an integrated system where every initiative supports the next."],
                  ].map(([then, now], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "20px 28px", color: "#666", lineHeight: 1.65, borderBottom: "1px solid #EEEBE7" }}>{then}</td>
                      <td style={{ padding: "20px 28px", color: "#1a1a1a", fontWeight: 500, lineHeight: 1.65, borderBottom: "1px solid #EEEBE7" }}>{now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key insight */}
          <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 700 }}>
            Modern Go-to-Market success isn&apos;t about doing more marketing. It&apos;s about creating alignment between strategy, visibility, authority, demand generation, revenue operations, and customer experience so buyers encounter a consistent, trustworthy brand at every stage of their journey.
          </p>
        </div>
      </section>

      {/* ── S3: THE BRAND IRON GTM FRAMEWORK ───────────────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/techy sagebrush.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.68)" }} />
        <CircuitOverlay />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Growth Doesn&apos;t Come from More Marketing. It Comes from Better Alignment.
            </h2>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", margin: "0 0 16px" }}>
              Organizations don&apos;t struggle because they&apos;re doing too little—they struggle because their efforts aren&apos;t connected.
            </p>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16 }}>
              A modern go-to-market strategy is more than a collection of tactics. It aligns strategy, visibility, authority, demand generation, sales, automation, and analytics into one connected growth system where every initiative supports measurable business outcomes.
            </p>
            <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#444", fontWeight: 600 }}>
              That&apos;s how Brand Iron helps organizations build sustainable growth.
            </p>
          </div>

          <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 28 }}>
            The Six Pillars of Modern Go-to-Market
          </h3>

          {/* 6 Pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
            {[
              {
                num: "01", title: "Strategy",
                lead: "Every successful Go-to-Market initiative begins with clarity.",
                body: "Understanding your market, ideal customers, competitive landscape, and value proposition creates the foundation for every decision that follows.",
                focuses: ["Market Strategy", "Ideal Customer Profile (ICP)", "Buyer Personas", "Competitive Intelligence", "Positioning & Messaging", "Go-to-Market Roadmap"],
                icon: (<img src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
              {
                num: "02", title: "Visibility",
                lead: "Buyers can't evaluate a business they never discover.",
                body: "Modern visibility extends beyond traditional search rankings to include AI search platforms, semantic search, entity optimization, and structured digital signals that help organizations appear wherever decisions begin.",
                focuses: ["Technical SEO", "AI Visibility", "AEO & GEO", "Entity Optimization", "Schema & Structured Data", "Knowledge Graph Readiness"],
                icon: (<img src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
              {
                num: "03", title: "Authority",
                lead: "Visibility creates awareness. Authority creates confidence.",
                body: "Trust is built through expertise, credibility, and consistent digital signals that influence both people and AI systems evaluating your organization.",
                focuses: ["Thought Leadership", "Executive Branding", "Reviews & Reputation", "Digital PR", "Media Coverage", "Industry Recognition"],
                icon: (<img src="/images/icons/icon-chat.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
              {
                num: "04", title: "Demand",
                lead: "Once trust is established, organizations need a consistent system for attracting and nurturing qualified prospects",
                body: "through valuable content, meaningful engagement, and strategic campaigns.",
                focuses: ["Content Strategy", "SEO Content", "Social Media", "Video Content", "Paid Media", "Campaign Execution"],
                icon: (<img src="/images/icons/icon-lightning.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
              {
                num: "05", title: "Revenue",
                lead: "Demand alone doesn't create growth.",
                body: "Revenue comes from converting interest into meaningful business opportunities through coordinated outreach, optimized customer journeys, and sales enablement.",
                focuses: ["Outbound Campaigns", "LinkedIn Outreach", "Email Outreach", "Conversion Optimization", "Sales Funnels", "Partnership Development"],
                icon: (<img src="/images/icons/icon-trending.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
              {
                num: "06", title: "Operations",
                lead: "As organizations grow, complexity grows with them.",
                body: "Connected systems, automation, analytics, and performance measurement ensure growth remains scalable, measurable, and repeatable.",
                focuses: ["Revenue Intelligence", "KPI Dashboards", "CRM & Marketing Automation", "Workflow Automation", "AI Assistants", "Executive Reporting"],
                icon: (<img src="/images/icons/icon-gear.svg" alt="" style={{ width: 28, height: 28 }} />),
              },
            ].map(({ num, title, lead, body, focuses, icon }, i) => (
              <div key={num}
                className={`reveal stagger-${(i % 3) + 1}${s3View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 14, padding: "36px 28px 32px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column", minHeight: 480 }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontWeight: 900, fontSize: 40, color: "rgba(216,115,7,0.14)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#444", fontWeight: 600, marginBottom: 10 }}>{lead}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, marginTop: "auto" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Focus Areas</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {focuses.map(f => (
                      <span key={f} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy statement */}
          <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontSize: 20, lineHeight: 1.6, color: "#1a1a1a", fontWeight: 700, marginBottom: 16 }}>
            At Brand Iron, we believe sustainable growth is engineered by connecting these systems into one unified Go-to-Market framework.
          </p>
          <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#2a2318", fontWeight: 500 }}>
            This holistic approach ensures every initiative contributes to a larger business objective rather than operating in isolation. The result isn&apos;t simply more activity, it&apos;s a stronger foundation for long-term growth, supported by measurable outcomes and a framework that evolves as your organization grows.
          </p>
        </div>
      </section>

      {/* ── S4: HOW THE FRAMEWORK BECOMES EXECUTION ─────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#0F1B2D",
      }}>
        <CircuitOverlay />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 20, textAlign: "left" }}>
              A Framework Is Only Valuable If It Can Be Executed.
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.8, color: "#FFFFFF", margin: "0 0 12px" }}>
              Strategy sets the direction. Sustainable growth comes from disciplined execution.
            </p>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: 12 }}>
              Rather than following a one-size-fits-all playbook, Brand Iron activates the right capabilities at the right time. Each initiative builds on the last, creating a connected growth system that strengthens visibility, authority, demand, conversion, and revenue.
            </p>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.8, color: "#FFFFFF" }}>
              Together, these eight execution components transform strategy into measurable growth.
            </p>
          </div>

          <h3 className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#FFFFFF", marginBottom: 28 }}>
            The Eight Components of Execution
          </h3>

          {/* 8 execution components */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {[
              {
                num: "01", title: "Strategy & Market Intelligence",
                lead: "Every successful Go-to-Market initiative begins with understanding the market before entering it.",
                body: "We identify your ideal customers, evaluate competitors, refine positioning, strengthen messaging, and develop a strategic roadmap that aligns every future initiative around clear business objectives.",
                activities: ["GTM Strategy & Roadmap", "Ideal Customer Profile (ICP)", "Buyer Personas", "Competitive Analysis", "Messaging Framework", "Offer Positioning"],
                icon: (<img src="/images/icons/icon-briefcase.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "02", title: "Visibility & Discoverability",
                lead: "Being the best solution has little value if buyers and AI platforms can't find you.",
                body: "We strengthen your digital foundation through technical optimization, AI Visibility, semantic search, structured data, and entity optimization so your organization is discoverable wherever modern buying journeys begin.",
                activities: ["Technical SEO", "AI Visibility", "AEO & GEO", "Entity Optimization", "Schema Markup", "AI Recommendation Testing"],
                icon: (<img src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "03", title: "Authority & Trust Building",
                lead: "Visibility creates awareness. Authority creates confidence.",
                body: "Modern buyers—and increasingly AI systems—look for signals that demonstrate expertise, credibility, and trust before recommending or engaging with an organization. We help establish those signals through strategic content, executive positioning, reviews, digital PR, and industry recognition.",
                activities: ["Authority Content", "Executive Branding", "Review Strategy", "Thought Leadership", "Guest Posting", "Digital PR"],
                icon: (<img src="/images/icons/icon-chat.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "04", title: "Demand Generation",
                lead: "Once trust is established, organizations need a consistent system for attracting qualified opportunities.",
                body: "Our demand generation initiatives combine educational content, social media, search visibility, paid campaigns, and targeted marketing efforts to engage buyers throughout their decision-making journey.",
                activities: ["Content Strategy", "SEO Content", "Industry Pages", "Social Media", "Video Content", "Paid Campaigns"],
                icon: (<img src="/images/icons/icon-lightning.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "05", title: "Outbound & Business Development",
                lead: "Not every opportunity should wait to discover you.",
                body: "We help organizations proactively build relationships through strategic outreach, business development initiatives, partnerships, and referral programs that complement inbound demand generation.",
                activities: ["Prospect Research", "Lead Enrichment", "LinkedIn Outreach", "Email Outreach", "Appointment Setting", "Partnership Development"],
                icon: (<img src="/images/icons/icon-arrow.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "06", title: "Conversion Optimization",
                lead: "Generating interest is only valuable when it leads to meaningful business outcomes.",
                body: "We evaluate every stage of the customer journey to remove friction, improve user experience, strengthen offers, and increase the percentage of visitors who become qualified opportunities.",
                activities: ["Landing Page Optimization", "Conversion Reviews", "Lead Magnets", "Funnel Development", "CRO", "A/B Testing"],
                icon: (<img src="/images/icons/icon-trending.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "07", title: "Analytics & Revenue Intelligence",
                lead: "Growth decisions should be informed by evidence—not assumptions.",
                body: "Our reporting framework connects marketing performance, sales activity, and revenue insights into executive-level dashboards that support better planning, forecasting, and continuous improvement.",
                activities: ["GA4 & Measurement", "KPI Dashboards", "Revenue Attribution", "Executive Reporting", "AI Visibility Reporting", "Revenue Forecasting"],
                icon: (<img src="/images/icons/icon-barchart.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
              {
                num: "08", title: "Automation & Scaling",
                lead: "As organizations grow, manual processes become barriers to growth.",
                body: "Automation creates consistency, improves operational efficiency, and allows your team to scale without increasing complexity at the same pace.",
                activities: ["CRM Optimization", "Email Automation", "Workflow Automation", "Lead Routing", "Marketing Automation", "AI Assistants"],
                icon: (<img src="/images/icons/icon-gear.svg" alt="" style={{ width: 24, height: 24 }} />),
              },
            ].map(({ num, title, lead, body, activities, icon }, i) => (
              <div key={num}
                className={`reveal stagger-${(i % 2) + 1}${s4View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "36px 32px", overflow: "hidden", transition: "background 0.25s, border-color 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.2)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontWeight: 900, fontSize: 34, color: "rgba(255,255,255,0.08)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#FFFFFF", marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.92)", fontWeight: 600, marginBottom: 10 }}>{lead}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>Typical Activities</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {activities.map(a => (
                      <span key={a} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, padding: "3px 8px" }}>{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: THREE TIERS ────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              One Framework. Three Levels of Execution.
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", margin: "0 0 16px" }}>
              Every organization has different growth priorities. Whether you need a stronger foundation, accelerated demand generation, or enterprise-scale revenue systems, Brand Iron offers three progressive Go-to-Market solutions that grow with your business.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666" }}>
              Each tier builds on the last, expanding capabilities as your organization evolves.
            </p>
          </div>

          {/* Three tier cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
            {[
              {
                tier: "Tier 1", name: "Foundation", tagline: "Build the strategic foundation for sustainable growth.",
                desc: "Designed for organizations establishing market positioning, improving discoverability, and creating the systems needed to generate consistent opportunities.",
                bestFor: ["Early-stage companies", "Local and regional businesses", "Organizations formalizing their GTM strategy", "Teams building marketing and sales alignment"],
                outcome: "Create a strong foundation for visibility, credibility, and predictable growth.",
                href: "/contact",
                highlight: false,
              },
              {
                tier: "Tier 2", name: "Growth Engine", tagline: "Expand authority, accelerate demand, and create a scalable revenue engine.",
                desc: "Designed for organizations ready to strengthen market presence, generate qualified pipeline, and connect marketing, sales, and operations through more advanced execution.",
                bestFor: ["Growing B2B organizations", "Companies entering new markets", "Businesses seeking predictable pipeline growth", "Teams ready to scale beyond foundational marketing"],
                outcome: "Increase qualified demand, strengthen authority, and improve revenue performance.",
                href: "/contact",
                highlight: true,
              },
              {
                tier: "Tier 3", name: "Revenue Accelerator", tagline: "Scale growth through enterprise-level strategy, automation, and revenue optimization.",
                desc: "Designed for organizations with mature Go-to-Market operations that require advanced automation, executive thought leadership, AI visibility leadership, and multi-channel growth initiatives.",
                bestFor: ["Established organizations", "Multi-location businesses", "Enterprise teams", "Companies pursuing aggressive growth initiatives"],
                outcome: "Scale market leadership while improving operational efficiency and revenue performance.",
                href: "/contact",
                highlight: false,
              },
            ].map(({ tier, name, tagline, desc, bestFor, outcome, href, highlight }, i) => (
              <div key={tier}
                className={`reveal stagger-${i + 1}${s5View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: highlight ? "2px solid #d87307" : "1px solid #EEEBE7", borderRadius: 14, overflow: "hidden", boxShadow: highlight ? "0 20px 60px rgba(216,115,7,0.15)" : "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = highlight ? "0 28px 72px rgba(216,115,7,0.22)" : "0 12px 40px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = highlight ? "0 20px 60px rgba(216,115,7,0.15)" : "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                {highlight && <div style={{ position: "absolute", top: 16, right: 16, background: "#d87307", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 20 }}>Most Popular</div>}
                <div style={{ padding: "36px 32px 28px", flex: 1 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>{tier}</p>
                  <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.2 }}>{name}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#444", fontWeight: 600, marginBottom: 14 }}>{tagline}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666", marginBottom: 24 }}>{desc}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Best For</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                    {bestFor.map(b => (
                      <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0, marginTop: 5 }} />
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 32px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.65, color: "#444", marginBottom: 20, fontStyle: "italic" }}>{outcome}</p>
                  <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: highlight ? "#d87307" : "transparent", color: highlight ? "#FFFFFF" : "#d87307", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: highlight ? "12px 24px" : "0", borderRadius: 8, textDecoration: "none", border: highlight ? "none" : "none" }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* At a Glance comparison table */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 24 }}>
              At a Glance
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 11, padding: "16px 24px", textAlign: "left" }}>Capability</th>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "16px 24px", textAlign: "center" }}>Foundation</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "16px 24px", textAlign: "center" }}>Growth Engine</th>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "16px 24px", textAlign: "center" }}>Revenue Accelerator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ideal Stage", "Early Growth", "Scaling", "Mature Growth"],
                    ["Primary Focus", "Visibility & Credibility", "Demand & Authority", "Revenue Scale & Market Leadership"],
                    ["Strategic Depth", "Essential", "Advanced", "Comprehensive"],
                    ["AI Visibility", "Foundation", "Expanded", "Enterprise"],
                    ["Demand Generation", "Core", "Multi-Channel", "Omnichannel"],
                    ["Automation", "Essential", "Advanced", "Enterprise"],
                    ["Executive Support", "Strategic Guidance", "Quarterly Planning", "Executive Revenue Strategy"],
                  ].map(([cap, f, g, r], i) => (
                    <tr key={cap} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "16px 24px", color: "#1a1a1a", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #EEEBE7" }}>{cap}</td>
                      <td style={{ padding: "16px 24px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7" }}>{f}</td>
                      <td style={{ padding: "16px 24px", color: "#1a1a1a", fontWeight: 500, textAlign: "center", borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)" }}>{g}</td>
                      <td style={{ padding: "16px 24px", color: "#555", textAlign: "center", borderBottom: "1px solid #EEEBE7" }}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: CAPABILITY COMPARISON ──────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#0F1B2D",
      }}>
        <CircuitOverlay />
        <div ref={s6View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s6View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 20, textAlign: "left" }}>
              The Right Strategy Isn&apos;t About More Services. It&apos;s About the Right Capabilities.
            </h2>
            <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 720 }}>
              Rather than overwhelming you with a list of deliverables, this comparison highlights how each engagement expands your organization&apos;s capabilities as it grows. Each tier builds upon the previous one, creating a scalable Go-to-Market system that evolves alongside your business.
            </p>
          </div>

          {/* Capability table */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ overflowX: "auto", marginBottom: 64 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>
              <thead>
                <tr>
                  <th style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "18px 24px", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Capability</th>
                  <th style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "18px 24px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Foundation</th>
                  <th style={{ background: "rgba(216,115,7,0.18)", color: "#f0a860", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "18px 24px", textAlign: "center", borderBottom: "1px solid rgba(216,115,7,0.35)" }}>Growth Engine</th>
                  <th style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "18px 24px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Revenue Accelerator</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Strategic Planning", "✓", "✓", "✓"],
                  ["Quarterly Strategy Reviews", "—", "✓", "✓"],
                  ["Revenue Forecast Modeling", "—", "✓", "✓"],
                  ["AI Visibility Foundation", "✓", "✓", "✓"],
                  ["Knowledge Graph Optimization", "—", "✓", "✓"],
                  ["AI Recommendation Monitoring", "Basic", "Advanced", "Enterprise"],
                  ["Authority Development", "Core", "Expanded", "Enterprise"],
                  ["Executive Thought Leadership", "—", "✓", "✓"],
                  ["Digital PR & Podcast Outreach", "—", "✓", "✓"],
                  ["Media Placements", "—", "—", "✓"],
                  ["Demand Generation", "Core", "Multi-Channel", "Omnichannel"],
                  ["Paid Advertising", "—", "✓", "✓"],
                  ["LinkedIn & Email Outreach", "✓", "✓", "✓"],
                  ["Partnership Development", "—", "✓", "✓"],
                  ["Conversion Optimization", "Foundation", "Advanced", "Enterprise"],
                  ["Revenue Intelligence", "Core", "Advanced", "Executive-Level"],
                  ["CRM & Marketing Automation", "Essential", "Advanced", "Enterprise"],
                  ["AI Assistants & Sales Automation", "—", "—", "✓"],
                  ["Executive Reporting", "Standard", "Advanced", "Strategic"],
                ].map(([cap, f, g, r], i) => (
                  <tr key={cap} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "transparent" }}>
                    <td style={{ padding: "14px 24px", color: "rgba(255,255,255,0.92)", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{cap}</td>
                    <td style={{ padding: "14px 24px", color: f === "—" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.8)", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{f}</td>
                    <td style={{ padding: "14px 24px", color: g === "—" ? "rgba(216,115,7,0.4)" : "#f0a860", textAlign: "center", fontWeight: 500, borderBottom: "1px solid rgba(216,115,7,0.15)", background: "rgba(216,115,7,0.06)" }}>{g}</td>
                    <td style={{ padding: "14px 24px", color: r === "—" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.8)", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Capability progression */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, alignItems: "center", marginBottom: 56 }}>
            {[
              { tier: "Foundation", body: "Establish the strategic, technical, and operational systems required to build market visibility and generate consistent opportunities." },
              { tier: "Growth Engine", body: "Expand authority, accelerate demand generation, strengthen revenue intelligence, and improve operational efficiency." },
              { tier: "Revenue Accelerator", body: "Scale every aspect of the Go-to-Market system through executive strategy, enterprise automation, advanced AI visibility, and multi-channel growth initiatives." },
            ].map(({ tier, body }, i) => (
              <>
                <div key={tier} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "28px 28px", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d87307", marginBottom: 10 }}>{tier}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: 0 }}>{body}</p>
                </div>
                {i < 2 && <div key={`arrow-${i}`} style={{ padding: "0 16px", textAlign: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M14 7l5 5-5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}
              </>
            ))}
          </div>

          {/* What's included */}
          <div className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ position: "relative", background: "rgba(216,115,7,0.08)", border: "1px solid rgba(216,115,7,0.2)", borderRadius: 16, padding: "48px 56px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#FFFFFF", marginBottom: 16, textAlign: "center" }}>
              What&apos;s Included Across Every Engagement
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.88)", textAlign: "center", maxWidth: 640, margin: "0 auto 32px" }}>
              Regardless of the tier you choose, every engagement begins with a commitment to creating a connected growth system, not disconnected marketing activities.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {["Strategic consulting", "Executive collaboration", "Performance measurement", "AI Visibility best practices", "Cross-functional alignment", "Business-focused recommendations", "A roadmap for long-term growth"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "8px 16px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: OUTCOMES ───────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 56px",
        backgroundImage: "url('/images/bg-wood.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(248,242,232,0.91)" }} />
        <div ref={s7View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s7View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              A Go-to-Market Strategy Should Create Measurable Business Momentum.
            </h2>
            <p className={`reveal${s7View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 720 }}>
              Every initiative within the Brand Iron framework is designed to move your business toward these outcomes.
            </p>
          </div>

          {/* 5 outcome cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20 }}>
            {[
              {
                title: "Become Easier to Discover",
                body: "Modern buyers and AI platforms can't evaluate businesses they never find. Strengthening your visibility across search engines, AI search, semantic search, and digital knowledge sources increases the likelihood that your organization is discovered at the moments that matter.",
                impacts: ["Greater digital discoverability", "Improved AI search presence", "Increased qualified website traffic", "Stronger search visibility"],
              },
              {
                title: "Build Lasting Trust and Authority",
                body: "Visibility creates awareness. Authority creates preference. Organizations that consistently demonstrate expertise across content, thought leadership, reviews, media, and industry recognition earn greater trust from both buyers and AI systems.",
                impacts: ["Increased brand credibility", "Stronger executive positioning", "More third-party trust signals", "Greater influence during buying decisions"],
              },
              {
                title: "Generate Higher-Quality Demand",
                body: "Not all leads create revenue. A connected Go-to-Market strategy attracts organizations that align with your expertise, resulting in stronger conversations, better-qualified opportunities, and healthier pipeline growth.",
                impacts: ["Higher-quality pipeline", "Better lead qualification", "Improved sales conversations", "Increased opportunity creation"],
              },
            ].map(({ title, body, impacts }, i) => (
              <div key={title}
                className={`reveal stagger-${i + 1}${s7View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.92)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "32px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 40px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(216,115,7,0.2)", paddingTop: 16 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>Business Impact</p>
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
          <div style={{ display: "flex", gap: 20, marginBottom: 56 }}>
            {[
              {
                title: "Improve Revenue Performance",
                body: "Revenue growth isn't driven by marketing alone. When strategy, marketing, sales, and operations work together, organizations reduce friction throughout the customer journey and create more predictable commercial outcomes.",
                impacts: ["Higher conversion rates", "Improved sales efficiency", "Better revenue forecasting", "More predictable growth"],
              },
              {
                title: "Create a Scalable Growth System",
                body: "As organizations grow, disconnected processes become increasingly difficult to manage. Integrated reporting, automation, CRM optimization, and revenue intelligence provide the operational foundation needed to scale without unnecessary complexity.",
                impacts: ["Greater operational efficiency", "Faster decision-making", "Reduced manual effort", "Sustainable long-term growth"],
              },
            ].map(({ title, body, impacts }, i) => (
              <div key={title}
                className={`reveal stagger-${i + 1}${s7View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.92)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "32px 28px", flex: 1, overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 40px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", marginBottom: 20 }}>{body}</p>
                <div style={{ borderTop: "1px solid rgba(216,115,7,0.2)", paddingTop: 16 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>Business Impact</p>
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

          {/* Growth is built in phases */}
          <div className={`reveal${s7View.inView ? ' visible' : ''}`} style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 16, padding: "48px 56px", marginBottom: 56, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 16, textAlign: "center" }}>
              Growth Is Built in Phases
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555", textAlign: "center", maxWidth: 620, margin: "0 auto 36px" }}>
              Meaningful growth doesn&apos;t happen through isolated campaigns. It develops through a structured progression, where each phase strengthens the next and builds long-term momentum.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Phase", "Primary Objective", "Business Outcome"].map(h => (
                      <th key={h} style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11, padding: "14px 20px", textAlign: "left", borderBottom: "1px solid #EEEBE7" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Foundation", "Build strategic clarity and digital visibility", "Stronger positioning and discoverability"],
                    ["Growth", "Expand authority and generate qualified demand", "Increased pipeline and market presence"],
                    ["Acceleration", "Optimize revenue systems and operational efficiency", "Scalable, predictable business growth"],
                  ].map(([phase, obj, outcome], i) => (
                    <tr key={phase} style={{ background: i % 2 === 0 ? "#FFFFFF" : "transparent" }}>
                      <td style={{ padding: "16px 20px", color: "#d87307", fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #EEEBE7" }}>{phase}</td>
                      <td style={{ padding: "16px 20px", color: "#444", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{obj}</td>
                      <td style={{ padding: "16px 20px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className={`reveal${s7View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 8 }}>
              Common Questions About Our Go-to-Market Strategy Services
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 640, margin: "0 0 40px" }}>
              Every organization approaches Go-to-Market strategy from a different starting point. Below are some of the most common questions we receive from leadership teams.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.88)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
                  >
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{q}</span>
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

    </main>
  );
}
