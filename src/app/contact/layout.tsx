import type { Metadata } from "next";

const TITLE = "Contact Brand Iron | Book a Strategy Session";
const DESCRIPTION = "Get in touch with Brand Iron's growth marketing team. Book a strategy session to discuss brand strategy, GTM, AI visibility, or website development.";
const URL = "https://brandiron.net/contact";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
