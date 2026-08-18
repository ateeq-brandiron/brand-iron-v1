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
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "sample-website-project",
    category: "websites",
    title: "Sample Website Project",
    type: "website",
    thumbnail: "/images/portfolio/placeholders/website-sample-thumb.jpg",
    thumbnailAlt: "Placeholder website mockup screenshot",
    description: "Placeholder entry standing in for a real website project. Swap in an actual client site, screenshot, and description.",
    isPlaceholder: true,
    fullPageImage: "/images/portfolio/placeholders/website-sample-fullpage.jpg",
  },
  {
    slug: "sage-professional-services-brand-identity",
    category: "brand-identity",
    title: "Sage Professional Services LLP",
    client: "Sage Professional Services LLP",
    type: "logo",
    thumbnail: "/images/portfolio/sage/sage-brand-identity.jpg",
    thumbnailAlt: "Sage Professional Services LLP logo mark and wordmark on a dark green textured background",
    description: "A brand identity built around a leaf-inspired mark for a professional services firm, giving Sage a distinct, trustworthy visual presence across every touchpoint.",
  },
  {
    slug: "scamrocket-brand-identity",
    category: "brand-identity",
    title: "ScamRocket",
    client: "ScamRocket",
    type: "logo",
    thumbnail: "/images/portfolio/scamrocket/scamrocket-brand-identity.jpg",
    thumbnailAlt: "ScamRocket logo mark and wordmark on a deep navy nebula background",
    description: "A brand identity for a scam-prevention platform, pairing a rocket-and-pin mark with a confident, modern wordmark built to signal speed and trust.",
  },
  {
    slug: "innovatix-brand-identity",
    category: "brand-identity",
    title: "Innovatix Technology Partners",
    client: "Innovatix Technology Partners",
    type: "logo",
    thumbnail: "/images/portfolio/innovatix/innovatix-brand-identity.jpg",
    thumbnailAlt: "Innovatix Technology Partners logo mark and wordmark on a white background",
    description: "A confident wordmark and tagline lockup for a technology partner brand, paired with a full guideline system for consistent use across every application.",
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
  },
  {
    slug: "sample-go-to-market-project",
    category: "go-to-market",
    title: "Sample Go-To-Market Project",
    type: "other",
    thumbnail: "/images/portfolio/placeholders/go-to-market-sample.jpg",
    thumbnailAlt: "Placeholder go-to-market roadmap mockup",
    description: "Placeholder entry standing in for a real go-to-market engagement. Swap in an actual launch plan visual or outcome summary.",
    isPlaceholder: true,
  },
  {
    slug: "sample-revenue-growth-project",
    category: "revenue-growth",
    title: "Sample Revenue Growth Project",
    type: "other",
    thumbnail: "/images/portfolio/placeholders/revenue-growth-sample.jpg",
    thumbnailAlt: "Placeholder revenue performance dashboard mockup",
    description: "Placeholder entry standing in for a real revenue growth engagement. Swap in an actual dashboard or performance summary.",
    isPlaceholder: true,
  },
];
