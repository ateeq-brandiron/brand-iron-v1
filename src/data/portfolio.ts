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
  /** Only for type: "website" — clean client logo shown by default on the grid card; hovering crossfades to `thumbnail`. */
  logoThumbnail?: string;
  /** Additional real deliverable pages shown as a gallery in the expand modal (logo/deck items). Falls back to [thumbnail] if omitted. */
  images?: string[];
};

export const portfolioItems: PortfolioItem[] = [
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
    thumbnail: "/images/portfolio/real-international/real-international-welcome.jpg",
    thumbnailAlt: "Real International investors deck welcome slide over a modern San Antonio building",
    description: "An investors deck for a real estate investment firm, pairing a confident visual narrative with the track record and strategy investors need to see.",
    images: [
      "/images/portfolio/real-international/real-international-welcome.jpg",
      "/images/portfolio/real-international/real-international-about-you.jpg",
      "/images/portfolio/real-international/real-international-our-story.jpg",
      "/images/portfolio/real-international/real-international-timeline.jpg",
      "/images/portfolio/real-international/real-international-case-study-lantern.jpg",
      "/images/portfolio/real-international/real-international-capabilities.jpg",
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
    slug: "volition-hospitality-capital-raise",
    category: "capital-raise",
    title: "Volition Hospitality",
    client: "Volition Hospitality",
    type: "deck",
    thumbnail: "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-cover.jpg",
    thumbnailAlt: "Volition Hospitality starburst logo over an Art Deco hotel exterior at dusk",
    description: "A capital raise deck for a hospitality investment firm, translating its hotel-transformation model and growth vision into a confident story for prospective investors.",
    images: [
      "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-cover.jpg",
      "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-our-story.jpg",
      "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-what-we-do.jpg",
      "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-our-vision.jpg",
      "/images/portfolio/volition-hospitality-capital-raise/volition-hospitality-crd-why-volition.jpg",
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
    slug: "msp-logo-revision",
    category: "brand-identity",
    title: "MSP Platform Accelerator",
    client: "MSP Platform Accelerator",
    type: "logo",
    thumbnail: "/images/portfolio/msp-logo-revision/msp-logo-revision-usage.jpg",
    thumbnailAlt: "Revised MSP Platform Accelerator logo in navy blue over a white background",
    description: "A logo revision for an MSP acquisition platform, refining the mark's proportions and spacing for sharper reproduction across both light and dark applications.",
    images: [
      "/images/portfolio/msp-logo-revision/msp-logo-revision-usage.jpg",
      "/images/portfolio/msp-logo-revision/msp-logo-revision-cover.jpg",
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
    slug: "volition-hospitality-logo-redesign",
    category: "brand-identity",
    title: "Volition Hospitality",
    client: "Volition Hospitality",
    type: "logo",
    thumbnail: "/images/portfolio/volition-hospitality-logo-redesign/volition-hospitality-logo-redesign-mark.jpg",
    thumbnailAlt: "Volition Hospitality starburst logo mark redesign in teal and gold",
    description: "A logo redesign exploration for a luxury hospitality investment firm, testing the starburst mark and wordmark across color and weight variations to land on its most confident lockup.",
    images: [
      "/images/portfolio/volition-hospitality-logo-redesign/volition-hospitality-logo-redesign-mark.jpg",
      "/images/portfolio/volition-hospitality-logo-redesign/volition-hospitality-logo-redesign-options.jpg",
    ],
  },
  {
    slug: "ares-website",
    category: "websites",
    title: "Aardex Real Estate Services (ARES)",
    client: "Aardex Real Estate Services (ARES)",
    type: "website",
    thumbnail: "/images/portfolio/ares-website/ares-website-thumb.jpg",
    thumbnailAlt: "ARES website hero showing a commercial real estate interior and the tagline Commercial Real Estate, managed from the ground-up",
    description: "A website for a vertically integrated commercial real estate firm, translating its full-lifecycle development, brokerage, and property management services into a clean, credible digital presence.",
    fullPageImage: "/images/portfolio/ares-website/ares-website-full.jpg",
    logoThumbnail: "/images/case-studies/ares/ares-logo-card.jpg",
  },
  {
    slug: "real-international-website",
    category: "websites",
    title: "Real International",
    client: "Real International",
    type: "website",
    thumbnail: "/images/portfolio/real-international-website/real-international-website-thumb.jpg",
    thumbnailAlt: "Real International website hero with an aerial photo of the Austin river and skyline at dusk",
    description: "A website redesign for a Texas real estate investment firm, giving its brokerage, asset management, and investor-relations story a confident, editorial digital presence.",
    fullPageImage: "/images/portfolio/real-international-website/real-international-website-full.jpg",
    logoThumbnail: "/images/portfolio/real-international-brand/real-international-icon.jpg",
  },
  {
    slug: "volition-hospitality-website",
    category: "websites",
    title: "Volition Hospitality",
    client: "Volition Hospitality",
    type: "website",
    thumbnail: "/images/portfolio/volition-hospitality-website/volition-hospitality-website-thumb.jpg",
    thumbnailAlt: "Volition Hospitality website hero showing a luxury hotel room and the headline Elevating Hospitality Experiences",
    description: "A website for a hospitality investment firm, pairing rich property photography with a clear investor-facing pitch for its property-transformation model.",
    fullPageImage: "/images/portfolio/volition-hospitality-website/volition-hospitality-website-full.jpg",
    logoThumbnail: "/images/portfolio/volition-hospitality-logo-redesign/volition-hospitality-logo-redesign-mark.jpg",
  },
  {
    slug: "innovatix-website",
    category: "websites",
    title: "Innovatix Technology Partners",
    client: "Innovatix Technology Partners",
    type: "website",
    thumbnail: "/images/portfolio/innovatix-website/innovatix-website-thumb.jpg",
    thumbnailAlt: "Innovatix Technology Partners website hero with the headline We Integrate, So You Can Operate Faster, Better and Smarter",
    description: "A website for an AI-driven technology solutions partner, translating deep enterprise modernization expertise into a confident, product-forward digital presence.",
    fullPageImage: "/images/portfolio/innovatix-website/innovatix-website-full.jpg",
    logoThumbnail: "/images/portfolio/innovatix/innovatix-brand-identity.jpg",
  },
  {
    slug: "black-lake-website",
    category: "websites",
    title: "Black Lake Capital",
    client: "Black Lake Capital",
    type: "website",
    thumbnail: "/images/portfolio/black-lake-website/black-lake-website-thumb.jpg",
    thumbnailAlt: "Black Lake Capital website hero over a fjord landscape with the headline Investors in Technology",
    description: "A website for a strategic investment firm, pairing moody fjord photography with a confident, founder-first portfolio-company narrative.",
    fullPageImage: "/images/portfolio/black-lake-website/black-lake-website-full.jpg",
    logoThumbnail: "/images/case-studies/black-lake/black-lake-logo-card.jpg",
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
