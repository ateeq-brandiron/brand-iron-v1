import type { Metadata } from "next";

const TITLE = "B2B Outbound Lead Generation Services | Brand Iron";
const DESCRIPTION = "Generate qualified B2B opportunities with targeted prospecting, LinkedIn outreach, email campaigns, follow-up systems, and campaign optimization.";
const URL = "https://brandiron.net/services/outbound-growth/";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/outbound-growth/" },
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

export default function OutboundGrowthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
