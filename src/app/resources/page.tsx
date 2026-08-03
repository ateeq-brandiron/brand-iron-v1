"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

function VideoThumb({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#0F1B2D", overflow: "hidden" }}>
      <img
        loading="lazy"
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={`${title} video thumbnail`}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,36,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(8,16,36,0.65)", border: "2px solid rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </div>
  );
}

const VIDEOS = [
  {
    title: "On the Brink with Michael Doyle",
    body: "A conversation about entrepreneurship, leadership, navigating change, and building organizations that are prepared for what comes next.",
    cta: "Watch Episode",
    href: "https://www.youtube.com/watch?v=YobCPn7-YVQ",
    videoId: "YobCPn7-YVQ",
  },
  {
    title: "Brand Relationships",
    body: "Explore how successful brands create meaningful relationships with customers, employees, investors, and the communities they serve.",
    cta: "Watch Interview",
    href: "https://www.youtube.com/watch?v=kt18G7nYSzQ",
    videoId: "kt18G7nYSzQ",
  },
  {
    title: "Build a Brand and Raise Capital",
    body: "Learn how a strong brand, compelling story, and credible market position can help growing companies attract the attention and confidence of investors.",
    cta: "Watch Episode",
    href: "https://www.youtube.com/watch?v=vHIcgPsxny0",
    videoId: "vHIcgPsxny0",
  },
  {
    title: "Redefining Branding in the Digital Era",
    body: "Michael Doyle discusses how branding has evolved and why modern organizations must connect strategy, digital presence, customer experience, and revenue growth.",
    cta: "Watch Interview",
    href: "https://www.youtube.com/watch?v=WF53bOufTPQ",
    videoId: "WF53bOufTPQ",
  },
  {
    title: "From Branding to Revenue",
    body: "Discover how Brand Iron connects brand strategy with practical growth initiatives designed to generate demand, strengthen market position, and support revenue.",
    cta: "Watch Interview",
    href: "https://www.youtube.com/watch?v=t_kIwWKqUtk",
    videoId: "t_kIwWKqUtk",
  },
  {
    title: "Brand Iron: Interview with CEO Michael Doyle",
    body: "Get an inside look at Brand Iron, Michael Doyle's approach to business, and the lessons he has learned from helping companies build stronger and more valuable brands.",
    cta: "Watch Episode",
    href: "https://www.youtube.com/watch?v=OlLJzo_ql9A",
    videoId: "OlLJzo_ql9A",
  },
];

const PODCASTS = [
  {
    title: "The Brand Expert's Playbook",
    body: "Michael Doyle shares practical strategies for creating a differentiated brand, building customer trust, and turning brand clarity into a competitive advantage.",
    cta: "Listen on Spotify",
    href: "https://open.spotify.com/episode/6rYJtO7I0RrjZozAk4MzoD",
  },
  {
    title: "Leveraging Customer Insights for Branding Success",
    body: "Explore how customer understanding can shape stronger positioning, more relevant messaging, and better business decisions.",
    cta: "Explore the Episode",
    href: "https://www.linkedin.com/pulse/ep11-startup-smoothie-podcast-michael-doyle-brand-champion-ceo",
  },
  {
    title: "Brand Iron with Michael Doyle",
    body: "A conversation about Brand Iron's history, its approach to brand development, and the relationship between branding and business performance.",
    cta: "Listen Now",
    href: "https://www.youtube.com/watch?v=GPQeIL-kUyM",
  },
];

const ARTICLES = [
  {
    title: "Guiding Leaders Toward Purpose and Transformation",
    body: "In this interview with Brainz Magazine, Michael Doyle discusses leadership, organizational purpose, personal transformation, and the experiences that have shaped his approach to business.",
    cta: "Read the Interview",
    href: "https://www.brainzmagazine.com/post/guiding-leaders-toward-purpose-and-transformation-interview-with-michael-doyle-of-doyle-it-in-inc",
  },
  {
    title: "Brand Iron Recognized Among Denver's Best Branding Agencies",
    body: "Brand Iron was named one of Denver's leading branding agencies by Digital Reference, recognizing the company's experience helping organizations strengthen their positioning, identity, and market presence.",
    cta: "Read the Feature",
    href: "https://www.hillsdale.net/press-release/story/93541/brand-iron-named-one-of-the-best-branding-agencies-in-denver-by-digital-reference/",
  },
];

const TOPICS = [
  "Brand strategy and positioning",
  "Business and leadership transformation",
  "Customer relationships and market perception",
  "Go-to-market execution",
  "Capital raise readiness",
  "Investor communication",
  "Digital visibility and discoverability",
  "Revenue growth and business development",
  "Entrepreneurship and organizational leadership",
];

export default function ResourcesPage() {
  const featuredView = useInView(0.15);
  const videosView = useInView(0.05);
  const podcastView = useInView(0.05);
  const articlesView = useInView(0.1);
  const topicsView = useInView(0.15);
  const subscribeView = useInView(0.1);
  const ctaView = useInView(0.1);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Resources", url: "https://brandiron.net/resources" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="res-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/resources/resources-hero-tech-field.png')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div role="img" aria-label="Wide agricultural field at dusk with glowing digital circuit-line patterns woven through the crop rows" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.4) 0%, rgba(8,16,36,0.3) 45%, rgba(8,16,36,0.68) 100%)" }} />

        <div className="res-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="res-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Insights Forged Through Experience
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Book a Strategy Session
                </Link>
                <Link href="#featured" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Watch the Featured Interview
                </Link>
              </div>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", marginBottom: 14 }}>
                Explore interviews, podcasts, videos, and published features covering branding, leadership, capital raising, business transformation, and revenue growth.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                Whether you&apos;re building a company, repositioning an established brand, preparing to raise capital, or looking for your next stage of growth, these conversations offer practical lessons from Brand Iron CEO Michael Doyle and other experienced business leaders.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .res-hero-section { height: auto !important; min-height: 100vh; }
            .res-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .res-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── FEATURED CONVERSATION ─────────────────────────────── */}
      <section id="featured" style={{ background: "#F9F8F6", padding: "100px 40px" }}>
        <div ref={featuredView.ref} className={`reveal${featuredView.inView ? " visible" : ""}`} style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{
            position: "relative", background: "#FFFFFF", border: "1px solid #EEEBE7",
            borderRadius: 14, overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))", zIndex: 2 }} />
            <div className="res-featured-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr" }}>
              <a href="https://www.youtube.com/watch?v=uteuCEBzWws" target="_blank" rel="noopener noreferrer" aria-label="Watch the Interview" className="res-featured-thumb-link" style={{ position: "relative", display: "block", overflow: "hidden", background: "#0F1B2D" }}>
                <img
                  loading="lazy"
                  src="https://i.ytimg.com/vi/uteuCEBzWws/hqdefault.jpg"
                  alt="The Critical Role of Branding in Business Growth video thumbnail"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(8,16,36,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(8,16,36,0.65)", border: "2px solid rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </a>
              <div style={{ padding: "40px 44px" }}>
                <span style={{ display: "inline-block", padding: "4px 12px", background: "#d87307", borderRadius: 4, fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: 20 }}>
                  Featured Conversation
                </span>
                <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.3 }}>
                  The Critical Role of Branding in Business Growth
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 28 }}>
                  Michael Doyle joins Magnetic Rise to discuss why branding is more than a logo or visual identity. Discover how strong positioning, consistent messaging, and a clearly defined brand can influence customer trust, business growth, and long-term enterprise value.
                </p>
                <a href="https://www.youtube.com/watch?v=uteuCEBzWws" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  color: "#d87307", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#b8691f")}
                onMouseLeave={e => (e.currentTarget.style.color = "#d87307")}
                >
                  Watch the Interview →
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .res-featured-grid { grid-template-columns: 1fr !important; }
            .res-featured-thumb-link { aspect-ratio: 16 / 9; }
          }
        `}</style>
      </section>

      {/* ── VIDEOS AND INTERVIEWS ─────────────────────────────── */}
      <section id="videos" style={{ background: "#FFFFFF", padding: "100px 40px" }}>
        <div ref={videosView.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Videos &amp; Interviews</p>
            <h2 className={`section-heading reveal${videosView.inView ? " visible" : ""}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
              Real Conversations About Brands, Leadership, and Growth
            </h2>
            <p className={`reveal${videosView.inView ? " visible" : ""}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              Hear Michael Doyle share insights from decades of experience helping entrepreneurs, executives, and organizations strengthen their brands and build more valuable businesses.
            </p>
          </div>
          <div className={`reveal-group${videosView.inView ? " visible" : ""} res-videos-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {VIDEOS.map(({ title, body, cta, href, videoId }, i) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                className={`res-card reveal${videosView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", display: "flex", flexDirection: "column", background: "#F9F8F6", border: "1px solid #EEEBE7",
                  borderRadius: 14, overflow: "hidden", textDecoration: "none",
                  transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))", zIndex: 2 }} />
                <VideoThumb videoId={videoId} title={title} />
                <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 className="res-card-title" style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.35, transition: "color 0.2s" }}>{title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", marginBottom: 20, flex: 1 }}>{body}</p>
                  <span className="res-card-cta" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d87307", transition: "color 0.2s" }}>{cta} →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .res-videos-grid, .res-podcast-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .res-videos-grid, .res-podcast-grid, .res-articles-grid { grid-template-columns: 1fr !important; }
          }
          .res-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); border-color: rgba(216,115,7,0.3) !important; }
          .res-card:hover .res-card-title { color: #d87307 !important; }
          .res-card:hover .res-card-cta { color: #b8691f !important; }
        `}</style>
      </section>

      {/* ── PODCAST APPEARANCES ───────────────────────────────── */}
      <section id="podcast" style={{ background: "#F9F8F6", padding: "100px 40px" }}>
        <div ref={podcastView.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Podcast Appearances</p>
            <h2 className={`section-heading reveal${podcastView.inView ? " visible" : ""}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
              Straight Talk From Industry Leaders
            </h2>
            <p className={`reveal${podcastView.inView ? " visible" : ""}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              Listen to conversations about entrepreneurship, customer insight, leadership, positioning, revenue, and the realities of building a business in a rapidly changing market.
            </p>
          </div>
          <div className={`reveal-group${podcastView.inView ? " visible" : ""} res-podcast-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PODCASTS.map(({ title, body, cta, href }, i) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                className={`res-card reveal${podcastView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", display: "flex", flexDirection: "column", background: "#FFFFFF", border: "1px solid #EEEBE7",
                  borderRadius: 14, padding: "28px 26px", overflow: "hidden", textDecoration: "none",
                  transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <h3 className="res-card-title" style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.35, transition: "color 0.2s" }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", marginBottom: 20, flex: 1 }}>{body}</p>
                <span className="res-card-cta" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d87307", transition: "color 0.2s" }}>{cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES AND FEATURES ─────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "100px 40px" }}>
        <div ref={articlesView.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>Articles &amp; Features</p>
            <h2 className={`section-heading reveal${articlesView.inView ? " visible" : ""}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
              Perspectives on Purpose, Transformation, and Market Leadership
            </h2>
            <p className={`reveal${articlesView.inView ? " visible" : ""}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
              Read interviews and company features highlighting Brand Iron&apos;s work, leadership philosophy, and impact within the branding and growth industry.
            </p>
          </div>
          <div className={`reveal-group${articlesView.inView ? " visible" : ""} res-articles-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {ARTICLES.map(({ title, body, cta, href }, i) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                className={`res-card reveal${articlesView.inView ? " visible" : ""}`}
                style={{
                  position: "relative", display: "flex", flexDirection: "column", background: "#F9F8F6", border: "1px solid #EEEBE7",
                  borderRadius: 14, padding: "32px 28px", overflow: "hidden", textDecoration: "none",
                  transitionDelay: `${(i % 6) * 0.06}s`,
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                <h3 className="res-card-title" style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.35, transition: "color 0.2s" }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#666", marginBottom: 20, flex: 1 }}>{body}</p>
                <span className="res-card-cta" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d87307", transition: "color 0.2s" }}>{cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS WE EXPLORE ─────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "88px 24px" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/shared/shared-mountain-peaks.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div role="img" aria-label="Rocky mountain trail along a ridge crest at sunset" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.5) 0%, rgba(8,16,36,0.42) 50%, rgba(8,16,36,0.6) 100%)" }} />
        <div ref={topicsView.ref} className={`reveal${topicsView.inView ? " visible" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>
            Practical Insight for Every Stage of Growth
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
            Our resource collection covers the challenges business leaders face when building, launching, funding, repositioning, and scaling their organizations.
          </p>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
            Explore insights on:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {TOPICS.map(t => (
              <span key={t} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 600, color: "#f0a860", background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.25)", borderRadius: 20, padding: "7px 16px" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ────────────────────────────────────── */}
      <section style={{ background: "#F9F8F6", padding: "88px 24px" }}>
        <div ref={subscribeView.ref} className={`reveal${subscribeView.inView ? " visible" : ""}`} style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 16, lineHeight: 1.2 }}>
            Keep Your Edge Sharp
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 6 }}>
            Get notified when we release new articles, interviews, podcasts, strategic insights, and educational resources.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 28 }}>
            No noise. No empty marketing talk. Just practical ideas built to help you strengthen your brand and grow your business.
          </p>
          <form onSubmit={e => { e.preventDefault(); setSubscribeEmail(""); }} style={{ display: "flex", maxWidth: 420, margin: "0 auto" }}>
            <input
              type="email" required placeholder="Email address" value={subscribeEmail}
              onChange={e => setSubscribeEmail(e.target.value)}
              style={{
                flex: 1, minWidth: 0, padding: "14px 18px",
                fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14,
                background: "#FFFFFF", border: "1px solid #EEEBE7", borderRight: "none",
                borderRadius: "6px 0 0 6px", color: "#1a1a1a", outline: "none",
              }}
            />
            <button type="submit" style={{
              padding: "14px 28px", borderRadius: "0 6px 6px 0",
              fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.08em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#c46305")}
            onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/resources/resources-cta-barn-sunset.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Rustic barn in a green field beneath a dramatic orange and purple sunset sky" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Build a Stronger Brand?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 40px" }}>
                Brand Iron helps organizations sharpen their positioning, become more discoverable, enter markets with confidence, and build the systems needed to support sustainable revenue growth. Let&apos;s identify what&apos;s holding your business back and build a strategy designed to move it forward.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                background: "#d87307", color: "#FFFFFF",
                padding: "18px 44px", borderRadius: 6,
                transition: "background 0.2s", marginBottom: 20,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >
                Book Strategy Session
              </Link>
              <div>
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#d87307"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)"; }}
                >
                  Our Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
