import { PortfolioCategoryId } from "@/data/portfolio";

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  category: PortfolioCategoryId;
  client: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  challenge: string;
  solution: string;
  results: CaseStudyStat[];
  isPlaceholder?: boolean;
};

const PLACEHOLDER_STATS: CaseStudyStat[] = [
  { value: "—", label: "Metric Pending" },
  { value: "—", label: "Metric Pending" },
  { value: "—", label: "Metric Pending" },
];

const CATEGORY_THUMBNAILS: Record<PortfolioCategoryId, string> = {
  websites: "/images/portfolio/placeholders/website-sample-thumb.jpg",
  "brand-identity": "/images/portfolio/placeholders/brand-identity-sample.jpg",
  "capital-raise": "/images/portfolio/placeholders/capital-raise-sample.jpg",
  "go-to-market": "/images/portfolio/placeholders/go-to-market-sample.jpg",
  "ai-visibility": "/images/portfolio/placeholders/website-sample-thumb.jpg",
  "revenue-growth": "/images/portfolio/placeholders/revenue-growth-sample.jpg",
};

function placeholder(category: PortfolioCategoryId, categoryLabel: string, n: number): CaseStudy {
  return {
    slug: `${category}-case-study-${n}`,
    category,
    client: "Client Name Pending",
    title: `${categoryLabel} Case Study ${n} (Placeholder)`,
    excerpt: "This case study is being finalized. Placeholder content shown for layout and review purposes only — not a real client engagement.",
    thumbnail: CATEGORY_THUMBNAILS[category],
    thumbnailAlt: "Placeholder case study thumbnail",
    challenge: "Placeholder challenge summary. Replace with the real business problem this client was facing before the engagement.",
    solution: "Placeholder solution summary. Replace with the real approach, strategy, and work delivered during the engagement.",
    results: PLACEHOLDER_STATS,
    isPlaceholder: true,
  };
}

export const caseStudies: CaseStudy[] = [
  placeholder("websites", "Websites", 1),
  placeholder("websites", "Websites", 2),
  placeholder("brand-identity", "Brand Identity", 1),
  placeholder("brand-identity", "Brand Identity", 2),
  placeholder("capital-raise", "Capital Raise", 1),
  placeholder("capital-raise", "Capital Raise", 2),
  placeholder("go-to-market", "Go-To-Market", 1),
  placeholder("go-to-market", "Go-To-Market", 2),
  placeholder("revenue-growth", "Revenue Growth", 1),
  placeholder("revenue-growth", "Revenue Growth", 2),
];
