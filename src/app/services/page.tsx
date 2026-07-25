"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    href: "/services/brand-strategy",
    description: "We forge brands that get chosen, connecting strategy, messaging, identity, digital experiences, and go-to-market execution into one connected brand system built to drive growth.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#D87307" strokeWidth="2" strokeLinejoin="round"/><path d="M12 8v6M9 11h6" stroke="#D87307" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    number: "02",
    title: "AI Visibility & Discoverability",
    href: "/services/ai-visibility",
    description: "Helping brands become discoverable, trusted, and recommended across search and AI, integrating SEO, AEO, GEO, technical optimization, entity development, authority building, and strategic content into one connected visibility strategy.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#D87307" strokeWidth="2"/><path d="M21 21l-4.5-4.5" stroke="#D87307" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    number: "03",
    title: "GTM Strategy",
    href: "/services/gtm",
    description: "Go-to-market strategies built for how buyers make decisions today, connecting strategy, visibility, authority, demand generation, sales, automation, and revenue into one cohesive growth engine.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none"><path d="M17.3333 22.6668H28M28 22.6668V12.0002M28 22.6668L17.3333 12.0002L12 17.3335L4 9.3335" stroke="#D87307" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    number: "04",
    title: "Capital Raise Support",
    href: "/services/capital-raise",
    description: "Raising capital requires more than a great pitch deck. We help founders prepare for every stage of the fundraising journey through strategic positioning, investor storytelling, presentation development, investor targeting, and outreach.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#D87307" strokeWidth="2" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#D87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    number: "05",
    title: "Website Development",
    href: "/services/website-development",
    description: "Strategic digital experiences that connect your brand, messaging, user experience, and AI Visibility into one platform designed to help your organization become discoverable, trusted, and chosen.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#D87307" strokeWidth="2"/><path d="M3 9h18" stroke="#D87307" strokeWidth="2"/><circle cx="6.5" cy="6.5" r="0.75" fill="#D87307"/><circle cx="9" cy="6.5" r="0.75" fill="#D87307"/></svg>
    ),
  },
  {
    number: "06",
    title: "Outbound Growth",
    href: "/services/outbound-growth",
    description: "Outbound growth systems that put your business in front of the right decision-makers, connecting LinkedIn outreach, email campaigns, SDR programs, appointment setting, and sales enablement into one connected pipeline engine.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#D87307" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" stroke="#D87307" strokeWidth="2"/><circle cx="12" cy="12" r="0.9" fill="#D87307"/></svg>
    ),
  },
  {
    number: "07",
    title: "Revenue Engineering",
    href: "/services/revenue-engineering",
    description: "Revenue Engineering connects your marketing, sales, CRM, automation, funnels, and reporting into one hard-working growth machine, finding the leaks, fixing the handoffs, and tracking what actually drives revenue.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M11 20V4M18 20v-7" stroke="#D87307" strokeWidth="2" strokeLinecap="round"/><path d="M3 20h18" stroke="#D87307" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

function useInView(threshold = 0.12) {
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

export default function ServicesPage() {
  const listView = useInView(0.05);
  const ctaView = useInView(0.1);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="svc-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/services-hub/barn-sunset.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="svc-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="svc-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Our Services
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
                  Book a Strategy Session
                </Link>
                <Link href="#services-list" style={{
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
                Strategy, visibility, and revenue systems that work together, not isolated services, but one connected growth engine.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                Every engagement starts with understanding your business first, then connects the right combination of these four capabilities to build toward one outcome: sustainable, measurable revenue growth.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .svc-hero-section { height: auto !important; min-height: 100vh; }
            .svc-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .svc-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────── */}
      <section id="services-list" style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={listView.ref} style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          {services.map(({ number, title, href, description, icon }, i) => (
            <Link key={href} href={href} className={`reveal${listView.inView ? " visible" : ""}`} style={{
              textDecoration: "none", transitionDelay: `${i * 0.08}s`,
            }}>
              <div className="svc-list-card" style={{
                position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 12,
                padding: "40px 44px", display: "grid", gridTemplateColumns: "auto auto 1fr auto", gap: 32, alignItems: "center",
                overflow: "hidden", transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(216,115,7,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#EEEBE7"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 40, fontWeight: 900, color: "#d87307", lineHeight: 1, margin: 0 }}>{number}</p>
                <div style={{ width: 60, height: 60, borderRadius: 12, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {icon}
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 8 }}>{title}</h2>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.7, color: "#666", margin: 0, maxWidth: 700 }}>{description}</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "#d87307", flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          @media (max-width: 720px) {
            .svc-list-card { grid-template-columns: auto 1fr !important; padding: 28px 24px !important; gap: 20px !important; }
            .svc-list-card > svg:last-child { display: none; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <CircuitOverlay />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/services-hub/horse-portrait.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Start?
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Not Sure Where to Start?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 560, margin: "0 auto 40px" }}>
                Book a strategy session and we&apos;ll map the exact services your business needs to build a complete revenue engine.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-block", padding: "16px 40px", borderRadius: 6,
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
                  background: "#d87307", color: "#FFFFFF", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#b8691f")}
                onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
                >
                  Book a Strategy Session
                </Link>
                <Link href="/about" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0a860"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Meet the Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
