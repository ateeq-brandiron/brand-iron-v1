import type { Metadata } from "next";

const TITLE = "Go-to-Market Strategy Consulting | Brand Iron";
const DESCRIPTION = "Build a go-to-market strategy that aligns positioning, demand generation, sales, and operations to create qualified pipeline and sustainable growth.";
const URL = "https://brandiron.net/services/gtm/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/gtm/" },
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

export default function GTMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
