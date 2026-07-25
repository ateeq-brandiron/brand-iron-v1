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

const categories = [
  {
    title: "AI Visibility & Discoverability",
    body: "Learn how organizations can improve visibility across search engines, AI-powered platforms, and emerging discovery channels.",
    topics: ["What Is AI Visibility?", "AI Search Optimization", "Answer Engine Optimization (AEO)", "Generative Engine Optimization (GEO)", "Knowledge Graph Optimization", "Entity SEO"],
  },
  {
    title: "Go-To-Market Strategy",
    body: "Practical insights for launching products, entering new markets, and building scalable growth systems.",
    topics: ["GTM Strategy Development", "Market Positioning", "Demand Generation", "Revenue Forecasting", "Growth Planning"],
  },
  {
    title: "Brand Strategy",
    body: "Build stronger brands through strategic positioning, messaging, and market differentiation.",
    topics: ["Brand Positioning", "Messaging Frameworks", "Brand Architecture", "Executive Branding", "Competitive Differentiation"],
  },
  {
    title: "Website Development",
    body: "Explore best practices for creating digital experiences that improve visibility, engagement, and conversions.",
    topics: ["Website Strategy", "UX/UI Design", "Conversion Optimization", "Landing Pages", "Website Performance"],
  },
  {
    title: "Revenue Engineering",
    body: "Connect marketing, sales, technology, and automation to create scalable revenue systems.",
    topics: ["Revenue Operations", "CRM Optimization", "Marketing Automation", "Attribution Modeling", "Funnel Optimization"],
  },
  {
    title: "Capital Raise & Investor Readiness",
    body: "Resources for founders and leadership teams preparing for investment opportunities.",
    topics: ["Investor Pitch Decks", "Capital Raise Strategy", "Investor Storytelling", "Market Opportunity Analysis", "Fundraising Preparation"],
  },
];

const resourceTypes = ["AI Visibility Guides", "GTM Playbooks", "Brand Strategy Frameworks", "Revenue Growth Resources", "Investor Readiness Checklists"];

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
  const categoriesView = useInView(0.05);
  const articlesView = useInView(0.05);
  const resourcesView = useInView(0.1);
  const subscribeView = useInView(0.1);
  const ctaView = useInView(0.1);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="blog-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/shared/shared-fence-pasture.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div role="img" aria-label="Dark, misty mountain ridge landscape at dusk" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

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
                Strategic Thinking for Growth-Focused Organizations
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
                Explore expert insights, industry trends, and practical strategies designed to help organizations become discoverable, trusted, and chosen.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                From AI visibility and go-to-market strategy to brand development and revenue engineering, our content is built to help leaders navigate change, identify opportunities, and drive measurable growth.
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

      {/* ── FEATURED ARTICLES (category browse) ─────────────── */}
      <section style={{ background: "#F9F8F6", padding: "120px 40px 80px" }}>
        <div ref={categoriesView.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${categoriesView.inView ? " visible" : ""}`} style={{ color: "#1a1a1a", marginBottom: 48, textAlign: "left" }}>
            Featured Articles
          </h2>
          <div className="category-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {categories.map(({ title, body, topics }, i) => (
              <div key={title}
                className={`category-card reveal${categoriesView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7",
                  borderRadius: 14, padding: "32px 28px", display: "flex", flexDirection: "column",
                  overflow: "hidden", transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", marginBottom: 20 }}>{body}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Popular Topics</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {topics.map(t => (
                    <span key={t} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", borderRadius: 4, padding: "3px 8px" }}>{t}</span>
                  ))}
                </div>
                <Link href="#articles" className="view-articles-link" style={{
                  marginTop: "auto", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  color: "#d87307", transition: "color 0.2s",
                }}>
                  View Articles →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .category-grid { grid-template-columns: 1fr !important; }
          }
          .category-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); border-color: rgba(216,115,7,0.3) !important; }
          .view-articles-link:hover { color: #b8691f !important; }
        `}</style>
      </section>

      {/* ── ARTICLES GRID ────────────────────────────────────── */}
      <section id="articles" style={{ background: "#FFFFFF", padding: "80px 40px 120px" }}>
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

      {/* ── FEATURED RESOURCES ───────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "88px 24px" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/shared/shared-mountain-peaks.png')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div role="img" aria-label="Rocky mountain trail along a ridge crest at sunset" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.5) 0%, rgba(8,16,36,0.42) 50%, rgba(8,16,36,0.6) 100%)" }} />
        <div ref={resourcesView.ref} className={`reveal${resourcesView.inView ? " visible" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>
            Featured Resources
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>
            Explore guides, playbooks, frameworks, and educational content designed to support business growth.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 }}>
            {resourceTypes.map(r => (
              <span key={r} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 600, color: "#f0a860", background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.25)", borderRadius: 20, padding: "7px 16px" }}>{r}</span>
            ))}
          </div>
          <Link href="/contact" className="cta-btn-outline" style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.4)",
            padding: "13px 32px", borderRadius: 6, transition: "border-color 0.2s, background 0.2s",
          }}>
            Explore Resources
          </Link>
        </div>
        <style>{`
          .cta-btn-outline:hover { border-color: #d87307 !important; background: rgba(216,115,7,0.15) !important; }
        `}</style>
      </section>

      {/* ── SUBSCRIBE TO INSIGHTS ────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "88px 24px" }}>
        <div ref={subscribeView.ref} className={`reveal${subscribeView.inView ? " visible" : ""}`} style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.2 }}>
            Subscribe to Insights
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 6 }}>
            Stay informed with expert perspectives on branding, AI visibility, GTM strategy, and revenue growth.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 28 }}>
            Receive the latest articles, industry updates, and strategic insights delivered directly to your inbox.
          </p>
          <form onSubmit={e => { e.preventDefault(); setSubscribeEmail(""); }} style={{ display: "flex", maxWidth: 420, margin: "0 auto" }}>
            <input
              type="email" required placeholder="Email address" value={subscribeEmail}
              onChange={e => setSubscribeEmail(e.target.value)}
              style={{
                flex: 1, padding: "14px 18px",
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14,
                background: "#FFFFFF", border: "1px solid #EEEBE7", borderRight: "none",
                borderRadius: "6px 0 0 6px", color: "#1a1a1a", outline: "none",
              }}
            />
            <button type="submit" style={{
              padding: "14px 28px", borderRadius: "0 6px 6px 0",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.08em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#c46305")}
            onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/blog/blog-wood-logs-texture.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Close-up of weathered gray wooden log siding with orange lichen patches" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Start?
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Put These Insights Into Action?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 560, margin: "0 auto 40px" }}>
                Whether you&apos;re building a stronger brand, improving visibility, launching a new initiative, or scaling growth, Brand Iron can help.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
