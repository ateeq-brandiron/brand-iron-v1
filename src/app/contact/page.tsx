"use client";
import { useEffect, useState } from "react";

const confirmationByInterest: Record<string, string> = {
  "AI Visibility Audit (SEO/AEO)": "Thank you for requesting your AI Visibility Audit. Your results will be ready within 24 hours.",
  "GTM Growth Review": "Thank you for requesting your GTM Growth Review. Your results will be ready within 24 hours.",
};
const defaultConfirmation = "Thank you for reaching out. A member of our team will be in touch within one business day.";

const contactOptions = [
  {
    title: "Book A Strategy Session",
    desc: "30-minute call to explore how BrandIron can transform your revenue engine.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="26" height="24" rx="2" stroke="#d87307" strokeWidth="2"/>
        <line x1="5" y1="13" x2="31" y2="13" stroke="#d87307" strokeWidth="2"/>
        <line x1="12" y1="4" x2="12" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="4" x2="24" y2="10" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="19" x2="18" y2="27" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="23" x2="22" y2="23" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "AI Transformation Inquiry",
    desc: "Discuss your AI readiness and where automation can create real business value.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="7" stroke="#d87307" strokeWidth="2"/>
        <circle cx="18" cy="18" r="2" fill="#d87307"/>
        <line x1="18" y1="4" x2="18" y2="9" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="27" x2="18" y2="32" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4" y1="18" x2="9" y2="18" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="27" y1="18" x2="32" y2="18" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="8" x2="11.5" y2="11.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24.5" y1="24.5" x2="28" y2="28" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="8" x2="24.5" y2="11.5" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11.5" y1="24.5" x2="8" y2="28" stroke="#d87307" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Capital Raise Discussion",
    desc: "Explore how we can help you build investor-ready positioning and raise capital.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="22" width="6" height="10" rx="1" stroke="#d87307" strokeWidth="2"/>
        <rect x="13" y="16" width="6" height="16" rx="1" stroke="#d87307" strokeWidth="2"/>
        <rect x="22" y="10" width="6" height="22" rx="1" stroke="#d87307" strokeWidth="2"/>
        <text x="14" y="9" fill="#d87307" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="700">$</text>
        <polyline points="6,18 14,10 20,14 28,5" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <polyline points="24,5 28,5 28,9" stroke="#d87307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "General Inquiry",
    desc: "Any other questions about BrandIron services or capabilities.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6 Q5 4 7 4 L29 4 Q31 4 31 6 L31 22 Q31 24 29 24 L20 24 L14 31 L14 24 L7 24 Q5 24 5 22 Z" stroke="#d87307" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <circle cx="12" cy="15" r="1.5" fill="#d87307"/>
        <circle cx="18" cy="15" r="1.5" fill="#d87307"/>
        <circle cx="24" cy="15" r="1.5" fill="#d87307"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", size: "", interest: "", investment: "", timeline: "", message: "" });

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest) setForm(f => ({ ...f, interest }));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const emailNotification = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form Submission from ${form.name}`,
        from_name: "Brand Iron Website",
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        company_size: form.size,
        interested_in: form.interest,
        investment_range: form.investment,
        timeline: form.timeline,
        message: form.message,
      }),
    }).then(res => res.json()).then(data => Boolean(data.success));

    const sharpSpringLead = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(res => res.json()).then(data => Boolean(data.success));

    const [emailOk, crmOk] = await Promise.allSettled([emailNotification, sharpSpringLead])
      .then(results => results.map(r => r.status === "fulfilled" && r.value === true));

    setSubmitting(false);
    if (emailOk || crmOk) {
      setSubmitted(true);
    } else {
      setError("Something went wrong sending your message. Please try again or email us directly.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "#FFFFFF", border: "1.5px solid #EEEBE7",
    borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "#1a1a1a",
    outline: "none",
  };

  return (
    <main>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "50vh", display: "flex", alignItems: "center",
        backgroundImage: "url('/images/bg-fence.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,35,0.38)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "140px 24px 80px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 16 }}>Get In Touch</p>
          <h1 style={{
            fontFamily: "'Burford Rustic Inline', sans-serif", fontWeight: 400, fontSize: "clamp(44px, 6vw, 72px)",
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "#FFFFFF",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
            lineHeight: 1.0, marginBottom: 28,
          }}>
            Let&apos;s Build Your Revenue Engine
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: 540, margin: "0 auto" }}>
            Whether you&apos;re ready to start or just exploring, we&apos;d love to learn about your business and share how BrandIron creates transformative growth.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section style={{ background: "#FFFFFF", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {contactOptions.map(({ icon, title, desc }) => (
            <div key={title} className="contact-opt" style={{ background: "#F9F8F6", border: "1px solid #EEEBE7", borderTop: "3px solid #d87307", borderRadius: 10, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(216,115,7,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
              </div>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "#F5F0E8", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}>

          {/* Form */}
          <div style={{ background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 12, padding: "40px 36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontWeight: 900, fontSize: 36, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a", marginBottom: 8 }}>Send Us A Message</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>We typically respond within one business day.</p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#d87307", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 24, fontWeight: 900, textTransform: "uppercase", color: "#1a1a1a", marginBottom: 12 }}>Message Received</h3>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7 }}>{confirmationByInterest[form.interest] || defaultConfirmation}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Company</label>
                    <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Your company" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Phone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Company Size</label>
                  <select value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Select size...</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>1–10 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>11–50 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>51–200 employees</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>200+ employees</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>I&apos;m interested in... *</label>
                  <select required value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Select an option...</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>AI Visibility Audit (SEO/AEO)</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>GTM Growth Review</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Revenue Strategy & Growth Planning</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>AI Transformation</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>CRM & Revenue Operations</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Demand Generation</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Capital Raise Support</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Full Revenue Engine Build</option>
                    <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>General Inquiry</option>
                  </select>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Investment Range</label>
                    <select value={form.investment} onChange={e => setForm({ ...form, investment: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Select range...</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Under $5K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>$5K–$15K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>$15K–$30K/mo</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>$30K+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Timeline</label>
                    <select value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="" style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Select timeline...</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>ASAP</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>1–3 months</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>3–6 months</option>
                      <option style={{ background: "#FFFFFF", color: "#1a1a1a" }}>Exploring options</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your business and what you're looking to achieve..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                {error && (
                  <p style={{ fontSize: 13, color: "#b3261e", lineHeight: 1.5 }}>{error}</p>
                )}
                <button type="submit" disabled={submitting} className="submit-btn" style={{ background: "#d87307", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 32px", borderRadius: 4, border: "none", cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1, alignSelf: "flex-start", marginTop: 4 }}>
                  {submitting ? "Sending…" : "Send Message →"}
                </button>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>No spam. No obligation. We respond within 1 business day.</p>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ backgroundImage: "url('/images/bg-haybales.jpg')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 10, overflow: "hidden", height: 220, position: "relative", marginBottom: 24 }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(28,54,82,0.75) 100%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF" }}>Executive-Level Strategy</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>25+ years of growth experience, applied to your business.</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Response Time", value: "Within 1 business day" },
                { label: "Serving", value: "Global clients, enterprise to startup" },
                { label: "First Step", value: "30-min Revenue Strategy Session" },
              ].map(({ label, value }) => (
                <div key={label} className="info-row" style={{ display: "flex", alignItems: "center", gap: 14, background: "#FFFFFF", border: "1px solid #EEEBE7", borderRadius: 8, padding: "14px 18px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d87307" }}>{label}</p>
                    <p style={{ fontSize: 14, color: "#1a1a1a", marginTop: 2 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #EEEBE7", borderLeft: "4px solid #d87307", borderRadius: 10, padding: "24px 24px" }}>
              <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a1a1a", marginBottom: 8 }}>Ready to start immediately?</p>
              <p style={{ fontSize: 13, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>Book a Revenue Strategy Session directly in our calendar and we&apos;ll get you started right away.</p>
              <a href="mailto:contact@brandiron.net" className="cta-link-btn" style={{ color: "#d87307", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>Email Us Directly →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
