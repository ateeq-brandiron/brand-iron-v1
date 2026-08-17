import type { Metadata } from "next";

const TITLE = "Case Studies | Real Results From Brand Iron Clients | Brand Iron";
const DESCRIPTION = "Explore Brand Iron case studies covering the challenge, solution, and measurable results behind client engagements across brand, website, GTM, capital raise, and revenue growth work.";
const URL = "https://brandiron.net/case-studies";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
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

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
