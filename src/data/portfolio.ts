export type PortfolioCategoryId =
  | "websites"
  | "brand-identity"
  | "capital-raise"
  | "go-to-market"
  | "ai-visibility"
  | "revenue-growth";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  comingSoon?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  { id: "websites", label: "Websites" },
  { id: "brand-identity", label: "Brand Identity" },
  { id: "capital-raise", label: "Capital Raise" },
  { id: "go-to-market", label: "Go-To-Market" },
  { id: "ai-visibility", label: "AI Visibility", comingSoon: true },
  { id: "revenue-growth", label: "Revenue Growth" },
];

export type PortfolioItem = {
  slug: string;
  category: PortfolioCategoryId;
  title: string;
  client?: string;
  type: "website" | "logo" | "deck" | "other";
  thumbnail: string;
  thumbnailAlt: string;
  description: string;
  isPlaceholder?: boolean;
  /** Only for type: "website" — tall full-page image used by the scroll-simulation preview. */
  fullPageImage?: string;
  /** Additional real deliverable pages shown as a gallery in the expand modal (logo/deck items). Falls back to [thumbnail] if omitted. */
  images?: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "sage-professional-services-brand-identity",
    category: "brand-identity",
    title: "Sage Professional Services LLP",
    client: "Sage Professional Services LLP",
    type: "logo",
    thumbnail: "/images/portfolio/sage/sage-brand-identity.jpg",
    thumbnailAlt: "Sage Professional Services LLP logo mark and wordmark on a dark green textured background",
    description: "A brand identity built around a leaf-inspired mark for a professional services firm, giving Sage a distinct, trustworthy visual presence across every touchpoint.",
    images: [
      "/images/portfolio/sage/sage-brand-identity.jpg",
      "/images/portfolio/sage/sage-tagline-concepts.jpg",
    ],
  },
  {
    slug: "scamrocket-brand-identity",
    category: "brand-identity",
    title: "ScamRocket",
    client: "ScamRocket",
    type: "logo",
    thumbnail: "/images/portfolio/scamrocket/scamrocket-wordmark-padded.jpg",
    thumbnailAlt: "ScamRocket rocket-and-pin icon mark with wordmark on a deep navy background",
    description: "A brand identity for a scam-prevention platform, pairing a rocket-and-pin mark with a confident, modern wordmark built to signal speed and trust.",
    images: [
      "/images/portfolio/scamrocket/scamrocket-wordmark-padded.jpg",
      "/images/portfolio/scamrocket/scamrocket-icon-mark.jpg",
      "/images/portfolio/scamrocket/scamrocket-color-palette.jpg",
    ],
  },
  {
    slug: "innovatix-brand-identity",
    category: "brand-identity",
    title: "Innovatix Technology Partners",
    client: "Innovatix Technology Partners",
    type: "logo",
    thumbnail: "/images/portfolio/innovatix/innovatix-brand-identity.jpg",
    thumbnailAlt: "Innovatix Technology Partners logo mark and wordmark on a white background",
    description: "A confident wordmark and tagline lockup for a technology partner brand, built for consistent use across every application.",
    images: [
      "/images/portfolio/innovatix/innovatix-brand-identity.jpg",
      "/images/portfolio/innovatix/innovatix-badge-backgrounds.jpg",
      "/images/portfolio/innovatix/innovatix-logo-badge-mockup.jpg",
      "/images/portfolio/innovatix/innovatix-color-palette.jpg",
    ],
  },
  {
    slug: "bellwether-brand-identity",
    category: "brand-identity",
    title: "Bellwether",
    client: "Bellwether",
    type: "logo",
    thumbnail: "/images/portfolio/bellwether/bellwether-logo.jpg",
    thumbnailAlt: "Bellwether logo mark and wordmark on a dark navy circuit-line background",
    description: "A brand identity for a market-intelligence platform, pairing a bell-and-signal mark with a confident wordmark that signals clarity and foresight.",
    images: [
      "/images/portfolio/bellwether/bellwether-logo.jpg",
      "/images/portfolio/bellwether/bellwether-logo-usage.jpg",
      "/images/portfolio/bellwether/bellwether-color-palette.jpg",
      "/images/portfolio/bellwether/bellwether-typography.jpg",
      "/images/portfolio/bellwether/bellwether-shapes-components.jpg",
    ],
  },
  {
    slug: "cities-project-global-brand-identity",
    category: "brand-identity",
    title: "Cities Project Global",
    client: "Cities Project Global",
    type: "logo",
    thumbnail: "/images/portfolio/cities-project-global/cpg-logo.jpg",
    thumbnailAlt: "Cities Project Global logo mark of a stylized city skyline",
    description: "A brand identity for a global urban development firm, built around a skyline mark that scales cleanly across every application.",
    images: [
      "/images/portfolio/cities-project-global/cpg-logo.jpg",
      "/images/portfolio/cities-project-global/cpg-logo-usage.jpg",
      "/images/portfolio/cities-project-global/cpg-color-lockups.jpg",
    ],
  },
  {
    slug: "real-international-brand-identity",
    category: "brand-identity",
    title: "Real International",
    client: "Real International",
    type: "logo",
    thumbnail: "/images/portfolio/real-international-brand/real-international-icon.jpg",
    thumbnailAlt: "Real International \"R\" icon mark in charcoal and gold",
    description: "A brand identity for a real estate investment firm, pairing an elegant icon-and-wordmark lockup with a warm, confident color palette.",
    images: [
      "/images/portfolio/real-international-brand/real-international-icon.jpg",
      "/images/portfolio/real-international-brand/real-international-logo-thumb.jpg",
      "/images/portfolio/real-international-brand/real-international-website-mockup.jpg",
      "/images/portfolio/real-international-brand/real-international-primary-colors.jpg",
      "/images/portfolio/real-international-brand/real-international-iconology.jpg",
    ],
  },
  {
    slug: "msp-platform-accelerator-capital-raise",
    category: "capital-raise",
    title: "MSP Platform Accelerator",
    client: "MSP Platform Accelerator",
    type: "deck",
    thumbnail: "/images/portfolio/msp-accelerator/msp-accelerator-logo-card.jpg",
    thumbnailAlt: "MSP Platform Accelerator logo over a navy circuit-line background",
    description: "A capital raise deck built to help MSP Platform Accelerator communicate its acquisition strategy and growth plan clearly to prospective investors.",
    images: [
      "/images/portfolio/msp-accelerator/msp-accelerator-logo-card.jpg",
      "/images/portfolio/msp-accelerator/msp-timeline.jpg",
      "/images/portfolio/msp-accelerator/msp-opportunity.jpg",
      "/images/portfolio/msp-accelerator/msp-faqs.jpg",
      "/images/portfolio/msp-accelerator/msp-recap-close.jpg",
    ],
  },
  {
    slug: "real-international-capital-raise",
    category: "capital-raise",
    title: "Real International",
    client: "Real International",
    type: "deck",
    thumbnail: "/images/portfolio/real-international/real-international-logo-card.jpg",
    thumbnailAlt: "Real International logo below an Austin skyline photo at dusk",
    description: "An investors deck for a real estate investment firm, pairing a confident visual narrative with the track record and strategy investors need to see.",
    images: [
      "/images/portfolio/real-international/real-international-logo-card.jpg",
      "/images/portfolio/real-international/real-international-cover.jpg",
      "/images/portfolio/real-international/real-international-our-story.jpg",
      "/images/portfolio/real-international/real-international-case-study-lantern.jpg",
      "/images/portfolio/real-international/real-international-capabilities.jpg",
    ],
  },
  {
    slug: "black-lake-capital-raise",
    category: "capital-raise",
    title: "Black Lake Capital",
    client: "Black Lake Capital",
    type: "deck",
    thumbnail: "/images/portfolio/black-lake/black-lake-logo-card.jpg",
    thumbnailAlt: "Black Lake Capital logo over a mountain lake at dusk",
    description: "A messaging platform for a technology-focused private equity firm, translating its investment track record into a clear, confident growth-partner narrative.",
    images: [
      "/images/portfolio/black-lake/black-lake-logo-card.jpg",
      "/images/portfolio/black-lake/black-lake-cover.jpg",
      "/images/portfolio/black-lake/black-lake-vision.jpg",
      "/images/portfolio/black-lake/black-lake-long-term-success.jpg",
      "/images/portfolio/black-lake/black-lake-nimble-funding.jpg",
    ],
  },
  {
    slug: "strike-flyers-capital-raise",
    category: "capital-raise",
    title: "Strike Flyers",
    client: "Strike Flyers LLC",
    type: "deck",
    thumbnail: "/images/portfolio/strike-flyers/strike-flyers-logo-card.jpg",
    thumbnailAlt: "Strike Flyers squadron crest logo with a fighter jet",
    description: "A pitch deck for an advanced flight training company, translating a military-grade training model into a compelling growth story for investors.",
    images: [
      "/images/portfolio/strike-flyers/strike-flyers-logo-card.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-cover.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-intro.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-model-v2.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-thank-you.jpg",
    ],
  },
  {
    slug: "scamrocket-capital-raise",
    category: "capital-raise",
    title: "ScamRocket",
    client: "ScamRocket",
    type: "deck",
    thumbnail: "/images/portfolio/scamrocket-capital/scamrocket-capital-logo-card.jpg",
    thumbnailAlt: "ScamRocket logo over a starfield background",
    description: "An investor deck for a scam-prevention platform, translating a consumer-and-enterprise ecosystem into a clear growth story for investors.",
    images: [
      "/images/portfolio/scamrocket-capital/scamrocket-capital-logo-card.jpg",
      "/images/portfolio/scamrocket-capital/scamrocket-market-opportunity.jpg",
      "/images/portfolio/scamrocket-capital/scamrocket-ecosystem-v2.jpg",
      "/images/portfolio/scamrocket-capital/scamrocket-app-mockup.jpg",
      "/images/portfolio/scamrocket-capital/scamrocket-trust-handshake.jpg",
    ],
  },
  {
    slug: "silver-stag-capital-raise",
    category: "capital-raise",
    title: "Silver Stag Brewing Company",
    client: "Silver Stag Brewing Company",
    type: "deck",
    thumbnail: "/images/portfolio/silver-stag/silver-stag-logo-card.jpg",
    thumbnailAlt: "Silver Stag Brewing Company stag-head badge logo",
    description: "A capital raise deck for a craft brewpub, pairing warm brand photography with a clear market opportunity for prospective investors.",
    images: [
      "/images/portfolio/silver-stag/silver-stag-logo-card.jpg",
      "/images/portfolio/silver-stag/silver-stag-cover.jpg",
      "/images/portfolio/silver-stag/silver-stag-our-traction.jpg",
      "/images/portfolio/silver-stag/silver-stag-why-now.jpg",
      "/images/portfolio/silver-stag/silver-stag-our-story.jpg",
    ],
  },
  {
    slug: "haefele-flanagan-capital-raise",
    category: "capital-raise",
    title: "Haefele Flanagan & Co.",
    client: "Haefele Flanagan & Co.",
    type: "deck",
    thumbnail: "/images/portfolio/haefele-flanagan/haefele-flanagan-logo-card.jpg",
    thumbnailAlt: "Haefele Flanagan & Co. diamond HF mark over a converging glass office building",
    description: "A buy-side/sell-side M&A pitchbook for a middle-market advisory firm, translating decades of deal experience and a disciplined acquisition process into a clear, confident story for prospective clients.",
    images: [
      "/images/portfolio/haefele-flanagan/haefele-flanagan-logo-card.jpg",
      "/images/portfolio/haefele-flanagan/haefele-timeline.jpg",
      "/images/portfolio/haefele-flanagan/haefele-achievements.jpg",
      "/images/portfolio/haefele-flanagan/haefele-our-process.jpg",
      "/images/portfolio/haefele-flanagan/haefele-our-promise.jpg",
    ],
  },
  {
    slug: "ascendancy-mc-capital-raise",
    category: "capital-raise",
    title: "Ascendancy MC Inc.",
    client: "Ascendancy MC Inc.",
    type: "deck",
    thumbnail: "/images/portfolio/ascendancy-mc/ascendancy-mc-logo-card.jpg",
    thumbnailAlt: "Ascendancy MC Inc. logo over a city skyline at dusk",
    description: "A pitch deck for a small-business acquisition holding company, framing its buy-and-build strategy clearly for prospective investors.",
    images: [
      "/images/portfolio/ascendancy-mc/ascendancy-mc-logo-card.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-cover.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-thesis.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-positioning.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-faqs.jpg",
    ],
  },
  {
    slug: "black-lake-brand-identity",
    category: "brand-identity",
    title: "Black Lake Capital",
    client: "Black Lake Capital",
    type: "logo",
    thumbnail: "/images/portfolio/black-lake/black-lake-brand-identity.jpg",
    thumbnailAlt: "Black Lake Capital circular wave-mark logo and wordmark on a dark navy background",
    description: "A brand identity for a strategic investment firm and family office, pairing a circular wave mark with a confident wordmark built for trust and longevity.",
    images: [
      "/images/portfolio/black-lake/black-lake-brand-identity.jpg",
    ],
  },
  {
    slug: "black-lake-sales-deck",
    category: "capital-raise",
    title: "Black Lake Capital",
    client: "Black Lake Capital",
    type: "deck",
    thumbnail: "/images/portfolio/black-lake-sales/black-lake-sales-cover.jpg",
    thumbnailAlt: "Black Lake Capital logo over a fjord village landscape at dusk",
    description: "A sales deck for a strategic investment firm, translating its founder-first investment philosophy and track record into a compelling story for prospective portfolio companies.",
    images: [
      "/images/portfolio/black-lake-sales/black-lake-sales-cover.jpg",
      "/images/portfolio/black-lake-sales/black-lake-what-we-offer.jpg",
      "/images/portfolio/black-lake-sales/black-lake-success-story-1.jpg",
      "/images/portfolio/black-lake-sales/black-lake-success-story-2.jpg",
    ],
  },
  {
    slug: "msp-platform-accelerator-brand-identity",
    category: "brand-identity",
    title: "MSP Platform Accelerator",
    client: "MSP Platform Accelerator",
    type: "logo",
    thumbnail: "/images/portfolio/msp-accelerator/msp-branding-cover.jpg",
    thumbnailAlt: "MSP Platform Accelerator logo over a navy gradient background",
    description: "A brand identity refresh for an MSP acquisition platform, updating the logo lockup and establishing a clear color and imagery system for consistent use across every application.",
    images: [
      "/images/portfolio/msp-accelerator/msp-branding-cover.jpg",
      "/images/portfolio/msp-accelerator/msp-logo-options.jpg",
      "/images/portfolio/msp-accelerator/msp-color-palette.jpg",
    ],
  },
  {
    slug: "volition-hospitality-brand-identity",
    category: "brand-identity",
    title: "Volition Hospitality",
    client: "Volition Hospitality",
    type: "logo",
    thumbnail: "/images/portfolio/volition-hospitality/volition-logo-mark.jpg",
    thumbnailAlt: "Volition Hospitality starburst logo mark in teal and gold",
    description: "A brand identity for a luxury hospitality investment firm, pairing a radiant starburst mark with a warm, confident color palette built for elevated guest experiences.",
    images: [
      "/images/portfolio/volition-hospitality/volition-logo-mark.jpg",
      "/images/portfolio/volition-hospitality/volition-color-palette.jpg",
    ],
  },
  {
    slug: "ares-capital-raise",
    category: "capital-raise",
    title: "Aardex Real Estate Services (ARES)",
    client: "Aardex Real Estate Services (ARES)",
    type: "deck",
    thumbnail: "/images/portfolio/ares/ares-logo-card.jpg",
    thumbnailAlt: "ARES mountain-peak logo over an aerial night view of Golden, Colorado",
    description: "An investor's deck for a boutique real estate developer, translating a 20-year track record and a luxury condominium opportunity in downtown Golden, Colorado into a clear growth story for investors.",
    images: [
      "/images/portfolio/ares/ares-logo-card.jpg",
      "/images/portfolio/ares/ares-intro.jpg",
      "/images/portfolio/ares/ares-opportunity.jpg",
      "/images/portfolio/ares/ares-why-golden.jpg",
      "/images/portfolio/ares/ares-project-intro.jpg",
    ],
  },
];
