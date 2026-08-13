"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircuitOverlay from "@/components/CircuitOverlay";
import WebsiteInquiryModal from "@/components/WebsiteInquiryModal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import HowToSchema from "@/components/HowToSchema";
import FaqAccordion from "@/components/FaqAccordion";

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

// Crossfades through the given headlines once, then rests on the last one.
function useHeadlineCrossfade(count: number, pauseMs = 3500, fadeMs = 400) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const fadeOut = setTimeout(() => setVisible(false), pauseMs);
    const advance = setTimeout(() => { setIndex(i => (i + 1) % count); setVisible(true); }, pauseMs + fadeMs);
    return () => { clearTimeout(fadeOut); clearTimeout(advance); };
  }, [index, count, pauseMs, fadeMs]);
  return { index, visible, fadeMs };
}

// Measures every headline variant off-screen at the current column width and
// returns the tallest one, so the visible headline's box never resizes (and
// nothing below it jumps) no matter which variant is showing or how the
// viewport wraps its lines.
function useMaxHeadlineHeight() {
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const measure = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      setHeight(Math.max(...kids.map(k => k.getBoundingClientRect().height)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return { measureRef, height };
}

const HEADLINES = [
  "Forge a Website That Pulls Its Weight.",
  "Your Website Should Be Your Hardest-Working Asset.",
  "Every Growth Strategy Eventually Leads to Your Website.",
];

const pillars = [
  {
    num: "01", title: "Strategy",
    body: "Clarify goals, audience, messaging, and website structure.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
  {
    num: "02", title: "User Experience",
    body: "Create intuitive navigation and user journeys that guide visitors toward action.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 3l4 16 2.5-6.5L18 10z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(216,115,7,0.12)"/></svg>),
  },
  {
    num: "03", title: "Design",
    body: "Develop a modern, responsive interface that reflects your brand and builds credibility.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12.5 6.5l5 5" stroke="#d87307" strokeWidth="1.8"/></svg>),
  },
  {
    num: "04", title: "Performance & Visibility",
    body: "Build a fast, technically sound website with SEO, AI Visibility, accessibility, and mobile best practices.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 18a8 8 0 1 1 16 0" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 18l4-6" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="18" r="1.3" fill="#d87307"/></svg>),
  },
  {
    num: "05", title: "Growth",
    body: "Connect your website to your business through analytics, lead capture, CRM integrations, and scalable content management.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightning.svg" alt="" style={{ width: 24, height: 24 }} />),
  },
];

const processSteps = [
  {
    title: "Discovery",
    body: "Understand your business, audience, and goals before any design work begins.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6.5" stroke="#d87307" strokeWidth="1.8" /><path d="M15 15l5 5" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  },
  {
    title: "Strategy",
    body: "Define the site's structure, messaging priorities, and success metrics.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightbulb.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
  {
    title: "UX Planning",
    body: "Map user journeys, navigation, and information architecture.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 3l4 16 2.5-6.5L18 10z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(216,115,7,0.12)" /></svg>),
  },
  {
    title: "Design",
    body: "Create a modern, responsive interface that reflects your brand.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.5 4.5l5 5L8 21H3v-5L14.5 4.5Z" stroke="#d87307" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12.5 6.5l5 5" stroke="#d87307" strokeWidth="1.8" /></svg>),
  },
  {
    title: "Development",
    body: "Build a fast, scalable, and technically sound website.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 4L2 12l6 8M16 4l6 8-6 8" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "Testing",
    body: "Validate functionality, performance, and content across devices.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 12l2.5 2.5L16 9" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
  {
    title: "Launch",
    body: "Deploy your website with a smooth, coordinated rollout.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="#d87307" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2" stroke="#d87307" strokeWidth="1.5" /><path d="M8 16l-3 5M16 16l3 5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round" /></svg>),
  },
  {
    title: "Growth",
    body: "Monitor, optimize, and evolve the site as your business grows.",
    icon: (<img loading="lazy" src="/images/icons/icon-lightning.svg" alt="" style={{ width: 20, height: 20 }} />),
  },
];

const solutions = [
  {
    name: "Website Essentials",
    body: "Build a credible digital foundation with a modern, responsive website for smaller businesses or focused relaunches.",
    bestFor: "Up to 5 pages",
    outcome: "Professional online presence",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#d87307" strokeWidth="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#d87307" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  },
  {
    name: "Website Growth",
    body: "Create a marketing-ready website with stronger messaging, improved conversion paths, and deeper content.",
    bestFor: "Up to 8 pages",
    outcome: "Better user engagement and lead generation",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="14" height="16" rx="1.5" stroke="#d87307" strokeWidth="1.8"/><rect x="7" y="2" width="14" height="16" rx="1.5" stroke="#d87307" strokeWidth="1.4" opacity="0.55"/></svg>),
  },
  {
    name: "Website Advanced",
    body: "Develop a scalable digital platform with advanced functionality, integrations, and AI Visibility foundations.",
    bestFor: "Up to 12 pages",
    outcome: "Scalable digital platform with advanced capabilities",
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#d87307" strokeWidth="1.8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="#d87307" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
];

const successPoints = [
  "Strengthen credibility and trust",
  "Improve user experience",
  "Increase qualified inquiries",
  "Support SEO and AI Visibility",
  "Integrate with your marketing and business systems",
  "Scale as your organization grows",
];

const CheckIcon = () => (
  <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function WebsiteDevelopmentPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const headline = useHeadlineCrossfade(HEADLINES.length);
  const { measureRef: headlineMeasureRef, height: headlineHeight } = useMaxHeadlineHeight();

  const { ref: s2ViewRef, inView: s2ViewInView } = useInView();
  const { ref: s3ViewRef, inView: s3ViewInView } = useInView();
  const { ref: s4ViewRef, inView: s4ViewInView } = useInView();
  const { ref: s5ViewRef, inView: s5ViewInView } = useInView();
  const { ref: s6ViewRef, inView: s6ViewInView } = useInView();
  const { ref: ctaViewRef, inView: ctaViewInView } = useInView();

  const faqs = [
    {
      q: "What platforms do you develop websites on?",
      a: "Brand Iron builds websites on the platforms best suited to your business, most commonly WordPress for content-driven sites requiring flexibility and scale, Webflow for design-forward marketing sites, and HubSpot CMS for organizations already running HubSpot for marketing and CRM. We're platform-agnostic; the goal is the right platform for your business.",
    },
    {
      q: "Will my website be SEO-ready?",
      a: "Yes. Every Brand Iron website is built on a technical foundation optimized for search and AI Visibility from day one: clean semantic HTML, proper heading hierarchy, schema markup, fast page speed, mobile responsiveness, XML sitemaps, and image optimization. SEO isn't an add-on we bolt on after launch; it's built into the development process.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. Website redesigns are one of the most common engagement types, for organizations with dated design, poor performance, weak conversion paths, or platforms that no longer fit their business. We evaluate what's working on your current site and preserve it, replace what isn't, and rebuild the technical foundation for search and AI Visibility.",
    },
    {
      q: "Do you provide website copywriting?",
      a: "Yes. Website copywriting is included in most engagements: messaging, headlines, page content, calls to action, and metadata all developed from the strategic foundation we build during discovery. Copywriting scales with the tier, from focused copy for core pages up to full content architecture across a scalable platform.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Post-launch support keeps the website performing after go-live, including performance monitoring, security updates, content updates, technical maintenance, and continuous optimization as your business evolves. Post-launch support is available as a retainer or on an as-needed project basis, depending on your team's capacity.",
    },
    {
      q: "How is Brand Iron's website development different from other web agencies?",
      a: "Most web agencies build websites as standalone creative projects: design, functional pages, launch, done. Brand Iron builds websites as strategic business assets connected to messaging, brand positioning, AI Visibility, and revenue systems. A pretty website that doesn't produce leads is a liability, not an asset.",
    },
    {
      q: "How long does a website development project typically take?",
      a: "Website Essentials (up to 5 pages) typically runs 6 to 10 weeks from kickoff to launch. Website Growth (up to 8 pages) typically runs 10 to 14 weeks. Website Advanced (up to 12 pages) with integrations and advanced functionality typically runs 14 to 20 weeks, depending on discovery depth and content readiness.",
    },
    {
      q: "Which website tier is right for my organization?",
      a: "Website Essentials fits smaller businesses or focused relaunches needing a professional online presence with up to 5 pages. Website Growth fits marketing-ready businesses that need stronger messaging and deeper content across up to 8 pages. Website Advanced fits growing organizations needing scalable platforms with advanced functionality across up to 12 pages.",
    },
    {
      q: "How does Website Development connect to your other services like Brand Strategy or AI Visibility?",
      a: "Brand Strategy defines the positioning and messaging the website communicates. AI Visibility ensures the site is discoverable across search and AI platforms. GTM Strategy defines the conversion paths the site supports, and Revenue Engineering connects the site's lead capture to CRM and reporting systems. Website Development is the digital home where all of these come together.",
      related: [
        { href: "/services/brand-strategy", label: "Explore Our Brand Strategy Services" },
        { href: "/services/ai-visibility", label: "Explore Our AI Visibility Services" },
        { href: "/services/gtm", label: "Explore Our Go-to-Market Strategy Services" },
        { href: "/services/revenue-engineering", label: "Explore Our Revenue Engineering Services" },
      ],
    },
    {
      q: "Is the website mobile responsive and accessible?",
      a: "Yes. Every Brand Iron website is built mobile-responsive by default, adapting to phone, tablet, and desktop viewports. Accessibility is also built in: semantic HTML structure, appropriate color contrast, keyboard navigation, and alt text on images. For organizations with specific compliance requirements, we scope those into the project explicitly.",
    },
    {
      q: "Who owns the website and content after launch?",
      a: "You do. Brand Iron builds websites you own outright: the code, content, design assets, and domain are all your property once the project is complete. We don't hold hosting hostage or lock you into a proprietary platform you can't leave. The only exceptions are third-party licenses (fonts, stock images, plugins), which we document clearly at handoff.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Services", url: "https://brandiron.net/services" },
          { name: "Website Development", url: "https://brandiron.net/services/website-development" },
        ]}
      />
      <ServiceSchema
        name="Website Development Service"
        serviceType="Website Development"
        description="Brand Iron builds strategic websites that connect brand, messaging, and AI visibility into one platform designed to make your business discoverable and trusted."
      />
      {solutions.map(s => (
        <ServiceSchema
          key={s.name}
          name={s.name}
          serviceType="Website Development"
          description={`${s.body} ${s.bestFor}.`}
        />
      ))}
      <HowToSchema
        name="Brand Iron's Website Development Process"
        description="How Brand Iron takes a website from discovery through launch and ongoing growth."
        steps={processSteps.map(p => ({ name: p.title, text: p.body }))}
      />

      {inquiryOpen && <WebsiteInquiryModal onClose={() => setInquiryOpen(false)} />}

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="wd-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/website-development/website-development-hero.mp4"
          aria-label="Computer chip embedded in a grassy hillside with glowing circuit lines, representing an AI visibility website foundation"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="wd-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="wd-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — crossfading headline, CTAs */}
            <div>
              <div className="hero-h1-anim" style={{ position: "relative", marginBottom: 20, height: headlineHeight ?? "clamp(79px, 11.6vw, 152px)" }}>
                {/* Off-screen copies of every variant, measured to size the box above so nothing jumps when the headline swaps */}
                <div ref={headlineMeasureRef} aria-hidden style={{ position: "absolute", inset: 0, visibility: "hidden", pointerEvents: "none" }}>
                  {HEADLINES.map(text => (
                    <div key={text} style={{
                      fontFamily: "var(--font-burford-inline), sans-serif",
                      fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                      textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                    }}>
                      {text}
                    </div>
                  ))}
                </div>
                <h1 style={{
                  fontFamily: "var(--font-burford-inline), sans-serif",
                  fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                  textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                  color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                  margin: 0,
                  opacity: headline.visible ? 1 : 0,
                  transform: headline.visible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity ${headline.fadeMs}ms ease, transform ${headline.fadeMs}ms ease`,
                }}>
                  {HEADLINES[headline.index]}
                </h1>
              </div>

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
                  Schedule a Website Strategy Session
                </Link>
                <Link href="#solutions" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 14,
                  background: "transparent", color: "#FFFFFF",
                  padding: "14px 30px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  Explore Website Solutions
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
                Your website is where buyers validate your credibility, AI platforms evaluate your authority, investors assess your business, and prospective customers decide whether to take the next step. Every search result, AI recommendation, social post, email campaign, and sales conversation eventually leads here. At Brand Iron, we don&apos;t just build websites. We create strategic digital experiences that connect your brand, messaging, user experience, AI Visibility, and business goals into one platform designed to help your organization become discoverable, trusted, and chosen.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .wd-hero-section { height: auto !important; min-height: 100vh; }
            .wd-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .wd-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* ── S2: WHY MOST BUSINESS WEBSITES UNDERPERFORM ─────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s2ViewRef} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Why Most Business Websites Underperform
          </h2>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            Most organizations don&apos;t struggle because they lack a website. They struggle because their website isn&apos;t connected to their business strategy.
          </p>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666", marginBottom: 16 }}>
            Many websites are built around pages instead of customer journeys. They lack clear messaging, intuitive navigation, strong calls to action, and the technical foundation needed for search visibility and AI discoverability.
          </p>
          <p className={`reveal${s2ViewInView ? ' visible' : ''}`} style={{ fontSize: 16, lineHeight: 1.8, color: "#666" }}>
            At Brand Iron, every website begins with understanding your organization first. Only then do we design the digital experience that supports it.
          </p>
        </div>
      </section>

      {/* ── S3: THE BRAND IRON WEBSITE FRAMEWORK ────────────── */}
      <section id="framework" style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        backgroundImage: "url('/images/shared/shared-wood-grain-texture.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Close-up of weathered gray wood grain texture with lichen speckles" style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.85)" }} />
        <CircuitOverlay />
        <div ref={s3ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s3ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Every Great Website Starts with Strategy.
            </h2>
            <p className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Our approach combines five connected pillars that ensure your website supports both today&apos;s users and tomorrow&apos;s growth.
            </p>
          </div>

          {/* 5 pillars */}
          <div className="wd-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 48 }}>
            {pillars.map(({ num, title, body, icon }) => (
              <div key={num}
                className={`reveal${s3ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#F9F8F6", border: "1px solid #EEEBE7", borderRadius: 14, padding: "28px 20px", overflow: "hidden", transition: "transform 0.25s, box-shadow 0.25s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(216,115,7,0.12)", border: "1px solid rgba(216,115,7,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontWeight: 900, fontSize: 28, color: "rgba(216,115,7,0.18)", lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 10, lineHeight: 1.25 }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.65, color: "#666", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div className={`reveal${s3ViewInView ? ' visible' : ''}`} style={{ textAlign: "center" }}>
            <button onClick={() => setInquiryOpen(true)} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
            >Request a Website Optimization Review</button>
          </div>
        </div>
      </section>

      {/* ── S4: HOW WE BUILD WEBSITES ────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px",
        background: "#0F1B2D",
      }}>
        <CircuitOverlay />
        <div ref={s4ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <h2 className={`section-heading reveal${s4ViewInView ? ' visible' : ''}`} style={{ color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))", marginBottom: 20, textAlign: "left" }}>
              How We Build Websites
            </h2>
            <p className={`reveal${s4ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
              Every project follows a structured process designed to reduce risk and create a smoother launch.
            </p>
          </div>

          {/* 8-step process grid */}
          <div className={`reveal${s4ViewInView ? ' visible' : ''} wd-process-grid`} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}>
            {processSteps.map(({ title, body, icon }, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <div key={title}
                  style={{
                    position: "relative", borderRadius: 14, padding: "26px 20px", overflow: "hidden",
                    background: isLast ? "#d87307" : "rgba(255,255,255,0.04)",
                    border: isLast ? "none" : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isLast ? "0 10px 32px rgba(216,115,7,0.3)" : "none",
                    transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s, background 0.25s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-5px)";
                    if (isLast) { el.style.boxShadow = "0 16px 44px rgba(216,115,7,0.45)"; }
                    else { el.style.background = "rgba(216,115,7,0.08)"; el.style.borderColor = "rgba(216,115,7,0.25)"; el.style.boxShadow = "0 14px 36px rgba(0,0,0,0.25)"; }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    if (isLast) { el.style.boxShadow = "0 10px 32px rgba(216,115,7,0.3)"; }
                    else { el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.boxShadow = "none"; }
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: isLast ? "rgba(255,255,255,0.35)" : "linear-gradient(to right, #d87307, rgba(216,115,7,0.2))" }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: isLast ? "rgba(255,255,255,0.95)" : "rgba(216,115,7,0.15)", border: isLast ? "none" : "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </div>
                    <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, color: isLast ? "rgba(255,255,255,0.85)" : "#d87307" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 15, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#FFFFFF", marginBottom: 8, lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12.5, lineHeight: 1.6, color: isLast ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)", margin: 0 }}>{body}</p>
                </div>
              );
            })}
          </div>

          <p className={`reveal${s4ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
            This collaborative approach ensures your website is aligned with your business goals before it goes live.
          </p>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .wd-process-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .wd-pillars-grid { grid-template-columns: repeat(3, 1fr) !important; }
            .wd-solutions-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .wd-success-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 520px) {
            .wd-process-grid, .wd-pillars-grid, .wd-solutions-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S5: CHOOSE THE RIGHT WEBSITE SOLUTION ───────────── */}
      <section id="solutions" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F3EF 100%)", padding: "120px 40px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(216,115,7,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(15,27,45,0.04) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div ref={s5ViewRef} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 64 }}>
            <h2 className={`section-heading reveal${s5ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              Every Organization Has Different Website Requirements
            </h2>
            <p className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Whether you need a focused website refresh, a marketing-ready platform, or a larger website with advanced functionality, Brand Iron provides solutions designed to meet your current needs while supporting future growth.
            </p>
          </div>

          {/* 3 solution cards */}
          <div className="wd-solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 64 }}>
            {solutions.map(({ name, body, bestFor, outcome, icon }) => (
              <div key={name}
                className={`reveal${s5ViewInView ? ' visible' : ''}`}
                style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", transition: "transform 0.25s, box-shadow 0.25s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 16px 44px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #d87307, rgba(216,115,7,0.3))" }} />
                <div style={{ padding: "36px 32px 28px", flex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{icon}</div>
                  <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", marginBottom: 14, lineHeight: 1.2 }}>{name}</h3>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666", marginBottom: 20 }}>{body}</p>
                </div>
                <div style={{ padding: "20px 32px 28px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Best For</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 16 }}>{bestFor}</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Primary Outcome</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.55, color: "#d87307", fontWeight: 600, margin: 0 }}>{outcome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32, textAlign: "center" }}>
              Compare Website Solutions
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#F3F0EC", color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Solution</th>
                    <th style={{ background: "#F3F0EC", color: "#555", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Best For</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left" }}>Primary Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Website Essentials", "Focused websites and relaunches", "Professional online presence"],
                    ["Website Growth", "Marketing-ready businesses", "Better user engagement and lead generation"],
                    ["Website Advanced", "Growing organizations", "Scalable digital platform with advanced capabilities"],
                  ].map(([name, bestFor, outcome], i) => (
                    <tr key={name}
                      style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF", transition: "background 0.2s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLTableRowElement).style.background = "rgba(216,115,7,0.06)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLTableRowElement).style.background = i % 2 === 0 ? "#F9F8F6" : "#FFFFFF")}
                    >
                      <td style={{ padding: "18px 24px", color: "#1a1a1a", fontWeight: 600, borderBottom: "1px solid #EEEBE7" }}>{name}</td>
                      <td style={{ padding: "18px 24px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{bestFor}</td>
                      <td style={{ padding: "18px 24px", color: "#1a1a1a", fontWeight: 500, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7", background: "rgba(216,115,7,0.04)" }}>{outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={`reveal${s5ViewInView ? ' visible' : ''}`} style={{ textAlign: "center" }}>
            <button onClick={() => setInquiryOpen(true)} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
            >Request Website Estimate</button>
          </div>
        </div>
      </section>

      {/* ── S6: WHAT SUCCESS LOOKS LIKE + FAQ ────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 48px",
        backgroundImage: "url('/images/shared/shared-outcomes-texture.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Hay bale field at sunset with warm golden light" style={{ position: "absolute", inset: 0, background: "rgba(248,242,232,0.93)" }} />
        <div ref={s6ViewRef} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 className={`section-heading reveal${s6ViewInView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20, textAlign: "left" }}>
              A Website That Becomes a Long-Term Business Asset
            </h2>
            <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "#555" }}>
              A successful website does more than launch. It becomes a long-term business asset. With Brand Iron, your website is designed to:
            </p>
          </div>

          <div className={`wd-success-grid reveal${s6ViewInView ? ' visible' : ''}`} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px 40px", marginBottom: 48, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 14, padding: "32px 40px" }}>
            {successPoints.map(point => (
              <div key={point} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{point}</span>
              </div>
            ))}
          </div>

          <p className={`reveal${s6ViewInView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, fontWeight: 700, lineHeight: 1.7, color: "#1a1a1a", textAlign: "center", marginBottom: 64 }}>
            A great website doesn&apos;t just represent your business. It helps grow it.
          </p>

          {/* FAQ Accordion */}
          <div className={`reveal${s6ViewInView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 32 }}>
              Common Questions About Website Development
            </h3>
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }),
          }}
        />
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={ctaViewRef} className={`reveal${ctaViewInView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shared/shared-grass-prairie-circuit-lines.jpg')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Grass prairie at sunset with a computer chip and glowing network lines woven through the field, representing a connected website technology foundation" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.55)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Build a Website Designed for Growth
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 48px" }}>
                Whether you&apos;re launching a new website or transforming an existing one, Brand Iron helps you create a digital experience that supports your brand, strengthens credibility, and drives measurable business outcomes.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600, fontSize: 15,
                  background: "#d87307", color: "#FFFFFF",
                  padding: "18px 44px", borderRadius: 6,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
                >
                  Schedule a Website Strategy Session
                </Link>
                <button onClick={() => setInquiryOpen(true)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#f0a860"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Request a Website Optimization Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
