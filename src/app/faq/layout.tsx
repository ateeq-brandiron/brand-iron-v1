import type { Metadata } from "next";

const TITLE = "Frequently Asked Questions | Brand Iron";
const DESCRIPTION = "Answers to common questions about Brand Iron's brand strategy, AI visibility, GTM, revenue engineering, outbound growth, and capital raise services.";
const URL = "https://brandiron.net/faq";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
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

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
