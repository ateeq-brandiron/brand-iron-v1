import { PortfolioCategoryId, portfolioCategories } from "@/data/portfolio";

export type CaseStudyLink = { text: string; href: string };

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

export type CaseStudyListItem = {
  title: string;
  description: string;
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
  /** "The Client" intro paragraph — source case studies for non-website engagements (capital raise, revenue growth) include this; website case studies don't need it since the hero + challenge cover the same ground. */
  clientDescription?: string;
  challenge: string;
  solution: string;
  /** Inline links applied to exact substrings of `challenge`/`solution`, same mechanism as blog article body links. */
  challengeLinks?: CaseStudyLink[];
  solutionLinks?: CaseStudyLink[];
  /** Itemized "What Brand Iron Delivered" list — used by non-website case studies whose source document breaks the engagement into named deliverables. */
  deliverables?: CaseStudyListItem[];
  /** A second itemized list for engagements with their own named stages/milestones (e.g. funding rounds), distinct from `deliverables`. */
  milestones?: CaseStudyListItem[];
  milestonesTitle?: string;
  results: CaseStudyStat[];
  /** "Engagement/Results at a Glance" summary table from the source document — rendered as a bordered spec table after the results band, distinct from `deliverables`/`milestones`. */
  glanceTitle?: string;
  glance?: CaseStudyListItem[];
  /** Closing narrative section shown after the results band, matching the source document's own wrap-up section. */
  closingTitle?: string;
  closingNote?: string;
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
    challengeLinks: [
      { text: "a brand identity to establish a stronger, more consistent presence", href: "/blog/rebranding-agency-transforms-your-business/" },
      { text: "unique value proposition in the competitive luxury hospitality market", href: "/blog/brand-positioning-ai-search-differentiation/" },
      { text: "demonstrate market leadership potential", href: "/blog/go-to-market-consultant-vs-marketing-agency/" },
    ],
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
    challengeLinks: [
      { text: "outdated website that no longer reflected its professional image", href: "/blog/is-your-website-costing-you-deals/" },
      { text: "realign brand messaging with its current market positioning", href: "/blog/brand-positioning-ai-search-differentiation/" },
    ],
    solution: "Brand Iron conducted a comprehensive brand and website audit, then delivered a full rebrand with a sophisticated visual identity and messaging platform, a modern professional website with improved user experience and clear calls to action, and compelling capital raise decks and teaser pieces. Targeted digital marketing — including SEO, content marketing, and marketing automation — was layered on top to increase visibility, nurture leads, and track performance.",
    solutionLinks: [{ text: "a full rebrand", href: "/blog/rebranding-agency-transforms-your-business/" }],
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
    challengeLinks: [{ text: "carry its cultural origin story", href: "/blog/rebranding-agency-transforms-your-business/" }],
    solution: "Brand Iron built a website that leads with warm, guest-facing photography and Maadaadizi's founding story, then organizes its full portfolio — branded hotels, independent brands, restaurants, and meetings & events spaces — into a clear, browsable structure that supports both guest discovery and future portfolio growth.",
    solutionLinks: [{ text: "a clear, browsable structure", href: "/blog/when-to-hire-a-go-to-market-strategy-consultant/" }],
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
    challengeLinks: [{ text: "reading as just another regional brokerage site", href: "/blog/brand-positioning-ai-search-differentiation/" }],
    solution: "Brand Iron designed a website structured around ARES's three core service lines — Development, Brokerage, and Property Management — anchored by a real portfolio of managed properties and a clear \"Why ARES\" case for its vertically integrated, in-house approach.",
    solutionLinks: [{ text: "a clear \"Why ARES\" case", href: "/blog/is-your-website-costing-you-deals/" }],
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
    challengeLinks: [{ text: "bundled value proposition immediately clear", href: "/blog/brand-positioning-ai-search-differentiation/" }],
    solution: "Brand Iron built a website that opens with a direct, mission-driven headline, backs it up with a track-record stat band, and lays out exactly what makes CESA different — supported by clear membership and district-application calls to action throughout.",
    solutionLinks: [{ text: "clear membership and district-application calls to action", href: "/blog/is-your-website-costing-you-deals/" }],
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
    solutionLinks: [
      { text: "bold \"Fueling Efficiency\" positioning", href: "/blog/brand-positioning-ai-search-differentiation/" },
      { text: "a direct inquiry form", href: "/blog/is-your-website-costing-you-deals/" },
    ],
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
    clientDescription: "Worldwide Vintage Autos is one of the country's foremost sources for classic cars and trucks, helping buyers make the process of purchasing their dream vehicle as painless and enjoyable as possible. With a highly visual product, a passionate customer base, and a constantly changing inventory of classic vehicles, Worldwide Vintage Autos needed a digital marketing approach that could keep customers engaged while creating new opportunities for growth.",
    challenge: "Worldwide Vintage Autos brought in Brand Iron with three primary goals: increase awareness and registrations for its VIP program, grow its audience and following across social media, and generate leads for its vehicle consignment department. The opportunity was not simply to attract more attention — Worldwide Vintage Autos needed marketing efforts that could translate that attention into measurable engagement, registrations, leads, and ultimately business growth.",
    solution: "Brand Iron used an integrated digital marketing approach centered on reaching prospective customers across multiple channels. Search engine advertising helped Worldwide Vintage Autos connect with audiences actively searching online, while social media advertising expanded the company's reach and supported awareness of its VIP program and consignment offering. Email marketing provided an additional channel for keeping customers engaged, promoting inventory, and driving audiences back to the business. Together, these efforts created a more connected digital presence designed to increase visibility, strengthen engagement, and generate measurable action.",
    deliverables: [
      { title: "Search Engine Marketing & Google Ads", description: "Brand Iron used search engine advertising to capture high-intent users actively searching for classic cars, vintage vehicles, consignment opportunities, and related automotive services." },
      { title: "Social Media Advertising", description: "Paid social campaigns expanded awareness and reach among enthusiasts, collectors, buyers, and sellers, while promoting the VIP program and supporting lead generation." },
      { title: "VIP Program Growth Campaigns", description: "Digital campaign activity drove awareness and registrations for the VIP program, helping WWVA build a stronger direct audience of engaged prospects." },
      { title: "Consignment Lead Generation", description: "Messaging and targeting spoke directly to vehicle owners, positioning WWVA as a trusted option for people looking to sell or consign classic cars and trucks." },
      { title: "Email Marketing Performance", description: "Email became a key channel for keeping WWVA's audience engaged, helping the company exceed industry-standard open and click-through benchmarks across more than 200,000 messages sent." },
      { title: "Digital Campaign Optimization", description: "Ongoing tracking and optimization connected campaign execution to measurable performance, improving visibility, engagement, registrations, leads, and revenue impact over time." },
    ],
    results: [
      { value: "+180%", label: "VIP Program Registrations" },
      { value: "47.08%", label: "Email Open Rate" },
      { value: "33.94%", label: "Email Click-Through Rate" },
      { value: "200,000+", label: "Messages Sent" },
      { value: "+55%", label: "First-Quarter YoY Revenue" },
    ],
    closingTitle: "From Visibility to Measurable Growth",
    closingNote: "The Worldwide Vintage Autos engagement demonstrates what can happen when digital marketing efforts are connected to clear business objectives. Rather than focusing on reach alone, Brand Iron helped Worldwide Vintage Autos build stronger engagement around its VIP program, connect with prospective customers through digital advertising and email, and support meaningful business growth. The result was not only a larger audience, but measurable increases in registrations, engagement, and revenue.",
  },
  {
    slug: "gofresh-homes",
    category: "capital-raise",
    client: "GoFresh Homes",
    title: "GoFresh Homes",
    excerpt: "GoFresh Homes partnered with Brand Iron to build the brand, messaging, investor materials, website, and go-to-market strategy needed to support the company from startup through multiple stages of fundraising and growth.",
    thumbnail: "/images/client-logos/gofresh-homes-logo.png",
    thumbnailAlt: "GoFresh Homes logo, a green house-and-pin mark beside the wordmark GoFresh Homes",
    images: [
      "/images/case-studies/gofresh-homes/gofresh-homes-hero.jpg",
      "/images/case-studies/gofresh-homes/gofresh-homes-multistate-map.jpg",
      "/images/case-studies/gofresh-homes/gofresh-homes-growth-model.jpg",
    ],
    cardHoverImage: "/images/case-studies/gofresh-homes/gofresh-homes-card-hover.jpg",
    clientDescription: "GoFresh Homes operated in the mobile home park ownership space, with several mobile home parks in its portfolio. As the company grew, it needed more than a recognizable brand. It needed a clear market position, compelling investor communications, a professional digital presence, and a go-to-market strategy capable of supporting successive stages of capital raising. The goal was to create a cohesive foundation that could help GoFresh Homes present itself with greater credibility and authority as the business expanded.",
    challenge: "GoFresh Homes was building the company while also preparing to raise capital across multiple stages. The company needed to clearly define its brand and messaging, establish a professional identity, communicate the investment opportunity to prospective investors, and build the digital and go-to-market infrastructure required to support future growth. Because GoFresh Homes was progressing from startup into successive funding stages, the brand also needed to evolve with the business rather than serve only a single capital raise.",
    solution: "Brand Iron worked with GoFresh Homes from the early stages of the company to create a strategic brand and growth foundation. Through BrandStorm, Brand Iron helped develop the company's positioning and messaging, then translated that strategy into a cohesive visual identity. The engagement expanded into capital raise materials, website design and development, and go-to-market strategy and implementation. Rather than treating branding, fundraising, and market growth as separate initiatives, Brand Iron helped connect them into one platform designed to support GoFresh Homes as the company advanced through each stage of its development.",
    deliverables: [
      { title: "Brand Strategy and Messaging", description: "Brand Iron developed the GoFresh Homes brand foundation, including core messaging and positioning designed to communicate the company's value more clearly and credibly." },
      { title: "Visual Identity", description: "Moodboards and logo development helped establish a cohesive and professional identity for the growing company." },
      { title: "Capital Raise Decks", description: "Brand Iron created investor-facing capital raise presentations to help GoFresh Homes communicate its business model, investment opportunity, and growth strategy across multiple fundraising stages." },
      { title: "Website Design and Development", description: "Brand Iron designed and developed the GoFresh Homes website, giving the company a professional digital platform to support its brand, investor communications, and market presence." },
      { title: "Go-to-Market Strategy and Implementation", description: "The engagement also included GTM strategy and implementation, helping GoFresh Homes connect its brand and messaging to broader growth and market-development efforts." },
    ],
    milestonesTitle: "Supporting Growth Across Multiple Funding Stages",
    milestones: [
      { title: "Friends and Family Round", description: "Brand Iron supported GoFresh Homes during its early fundraising stage as the business began establishing its market presence." },
      { title: "Fund #1", description: "As the company advanced, Brand Iron continued supporting its brand and investor communications through Fund #1." },
      { title: "Fund #2 — $25M Target", description: "Brand Iron supported the development of the materials, messaging, website, and GTM foundation surrounding Fund #2." },
      { title: "Fund #3 — $100M Target", description: "At the time of the original case study materials, GoFresh Homes was progressing toward Fund #3 as it continued expanding its position in the mobile home park ownership space." },
    ],
    results: [
      { value: "$25M", label: "Fund #2 Target" },
      { value: "$100M", label: "Fund #3 Target" },
    ],
    closingTitle: "From Startup Brand to Growth Platform",
    closingNote: "The GoFresh Homes engagement illustrates how brand strategy can support a company well beyond its initial launch. As organizations move from startup through successive rounds of fundraising, their story becomes more complex — investors need to understand not only the immediate opportunity, but also the company's credibility, business model, market position, and long-term growth potential. Brand Iron helped GoFresh Homes build the brand, investor materials, website, and go-to-market foundation needed to support that progression, resulting in a more cohesive platform designed to grow alongside the company as it advanced through multiple stages of capital raising and expansion.",
  },
  {
    slug: "bow-river-auc-group",
    category: "capital-raise",
    client: "Bow River – AUC Group",
    title: "Bow River – AUC Group",
    excerpt: "Bow River partnered with Brand Iron to strengthen the positioning of AUC Group, a wastewater treatment solutions provider, and prepare the company for the market — resulting in a $65 million acquisition and a 3.6x return on the original investment.",
    thumbnail: "/images/case-studies/bow-river-auc-group/auc-group-thumbnail-placeholder.png",
    thumbnailAlt: "AUC Group, L.P. placeholder logo mark and wordmark in navy and orange",
    // TODO: hero and thumbnail are designed placeholders; auc-group-deck-composite.jpg is real (but low-res, 808x735) deck art found in Drive.
    // Katrina confirmed (Slack, #bi-internal-team) she searched Drive for an actual AUC Group logo/deck and the only two candidate files
    // (Bow River Capital RE Fund I 2015 deck, Bow River's own PPT color-guide PDF) are a different engagement entirely - no "AUC" match in
    // either. Swap thumbnail/hero for real assets once Shelly/Olivia/Katrina locate the actual AUC Group materials.
    images: [
      "/images/case-studies/bow-river-auc-group/bow-river-auc-hero-placeholder.jpg",
      "/images/case-studies/bow-river-auc-group/auc-group-deck-composite.jpg",
    ],
    cardHoverImage: "/images/case-studies/bow-river-auc-group/auc-group-deck-composite.jpg",
    clientDescription: "AUC Group was a wastewater treatment total solutions provider with multi-state U.S. and international experience. As part of its broader investment strategy, Bow River needed to clearly communicate AUC's market position, business model, capabilities, and growth potential to prospective buyers.",
    challenge: "AUC had the fundamentals of a strong company, but Bow River needed to ensure those strengths were clearly communicated to the market. The objective was to position AUC as a compelling acquisition opportunity backed by a strong, credible story. That required more than presenting financial information — the materials needed to show why AUC was differentiated, where its growth opportunities existed, and how its capabilities could translate into long-term value for a prospective acquirer.",
    solution: "Brand Iron worked with Bow River to strengthen the way AUC was positioned and presented. The engagement included strategic consulting and the development of a comprehensive pitch deck designed to communicate AUC's value to potential buyers. The presentation highlighted key elements of the business, including its market experience, operating model, geographic reach, and growth opportunity, while organizing those elements into a clear and persuasive investment story.",
    deliverables: [
      { title: "Strategic Positioning", description: "Brand Iron helped Bow River present AUC as a strong, established company with a clear position in the wastewater treatment market." },
      { title: "Acquisition Pitch Deck", description: "A comprehensive presentation was developed to give prospective buyers a clear understanding of AUC's business, capabilities, market presence, and potential." },
      { title: "Growth Story", description: "The materials communicated AUC's business model as resilient, repeatable, and expandable, helping prospective acquirers understand the opportunity beyond the company's current operations." },
      { title: "Market-Ready Communication", description: "The engagement helped Bow River translate AUC's underlying strengths into a cohesive story designed for a sophisticated acquisition audience." },
    ],
    results: [
      { value: "$65M", label: "Acquisition Value" },
      { value: "3.6x", label: "Return on Original Investment" },
    ],
    closingTitle: "From Investment Story to Successful Exit",
    closingNote: "The AUC Group engagement demonstrates the role strategic positioning can play in a successful transaction. A strong company may already have attractive fundamentals, but those fundamentals still need to be communicated in a way that allows buyers to quickly understand the opportunity, recognize the value, and envision the company's potential. By combining strategic consulting with a focused acquisition pitch deck, Brand Iron helped Bow River position AUC for the market and communicate a stronger investment story. Following the positioning and acquisition preparation work, AUC Group was acquired for $65 million by a private equity fund in the Philadelphia area — a 3.6x return on Bow River's original investment.",
  },
  {
    slug: "canvas-communities",
    category: "capital-raise",
    client: "Canvas Communities",
    title: "Canvas Communities",
    excerpt: "Canvas Communities partnered with Brand Iron to build the brand, messaging, visual identity, and capital raise materials needed to bring a new single-family rental community concept to market.",
    thumbnail: "/images/client-logos/canvas-communities-logo.png",
    thumbnailAlt: "Canvas Communities logo, a layered house mark in blue, cream, olive, and gold above the wordmark Canvas Communities",
    images: [
      "/images/case-studies/canvas-communities/canvas-communities-hero.jpg",
      "/images/case-studies/canvas-communities/canvas-communities-closer-look-1.jpg",
      "/images/case-studies/canvas-communities/canvas-communities-closer-look-2.jpg",
    ],
    cardHoverImage: "/images/case-studies/canvas-communities/canvas-communities-closer-look-1.jpg",
    clientDescription: "WaterMark Equity Group was preparing to bring a new residential investment concept to market under a dedicated brand. The opportunity became Canvas Communities, a brand focused on single-family rental home communities. To support the launch, WaterMark needed a professional identity and communication platform capable of representing the opportunity consistently across investor materials and the broader market.",
    challenge: "The business concept was established, but the story surrounding it still needed to be defined. WaterMark needed to translate the opportunity into a clear, credible proposition that prospective investors could quickly understand and evaluate. That meant establishing a distinct identity and position for Canvas Communities, clear messaging around the business and investment opportunity, a cohesive visual system capable of supporting the brand as it grew, and investor-facing materials that communicated the market opportunity and development vision. The challenge was to connect these elements into one unified brand and capital-raise platform.",
    challengeLinks: [{ text: "a distinct identity and position", href: "/blog/brand-positioning-ai-search-differentiation/" }],
    solution: "Brand Iron began with a BrandStorm engagement to establish the strategic foundation for the new brand. The process included development of the company's messaging and positioning, helping define how the concept would be presented and differentiated. Brand Iron then translated that strategy into the visual identity for Canvas Communities, including moodboards and logo development. With the brand established, Brand Iron created the capital raise deck needed to communicate the opportunity to prospective investors. The result was a cohesive platform connecting the business concept, brand story, visual identity, and investment opportunity.",
    deliverables: [
      { title: "Brand Strategy", description: "Through the BrandStorm, Brand Iron helped establish the strategic foundation for Canvas Communities and clarify how the concept should be presented to the market." },
      { title: "Messaging & Positioning", description: "Brand Iron developed messaging and positioning designed to communicate the value of the single-family rental community model to investors and other stakeholders." },
      { title: "Naming & Brand Development", description: "The new Canvas Communities brand provided WaterMark Equity Group with a dedicated identity for the residential community concept." },
      { title: "Visual Identity", description: "Moodboards and logo development brought the positioning to life through a cohesive and professional visual system." },
      { title: "Capital Raise Deck", description: "Brand Iron created an investor-facing capital raise presentation designed to communicate the market opportunity, investment story, and vision behind Canvas Communities." },
    ],
    glanceTitle: "Engagement at a Glance",
    glance: [
      { title: "Parent Company", description: "WaterMark Equity Group" },
      { title: "Brand", description: "Canvas Communities" },
      { title: "Brand Strategy", description: "The BrandStorm Strategy" },
      { title: "Messaging", description: "Positioning & Core Brand Messaging" },
      { title: "Visual Identity", description: "Moodboards & Logo Development" },
      { title: "Investor Communications", description: "Capital Raise Deck" },
      { title: "Brand Launch", description: "Early 2020" },
      { title: "Capital Raise Goal", description: "$100M" },
      { title: "Development Goal", description: "500 Units" },
    ],
    results: [
      { value: "$100M", label: "Capital Raise Goal" },
      { value: "500 Units", label: "Development Goal" },
    ],
    closingTitle: "From an Idea to a Market-Ready Brand",
    closingNote: "The Canvas Communities engagement demonstrates the role brand strategy can play when launching a new business concept. WaterMark Equity Group began with an idea for single-family rental communities. To move that idea forward, it needed a clear value proposition, a professional identity, and investor-facing materials capable of communicating the scale of the opportunity. Brand Iron helped connect those pieces — developing the strategy, messaging, positioning, visual identity, and capital raise deck needed to turn the original concept into a cohesive brand designed to support fundraising and development. Brand Iron launched the new Canvas Communities brand in early 2020, giving WaterMark Equity Group a more complete platform for taking its concept to market. At the time of the original case study materials, Canvas Communities was progressing toward both its fundraising and community development objectives.",
  },
  {
    slug: "colorado-center",
    category: "revenue-growth",
    client: "Colorado Center",
    title: "Colorado Center",
    excerpt: "Colorado Center partnered with Brand Iron to strengthen its identity, attract new tenants, and create the marketing foundation needed to support the next phase of the property's development.",
    thumbnail: "/images/client-logos/colorado-center-logo.png",
    thumbnailAlt: "Colorado Center logo, a six-circle pinwheel mark in shades of green beside the wordmark Colorado Center",
    images: [
      "/images/case-studies/colorado-center/colorado-center-hero.jpg",
      "/images/case-studies/colorado-center/colorado-center-closer-look-1.jpg",
      "/images/case-studies/colorado-center/colorado-center-closer-look-2.jpg",
    ],
    cardHoverImage: "/images/case-studies/colorado-center/colorado-center-closer-look-1.jpg",
    clientDescription: "Colorado Center is a mixed-use commercial property in Denver offering office, retail, and entertainment space. With existing towers in operation and additional development planned, Colorado Center needed to present itself as more than a collection of buildings. The property required a stronger identity that could communicate its broader tenant experience and support leasing across both existing and future space.",
    challenge: "Colorado Center needed to attract new office and retail tenants for its first two towers while securing the momentum needed to move forward with a third. The property was targeting 90% leasing of available office and retail space before construction of the next tower was complete. Although the property had significant potential, its market presence lacked a distinctive story that could bring the full experience together and differentiate Colorado Center from other commercial developments. The challenge was to create a brand that could appeal to prospective tenants, partners, and the surrounding community while supporting aggressive leasing and development goals.",
    challengeLinks: [{ text: "a distinctive story", href: "/blog/brand-positioning-ai-search-differentiation/" }],
    solution: "Brand Iron established a new positioning platform centered on the idea of \"live, work, play.\" The strategy focused on communicating Colorado Center as a connected destination rather than simply an office development—one that brought together business, convenience, amenities, entertainment, and access in a single location. That positioning became the foundation for the property's messaging, brand communications, leasing materials, digital presence, and supporting collateral. By creating greater consistency across the brand, Brand Iron helped Colorado Center tell a clearer and more compelling story to prospective tenants.",
    deliverables: [
      { title: "Brand Positioning", description: "Brand Iron created a distinctive story for Colorado Center based on the property's \"live, work, play\" experience, giving the development a clearer market identity." },
      { title: "Messaging & Communications", description: "The positioning was carried through messaging, publications, correspondence, and other internal and external communications to create a more consistent brand experience." },
      { title: "Visual Identity", description: "Brand Iron evolved the property's identity and established a stronger visual foundation that could be applied across leasing and marketing materials." },
      { title: "Website Design & Development", description: "Creative web design and development helped translate the Colorado Center experience into a digital environment for prospective tenants and other audiences." },
      { title: "Leasing & Print Materials", description: "Brand Iron developed print and property marketing materials designed to communicate available space, property features, amenities, and future development opportunities." },
    ],
    glanceTitle: "Results at a Glance",
    glance: [
      { title: "Occupancy", description: "96%" },
      { title: "Initial Leasing Objective", description: "90% of available office and retail space" },
      { title: "Development Progress", description: "Pre-leasing supported Tower III growth" },
      { title: "Expansion", description: "Fourth building moved to groundbreaking" },
      { title: "Brand Platform", description: "\"Live, Work, Play\"" },
      { title: "Brand Iron Support", description: "Positioning, Messaging, Identity, Website, Print & Leasing Materials" },
    ],
    results: [
      { value: "96%", label: "Occupancy" },
      { value: "90%", label: "Initial Leasing Objective" },
      { value: "Tower III", label: "Pre-Leasing Supported Growth" },
      { value: "4th Building", label: "Moved to Groundbreaking" },
    ],
    closingTitle: "From Property Marketing to Long-Term Growth",
    closingNote: "Colorado Center already had the ingredients of a compelling destination. Brand Iron's role was to bring those strengths together into a brand prospective tenants could more easily understand and connect with. By creating a stronger identity, a differentiated market story, and consistent communications across digital and print channels, Brand Iron helped Colorado Center build greater awareness and leasing momentum. According to the original case study materials, that foundation helped the property secure an increased volume of pre-leases for its third building, reach 96% occupancy, and support continued expansion — with Colorado Center subsequently breaking ground on a fourth building.",
  },
];
