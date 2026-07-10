"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const services = [
  { label: "Brand Strategy" },
  { label: "AI Visibility" },
  { label: "GTM Strategy" },
  { label: "Revenue Engineering" },
  { label: "Outbound Growth" },
  { label: "Website Development" },
  { label: "Capital Raise Support" },
];

const stats = [
  { icon: "🏢", num: "50+", label: "Brands Supported" },
  { icon: "💼", num: "150,000+", label: "Investor Network" },
  { icon: "⚡", num: "AI-First", label: "Growth Strategies" },
];

const problems = [
  { heading: "Buyers can't clearly differentiate your business.", body: "Without a compelling market position, even great companies become interchangeable." },
  { heading: "You're difficult to discover.", body: "Modern buyers search across AI platforms, search engines, communities, and industry resources. If you aren't present where decisions begin, opportunities disappear before they reach your website." },
  { heading: "Marketing creates activity, not enough pipeline.", body: "Campaigns launch. Content gets published. Reports get shared. But activity doesn't always translate into qualified opportunities." },
  { heading: "Sales and marketing aren't aligned.", body: "Disconnected messaging, inconsistent lead quality, and siloed data make growth harder than it should be." },
  { heading: "Technology adds complexity.", body: "CRM platforms, automation, analytics, and reporting should simplify growth, not create more work." },
];

const differentiators = [
  { num: "01", title: "Strategy Before Tactics", body: "Every engagement begins with understanding your business, market, and goals before recommending solutions. Strong execution starts with a clear strategy.", icon: "/images/icons/icon-lightbulb.svg" },
  { num: "02", title: "Connected Growth Systems", body: "Brand strategy, AI visibility, marketing, sales, technology, and revenue operations work best as one integrated system, not as disconnected initiatives.", icon: "/images/icons/icon-gear.svg" },
  { num: "03", title: "Human Expertise + AI Intelligence", body: "We use AI to accelerate research, uncover insights, and improve efficiency, while experienced strategists provide the critical thinking, creativity, and direction technology can't replace.", icon: "/images/icons/icon-lightning.svg" },
  { num: "04", title: "Outcomes Over Activity", body: "We don't measure success by campaigns launched or content published. We measure it by stronger positioning, better opportunities, and measurable business growth.", icon: "/images/icons/icon-trending.svg" },
];

const coreServices = [
  {
    title: "Brand Strategy", sub: "Build a Brand Buyers Remember",
    body: "Whether you're building a brand from the ground up or repositioning an established business, we help create brands that are clear, differentiated, and built for growth, from strategy and messaging to visual identity and brand systems.",
    solutions: ["Brand Strategy & Positioning", "Brand Identity & Rebranding", "Messaging Framework", "Visual Identity Systems"],
    cta: "Explore Brand Strategy", href: "/services/brand-strategy",
  },
  {
    title: "AI Visibility & Discoverability", sub: "Be Found Where Buyers Search",
    body: "Modern buyers use search engines, AI assistants, and digital channels to evaluate their options. We help your business increase visibility where buying decisions begin.",
    solutions: ["AI Visibility Diagnostic", "SEO & AI Foundation", "AI Authority Growth System", "AI Market Dominance Engine"],
    cta: "Explore AI Visibility", href: "/services/ai-visibility",
  },
  {
    title: "Go-to-Market Strategy", sub: "Turn Strategy Into Growth",
    body: "We align positioning, messaging, channels, and execution to help your organization launch with confidence and create predictable commercial momentum.",
    solutions: ["GTM Foundation", "Growth Engine", "Revenue Accelerator"],
    cta: "Explore GTM Strategy", href: "/services/gtm",
  },
  {
    title: "Revenue Engineering", sub: "Build Smarter Revenue Systems",
    body: "Growth is more predictable when marketing, sales, technology, and analytics work together. We help connect the systems that drive measurable business performance.",
    solutions: ["Marketing Automation", "CRM Optimization", "Revenue Operations", "Funnel Optimization"],
    cta: "Explore Revenue Engineering", href: "/services/revenue-engineering",
  },
  {
    title: "Outbound Growth", sub: "Create More Qualified Opportunities",
    body: "We design targeted outreach programs that help your team start meaningful conversations with the right prospects, not simply send more messages.",
    solutions: ["LinkedIn Outreach", "Email Outreach", "SDR Programs", "Appointment Setting"],
    cta: "Explore Outbound Growth", href: "/services/outbound-growth",
  },
  {
    title: "Website Development", sub: "Build a Website That Performs",
    body: "Your website should do more than look good. We create digital experiences designed for discoverability, conversion, and business growth.",
    solutions: ["Website Strategy", "UX/UI Design", "Website Development", "Conversion Optimization"],
    cta: "Explore Website Development", href: "/services/website-development",
  },
  {
    title: "Capital Raise Support", sub: "Build Investor Confidence",
    body: "We help founders prepare for investment with compelling pitch decks, fundraising strategy, and targeted investor outreach.",
    solutions: ["Capital Raise Decks", "150K+ Investor Database", "Investor Outreach", "Investor GTM Support"],
    cta: "Explore Capital Raise Support", href: "/services/capital-raise",
  },
];

const journeyStages = [
  { stage: "Discover", body: "Buyers begin by searching for answers, not vendors. Whether they're using search engines, AI assistants, industry publications, social platforms, or peer communities, your business needs to be present where discovery starts. If buyers can't find you, your growth never begins." },
  { stage: "Evaluate", body: "Once discovered, buyers compare their options. They assess your expertise, messaging, services, reputation, website, and how clearly you communicate the value you bring. Every interaction either reinforces confidence or creates doubt." },
  { stage: "Trust", body: "Trust is earned long before the first meeting. Thought leadership, customer success stories, reviews, strategic content, and a consistent brand presence all shape buying decisions. Organizations that invest in authority become the ones buyers remember, and recommend." },
  { stage: "Engage", body: "When buyers are ready to take the next step, the experience should feel effortless. Clear messaging, intuitive websites, effective outreach, and connected customer journeys help transform interest into meaningful conversations." },
  { stage: "Choose", body: "Winning new business isn't about being the loudest voice in the market. It's about becoming the most discoverable, credible, and trusted choice when buyers are ready to decide." },
];

const testimonials = [
  {
    quote: "The AI automation work Brand Iron did for us saved our team 20+ hours a week. More importantly, it gave us visibility into our pipeline that we never had before. I can't imagine operating without the systems they built.",
    name: "James Hartwell",
    title: "Founder, Hartwell Capital Group",
  },
  {
    quote: "Brand Iron's work has resulted in growth in the client's email list and an increase in their generated consignment leads. The team leads a seamless workflow by leading regular meetings and providing reliable, timely support. The client appreciates having their extensive knowledge at their disposal.",
    name: "Britt Douglas",
    title: "CEO, Worldwide Vintage Autos",
  },
  {
    quote: "Working with Brand Iron transformed how we think about revenue generation. They didn't just run campaigns, they built us a complete system that connects every part of our go-to-market motion. Pipeline is up 3X in six months.",
    name: "Sarah T.",
    title: "VP Marketing, TechScale Inc.",
  },
];

export default function Home() {
  const s2 = useInView();
  const s3 = useInView();
  const s3cards = useInView();
  const s3problems = useInView();
  const s4 = useInView();
  const s5 = useInView();
  const [activeService, setActiveService] = useState(1);
  const serviceCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const activeServiceRef = useRef(activeService);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const selectService = (i: number, behavior: ScrollBehavior = "smooth") => {
    setActiveService(i);
    activeServiceRef.current = i;
    const container = carouselRef.current;
    const card = serviceCardRefs.current[i];
    if (container && card) {
      container.scrollTo({ left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2, behavior });
    }
  };
  useEffect(() => {
    selectService(1, "instant");
  }, []);
  const startAutoSlide = () => {
    if (autoSlideRef.current) return;
    autoSlideRef.current = setInterval(() => {
      selectService((activeServiceRef.current + 1) % coreServices.length);
    }, 2600);
  };
  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };
  useEffect(() => () => stopAutoSlide(), []);
  const s6 = useInView();
  const s7 = useInView();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const s8 = useInView();

  return (
    <>
      {/* ── S1: HERO ─────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/Barn house.mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)" }} />

        {/* Centered headline */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{
            fontFamily: "'Burford Rustic Inline', sans-serif",
            fontSize: "clamp(42px, 7vw, 96px)", fontWeight: 400,
            textTransform: "uppercase", letterSpacing: "0.03em",
            color: "#FFFFFF",
            lineHeight: 1.0, marginBottom: 16,
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
          }}>
            Forging Brands.<br />Driving Revenue.
          </h1>
          <p style={{
            fontFamily: "'Burford Rustic Inline', sans-serif", fontWeight: 400,
            fontSize: "clamp(11px, 1.35vw, 16px)", letterSpacing: "0.04em",
            textTransform: "uppercase", whiteSpace: "nowrap",
            lineHeight: 1.6, color: "rgba(255,255,255,0.92)",
            maxWidth: "92vw", marginBottom: 28, textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}>
            Helping organizations become discoverable, trusted, and chosen in today&apos;s AI-driven buying landscape.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15,
              background: "#d87307", color: "#FFFFFF",
              padding: "15px 32px", borderRadius: 6,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Book a Strategy Session</Link>
            <Link href="/services" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15,
              background: "transparent", color: "#FFFFFF",
              padding: "15px 32px", border: "2px solid rgba(255,255,255,0.7)", borderRadius: 6,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(216,115,7,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >Explore Our Services</Link>
          </div>
        </div>

        {/* Service labels at bottom */}
        <div style={{ position: "absolute", bottom: 64, left: 0, right: 0, display: "flex", justifyContent: "center", padding: "0 32px 20px" }}>
        <div style={{ maxWidth: 1100, width: "100%", display: "flex", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "flex-start", gap: 36, overflowX: "auto" }}>
          {services.map(s => {
            const words = s.label.split(" ");
            const firstLine = words[0];
            const secondLine = words.slice(1).join(" ");
            return (
            <p key={s.label} style={{
              flex: "0 0 auto",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap", cursor: "default", textAlign: "center",
              lineHeight: 1.6,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#d87307")}
            onMouseLeave={e => (e.currentTarget.style.color = "#FFFFFF")}
            >{firstLine}<br />{secondLine}</p>
            );
          })}
        </div>
        </div>
      </section>

      {/* ── S2: TRUST BAR ────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "24px 24px 40px" }}>
        <div ref={s2.ref} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "start" }}>

          {/* B-icon logo mask — overlaps the hero seam above */}
          <div className={`reveal${s2.inView ? " visible" : ""}`} style={{ marginTop: -88, marginBottom: -70, perspective: 1200 }}>
            <div className="logo-3d-float">
              <img src="/images/BI-Logo-Mask-1-e1723263913795 (1).png" alt="Brand Iron" style={{ width: 340, height: "auto", display: "block", transition: "transform 0.35s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05) rotate(-3deg)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
              />
            </div>
          </div>

          {/* Text */}
          <div className={`reveal${s2.inView ? " visible" : ""}`}>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.25, marginBottom: 40 }}>
              Trusted by founders, executives, and growth-focused organizations.
            </h2>

            {/* Stats */}
            <div className="trust-stats-row" style={{ display: "flex", gap: "20px 24px" }}>
              {[
                { key: "briefcase", num: "50+", label: "Brands Supported" },
                { key: "trending", num: "150,000+", label: "Investor Network" },
                { key: "lightbulb", num: "AI-First", label: "Growth Strategies" },
                { key: "gear", num: "Brand Strategy", label: "GTM • Revenue Engineering" },
              ].map(({ key, num, label }, i) => {
                const statIcons: Record<string, ReactNode> = {
                  briefcase: <svg width="30" height="30" viewBox="0 0 48 48" fill="none"><path d="M38 22H10M38 22C39.0609 22 40.0783 22.4214 40.8284 23.1716C41.5786 23.9217 42 24.9391 42 26V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V26C6 24.9391 6.42143 23.9217 7.17157 23.1716C7.92172 22.4214 8.93913 22 10 22M38 22V18C38 16.9391 37.5786 15.9217 36.8284 15.1716C36.0783 14.4214 35.0609 14 34 14M10 22V18C10 16.9391 10.4214 15.9217 11.1716 15.1716C11.9217 14.4214 12.9391 14 14 14M34 14V10C34 8.93913 33.5786 7.92172 32.8284 7.17157C32.0783 6.42143 31.0609 6 30 6H18C16.9391 6 15.9217 6.42143 15.1716 7.17157C14.4214 7.92172 14 8.93913 14 10V14M34 14H14" stroke="#D87307" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  trending: <svg width="30" height="30" viewBox="0 0 32 32" fill="none"><path d="M17.3333 22.6668H28M28 22.6668V12.0002M28 22.6668L17.3333 12.0002L12 17.3335L4 9.3335" stroke="#D87307" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  lightbulb: <svg width="30" height="30" viewBox="0 0 48 48" fill="none"><path d="M19.326 34H28.672M24 6V8M36.728 11.272L35.314 12.686M42 24H40M8 24H6M12.686 12.686L11.272 11.272M16.928 31.072C15.5297 29.6734 14.5776 27.8915 14.192 25.9518C13.8063 24.0121 14.0045 22.0015 14.7615 20.1744C15.5184 18.3473 16.8001 16.7857 18.4446 15.687C20.089 14.5883 22.0223 14.0019 24 14.0019C25.9777 14.0019 27.911 14.5883 29.5554 15.687C31.1999 16.7857 32.4816 18.3473 33.2385 20.1744C33.9955 22.0015 34.1937 24.0121 33.808 25.9518C33.4224 27.8915 32.4703 29.6734 31.072 31.072L29.976 32.166C29.3494 32.7927 28.8524 33.5367 28.5134 34.3555C28.1743 35.1742 27.9999 36.0518 28 36.938V38C28 39.0609 27.5786 40.0783 26.8284 40.8284C26.0783 41.5786 25.0609 42 24 42C22.9391 42 21.9217 41.5786 21.1716 40.8284C20.4214 40.0783 20 39.0609 20 38V36.938C20 35.148 19.288 33.43 18.024 32.166L16.928 31.072Z" stroke="#D87307" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  gear: <svg width="30" height="30" viewBox="0 0 48 48" fill="none"><path d="M20.65 8.634C21.502 5.122 26.498 5.122 27.35 8.634C27.4778 9.1616 27.7284 9.65156 28.0814 10.064C28.4344 10.4764 28.8798 10.7997 29.3813 11.0075C29.8828 11.2153 30.4263 11.3017 30.9676 11.2597C31.5088 11.2178 32.0325 11.0486 32.496 10.766C35.582 8.886 39.116 12.418 37.236 15.506C36.9538 15.9693 36.7849 16.4927 36.743 17.0335C36.7012 17.5744 36.7875 18.1175 36.9951 18.6188C37.2026 19.12 37.5255 19.5652 37.9375 19.9181C38.3494 20.2711 38.8389 20.5218 39.366 20.65C42.878 21.502 42.878 26.498 39.366 27.35C38.8384 27.4778 38.3484 27.7284 37.936 28.0814C37.5236 28.4344 37.2003 28.8798 36.9925 29.3813C36.7847 29.8828 36.6983 30.4263 36.7403 30.9676C36.7822 31.5088 36.9514 32.0325 37.234 32.496C39.114 35.582 35.582 39.116 32.494 37.236C32.0307 36.9538 31.5073 36.7849 30.9665 36.743C30.4256 36.7012 29.8825 36.7875 29.3812 36.9951C28.88 37.2026 28.4348 37.5255 28.0819 37.9375C27.7289 38.3494 27.4782 38.8389 27.35 39.366C26.498 42.878 21.502 42.878 20.65 39.366C20.5222 38.8384 20.2716 38.3484 19.9186 37.936C19.5656 37.5236 19.1202 37.2003 18.6187 36.9925C18.1172 36.7847 17.5737 36.6983 17.0324 36.7403C16.4912 36.7822 15.9675 36.9514 15.504 37.234C12.418 39.114 8.884 35.582 10.764 32.494C11.0462 32.0307 11.2151 31.5073 11.257 30.9665C11.2988 30.4256 11.2125 29.8825 11.0049 29.3812C10.7974 28.88 10.4745 28.4348 10.0625 28.0819C9.65057 27.7289 9.16113 27.4782 8.634 27.35C5.122 26.498 5.122 21.502 8.634 20.65C9.1616 20.5222 9.65156 20.2716 10.064 19.9186C10.4764 19.5656 10.7997 19.1202 11.0075 18.6187C11.2153 18.1172 11.3017 17.5737 11.2597 17.0324C11.2178 16.4912 11.0486 15.9675 10.766 15.504C8.886 12.418 12.418 8.884 15.506 10.764C17.498 11.98 20.098 10.904 20.65 8.634Z" stroke="#D87307" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 24C30 25.5913 29.3679 27.1174 28.2426 28.2426C27.1174 29.3679 25.5913 30 24 30C22.4087 30 20.8826 29.3679 19.7574 28.2426C18.6321 27.1174 18 25.5913 18 24C18 22.4087 18.6321 20.8826 19.7574 19.7574C20.8826 18.6321 22.4087 18 24 18C25.5913 18 27.1174 18.6321 28.2426 19.7574C29.3679 20.8826 30 22.4087 30 24Z" stroke="#D87307" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                };
                return (
                <div key={label} className={`reveal${s2.inView ? " visible" : ""}`} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  transitionDelay: `${i * 0.08}s`, cursor: "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  (el.firstElementChild as HTMLDivElement).style.background = "#d87307";
                  (el.firstElementChild as HTMLDivElement).style.transform = "scale(1.08)";
                  (el.querySelectorAll("svg path") as NodeListOf<SVGPathElement>).forEach(p => p.setAttribute("stroke", "#FFFFFF"));
                  (el.lastElementChild!.firstElementChild as HTMLElement).style.color = "#d87307";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  (el.firstElementChild as HTMLDivElement).style.background = "#EFEDE7";
                  (el.firstElementChild as HTMLDivElement).style.transform = "scale(1)";
                  (el.querySelectorAll("svg path") as NodeListOf<SVGPathElement>).forEach(p => p.setAttribute("stroke", "#D87307"));
                  (el.lastElementChild!.firstElementChild as HTMLElement).style.color = "#1a1a1a";
                }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#EFEDE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.25s ease, transform 0.25s ease" }}>
                    {statIcons[key]}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 25, fontWeight: 900, color: "#1a1a1a", letterSpacing: "0.02em", lineHeight: 1.15, whiteSpace: "nowrap", transition: "color 0.25s ease" }}>{num}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#555", fontWeight: 500, marginTop: 4 }}>{label}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: BUYING JOURNEY ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "48px 0 56px" }}>
        <div ref={s3.ref} style={{ maxWidth: 1148, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center", marginBottom: 56 }}>
            {/* Text — left */}
            <div>
              <h2 className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 28 }}>
                The Buying Journey Has Changed.<br />Has Your Business?
              </h2>
              <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 18 }}>
                Today&apos;s buyers complete much of their decision-making before ever speaking with your team.
              </p>
              <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 18 }}>
                They search Google, ask AI assistants, compare competitors, read reviews, visit websites, explore LinkedIn, and look for proof that your organization is the right choice.
              </p>
              <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 36 }}>
                If your business isn&apos;t visible, credible, and consistent throughout that journey, you&apos;re often eliminated before the first conversation begins.
              </p>
              <p className={`reveal${s3.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a" }}>
                Modern growth isn&apos;t about showing up in one place.<br />
                It&apos;s about showing up everywhere trust is built.
              </p>
            </div>

            {/* Image — right */}
            <div className={`reveal${s3.inView ? " visible" : ""}`}>
              <img src="/images/BIRepresentationImage1Scale.jpeg" alt="" style={{ width: "100%", height: "auto", display: "block", boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }} />
            </div>
          </div>

        </div>

        {/* Journey cards — full-bleed, dark-to-light gradient panels */}
        <div ref={s3cards.ref} style={{ position: "relative", overflow: "hidden", display: "flex", marginBottom: 56 }}>
          <img src="/images/Dark-Mountains.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
          {journeyStages.map(({ stage, body }, i) => {
            const overlays = ["rgba(8,8,8,0.95)", "rgba(38,36,34,0.92)", "rgba(90,84,76,0.88)", "rgba(180,170,156,0.82)", "rgba(245,240,232,0.94)"];
            const textColor = i < 3 ? "#FFFFFF" : "#1a1a1a";
            const bodyColor = i < 3 ? "rgba(255,255,255,0.8)" : "#4a4a4a";
            const icons: Record<string, ReactNode> = {
              Discover: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FFFFFF" strokeWidth="2"/><path d="M21 21l-4.5-4.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>,
              Evaluate: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20v-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              Trust: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              Engage: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.5 8.5 0 1 1 21 11.5z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round"/></svg>,
              Choose: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="2"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            };
            return (
              <div key={stage} className={`reveal${s3cards.inView ? " visible" : ""}`} style={{
                position: "relative", flex: 1, background: overlays[i],
                padding: "48px 28px 64px", minHeight: 260,
                borderRight: i < journeyStages.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                borderTop: "3px solid transparent",
                transitionDelay: `${i * 0.08}s`,
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#d87307";
                const badge = e.currentTarget.querySelector(".journey-badge") as HTMLDivElement;
                if (badge) badge.style.transform = "scale(1.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                const badge = e.currentTarget.querySelector(".journey-badge") as HTMLDivElement;
                if (badge) badge.style.transform = "scale(1)";
              }}
              >
                <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 19, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: textColor, marginBottom: 14 }}>{stage}</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13.5, lineHeight: 1.7, color: bodyColor }}>{body}</p>
                <div className="journey-badge" style={{ position: "absolute", bottom: 24, left: 28, width: 40, height: 40, borderRadius: "50%", background: "#d87307", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s ease" }}>
                  {icons[stage]}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ maxWidth: 1148, margin: "0 auto", padding: "0 24px" }}>
          {/* Closing statement */}
          <div className={`reveal${s3cards.inView ? " visible" : ""}`} style={{ textAlign: "left", paddingTop: 32 }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 17px)", fontWeight: 500, color: "#777", marginBottom: 10 }}>
              Organizations that win today aren&apos;t simply louder.
            </p>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.2, marginBottom: 28 }}>
              They&apos;re easier to find, easier to trust, and easier to choose.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 20 }}>
              Wondering how your business performs across today&apos;s buying journey?
            </p>
            <Link href="/ai-visibility-audit" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 6,
              display: "inline-block", transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Get My Free AI Visibility Audit</Link>
          </div>
        </div>
      </section>

      {/* ── S3B: YOU'RE THE COMPETITION ──────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 340 }}>
        <img src="/images/You-are-the-competition-bg-png.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 340, padding: "44px 24px" }}>
          {/* White card with corner brackets */}
          <div style={{
            background: "#FFFFFF", maxWidth: 720, width: "100%",
            padding: "48px 56px", position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
          }}
          >
            {/* Corner brackets */}
            <img src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 8, right: 8, width: 42, height: 42 }} />
            <img src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 8, left: 8, width: 42, height: 42 }} />

            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.1, marginBottom: 20 }}>
              Why Great Companies<br />Still Struggle to Grow
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#444" }}>
              Many organizations don&apos;t have a product problem. They don&apos;t have a talent problem. They don&apos;t even have a marketing problem. They have an alignment problem. Brand strategy, marketing, sales, technology, and operations often evolve independently, each with its own goals, tools, and priorities. While every team works hard, the customer experiences a disconnected journey. The result is slower growth, missed opportunities, and increasing costs to acquire and retain customers.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginTop: 28, marginBottom: 8 }}>
              Not sure where your growth is breaking down?
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#444", marginBottom: 24 }}>
              We&apos;ll identify your biggest growth bottlenecks and provide practical recommendations.
            </p>
            <Link href="/gtm-audit" style={{
              display: "inline-block",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 32px", borderRadius: 6,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Request a GTM Growth Review</Link>
          </div>
        </div>
      </section>

      {/* ── S3C: PROBLEM CARDS ───────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 24px", backgroundImage: "url('/images/bg-saddle-rope.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,240,232,0.93)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/Dark-Mountains.webp')", backgroundSize: "60% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", opacity: 0.06 }} />
        <div ref={s3problems.ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 32, textAlign: "left" }}>Common Growth Challenges</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {problems.map(({ heading, body }, i) => (
              <div key={i} className="growth-card" style={{
                background: "#FFFFFF", padding: "34px 24px 28px", position: "relative",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                borderBottom: "4px solid transparent",
              }}
              >
                <img className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 6, right: 6, width: 28, height: 28, opacity: 0 }} />
                <img className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 6, left: 6, width: 28, height: 28, opacity: 0 }} />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.4 }}>{heading}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div style={{ textAlign: "left", marginTop: 48 }}>
            <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a" }}>
              Growth shouldn&apos;t depend on disconnected tactics.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: "#1a1a1a", fontWeight: 600, marginTop: 6 }}>
              It should be built on connected strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: BRAND IRON DIFFERENCE ────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Grit & Gumption banner */}
        <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
          <img src="/images/Grit-and-Gumption-Banner.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", textAlign: "left", padding: "0 24px", maxWidth: 1132, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(32px, 6vw, 80px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>
              Brand Iron
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "clamp(11px, 1.2vw, 14px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
              Human Crafted. AI Powered. Revenue Driven.
            </p>
          </div>
        </div>

        {/* Cards on cream bg with mountain watermark */}
        <div style={{ position: "relative", background: "#F5F0E8", padding: "56px 24px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/Dark-Mountains.webp')", backgroundSize: "55% auto", backgroundPosition: "center center", backgroundRepeat: "no-repeat", opacity: 0.07 }} />
          <div ref={s4.ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

            <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center", marginBottom: 56 }}>
              {/* Text — left */}
              <div>
                <h2 className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 28 }}>What Makes Brand Iron Different</h2>
                <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 18 }}>
                  AI is transforming how businesses grow, but technology alone has never been a strategy.
                </p>
                <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 36 }}>
                  At Brand Iron, we combine human expertise with AI-assisted intelligence to help organizations make better decisions, move faster, and execute with greater precision. AI accelerates the work; experienced strategists provide the judgment, creativity, and business insight that drive meaningful outcomes.
                </p>
                <p className={`reveal${s4.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a" }}>
                  Because sustainable growth isn&apos;t automated.<br />
                  It&apos;s engineered.
                </p>
              </div>

              {/* Image — right */}
              <div className={`reveal${s4.inView ? " visible" : ""}`}>
                <img src="/images/BIPresentationImage-3-e1725442860394-960x551.jpeg" alt="" style={{ width: "100%", height: "auto", display: "block", boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }} />
              </div>
            </div>

            {/* 4 cards — icon + hover lift */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 40 }}>
              {differentiators.map(({ num, title, body, icon }, i) => (
                <div key={num} className={`reveal${s4.inView ? " visible" : ""}`} style={{
                  background: "#FFFFFF", padding: "32px 24px", position: "relative",
                  border: "1px solid #ece5d8",
                  transitionDelay: `${i * 0.07}s`, transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 36px rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#d87307";
                  (e.currentTarget.querySelector(".diff-icon") as HTMLImageElement).style.transform = "scale(1.15)";
                  e.currentTarget.querySelectorAll<HTMLImageElement>(".corner-bracket").forEach(img => (img.style.opacity = "1"));
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#ece5d8";
                  (e.currentTarget.querySelector(".diff-icon") as HTMLImageElement).style.transform = "scale(1)";
                  e.currentTarget.querySelectorAll<HTMLImageElement>(".corner-bracket").forEach(img => (img.style.opacity = "0"));
                }}
                >
                  <img className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 6, right: 6, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease" }} />
                  <img className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 6, left: 6, width: 26, height: 26, opacity: 0, transition: "opacity 0.25s ease" }} />
                  <img className="diff-icon" src={icon} alt="" style={{ width: 34, height: 34, marginBottom: 18, transition: "transform 0.3s ease" }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#d87307", marginBottom: 8 }}>{num}</p>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 12, lineHeight: 1.4 }}>{title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.75, color: "#666" }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Commitment + closing */}
            <div className={`reveal${s4.inView ? " visible" : ""}`} style={{ textAlign: "left", margin: "48px 0 0" }}>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", lineHeight: 1.3, marginBottom: 20 }}>
                Every recommendation is guided by one question: will this create measurable value for your business?
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", margin: "0 0 32px" }}>
                If the answer is no, we won&apos;t recommend it. That means no unnecessary complexity, no one-size-fits-all playbooks, and no chasing vanity metrics. Just practical strategies designed to help your organization grow with confidence.
              </p>
              <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", color: "#1a1a1a", lineHeight: 1.3, marginBottom: 18 }}>
                Modern growth requires more than marketing.
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", margin: "0 0 18px" }}>
                It requires a partner who understands how brand strategy, discoverability, demand generation, technology, and revenue operations work together to create competitive advantage.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 28 }}>
                That&apos;s the role Brand Iron was built to play.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", marginBottom: 20 }}>
                See How We Engineer Growth
              </p>
              <Link href="/case-studies" style={{
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.14em", textTransform: "uppercase",
                background: "#d87307", color: "#FFFFFF",
                padding: "14px 32px", borderRadius: 6,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
              >View Our Framework</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5: SERVICES ─────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "56px 24px 0" }}>
        <div ref={s5.ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: 56 }}>
            <h2 className={`reveal${s5.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", lineHeight: 1.25, marginBottom: 16 }}>
              Solutions That Move Businesses Forward
            </h2>
            <p className={`reveal${s5.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", margin: "0 0 10px" }}>
              Every business faces unique growth challenges, from strengthening its brand and increasing visibility to generating demand, optimizing revenue, or raising capital. Rather than delivering disconnected services, Brand Iron brings these capabilities together into one connected growth system designed to help organizations become discoverable, trusted, and chosen.
            </p>
          </div>

          <div
            style={{ position: "relative", marginBottom: 40 }}
            onMouseEnter={startAutoSlide}
            onMouseLeave={stopAutoSlide}
          >
            <button
              aria-label="Previous solution"
              onClick={() => selectService((activeService - 1 + coreServices.length) % coreServices.length)}
              className="services-carousel-arrow"
              style={{
                position: "absolute", left: -8, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF",
                border: "1px solid #ddd", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#d87307")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <div ref={carouselRef} className="services-carousel" style={{
              display: "flex", gap: 24, overflowX: "auto",
              scrollSnapType: "x proximity", scrollBehavior: "smooth",
              padding: "8px calc(50% - 160px)",
            }}>
              {coreServices.map(({ title, sub, body, solutions, cta, href }, i) => {
                return (
                <div
                  key={title}
                  ref={el => { serviceCardRefs.current[i] = el; }}
                  className={`reveal${s5.inView ? " visible" : ""}`}
                  onClick={() => selectService(i)}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #ECE5D8",
                    borderRadius: 18, padding: "30px 26px", position: "relative",
                    display: "flex", flexDirection: "column",
                    flex: "0 0 320px", width: 320, scrollSnapAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                  }}
                  >
                    <div style={{ width: 40, height: 4, borderRadius: 2, background: "#d87307", marginBottom: 16 }} />
                    <h3 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.06em", color: "#1a1a1a", marginBottom: 5 }}>{title}</h3>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#d87307", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{sub}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.65, color: "#555", marginBottom: 14 }}>{body}</p>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6, marginBottom: 18 }}>
                      {solutions.map(s => (
                        <span key={s} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: "#6b5a3e", background: "#F2ECDF", padding: "5px 11px", borderRadius: 20 }}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link href={href} style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      background: "#d87307", color: "#FFFFFF",
                      padding: "13px 20px", borderRadius: 6,
                      marginTop: "auto",
                      transition: "background 0.2s",
                    }}
                    onClick={e => e.stopPropagation()}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#c46305";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>{cta}</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2, width: 18, background: "currentColor", transform: "scaleX(0.3)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="5" height="10" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                </div>
                );
              })}
            </div>

            <button
              aria-label="Next solution"
              onClick={() => selectService((activeService + 1) % coreServices.length)}
              className="services-carousel-arrow"
              style={{
                position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", zIndex: 2,
                width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF",
                border: "1px solid #ddd", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)", transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#d87307")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Dot pagination */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 32 }}>
              {coreServices.map((s, i) => (
                <button
                  key={s.title}
                  aria-label={`Go to ${s.title}`}
                  onClick={() => selectService(i)}
                  style={{
                    width: i === activeService ? 24 : 8, height: 8, borderRadius: 4,
                    background: i === activeService ? "#d87307" : "#ddd",
                    border: "none", cursor: "pointer", transition: "width 0.2s, background 0.2s", padding: 0,
                  }}
                  onMouseEnter={e => { if (i !== activeService) (e.currentTarget as HTMLButtonElement).style.background = "#d87307"; }}
                  onMouseLeave={e => { if (i !== activeService) (e.currentTarget as HTMLButtonElement).style.background = "#ddd"; }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Closing — full-bleed background */}
        <div className={`reveal${s5.inView ? " visible" : ""}`} style={{
          position: "relative", overflow: "hidden",
          width: "100vw", marginLeft: "calc(50% - 50vw)",
          backgroundImage: "url('/images/bg-outcomes.png')", backgroundSize: "cover", backgroundPosition: "center",
        }}>
          <div style={{ maxWidth: 1148, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "left", padding: "40px 48px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.6vw, 17px)", fontWeight: 500, color: "#1a1a1a", marginBottom: 10 }}>
                Each solution delivers value on its own,
              </p>
              <p style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(22px, 3.2vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.35, color: "#1a1a1a", margin: "0 0 22px" }}>
                but the greatest impact comes when they&apos;re connected through a unified growth strategy.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.8, color: "#1a1a1a", margin: "0" }}>
                Whether you&apos;re building your brand, increasing visibility, generating demand, or preparing for investment, Brand Iron helps ensure every initiative contributes to measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: STRATEGIC PARTNER ────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 24px" }}>
        <video
          src="/Animate_this_image_and_these_d (1).mp4"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
          onLoadedMetadata={e => { e.currentTarget.currentTime = 1; }}
          onTimeUpdate={e => { if (e.currentTarget.currentTime >= 5) e.currentTarget.currentTime = 1; }}
        />
        <div ref={s6.ref} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", textAlign: "left" }}>
          <h2 className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.25, marginBottom: 12, textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}>
            Growth Is a Journey.<br />You Shouldn&apos;t Have to Navigate It Alone.
          </h2>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.95)", marginBottom: 24, textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
            We Build Alongside Your Team
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.85, color: "#FFFFFF", margin: "0 0 14px", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
            Growth is a team effort. That&apos;s why we work as an extension of your leadership team, helping you make smarter decisions, focus on the right opportunities, and build systems that drive long-term growth. Our success is measured by yours. We&apos;re here to help you build what&apos;s next.
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.85, color: "#FFFFFF", margin: "0 0 14px", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
            Whether you&apos;re defining your brand, entering a new market, improving AI visibility, scaling revenue operations, or preparing for your next stage of growth, Brand Iron is ready to help you move forward with clarity, confidence, and purpose.
          </p>
          <p className={`reveal${s6.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.85, color: "#FFFFFF", fontWeight: 600, fontStyle: "italic", margin: "0 0 40px", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
            Every successful growth story begins with a conversation. Let&apos;s start yours.
          </p>
          <div className={`reveal${s6.inView ? " visible" : ""}`} style={{ display: "flex", gap: 16, justifyContent: "flex-start", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Book a Strategy Session</Link>
          </div>
        </div>
      </section>

      {/* ── S7: TESTIMONIALS ─────────────────────────────── */}
      <section style={{ background: "#F7F4EE", padding: "88px 24px" }}>
        <div ref={s7.ref} style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p className={`reveal${s7.inView ? " visible" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 32 }}>
            What Our Clients Say
          </p>
          <div className={`reveal${s7.inView ? " visible" : ""}`} style={{
            background: "#FFFFFF", borderRadius: 20, padding: "52px 56px", position: "relative",
            boxShadow: "0 24px 60px rgba(26,20,10,0.08)", border: "1px solid rgba(26,20,10,0.04)",
            transition: "transform 0.35s ease, box-shadow 0.35s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 32px 72px rgba(26,20,10,0.14)";
            e.currentTarget.querySelectorAll<HTMLImageElement>(".corner-bracket").forEach(img => (img.style.opacity = "1"));
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(26,20,10,0.08)";
            e.currentTarget.querySelectorAll<HTMLImageElement>(".corner-bracket").forEach(img => (img.style.opacity = "0"));
          }}
          >
            <img className="corner-bracket" src="/images/icons/border-corner-2.svg" alt="" style={{ position: "absolute", top: 18, right: 18, width: 40, height: 40, opacity: 0, transition: "opacity 0.25s ease" }} />
            <img className="corner-bracket" src="/images/icons/border-corner-1.svg" alt="" style={{ position: "absolute", bottom: 18, left: 18, width: 40, height: 40, opacity: 0, transition: "opacity 0.25s ease" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 24 }}>
              {testimonials[testimonialIndex].title}
            </p>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "0.06em", textTransform: "uppercase", color: "#1a1a1a", marginBottom: 16 }}>
              {testimonials[testimonialIndex].name}
            </h3>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28, color: "#d87307", fontSize: 22 }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "#444" }}>
              &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36 }}>
            <button
              aria-label="Previous testimonial"
              onClick={() => setTestimonialIndex(i => (i - 1 + testimonials.length) % testimonials.length)}
              style={{
                width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF",
                border: "1px solid #ddd", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#d87307")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setTestimonialIndex(i)}
                  style={{
                    width: i === testimonialIndex ? 24 : 8, height: 8, borderRadius: 4,
                    background: i === testimonialIndex ? "#d87307" : "#ddd",
                    border: "none", cursor: "pointer", transition: "width 0.2s, background 0.2s", padding: 0,
                  }}
                  onMouseEnter={e => { if (i !== testimonialIndex) (e.currentTarget as HTMLButtonElement).style.background = "#d87307"; }}
                  onMouseLeave={e => { if (i !== testimonialIndex) (e.currentTarget as HTMLButtonElement).style.background = "#ddd"; }}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setTestimonialIndex(i => (i + 1) % testimonials.length)}
              style={{
                width: 40, height: 40, borderRadius: "50%", background: "#FFFFFF",
                border: "1px solid #ddd", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#d87307")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* ── S8: FINAL CTA ────────────────────────────────── */}
      <section style={{ background: "#F0EEEA", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div ref={s8.ref} className={`reveal${s8.inView ? " visible" : ""}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/shutterstock_2489980613-scaled.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.5)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "'Burford Rustic Black', sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Get Found.<br />Get Trusted.<br />Generate Revenue.
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 48px" }}>
                The strongest brands don&apos;t leave growth to chance. They build it with intention.
              </p>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d87307", marginBottom: 28 }}>
                  Choose Your Next Step
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Let&apos;s discuss your business goals, current challenges, and opportunities for growth. Together, we&apos;ll identify where your greatest opportunities lie and outline practical next steps.
                    </p>
                    <Link href="/contact" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid #d87307", paddingBottom: 6,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Book a Strategy Session</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                      Learn how Brand Strategy, AI Visibility, Go-to-Market Strategy, Revenue Engineering, Outbound Growth, Website Development, and Capital Raise Support work together to create measurable business outcomes.
                    </p>
                    <Link href="/services" style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 17,
                      letterSpacing: "0.02em", textTransform: "uppercase",
                      color: "#FFFFFF", borderBottom: "3px solid rgba(255,255,255,0.5)", paddingBottom: 6,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#d87307";
                      e.currentTarget.style.borderBottomColor = "#d87307";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.5)";
                      const tail = e.currentTarget.querySelector<HTMLElement>(".cta-arrow-tail");
                      if (tail) tail.style.transform = "scaleX(0.3)";
                    }}
                    >
                      <span>Explore Our Solutions</span>
                      <span className="cta-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                        <span className="cta-arrow-tail" style={{ display: "inline-block", height: 2.4, width: 24, background: "currentColor", transform: "scaleX(0.35)", transformOrigin: "right center", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }} />
                        <svg width="6" height="12" viewBox="0 6 6 12" fill="none" style={{ flexShrink: 0, display: "block" }}><path d="M0 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
