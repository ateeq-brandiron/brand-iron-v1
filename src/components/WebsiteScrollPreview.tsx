"use client";
import { useEffect, useRef, useState } from "react";

export default function WebsiteScrollPreview({ src, alt, frameHeight = 480 }: { src: string; alt: string; frameHeight?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => setMaxScroll(Math.max(0, el.scrollHeight - el.clientHeight));
    const img = el.querySelector("img");
    if (img && img.complete) measure();
    img?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [src]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || maxScroll <= 0) return;

    let raf: number;
    let phase: "down" | "pauseBottom" | "up" | "pauseTop" = "down";
    let pauseUntil = 0;
    const speed = 0.35; // px per ms

    const step = (now: number) => {
      if (phase === "pauseBottom" || phase === "pauseTop") {
        if (now >= pauseUntil) phase = phase === "pauseBottom" ? "up" : "down";
      } else {
        const delta = speed * 16;
        const next = phase === "down" ? el.scrollTop + delta : el.scrollTop - delta;
        el.scrollTop = Math.max(0, Math.min(maxScroll, next));
        if (phase === "down" && el.scrollTop >= maxScroll - 1) { phase = "pauseBottom"; pauseUntil = now + 1400; }
        if (phase === "up" && el.scrollTop <= 1) { phase = "pauseTop"; pauseUntil = now + 900; }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [maxScroll]);

  return (
    <div style={{ borderRadius: 12, border: "1px solid #EEEBE7", overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}>
      <div style={{ background: "#1a1a1a", padding: "10px 14px", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
      </div>
      <div ref={scrollRef} style={{ height: frameHeight, overflowY: "hidden", position: "relative", background: "#FFFFFF" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      </div>
    </div>
  );
}
