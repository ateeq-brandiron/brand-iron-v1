import Link from "next/link";
import { notFound } from "next/navigation";
import CircuitOverlay from "@/components/CircuitOverlay";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>

      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "160px 24px 72px" }}>
        <CircuitOverlay />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto" }}>
          <Link href="/blog" className="back-link" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600,
            color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 28,
            transition: "color 0.2s",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Insights
          </Link>
          <span style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
            {article.category}
          </span>
          <h1 style={{
            fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 46px)", textTransform: "uppercase", letterSpacing: "0.01em",
            color: "#FFFFFF", lineHeight: 1.15, marginBottom: 24,
          }}>
            {article.title}
          </h1>
          <div style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            <span>By the Brand Iron Team</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.35)" }} />
            <span>{article.date}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.35)" }} />
            <span style={{ color: "#d87307" }}>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "72px 24px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: "#333", fontWeight: 500, marginBottom: 32 }}>
            {article.excerpt}
          </p>
          {article.body.map((block, i) => (
            block.type === "h2" ? (
              <h2 key={i} style={{
                fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 900,
                textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a",
                marginTop: 40, marginBottom: 16, lineHeight: 1.3,
              }}>
                {block.text}
              </h2>
            ) : (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: 22 }}>
                {block.text}
              </p>
            )
          ))}

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #EEEBE7" }}>
            <Link href="/contact" className="cta-btn-primary" style={{
              display: "inline-flex", alignItems: "center",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
              background: "#d87307", color: "#FFFFFF",
              padding: "15px 32px", borderRadius: 6, textDecoration: "none",
              transition: "background 0.2s",
            }}>
              Book a Strategy Session
            </Link>
          </div>
        </article>
      </section>

      {/* ── MORE INSIGHTS ────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "80px 24px" }}>
        <CircuitOverlay />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#FFFFFF", marginBottom: 28 }}>
            More Insights
          </h3>
          <div className="article-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {related.map(({ slug: rSlug, category, title, readTime }) => (
              <Link key={rSlug} href={`/blog/${rSlug}`} className="related-card" style={{
                display: "block", position: "relative", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "24px 22px",
                textDecoration: "none", overflow: "hidden", transition: "border-color 0.2s, background 0.2s, transform 0.2s",
              }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <span style={{ display: "inline-block", padding: "3px 10px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>{category}</span>
                <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", lineHeight: 1.4, marginBottom: 10 }}>{title}</h4>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{readTime}</span>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .article-related-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .article-related-grid { grid-template-columns: 1fr !important; }
          }
          .related-card:hover { background: rgba(216,115,7,0.07) !important; border-color: rgba(216,115,7,0.3) !important; transform: translateY(-3px); }
          .back-link:hover { color: #d87307 !important; }
          .cta-btn-primary:hover { background: #c46305 !important; }
          .cta-btn-secondary:hover { color: #f0a860 !important; border-color: rgba(240,168,96,0.6) !important; }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shutterstock_2489980613-scaled.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Start?
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 48px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Turn These Ideas Into a Growth Plan
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 560, margin: "0 auto 40px" }}>
                Book a strategy session and we&apos;ll map what&apos;s actually working, and what to fix first, for your business.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="cta-btn-primary" style={{
                  display: "inline-block", padding: "16px 40px", borderRadius: 6,
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
                  background: "#d87307", color: "#FFFFFF", transition: "background 0.2s",
                }}>
                  Book a Strategy Session
                </Link>
                <Link href="/blog" className="cta-btn-secondary" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                  More Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
