import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Strategy & Rebranding Services | Brand Iron",
  description: "Clarify your positioning, messaging, and visual identity with a brand strategy built to earn trust and drive growth. Request a branding proposal.",
  alternates: { canonical: "/services/brand-strategy" },
  openGraph: { type: "article" },
};

export default function BrandStrategyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
