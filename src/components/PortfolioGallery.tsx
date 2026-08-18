"use client";
import { useState } from "react";
import { portfolioCategories, PortfolioCategoryId, PortfolioItem } from "@/data/portfolio";
import WebsiteScrollPreview from "@/components/WebsiteScrollPreview";

export default function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");
  const [expanded, setExpanded] = useState<PortfolioItem | null>(null);

  const activeCategoryMeta = activeCategory === "all" ? null : portfolioCategories.find(c => c.id === activeCategory);
  const filtered = activeCategory === "all" ? items : items.filter(i => i.category === activeCategory);

  return (
    <div>
      {/* Category filter tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40, justifyContent: "center" }}>
        <button
          onClick={() => setActiveCategory("all")}
          style={{
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            padding: "10px 20px", borderRadius: 20, cursor: "pointer", transition: "background 0.2s, color 0.2s, border-color 0.2s",
            background: activeCategory === "all" ? "#d87307" : "#FFFFFF",
            color: activeCategory === "all" ? "#FFFFFF" : "#555",
            border: activeCategory === "all" ? "1px solid #d87307" : "1px solid #EEEBE7",
          }}
        >
          All Work
        </button>
        {portfolioCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "10px 20px", borderRadius: 20, cursor: "pointer", transition: "background 0.2s, color 0.2s, border-color 0.2s",
              background: activeCategory === cat.id ? "#d87307" : "#FFFFFF",
              color: activeCategory === cat.id ? "#FFFFFF" : "#555",
              border: activeCategory === cat.id ? "1px solid #d87307" : "1px solid #EEEBE7",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            {cat.label}
            {cat.comingSoon && (
              <span style={{ fontSize: 10, fontWeight: 700, color: activeCategory === cat.id ? "rgba(255,255,255,0.85)" : "#999" }}>· Soon</span>
            )}
          </button>
        ))}
      </div>

      {/* Empty state for a coming-soon category */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 24px", background: "#FFFFFF", border: "1px dashed #EEEBE7", borderRadius: 14 }}>
          <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 8 }}>
            {activeCategoryMeta?.label} Examples Coming Soon
          </p>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, color: "#666", margin: 0 }}>
            We&apos;re finalizing examples for this category. Check back soon.
          </p>
        </div>
      ) : (
        <div className="pf-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {filtered.map(item => {
            const catLabel = portfolioCategories.find(c => c.id === item.category)?.label ?? item.category;
            return (
              <button
                key={item.slug}
                onClick={() => setExpanded(item)}
                className="pf-gallery-card"
                style={{
                  position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 14,
                  overflow: "hidden", textAlign: "left", cursor: "pointer", padding: 0,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 10, right: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />
                <img loading="lazy" className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 10, left: 10, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease", zIndex: 3 }} />
                <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: "#F0EEEA" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumbnail} alt={item.thumbnailAlt} className="pf-gallery-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
                  <div className="pf-gallery-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(8,16,36,0.75) 100%)", opacity: 0, transition: "opacity 0.25s ease" }} />
                  <span className="pf-gallery-view" style={{
                    position: "absolute", left: 20, bottom: 14, transform: "translateY(10px)", opacity: 0, transition: "transform 0.25s ease, opacity 0.25s ease",
                    fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF",
                  }}>
                    View Project →
                  </span>
                  {item.isPlaceholder && (
                    <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(15,27,45,0.85)", color: "#FFFFFF", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 9px", borderRadius: 4 }}>
                      Placeholder
                    </span>
                  )}
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d87307", marginBottom: 6 }}>{catLabel}</p>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Expand modal */}
      {expanded && (
        <div
          role="dialog" aria-modal="true"
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(8,16,36,0.85)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 24px", overflowY: "auto" }}
          onClick={e => { if (e.target === e.currentTarget) setExpanded(null); }}
        >
          <div style={{ background: "#FFFFFF", borderRadius: 16, maxWidth: 720, width: "100%", position: "relative", overflow: "hidden" }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
            <button onClick={() => setExpanded(null)} aria-label="Close" style={{
              position: "absolute", top: 18, right: 18, width: 36, height: 36, borderRadius: 8,
              background: "rgba(0,0,0,0.06)", border: "none", color: "#555", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, zIndex: 2,
            }}>×</button>

            <div style={{ padding: "36px 40px 40px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>
                {portfolioCategories.find(c => c.id === expanded.category)?.label}
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 20 }}>
                {expanded.title}
              </h2>

              <div style={{ marginBottom: 24 }}>
                {expanded.type === "website" && expanded.fullPageImage ? (
                  <WebsiteScrollPreview src={expanded.fullPageImage} alt={expanded.thumbnailAlt} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={expanded.thumbnail} alt={expanded.thumbnailAlt} style={{ width: "100%", borderRadius: 12, border: "1px solid #EEEBE7" }} />
                )}
              </div>

              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: expanded.isPlaceholder ? 20 : 0 }}>
                {expanded.description}
              </p>

              {expanded.isPlaceholder && (
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "#999", fontStyle: "italic", margin: 0 }}>
                  This is a placeholder entry standing in for a real project.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pf-gallery-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
        .pf-gallery-card:hover .corner-bracket { opacity: 1 !important; }
        .pf-gallery-card:hover .pf-gallery-img { transform: scale(1.08); }
        .pf-gallery-card:hover .pf-gallery-scrim { opacity: 1 !important; }
        .pf-gallery-card:hover .pf-gallery-view { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 900px) {
          .pf-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pf-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
