"use client";
import { useState } from "react";
import WebsiteScrollPreview from "@/components/WebsiteScrollPreview";

export default function CaseStudyModeToggle({ fullPageImage, alt }: { fullPageImage: string; alt: string }) {
  const [quickLookOpen, setQuickLookOpen] = useState(false);

  return (
    <div style={{ background: "#FFFFFF", padding: "24px 24px 0", textAlign: "center" }}>
      <div style={{ display: "inline-flex", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 24, padding: 4 }}>
        <button
          onClick={() => setQuickLookOpen(false)}
          style={{
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            padding: "9px 20px", borderRadius: 20, cursor: "pointer", border: "none",
            background: !quickLookOpen ? "#d87307" : "transparent",
            color: !quickLookOpen ? "#FFFFFF" : "#555",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Full Story
        </button>
        <button
          onClick={() => setQuickLookOpen(true)}
          style={{
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            padding: "9px 20px", borderRadius: 20, cursor: "pointer", border: "none",
            background: quickLookOpen ? "#d87307" : "transparent",
            color: quickLookOpen ? "#FFFFFF" : "#555",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Quick Look
        </button>
      </div>

      {quickLookOpen && (
        <div
          role="dialog" aria-modal="true" aria-label="Quick look full page preview"
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(8,16,36,0.85)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 24px", overflowY: "auto" }}
          onClick={e => { if (e.target === e.currentTarget) setQuickLookOpen(false); }}
        >
          <div style={{ background: "#FFFFFF", borderRadius: 16, maxWidth: 720, width: "100%", position: "relative", overflow: "hidden" }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
            <button onClick={() => setQuickLookOpen(false)} aria-label="Close" style={{
              position: "absolute", top: 18, right: 18, width: 36, height: 36, borderRadius: 8,
              background: "rgba(0,0,0,0.06)", border: "none", color: "#555", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, zIndex: 2,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(216,115,7,0.30)"; e.currentTarget.style.color = "#d87307"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.06)"; e.currentTarget.style.color = "#555"; }}
            >×</button>

            <div style={{ padding: "64px 40px 40px" }}>
              <WebsiteScrollPreview src={fullPageImage} alt={alt} frameHeight={560} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
