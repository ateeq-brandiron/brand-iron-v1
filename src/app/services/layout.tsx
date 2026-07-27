import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Brand Strategy, GTM, AI Visibility & More | Brand Iron",
  description: "Explore Brand Iron's growth services, including brand strategy, go-to-market strategy, AI visibility, website development, and revenue engineering.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
