import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion-Focused Website Development | Brand Iron",
  description: "Get a strategic, responsive, SEO-ready website designed to strengthen credibility, improve AI visibility, and generate more qualified leads.",
  alternates: { canonical: "/services/website-development" },
  openGraph: { type: "article" },
};

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
