import type { Metadata } from "next";

const TITLE = "B2B Marketing & Brand Strategy | Brand Iron";
const DESCRIPTION = "B2B marketing services from Brand Iron: brand strategy, AI visibility, GTM, revenue engineering, outbound growth, capital raise, and website development.";
// Social cards already show the domain, so these omit the site name.
const OG_TITLE = "B2B Marketing & Brand Strategy Services";
const OG_DESCRIPTION = "Brand strategy, AI visibility, GTM, revenue engineering, outbound growth, capital raise, and web development under one roof.";
const URL = "https://brandiron.net/services/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/" },
  openGraph: {
    type: "website",
    url: URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [SOCIAL_IMAGE],
    siteName: "Brand Iron",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrandIron",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
