import type { Metadata } from "next";

const TITLE = "Conversion-Focused Website Development | Brand Iron";
const DESCRIPTION = "Get a strategic, responsive, SEO-ready website designed to strengthen credibility, improve AI visibility, and generate more qualified leads.";
const URL = "https://brandiron.net/services/website-development/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/website-development/" },
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

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
