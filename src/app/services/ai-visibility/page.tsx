"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.12) {
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

function AuditModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = thank you
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    website: "", company: "", monthlyVisitors: "", currentSeo: "", goal: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setStep(2); }, 900);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(8,16,36,0.85)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px", overflowY: "auto",
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: "#0F1B2D", borderRadius: 16, maxWidth: 680, width: "100%",
        border: "1px solid rgba(216,115,7,0.30)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Copper top accent */}
        <div style={{ height: 3, background: "linear-gradient(to right, transparent, #d87307, transparent)" }} />

        {/* Close button */}
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
          {step === 1 ? (
            <>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>
                Free Audit, No Obligation
              </p>
              <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", lineHeight: 1.15, marginBottom: 8 }}>
                Get Your Free SEO &amp; AI Visibility Audit
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
                We&apos;ll review your site&apos;s health across search engines and AI platforms, and send you a plain-English summary of what&apos;s working, what isn&apos;t, and where the quick wins are.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Name row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  {[["firstName", "First Name *"], ["lastName", "Last Name *"]].map(([k, label]) => (
                    <div key={k}>
                      <label style={labelStyle}>{label}</label>
                      <input required value={form[k as keyof typeof form]} onChange={e => set(k, e.target.value)} style={inputStyle} placeholder={label.replace(" *","")} />
                    </div>
                  ))}
                </div>

                {/* Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={labelStyle}>Work Email *</label>
                    <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} style={inputStyle} placeholder="(000) 000-0000" />
                  </div>
                </div>

                {/* Website + Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={labelStyle}>Website URL *</label>
                    <input required value={form.website} onChange={e => set("website", e.target.value)} style={inputStyle} placeholder="https://yoursite.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input value={form.company} onChange={e => set("company", e.target.value)} style={inputStyle} placeholder="Company" />
                  </div>
                </div>

                {/* Monthly visitors */}
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Estimated Monthly Website Visitors</label>
                  <select value={form.monthlyVisitors} onChange={e => set("monthlyVisitors", e.target.value)} style={selectStyle}>
                    <option value="">Select range…</option>
                    <option>Under 500</option>
                    <option>500 – 2,000</option>
                    <option>2,000 – 10,000</option>
                    <option>10,000 – 50,000</option>
                    <option>50,000+</option>
                    <option>Not sure</option>
                  </select>
                </div>

                {/* Current SEO */}
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Current SEO / AI Visibility Situation</label>
                  <select value={form.currentSeo} onChange={e => set("currentSeo", e.target.value)} style={selectStyle}>
                    <option value="">Select one…</option>
                    <option>No SEO work done yet</option>
                    <option>Some SEO, but not consistent</option>
                    <option>Active SEO program in place</option>
                    <option>Had SEO before, lapsed</option>
                    <option>Not sure where we stand</option>
                  </select>
                </div>

                {/* Goal */}
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Primary Goal</label>
                  <select value={form.goal} onChange={e => set("goal", e.target.value)} style={selectStyle}>
                    <option value="">Select one…</option>
                    <option>Rank higher on Google</option>
                    <option>Show up in ChatGPT / AI answers</option>
                    <option>More qualified organic traffic</option>
                    <option>Understand my current visibility gaps</option>
                    <option>All of the above</option>
                  </select>
                </div>

                <button type="submit" disabled={submitting} style={{
                  width: "100%", padding: "17px 32px",
                  background: submitting ? "rgba(216,115,7,0.50)" : "#d87307",
                  color: "#FFFFFF", border: "none", borderRadius: 8,
                  fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase", cursor: submitting ? "default" : "pointer",
                  transition: "background 0.2s",
                }}>
                  {submitting ? "Submitting…" : "Send Me My Free Audit →"}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(216,115,7,0.15)", border: "2px solid #d87307", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 28, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 12 }}>
                You&apos;re On The List!
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: 420, margin: "0 auto 32px" }}>
                We&apos;ll review <strong style={{ color: "#d87307" }}>{form.website || "your site"}</strong> and send your free AI Visibility & SEO health summary within 1–2 business days.
              </p>
              <button onClick={onClose} style={{
                padding: "14px 40px", background: "transparent",
                border: "2px solid #d87307", borderRadius: 8, color: "#d87307",
                fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
              }}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: 11,
  fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)", marginBottom: 6,
};
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 6, color: "#FFFFFF",
  fontFamily: "'Montserrat', sans-serif", fontSize: 13,
  outline: "none", boxSizing: "border-box",
};
const selectStyle: React.CSSProperties = {
  ...inputStyle, appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23d87307' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  paddingRight: 36,
};

export default function AIVisibilityPage() {
  const [auditOpen, setAuditOpen] = useState(false);
  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  const tiers = [
    {
      number: "Tier 0",
      name: "AI Visibility Diagnostic",
      tagline: "Understand Where You Stand",
      description: "Discover how search engines and AI platforms currently view your business, identify visibility gaps, and receive a clear roadmap for improvement.",
      bestFor: "Organizations exploring AI Visibility or evaluating their current digital presence.",
      outcome: "Visibility Clarity",
      engagement: "One-Time Audit",
      focus: "Diagnose",
      href: "/services/ai-visibility/tier-0",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="16" cy="16" r="10" stroke="#d87307" strokeWidth="2"/>
          <path d="M24 24l7 7" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="4" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 1",
      name: "SEO & AI Foundation",
      tagline: "Build a Strong Foundation",
      description: "Establish the technical, structural, and semantic foundation required for long-term visibility across search engines and AI-powered search experiences.",
      bestFor: "Organizations ready to improve their website's SEO, AI readiness, and technical performance.",
      outcome: "Strong SEO & AI Foundation",
      engagement: "One-Time Implementation",
      focus: "Build",
      href: "/services/ai-visibility/tier-1",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="20" width="8" height="12" rx="1" stroke="#d87307" strokeWidth="2"/>
          <rect x="14" y="12" width="8" height="20" rx="1" stroke="#d87307" strokeWidth="2"/>
          <rect x="24" y="4" width="8" height="28" rx="1" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 2",
      name: "AI Authority Growth System",
      tagline: "Grow Your Authority",
      description: "Expand your digital footprint through strategic content, authority building, citations, reviews, and AI-focused optimization that strengthens trust and recommendations.",
      bestFor: "Organizations focused on increasing rankings, authority, and qualified demand.",
      outcome: "Greater Authority & AI Recommendations",
      engagement: "Monthly Growth Program",
      focus: "Grow",
      href: "/services/ai-visibility/tier-2",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4 28l8-10 6 4 10-14 4-4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="8" r="4" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 3",
      name: "AI Market Dominance Engine",
      tagline: "Lead Your Market",
      description: "Build category leadership through executive authority, advanced AI optimization, reputation management, and continuous strategic growth.",
      bestFor: "Organizations committed to becoming the trusted leader in their industry.",
      outcome: "Market Leadership & AI Recommendation Dominance",
      engagement: "Strategic Partnership",
      focus: "Lead",
      href: "/services/ai-visibility/tier-3",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4l3.6 7.6 8.4 1.1-6.1 5.9 1.5 8.3L18 23l-7.4 3.9 1.5-8.3-6.1-5.9 8.4-1.1z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="rgba(216,115,7,0.12)"/>
        </svg>
      ),
    },
  ];

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {auditOpen && <AuditModal onClose={() => setAuditOpen(false)} />}

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="ai-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/Animate_this_image_and_these_d.mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="ai-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="ai-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, hook, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "'Burford Rustic Inline', sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.05,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Helping Brands Become Discoverable, Trusted, and Recommended Across Search and AI.
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 14 }}>
                {/* Primary CTA — AI Visibility Assessment (lead capture form) */}
                <button onClick={() => setAuditOpen(true)} style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "15px 32px", borderRadius: 6,
                  background: "#d87307", border: "2px solid #d87307",
                  color: "#FFFFFF", cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  transition: "background 0.2s, transform 0.15s",
                  boxShadow: "0 4px 20px rgba(216,115,7,0.35)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#b8691f"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#d87307"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                    <path d="M16.5 16.5l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  Schedule an AI Visibility Assessment
                </button>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                Discover how visible your business is across Google, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.
              </p>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                Search behavior has evolved. Today&apos;s buyers research through ChatGPT, Gemini, Claude, Perplexity, voice assistants, industry communities, and search engines long before contacting a company. If your business isn&apos;t visible where those decisions begin, you&apos;re missing opportunities before sales can engage.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
                Brand Iron helps organizations improve AI Visibility by integrating SEO, AEO, GEO, technical optimization, entity development, authority building, and strategic content into one connected visibility strategy.
              </p>

              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "#FFFFFF", fontWeight: 700 }}>
                The brands that earn visibility today become the brands AI recommends tomorrow.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ai-hero-section { height: auto !important; min-height: 100vh; }
            .ai-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .ai-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: SEARCH HAS CHANGED ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Search Has Changed. Visibility Has Changed with It.
          </h2>

          <div style={{ marginBottom: 80 }}>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Search has evolved beyond Google. While SEO remains essential, today&apos;s buyers ask AI platforms and search engines for trusted answers long before speaking with a company. Whether they&apos;re using ChatGPT, Gemini, Claude, Perplexity, Google, or industry communities, buying decisions now happen across multiple channels. Your business needs to be visible wherever those conversations begin.
            </p>
          </div>

          {/* Then vs Now */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ marginBottom: 64 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 32 }}>
              Search Has Evolved
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#EFEDE7", color: "#8a8378", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Then</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Now</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Search begins with keywords", "Search begins with questions and conversations"],
                    ["Google is the primary destination", "Buyers move between Google, ChatGPT, Gemini, Claude, Perplexity, LinkedIn, reviews, and industry resources"],
                    ["Ranking higher was the goal", "Being understood, trusted, and recommended is the goal"],
                    ["Success measured by clicks", "Success measured by discoverability, authority, citations, and qualified demand"],
                    ["Websites compete for rankings", "Brands compete for trust across an entire digital ecosystem"],
                  ].map(([then, now], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "20px 24px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{then}</td>
                      <td style={{ padding: "20px 24px", color: "#1a1a1a", fontWeight: 600, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Why This Matters — full-bleed photo panel */}
        <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{
          position: "relative", width: "100vw", marginLeft: "calc(50% - 50vw)", marginTop: 64,
          overflow: "hidden", borderTop: "3px solid #d87307",
          backgroundImage: "url('/images/Brand Iron Techy Grass Prairie.png')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,8,0.55) 0%, rgba(10,12,8,0.72) 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.6)", marginBottom: 24, textAlign: "center" }}>
              Why This Matters for Your Business
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", textAlign: "center", marginBottom: 28 }}>
              Every day, potential customers are asking questions like:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
              {[
                "&ldquo;Who are the best B2B branding agencies?&rdquo;",
                "&ldquo;What company specializes in AI Visibility?&rdquo;",
                "&ldquo;Who can help with Go-to-Market Strategy?&rdquo;",
                "&ldquo;What is Revenue Engineering?&rdquo;",
              ].map((q, i) => (
                <div key={i} style={{ background: "rgba(8,16,36,0.45)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 20px" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontStyle: "italic", color: "#f0a860", margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", textAlign: "center", marginBottom: 16 }}>
              If AI platforms and search engines don&apos;t recognize your business as a trusted source, your competitors may become the answers buyers see first.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", textAlign: "center", marginBottom: 8 }}>
              AI doesn&apos;t simply rank content.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#FFFFFF", fontWeight: 600, textAlign: "center" }}>
              It evaluates context, authority, credibility, and relevance to determine which organizations deserve to be referenced and recommended.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: THE NEW VISIBILITY EQUATION ─────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/techy sagebrush.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.60)" }} />
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
            Visibility Alone Isn&apos;t Enough.
          </h2>
          <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 640, marginBottom: 64 }}>
            Modern discoverability requires four connected capabilities working together.
          </p>

          {/* Be Found → Be Understood → Be Trusted → Be Recommended */}
          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "stretch", justifyContent: "center", gap: 0, marginBottom: 64, flexWrap: "wrap" }}>
            {[
              { label: "Be Found", num: "01" },
              { label: "Be Understood", num: "02" },
              { label: "Be Trusted", num: "03" },
              { label: "Be Recommended", num: "04" },
            ].map(({ label, num }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  position: "relative",
                  background: i === 3 ? "#d87307" : ["#1a1a1a", "#3a3632", "#5a544c"][i],
                  borderRadius: 12, padding: "32px 24px", textAlign: "center", minWidth: 180, maxWidth: 200,
                  boxShadow: i === 3 ? "0 8px 32px rgba(216,115,7,0.35)" : "0 4px 24px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 16px 40px rgba(216,115,7,0.45)" : "0 12px 36px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 8px 32px rgba(216,115,7,0.35)" : "0 4px 24px rgba(0,0,0,0.12)"; }}
                >
                  {i === 3 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.4)" }} />}
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: i === 3 ? "rgba(255,255,255,0.8)" : "#d87307", marginBottom: 12 }}>{num}</p>
                  <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>{label}</p>
                </div>
                {i < 3 && (
                  <div style={{ padding: "0 6px" }}>
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                      <path d="M2 10h24M20 4l8 6-8 6" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "#444", marginBottom: 16 }}>
              The organizations that win tomorrow aren&apos;t simply easier to find, they&apos;re easier to trust.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              That&apos;s why Brand Iron goes beyond traditional SEO.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              We help organizations build the technical foundation, digital authority, and AI readiness needed to become discoverable, trusted, and recommended across today&apos;s evolving search landscape.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: STRATEGIC FRAMEWORK ─────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/bg-horse.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.72)" }} />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.85)", marginBottom: 24, textAlign: "left" }}>
              A Strategic Framework for AI Visibility
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 680, marginBottom: 16 }}>
              AI Visibility isn&apos;t achieved through a single tactic or tool. It requires a connected strategy that strengthens your technical foundation, builds digital authority, and helps AI platforms understand, trust, and recommend your business.
            </p>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: 680 }}>
              At Brand Iron, we guide organizations through a four-stage framework designed to improve discoverability across search engines and AI-powered search experiences.
            </p>
          </div>

          {/* 4 stages */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 64 }}>
            {[
              {
                num: "1",
                title: "Diagnose",
                lines: [
                  "Understand how search engines and AI platforms currently see your business.",
                  "Identify visibility gaps, technical issues, and missed opportunities.",
                ],
                color: "#1a1a1a",
              },
              {
                num: "2",
                title: "Build",
                lines: [
                  "Strengthen your SEO, technical foundation, structured data, and entity optimization.",
                  "Create the infrastructure AI and search engines rely on.",
                ],
                color: "#3a3632",
              },
              {
                num: "3",
                title: "Grow",
                lines: [
                  "Expand your authority through strategic content, citations, digital PR, reviews, and brand mentions.",
                  "Increase trust, relevance, and AI recommendations.",
                ],
                color: "#5a544c",
              },
              {
                num: "4",
                title: "Dominate",
                lines: [
                  "Continuously optimize your digital presence to become a recognized authority in your market.",
                  "Lead the conversation, not just participate in it.",
                ],
                color: "#d87307",
              },
            ].map(({ num, title, lines, color }, i) => (
              <div key={num} className={`reveal${s4View.inView ? ' visible' : ''}`} style={{
                position: "relative",
                background: color,
                borderRadius: 12, padding: "40px 28px",
                border: i === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: i === 3 ? "0 8px 40px rgba(216,115,7,0.3)" : "0 4px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.25s, box-shadow 0.25s",
                overflow: "hidden",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 16px 48px rgba(216,115,7,0.45)" : "0 16px 40px rgba(0,0,0,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 8px 40px rgba(216,115,7,0.3)" : "0 4px 20px rgba(0,0,0,0.15)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: i === 3 ? "rgba(255,255,255,0.35)" : "linear-gradient(to right, transparent, rgba(216,115,7,0.7), transparent)" }} />
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: i === 3 ? "rgba(255,255,255,0.2)" : "rgba(216,115,7,0.15)", border: `1px solid ${i === 3 ? "rgba(255,255,255,0.3)" : "rgba(216,115,7,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 900, color: i === 3 ? "#FFFFFF" : "#d87307" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 22, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: i === 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.78)", marginBottom: j < lines.length - 1 ? 10 : 0 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
              No matter where you are in your AI Visibility journey, our framework helps you build a stronger digital presence that supports long-term discoverability, authority, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: CHOOSE YOUR SOLUTION ─────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72, textAlign: "center" }}>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 14 }}>
              Choose Your AI Visibility Journey
            </p>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
              Choose the Right AI Visibility Solution
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 16px" }}>
              Every organization is at a different stage of its AI Visibility journey.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto 16px" }}>
              Some need to understand why they&apos;re not appearing in AI-powered search results. Others are ready to strengthen their technical foundation, build digital authority, or establish market leadership.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto" }}>
              Our four-tier framework allows you to start where you are today, and grow as your business grows.
            </p>
          </div>

          {/* Four tier cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }}>
            {tiers.map((tier, i) => (
              <div key={tier.number} className={`reveal${s5View.inView ? ' visible' : ''}`} style={{
                position: "relative",
                background: "#F9F8F6",
                borderRadius: 12, padding: "32px 24px",
                border: "1px solid #EEEBE7",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s",
                transitionDelay: `${i * 0.07}s`,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, rgba(216,115,7,0.4), transparent)" }} />
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFFFFF", border: "1.5px solid rgba(216,115,7,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {tier.icon}
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>{tier.number}</p>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 6, lineHeight: 1.3 }}>{tier.name}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: "#d87307", marginBottom: 16 }}>{tier.tagline}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666", marginBottom: 20, flex: 1 }}>{tier.description}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, marginBottom: 16 }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Best For</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.6, color: "#555" }}>{tier.bestFor}</p>
                </div>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Primary Outcome</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: "#d87307", margin: 0 }}>{tier.outcome}</p>
                  </div>
                  <Link href={tier.href} aria-label={`Learn more about ${tier.name}`} style={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: "50%",
                    background: "#d87307", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8691f"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ marginBottom: 64 }}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 32, textAlign: "center" }}>
              Quick Comparison
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Montserrat', sans-serif", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#EFEDE7" }}>
                    <th style={{ padding: "18px 24px", textAlign: "left", color: "#8a8378", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}></th>
                    {tiers.map(t => (
                      <th key={t.number} style={{ padding: "18px 20px", textAlign: "center", color: "#d87307", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Engagement", values: tiers.map(t => t.engagement) },
                    { label: "Primary Focus", values: tiers.map(t => t.focus) },
                    { label: "Best For", values: ["Visibility Assessment", "Technical Foundation", "Authority Growth", "Category Leadership"] },
                    { label: "Primary Outcome", values: ["Visibility Clarity", "AI-Ready Website", "Increased Authority & AI Recommendations", "AI & Market Leadership"] },
                    { label: "Ideal Next Step", values: ["Identify Opportunities", "Implement Foundation", "Scale Visibility", "Sustain Market Leadership"] },
                  ].map(({ label, values }, ri) => (
                    <tr key={label} style={{ background: ri % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "18px 24px", fontWeight: 600, color: "#1a1a1a", fontSize: 13, borderBottom: "1px solid #EEEBE7", whiteSpace: "nowrap" }}>{label}</td>
                      {values.map((v, ci) => (
                        <td key={ci} style={{ padding: "18px 20px", textAlign: "center", color: "#555", lineHeight: 1.5, borderBottom: "1px solid #EEEBE7" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Which solution is right for you */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 40, textAlign: "center" }}>
              Which Solution Is Right for You?
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
              {[
                {
                  tier: "AI Visibility Diagnostic",
                  items: [
                    "You're unsure how visible your business is across AI and search.",
                    "You want an expert assessment before investing in optimization.",
                    "You need a roadmap to guide future improvements.",
                  ],
                  href: "/services/ai-visibility/tier-0",
                },
                {
                  tier: "SEO & AI Foundation",
                  items: [
                    "Your website needs technical SEO improvements.",
                    "You're ready to establish an AI-ready digital foundation.",
                    "You want search engines and AI platforms to better understand your business.",
                  ],
                  href: "/services/ai-visibility/tier-1",
                },
                {
                  tier: "AI Authority Growth System",
                  items: [
                    "You're looking to increase rankings, authority, and qualified organic demand.",
                    "You want to become a trusted source within your industry.",
                    "You're committed to ongoing content and authority building.",
                  ],
                  href: "/services/ai-visibility/tier-2",
                },
                {
                  tier: "AI Market Dominance Engine",
                  items: [
                    "You want to lead your market, not just compete in it.",
                    "You're investing in long-term brand authority and executive positioning.",
                    "You need continuous optimization, strategic consulting, and AI visibility leadership.",
                  ],
                  href: "/services/ai-visibility/tier-3",
                },
              ].map(({ tier, items, href }) => (
                <div key={tier} style={{
                  background: "#F9F8F6", borderRadius: 12, padding: "36px 32px",
                  borderLeft: "4px solid #d87307",
                  display: "flex", flexDirection: "column",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(216,115,7,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>
                    Choose {tier} if…
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, flex: 1 }}>
                    {items.map(item => (
                      <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <svg style={{ flexShrink: 0, marginTop: 2 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.65, color: "#444", margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={href} style={{
                    display: "inline-block", alignSelf: "flex-start", textAlign: "center", padding: "12px 24px", borderRadius: 999,
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                    background: "#d87307", color: "#FFFFFF",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#b8691f")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
                  >
                    Explore {tier} →
                  </Link>
                </div>
              ))}
            </div>

            {/* Not sure which path — talk to a strategist */}
            <div style={{
              background: "#FDF4EA", border: "1px solid rgba(216,115,7,0.25)", borderRadius: 12,
              padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 20,
            }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, lineHeight: 1.7, color: "#444", margin: 0, maxWidth: 560 }}>
                Not sure where to start? Talk through your goals with a strategist and find the right AI Visibility solution for your business.
              </p>
              <Link href="/contact" style={{
                flexShrink: 0, display: "inline-block", padding: "14px 32px", borderRadius: 8,
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
                background: "#1a1a1a", color: "#FFFFFF", transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d87307")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1a1a1a")}
              >
                Talk to a Strategist →
              </Link>
            </div>
          </div>

          {/* Transition line */}
          <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 640, margin: "40px auto 0", textAlign: "center" }}>
            Explore each solution in detail to understand what&apos;s included, who it&apos;s designed for, and the business outcomes you can expect.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/hero-saddle.jpg')", backgroundSize: "cover", backgroundPosition: "center 30%",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.5)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Get Visible?
              </p>
              <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Become Discoverable?
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 48px" }}>
                Discover how visible your business is across Google, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.
              </p>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 28 }}>
                  Choose Your Next Step
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Get a clear, expert assessment of how your business shows up across AI platforms and search engines, along with practical next steps to improve it.
                    </p>
                    <Link href="/ai-visibility-audit" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid #d87307", paddingBottom: 6,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Schedule an Assessment</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Not sure where to start? Talk through your goals with a strategist and find the right AI Visibility solution for your business.
                    </p>
                    <Link href="/contact" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid rgba(255,255,255,0.5)", paddingBottom: 6,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      e.currentTarget.style.borderBottomColor = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.5)";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Talk to a Strategist</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
