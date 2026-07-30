"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

// ── SVG Icons ────────────────────────────────────────────────────────────
function IconRevenueFirst() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><path d="M17.3333 9.3332H28M28 9.3332V19.9998M28 9.3332L17.3333 19.9998L12 14.6665L4 22.6665" stroke="#d87307" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}
function IconIntegratedThinking() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="6" cy="16" r="3" stroke="#d87307" strokeWidth="2" /><circle cx="26" cy="7" r="3" stroke="#d87307" strokeWidth="2" /><circle cx="26" cy="25" r="3" stroke="#d87307" strokeWidth="2" /><line x1="9" y1="16" x2="23" y2="8.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="9" y1="16" x2="23" y2="23.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="26" y1="10" x2="26" y2="22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /></svg>
  );
}
function IconAIAugmented() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><path d="M8 22 C8 16 10 10 16 10 C22 10 24 16 24 22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="10" x2="16" y2="6" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="8" y1="22" x2="24" y2="22" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="18" r="1.5" stroke="#d87307" strokeWidth="1.5" /><circle cx="20" cy="18" r="1.5" stroke="#d87307" strokeWidth="1.5" /><line x1="12" y1="18" x2="20" y2="18" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" /><circle cx="16" cy="14" r="1.5" stroke="#d87307" strokeWidth="1.5" /><line x1="16" y1="14" x2="12" y2="18" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" /><line x1="16" y1="14" x2="20" y2="18" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" /></svg>
  );
}
function IconRadicalTransparency() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><path d="M2 16 C6 8 10 5 16 5 C22 5 26 8 30 16 C26 24 22 27 16 27 C10 27 6 24 2 16Z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" /><circle cx="16" cy="16" r="5" stroke="#d87307" strokeWidth="2" /><circle cx="16" cy="16" r="2" stroke="#d87307" strokeWidth="1.5" /></svg>
  );
}
function IconMeasurableImpact() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="#d87307" strokeWidth="2" /><circle cx="16" cy="16" r="8" stroke="#d87307" strokeWidth="2" /><circle cx="16" cy="16" r="3" stroke="#d87307" strokeWidth="2" /><line x1="16" y1="3" x2="16" y2="7" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="25" x2="16" y2="29" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="16" x2="7" y2="16" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><line x1="25" y1="16" x2="29" y2="16" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /></svg>
  );
}
function IconExecutionOverTheory() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="9" stroke="#d87307" strokeWidth="2" /><path d="M16 7 A9 9 0 0 1 25 16" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="16" r="3" stroke="#d87307" strokeWidth="2" /><polyline points="20,8 22,6 24,8" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><polyline points="27,23 29,25 27,27" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="22" y1="24" x2="28" y2="26" stroke="#d87307" strokeWidth="2" strokeLinecap="round" /></svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────
const VALUES = [
  { title: "Outcomes First", body: "Every decision is measured by real business outcomes: brand equity, growth, or capital raised. We don't do things that look good. We do things that work.", icon: <IconRevenueFirst /> },
  { title: "Integrated Thinking", body: "We connect strategy to execution, marketing to sales, technology to outcomes. Silos are the enemy of revenue.", icon: <IconIntegratedThinking /> },
  { title: "AI-Augmented Excellence", body: "We combine the power of AI with the judgment of experienced operators to deliver outcomes neither could achieve alone.", icon: <IconAIAugmented /> },
  { title: "Radical Transparency", body: "We tell you what you need to hear, not what you want to hear. Our clients grow because we hold them to a higher standard.", icon: <IconRadicalTransparency /> },
  { title: "Measurable Impact", body: "If we can't measure it, we don't do it. Every engagement is structured around KPIs that connect to business performance.", icon: <IconMeasurableImpact /> },
  { title: "Execution Over Theory", body: "Strategy without execution is just planning. We are operators who build the systems and run the plays alongside you.", icon: <IconExecutionOverTheory /> },
];

const TEAM = [
  {
    name: "Michael Doyle",
    title: "CEO | Brand Champion",
    photo: "/images/team/Brand Iron Team_Michael.jpg",
    bio: "A trailblazer in brand marketing for 20+ years, Michael launched Brand Iron in 2002 after building and selling a multi-million dollar advertising agency. His precision has steered businesses across industries to success worldwide.",
  },
  {
    name: "Carmen Barker",
    title: "CFO",
    photo: "/images/team/Brand Iron Team_Carmen.jpg",
    bio: "Carmen handles everything money-related at Brand Iron, from payroll to HR. She previously helped build an award-winning humanitarian water-treatment startup recognized by Fast Company's Top 50 Colorado Companies to Watch.",
  },
  {
    name: "Shelly Barson",
    title: "Creative Director",
    photo: "/images/team/Brand Iron Team_Shelly.jpg",
    bio: "Shelly is passionate about simple, smart design that tells a compelling story. A seasoned art director, she's worked on projects ranging from small startups to global brands like Intel, Vivint, and Microsoft.",
  },
  {
    name: "Katrina Jumawid",
    title: "Account Manager",
    photo: "/images/team/Brand Iron Team_Katrina.jpg",
    bio: "Katrina brings sharp client relationship skills and a results-driven approach to every account. She ensures clients receive seamless communication, timely delivery, and consistent value.",
  },
  {
    name: "Olivia Briones",
    title: "Operations & Project Manager",
    photo: "/images/team/Brand Iron Team_Olivia.jpg",
    bio: "With more than 16 years of experience in operations, project management, and digital marketing, Olivia Briones is an Operations & Project Manager who thrives on bringing order to complexity. Combining expertise in branding, AI visibility, go-to-market strategy, SEO, and operational systems, she helps transform strategy into execution. Her focus is building efficient processes, aligning teams, and creating scalable marketing systems that drive sustainable business growth.",
  },
  {
    name: "Ateeq Asif",
    title: "Operations & Technical Delivery Manager",
    photo: "/images/team/Brand Iron Team_Ateeq.jpg",
    bio: "Ateeq drives execution across Brand Iron's client portfolio, from web development and marketing automation to campaign operations and account management. He turns strategy into shipped, working systems, keeping teams, tools, and timelines aligned across every account.",
  },
];

const APPROACH_STEPS = [
  { step: "01", title: "Diagnose", body: "We start by understanding how your brand, market position, and growth systems actually work today, not how they're supposed to." },
  { step: "02", title: "Design", body: "We design the strategy your business needs: brand, go-to-market, AI visibility, and the systems that connect them to outcomes." },
  { step: "03", title: "Build", body: "We build what it takes to execute: brand assets, websites, GTM campaigns, automation, and investor-ready materials." },
  { step: "04", title: "Deploy", body: "We deploy it with your team, ensuring adoption, training, and the buy-in that determines whether it sticks." },
  { step: "05", title: "Optimize", body: "We continuously monitor performance, identify what's working, and iterate based on real results." },
];

const STATS = [
  { num: "3X", label: "Average Pipeline Growth" },
  { num: "60%", label: "Less Manual Work" },
  { num: "50+", label: "Clients Transformed" },
  { num: "100%", label: "Revenue Visibility" },
];

export default function AboutPage() {
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "About", url: "https://brandiron.net/about" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="ab-hero-section" style={{
        position: "relative", height: "100vh", minHeight: 600, overflow: "hidden",
        backgroundImage: "url('/images/about/about-hero-saddle.jpg')", backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Snow-capped mountain range reflected in a still lake surrounded by golden autumn aspen trees" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="ab-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="ab-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                We Build Brands Engineered for Growth.
              </h1>

              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.5, marginBottom: 20, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                Brand Iron exists because most businesses grow in pieces: a logo here, a funnel there, a deck built the night before it matters. We forge it into one brand, built to be discoverable, trusted, and chosen.
              </p>

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
                  Book a Strategy Session
                </Link>
                <Link href="/services" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore Our Services
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
                We&apos;re a full-service strategic branding and marketing agency: brand strategy, go-to-market execution, AI visibility, capital raise support, and website development, all under one roof.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                We&apos;re operators, not just advisors. We build alongside our clients, stand behind the work, and measure ourselves by the same outcomes they do.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ab-hero-section { height: auto !important; min-height: 100vh; }
            .ab-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .ab-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: WHO WE ARE + STATS ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }} className="ab-mission-grid">
            <div>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Who We Are</p>
              <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
                A Different Kind of Brand &amp; Growth Partner
              </h2>
              <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
                We bring brand strategy, go-to-market, AI visibility, capital raise support, and website development together under one roof, working from a single playbook.
              </p>
              <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
                Companies don&apos;t fail because they lack effort. They fail because their brand, marketing, sales, and technology all operate in separate lanes instead of one system.
              </p>
            </div>
            <div className={`reveal-group${s2View.inView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {STATS.map(({ num, label }) => (
                <div
                  key={num}
                  className={`reveal${s2View.inView ? ' visible' : ''}`}
                  style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 12, padding: "32px 20px", textAlign: "center", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-5px)";
                    el.style.boxShadow = "0 14px 36px rgba(216,115,7,0.15)";
                    el.style.borderColor = "rgba(216,115,7,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#EEEBE7";
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                  <div style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 38, fontWeight: 900, color: "#1a1a1a", lineHeight: 1 }}>{num}</div>
                  <div style={{ width: 28, height: 3, background: "#d87307", borderRadius: 2, margin: "12px auto" }} />
                  <div style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, color: "#666", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .ab-mission-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S3: CORE VALUES ──────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "120px 40px" }}>
        <div ref={s3View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56, maxWidth: 700 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Core Values</p>
            <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 0, textAlign: "left" }}>
              What We Stand For
            </h2>
          </div>
          <div className={`reveal-group${s3View.inView ? ' visible' : ''} ab-values-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {VALUES.map(({ title, body, icon }) => (
              <div
                key={title}
                className={`reveal${s3View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14, padding: "32px 28px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = "0 16px 44px rgba(216,115,7,0.15)";
                  (el.querySelector("h3") as HTMLElement).style.color = "#d87307";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  (el.querySelector("h3") as HTMLElement).style.color = "#1a1a1a";
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 19, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3, transition: "color 0.2s" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13.5, lineHeight: 1.7, color: "#666", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ab-values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── S4: VISION & MISSION ──────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s4View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="ab-vm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 56px", alignItems: "start" }}>
            {/* Vision */}
            <div className={`reveal${s4View.inView ? ' visible' : ''}`}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Vision</p>
              <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 20 }}>
                A World Where Brands Are Forged, Not Left to Chance
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#555", marginBottom: 16 }}>
                We envision a future where every business we touch operates with complete alignment: brand, strategy, technology, and talent working as one system instead of competing factions.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#555" }}>
                In that world, growth is predictable, brands are unmistakable, and success becomes a function of design, not luck.
              </p>
            </div>
            {/* Divider */}
            <div className="ab-vm-divider" style={{ background: "rgba(216,115,7,0.25)", alignSelf: "stretch" }} />
            {/* Mission */}
            <div className={`reveal${s4View.inView ? ' visible' : ''}`}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Mission</p>
              <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 20 }}>
                Transform How Companies Build Their Brand
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#555", marginBottom: 16 }}>
                We combine brand strategy, go-to-market execution, AI visibility, capital raise support, and website development into one integrated system built around your business.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#555" }}>
                Our work is not advisory. We build, deploy, and optimize the brand and growth infrastructure our clients need, and we stay accountable to results, not deliverables.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .ab-vm-grid { grid-template-columns: 1fr !important; gap: 40px 0 !important; }
            .ab-vm-divider { display: none; }
          }
        `}</style>
      </section>

      {/* ── S5: TEAM ──────────────────────────────────────────── */}
      <section style={{ background: "#F5F0E8", padding: "120px 40px" }}>
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56, maxWidth: 700 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Our People</p>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 0, textAlign: "left" }}>
              Meet The Team
            </h2>
          </div>
          <div className={`reveal-group${s5View.inView ? ' visible' : ''} ab-team-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {TEAM.map(({ name, title, photo, bio }) => (
              <div
                key={name}
                className={`reveal${s5View.inView ? ' visible' : ''}`}
                style={{ background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 44px rgba(216,115,7,0.18)";
                  el.style.borderColor = "rgba(216,115,7,0.35)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "#EEEBE7";
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
                  <img loading="lazy" src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#d87307" }} />
                </div>
                <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 6 }}>{name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>{title}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13.5, lineHeight: 1.75, color: "#666", margin: 0 }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ab-team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .ab-team-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S6: APPROACH ──────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 40px", background: "#0F1B2D" }}>
        <CircuitOverlay />
        <div ref={s6View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56, maxWidth: 700 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Our Approach</p>
            <h2 className={`section-heading reveal${s6View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))", marginBottom: 0, textAlign: "left" }}>
              How We Work
            </h2>
          </div>
          <div className={`reveal-group${s6View.inView ? ' visible' : ''} ab-approach-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {APPROACH_STEPS.map(({ step, title, body }) => (
              <div
                key={step}
                className={`reveal${s6View.inView ? ' visible' : ''}`}
                style={{ position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "28px 22px", overflow: "hidden", transition: "background 0.25s, border-color 0.25s, transform 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-5px)"; el.style.background = "rgba(216,115,7,0.07)"; el.style.borderColor = "rgba(216,115,7,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(216,115,7,0.15)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 13, color: "#d87307" }}>{step}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .ab-approach-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 620px) {
            .ab-approach-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/about/about-hero-barn.webp')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Rustic wooden barn in a green field beneath a dramatic orange sunset sky" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.55)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Work With Brand Iron?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 600, margin: "0 auto 40px" }}>
                Book a strategy session and let&apos;s design the brand and growth system your business deserves.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                background: "#d87307", color: "#FFFFFF",
                padding: "18px 44px", borderRadius: 6,
                transition: "background 0.2s", marginBottom: 20,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >
                Book Strategy Session
              </Link>
              <div>
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#d87307"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)"; }}
                >
                  Our Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
