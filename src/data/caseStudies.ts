import { PortfolioCategoryId, portfolioCategories } from "@/data/portfolio";

/** Case studies show one piece of work at a time, so category badges read better singular (e.g. "Website" not "Websites") - unlike Portfolio's filter tabs, which stay plural. */
const CASE_STUDY_CATEGORY_LABEL_OVERRIDES: Partial<Record<PortfolioCategoryId, string>> = {
  websites: "Website",
};

export function caseStudyCategoryLabel(category: PortfolioCategoryId): string {
  return CASE_STUDY_CATEGORY_LABEL_OVERRIDES[category] ?? portfolioCategories.find(c => c.id === category)?.label ?? category;
}

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
  /** Website screenshot revealed on grid-card hover; defaults to images[0] when the hero doesn't crop well at card size. */
  cardHoverImage?: string;
  /** Full top-to-bottom page screenshot shown in the "Quick Look" scrolling preview. */
  fullPageImage?: string;
  challenge: string;
  solution: string;
  results: CaseStudyStat[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "volition-hospitality",
    category: "websites",
    client: "Volition Hospitality",
    title: "Volition Hospitality",
    excerpt: "Volition Hospitality transforms underperforming hotels into high-return investments through strategic renovations and elevated guest experiences.",
    thumbnail: "/images/client-logos/volition-hospitality-logo.png",
    thumbnailAlt: "Volition Hospitality logo, a starburst mark above the wordmark Hospitality Tailored To You",
    images: [
      "/images/case-studies/volition-hospitality/volition-hospitality-hero.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-closer-look-1.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-closer-look-2.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-closer-look-3.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-closer-look-4.jpg",
      "/images/case-studies/volition-hospitality/volition-hospitality-closer-look-5.jpg",
    ],
    cardHoverImage: "/images/portfolio/volition-hospitality-website/volition-hospitality-website-thumb.jpg",
    fullPageImage: "/images/portfolio/volition-hospitality-website/volition-hospitality-website-full.jpg",
    challenge: "Volition Hospitality urgently needed a brand identity to establish a stronger, more consistent presence across its properties while effectively communicating its unique value proposition in the competitive luxury hospitality market. The brand needed to enhance emotional connections with customers through improved visual identity and storytelling, particularly as they sought to attract investors for their growth strategy. Their business model of transforming underperforming properties in prime locations into unique, locally-inspired destinations had proven successful, but required strategic brand communication to maximize business value and demonstrate market leadership potential.",
    solution: "Brand Iron delivered a complete brand transformation for Volition Hospitality, including visual identity, messaging, a capital raise deck, and a website that showcased their unique value in luxury hospitality while strengthening market presence and investor appeal.",
    results: [],
  },
  {
    slug: "black-lake-capital",
    category: "websites",
    client: "Black Lake Capital",
    title: "Black Lake Capital",
    excerpt: "Black Lake Capital is a boutique investment firm specializing in early growth companies in software and technology, providing strategic capital and hands-on operational expertise.",
    thumbnail: "/images/client-logos/black-lake-capital-logo.png",
    thumbnailAlt: "Black Lake Capital logo mark and wordmark",
    images: [
      "/images/case-studies/black-lake/black-lake-hero.jpg",
      "/images/case-studies/black-lake/black-lake-stats.jpg",
      "/images/case-studies/black-lake/black-lake-empowering.jpg",
    ],
    cardHoverImage: "/images/portfolio/black-lake-website/black-lake-website-thumb.jpg",
    fullPageImage: "/images/portfolio/black-lake-website/black-lake-website-full.jpg",
    challenge: "The company was challenged with an outdated website that no longer reflected its professional image. There was also a pressing need to realign brand messaging with its current market positioning. In addition, digital engagement was limited, resulting in a poor user experience for visitors. To further complicate matters, the organization lacked marketing automation and analytics tools, which hindered its ability to measure performance and optimize strategies effectively.",
    solution: "Brand Iron conducted a comprehensive brand and website audit, then delivered a full rebrand with a sophisticated visual identity and messaging platform, a modern professional website with improved user experience and clear calls to action, and compelling capital raise decks and teaser pieces. Targeted digital marketing — including SEO, content marketing, and marketing automation — was layered on top to increase visibility, nurture leads, and track performance.",
    results: [],
  },
  {
    slug: "maadaadizi",
    category: "websites",
    client: "Maadaadizi",
    title: "Maadaadizi",
    excerpt: "Maadaadizi is a hospitality investment, development, and management company dedicated to creating meaningful guest experiences across a diverse portfolio of hotels, independent brands, and restaurants.",
    thumbnail: "/images/client-logos/maadaadizi-logo.png",
    thumbnailAlt: "Maadaadizi logo, a flower-shaped mark above the wordmark Maadaadizi",
    images: [
      "/images/case-studies/maadaadizi/maadaadizi-hero.jpg",
      "/images/case-studies/maadaadizi/maadaadizi-story.jpg",
      "/images/case-studies/maadaadizi/maadaadizi-portfolio-grid.jpg",
    ],
    cardHoverImage: "/images/case-studies/maadaadizi/maadaadizi-card-hover.jpg",
    fullPageImage: "/images/case-studies/maadaadizi/maadaadizi-full.jpg",
    challenge: "Maadaadizi's hospitality portfolio had grown to span branded hotels, independent lifestyle properties, and restaurants, but the company had no unified digital presence to tell its story. Originally founded to manage diversified real estate on behalf of the Mille Lacs Band of Ojibwe, Maadaadizi needed a website that could carry its cultural origin story — the name means \"s/he begins a journey\" in the Ojibwe language — while clearly organizing a growing, varied property portfolio for guests, investors, and partners alike.",
    solution: "Brand Iron built a website that leads with warm, guest-facing photography and Maadaadizi's founding story, then organizes its full portfolio — branded hotels, independent brands, restaurants, and meetings & events spaces — into a clear, browsable structure that supports both guest discovery and future portfolio growth.",
    results: [],
  },
  {
    slug: "ares-aardex-real-estate-services",
    category: "websites",
    client: "Aardex Real Estate Services (ARES)",
    title: "Aardex Real Estate Services (ARES)",
    excerpt: "ARES is a vertically integrated commercial real estate company providing development, design, construction, brokerage, and property management under one roof.",
    thumbnail: "/images/client-logos/aardex-real-estate-logo.png",
    thumbnailAlt: "ARES logo, a mountain mark above the wordmark Aardex Real Estate Services",
    images: [
      "/images/case-studies/ares/ares-hero.jpg",
      "/images/case-studies/ares/ares-closer-look-1.jpg",
      "/images/case-studies/ares/ares-closer-look-2.jpg",
    ],
    cardHoverImage: "/images/portfolio/ares-website/ares-website-thumb.jpg",
    fullPageImage: "/images/portfolio/ares-website/ares-website-full.jpg",
    challenge: "With decades of experience spanning development, brokerage, and property management, ARES needed a website that could make the case for its full-lifecycle, in-house model — handling every phase of a commercial real estate project itself — rather than reading as just another regional brokerage site.",
    solution: "Brand Iron designed a website structured around ARES's three core service lines — Development, Brokerage, and Property Management — anchored by a real portfolio of managed properties and a clear \"Why ARES\" case for its vertically integrated, in-house approach.",
    results: [],
  },
  {
    slug: "cesa",
    category: "websites",
    client: "Colorado Emergency Services Association (CESA)",
    title: "Colorado Emergency Services Association",
    excerpt: "CESA is a nonprofit membership organization giving Colorado emergency service districts a single, trusted source for risk reduction, workers' comp, and safety resources.",
    thumbnail: "/images/client-logos/cesa-logo.png",
    thumbnailAlt: "CESA logo, a shield mark beside the wordmark Colorado Emergency Services Association",
    images: [
      "/images/case-studies/cesa/cesa-hero.jpg",
      "/images/case-studies/cesa/cesa-stats.jpg",
      "/images/case-studies/cesa/cesa-difference.jpg",
    ],
    cardHoverImage: "/images/case-studies/cesa/cesa-card-hover.jpg",
    fullPageImage: "/images/case-studies/cesa/cesa-full.jpg",
    challenge: "CESA brings together workers' compensation, risk management, and mental health resources for Colorado's emergency service districts, but needed a website that could make that bundled value proposition immediately clear to district leaders while driving membership applications.",
    solution: "Brand Iron built a website that opens with a direct, mission-driven headline, backs it up with a track-record stat band, and lays out exactly what makes CESA different — supported by clear membership and district-application calls to action throughout.",
    results: [],
  },
  {
    slug: "offen-petroleum",
    category: "websites",
    client: "Offen Petroleum",
    title: "Offen Petroleum",
    excerpt: "Offen Petroleum is a wholesale distributor of fuel, lubricants, propane, and DEF, serving commercial, industrial, and government customers nationwide.",
    thumbnail: "/images/client-logos/offen-petroleum-logo.png",
    thumbnailAlt: "Offen Petroleum logo mark and wordmark",
    images: [
      "/images/case-studies/offen-petroleum/offen-petroleum-hero.jpg",
      "/images/case-studies/offen-petroleum/offen-petroleum-what-we-do.jpg",
      "/images/case-studies/offen-petroleum/offen-petroleum-states-served.jpg",
    ],
    cardHoverImage: "/images/case-studies/offen-petroleum/offen-petroleum-card-hover.jpg",
    fullPageImage: "/images/case-studies/offen-petroleum/offen-petroleum-full.jpg",
    challenge: "Offen Petroleum's fuel, lubricant, and propane distribution network spans a wide swath of the country, but its site needed to make that multi-state reach and broad product line easy for commercial, industrial, and government buyers to navigate and act on.",
    solution: "Brand Iron built a website around a bold \"Fueling Efficiency\" positioning, an interactive states-served map that shows the true scale of Offen's operation, and a direct inquiry form tailored to fuel, propane, lubricant, and DEF requests.",
    results: [],
  },
  {
    slug: "us-transport",
    category: "websites",
    client: "US Transport",
    title: "US Transport",
    excerpt: "US Transport provides strategic bulk transportation and logistics solutions for mining, construction, manufacturing, and heavy industry.",
    thumbnail: "/images/client-logos/us-transport-logo.png",
    thumbnailAlt: "US Transport logo mark and wordmark",
    images: [
      "/images/case-studies/us-transport/us-transport-hero.jpg",
      "/images/case-studies/us-transport/us-transport-services-row.jpg",
      "/images/case-studies/us-transport/us-transport-dedicated-partner.jpg",
    ],
    cardHoverImage: "/images/case-studies/us-transport/us-transport-card-hover.jpg",
    fullPageImage: "/images/case-studies/us-transport/us-transport-full.jpg",
    challenge: "US Transport serves three distinct audiences — shipping customers, safety-focused stakeholders, and prospective drivers — but its site needed to route each of them to the right information quickly, without diluting its core message of dependable, long-term partnership.",
    solution: "Brand Iron designed a website built around three clear audience paths — Customers, Safety, and Drivers — paired with a straightforward \"long-term dedicated partner\" narrative that reinforces US Transport's commitment to every relationship it builds.",
    results: [],
  },
  {
    slug: "innovatix",
    category: "websites",
    client: "Innovatix Technology Partners",
    title: "Innovatix Technology Partners",
    excerpt: "Innovatix helps organizations modernize legacy systems and adopt cloud and AI technologies, backed by more than 30 years of enterprise delivery experience.",
    thumbnail: "/images/client-logos/innovatix-technology-partners-logo.png",
    thumbnailAlt: "Innovatix Technology Partners logo and wordmark",
    images: [
      "/images/case-studies/innovatix/innovatix-hero.jpg",
      "/images/case-studies/innovatix/innovatix-closer-look-1.jpg",
      "/images/case-studies/innovatix/innovatix-closer-look-2.jpg",
    ],
    cardHoverImage: "/images/portfolio/innovatix-website/innovatix-website-thumb.jpg",
    fullPageImage: "/images/portfolio/innovatix-website/innovatix-website-full.jpg",
    challenge: "As a 30-plus year technology services firm, Innovatix had deep enterprise credibility but needed a website that could reposition it around AI-driven modernization — without losing the track record that makes it trustworthy to large, risk-averse clients.",
    solution: "Brand Iron built a website led by a bold \"We Integrate\" AI-forward positioning statement, organized around Innovatix's five core solution areas, and backed by hard credibility stats — 30+ years, 400+ clients, 10+ countries — to ground the new message in real experience.",
    results: [],
  },
  {
    slug: "worldwide-vintage-autos",
    category: "revenue-growth",
    client: "Worldwide Vintage Autos",
    title: "Worldwide Vintage Autos",
    excerpt: "Worldwide Vintage Autos partnered with Brand Iron to increase awareness of its VIP program, grow its social media following, and generate leads for its vehicle consignment department.",
    thumbnail: "/images/client-logos/worldwide-vintage-autos-logo.png",
    thumbnailAlt: "Worldwide Vintage Autos logo mark and wordmark",
    images: [
      "/images/case-studies/worldwide-vintage-autos/worldwide-vintage-autos-hero.jpg",
      "/images/case-studies/worldwide-vintage-autos/worldwide-vintage-autos-cars-coffee.jpg",
      "/images/case-studies/worldwide-vintage-autos/worldwide-vintage-autos-testimonial.jpg",
    ],
    cardHoverImage: "/images/case-studies/worldwide-vintage-autos/worldwide-vintage-autos-hero.jpg",
    challenge: "Worldwide Vintage Autos brought in Brand Iron with three primary goals: increase awareness and registrations for its VIP program, grow its audience and following across social media, and generate leads for its vehicle consignment department. The opportunity was not simply to attract more attention — Worldwide Vintage Autos needed marketing efforts that could translate that attention into measurable engagement, registrations, leads, and ultimately business growth.",
    solution: "Brand Iron used an integrated digital marketing approach centered on reaching prospective customers across multiple channels. Search engine advertising helped Worldwide Vintage Autos connect with audiences actively searching online, while social media advertising expanded the company's reach and supported awareness of its VIP program and consignment offering. Email marketing provided an additional channel for keeping customers engaged, promoting inventory, and driving audiences back to the business.",
    results: [
      { value: "+180%", label: "VIP Program Registrations" },
      { value: "47.08%", label: "Email Open Rate" },
      { value: "33.94%", label: "Email Click-Through Rate" },
      { value: "200,000+", label: "Messages Sent" },
      { value: "+55%", label: "First-Quarter YoY Revenue" },
    ],
  },
];
