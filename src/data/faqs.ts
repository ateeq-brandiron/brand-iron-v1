export type FaqCategoryId = "general" | "ai" | "brand" | "gtm" | "capital" | "process";

export type FaqCategory = { id: FaqCategoryId; label: string };

export const faqCategories: FaqCategory[] = [
  { id: "general", label: "General" },
  { id: "ai", label: "AI Visibility" },
  { id: "brand", label: "Brand Strategy" },
  { id: "gtm", label: "GTM & Revenue" },
  { id: "capital", label: "Capital Raise" },
  { id: "process", label: "Working With Us" },
];

export type Faq = { category: FaqCategoryId; q: string; a: string };

export const faqs: Faq[] = [
  {
    category: "general",
    q: "What is Brand Iron?",
    a: "Brand Iron is a business growth strategy and branding agency. We help organizations become discoverable, trusted, and chosen by combining brand strategy, AI visibility, go-to-market execution, revenue engineering, outbound growth, and website development into one connected system rather than a set of disconnected services.",
  },
  {
    category: "general",
    q: "What makes Brand Iron different?",
    a: "We start with strategy, not tactics — every engagement begins with understanding your business, market, and goals before we recommend a solution. We also pair human strategists with AI-assisted intelligence: AI accelerates research and execution, while experienced people provide the judgment and creativity that drive real outcomes. We measure success by stronger positioning and measurable growth, not by campaigns launched or content published.",
  },
  {
    category: "general",
    q: "Who does Brand Iron work with?",
    a: "We work with founders, executives, and growth-focused organizations across a range of industries — from real estate and professional services to hospitality, technology, and capital markets. Our approach adapts to your stage of growth, whether you're refining a brand, entering a new market, or preparing to raise capital.",
  },
  {
    category: "general",
    q: "Do you work as an extension of our internal team?",
    a: "Yes. We build alongside your leadership team rather than operating at arm's length. That means shared visibility into strategy, regular reporting, and recommendations built around your goals — not a one-size-fits-all playbook.",
  },
  {
    category: "ai",
    q: 'Why is being visible in the "AI-driven buying landscape" important?',
    a: "Buyers now complete much of their decision-making before ever speaking with a sales team — searching Google, asking AI assistants, comparing competitors, and reading reviews. If your business isn't visible, credible, and consistent across those touchpoints, you can be eliminated before the first conversation even happens.",
  },
  {
    category: "ai",
    q: "What is an AI Visibility Diagnostic?",
    a: "It's an assessment of how discoverable and accurately represented your business is across search engines and AI assistants. It identifies where you're being surfaced (or missed), how your brand is being described, and the specific gaps holding back your visibility — with practical recommendations to close them.",
  },
  {
    category: "ai",
    q: "How is AI visibility different from traditional SEO?",
    a: "Traditional SEO focuses on ranking in search engine results. AI visibility extends that work to how AI assistants and answer engines find, interpret, and cite your business — which depends on structured content, clear entity signals, and credible sources referencing your brand, in addition to standard search fundamentals.",
  },
  {
    category: "brand",
    q: "What's included in a Brand Foundation engagement?",
    a: "A Brand Foundation engagement connects strategy, messaging, and visual identity into one system — positioning, voice, and design decisions that are built to hold up across every channel, rather than a logo or style guide delivered in isolation.",
  },
  {
    category: "brand",
    q: "How long does a brand strategy engagement typically take?",
    a: "Timelines vary by scope. A Brand Foundation engagement is typically scoped in weeks, while a Brand Foundation + Market Launch engagement — which adds go-to-market execution — runs longer. We'll outline a specific timeline once we understand your goals and current state.",
  },
  {
    category: "gtm",
    q: "What is GTM Strategy, and how does it connect to Revenue Engineering?",
    a: "GTM Strategy aligns your positioning, messaging, channels, and execution so you can launch or scale with confidence. Revenue Engineering picks up where that ends — connecting marketing automation, your CRM, and revenue operations so leads move smoothly through the funnel and every stage is visible and measurable.",
  },
  {
    category: "gtm",
    q: "Can you help if our sales and marketing teams aren't aligned?",
    a: "Yes — this is one of the most common growth challenges we see. Disconnected messaging, inconsistent lead quality, and siloed data are usually symptoms of a broader alignment gap between brand, marketing, sales, and operations, and we work across all of those functions to close it.",
  },
  {
    category: "gtm",
    q: "Do you also handle outbound and demand generation?",
    a: "Yes. Our Outbound Growth service builds and runs LinkedIn, email, and SDR-driven outreach programs designed to put your business in front of the right buyers, with the messaging and follow-through needed to turn conversations into qualified opportunities.",
  },
  {
    category: "capital",
    q: "How does Brand Iron help with fundraising?",
    a: "We help founders prepare for investment with compelling pitch decks, fundraising strategy, and targeted investor outreach — including access to a network of 150,000+ investors — so you can approach fundraising with a clear narrative and a defined outreach plan rather than starting from scratch.",
  },
  {
    category: "capital",
    q: "What's included in Capital Raise Support?",
    a: "Support spans capital raise decks, access to our investor database, structured investor outreach, and investor-facing GTM support — designed to build investor confidence at every stage of a raise.",
  },
  {
    category: "process",
    q: "How do we get started with Brand Iron?",
    a: "Every engagement starts with a strategy session, where we discuss your business goals, current challenges, and growth opportunities. From there, we identify where your biggest opportunities lie and outline practical next steps before recommending a specific solution.",
  },
  {
    category: "process",
    q: "How does Brand Iron measure success?",
    a: "We measure success by stronger positioning, better opportunities, and measurable business growth — not by activity like campaigns launched or content published. If a recommendation won't create measurable value for your business, we won't make it.",
  },
  {
    category: "process",
    q: "Can we start with one service and expand later?",
    a: "Yes. Each solution delivers value on its own, and many clients start with a single focus area — such as an AI Visibility Diagnostic or a GTM Growth Review — before expanding into a fully connected growth strategy.",
  },
];
