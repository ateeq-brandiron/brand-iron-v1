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
    slug: "sample-brand-identity-project",
    category: "brand-identity",
    title: "Sample Brand Identity Project",
    type: "logo",
    thumbnail: "/images/portfolio/placeholders/brand-identity-sample.jpg",
    thumbnailAlt: "Placeholder brand mark and identity mockup",
    description: "Placeholder entry standing in for a real brand identity project. Swap in an actual logo, mark, or brand guideline spread.",
    isPlaceholder: true,
  },
  {
    slug: "sample-capital-raise-project",
    category: "capital-raise",
    title: "Sample Capital Raise Deck",
    type: "deck",
    thumbnail: "/images/portfolio/placeholders/capital-raise-sample.jpg",
    thumbnailAlt: "Placeholder investor pitch deck slide mockup",
    description: "Placeholder entry standing in for a real capital raise deck project. Swap in an actual deck slide or cover.",
    isPlaceholder: true,
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
