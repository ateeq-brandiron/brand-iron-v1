"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { portfolioCategories, PortfolioCategoryId } from "@/data/portfolio";
import { caseStudies, caseStudyCategoryLabel } from "@/data/caseStudies";

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

const INITIAL_LIMIT = 6;

export default function CaseStudiesPage() {
  const { ref: gridViewRef, inView: gridViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const selectCategory = (id: PortfolioCategoryId | "all") => { setActiveCategory(id); setShowAll(false); };

  const filtered = activeCategory === "all" ? caseStudies : caseStudies.filter(c => c.category === activeCategory);
  const visibleStudies = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);
  const remaining = filtered.length - visibleStudies.length;
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
          backgroundImage: "url('/images/case-studies/case-studies-hero-horses.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
        }} />
        <div role="img" aria-label="Wild horses galloping through dust at sunset near a marsh, representing grounded, real momentum" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.4) 0%, rgba(8,16,36,0.3) 45%, rgba(8,16,36,0.7) 100%)" }} />

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
            Our Success Stories
          </h2>

          <div className="cs-category-tabs" style={{ display: "flex", flexWrap: "nowrap", gap: 6, marginBottom: 40, justifyContent: "center", overflowX: "auto" }}>
            <button
              onClick={() => selectCategory("all")}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                padding: "10px 14px", borderRadius: 20, cursor: "pointer",
                background: activeCategory === "all" ? "#d87307" : "#FFFFFF",
                color: activeCategory === "all" ? "#FFFFFF" : "#555",
                border: activeCategory === "all" ? "1px solid #d87307" : "1px solid #EEEBE7",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              All Stories
              <span style={{ fontSize: 10, fontWeight: 700, color: activeCategory === "all" ? "rgba(255,255,255,0.85)" : "#999" }}> · {caseStudies.length}</span>
            </button>
            {populatedCategories.map(cat => {
              const count = caseStudies.filter(cs => cs.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                    padding: "10px 14px", borderRadius: 20, cursor: "pointer",
                    background: activeCategory === cat.id ? "#d87307" : "#FFFFFF",
                    color: activeCategory === cat.id ? "#FFFFFF" : "#555",
                    border: activeCategory === cat.id ? "1px solid #d87307" : "1px solid #EEEBE7",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                    display: "inline-flex", alignItems: "center", gap: 5,
                    whiteSpace: "nowrap", flexShrink: 0,
                  }}
                >
                  {cat.label}
                  <span style={{ fontSize: 10, fontWeight: 700, color: activeCategory === cat.id ? "rgba(255,255,255,0.85)" : "#999" }}>· {count}</span>
                </button>
              );
            })}
          </div>
          <style>{`
            .cs-category-tabs { scrollbar-width: none; -ms-overflow-style: none; }
            .cs-category-tabs::-webkit-scrollbar { display: none; }
            @media (max-width: 640px) {
              .cs-category-tabs { flex-wrap: wrap !important; overflow-x: visible; justify-content: flex-start !important; }
            }
          `}</style>

          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {visibleStudies.map((cs, i) => {
              const catLabel = caseStudyCategoryLabel(cs.category);
              const headlineStat = cs.results.find(r => r.value !== "—");
              const hoverImage = cs.cardHoverImage ?? cs.images[0];
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
                    <img src={cs.thumbnail} alt={cs.thumbnailAlt} className="cs-card-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease" }} />
                    {hoverImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img loading="lazy" src={hoverImage} alt={`${cs.client} website screenshot`} className="cs-card-hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0, transition: "opacity 0.4s ease, transform 0.4s ease" }} />
                    )}
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

          {remaining > 0 && (
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button
                onClick={() => setShowAll(true)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                  background: "transparent", color: "#1a1a1a", border: "1px solid #d87307",
                  padding: "13px 24px", borderRadius: 6, transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d87307"; e.currentTarget.style.color = "#FFFFFF"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
              >
                See All Stories
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          )}
        </div>
        <style>{`
          .cs-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .cs-card:hover .corner-bracket { opacity: 1 !important; }
          .cs-card:hover .cs-card-img { opacity: 0 !important; }
          .cs-card:hover .cs-card-hero { opacity: 1 !important; transform: scale(1.08); }
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
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shared/shared-cta-banner-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%",
          }}>
            <div role="img" aria-label="Rugged mountain ridge trail at golden-hour sunset" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Become Our Next Success Story?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 40px" }}>
                Every success story starts with a conversation. Let&apos;s talk about where your business stands today, what&apos;s holding it back, and how Brand Iron can help you build a stronger path forward.
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
                Book a Strategy Session
              </Link>
              <div>
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0a860"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)"; }}
                >
                  Explore Our Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
