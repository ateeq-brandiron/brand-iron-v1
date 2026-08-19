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
  /** Images shown in the "Quick Look" carousel, in order. */
  images: string[];
  challenge: string;
  solution: string;
  results: CaseStudyStat[];
};

const PLACEHOLDER_STATS: CaseStudyStat[] = [
  { value: "—", label: "Metric Pending" },
  { value: "—", label: "Metric Pending" },
  { value: "—", label: "Metric Pending" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "volition-hospitality",
    category: "websites",
    client: "Volition Hospitality",
    title: "Volition Hospitality",
    excerpt: "Volition Hospitality transforms underperforming hotels into high-return investments through strategic renovations and elevated guest experiences.",
    thumbnail: "/images/case-studies/volition-hospitality/volition-logo-card.jpg",
    thumbnailAlt: "Volition Hospitality starburst logo and wordmark",
    images: [
      "/images/case-studies/volition-hospitality/volition-logo-card.jpg",
      "/images/case-studies/volition-hospitality/volition-website.jpg",
      "/images/case-studies/volition-hospitality/volition-collage.jpg",
    ],
    challenge: "Volition Hospitality urgently needed a brand identity to establish a stronger, more consistent presence across its properties while effectively communicating its unique value proposition in the competitive luxury hospitality market. The brand needed to enhance emotional connections with customers through improved visual identity and storytelling, particularly as they sought to attract investors for their growth strategy. Their business model of transforming underperforming properties in prime locations into unique, locally-inspired destinations had proven successful, but required strategic brand communication to maximize business value and demonstrate market leadership potential.",
    solution: "Brand Iron delivered a complete brand transformation for Volition Hospitality, including visual identity, messaging, a capital raise deck, and a website that showcased their unique value in luxury hospitality while strengthening market presence and investor appeal.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "black-lake-capital",
    category: "websites",
    client: "Black Lake Capital",
    title: "Black Lake Capital",
    excerpt: "Black Lake Capital is a boutique investment firm specializing in early growth companies in software and technology, providing strategic capital and hands-on operational expertise.",
    thumbnail: "/images/portfolio/black-lake/black-lake-logo-card.jpg",
    thumbnailAlt: "Black Lake Capital logo over a mountain lake at dusk",
    images: [
      "/images/portfolio/black-lake/black-lake-logo-card.jpg",
      "/images/case-studies/black-lake/black-lake-website-thumb.jpg",
      "/images/case-studies/black-lake/black-lake-collage.jpg",
    ],
    challenge: "The company was challenged with an outdated website that no longer reflected its professional image. There was also a pressing need to realign brand messaging with its current market positioning. In addition, digital engagement was limited, resulting in a poor user experience for visitors. To further complicate matters, the organization lacked marketing automation and analytics tools, which hindered its ability to measure performance and optimize strategies effectively.",
    solution: "Brand Iron conducted a comprehensive brand and website audit, then delivered a full rebrand with a sophisticated visual identity and messaging platform, a modern professional website with improved user experience and clear calls to action, and compelling capital raise decks and teaser pieces. Targeted digital marketing — including SEO, content marketing, and marketing automation — was layered on top to increase visibility, nurture leads, and track performance.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "legacy-relief-project",
    category: "brand-identity",
    client: "Legacy Relief Project (LRP)",
    title: "Legacy Relief Project",
    excerpt: "Legacy Relief Project (LRP), a veteran-operated Christian nonprofit, enlisted Brand Iron to clarify their mission, strengthen their brand, and drive funding for their high-risk humanitarian work.",
    thumbnail: "/images/case-studies/legacy-relief/lrp-badge.jpg",
    thumbnailAlt: "Legacy Relief Project crest logo on a weathered post",
    images: [
      "/images/case-studies/legacy-relief/lrp-badge.jpg",
      "/images/case-studies/legacy-relief/lrp-collage.jpg",
    ],
    challenge: "Legacy Relief Project faced significant challenges in establishing a clear brand identity and effective communication strategy for their humanitarian efforts. As a non-profit organization focused on providing aid and relief services, they needed to distinguish themselves in a crowded sector while effectively conveying their mission and impact to potential donors, volunteers, and communities they serve. The organization required cohesive messaging that would resonate with various stakeholders, from individual donors to corporate partners, while accurately representing their commitment to sustainable relief solutions.",
    solution: "Brand Iron created a professional capital raise deck for Legacy Relief Project, effectively showcasing their mission and funding needs to potential donors and investors. Additionally, they developed a comprehensive messaging platform that articulated LRP's unique approach to humanitarian aid, ensuring consistent and compelling communication across all channels.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "union-chill-cannabis-ny",
    category: "capital-raise",
    client: "Union Chill Cannabis NY (UCCNY)",
    title: "Union Chill Cannabis NY",
    excerpt: "Union Chill Cannabis NY had the license, location, and vision to launch Corning's first recreational dispensary, but needed $1M in investor funding to make it happen.",
    thumbnail: "/images/case-studies/union-chill/union-chill-jars.jpg",
    thumbnailAlt: "Union Chill Cannabis NY logo on jars of cannabis product",
    images: [
      "/images/case-studies/union-chill/union-chill-jars.jpg",
      "/images/case-studies/union-chill/union-chill-collage.jpg",
    ],
    challenge: "Union Chill Cannabis Company faced significant challenges in the evolving cannabis market, particularly in establishing a distinctive brand identity and securing investment for growth. As a cannabis retailer, they needed to navigate complex regulatory requirements while building trust with consumers and potential investors. The company required a professional presentation of their business model and growth strategy to attract capital, while maintaining compliance with industry regulations and addressing potential investor concerns about the cannabis sector.",
    solution: "Brand Iron developed a comprehensive messaging platform and capital raise deck for Union Chill Cannabis Company, effectively communicating their unique value proposition while addressing industry-specific considerations. These strategic materials positioned Union Chill as a professional investment opportunity in the evolving cannabis market, showcasing their growth potential and business fundamentals.",
    results: PLACEHOLDER_STATS,
  },
];
