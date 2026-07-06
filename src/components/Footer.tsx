"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Industries", "/industries"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
  ["Client Portal", "/client-portal"],
];

const socialLinks = [
  { label: "X", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Facebook", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Instagram", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg> },
  { label: "LinkedIn", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z" fill="white"/><rect x="2" y="9" width="4" height="13" fill="white"/><circle cx="4" cy="4" r="2" fill="white"/></svg> },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ position: "relative", color: "#FFFFFF", overflow: "hidden" }}>

      {/* "Forging Brands. Driving Revenue." bar above footer */}
      <div style={{ background: "#F5F0E8", padding: "28px 48px", textAlign: "left" }}>
        <p style={{
          fontFamily: "'Burford Rustic Black', sans-serif",
          fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900,
          textTransform: "uppercase", letterSpacing: "0.03em",
          color: "#945B06", lineHeight: 1,
        }}>
          Forging Brands. Driving Revenue.™
        </p>
      </div>

      {/* Split background */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", pointerEvents: "none" }}>
        {/* Account for the bar height */}
      </div>

      {/* Main footer body */}
      <div style={{ position: "relative", display: "flex", minHeight: 340 }}>

        {/* LEFT — leather bg with embossed logo */}
        <Link href="/" aria-label="Brand Iron — Home" style={{
          width: "38%", flexShrink: 0,
          backgroundImage: "url('/images/bi-footer-logo.jpeg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />

        {/* RIGHT — misty forest bg */}
        <div style={{
          flex: 1, position: "relative",
          backgroundImage: "url('/images/bg-forest-mist.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,30,0.68)" }} />
          <div style={{ position: "relative", zIndex: 1, padding: "40px 48px 40px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

            {/* Nav links */}
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "0 4px", marginBottom: 28 }}>
              {navLinks.map(([label, href], i) => (
                <span key={label} style={{ display: "flex", alignItems: "center" }}>
                  <Link href={href} style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)", padding: "2px 10px",
                    textDecoration: "underline", textUnderlineOffset: 3,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  >{label}</Link>
                  {i < navLinks.length - 1 && <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>|</span>}
                </span>
              ))}
            </nav>

            {/* Address + newsletter */}
            <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flex: 1 }}>

              {/* Address */}
              <div style={{ minWidth: 200 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>Brand Iron</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>2590 Welton St. Suite 200,</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)" }}>Denver, CO 80205</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>Ph:&nbsp; 303-534-1901</p>
                <div style={{ display: "flex", gap: 12 }}>
                  {socialLinks.map(({ label, href, icon }) => (
                    <a key={label} href={href} aria-label={label} style={{
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
              <div style={{ flex: 1, maxWidth: 340 }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 16, lineHeight: 1.3 }}>
                  Subscribe To Our<br />Newsletter
                </p>
                <form onSubmit={e => { e.preventDefault(); setEmail(""); }} style={{ display: "flex" }}>
                  <input
                    type="email" placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      flex: 1, padding: "12px 18px",
                      fontFamily: "'Montserrat', sans-serif", fontSize: 13,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.35)", borderRight: "none",
                      borderRadius: "40px 0 0 40px", color: "#FFFFFF", outline: "none",
                    }}
                  />
                  <button type="submit" style={{
                    width: 48, height: 48, borderRadius: "0 40px 40px 0",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.35)", borderLeft: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "background 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(216,115,7,0.55)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ background: "rgba(5,5,5,0.95)", padding: "14px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} Brand Iron Marketing. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >{label}</Link>
          ))}
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

    </footer>
  );
}
