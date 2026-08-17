"use client";
import GrowthReviewForm from "./GrowthReviewForm";

export default function GrowthReviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(8,16,36,0.85)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      padding: "40px 24px", overflowY: "auto",
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: "#0F1B2D", borderRadius: 16, maxWidth: 560, width: "100%",
        border: "1px solid rgba(216,115,7,0.30)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />

        <button onClick={onClose} style={{
          position: "absolute", top: 18, right: 18, width: 36, height: 36,
          borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "none",
          color: "rgba(255,255,255,0.70)", fontSize: 20, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          lineHeight: 1, transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(216,115,7,0.30)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
        >×</button>

        <div style={{ padding: "36px 40px 40px" }}>
          <GrowthReviewForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
