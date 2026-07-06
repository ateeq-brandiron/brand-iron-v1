"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  { label: "Brand Strategy" },
  { label: "AI Visibility" },
  { label: "GTM Strategy" },
  { label: "Revenue Engineering" },
  { label: "Outbound Growth" },
  { label: "Website Development" },
  { label: "Capital Raise Support" },
];

const stats = [
  { icon: "🏢", num: "50+", label: "Brands Supported" },
  { icon: "💼", num: "150,000+", label: "Investor Network" },
  { icon: "⚡", num: "AI-First", label: "Growth Strategies" },
];

const problems = [
  { heading: "Buyers can't clearly differentiate your business.", body: "Without a compelling market position, even great companies become interchangeable." },
  { heading: "You're difficult to discover.", body: "Modern buyers search across AI platforms, search engines, communities, and industry resources. If you aren't present where decisions begin, opportunities disappear before they reach your website." },
  { heading: "Marketing creates activity — not enough pipeline.", body: "Campaigns launch. Content gets published. Reports get shared. But activity doesn't always translate into qualified opportunities." },
  { heading: "Sales and marketing aren't aligned.", body: "Disconnected messaging, inconsistent lead quality, and siloed data make growth harder than it should be." },
  { heading: "Technology adds complexity.", body: "CRM platforms, automation, analytics, and reporting should simplify growth — not create more work." },
];

const differentiators = [
  { num: "01", title: "Strategy Before Tactics", body: "Every engagement begins with understanding your business, market, and goals before recommending solutions. Strong execution starts with a clear strategy." },
  { num: "02", title: "Connected Growth Systems", body: "Brand strategy, AI visibility, marketing, sales, technology, and revenue operations work best as one integrated system — not as disconnected initiatives." },
  { num: "03", title: "Human Expertise + AI Intelligence", body: "We use AI to accelerate research, uncover insights, and improve efficiency, while experienced strategists provide the critical thinking, creativity, and direction technology can't replace." },
  { num: "04", title: "Outcomes Over Activity", body: "We don't measure success by campaigns launched or content published. We measure it by stronger positioning, better opportunities, and measurable business growth." },
];

const coreServices = [
  {
    title: "Brand Strategy", sub: "Build a Brand Buyers Remember",
    body: "Whether you're building a brand from the ground up or repositioning an established business, we help create brands that are clear, differentiated, and built for growth — from strategy and messaging to visual identity and brand systems.",
    solutions: ["Brand Strategy & Positioning", "Brand Identity & Rebranding", "Messaging Framework", "Visual Identity Systems"],
    cta: "Explore Brand Strategy", href: "/services/brand-strategy",
  },
  {
    title: "AI Visibility & Discoverability", sub: "Be Found Where Buyers Search",
    body: "Modern buyers use search engines, AI assistants, and digital channels to evaluate their options. We help your business increase visibility where buying decisions begin.",
    solutions: ["AI Visibility Diagnostic", "SEO & AI Foundation", "AI Authority Growth System", "AI Market Dominance Engine"],
    cta: "Explore AI Visibility", href: "/services/ai-visibility",
  },
  {
    title: "Go-to-Market Strategy", sub: "Turn Strategy Into Growth",
    body: "We align positioning, messaging, channels, and execution to help your organization launch with confidence and create predictable commercial momentum.",
    solutions: ["GTM Foundation", "Growth Engine", "Revenue Accelerator"],
    cta: "Explore GTM Strategy", href: "/services/gtm",
  },
  {
    title: "Revenue Engineering", sub: "Build Smarter Revenue Systems",
    body: "Growth is more predictable when marketing, sales, technology, and analytics work together. We help connect the systems that drive measurable business performance.",
    solutions: ["Marketing Automation", "CRM Optimization", "Revenue Operations", "Funnel Optimization"],
    cta: "Explore Revenue Engineering", href: "/services/revenue-engineering",
  },
  {
    title: "Outbound Growth", sub: "Create More Qualified Opportunities",
    body: "We design targeted outreach programs that help your team start meaningful conversations with the right prospects — not simply send more messages.",
    solutions: ["LinkedIn Outreach", "Email Outreach", "SDR Programs", "Appointment Setting"],
    cta: "Explore Outbound Growth", href: "/services/outbound-growth",
  },
  {
    title: "Website Development", sub: "Build a Website That Performs",
    body: "Your website should do more than look good. We create digital experiences designed for discoverability, conversion, and business growth.",
    solutions: ["Website Strategy", "UX/UI Design", "Website Development", "Conversion Optimization"],
    cta: "Explore Website Development", href: "/services/website-development",
  },
  {
    title: "Capital Raise Support", sub: "Build Investor Confidence",
    body: "We help founders prepare for investment with compelling pitch decks, fundraising strategy, and targeted investor outreach.",
    solutions: ["Capital Raise Decks", "150K+ Investor Database", "Investor Outreach", "Investor GTM Support"],
    cta: "Explore Capital Raise Support", href: "/services/capital-raise",
  },
];

const journeyStages = [
  { stage: "Discover", body: "Buyers begin by searching for answers, not vendors. Whether they're using search engines, AI assistants, industry publications, social platforms, or peer communities, your business needs to be present where discovery starts. If buyers can't find you, your growth never begins." },
  { stage: "Evaluate", body: "Once discovered, buyers compare their options. They assess your expertise, messaging, services, reputation, website, and how clearly you communicate the value you bring. Every interaction either reinforces confidence or creates doubt." },
  { stage: "Trust", body: "Trust is earned long before the first meeting. Thought leadership, customer success stories, reviews, strategic content, and a consistent brand presence all shape buying decisions. Organizations that invest in authority become the ones buyers remember — and recommend." },
  { stage: "Engage", body: "When buyers are ready to take the next step, the experience should feel effortless. Clear messaging, intuitive websites, effective outreach, and connected customer journeys help transform interest into meaningful conversations." },
  { stage: "Choose", body: "Winning new business isn't about being the loudest voice in the market. It's about becoming the most discoverable, credible, and trusted choice when buyers are ready to decide." },
];

export default function Home() {
  const s2 = useInView();
  const s3 = useInView();
  const s4 = useInView();
  const s5 = useInView();
  const s6 = useInView();
  const s8 = useInView();

  return (
    <>
      {/* ── S1: HERO ─────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <img src="/images/home-hero.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)" }} />

        {/* Centered headline */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{
            fontFamily: "'Burford Rustic Inline', sans-serif",
            fontSize: "clamp(42px, 7vw, 96px)", fontWeight: 400,
            textTransform: "uppercase", letterSpacing: "0.04em",
            color: "#FFFFFF", lineHeight: 1.0, marginBottom: 16,
            textShadow: "0 2px 24px rgba(0,0,0,0.4)",
          }}>
            Forging Brands.<br />Driving Revenue.
          </h1>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: "clamp(13px, 1.5vw, 17px)", letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.9)",
            marginBottom: 40, textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}>
            Helping organizations become discoverable, trusted, and chosen in today&apos;s AI-driven buying landscape.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 2,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Book a Strategy Session</Link>
            <Link href="/services" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "transparent", color: "#FFFFFF",
              padding: "14px 36px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 2,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >Explore Our Services</Link>
          </div>
        </div>

        {/* Service labels at bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 0 20px", overflowX: "auto" }}>
          {services.map(s => (
            <div key={s.label} style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── S2: MAKE YOUR MARK ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div ref={s2.ref} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "center" }}>

          {/* B-icon logo mask */}
          <div className={`reveal${s2.inView ? " visible" : ""}`}>
            <img src="/images/BI-Logo-Mask-1-e1723263913795 (1).png" alt="Brand Iron" style={{ width: 240, height: "auto" }} />
          </div>

          {/* Text */}
          <div className={`reveal${s2.inView ? " visible" : ""}`}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>
              Trusted by founders, executives, and growth-focused organizations.
            </p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.05, marginBottom: 16 }}>
              Forging Brands.<br />Driving Revenue.
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 36, maxWidth: 520 }}>
              Helping organizations become discoverable, trusted, and chosen in today&apos;s AI-driven buying landscape.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[
                { num: "50+", label: "Brands Supported" },
                { num: "150,000+", label: "Investor Network" },
                { num: "AI-First", label: "Growth Strategies" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 28, fontWeight: 900, color: "#1a1a1a", letterSpacing: "0.03em", lineHeight: 1 }}>{num}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "#d87307", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: BUYING JOURNEY ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px 100px" }}>
        <div ref={s3.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 20 }}>
              The Buying Journey Has Changed.<br />Has Your Business?
            </h2>
            <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 700, margin: "0 auto 12px" }}>
              Today&apos;s buyers complete much of their decision-making before ever speaking with your team.
            </p>
            <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 700, margin: "0 auto 12px" }}>
              They search Google, ask AI assistants, compare competitors, read reviews, visit websites, explore LinkedIn, and look for proof that your organization is the right choice.
            </p>
            <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 700, margin: "0 auto 12px" }}>
              If your business isn&apos;t visible, credible, and consistent throughout that journey, you&apos;re often eliminated before the first conversation begins.
            </p>
            <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 600, maxWidth: 700, margin: "12px auto 0" }}>
              Modern growth isn&apos;t about showing up in one place. It&apos;s about showing up everywhere trust is built.
            </p>
          </div>

          {/* Journey timeline */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 0, marginBottom: 56 }}>
            {journeyStages.map(({ stage, body }, i) => (
              <div key={stage} className={`reveal${s3.inView ? " visible" : ""}`} style={{
                flex: 1, borderTop: `3px solid ${i === 2 ? "#d87307" : "#e0d8cc"}`,
                paddingTop: 20, paddingRight: i < journeyStages.length - 1 ? 24 : 0,
                transitionDelay: `${i * 0.08}s`,
              }}>
                <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d87307", marginBottom: 10 }}>{stage}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className={`reveal${s3.inView ? " visible" : ""}`} style={{ textAlign: "center", borderTop: "1px solid #e8e0d4", paddingTop: 32 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a", marginBottom: 8 }}>
              Organizations that win today aren&apos;t simply louder.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, color: "#d87307", fontWeight: 600 }}>
              They&apos;re easier to find, easier to trust, and easier to choose.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3B: YOU'RE THE COMPETITION ──────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 380 }}>
        <img src="/images/You-are-the-competition-bg-png.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380, padding: "60px 40px" }}>
          {/* White card with corner brackets */}
          <div style={{
            background: "#FFFFFF", maxWidth: 520, width: "100%",
            padding: "48px 48px", position: "relative",
          }}>
            {/* Corner brackets */}
            <div style={{ position: "absolute", top: 14, right: 14, width: 20, height: 20, borderTop: "2px solid #d87307", borderRight: "2px solid #d87307" }} />
            <div style={{ position: "absolute", bottom: 14, left: 14, width: 20, height: 20, borderBottom: "2px solid #d87307", borderLeft: "2px solid #d87307" }} />

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: "#555", marginBottom: 8 }}>Why Modern Growth Breaks Down,</p>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.1, marginBottom: 20 }}>
              Why Great Companies<br />Still Struggle to Grow
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#444" }}>
              Many organizations don&apos;t have a product problem. They don&apos;t have a talent problem. They don&apos;t even have a marketing problem. They have an alignment problem. Brand strategy, marketing, sales, technology, and operations often evolve independently — each with its own goals, tools, and priorities. While every team works hard, the customer experiences a disconnected journey. The result is slower growth, missed opportunities, and increasing costs to acquire and retain customers.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3C: PROBLEM CARDS ───────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 40px", backgroundImage: "url('/images/bg-saddle-rope.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,240,232,0.93)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/Dark-Mountains.png')", backgroundSize: "60% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", opacity: 0.06 }} />
        <div ref={s3.ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 12, textAlign: "center" }}>Common Growth Challenges</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {problems.map(({ heading, body }, i) => (
              <div key={i} style={{
                background: "#FFFFFF", padding: "28px 24px", position: "relative",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ width: "100%", height: 3, background: "#d87307", marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.4 }}>{heading}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, lineHeight: 1.75, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a" }}>
              Growth shouldn&apos;t depend on disconnected tactics.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#d87307", fontWeight: 600, marginTop: 6 }}>
              It should be built on connected strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: BRAND IRON DIFFERENCE ────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Grit & Gumption banner */}
        <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
          <img src="/images/Grit-and-Gumption-Banner.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(32px, 6vw, 80px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>
              Brand Iron
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.2vw, 14px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
              Human Crafted. AI Powered. Revenue Driven.
            </p>
          </div>
        </div>

        {/* Cards on cream bg with mountain watermark */}
        <div style={{ position: "relative", background: "#F5F0E8", padding: "72px 40px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/Dark-Mountains.png')", backgroundSize: "55% auto", backgroundPosition: "center center", backgroundRepeat: "no-repeat", opacity: 0.07 }} />
          <div ref={s4.ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>What Makes Brand Iron Different</p>
              <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#444", maxWidth: 680, margin: "0 auto 12px" }}>
                AI is transforming how businesses grow — but technology alone has never been a strategy.
              </p>
              <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 12px" }}>
                At Brand Iron, we combine human expertise with AI-assisted intelligence to help organizations make better decisions, move faster, and execute with greater precision. AI accelerates the work; experienced strategists provide the judgment, creativity, and business insight that drive meaningful outcomes.
              </p>
              <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 600, maxWidth: 680, margin: "0 auto" }}>
                Because sustainable growth isn&apos;t automated. It&apos;s engineered.
              </p>
            </div>

            {/* 4 cards — matching live site flat white style */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 40 }}>
              {differentiators.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal${s4.inView ? " visible" : ""}`} style={{
                  background: "#FFFFFF", padding: "32px 24px", position: "relative",
                  transitionDelay: `${i * 0.07}s`,
                  ...(i === 2 ? { outline: "2px solid #d87307" } : {}),
                }}>
                  {i === 2 && <>
                    <div style={{ position: "absolute", top: 10, right: 10, width: 18, height: 18, borderTop: "2px solid #d87307", borderRight: "2px solid #d87307" }} />
                    <div style={{ position: "absolute", bottom: 10, left: 10, width: 18, height: 18, borderBottom: "2px solid #d87307", borderLeft: "2px solid #d87307" }} />
                  </>}
                  <div style={{ width: "100%", height: 3, background: "#d87307", marginBottom: 16 }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#d87307", marginBottom: 8 }}>{num}</p>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.4 }}>{title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666" }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Our Commitment */}
            <div className={`reveal${s4.inView ? " visible" : ""}`} style={{ background: "#FFFFFF", padding: "40px 48px", borderLeft: "4px solid #d87307", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Our Commitment</p>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 12 }}>
                  Every recommendation is guided by one question:
                </h3>
                <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(16px, 1.8vw, 22px)", color: "#d87307", fontWeight: 900, textTransform: "uppercase" }}>
                  Will this create measurable value for your business?
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 12 }}>
                  If the answer is no, we won&apos;t recommend it. That means no unnecessary complexity, no one-size-fits-all playbooks, and no chasing vanity metrics.
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#1a1a1a", fontWeight: 600 }}>
                  Just practical strategies designed to help your organization grow with confidence.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className={`reveal${s4.inView ? " visible" : ""}`} style={{ textAlign: "center", marginTop: 48 }}>
              <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a" }}>
                Modern growth requires more than marketing.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#555", maxWidth: 700, margin: "10px auto 0" }}>
                It requires a partner who understands how brand strategy, discoverability, demand generation, technology, and revenue operations work together to create competitive advantage.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#d87307", fontWeight: 600, marginTop: 6 }}>
                That&apos;s the role Brand Iron was built to play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: SERVICES ─────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 40px" }}>
        <div ref={s5.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className={`reveal${s5.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
              Solutions That Move Businesses Forward
            </h2>
            <p className={`reveal${s5.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 10px" }}>
              Every business faces unique growth challenges — from strengthening its brand and increasing visibility to generating demand, optimizing revenue, or raising capital. Rather than delivering disconnected services, Brand Iron brings these capabilities together into one connected growth system designed to help organizations become discoverable, trusted, and chosen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 40 }}>
            {coreServices.map(({ title, sub, body, solutions, cta, href }, i) => (
              <div key={title} className={`reveal${s5.inView ? " visible" : ""}`} style={{
                background: "#FFFFFF", border: "1px solid #e8e0d4",
                padding: "32px 28px", position: "relative",
                transitionDelay: `${(i % 3) * 0.07}s`,
                transition: "transform 0.22s, box-shadow 0.22s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: "100%", height: 3, background: "#d87307", marginBottom: 20 }} />
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 6 }}>{title}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, color: "#d87307", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{sub}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#555", marginBottom: 16 }}>{body}</p>
                <ul style={{ listStyle: "none", marginBottom: 24 }}>
                  {solutions.map(s => (
                    <li key={s} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "#444", padding: "4px 0", paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#d87307", fontWeight: 700 }}>›</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href={href} style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#d87307", borderBottom: "1px solid #d87307",
                  paddingBottom: 2, transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#945B06")}
                onMouseLeave={e => (e.currentTarget.style.color = "#d87307")}
                >{cta} →</Link>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className={`reveal${s5.inView ? " visible" : ""}`} style={{ textAlign: "center", padding: "32px 40px", background: "#F5F0E8", borderLeft: "4px solid #d87307" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#444", maxWidth: 760, margin: "0 auto 10px" }}>
              Each solution delivers value on its own, but the greatest impact comes when they&apos;re connected through a unified growth strategy.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 760, margin: "0 auto" }}>
              Whether you&apos;re building your brand, increasing visibility, generating demand, or preparing for investment, Brand Iron helps ensure every initiative contributes to measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── S6: STRATEGIC PARTNER ────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 40px", backgroundImage: "url('/images/bg-peaks.png')", backgroundSize: "cover", backgroundPosition: "center 40%" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.72)" }} />
        <div ref={s6.ref} style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
            More Than a Service Provider. A Strategic Growth Partner.
          </p>
          <h2 className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(26px, 4vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 12 }}>
            Growth Is a Journey.<br />You Shouldn&apos;t Have to Navigate It Alone.
          </h2>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
            We Build Alongside Your Team
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.82)", marginBottom: 14, maxWidth: 760, margin: "0 auto 14px" }}>
            Growth is a team effort. That&apos;s why we work as an extension of your leadership team — helping you make smarter decisions, focus on the right opportunities, and build systems that drive long-term growth. Our success is measured by yours. We&apos;re here to help you build what&apos;s next.
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.75)", maxWidth: 760, margin: "0 auto 14px" }}>
            Whether you&apos;re defining your brand, entering a new market, improving AI visibility, scaling revenue operations, or preparing for your next stage of growth, Brand Iron is ready to help you move forward with clarity, confidence, and purpose.
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.85, color: "#FFFFFF", fontWeight: 600, fontStyle: "italic", maxWidth: 760, margin: "0 auto 40px" }}>
            Every successful growth story begins with a conversation. Let&apos;s start yours.
          </p>
          <div className={`reveal${s6.inView ? " visible" : ""}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 2, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Book a Strategy Session</Link>
          </div>
        </div>
      </section>

      {/* ── S8: FINAL CTA ────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 40px", backgroundImage: "url('/images/shutterstock_2489980613-scaled.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.82)" }} />
        <div ref={s8.ref} style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`reveal${s8.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(32px, 5.5vw, 72px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.0, marginBottom: 20 }}>
            Get Found.<br />Get Trusted.<br />Generate Revenue.
          </h2>
          <p className={`reveal${s8.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", marginBottom: 48 }}>
            The strongest brands don&apos;t leave growth to chance. They build it with intention.
          </p>
          <p className={`reveal${s8.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 28 }}>
            Choose Your Next Step
          </p>
          <div className={`reveal${s8.inView ? " visible" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginBottom: 56, textAlign: "left" }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
                Let&apos;s discuss your business goals, current challenges, and opportunities for growth. Together, we&apos;ll identify where your greatest opportunities lie and outline practical next steps.
              </p>
              <Link href="/contact" style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
                letterSpacing: "0.14em", textTransform: "uppercase",
                background: "#d87307", color: "#FFFFFF", padding: "16px 40px", borderRadius: 2,
                display: "inline-block", transition: "background 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >Book a Strategy Session</Link>
            </div>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>
                Learn how Brand Strategy, AI Visibility, Go-to-Market Strategy, Revenue Engineering, Outbound Growth, Website Development, and Capital Raise Support work together to create measurable business outcomes.
              </p>
              <Link href="/services" style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
                letterSpacing: "0.14em", textTransform: "uppercase",
                background: "transparent", color: "#FFFFFF",
                padding: "16px 40px", border: "2px solid rgba(255,255,255,0.6)", borderRadius: 2,
                display: "inline-block", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)")}
              >Explore Our Solutions</Link>
            </div>
          </div>
          <div className={`reveal${s8.inView ? " visible" : ""}`} style={{ borderTop: "1px solid rgba(216,115,7,0.3)", paddingTop: 36 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 10 }}>
              Forging Brands. Driving Revenue.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 auto" }}>
              Helping organizations become discoverable, trusted, and chosen through strategic positioning, AI visibility, revenue engineering, and connected growth systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
