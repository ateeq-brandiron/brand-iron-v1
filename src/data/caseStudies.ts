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
    thumbnail: "/images/case-studies/volition-hospitality/volition-hospitality-hero.jpg",
    thumbnailAlt: "Volition Hospitality website hero showing a luxury hotel room and the headline Elevating Hospitality Experiences",
    images: [
      "/images/case-studies/volition-hospitality/volition-hospitality-hero.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-heart-of-volition.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-services.jpg",
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
    thumbnail: "/images/case-studies/black-lake/black-lake-hero.jpg",
    thumbnailAlt: "Black Lake Capital website hero over a fjord landscape with the headline Investors in Technology",
    images: [
      "/images/case-studies/black-lake/black-lake-hero.jpg",
      "/images/case-studies/black-lake/black-lake-stats.jpg",
      "/images/case-studies/black-lake/black-lake-empowering.jpg",
    ],
    challenge: "The company was challenged with an outdated website that no longer reflected its professional image. There was also a pressing need to realign brand messaging with its current market positioning. In addition, digital engagement was limited, resulting in a poor user experience for visitors. To further complicate matters, the organization lacked marketing automation and analytics tools, which hindered its ability to measure performance and optimize strategies effectively.",
    solution: "Brand Iron conducted a comprehensive brand and website audit, then delivered a full rebrand with a sophisticated visual identity and messaging platform, a modern professional website with improved user experience and clear calls to action, and compelling capital raise decks and teaser pieces. Targeted digital marketing — including SEO, content marketing, and marketing automation — was layered on top to increase visibility, nurture leads, and track performance.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "maadaadizi",
    category: "websites",
    client: "Maadaadizi",
    title: "Maadaadizi",
    excerpt: "Maadaadizi is a hospitality investment, development, and management company dedicated to creating meaningful guest experiences across a diverse portfolio of hotels, independent brands, and restaurants.",
    thumbnail: "/images/case-studies/maadaadizi/maadaadizi-hero.jpg",
    thumbnailAlt: "Maadaadizi website hero showing plated dishes and the wordmark Enriching Life's Journey",
    images: [
      "/images/case-studies/maadaadizi/maadaadizi-hero.jpg",
      "/images/case-studies/maadaadizi/maadaadizi-story.jpg",
      "/images/case-studies/maadaadizi/maadaadizi-portfolio-grid.jpg",
    ],
    challenge: "Maadaadizi's hospitality portfolio had grown to span branded hotels, independent lifestyle properties, and restaurants, but the company had no unified digital presence to tell its story. Originally founded to manage diversified real estate on behalf of the Mille Lacs Band of Ojibwe, Maadaadizi needed a website that could carry its cultural origin story — the name means \"s/he begins a journey\" in the Ojibwe language — while clearly organizing a growing, varied property portfolio for guests, investors, and partners alike.",
    solution: "Brand Iron built a website that leads with warm, guest-facing photography and Maadaadizi's founding story, then organizes its full portfolio — branded hotels, independent brands, restaurants, and meetings & events spaces — into a clear, browsable structure that supports both guest discovery and future portfolio growth.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "ares-aardex-real-estate-services",
    category: "websites",
    client: "Aardex Real Estate Services (ARES)",
    title: "Aardex Real Estate Services (ARES)",
    excerpt: "ARES is a vertically integrated commercial real estate company providing development, design, construction, brokerage, and property management under one roof.",
    thumbnail: "/images/case-studies/ares/ares-hero.jpg",
    thumbnailAlt: "ARES website hero showing a commercial real estate interior and the tagline Commercial Real Estate, managed from the ground-up",
    images: [
      "/images/case-studies/ares/ares-hero.jpg",
      "/images/case-studies/ares/ares-development.jpg",
      "/images/case-studies/ares/ares-property-grid.jpg",
    ],
    challenge: "With decades of experience spanning development, brokerage, and property management, ARES needed a website that could make the case for its full-lifecycle, in-house model — handling every phase of a commercial real estate project itself — rather than reading as just another regional brokerage site.",
    solution: "Brand Iron designed a website structured around ARES's three core service lines — Development, Brokerage, and Property Management — anchored by a real portfolio of managed properties and a clear \"Why ARES\" case for its vertically integrated, in-house approach.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "cesa",
    category: "websites",
    client: "Colorado Emergency Services Association (CESA)",
    title: "Colorado Emergency Services Association",
    excerpt: "CESA is a nonprofit membership organization giving Colorado emergency service districts a single, trusted source for risk reduction, workers' comp, and safety resources.",
    thumbnail: "/images/case-studies/cesa/cesa-hero.jpg",
    thumbnailAlt: "CESA website hero showing first responders at an emergency scene with the headline Every safe Colorado community starts with strong special districts",
    images: [
      "/images/case-studies/cesa/cesa-hero.jpg",
      "/images/case-studies/cesa/cesa-stats.jpg",
      "/images/case-studies/cesa/cesa-difference.jpg",
    ],
    challenge: "CESA brings together workers' compensation, risk management, and mental health resources for Colorado's emergency service districts, but needed a website that could make that bundled value proposition immediately clear to district leaders while driving membership applications.",
    solution: "Brand Iron built a website that opens with a direct, mission-driven headline, backs it up with a track-record stat band, and lays out exactly what makes CESA different — supported by clear membership and district-application calls to action throughout.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "offen-petroleum",
    category: "websites",
    client: "Offen Petroleum",
    title: "Offen Petroleum",
    excerpt: "Offen Petroleum is a wholesale distributor of fuel, lubricants, propane, and DEF, serving commercial, industrial, and government customers nationwide.",
    thumbnail: "/images/case-studies/offen-petroleum/offen-petroleum-hero.jpg",
    thumbnailAlt: "Offen Petroleum website hero showing a fuel tanker truck at a distribution facility",
    images: [
      "/images/case-studies/offen-petroleum/offen-petroleum-hero.jpg",
      "/images/case-studies/offen-petroleum/offen-petroleum-what-we-do.jpg",
      "/images/case-studies/offen-petroleum/offen-petroleum-states-served.jpg",
    ],
    challenge: "Offen Petroleum's fuel, lubricant, and propane distribution network spans a wide swath of the country, but its site needed to make that multi-state reach and broad product line easy for commercial, industrial, and government buyers to navigate and act on.",
    solution: "Brand Iron built a website around a bold \"Fueling Efficiency\" positioning, an interactive states-served map that shows the true scale of Offen's operation, and a direct inquiry form tailored to fuel, propane, lubricant, and DEF requests.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "us-transport",
    category: "websites",
    client: "US Transport",
    title: "US Transport",
    excerpt: "US Transport provides strategic bulk transportation and logistics solutions for mining, construction, manufacturing, and heavy industry.",
    thumbnail: "/images/case-studies/us-transport/us-transport-hero.jpg",
    thumbnailAlt: "US Transport website hero showing a tanker truck at an industrial facility at dusk with the headline Strategic Bulk Transportation",
    images: [
      "/images/case-studies/us-transport/us-transport-hero.jpg",
      "/images/case-studies/us-transport/us-transport-services-row.jpg",
      "/images/case-studies/us-transport/us-transport-dedicated-partner.jpg",
    ],
    challenge: "US Transport serves three distinct audiences — shipping customers, safety-focused stakeholders, and prospective drivers — but its site needed to route each of them to the right information quickly, without diluting its core message of dependable, long-term partnership.",
    solution: "Brand Iron designed a website built around three clear audience paths — Customers, Safety, and Drivers — paired with a straightforward \"long-term dedicated partner\" narrative that reinforces US Transport's commitment to every relationship it builds.",
    results: PLACEHOLDER_STATS,
  },
  {
    slug: "innovatix",
    category: "websites",
    client: "Innovatix Technology Partners",
    title: "Innovatix Technology Partners",
    excerpt: "Innovatix helps organizations modernize legacy systems and adopt cloud and AI technologies, backed by more than 30 years of enterprise delivery experience.",
    thumbnail: "/images/case-studies/innovatix/innovatix-hero.jpg",
    thumbnailAlt: "Innovatix website hero with the headline We Integrate, So You Can Operate Faster, Better and Smarter",
    images: [
      "/images/case-studies/innovatix/innovatix-hero.jpg",
      "/images/case-studies/innovatix/innovatix-solutions.jpg",
      "/images/case-studies/innovatix/innovatix-stats.jpg",
    ],
    challenge: "As a 30-plus year technology services firm, Innovatix had deep enterprise credibility but needed a website that could reposition it around AI-driven modernization — without losing the track record that makes it trustworthy to large, risk-averse clients.",
    solution: "Brand Iron built a website led by a bold \"We Integrate\" AI-forward positioning statement, organized around Innovatix's five core solution areas, and backed by hard credibility stats — 30+ years, 400+ clients, 10+ countries — to ground the new message in real experience.",
    results: PLACEHOLDER_STATS,
  },
];
