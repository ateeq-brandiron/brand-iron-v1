import type { Metadata } from "next";

const TITLE = "AI Visibility, AEO & GEO Services | Brand Iron";
const DESCRIPTION = "Improve your visibility across Google, ChatGPT, Gemini, Claude, and Perplexity with integrated SEO, AEO, GEO, content, and authority building.";
const URL = "https://brandiron.net/services/ai-visibility/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/ai-visibility/" },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
    siteName: "Brand Iron",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrandIron",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function AIVisibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
