import type { Metadata } from "next";

const TITLE = "Insights & Resources | Brand Iron Blog";
const DESCRIPTION = "Strategic insights on brand strategy, go-to-market planning, AI visibility, and revenue growth from the Brand Iron team.";
const URL = "https://brandiron.net/blog/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  openGraph: {
    type: "website",
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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
