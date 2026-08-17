"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FaqAccordion from "@/components/FaqAccordion";
import { faqCategories, faqs, FaqCategoryId } from "@/data/faqs";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId | "all">("all");
  const { ref: listViewRef, inView: listViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();

  const visibleCategories = activeCategory === "all"
    ? faqCategories
    : faqCategories.filter(c => c.id === activeCategory);

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "FAQ", url: "https://brandiron.net/faq" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{
        position: "relative", minHeight: "50vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/shared/shared-sagebrush-circuit-lines.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Desert sagebrush landscape at sunset overlaid with glowing digital circuit-line patterns" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,14,0.45) 0%, rgba(10,10,14,0.35) 45%, rgba(10,10,14,0.78) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", padding: "140px 24px 72px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>
            Support &amp; Resources
          </p>
          <h1 className="hero-h1-anim" style={{
            fontFamily: "var(--font-burford-inline), sans-serif", fontWeight: 400, fontSize: "clamp(38px, 5.4vw, 64px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "#FFFFFF",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
            lineHeight: 1.05, marginBottom: 24,
          }}>
            Frequently Asked Questions
          </h1>
          <p className="hero-body-anim" style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 620, margin: "0 auto" }}>
            Straight answers about how Brand Iron builds brand strategy, AI visibility, go-to-market, revenue systems, and capital raise support into one connected growth engine.
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER ──────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "40px 24px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
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
            All Questions
          </button>
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "10px 20px", borderRadius: 20, cursor: "pointer", transition: "background 0.2s, color 0.2s, border-color 0.2s",
                background: activeCategory === cat.id ? "#d87307" : "#FFFFFF",
                color: activeCategory === cat.id ? "#FFFFFF" : "#555",
                border: activeCategory === cat.id ? "1px solid #d87307" : "1px solid #EEEBE7",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── FAQ LIST ─────────────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "48px 24px 100px" }}>
        <div ref={listViewRef} style={{ maxWidth: 860, margin: "0 auto" }}>
          {visibleCategories.map(cat => {
            const groupFaqs = faqs.filter(f => f.category === cat.id);
            if (groupFaqs.length === 0) return null;
            return (
              <div key={cat.id} className={`reveal${listViewInView ? ' visible' : ''}`} style={{ marginBottom: 44 }}>
                <p style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307",
                  marginBottom: 16, display: "flex", alignItems: "center", gap: 12,
                }}>
                  {cat.label}
                  <span style={{ flex: 1, height: 1, background: "#EEEBE7" }} />
                </p>
                <FaqAccordion faqs={groupFaqs.map(({ q, a }) => ({ q, a }))} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "88px 24px", textAlign: "center" }}>
        <CircuitOverlay />
        <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.15, marginBottom: 16 }}>
            Still Have Questions?
          </h2>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto 32px" }}>
            Every successful growth story begins with a conversation. Let&apos;s talk about where your business stands today and where it can go next.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "16px 40px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>

      {/* ── FAQPage SCHEMA ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
    </main>
  );
}
