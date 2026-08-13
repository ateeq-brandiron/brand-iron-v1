import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CircuitOverlay from "@/components/CircuitOverlay";
import { articles } from "@/data/articles";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FaqAccordion from "@/components/FaqAccordion";

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return {};
  const title = article.seoTitle ?? article.title;
  const description = article.metaDescription ?? article.excerpt;
  const url = `https://brandiron.net/blog/${article.slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: article.publishedISO,
      authors: ["Michael Doyle"],
      images: [article.headerImage],
      siteName: "Brand Iron",
    },
    twitter: {
      card: "summary_large_image",
      site: "@BrandIron",
      title,
      description,
      images: [article.headerImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Blog", url: "https://brandiron.net/blog" },
          { name: article.title, url: `https://brandiron.net/blog/${article.slug}` },
        ]}
      />

      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "160px 24px 72px" }}>
        <div
          role="img"
          aria-label={article.headerImageAlt}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${article.headerImage}')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.55) 0%, rgba(8,16,36,0.5) 45%, rgba(8,16,36,0.8) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto" }}>
          <Link href="/blog" className="back-link" style={{
            display: "flex", width: "fit-content", alignItems: "center", gap: 8,
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600,
            color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 32,
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
            <span>By Michael Doyle</span>
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
          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} style={{
                  fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 900,
                  textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a",
                  marginTop: 40, marginBottom: 16, lineHeight: 1.3,
                }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={i} style={{
                  fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(16px, 1.8vw, 19px)", fontWeight: 900,
                  textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a",
                  marginTop: 30, marginBottom: 12, lineHeight: 1.3,
                }}>
                  {block.text}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} style={{ margin: "0 0 22px", padding: 0, listStyle: "none" }}>
                  {block.items.map((item, j) => {
                    const isObj = typeof item !== "string";
                    return (
                      <li key={j} style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 17, lineHeight: 1.75, color: "#444" }}>
                        <span style={{ flex: "0 0 auto", color: "#d87307", fontWeight: 700 }}>—</span>
                        <span>
                          {isObj && <strong style={{ color: "#1a1a1a" }}>{(item as { bold: string; text: string }).bold} </strong>}
                          {isObj ? (item as { bold: string; text: string }).text : (item as string)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} style={{ overflowX: "auto", marginBottom: 28, border: "1px solid #EEEBE7", borderRadius: 10 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                    <thead>
                      <tr>
                        {block.headers.map((h, hi) => (
                          <th key={hi} style={{
                            textAlign: "left", padding: "14px 18px", background: "#0F1B2D", color: "#FFFFFF",
                            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700,
                            letterSpacing: "0.06em", textTransform: "uppercase",
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} style={{ background: ri % 2 === 0 ? "#FFFFFF" : "#F9F8F6" }}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{ padding: "14px 18px", color: "#444", lineHeight: 1.6, borderTop: "1px solid #EEEBE7" }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (block.type === "image") {
              return (
                <div key={i} style={{ margin: "8px 0 32px", textAlign: "center" }}>
                  <Image loading="lazy" src={block.src} alt={block.alt} width={1200} height={675} sizes="(max-width: 720px) 100vw, 720px" style={{ maxWidth: "100%", width: "100%", height: "auto", borderRadius: 10, border: "1px solid #EEEBE7" }} />
                </div>
              );
            }
            if (block.type === "faq") {
              return (
                <div key={i} style={{ marginBottom: 22 }}>
                  <FaqAccordion faqs={block.items} />
                </div>
              );
            }
            return (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: 22 }}>
                {block.bold && <strong style={{ color: "#1a1a1a" }}>{block.bold} </strong>}
                {block.text}
              </p>
            );
          })}

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

      {/* ── AUTHOR ───────────────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "56px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="author-card" style={{
            position: "relative", overflow: "hidden", display: "flex", gap: 24, alignItems: "center",
            background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14, padding: "28px 32px",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
            <Image loading="lazy" src="/images/team/Brand Iron Team_Michael.jpg" alt="Michael Doyle" width={72} height={72} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d87307", marginBottom: 6 }}>Written By</p>
              <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 8 }}>Michael Doyle</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", margin: 0 }}>
                A trailblazer in brand marketing for 20+ years, Michael launched Brand Iron in 2002 after building and selling a multi-million dollar advertising agency. His precision has steered businesses across industries to success worldwide.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 560px) {
            .author-card { flex-direction: column; align-items: flex-start !important; text-align: left; }
          }
        `}</style>
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
            backgroundImage: "url('/images/shared/shared-cta-banner-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Rugged mountain ridge trail at golden-hour sunset" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
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
