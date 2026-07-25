import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources | Brand Iron Blog",
  description: "Strategic insights on brand strategy, go-to-market planning, AI visibility, and revenue growth from the Brand Iron team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
