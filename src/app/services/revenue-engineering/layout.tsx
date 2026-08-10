import type { Metadata } from "next";

const TITLE = "Revenue Engineering & RevOps Consulting | Brand Iron";
const DESCRIPTION = "Connect marketing, sales, CRM, automation, and analytics into a measurable revenue system built to improve conversion and accelerate growth.";
const URL = "https://brandiron.net/services/revenue-engineering";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/revenue-engineering" },
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

export default function RevenueEngineeringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
