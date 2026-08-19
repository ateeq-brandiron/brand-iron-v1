"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect, useRef } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioItems, portfolioCategories, PortfolioCategoryId } from "@/data/portfolio";

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

function useCountUp(target: number | null, inView: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView || target === null) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

const stats = [
  { number: "100+", countTo: 100, suffix: "+", label: "Brands Forged", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#D87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="5" stroke="#D87307" strokeWidth="1.6" /><circle cx="12" cy="12" r="1.5" fill="#D87307" /></svg>) },
  { number: "25+", countTo: 25, suffix: "+", label: "Industries Served", icon: (<svg width="30" height="30" viewBox="0 0 32 32" fill="none"><path d="M17.3333 9.3332H28M28 9.3332V19.9998M28 9.3332L17.3333 19.9998L12 14.6665L4 22.6665" stroke="#D87307" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
  { number: "20+", countTo: 20, suffix: "+", label: "Years in the Saddle", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#D87307" strokeWidth="1.6" /><circle cx="17" cy="9" r="2.3" stroke="#D87307" strokeWidth="1.6" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#D87307" strokeWidth="1.6" strokeLinecap="round" /><path d="M15 14.2c2.3.4 4 2.3 4 4.8" stroke="#D87307" strokeWidth="1.6" strokeLinecap="round" /></svg>) },
  { number: "Award-Winning", countTo: null, suffix: "", label: "Strategy & Creative", icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="#D87307" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" stroke="#D87307" strokeWidth="1.6" strokeLinecap="round" /><path d="M12 14v3M9 20h6M9.5 17h5" stroke="#D87307" strokeWidth="1.6" strokeLinecap="round" /></svg>) },
];

function StatTile({ stat, inView, index }: {
  stat: { number: string; countTo: number | null; suffix: string; label: string; icon: React.ReactNode };
  inView: boolean; index: number;
}) {
  const count = useCountUp(stat.countTo, inView, 1200 + index * 150);
  const displayValue = stat.countTo !== null ? `${count}${stat.suffix}` : stat.number;
  return (
    <div
      className={`reveal${inView ? ' visible' : ''}`}
      style={{ display: "flex", alignItems: "flex-start", gap: 12, transitionDelay: `${index * 0.08}s`, cursor: "default" }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        (el.firstElementChild as HTMLDivElement).style.background = "#d87307";
        (el.firstElementChild as HTMLDivElement).style.transform = "scale(1.08)";
        (el.querySelectorAll("svg path, svg circle") as NodeListOf<SVGElement>).forEach(p => { p.setAttribute("stroke", "#FFFFFF"); if (p.getAttribute("fill") && p.getAttribute("fill") !== "none") p.setAttribute("fill", "#FFFFFF"); });
        (el.lastElementChild!.firstElementChild as HTMLElement).style.color = "#d87307";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        (el.firstElementChild as HTMLDivElement).style.background = "#EFEDE7";
        (el.firstElementChild as HTMLDivElement).style.transform = "scale(1)";
        (el.querySelectorAll("svg path, svg circle") as NodeListOf<SVGElement>).forEach(p => { p.setAttribute("stroke", "#D87307"); if (p.getAttribute("fill") && p.getAttribute("fill") !== "none") p.setAttribute("fill", "#D87307"); });
        (el.lastElementChild!.firstElementChild as HTMLElement).style.color = "#1a1a1a";
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#EFEDE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.25s ease, transform 0.25s ease" }}>
        {stat.icon}
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 25, fontWeight: 900, color: "#1a1a1a", letterSpacing: "0.02em", lineHeight: 1.15, whiteSpace: "nowrap", transition: "color 0.25s ease" }}>{displayValue}</p>
        <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, color: "#555", fontWeight: 500, marginTop: 4 }}>{stat.label}</p>
      </div>
    </div>
  );
}

const categoryCards = [
  {
    id: "brand-identity",
    category: "Brand Strategy & Positioning",
    headline: "Stake Your Claim.",
    body: "A brand without clear positioning gets lost in the crowd. We help businesses define what they stand for, who they serve, and why the market should pay attention. The result is a sharper position, stronger message, and a brand built to hold its ground.",
    services: ["Brand Strategy", "Positioning", "Messaging", "Identity"],
    cta: "View Brand Strategy Work",
  },
  {
    id: "websites",
    category: "Website & Digital Experience",
    headline: "Build a Stronger Front Door.",
    body: "Your website is often where the first handshake happens. We create digital experiences that make the right first impression, communicate value clearly, and guide visitors toward action. Built for credibility. Built for conversion. Built to keep working long after launch.",
    services: ["Website Design", "UX", "Messaging", "Conversion Optimization"],
    cta: "View Website Work",
  },
  {
    id: "go-to-market",
    category: "Go-To-Market Strategy",
    headline: "Know the Territory. Make Your Move.",
    body: "Going to market without a clear strategy is like riding blind. We help businesses understand the landscape, identify the right audience, sharpen the offer, and build a practical path from market entry to measurable growth.",
    services: ["Market Research", "ICP Development", "GTM Strategy", "Demand Generation"],
    cta: "View GTM Work",
  },
  {
    id: "capital-raise",
    category: "Capital Raise Strategy",
    headline: "Make the Story Worth Backing.",
    body: "Capital follows confidence. We help companies tell a stronger investor story through clear positioning, compelling narratives, and raise materials built to communicate the opportunity with clarity. No smoke. No fluff. Just a stronger case for why the business deserves attention.",
    services: ["Investor Positioning", "Pitch Decks", "Financial Narrative", "Raise Strategy"],
    cta: "View Capital Raise Work",
  },
  {
    id: "ai-visibility",
    category: "AI Visibility & Discoverability",
    headline: "Be Found Where the Market Is Looking.",
    body: "Discovery is moving beyond traditional search. We help businesses strengthen the signals that make them easier to find, understand, trust, and recommend across search engines and AI-driven platforms. Because being good isn't enough if nobody can find you.",
    services: ["AI Visibility", "AEO", "GEO", "Entity Optimization", "Search Strategy"],
    cta: "View AI Visibility Work",
  },
  {
    id: "revenue-growth",
    category: "Revenue Growth & Automation",
    headline: "Turn Momentum Into a System.",
    body: "Growth shouldn't depend on luck. We connect marketing, sales, automation, funnels, and reporting into a more consistent system designed to create demand, improve follow-up, and strengthen revenue performance. Less chasing. More traction.",
    services: ["Revenue Strategy", "Automation", "CRM", "Funnels", "Reporting"],
    cta: "View Revenue Growth Work",
  },
];

const processSteps = [
  {
    title: "Discover",
    caption: "Uncover the real challenge.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    title: "Position",
    caption: "Sharpen the strategic position.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
  {
    title: "Build",
    caption: "Build the right tools.",
    icon: (<img loading="lazy" src="/images/icons/icon-gear.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
  {
    title: "Launch",
    caption: "Launch with purpose.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Measure",
    caption: "Measure what matters.",
    icon: (<img loading="lazy" src="/images/icons/icon-barchart.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
  {
    title: "Grow",
    caption: "Keep pushing forward.",
    icon: (<img loading="lazy" src="/images/icons/icon-trending.svg" alt="" style={{ width: 22, height: 22 }} />),
  },
];

export default function PortfolioPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioPageContent />
    </Suspense>
  );
}

function PortfolioPageContent() {
  const { ref: s2ViewRef, inView: s2ViewInView } = useInView();
  const { ref: s3ViewRef, inView: s3ViewInView } = useInView();
  const { ref: s4ViewRef, inView: s4ViewInView } = useInView();
  const { ref: s5ViewRef, inView: s5ViewInView } = useInView();
  const { ref: s6ViewRef, inView: s6ViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();

  const [activeCategoryCard, setActiveCategoryCard] = useState(0);
  const categoryCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const categoryCarouselRef = useRef<HTMLDivElement>(null);
  const activeCategoryCardRef = useRef(activeCategoryCard);
  const catAutoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const selectCategoryCard = (i: number, behavior: ScrollBehavior = "smooth") => {
    setActiveCategoryCard(i);
    activeCategoryCardRef.current = i;
    const container = categoryCarouselRef.current;
    const card = categoryCardRefs.current[i];
    if (container && card) {
      container.scrollTo({ left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2, behavior });
    }
  };
  useEffect(() => {
    // selectCategoryCard scrolls a DOM node via container.scrollTo, which only exists post-mount.
    // Starting on index 2 (instead of 0) leaves cards on both sides visible by default,
    // matching the homepage carousel instead of stranding the first card against empty space.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    selectCategoryCard(2, "instant");
  }, []);
  const startCatAutoSlide = () => {
    if (catAutoSlideRef.current) return;
    catAutoSlideRef.current = setInterval(() => {
      selectCategoryCard((activeCategoryCardRef.current + 1) % categoryCards.length);
    }, 5000);
  };
  const stopCatAutoSlide = () => {
    if (catAutoSlideRef.current) {
      clearInterval(catAutoSlideRef.current);
      catAutoSlideRef.current = null;
    }
  };
  useEffect(() => () => stopCatAutoSlide(), []);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory = portfolioCategories.some(c => c.id === categoryParam)
    ? (categoryParam as PortfolioCategoryId)
    : undefined;

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Portfolio", url: "https://brandiron.net/portfolio" },
        ]}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pf-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/portfolio/portfolio-hero-wild-horses.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 55%",
        }} />
        <div role="img" aria-label="A herd of wild horses running along a shoreline at sunset, representing momentum and growth built to last" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="pf-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="pf-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — kicker, headline, CTAs */}
            <div>
              <p className="hero-h1-anim" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 16, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                Portfolio
              </p>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Brands Forged<span style={{ color: "#d87307" }}>.</span><br />Growth Built to Last<span style={{ color: "#d87307" }}>.</span>
              </h1>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <a href="#selected-work" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "15px 32px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Explore the Work
                </a>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Book a Strategy Session
                </Link>
              </div>
            </div>

            {/* RIGHT — supporting detail panel */}
            <div className="hero-body-anim" style={{
              background: "rgba(8,16,36,0.55)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "clamp(20px, 2.6vw, 32px)",
            }}>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>
                Strong brands aren&apos;t made by accident. They&apos;re built with clarity, grit, and a clear sense of where they&apos;re headed. At Brand Iron, we help companies sharpen their position, strengthen their presence, and build the strategy, creative, and growth systems needed to move forward with confidence. From the first spark to the final execution, our work is built to stand up in the real world.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pf-hero-section { height: auto !important; min-height: 100vh; }
            .pf-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .pf-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: STATS BAND ───────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "16px 40px 56px" }}>
        <div ref={s2ViewRef} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", textAlign: "center", marginBottom: 28 }}>
            Built With Purpose. Proven in the Field.
          </p>
          <div className="trust-stats-row" style={{ display: "flex", gap: "24px 40px", justifyContent: "center" }}>
            {stats.map((stat, i) => (
              <StatTile key={stat.label} stat={stat} inView={s2ViewInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: FEATURED WORK ────────────────────────────────── */}
      <section id="selected-work" style={{ background: "#FFFFFF", padding: "40px 40px 48px" }}>
        <div ref={s3ViewRef} className={`reveal${s3ViewInView ? ' visible' : ''} pf-featured-row`} style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 12 }}>
              Featured Work
            </p>
            <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 14 }}>
              Strategy With Backbone. Creative With Purpose.
            </h2>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.75, color: "#666" }}>
              Good-looking work is only part of the job. The real work is creating a brand people understand, trust, and choose. We partner with organizations that are ready to sharpen their story, stake out a stronger position, and build momentum across branding, go-to-market, digital, capital raising, visibility, and revenue growth.
            </p>
          </div>
          <a href="#all-projects" style={{
            display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0,
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
            background: "transparent", color: "#1a1a1a", border: "1px solid #d87307",
            padding: "13px 24px", borderRadius: 6, transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#d87307"; e.currentTarget.style.color = "#FFFFFF"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
          >
            See All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .pf-featured-row { flex-direction: column !important; align-items: flex-start !important; }
          }
        `}</style>
      </section>

      {/* ── S4: SELECTED WORK (CATEGORY CAROUSEL) ───────────────── */}
      <section style={{ background: "#FFFFFF", padding: "8px 40px 96px" }}>
        <div ref={s4ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 40 }}>
            Selected Work
          </h2>

          <div
            style={{ position: "relative", marginBottom: 32 }}
            onMouseEnter={startCatAutoSlide}
            onMouseLeave={stopCatAutoSlide}
          >
            <button
              aria-label="Previous category"
              onClick={() => selectCategoryCard((activeCategoryCard - 1 + categoryCards.length) % categoryCards.length)}
              className="pf-category-carousel-arrow"
              style={{
                position: "absolute", left: -8, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                width: 44, height: 44, borderRadius: "50%", background: "#F9F8F6",
                border: "1px solid #EEEBE7", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)", transition: "border-color 0.2s, background 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <div ref={categoryCarouselRef} className="pf-category-carousel" style={{
              display: "flex", gap: 24, overflowX: "auto",
              scrollSnapType: "x proximity", scrollBehavior: "smooth",
              padding: "8px calc(50% - 160px)",
            }}>
              {categoryCards.map(({ id, category, headline, body, services, cta }, i) => (
                <Link key={id} href={`/portfolio?category=${id}#all-projects`}
                  ref={el => { categoryCardRefs.current[i] = el; }}
                  className={`reveal${s4ViewInView ? ' visible' : ''} pf-category-card`}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #ECE5D8",
                    borderRadius: 18, padding: "30px 26px", position: "relative",
                    display: "flex", flexDirection: "column",
                    flex: "0 0 320px", width: 320, scrollSnapAlign: "center",
                    textDecoration: "none", transitionDelay: `${(i % 6) * 0.06}s`,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  <div style={{ width: 40, height: 4, borderRadius: 2, background: "#d87307", marginBottom: 16 }} />
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{category}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, fontWeight: 700, color: "#d87307", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{headline}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.65, color: "#555", marginBottom: 14 }}>{body}</p>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6, marginBottom: 18 }}>
                    {services.map(s => (
                      <span key={s} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", padding: "3px 8px", borderRadius: 4 }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="pf-view-work" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 12,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    background: "#d87307", color: "#FFFFFF",
                    padding: "13px 20px", borderRadius: 6,
                    marginTop: "auto", transition: "background 0.2s",
                  }}>
                    {cta}
                    <span className="pf-view-work-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                      <span className="pf-view-work-tail" style={{ display: "inline-block", height: 2, width: 18, background: "currentColor", transform: "scaleX(0.3)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                      <svg width="5" height="10" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <button
              aria-label="Next category"
              onClick={() => selectCategoryCard((activeCategoryCard + 1) % categoryCards.length)}
              className="pf-category-carousel-arrow"
              style={{
                position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                width: 44, height: 44, borderRadius: "50%", background: "#F9F8F6",
                border: "1px solid #EEEBE7", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)", transition: "border-color 0.2s, background 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Dot pagination */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 32 }}>
              {categoryCards.map((c, i) => (
                <button
                  key={c.id}
                  aria-label={`Go to ${c.category}`}
                  onClick={() => selectCategoryCard(i)}
                  style={{
                    width: i === activeCategoryCard ? 24 : 8, height: 8, borderRadius: 4,
                    background: i === activeCategoryCard ? "#d87307" : "#ddd",
                    border: "none", cursor: "pointer", transition: "width 0.2s, background 0.2s", padding: 0,
                  }}
                  onMouseEnter={e => { if (i !== activeCategoryCard) (e.currentTarget as HTMLButtonElement).style.background = "#d87307"; }}
                  onMouseLeave={e => { if (i !== activeCategoryCard) (e.currentTarget as HTMLButtonElement).style.background = "#ddd"; }}
                />
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .pf-category-carousel { scrollbar-width: none; -ms-overflow-style: none; }
          .pf-category-carousel::-webkit-scrollbar { display: none; }
          .pf-category-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px rgba(0,0,0,0.1); border-color: rgba(216,115,7,0.3) !important; }
          .pf-category-card:hover .pf-view-work { background: #c46305; }
          .pf-category-card:hover .pf-view-work-tail { transform: scaleX(1); }
          .pf-category-carousel-arrow:hover { border-color: #d87307 !important; background: rgba(216,115,7,0.08) !important; }
          @media (max-width: 640px) {
            .pf-category-carousel-arrow { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── S4B: EXPLORE ALL PROJECTS (GALLERY) ──────────────── */}
      <section id="all-projects" style={{ background: "#F9F8F6", padding: "80px 40px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="section-heading" style={{ color: "#1a1a1a", marginBottom: 16 }}>
            Explore All Projects
          </h2>
          <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
            Filter by category and click any thumbnail for a closer look.
          </p>
          <PortfolioGallery key={initialCategory ?? "all"} items={portfolioItems} initialCategory={initialCategory} />
        </div>
      </section>

      {/* ── S5: BEHIND THE BRAND ─────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0F1B2D", padding: "120px 40px" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/portfolio/portfolio-forged-strategy-bg.jpg')",
          backgroundSize: "cover", backgroundPosition: "center 40%",
        }} />
        <div role="img" aria-label="A blacksmith striking molten metal on an anvil with sparks flying, overlaid with a glowing circuit-line pattern representing strategy and technology" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.88) 0%, rgba(8,16,36,0.82) 45%, rgba(8,16,36,0.92) 100%)" }} />
        <div ref={s5ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, margin: "0 auto 56px", textAlign: "center" }}>
            <h2 className={`section-heading reveal${s5ViewInView ? ' visible' : ''}`} style={{ color: "#FFFFFF", marginBottom: 20 }}>
              Forged From Strategy. Built for the Real World.
            </h2>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
              Every project starts with a simple question: what&apos;s standing between this business and its next stage of growth?
            </p>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: 0 }}>
              From there, we dig in: we uncover the challenge, sharpen the position, build the right tools, launch with purpose, measure what matters, and keep pushing forward.
            </p>
          </div>

          <div className={`reveal${s5ViewInView ? ' visible' : ''} pf-flow-row`}>
            {processSteps.map(({ title, caption, icon }, i) => (
              <div className="pf-flow-item" key={title}>
                <div className="pf-flow-step">
                  <div className="pf-flow-icon-wrap">
                    <div className="pf-flow-icon">{icon}</div>
                    <span className="pf-flow-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", margin: "16px 0 6px", lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: 130 }}>{caption}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="pf-flow-connector" style={{ opacity: 0.4 + i * 0.12 }}>
                    <svg className="pf-arrow-h" width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M1 7h16M11 1l6 6-6 6" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <svg className="pf-arrow-v" width="14" height="20" viewBox="0 0 14 20" fill="none"><path d="M7 1v16M1 11l6 6 6-6" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 700, margin: "56px auto 0" }}>
            We don&apos;t believe in strategy that sits on a shelf or creative that only looks good in a presentation. We build work designed to earn its keep.
          </p>
        </div>
        <style>{`
          .pf-flow-row { display: flex; align-items: flex-start; justify-content: center; margin-bottom: 8px; }
          .pf-flow-item { display: flex; align-items: flex-start; flex: 1; min-width: 0; }
          .pf-flow-step { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; text-align: center; }
          .pf-flow-icon-wrap { position: relative; width: 56px; height: 56px; flex-shrink: 0; }
          .pf-flow-icon {
            width: 56px; height: 56px; border-radius: 50%; background: rgba(216,115,7,0.1); border: 1px solid rgba(216,115,7,0.3);
            display: flex; align-items: center; justify-content: center; transition: background 0.25s, border-color 0.25s, transform 0.25s;
          }
          .pf-flow-step:hover .pf-flow-icon { background: rgba(216,115,7,0.2); border-color: rgba(216,115,7,0.6); transform: translateY(-3px); }
          .pf-flow-num {
            position: absolute; top: -6px; right: -6px; width: 20px; height: 20px; border-radius: 50%;
            background: #d87307; border: 2px solid #0F1B2D; color: #FFFFFF;
            font-family: var(--font-montserrat), sans-serif; font-size: 9px; font-weight: 700;
            display: flex; align-items: center; justify-content: center;
          }
          .pf-flow-connector { flex-shrink: 0; display: flex; align-items: center; justify-content: center; padding-top: 17px; margin: 0 4px; }
          .pf-arrow-v { display: none; }
          @media (max-width: 900px) {
            .pf-flow-row { flex-direction: column; align-items: stretch; }
            .pf-flow-item { flex-direction: column; align-items: center; }
            .pf-flow-connector { padding-top: 0; margin: 10px 0; }
            .pf-arrow-h { display: none; }
            .pf-arrow-v { display: block; }
          }
        `}</style>
      </section>

      {/* ── S6: CASE STUDIES TEASER ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s6ViewRef} style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
            See What Happened After the Dust Settled.
          </h2>
          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 32 }}>
            The finished work is only part of the story. Explore selected case studies to see the challenge, thinking, execution, and outcomes behind Brand Iron engagements.
          </p>
          <Link href="/case-studies" className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{
            display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
            letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
            background: "#d87307", color: "#FFFFFF",
            padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
          >Explore Case Studies</Link>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shared/shared-cta-banner-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%",
          }}>
            <div role="img" aria-label="Rugged mountain ridge trail at golden-hour sunset" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d87307", marginBottom: 20 }}>
                Ready to Start?
              </p>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Ready to Forge What&apos;s Next?
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 40px" }}>
                Whether you&apos;re launching a new venture, repositioning an established company, raising capital, entering new territory, or building your next growth engine, Brand Iron can help you create a stronger path forward.
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
                Book a Strategy Session
              </Link>
              <div>
                <Link href="/services" style={{
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#f0a860"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)"; }}
                >
                  Explore Our Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
