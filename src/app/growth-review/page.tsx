"use client";
import Image from "next/image";
import CircuitOverlay from "@/components/CircuitOverlay";
import GrowthReviewForm from "@/components/GrowthReviewForm";

const trustPoints = [
  "A plain-English read on where your GTM stands today",
  "The biggest gaps standing between you and your next stage of growth",
  "No sales pitch — just a strategist's honest take",
];

const stats = [
  { value: "100+", label: "Brands Forged" },
  { value: "25+", label: "Industries Served" },
  { value: "20+", label: "Years in the Saddle" },
];

export default function GrowthReviewPage() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#0A1220", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <CircuitOverlay />

      <div style={{ position: "relative", zIndex: 2, padding: "32px 24px 0", display: "flex", justifyContent: "center" }}>
        <Image src="/images/shared/shared-logo-white.png" alt="Brand Iron" width={112} height={80} priority style={{ height: 52, width: "auto" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "40px 24px 64px" }}>
        <div className="gr-grid" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center", width: "100%" }}>

          {/* LEFT: value proposition */}
          <div>
            <h1 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 54px)", textTransform: "uppercase", letterSpacing: "0.01em", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 22 }}>
              Find Out Where Your<br />Growth Strategy<span style={{ color: "#d87307" }}>.</span> Stands<span style={{ color: "#d87307" }}>.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 480 }}>
              Tell us a bit about your business, and a Brand Iron strategist will follow up with a free, no-obligation breakdown of your go-to-market strategy and where the biggest opportunities are.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
              {trustPoints.map(point => (
                <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <circle cx="12" cy="12" r="10" fill="rgba(216,115,7,0.15)" />
                    <path d="M8 12.5l2.5 2.5L16 9" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>{point}</span>
                </li>
              ))}
            </ul>

            <div className="gr-stats" style={{ display: "flex", gap: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {stats.map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 24, fontWeight: 900, color: "#FFFFFF", marginBottom: 4 }}>{s.value}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: form card */}
          <div style={{
            background: "#0F1B2D", borderRadius: 16, padding: "36px 40px 40px",
            border: "1px solid rgba(216,115,7,0.30)", boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />
            <GrowthReviewForm />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gr-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .gr-stats { flex-wrap: wrap; gap: 24px !important; }
        }
      `}</style>
    </main>
  );
}
