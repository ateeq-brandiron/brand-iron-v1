import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Interviews, Podcasts & Insights | Brand Iron",
  description: "Explore interviews, podcasts, videos, and features on branding, leadership, capital raising, and revenue growth from Brand Iron CEO Michael Doyle.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
