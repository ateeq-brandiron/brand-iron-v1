"use client";
import { useEffect, useState } from "react";

export default function QuickLookCarousel({ images, onClose }: { images: string[]; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goPrev = () => setIndex(i => (i - 1 + count) % count);
  const goNext = () => setIndex(i => (i + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex(i => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex(i => (i + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, onClose]);

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Quick look image viewer"
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(8,16,36,0.92)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button onClick={onClose} aria-label="Close quick look" style={{
        position: "absolute", top: 24, right: 24, width: 44, height: 44, borderRadius: "50%",
        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF",
        fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        lineHeight: 1, transition: "background 0.2s, border-color 0.2s", zIndex: 2,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(216,115,7,0.3)"; e.currentTarget.style.borderColor = "#d87307"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
      >×</button>

      {count > 1 && (
        <button onClick={goPrev} aria-label="Previous image" style={{
          position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s, border-color 0.2s", zIndex: 2,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(216,115,7,0.3)"; e.currentTarget.style.borderColor = "#d87307"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )}

      <div style={{ width: "min(90vw, 1100px)", maxHeight: "80vh", overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ display: "flex", width: `${count * 100}%`, transform: `translateX(-${index * (100 / count)}%)`, transition: "transform 0.4s ease" }}>
          {images.map((src, i) => (
            <div key={i} style={{ width: `${100 / count}%`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0d14" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Project image ${i + 1} of ${count}`} style={{ maxWidth: "100%", maxHeight: "80vh", display: "block", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <button onClick={goNext} aria-label="Next image" style={{
          position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s, border-color 0.2s", zIndex: 2,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(216,115,7,0.3)"; e.currentTarget.style.borderColor = "#d87307"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      )}

      {count > 1 && (
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20,
          padding: "6px 16px", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.06em", color: "#FFFFFF",
        }}>
          {index + 1} / {count}
        </div>
      )}
    </div>
  );
}
