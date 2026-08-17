"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const STANDALONE_ROUTES = ["/growth-review"];

const navLinks = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Portfolio", "/portfolio"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

const socialLinks = [
  { label: "X", href: "https://x.com/BrandIron", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Facebook", href: "https://www.facebook.com/BrandIronDenver/", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Instagram", href: "https://www.instagram.com/brand.iron/?hl=en", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/brand-iron/", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z" fill="white"/><rect x="2" y="9" width="4" height="13" fill="white"/><circle cx="4" cy="4" r="2" fill="white"/></svg> },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterError, setNewsletterError] = useState("");
  const pathname = usePathname();

  if (STANDALONE_ROUTES.includes(pathname)) return null;

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || newsletterStatus === "loading") return;
    setNewsletterStatus("loading");
    setNewsletterError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, formId: "newsletter" }),
      });
      const data = await res.json().catch(() => null);
      if (data?.success) {
        setNewsletterStatus("success");
        setEmail("");
      } else {
        setNewsletterStatus("error");
        setNewsletterError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setNewsletterStatus("error");
      setNewsletterError("Something went wrong. Please try again.");
    }
  }

  return (
    <footer style={{ position: "relative", color: "#FFFFFF", overflow: "hidden" }}>

      {/* "Forging Brands. Driving Revenue." bar above footer */}
      <div style={{ background: "#F5F0E8", padding: "28px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "left" }}>
          <p style={{
            fontFamily: "var(--font-burford-black), sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "#945B06", lineHeight: 1, marginBottom: 12,
          }}>
            Forging Brands. Driving Revenue<span style={{ position: "relative", display: "inline-block", width: 0, top: "-0.651em", left: "0.021em" }}><span style={{ position: "absolute", fontSize: "0.6em", fontWeight: 700 }}>™</span></span>.
          </p>
          <p style={{
            fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, fontWeight: 600,
            lineHeight: 1.8, color: "#6b5a3e",
          }}>
            Helping organizations become discoverable, trusted, and chosen through strategic positioning, AI visibility, revenue engineering, and connected growth systems.
          </p>
        </div>
      </div>

      {/* Split background */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", pointerEvents: "none" }}>
        {/* Account for the bar height */}
      </div>

      {/* Main footer body */}
      <div className="footer-body" style={{ position: "relative", display: "flex", minHeight: 340 }}>

        {/* LEFT — leather bg with embossed logo */}
        <Link href="/" aria-label="Brand Iron Home" className="footer-logo-panel" style={{
          width: "22%", flexShrink: 0,
          backgroundImage: "url('/images/shared/shared-footer-logo.jpeg')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(1)",
          transition: "filter 0.3s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.12)")}
        onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
        />

        {/* RIGHT — misty forest bg */}
        <div style={{
          flex: 1, position: "relative",
          backgroundImage: "url('/images/shared/shared-forest-mist.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }}>
          <div role="img" aria-label="Misty pine forest hillside with a sunlit rocky outcrop, representing Brand Iron's growth marketing roots" style={{ position: "absolute", inset: 0, background: "rgba(8,16,30,0.68)" }} />
          <div style={{ position: "relative", zIndex: 1, padding: "40px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

            {/* Nav links */}
            <nav className="footer-nav" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between", gap: "0 2px", marginBottom: 28, overflowX: "auto" }}>
              {navLinks.map(([label, href]) => (
                <span key={label} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                  <Link href={href} style={{
                    fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap",
                    color: "rgba(255,255,255,0.85)", padding: "2px 6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  >{label}</Link>
                </span>
              ))}
            </nav>

            {/* Address + newsletter */}
            <div className="footer-info-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", justifyContent: "space-between", flex: 1 }}>

              {/* Address */}
              <div className="footer-address" style={{ minWidth: 200 }}>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.9, color: "rgba(255,255,255,0.9)" }}>Brand Iron</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>2590 Welton St. Suite 200,</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>Denver, CO 80205</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>Ph:&nbsp; 303-534-1901</p>
                <div style={{ display: "flex", gap: 12 }}>
                  {socialLinks.map(({ label, href, icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.5)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)")}
                    >{icon}</a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="footer-newsletter-wrap" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div className="footer-newsletter" style={{ maxWidth: 340, width: "100%" }}>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", marginBottom: 16, lineHeight: 1.9 }}>
                  Subscribe To Our Newsletter
                </p>
                <form onSubmit={handleNewsletterSubmit} style={{ display: "flex" }}>
                  <input
                    type="email" placeholder="Email" value={email} required
                    disabled={newsletterStatus === "loading"}
                    onChange={e => { setEmail(e.target.value); if (newsletterStatus !== "idle") setNewsletterStatus("idle"); }}
                    style={{
                      flex: 1, padding: "12px 18px",
                      fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.35)", borderRight: "none",
                      borderRadius: "40px 0 0 40px", color: "#FFFFFF", outline: "none",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#d87307"; e.currentTarget.style.background = "rgba(216,115,7,0.1)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  />
                  <button type="submit" disabled={newsletterStatus === "loading"} style={{
                    width: 48, height: 48, borderRadius: "0 40px 40px 0",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.35)", borderLeft: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: newsletterStatus === "loading" ? "default" : "pointer", transition: "background 0.2s",
                    opacity: newsletterStatus === "loading" ? 0.6 : 1,
                  }}
                  onMouseEnter={e => { if (newsletterStatus !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "rgba(216,115,7,0.55)"; }}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")}
                  >
                    {newsletterStatus === "success" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                        <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </form>
                {newsletterStatus === "success" && (
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, color: "#f0a860", marginTop: 10 }}>
                    You&apos;re subscribed. Thanks for joining!
                  </p>
                )}
                {newsletterStatus === "error" && (
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, color: "#ff9b9b", marginTop: 10 }}>
                    {newsletterError}
                  </p>
                )}
              </div>
              </div>
            </div>

            {/* Copyright */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                © {new Date().getFullYear()} Brand Iron Marketing. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" style={{
        position: "absolute", bottom: 60, right: 28, zIndex: 10,
        width: 46, height: 46, borderRadius: "50%",
        background: "#d87307", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(216,115,7,0.5)", transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#c46305"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#d87307"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        @media (max-width: 820px) {
          .footer-body { flex-direction: column; }
          .footer-logo-panel { width: 100% !important; height: 160px; }
          .footer-nav { justify-content: flex-start !important; flex-wrap: wrap !important; overflow-x: visible !important; }
          .footer-info-row { flex-direction: column !important; justify-content: flex-start !important; gap: 28px !important; }
          .footer-newsletter-wrap { justify-content: flex-start !important; width: 100%; }
          .footer-address, .footer-newsletter { max-width: none !important; width: 100%; }
        }
      `}</style>

    </footer>
  );
}
