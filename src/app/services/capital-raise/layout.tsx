import type { Metadata } from "next";

const TITLE = "Capital Raise & Investor Outreach Services | Brand Iron";
const DESCRIPTION = "Prepare for fundraising with an investor-ready pitch deck, compelling investment story, targeted investor research, and strategic outreach support.";
const URL = "https://brandiron.net/services/capital-raise";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/capital-raise" },
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

export default function CapitalRaiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
