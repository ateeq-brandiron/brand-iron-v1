import type { Metadata } from "next";

const TITLE = "Brand Strategy & Rebranding Services | Brand Iron";
const DESCRIPTION = "Clarify your positioning, messaging, and visual identity with a brand strategy built to earn trust and drive growth. Request a branding proposal.";
const URL = "https://brandiron.net/services/brand-strategy/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/brand-strategy/" },
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

export default function BrandStrategyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
