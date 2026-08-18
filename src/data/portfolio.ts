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
      "/images/portfolio/scamrocket/scamrocket-wordmark.jpg",
      "/images/portfolio/scamrocket/scamrocket-logo-usage.jpg",
      "/images/portfolio/scamrocket/scamrocket-colors.jpg",
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
    description: "A confident wordmark and tagline lockup for a technology partner brand, paired with a full guideline system for consistent use across every application.",
    images: [
      "/images/portfolio/innovatix/innovatix-brand-identity.jpg",
      "/images/portfolio/innovatix/innovatix-badge.jpg",
      "/images/portfolio/innovatix/innovatix-colors.jpg",
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
      "/images/portfolio/msp-accelerator/msp-opportunity-slide.jpg",
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
      "/images/portfolio/real-international/real-international-timeline.jpg",
      "/images/portfolio/real-international/real-international-success.jpg",
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
      "/images/portfolio/black-lake/black-lake-stats.jpg",
    ],
  },
];
