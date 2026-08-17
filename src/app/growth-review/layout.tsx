import type { Metadata } from "next";

const TITLE = "Free GTM Growth Review | Brand Iron";
const DESCRIPTION =
  "Get a free, no-obligation breakdown of where your go-to-market strategy stands and where the biggest growth opportunities are. Request your GTM Growth Review from Brand Iron.";
const SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/growth-review" },
  openGraph: {
    type: "website",
    url: "https://brandiron.net/growth-review",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
    siteName: "Brand Iron",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrandIron",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function GrowthReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
