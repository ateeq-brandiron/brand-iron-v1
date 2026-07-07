"use client";
import { useState } from "react";
import Link from "next/link";

const servicesMenu = [
  { label: "Brand Strategy", href: "/services/brand-strategy" },
  { label: "AI Visibility & Discoverability", href: "/services/ai-visibility" },
  { label: "GTM Strategy", href: "/services/gtm" },
  { label: "Revenue Engineering", href: "/services/revenue-engineering" },
  { label: "Outbound Growth", href: "/services/outbound-growth" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Capital Raise Support", href: "/services/capital-raise" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "transparent",
    }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src="/images/brand-iron-logo-white.png" alt="Brand Iron" style={{ height: 48, width: "auto" }} />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }} className="desktop-nav">

          {/* Services dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" style={{
              display: "flex", alignItems: "center", gap: 5,
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: servicesOpen ? "#d87307" : "#FFFFFF",
              transition: "color 0.2s",
            }}>
              Services
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {servicesOpen && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                paddingTop: 16, minWidth: 280,
              }}>
              <div style={{
                background: "rgba(15,10,5,0.98)", border: "1px solid rgba(216,115,7,0.25)",
                borderRadius: 8, padding: "8px 0",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}>
                {servicesMenu.map(s => (
                  <Link key={s.href} href={s.href} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "11px 20px",
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13,
                    color: "rgba(255,255,255,0.85)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(216,115,7,0.12)"; e.currentTarget.style.color = "#d87307"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#d87307", flexShrink: 0 }} />
                    {s.label}
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>|</span>

          {navLinks.map(l => (
            <span key={l.href} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <Link href={l.href} style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#FFFFFF",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >{l.label}</Link>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>|</span>
            </span>
          ))}

          <Link href="/client-portal" style={{
            fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >Client Portal</Link>

          <Link href="/contact" style={{
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF",
            padding: "10px 22px", borderRadius: 2,
            transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 7h18M3 12h18M3 17h18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(10,6,2,0.98)", borderTop: "1px solid rgba(216,115,7,0.2)", padding: "20px 32px 28px", maxHeight: "80vh", overflowY: "auto" }}>
          {/* Services expandable */}
          <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
            background: "none", border: "none", cursor: "pointer", padding: "12px 0",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none" }}>
              <path d="M2 4l4 4 4-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileServicesOpen && (
            <div style={{ padding: "4px 0 8px 12px" }}>
              {servicesMenu.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} style={{
                  display: "block", padding: "9px 0",
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13,
                  color: "rgba(255,255,255,0.75)",
                }}>{s.label}</Link>
              ))}
            </div>
          )}

          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "12px 0",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>{l.label}</Link>
          ))}

          <Link href="/client-portal" onClick={() => setOpen(false)} style={{
            display: "block", padding: "12px 0",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>Client Portal</Link>

          <div style={{ paddingTop: 16 }}>
            <Link href="/contact" onClick={() => setOpen(false)} style={{
              display: "inline-block",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "12px 28px", borderRadius: 2,
            }}>Contact</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
