"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(15,10,5,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(203,119,45,0.2)" : "none",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Brand Iron" style={{ height: 48, width: "auto" }} />
        </Link>

        {/* Desktop nav — pipe separated */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="desktop-nav">
          {navLinks.map((l, i) => (
            <span key={l.href} style={{ display: "flex", alignItems: "center" }}>
              <Link href={l.href} style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#FFFFFF", padding: "0 18px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cb772d")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >{l.label}</Link>
              {i < navLinks.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, userSelect: "none" }}>|</span>
              )}
            </span>
          ))}
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
        <div style={{ background: "rgba(10,6,2,0.98)", borderTop: "1px solid rgba(203,119,45,0.2)", padding: "20px 32px 28px" }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "12px 0",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
