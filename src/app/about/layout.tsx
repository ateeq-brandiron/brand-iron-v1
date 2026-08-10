import type { Metadata } from "next";

const TITLE = "About Brand Iron | Our Story & Mission";
const DESCRIPTION = "Learn about Brand Iron's approach to forging brands and driving revenue for growth-focused businesses.";
const URL = "https://brandiron.net/about";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
