import type { Metadata } from "next";

const TITLE = "Our Services | Brand Strategy, GTM, AI Visibility & More | Brand Iron";
const DESCRIPTION = "Explore Brand Iron's growth services, including brand strategy, go-to-market strategy, AI visibility, website development, and revenue engineering.";
const URL = "https://brandiron.net/services/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/" },
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

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
