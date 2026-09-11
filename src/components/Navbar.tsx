"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const STANDALONE_ROUTES = ["/growth-review"];

const servicesMenu = [
  { label: "Brand Strategy", href: "/services/brand-strategy/" },
  { label: "AI Visibility & Discoverability", href: "/services/ai-visibility/" },
  { label: "GTM Strategy", href: "/services/gtm/" },
  { label: "Capital Raise Support", href: "/services/capital-raise/" },
  { label: "Revenue Engineering", href: "/services/revenue-engineering/" },
  { label: "Outbound Growth", href: "/services/outbound-growth/" },
  { label: "Website Development", href: "/services/website-development/" },
];

const navLinks = [
  { label: "About", href: "/about/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Blog", href: "/blog/" },
  { label: "Resources", href: "/resources/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prevOverflow; };
    }
  }, [open]);

  if (STANDALONE_ROUTES.includes(pathname)) return null;

  return (
    <nav style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "transparent",
    }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 92 }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, paddingTop: 14 }}>
          <Image src="/images/shared/shared-logo-white.png" alt="Brand Iron" width={112} height={80} priority style={{ height: 68, width: "auto", transition: "transform 0.25s ease, opacity 0.25s ease" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = "1"; }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }} className="desktop-nav">

          {/* Services dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={e => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
            }}
          >
            <Link href="/services/" className="nav-focusable" style={{
              display: "flex", alignItems: "center", gap: 5,
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: servicesOpen ? "#d87307" : "#FFFFFF",
              transition: "color 0.2s",
            }}>
              Services
            </Link>

            {servicesOpen && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                paddingTop: 16, minWidth: 340,
              }}>
              <div style={{
                background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)",
                padding: "12px 0",
                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              }}>
                {servicesMenu.map(s => (
                  <Link key={s.href} href={s.href} className="nav-focusable" style={{
                    display: "block",
                    padding: "14px 28px",
                    fontFamily: "var(--font-burford-black), Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 17,
                    letterSpacing: "0.02em", whiteSpace: "nowrap",
                    color: "#1a1a1a",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#1a1a1a")}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          <span style={{ display: "inline-block", width: 1, height: 14, background: "rgba(255,255,255,0.3)" }} />

          {navLinks.map(l => (
            <span key={l.href} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <Link href={l.href} className="nav-focusable" style={{
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#FFFFFF",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
              >{l.label}</Link>
              <span style={{ display: "inline-block", width: 1, height: 14, background: "rgba(255,255,255,0.3)" }} />
            </span>
          ))}

          <Link href="/contact/" className="nav-focusable" style={{
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "#d87307", color: "#FFFFFF",
            padding: "10px 22px", borderRadius: 6,
            transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn nav-focusable" style={{ display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, margin: "0 -10px", background: "none", border: "none", cursor: "pointer", transition: "opacity 0.2s" }} aria-label="Menu"
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 7h18M3 12h18M3 17h18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu-panel" style={{ background: "rgba(10,6,2,0.98)", borderTop: "1px solid rgba(216,115,7,0.2)", padding: "20px 32px 28px", maxHeight: "80vh", overflowY: "auto" }}>
          {/* Services expandable */}
          <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="nav-focusable" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
            background: "none", border: "none", cursor: "pointer", padding: "14px 0", minHeight: 44, boxSizing: "border-box",
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
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
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="nav-focusable" style={{
                  display: "flex", alignItems: "center", padding: "13px 0", minHeight: 44, boxSizing: "border-box",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, fontSize: 15,
                  color: "rgba(255,255,255,0.75)",
                }}>{s.label}</Link>
              ))}
            </div>
          )}

          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-focusable" style={{
              display: "flex", alignItems: "center", padding: "14px 0", minHeight: 44, boxSizing: "border-box",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>{l.label}</Link>
          ))}

          <div style={{ paddingTop: 16 }}>
            <Link href="/contact/" onClick={() => setOpen(false)} className="nav-focusable" style={{
              display: "inline-block",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.1em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 28px", borderRadius: 6, minHeight: 44, boxSizing: "border-box",
            }}>Contact</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-focusable:focus-visible {
          outline: 2px solid #d87307;
          outline-offset: 2px;
          border-radius: 4px;
        }
        .mobile-menu-panel {
          animation: navMobileMenuIn 0.22s ease both;
        }
        @keyframes navMobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-panel { animation: none; }
        }
      `}</style>
    </nav>
  );
}
