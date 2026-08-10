"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import AuditModal from "@/components/AuditModal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import HowToSchema from "@/components/HowToSchema";

function useInView(threshold = 0.12) {
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

export default function AIVisibilityPage() {
  const [auditOpen, setAuditOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("openAudit")) setAuditOpen(true);
  }, []);

  const s2View = useInView();
  const s3View = useInView();
  const s4View = useInView();
  const s5View = useInView();
  const s6View = useInView();
  const ctaView = useInView();

  const tiers = [
    {
      number: "Tier 0",
      name: "AI Visibility Diagnostic",
      tagline: "Understand Where You Stand",
      description: "Discover how search engines and AI platforms currently view your business, identify visibility gaps, and receive a clear roadmap for improvement.",
      bestFor: "Organizations exploring AI Visibility or evaluating their current digital presence.",
      outcome: "Visibility Clarity",
      engagement: "One-Time Audit",
      focus: "Diagnose",
      href: "/contact",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="16" cy="16" r="10" stroke="#d87307" strokeWidth="2"/>
          <path d="M24 24l7 7" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="4" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 1",
      name: "SEO & AI Foundation",
      tagline: "Build a Strong Foundation",
      description: "Establish the technical, structural, and semantic foundation required for long-term visibility across search engines and AI-powered search experiences.",
      bestFor: "Organizations ready to improve their website's SEO, AI readiness, and technical performance.",
      outcome: "Strong SEO & AI Foundation",
      engagement: "One-Time Implementation",
      focus: "Build",
      href: "/contact",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="20" width="8" height="12" rx="1" stroke="#d87307" strokeWidth="2"/>
          <rect x="14" y="12" width="8" height="20" rx="1" stroke="#d87307" strokeWidth="2"/>
          <rect x="24" y="4" width="8" height="28" rx="1" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 2",
      name: "AI Authority Growth System",
      tagline: "Grow Your Authority",
      description: "Expand your digital footprint through strategic content, authority building, citations, reviews, and AI-focused optimization that strengthens trust and recommendations.",
      bestFor: "Organizations focused on increasing rankings, authority, and qualified demand.",
      outcome: "Greater Authority & AI Recommendations",
      engagement: "Monthly Growth Program",
      focus: "Grow",
      href: "/contact",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4 28l8-10 6 4 10-14 4-4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="8" r="4" stroke="#d87307" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      number: "Tier 3",
      name: "AI Market Dominance Engine",
      tagline: "Lead Your Market",
      description: "Build category leadership through executive authority, advanced AI optimization, reputation management, and continuous strategic growth.",
      bestFor: "Organizations committed to becoming the trusted leader in their industry.",
      outcome: "Market Leadership & AI Recommendation Dominance",
      engagement: "Strategic Partnership",
      focus: "Lead",
      href: "/contact",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4l3.6 7.6 8.4 1.1-6.1 5.9 1.5 8.3L18 23l-7.4 3.9 1.5-8.3-6.1-5.9 8.4-1.1z" stroke="#d87307" strokeWidth="2" strokeLinejoin="round" fill="rgba(216,115,7,0.12)"/>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "What is AI Visibility and why does it matter for my business?",
      a: "AI Visibility is how discoverable, trusted, and recommended your business is across AI-powered search experiences, including ChatGPT, Gemini, Claude, and Perplexity, as well as Google, voice assistants, and industry platforms. Buyers now research through AI conversations long before contacting a company. If AI platforms don't recognize your business as a trusted source, competitors become the answer buyers see first.",
    },
    {
      q: "How is AI Visibility different from traditional SEO?",
      a: "Traditional SEO focuses on ranking higher for keywords on Google. AI Visibility focuses on being understood, trusted, and recommended across AI platforms and search engines. SEO measures clicks; AI Visibility measures discoverability, authority, citations, and qualified demand. SEO is still essential, but it's now one layer inside a broader visibility strategy.",
    },
    {
      q: "Which AI platforms and search engines does Brand Iron optimize for?",
      a: "Brand Iron optimizes for the full ecosystem where modern buyers research: Google search, ChatGPT, Gemini, Claude, Perplexity, and voice assistants. We also account for indirect discovery through LinkedIn, industry reviews, and community platforms that AI systems cite as sources, integrating SEO, AEO, GEO, technical optimization, entity development, and authority building into one connected approach.",
    },
    {
      q: "What's the difference between SEO, AEO, and GEO?",
      a: "SEO (Search Engine Optimization) helps your business rank on Google and other traditional search engines. AEO (Answer Engine Optimization) helps AI answer engines like ChatGPT, Perplexity, and Google AI Overviews retrieve and cite your content directly. GEO (Generative Engine Optimization) focuses on how generative AI systems synthesize and recommend your business within their responses. Brand Iron integrates all three into a single AI Visibility strategy.",
    },
    {
      q: "How do you measure AI Visibility results?",
      a: "AI Visibility is measured across four dimensions: discoverability (does AI find your business?), citations (does AI reference your content?), authority (do AI systems treat you as credible?), and qualified demand (are AI recommendations driving real inquiries?). Traditional metrics like keyword rankings still matter, but the primary indicators are how often your business appears in AI-generated answers.",
    },
    {
      q: "What is included in the AI Visibility Diagnostic?",
      a: "The AI Visibility Diagnostic is a one-time audit that shows how search engines and AI platforms currently see your business. It identifies visibility gaps, technical issues, entity recognition problems, content weaknesses, and missed opportunities across Google, ChatGPT, Gemini, Claude, and Perplexity, with a clear roadmap for improvement and prioritized recommendations.",
    },
    {
      q: "How long does it take to see AI Visibility improvements?",
      a: "Technical foundation improvements from Tier 1 often show measurable results within 30 to 60 days as search engines and AI systems re-index optimized content. Authority building from Tier 2 typically produces meaningful AI citation lift within 90 to 180 days. Market leadership through Tier 3 is a longer commitment, 12 months or more.",
    },
    {
      q: "Which of the four AI Visibility service tiers is right for my business?",
      a: "Start with Tier 0 (AI Visibility Diagnostic) if you're unsure how visible your business currently is. Move to Tier 1 (SEO & AI Foundation) if your website needs technical and structural improvements. Tier 2 (AI Authority Growth System) is for organizations ready to actively build authority and AI recommendations. Tier 3 (AI Market Dominance Engine) is for businesses committed to becoming the recognized category leader.",
    },
    {
      q: "What is entity optimization and why does it matter for AI Visibility?",
      a: "Entity optimization helps AI systems and search engines recognize your business as a distinct, well-defined entity with clear relationships to its industry, people, services, and expertise. AI platforms don't just read pages; they map entities and how those entities relate to concepts and other entities. Entity optimization is a core pillar of the Tier 1 SEO & AI Foundation work.",
    },
    {
      q: "How does authority building improve AI recommendations?",
      a: "AI platforms recommend businesses they trust, and trust comes from authority signals accumulated across the web. Authority building strengthens digital PR, third-party citations, reviews, expert quotes, backlinks from credible sources, and consistent presence in industry conversations. The AI Authority Growth System is designed specifically to build these signals systematically.",
    },
    {
      q: "Can Brand Iron work alongside our existing SEO agency or marketing team?",
      a: "Yes. Many engagements are structured as strategic AI Visibility partnerships that complement existing SEO, content, or marketing teams rather than replace them. Brand Iron brings the AI Visibility framework, AEO, GEO, entity development, and authority building, while your internal team or agency continues executing traditional channels.",
    },
    {
      q: "What kinds of businesses see the biggest AI Visibility gains?",
      a: "Businesses in complex or consultative categories, including B2B services, professional services, enterprise software, healthcare, and financial services, tend to see the most dramatic gains because their buyers rely heavily on research and validation before purchase. Newer challenger brands often outperform larger incumbents because they can move faster on structured content and entity development.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandiron.net" },
          { name: "Services", url: "https://brandiron.net/services" },
          { name: "AI Visibility & Discoverability", url: "https://brandiron.net/services/ai-visibility" },
        ]}
      />
      <ServiceSchema
        name="AI Visibility Service"
        serviceType="AI Engine Optimization (AEO)"
        description="Our AI Visibility service ensures your business becomes discoverable, trusted, and chosen in today's AI-driven buying landscape."
      />
      {tiers.map(t => (
        <ServiceSchema
          key={t.number}
          name={t.name}
          serviceType="AI Engine Optimization (AEO)"
          description={`${t.tagline}. ${t.description}`}
        />
      ))}
      <HowToSchema
        name="Brand Iron's AI Visibility Framework"
        description="How Brand Iron improves discoverability across search engines and AI-powered search experiences."
        steps={[
          { name: "Diagnose", text: "Understand how search engines and AI platforms currently see your business, and identify visibility gaps, technical issues, and missed opportunities." },
          { name: "Build", text: "Strengthen your SEO, technical foundation, structured data, and entity optimization to create the infrastructure AI and search engines rely on." },
          { name: "Grow", text: "Expand your authority through strategic content, citations, digital PR, reviews, and brand mentions to increase trust, relevance, and AI recommendations." },
          { name: "Dominate", text: "Continuously optimize your digital presence to become a recognized authority in your market and lead the conversation." },
        ]}
      />

      {auditOpen && <AuditModal onClose={() => setAuditOpen(false)} />}

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="ai-hero-section" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <video
          src="/videos/ai-visibility/ai-visibility-hero.mp4"
          aria-label="Close-up of a horse's mane blending into glowing circuit-line branches, representing AI search optimization and discoverability"
          autoPlay muted loop playsInline preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,16,36,0.35) 0%, rgba(8,16,36,0.25) 45%, rgba(8,16,36,0.65) 100%)" }} />

        <div className="ai-hero-wrap" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "88px 24px 24px" }}>
          <div className="ai-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>

            {/* LEFT — headline, hook, CTAs */}
            <div>
              <h1 className="hero-h1-anim" style={{
                fontFamily: "var(--font-burford-inline), sans-serif",
                fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 58px)",
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92,
                color: "#FFFFFF", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.4))",
                marginBottom: 20,
              }}>
                Helping Brands Become Discoverable, Trusted, and Recommended Across Search and AI.
              </h1>

              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.5, marginBottom: 20, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                Discover how visible your business is across Google, ChatGPT, Gemini, Claude, Perplexity, and other AI-powered search experiences.
              </p>

              <div className="hero-btns-anim" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                {/* Primary CTA — books a consultation via the Contact page; the self-serve audit form lives in AuditModal above */}
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "15px 32px", borderRadius: 6,
                  background: "#d87307", border: "2px solid #d87307",
                  color: "#FFFFFF", cursor: "pointer", textDecoration: "none",
                  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  transition: "background 0.2s, transform 0.15s",
                  boxShadow: "0 4px 20px rgba(216,115,7,0.35)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8691f"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                    <path d="M16.5 16.5l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 11h6M11 8v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  Schedule an AI Visibility Assessment
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
                Search behavior has evolved. Today&apos;s buyers research through ChatGPT, Gemini, Claude, Perplexity, voice assistants, industry communities, and search engines long before contacting a company. If your business isn&apos;t visible where those decisions begin, you&apos;re missing opportunities before sales can engage.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
                Brand Iron helps organizations improve AI Visibility by integrating SEO, AEO, GEO, technical optimization, entity development, authority building, and strategic content into one connected visibility strategy.
              </p>

              <p style={{ fontSize: "clamp(13px, 1.15vw, 15px)", lineHeight: 1.65, color: "#FFFFFF", fontWeight: 700 }}>
                The brands that earn visibility today become the brands AI recommends tomorrow.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ai-hero-section { height: auto !important; min-height: 100vh; }
            .ai-hero-wrap { position: relative !important; padding: 140px 20px 48px !important; }
            .ai-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .ai-stages-grid, .ai-tiers-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .ai-solution-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .ai-stages-grid, .ai-tiers-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── S2: SEARCH HAS CHANGED ───────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "120px 40px 0" }}>
        <div ref={s2View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s2View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
            Search Has Changed. Visibility Has Changed with It.
          </h2>

          <div style={{ marginBottom: 80 }}>
            <p className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ fontSize: 18, lineHeight: 1.8, color: "#555" }}>
              Search has evolved beyond Google. While SEO remains essential, today&apos;s buyers ask AI platforms and search engines for trusted answers long before speaking with a company. Whether they&apos;re using ChatGPT, Gemini, Claude, Perplexity, Google, or industry communities, buying decisions now happen across multiple channels. Your business needs to be visible wherever those conversations begin.
            </p>
          </div>

          {/* Then vs Now */}
          <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{ marginBottom: 64 }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 32 }}>
              Search Has Evolved
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#EFEDE7", color: "#8a8378", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Then</th>
                    <th style={{ background: "#d87307", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, padding: "18px 24px", textAlign: "left", width: "50%" }}>Now</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Search begins with keywords", "Search begins with questions and conversations"],
                    ["Google is the primary destination", "Buyers move between Google, ChatGPT, Gemini, Claude, Perplexity, LinkedIn, reviews, and industry resources"],
                    ["Ranking higher was the goal", "Being understood, trusted, and recommended is the goal"],
                    ["Success measured by clicks", "Success measured by discoverability, authority, citations, and qualified demand"],
                    ["Websites compete for rankings", "Brands compete for trust across an entire digital ecosystem"],
                  ].map(([then, now], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "20px 24px", color: "#666", lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{then}</td>
                      <td style={{ padding: "20px 24px", color: "#1a1a1a", fontWeight: 600, lineHeight: 1.6, borderBottom: "1px solid #EEEBE7" }}>{now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Why This Matters — full-bleed video panel */}
        <div className={`reveal${s2View.inView ? ' visible' : ''}`} style={{
          position: "relative", width: "100vw", marginLeft: "calc(50% - 50vw)", marginTop: 64,
          overflow: "hidden", borderTop: "3px solid #d87307",
        }}>
          <video
            src="/videos/ai-visibility/ai-visibility-search-has-changed.mp4"
            aria-label="A solitary oak tree in a sunlit field with glowing circuit-root lines, representing how AI-driven search has changed discovery"
            autoPlay muted loop playsInline preload="auto"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,10,7,0.68) 0%, rgba(8,10,7,0.82) 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.75)", marginBottom: 24, textAlign: "center" }}>
              Why This Matters for Your Business
            </h3>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.8, color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)", textAlign: "center", marginBottom: 28 }}>
              Every day, potential customers are asking questions like:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 40 }}>
              {[
                "&ldquo;Who are the best B2B branding agencies?&rdquo;",
                "&ldquo;What company specializes in AI Visibility?&rdquo;",
                "&ldquo;Who can help with Go-to-Market Strategy?&rdquo;",
                "&ldquo;What is Revenue Engineering?&rdquo;",
              ].map((q, i) => (
                <div key={i} style={{ background: "rgba(8,16,36,0.6)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 20px" }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, fontWeight: 500, fontStyle: "italic", color: "#f7b878", margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.8, color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)", textAlign: "center", marginBottom: 16 }}>
              If AI platforms and search engines don&apos;t recognize your business as a trusted source, your competitors may become the answers buyers see first.
            </p>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.8, color: "#FFFFFF", textShadow: "0 1px 8px rgba(0,0,0,0.6)", textAlign: "center", marginBottom: 8 }}>
              AI doesn&apos;t simply rank content.
            </p>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#FFFFFF", fontWeight: 700, textShadow: "0 1px 8px rgba(0,0,0,0.6)", textAlign: "center" }}>
              It evaluates context, authority, credibility, and relevance to determine which organizations deserve to be referenced and recommended.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: THE NEW VISIBILITY EQUATION ─────────────────── */}
      <section style={{ position: "relative", background: "#FFFFFF", padding: "120px 40px" }}>
        <div ref={s3View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`section-heading reveal${s3View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 16, textAlign: "left" }}>
            Visibility Alone Isn&apos;t Enough.
          </h2>
          <p className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", marginBottom: 64 }}>
            Modern discoverability requires four connected capabilities working together.
          </p>

          {/* Be Found → Be Understood → Be Trusted → Be Recommended */}
          <div className={`reveal${s3View.inView ? ' visible' : ''}`} style={{ display: "flex", alignItems: "stretch", justifyContent: "center", gap: 0, marginBottom: 64, flexWrap: "wrap" }}>
            {[
              { label: "Be Found", num: "01" },
              { label: "Be Understood", num: "02" },
              { label: "Be Trusted", num: "03" },
              { label: "Be Recommended", num: "04" },
            ].map(({ label, num }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  position: "relative",
                  background: i === 3 ? "#d87307" : ["#1a1a1a", "#3a3632", "#5a544c"][i],
                  borderRadius: 12, padding: "32px 24px", textAlign: "center", minWidth: 180, maxWidth: 200,
                  boxShadow: i === 3 ? "0 8px 32px rgba(216,115,7,0.35)" : "0 4px 24px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 16px 40px rgba(216,115,7,0.45)" : "0 12px 36px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 8px 32px rgba(216,115,7,0.35)" : "0 4px 24px rgba(0,0,0,0.12)"; }}
                >
                  {i === 3 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.4)" }} />}
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: i === 3 ? "rgba(255,255,255,0.8)" : "#d87307", marginBottom: 12 }}>{num}</p>
                  <p style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", margin: 0, lineHeight: 1.2 }}>{label}</p>
                </div>
                {i < 3 && (
                  <div style={{ padding: "0 6px" }}>
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                      <path d="M2 10h24M20 4l8 6-8 6" stroke="#d87307" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`reveal${s3View.inView ? ' visible' : ''}`}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "#444", marginBottom: 32 }}>
              The organizations that win tomorrow aren&apos;t simply easier to find, they&apos;re easier to trust. That&apos;s why Brand Iron goes beyond traditional SEO. We help organizations build the technical foundation, digital authority, and AI readiness needed to become discoverable, trusted, and recommended across today&apos;s evolving search landscape.
            </p>
            <button onClick={() => setAuditOpen(true)} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF", border: "none", cursor: "pointer",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d87307")}
            >Get Free AI Visibility Audit</button>
          </div>
        </div>
      </section>

      {/* ── S4: STRATEGIC FRAMEWORK ─────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden", padding: "120px 40px 48px",
        backgroundImage: "url('/images/shared/shared-blacksmith-tech-lines.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div role="img" aria-label="Blacksmith hammering molten metal on an anvil with glowing AI data-line visualizations exploding from the impact point" style={{ position: "absolute", inset: 0, background: "rgba(240,235,228,0.88)" }} />
        <div ref={s4View.ref} style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72 }}>
            <h2 className={`section-heading reveal${s4View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 24, textAlign: "left" }}>
              A Strategic Framework for AI Visibility
            </h2>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, fontSize: 18, lineHeight: 1.8, color: "#3a3a3a", marginBottom: 16 }}>
              AI Visibility isn&apos;t achieved through a single tactic or tool. It requires a connected strategy that strengthens your technical foundation, builds digital authority, and helps AI platforms understand, trust, and recommend your business.
            </p>
            <p className={`reveal${s4View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, fontSize: 16, lineHeight: 1.8, color: "#4a4a4a" }}>
              At Brand Iron, we guide organizations through a four-stage framework designed to improve discoverability across search engines and AI-powered search experiences.
            </p>
          </div>

          {/* 4 stages */}
          <div className="ai-stages-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 64 }}>
            {[
              {
                num: "1",
                title: "Diagnose",
                lines: [
                  "Understand how search engines and AI platforms currently see your business.",
                  "Identify visibility gaps, technical issues, and missed opportunities.",
                ],
                color: "#1a1a1a",
              },
              {
                num: "2",
                title: "Build",
                lines: [
                  "Strengthen your SEO, technical foundation, structured data, and entity optimization.",
                  "Create the infrastructure AI and search engines rely on.",
                ],
                color: "#3a3632",
              },
              {
                num: "3",
                title: "Grow",
                lines: [
                  "Expand your authority through strategic content, citations, digital PR, reviews, and brand mentions.",
                  "Increase trust, relevance, and AI recommendations.",
                ],
                color: "#5a544c",
              },
              {
                num: "4",
                title: "Dominate",
                lines: [
                  "Continuously optimize your digital presence to become a recognized authority in your market.",
                  "Lead the conversation, not just participate in it.",
                ],
                color: "#d87307",
              },
            ].map(({ num, title, lines, color }, i) => (
              <div key={num} className={`reveal${s4View.inView ? ' visible' : ''}`} style={{
                position: "relative",
                background: color,
                borderRadius: 12, padding: "40px 28px",
                border: i === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: i === 3 ? "0 8px 40px rgba(216,115,7,0.3)" : "0 4px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.25s, box-shadow 0.25s",
                overflow: "hidden",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 16px 48px rgba(216,115,7,0.45)" : "0 16px 40px rgba(0,0,0,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = i === 3 ? "0 8px 40px rgba(216,115,7,0.3)" : "0 4px 20px rgba(0,0,0,0.15)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: i === 3 ? "rgba(255,255,255,0.35)" : "linear-gradient(to right, transparent, rgba(216,115,7,0.7), transparent)" }} />
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: i === 3 ? "rgba(255,255,255,0.2)" : "rgba(216,115,7,0.15)", border: `1px solid ${i === 3 ? "rgba(255,255,255,0.3)" : "rgba(216,115,7,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 22, fontWeight: 900, color: i === 3 ? "#FFFFFF" : "#d87307" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 22, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: i === 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.78)", marginBottom: j < lines.length - 1 ? 10 : 0 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className={`reveal${s4View.inView ? ' visible' : ''}`}>
            <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, fontSize: 17, lineHeight: 1.8, color: "#3a3a3a" }}>
              No matter where you are in your AI Visibility journey, our framework helps you build a stronger digital presence that supports long-term discoverability, authority, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: CHOOSE YOUR SOLUTION ─────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "48px 40px 0" }}>
        <div ref={s5View.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 72, textAlign: "center" }}>
            <h2 className={`section-heading reveal${s5View.inView ? ' visible' : ''}`} style={{ color: "#1a1a1a", marginBottom: 20 }}>
              Choose the Right AI Visibility Solution
            </h2>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 18, lineHeight: 1.8, color: "#555", maxWidth: 680, margin: "0 auto 16px" }}>
              Every organization is at a different stage of its AI Visibility journey.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto 16px" }}>
              Some need to understand why they&apos;re not appearing in AI-powered search results. Others are ready to strengthen their technical foundation, build digital authority, or establish market leadership.
            </p>
            <p className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 16, lineHeight: 1.8, color: "#666", maxWidth: 680, margin: "0 auto 32px" }}>
              Our four-tier framework allows you to start where you are today, and grow as your business grows.
            </p>
            <Link href="/contact" className={`reveal${s5View.inView ? ' visible' : ''}`} style={{
              display: "inline-block", fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#d87307", color: "#FFFFFF",
              padding: "14px 36px", borderRadius: 6, transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c46305")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#d87307")}
            >Schedule an AI Visibility Assessment</Link>
          </div>

          {/* Four tier cards */}
          <div className="ai-tiers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 56 }}>
            {tiers.map((tier, i) => (
              <div key={tier.number} className={`reveal${s5View.inView ? ' visible' : ''}`} style={{
                position: "relative",
                background: "#F9F8F6",
                borderRadius: 12, padding: "32px 24px",
                border: "1px solid #EEEBE7",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s",
                transitionDelay: `${i * 0.07}s`,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, rgba(216,115,7,0.4), transparent)" }} />
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFFFFF", border: "1.5px solid rgba(216,115,7,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {tier.icon}
                </div>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>{tier.number}</p>
                <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: 17, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 6, lineHeight: 1.3 }}>{tier.name}</h3>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, color: "#d87307", marginBottom: 16 }}>{tier.tagline}</p>
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.75, color: "#666", marginBottom: 20, flex: 1 }}>{tier.description}</p>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Best For</p>
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, lineHeight: 1.6, color: "#555" }}>{tier.bestFor}</p>
                </div>
                <div style={{ borderTop: "1px solid #EEEBE7", paddingTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: 6 }}>Primary Outcome</p>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13, fontWeight: 600, color: "#d87307", margin: 0 }}>{tier.outcome}</p>
                  </div>
                  <Link href={tier.href} aria-label={`Learn more about ${tier.name}`} style={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: "50%",
                    background: "#d87307", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8691f"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#d87307"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`} style={{ marginBottom: 64 }}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 32, textAlign: "center" }}>
              Quick Comparison
            </h3>
            <div style={{ overflowX: "auto", border: "1px solid #ECE5D8", borderRadius: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#EFEDE7" }}>
                    <th style={{ padding: "18px 24px", textAlign: "left", color: "#8a8378", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}></th>
                    {tiers.map(t => (
                      <th key={t.number} style={{ padding: "18px 20px", textAlign: "center", color: "#d87307", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Engagement", values: tiers.map(t => t.engagement) },
                    { label: "Primary Focus", values: tiers.map(t => t.focus) },
                    { label: "Best For", values: ["Visibility Assessment", "Technical Foundation", "Authority Growth", "Category Leadership"] },
                    { label: "Primary Outcome", values: ["Visibility Clarity", "AI-Ready Website", "Increased Authority & AI Recommendations", "AI & Market Leadership"] },
                    { label: "Ideal Next Step", values: ["Identify Opportunities", "Implement Foundation", "Scale Visibility", "Sustain Market Leadership"] },
                  ].map(({ label, values }, ri) => (
                    <tr key={label} style={{ background: ri % 2 === 0 ? "#F9F8F6" : "#FFFFFF" }}>
                      <td style={{ padding: "18px 24px", fontWeight: 600, color: "#1a1a1a", fontSize: 13, borderBottom: "1px solid #EEEBE7", whiteSpace: "nowrap" }}>{label}</td>
                      {values.map((v, ci) => (
                        <td key={ci} style={{ padding: "18px 20px", textAlign: "center", color: "#555", lineHeight: 1.5, borderBottom: "1px solid #EEEBE7" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Which solution is right for you */}
          <div className={`reveal${s5View.inView ? ' visible' : ''}`}>
            <h3 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#1a1a1a", marginBottom: 40, textAlign: "center" }}>
              Which Solution Is Right for You?
            </h3>
            <div className="ai-solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 40 }}>
              {[
                {
                  tier: "AI Visibility Diagnostic",
                  items: [
                    "You're unsure how visible your business is across AI and search.",
                    "You want an expert assessment before investing in optimization.",
                    "You need a roadmap to guide future improvements.",
                  ],
                  href: "/contact",
                },
                {
                  tier: "SEO & AI Foundation",
                  items: [
                    "Your website needs technical SEO improvements.",
                    "You're ready to establish an AI-ready digital foundation.",
                    "You want search engines and AI platforms to better understand your business.",
                  ],
                  href: "/contact",
                },
                {
                  tier: "AI Authority Growth System",
                  items: [
                    "You're looking to increase rankings, authority, and qualified organic demand.",
                    "You want to become a trusted source within your industry.",
                    "You're committed to ongoing content and authority building.",
                  ],
                  href: "/contact",
                },
                {
                  tier: "AI Market Dominance Engine",
                  items: [
                    "You want to lead your market, not just compete in it.",
                    "You're investing in long-term brand authority and executive positioning.",
                    "You need continuous optimization, strategic consulting, and AI visibility leadership.",
                  ],
                  href: "/contact",
                },
              ].map(({ tier, items, href }) => (
                <div key={tier} style={{
                  background: "#F9F8F6", borderRadius: 12, padding: "36px 32px",
                  borderLeft: "4px solid #d87307",
                  display: "flex", flexDirection: "column",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(216,115,7,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d87307", marginBottom: 8 }}>
                    Choose {tier} if…
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, flex: 1 }}>
                    {items.map(item => (
                      <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <svg style={{ flexShrink: 0, marginTop: 2 }} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4L13 4" stroke="#d87307" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.65, color: "#444", margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={href} style={{
                    display: "inline-block", alignSelf: "flex-start", textAlign: "center", padding: "12px 24px", borderRadius: 999,
                    fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                    background: "#d87307", color: "#FFFFFF",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#b8691f")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#d87307")}
                  >
                    Explore {tier} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: FAQ ───────────────────────────────────────────── */}
      <section style={{ background: "#F8F5EF", padding: "120px 40px" }}>
        <div ref={s6View.ref} style={{ maxWidth: 900, margin: "0 auto" }}>
          <h3 className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.07em", color: "#1a1a1a", marginBottom: 8 }}>
            Frequently Asked Questions
          </h3>
          <p className={`reveal${s6View.inView ? ' visible' : ''}`} style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, lineHeight: 1.8, color: "#666", maxWidth: 640, margin: "0 0 32px" }}>
            Common questions we hear from teams evaluating AI Visibility.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i}
                className={`reveal${s6View.inView ? ' visible' : ''}`}
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(15,27,45,0.08)", borderRadius: 10, overflow: "hidden", transition: "box-shadow 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(216,115,7,0.3)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(15,27,45,0.08)"; el.style.boxShadow = "none"; }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.5 }}>{q}</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: openFaq === i ? "#d87307" : "rgba(216,115,7,0.1)", border: "1px solid rgba(216,115,7,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s, transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke={openFaq === i ? "#FFFFFF" : "#d87307"} strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                </button>
                <div style={{ maxHeight: openFaq === i ? 600 : 0, opacity: openFaq === i ? 1 : 0, overflow: "hidden", transition: "max-height 0.3s ease, opacity 0.25s ease" }}>
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>{a}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <div ref={ctaView.ref} className={`reveal${ctaView.inView ? ' visible' : ''}`} style={{
            position: "relative", overflow: "hidden", borderRadius: 20,
            backgroundImage: "url('/images/ai-visibility/ai-visibility-cta-cowboy-tech-rope.png')", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div role="img" aria-label="Rancher coiling a lasso woven with glowing circuit lines against a hazy countryside" style={{ position: "absolute", inset: 0, background: "rgba(8,14,28,0.6)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "72px clamp(24px, 6vw, 48px)", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-burford-black), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em", color: "#FFFFFF", lineHeight: 1.05, marginBottom: 20 }}>
                Let&apos;s Build Your AI Visibility Strategy.
              </h2>
              <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 48px" }}>
                Let&apos;s help your business become discoverable, trusted, and recommended across search and AI.
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
                  Schedule an AI Visibility Strategy Session
                </Link>
                <button onClick={() => setAuditOpen(true)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#f0a860"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,168,96,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                >
                  Get Free AI Visibility Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
