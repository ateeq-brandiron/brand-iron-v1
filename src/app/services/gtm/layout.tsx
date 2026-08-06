import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-to-Market Strategy Consulting | Brand Iron",
  description: "Build a go-to-market strategy that aligns positioning, demand generation, sales, and operations to create qualified pipeline and sustainable growth.",
  alternates: { canonical: "/services/gtm" },
  openGraph: { type: "article" },
};

export default function GTMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
