import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CaseStudyModeToggle from "@/components/CaseStudyModeToggle";
import { caseStudies, caseStudyCategoryLabel } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) return {};
  const title = `${cs.title} | Brand Iron Case Study`;
  const description = cs.excerpt;
  const url = `https://brandiron.net/case-studies/${cs.slug}/`;
  const image = "/images/shared/shared-footer-logo.jpeg";
  return {
    title,
    description,
    alternates: { canonical: `/case-studies/${cs.slug}/` },
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

  const catLabel = caseStudyCategoryLabel(cs.category);
  const related = caseStudies.filter(c => c.slug !== slug).slice(0, 3);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net/" },
          { name: "Case Studies", url: "https://brandiron.net/case-studies/" },
          { name: cs.title, url: `https://brandiron.net/case-studies/${cs.slug}/` },
        ]}
      />

      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "160px 24px 72px" }}>
        <div
          role="img"
          aria-label={cs.images[0] ? `${cs.client} website screenshot` : cs.thumbnailAlt}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${cs.images[0] ?? cs.thumbnail}')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.55) 0%, rgba(8,16,36,0.5) 45%, rgba(8,16,36,0.8) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto" }}>
          <Link href="/case-studies/" className="back-link" style={{
            display: "flex", width: "fit-content", alignItems: "center", gap: 8,
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600,
            color: "#FFFFFF", textDecoration: "none", marginBottom: 32,
            background: "rgba(8,16,36,0.5)", border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 20, padding: "8px 16px 8px 12px",
            transition: "background 0.2s, border-color 0.2s",
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
        <style>{`
          .back-link:hover { background: rgba(216,115,7,0.35) !important; border-color: rgba(216,115,7,0.5) !important; }
        `}</style>
      </section>

      {cs.fullPageImage && (
        <CaseStudyModeToggle fullPageImage={cs.fullPageImage} alt={`${cs.client} full website screenshot`} />
      )}

      {/* ── CHALLENGE / SOLUTION ─────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {cs.clientDescription && (
            <>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
                The Client
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: 56 }}>{cs.clientDescription}</p>
            </>
          )}

          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
            The Challenge
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: 56 }}>{cs.challenge}</p>

          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
            The Solution
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444", marginBottom: (cs.deliverables?.length || cs.milestones?.length || cs.images.length > 1) ? 56 : 0 }}>{cs.solution}</p>

          {!!cs.deliverables?.length && (
            <div style={{ marginBottom: (cs.milestones?.length || cs.images.length > 1) ? 56 : 0 }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 24 }}>
                What Brand Iron Delivered
              </h2>
              <div style={{ display: "grid", gap: 24 }}>
                {cs.deliverables.map((d, i) => (
                  <div key={i} style={{ paddingLeft: 20, borderLeft: "3px solid #d87307" }}>
                    <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{d.title}</h3>
                    <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", margin: 0 }}>{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!!cs.milestones?.length && (
            <div style={{ marginBottom: cs.images.length > 1 ? 56 : 0 }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 24 }}>
                {cs.milestonesTitle ?? "The Engagement"}
              </h2>
              <div style={{ display: "grid", gap: 24 }}>
                {cs.milestones.map((m, i) => (
                  <div key={i} style={{ paddingLeft: 20, borderLeft: "3px solid #d87307" }}>
                    <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{m.title}</h3>
                    <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", margin: 0 }}>{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cs.images.length > 1 && (
            <div>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 24 }}>
                A Closer Look
              </h2>
              <div className="cs-visuals-grid" style={{ columns: cs.images.length - 1 === 1 ? 1 : 2, columnGap: 20 }}>
                {cs.images.slice(1).map((src, i) => (
                  <div key={i} style={{ breakInside: "avoid", marginBottom: 20, borderRadius: 12, overflow: "hidden", border: "1px solid #EEEBE7" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" src={src} alt={`${cs.client} website screenshot ${i + 2}`} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <style>{`
          @media (max-width: 700px) {
            .cs-visuals-grid { columns: 1 !important; }
          }
        `}</style>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────── */}
      {cs.results.length > 0 && (
        <section style={{ position: "relative", overflow: "hidden", background: "#F7F4EE", padding: "88px 24px" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(216,115,7,0.12) 0%, rgba(216,115,7,0) 70%)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>
              By the Numbers
            </p>
            <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 48 }}>
              The Results
            </h2>
            <div className="cs-results-row">
              {cs.results.map((r, i) => (
                <div key={i} className="cs-results-item" style={{ padding: "0 32px" }}>
                  <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 900, color: "#d87307", lineHeight: 1.1, marginBottom: 10 }}>
                    {r.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(26,26,26,0.6)", margin: 0 }}>{r.label}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .cs-results-row { display: flex; flex-wrap: wrap; justify-content: center; }
            .cs-results-item { position: relative; margin: 20px 0; }
            .cs-results-item:not(:last-child)::after {
              content: ""; position: absolute; top: 4px; right: 0; bottom: 4px; width: 1px;
              background: rgba(26,26,26,0.12);
            }
            @media (max-width: 700px) {
              .cs-results-item { width: 100%; padding: 0 !important; margin: 0; }
              .cs-results-item:not(:last-child)::after { display: none; }
              .cs-results-item:not(:last-child) { padding-bottom: 24px !important; margin-bottom: 24px !important; border-bottom: 1px solid rgba(26,26,26,0.12); }
            }
          `}</style>
        </section>
      )}

      {/* ── CLOSING NOTE ─────────────────────────────────────── */}
      {cs.closingNote && (
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {cs.closingTitle && (
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16 }}>
                {cs.closingTitle}
              </h2>
            )}
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#444", margin: 0 }}>{cs.closingNote}</p>
          </div>
        </section>
      )}

      {/* ── MORE CASE STUDIES ────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 28 }}>
            More Success Stories
          </h3>
          <div className="cs-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {related.map(r => {
              const hoverImage = r.cardHoverImage ?? r.images[0];
              return (
              <Link key={r.slug} href={`/case-studies/${r.slug}/`} className="related-card" style={{
                display: "block", position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                overflow: "hidden", textDecoration: "none", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
              }}
              >
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 10, right: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 10, left: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />

                <div className="related-card-media" style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: "#FFFFFF" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.thumbnail} alt={r.thumbnailAlt} className="related-card-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", padding: 24, transition: "opacity 0.4s ease" }} />
                  {hoverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={hoverImage} alt={`${r.client} website screenshot`} className="related-card-hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 0, transition: "opacity 0.4s ease" }} />
                  )}
                  <div className="related-card-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(8,16,36,0.75) 100%)", opacity: 0, transition: "opacity 0.25s ease" }} />
                  <span className="related-card-view" style={{
                    position: "absolute", left: 20, bottom: 14, transform: "translateY(10px)", opacity: 0, transition: "transform 0.25s ease, opacity 0.25s ease",
                    fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF",
                  }}>
                    View Case Study →
                  </span>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>
                    {caseStudyCategoryLabel(r.category)}
                  </p>
                  <h4 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>{r.title}</h4>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#666", margin: 0 }}>{r.excerpt}</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
        <style>{`
          .related-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .related-card:hover .corner-bracket { opacity: 1 !important; }
          .related-card:hover .related-card-img { opacity: 0 !important; }
          .related-card:hover .related-card-hero { opacity: 1 !important; }
          .related-card:hover .related-card-scrim { opacity: 1 !important; }
          .related-card:hover .related-card-view { opacity: 1 !important; transform: translateY(0) !important; }
          @media (max-width: 900px) {
            .cs-related-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .cs-related-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
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
              <Link href="/contact/" className="cta-btn-primary" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                background: "#d87307", color: "#FFFFFF",
                padding: "18px 44px", borderRadius: 6,
                transition: "background 0.2s", marginBottom: 20,
              }}>
                Book a Strategy Session
              </Link>
              <div>
                <Link href="/case-studies/" className="cta-btn-secondary" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                  More Success Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .cta-btn-primary:hover { background: #c46305 !important; }
          .cta-btn-secondary:hover { color: #f0a860 !important; border-color: rgba(240,168,96,0.6) !important; }
        `}</style>
      </section>
    </main>
  );
}
