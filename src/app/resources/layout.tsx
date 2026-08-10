import type { Metadata } from "next";

const TITLE = "Resources | Interviews, Podcasts & Insights | Brand Iron";
const DESCRIPTION = "Explore interviews, podcasts, videos, and features on branding, leadership, capital raising, and revenue growth from Brand Iron CEO Michael Doyle.";
const URL = "https://brandiron.net/resources";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/resources" },
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

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
