import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0D1A2E", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "40px 24px", maxWidth: 560 }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>Coming Soon</p>
        <h1 style={{ fontFamily: "'Burford Rustic Black', Helvetica, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(32px, 5vw, 56px)", textTransform: "uppercase", letterSpacing: "0.04em", color: "transparent", WebkitTextStroke: "2px #FFFFFF", lineHeight: 1.1, marginBottom: 24 }}>
          Legacy
        </h1>
        <div style={{ width: 48, height: 3, background: "#d87307", borderRadius: 2, margin: "0 auto 28px" }} />
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", marginBottom: 40 }}>
          This page is currently being built. Check back soon or get in touch directly.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "rgba(216,115,7,0.55)", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 28px", borderRadius: 8, border: "1px solid rgba(216,115,7,0.9)", textDecoration: "none" }}>Book a Discovery Call</Link>
          <Link href="/about" style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.8)", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 28px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>← Back</Link>
        </div>
      </div>
    </main>
  );
}
