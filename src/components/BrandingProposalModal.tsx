"use client";
import { useState } from "react";

const SOLUTION_OPTIONS = [
  "Brand Foundation",
  "Brand Foundation + Market Launch",
  "Not Sure / Need Guidance",
];

const GOAL_OPTIONS = [
  "Launch a new company or brand",
  "Reposition an existing brand",
  "Consolidate multiple brands",
  "Prepare for a capital raise or acquisition",
  "Build a go-to-market launch plan",
  "Develop a new company name",
  "Improve brand consistency",
  "Other",
];

export default function BrandingProposalModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = thank you
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", solution: "",
  });
  const [goals, setGoals] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const toggleGoal = (g: string) => setGoals(gs => gs.includes(g) ? gs.filter(x => x !== g) : [...gs, g]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const message = [
      goals.length > 0 && `Primary Goals: ${goals.join(", ")}`,
    ].filter(Boolean).join("\n");

    const result = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        interest: form.solution,
        message,
        formId: "branding_proposal",
      }),
    }).then(res => res.json()).catch(() => null);

    setSubmitting(false);
    if (result?.success) {
      setStep(2);
    } else {
      setError(result?.error || "Something went wrong sending your request. Please try again or email us directly.");
    }
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(8,16,36,0.85)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      padding: "40px 24px", overflowY: "auto",
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: "#0F1B2D", borderRadius: 16, maxWidth: 680, width: "100%",
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
          {step === 1 ? (
            <>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 10 }}>
                Branding Proposal Request
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.15, marginBottom: 8 }}>
                Let&apos;s Build a Brand That Gets Chosen
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 28, maxWidth: 540 }}>
                Tell us about your organization and where you are in your branding journey. We&apos;ll review your goals and prepare a tailored branding proposal aligned with your business and growth strategy.
              </p>

              <form onSubmit={handleSubmit}>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
                  Contact Information
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required value={form.name} onChange={e => set("name", e.target.value)} style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input value={form.company} onChange={e => set("company", e.target.value)} style={inputStyle} placeholder="Company" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} style={inputStyle} placeholder="(000) 000-0000" />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Which Solution Fits Best? *</label>
                  <select required value={form.solution} onChange={e => set("solution", e.target.value)} style={selectStyle}>
                    <option value="" style={optionStyle}>Select one…</option>
                    {SOLUTION_OPTIONS.map(o => <option key={o} style={optionStyle}>{o}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>What Are Your Primary Goals? <span style={{ textTransform: "none", fontWeight: 500 }}>(select all that apply)</span></label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", marginTop: 10 }}>
                    {GOAL_OPTIONS.map(g => (
                      <label key={g} style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={goals.includes(g)}
                          onChange={() => toggleGoal(g)}
                          style={{ width: 16, height: 16, accentColor: "#d87307", cursor: "pointer", flexShrink: 0 }}
                        />
                        <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, color: "#ff8a80", lineHeight: 1.5, marginBottom: 14 }}>{error}</p>
                )}
                <button type="submit" disabled={submitting} style={{
                  width: "100%", padding: "17px 32px",
                  background: submitting ? "rgba(216,115,7,0.50)" : "#d87307",
                  color: "#FFFFFF", border: "none", borderRadius: 8,
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase", cursor: submitting ? "default" : "pointer",
                  transition: "background 0.2s",
                }}>
                  {submitting ? "Submitting…" : "Send My Branding Request →"}
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
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#FFFFFF", marginBottom: 12 }}>
                Request Received!
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: 440, margin: "0 auto 32px" }}>
                We&apos;ll review your goals and follow up with a tailored branding proposal within 1–2 business days.
              </p>
              <button onClick={onClose} style={{
                padding: "14px 40px", background: "transparent",
                border: "2px solid #d87307", borderRadius: 8, color: "#d87307",
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700,
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
  display: "block", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11,
  fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)", marginBottom: 6,
};
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 6, color: "#FFFFFF",
  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13,
  outline: "none", boxSizing: "border-box",
};
const selectStyle: React.CSSProperties = {
  ...inputStyle, appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23d87307' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  paddingRight: 36,
};
const optionStyle: React.CSSProperties = { background: "#FFFFFF", color: "#1a1a1a" };
