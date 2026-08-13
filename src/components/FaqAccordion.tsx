"use client";
import { useState } from "react";
import Link from "next/link";

export type FaqItem = {
  q: string;
  a: string;
  related?: { label: string; href: string }[];
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {faqs.map(({ q, a, related }, i) => (
        <div key={i}
          className="faq-accordion-card"
          style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s, border-color 0.2s" }}
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
          >
            <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{q}</span>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? "#d87307" : "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke={openFaq === i ? "#FFFFFF" : "#d87307"} strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </button>
          <div style={{ maxHeight: openFaq === i ? 600 : 0, opacity: openFaq === i ? 1 : 0, overflow: "hidden", transition: "max-height 0.3s ease, opacity 0.25s ease" }}>
            <div style={{ padding: "0 24px 20px" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>{a}</p>
              {related && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
                  {related.map(r => (
                    <Link key={r.href} href={r.href} style={{ display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, color: "#d87307", textDecoration: "none", borderBottom: "1px solid rgba(216,115,7,0.4)" }}>
                      {r.label} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .faq-accordion-card:hover { border-color: rgba(216,115,7,0.3); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
      `}</style>
    </div>
  );
}
