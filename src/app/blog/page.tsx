"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { articles } from "@/data/articles";

const AUTHOR = "Michael Doyle";

function ArticleMeta({ date }: { date: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 13 }}>
      <span style={{ color: "#d87307", fontWeight: 700 }}>{AUTHOR}</span>
      <span style={{ color: "#bbb" }}>•</span>
      <span style={{ color: "#888" }}>{date}</span>
    </div>
  );
}

function ArticlePills({ category, readTime }: { category: string; readTime: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
      <span style={{ display: "inline-block", padding: "6px 14px", border: "1px solid #EEEBE7", borderRadius: 20, fontSize: 11, fontWeight: 600, color: "#777" }}>{category}</span>
      <span style={{ display: "inline-block", padding: "6px 14px", border: "1px solid #EEEBE7", borderRadius: 20, fontSize: 11, fontWeight: 600, color: "#777" }}>{readTime}</span>
      <span className="read-more-pill" style={{ display: "inline-block", padding: "6px 14px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 20, fontSize: 11, fontWeight: 700, color: "#d87307", transition: "background 0.2s, color 0.2s" }}>Read More →</span>
    </div>
  );
}

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
      <section id="articles" style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={articlesView.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Featured post */}
          {articles[0] && (
            <Link href={`/blog/${articles[0].slug}`}
              className={`article-card reveal${articlesView.inView ? " visible" : ""}`}
              style={{
                position: "relative", display: "block", background: "#F9F8F6", border: "1px solid #EEEBE7",
                borderRadius: 14, padding: "40px 44px", marginBottom: 40, overflow: "hidden", textDecoration: "none",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
              <span style={{ display: "inline-block", padding: "4px 12px", background: "#d87307", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: 20 }}>
                Featured
              </span>
              <ArticleMeta date={articles[0].date} />
              <h2 className="article-title" style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: 4, marginBottom: 16, lineHeight: 1.3, transition: "color 0.2s" }}>
                {articles[0].title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 24, maxWidth: 680 }}>{articles[0].excerpt}</p>
              <ArticlePills category={articles[0].category} readTime={articles[0].readTime} />
            </Link>
          )}

          {/* Remaining posts */}
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {articles.slice(1).map(({ slug, category, title, excerpt, readTime, date }, i) => (
              <Link key={slug} href={`/blog/${slug}`}
                className={`article-card reveal${articlesView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7",
                  borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column",
                  overflow: "hidden", transitionDelay: `${(i % 6) * 0.06}s`, textDecoration: "none",
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <ArticleMeta date={date} />
                <h3 className="article-title" style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: 3, marginBottom: 12, lineHeight: 1.35, transition: "color 0.2s" }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", marginBottom: 20, flex: 1 }}>{excerpt}</p>
                <ArticlePills category={category} readTime={readTime} />
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
          .article-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .article-card:hover .article-title { color: #d87307 !important; }
          .article-card:hover .read-more-pill { background: #d87307; color: #FFFFFF !important; }
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
