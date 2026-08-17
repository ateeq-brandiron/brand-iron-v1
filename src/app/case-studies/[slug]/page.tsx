import Link from "next/link";
import { notFound } from "next/navigation";
import CircuitOverlay from "@/components/CircuitOverlay";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { caseStudies } from "@/data/caseStudies";
import { portfolioCategories } from "@/data/portfolio";

export function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) return {};
  const title = `${cs.title} | Brand Iron Case Study`;
  const description = cs.excerpt;
  const url = `https://brandiron.net/case-studies/${cs.slug}`;
  const image = "/images/shared/shared-footer-logo.jpeg";
  return {
    title,
    description,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [image],
      siteName: "Brand Iron",
    },
    twitter: {
      card: "summary_large_image",
      site: "@BrandIron",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) notFound();

  const catLabel = portfolioCategories.find(c => c.id === cs.category)?.label ?? cs.category;
  const related = caseStudies.filter(c => c.slug !== slug).slice(0, 3);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Case Studies", url: "https://brandiron.net/case-studies" },
          { name: cs.title, url: `https://brandiron.net/case-studies/${cs.slug}` },
        ]}
      />

      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "160px 24px 72px" }}>
        <div
          role="img"
          aria-label={cs.thumbnailAlt}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${cs.thumbnail}')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.55) 0%, rgba(8,16,36,0.5) 45%, rgba(8,16,36,0.8) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto" }}>
          <Link href="/case-studies" className="back-link" style={{
            display: "flex", width: "fit-content", alignItems: "center", gap: 8,
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600,
            color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 32,
            transition: "color 0.2s",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Case Studies
          </Link>
          <span style={{ display: "inline-block", padding: "4px 12px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
            {catLabel}
          </span>
          <h1 style={{
            fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 46px)", textTransform: "uppercase", letterSpacing: "0.01em",
            color: "#FFFFFF", lineHeight: 1.15, marginBottom: 16,
          }}>
            {cs.title}
          </h1>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>
            Client: {cs.client}
          </p>
        </div>
      </section>

      {cs.isPlaceholder && (
        <div style={{ background: "#FFF7E8", borderTop: "1px solid #F0DBA8", borderBottom: "1px solid #F0DBA8", padding: "14px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, color: "#8a6416", margin: 0 }}>
            This is a placeholder case study for layout and review purposes — not a real client engagement.
          </p>
        </div>
      )}

      {/* ── CHALLENGE / SOLUTION ─────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
            The Challenge
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: 56 }}>{cs.challenge}</p>

          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
            The Solution
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444" }}>{cs.solution}</p>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "80px 24px" }}>
        <CircuitOverlay />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 40 }}>
            The Results
          </h2>
          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {cs.results.map((r, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "32px 20px" }}>
                <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 900, color: "#d87307", lineHeight: 1.1, marginBottom: 10 }}>{r.value}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: 0 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .cs-results-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── MORE CASE STUDIES ────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 28 }}>
            More Success Stories
          </h3>
          <div className="cs-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {related.map(r => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="related-card" style={{
                display: "block", position: "relative", background: "#FFFFFF",
                border: "1px solid #EEEBE7", borderRadius: 10, padding: "24px 22px",
                textDecoration: "none", overflow: "hidden", transition: "border-color 0.2s, background 0.2s, transform 0.2s",
              }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <span style={{ display: "inline-block", padding: "3px 10px", border: "1px solid rgba(216,115,7,0.4)", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>
                  {portfolioCategories.find(c => c.id === r.category)?.label ?? r.category}
                </span>
                <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", lineHeight: 1.4 }}>{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .related-card:hover { transform: translateY(-4px); border-color: rgba(216,115,7,0.3) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.08); }
          @media (max-width: 900px) {
            .cs-related-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .cs-related-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "88px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.15, marginBottom: 20 }}>
            Ready to Become Our Next Success Story?
          </h2>
          <Link href="/contact" className="cta-btn-primary" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "16px 40px", borderRadius: 6,
          }}>
            Book a Strategy Session
          </Link>
        </div>
        <style>{`
          .cta-btn-primary:hover { background: #c46305 !important; }
        `}</style>
      </section>
    </main>
  );
}
