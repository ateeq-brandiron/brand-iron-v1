"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CircuitOverlay from "@/components/CircuitOverlay";
import { portfolioCategories, PortfolioCategoryId } from "@/data/portfolio";
import { caseStudies } from "@/data/caseStudies";

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

export default function CaseStudiesPage() {
  const { ref: gridViewRef, inView: gridViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");

  const filtered = activeCategory === "all" ? caseStudies : caseStudies.filter(c => c.category === activeCategory);
  const populatedCategories = portfolioCategories.filter(c => caseStudies.some(cs => cs.category === c.id));

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Case Studies", url: "https://brandiron.net/case-studies" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="cs-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/case-studies/case-studies-hero-longhorn.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 35%",
        }} />
        <div role="img" aria-label="A longhorn steer standing in a pasture at sunset, representing grounded, real results" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.4) 0%, rgba(8,16,36,0.3) 45%, rgba(8,16,36,0.7) 100%)" }} />

        <div className="cs-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="cs-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Real Challenges. Measurable Results.
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <a href="#case-studies-grid" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Explore Case Studies
                </a>
                <Link href="/portfolio" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  View the Portfolio
                </Link>
              </div>
            </div>

            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>
                Growth doesn&apos;t happen through tactics alone. It requires a clear strategy, strong execution, and a system that connects visibility, trust, and revenue. Explore how Brand Iron has helped organizations strengthen their brand, improve discoverability, accelerate growth, and create lasting business impact.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cs-hero-section { height: auto !important; min-height: 100vh; }
            .cs-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .cs-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── GRID ───────────────────────────────────────────── */}
      <section id="case-studies-grid" style={{ background: "#F9F8F6", padding: "100px 40px 120px" }}>
        <div ref={gridViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${gridViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 40 }}>
            Featured Success Stories
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40, justifyContent: "center" }}>
            <button
              onClick={() => setActiveCategory("all")}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "10px 20px", borderRadius: 20, cursor: "pointer",
                background: activeCategory === "all" ? "#d87307" : "#FFFFFF",
                color: activeCategory === "all" ? "#FFFFFF" : "#555",
                border: activeCategory === "all" ? "1px solid #d87307" : "1px solid #EEEBE7",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
            >
              All Stories
            </button>
            {populatedCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "10px 20px", borderRadius: 20, cursor: "pointer",
                  background: activeCategory === cat.id ? "#d87307" : "#FFFFFF",
                  color: activeCategory === cat.id ? "#FFFFFF" : "#555",
                  border: activeCategory === cat.id ? "1px solid #d87307" : "1px solid #EEEBE7",
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {filtered.map((cs, i) => {
              const catLabel = portfolioCategories.find(c => c.id === cs.category)?.label ?? cs.category;
              const headlineStat = cs.results.find(r => r.value !== "—");
              return (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`}
                  className={`reveal${gridViewInView ? ' visible' : ''} cs-card`}
                  style={{
                    display: "block", position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                    overflow: "hidden", textDecoration: "none", transitionDelay: `${(i % 6) * 0.06}s`,
                    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  }}
                >
                  <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 10, right: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />
                  <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 10, left: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />

                  <div className="cs-card-media" style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: "#F0EEEA" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cs.thumbnail} alt={cs.thumbnailAlt} className="cs-card-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
                    <div className="cs-card-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(8,16,36,0.75) 100%)", opacity: 0, transition: "opacity 0.25s ease" }} />
                    <span className="cs-card-view" style={{
                      position: "absolute", left: 20, bottom: 14, transform: "translateY(10px)", opacity: 0, transition: "transform 0.25s ease, opacity 0.25s ease",
                      fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF",
                    }}>
                      View Case Study →
                    </span>
                    {headlineStat && (
                      <span style={{ position: "absolute", top: 10, left: 10, background: "rgba(216,115,7,0.92)", color: "#FFFFFF", fontFamily: "var(--font-burford-black), sans-serif", fontSize: 13, fontWeight: 900, padding: "5px 10px", borderRadius: 4 }}>
                        {headlineStat.value} {headlineStat.label}
                      </span>
                    )}
                    {cs.isPlaceholder && (
                      <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(15,27,45,0.85)", color: "#FFFFFF", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 9px", borderRadius: 4 }}>
                        Placeholder
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "22px 24px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>{catLabel}</p>
                    <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>{cs.title}</h3>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#666", margin: 0 }}>{cs.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <style>{`
          .cs-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .cs-card:hover .corner-bracket { opacity: 1 !important; }
          .cs-card:hover .cs-card-img { transform: scale(1.08); }
          .cs-card:hover .cs-card-scrim { opacity: 1 !important; }
          .cs-card:hover .cs-card-view { opacity: 1 !important; transform: translateY(0) !important; }
          @media (max-width: 900px) {
            .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .cs-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "88px 24px", textAlign: "center" }}>
        <CircuitOverlay />
        <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.15, marginBottom: 20 }}>
            Ready to Become Our Next Success Story?
          </h2>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "16px 40px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}
