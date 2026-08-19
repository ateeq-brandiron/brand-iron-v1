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
    thumbnail: "/images/portfolio/scamrocket/scamrocket-icon-mark.jpg",
    thumbnailAlt: "ScamRocket rocket-and-pin icon mark on a deep navy background",
    description: "A brand identity for a scam-prevention platform, pairing a rocket-and-pin mark with a confident, modern wordmark built to signal speed and trust.",
    images: [
      "/images/portfolio/scamrocket/scamrocket-icon-mark.jpg",
      "/images/portfolio/scamrocket/scamrocket-wordmark.jpg",
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
    ],
  },
  {
    slug: "msp-platform-accelerator-capital-raise",
    category: "capital-raise",
    title: "MSP Platform Accelerator",
    client: "MSP Platform Accelerator",
    type: "deck",
    thumbnail: "/images/portfolio/msp-accelerator/msp-capital-raise-cover.jpg",
    thumbnailAlt: "MSP Platform Accelerator capital raise pitch deck cover slide",
    description: "A capital raise deck built to help MSP Platform Accelerator communicate its acquisition strategy and growth plan clearly to prospective investors.",
    images: [
      "/images/portfolio/msp-accelerator/msp-capital-raise-cover.jpg",
      "/images/portfolio/msp-accelerator/msp-faqs.jpg",
    ],
  },
  {
    slug: "real-international-capital-raise",
    category: "capital-raise",
    title: "Real International",
    client: "Real International",
    type: "deck",
    thumbnail: "/images/portfolio/real-international/real-international-cover.jpg",
    thumbnailAlt: "Real International investors deck cover slide over an Austin skyline photo",
    description: "An investors deck for a real estate investment firm, pairing a confident visual narrative with the track record and strategy investors need to see.",
    images: [
      "/images/portfolio/real-international/real-international-cover.jpg",
      "/images/portfolio/real-international/real-international-our-story.jpg",
      "/images/portfolio/real-international/real-international-our-success.jpg",
      "/images/portfolio/real-international/real-international-capabilities.jpg",
    ],
  },
  {
    slug: "black-lake-capital-raise",
    category: "capital-raise",
    title: "Black Lake Capital",
    client: "Black Lake Capital",
    type: "deck",
    thumbnail: "/images/portfolio/black-lake/black-lake-cover.jpg",
    thumbnailAlt: "Black Lake Capital messaging platform cover slide over a mountain lake photo",
    description: "A messaging platform for a technology-focused private equity firm, translating its investment track record into a clear, confident growth-partner narrative.",
    images: [
      "/images/portfolio/black-lake/black-lake-cover.jpg",
      "/images/portfolio/black-lake/black-lake-vision.jpg",
      "/images/portfolio/black-lake/black-lake-company-voice.jpg",
      "/images/portfolio/black-lake/black-lake-nimble-funding.jpg",
    ],
  },
  {
    slug: "strike-flyers-capital-raise",
    category: "capital-raise",
    title: "Strike Flyers",
    client: "Strike Flyers LLC",
    type: "deck",
    thumbnail: "/images/portfolio/strike-flyers/strike-flyers-cover.jpg",
    thumbnailAlt: "Strike Flyers pitch deck cover slide with a fighter jet and squadron crest",
    description: "A pitch deck for an advanced flight training company, translating a military-grade training model into a compelling growth story for investors.",
    images: [
      "/images/portfolio/strike-flyers/strike-flyers-cover.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-intro.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-model-v2.jpg",
      "/images/portfolio/strike-flyers/strike-flyers-faqs.jpg",
    ],
  },
  {
    slug: "scamrocket-capital-raise",
    category: "capital-raise",
    title: "ScamRocket",
    client: "ScamRocket",
    type: "deck",
    thumbnail: "/images/portfolio/scamrocket-capital/scamrocket-investor-cover.jpg",
    thumbnailAlt: "ScamRocket investor deck cover slide on a starfield background",
    description: "An investor deck for a scam-prevention platform, translating a consumer-and-enterprise ecosystem into a clear growth story for investors.",
    images: [
      "/images/portfolio/scamrocket-capital/scamrocket-investor-cover.jpg",
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
    thumbnail: "/images/portfolio/silver-stag/silver-stag-cover.jpg",
    thumbnailAlt: "Silver Stag Brewing Company pitch deck cover slide with product cans",
    description: "A capital raise deck for a craft brewpub, pairing warm brand photography with a clear market opportunity for prospective investors.",
    images: [
      "/images/portfolio/silver-stag/silver-stag-cover.jpg",
      "/images/portfolio/silver-stag/silver-stag-imagine-this.jpg",
      "/images/portfolio/silver-stag/silver-stag-why-now.jpg",
      "/images/portfolio/silver-stag/silver-stag-our-story.jpg",
    ],
  },
  {
    slug: "haefele-flanagan-go-to-market",
    category: "go-to-market",
    title: "Haefele Flanagan & Co.",
    client: "Haefele Flanagan & Co.",
    type: "deck",
    thumbnail: "/images/portfolio/haefele-flanagan/haefele-cover.jpg",
    thumbnailAlt: "Haefele Flanagan & Co. capabilities pitchbook cover slide with the HF diamond mark over a glass office building",
    description: "A go-to-market capabilities pitchbook for a middle-market M&A advisory firm, translating a deep track record in buy-side and sell-side deals into a clear, confident story for prospective clients and referral partners.",
    images: [
      "/images/portfolio/haefele-flanagan/haefele-cover.jpg",
      "/images/portfolio/haefele-flanagan/haefele-achievements.jpg",
      "/images/portfolio/haefele-flanagan/haefele-acquisition-strategy.jpg",
    ],
  },
  {
    slug: "ascendancy-mc-capital-raise",
    category: "capital-raise",
    title: "Ascendancy MC Inc.",
    client: "Ascendancy MC Inc.",
    type: "deck",
    thumbnail: "/images/portfolio/ascendancy-mc/ascendancy-cover.jpg",
    thumbnailAlt: "Ascendancy MC Inc. pitch deck cover slide over a city skyline at dusk",
    description: "A pitch deck for a small-business acquisition holding company, framing its buy-and-build strategy clearly for prospective investors.",
    images: [
      "/images/portfolio/ascendancy-mc/ascendancy-cover.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-thesis.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-positioning.jpg",
      "/images/portfolio/ascendancy-mc/ascendancy-faqs.jpg",
    ],
  },
];
