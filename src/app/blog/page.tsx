"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import { articles } from "@/data/articles";

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

export default function InsightsPage() {
  const articlesView = useInView(0.05);
  const ctaView = useInView(0.1);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="blog-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/bg-fence.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="blog-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="blog-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Revenue Intelligence
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
                <Link href="#articles" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Read the Latest Insights
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
                Perspectives on AI transformation, revenue operations, growth strategy, and the future of how companies generate revenue.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                Written by the team building these systems for our clients every day, not theory, but what&apos;s actually working right now.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .blog-hero-section { height: auto !important; min-height: 100vh; }
            .blog-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .blog-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── ARTICLES GRID ────────────────────────────────────── */}
      <section id="articles" style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "120px 40px" }}>
        <CircuitOverlay />
        <div ref={articlesView.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {articles.map(({ slug, category, title, excerpt, readTime, date }, i) => (
              <Link key={slug} href={`/blog/${slug}`}
                className={`reveal${articlesView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column",
                  overflow: "hidden", transitionDelay: `${(i % 6) * 0.06}s`, textDecoration: "none",
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s, background 0.25s",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(-5px)"; el.style.background = "rgba(216,115,7,0.06)"; el.style.borderColor = "rgba(216,115,7,0.3)"; el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(0)"; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <span style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 16, width: "fit-content" }}>{category}</span>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 12, lineHeight: 1.35, flex: 1 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>{excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{date}</span>
                  <span style={{ fontSize: 12, color: "#d87307" }}>{readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .blog-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/bg-logs.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Start?
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Revenue Intelligence. Delivered Monthly.
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 560, margin: "0 auto 40px" }}>
                Insights on AI, revenue strategy, and growth from the Brand Iron team, straight to your inbox.
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
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0a860"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Explore Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
