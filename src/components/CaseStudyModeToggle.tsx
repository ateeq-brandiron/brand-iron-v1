"use client";
import { useState } from "react";
import QuickLookCarousel from "@/components/QuickLookCarousel";

export default function CaseStudyModeToggle({ images }: { images: string[] }) {
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
        <QuickLookCarousel images={images} onClose={() => setQuickLookOpen(false)} />
      )}
    </div>
  );
}
