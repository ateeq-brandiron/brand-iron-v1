import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-to-Market Strategy Services | Brand Iron",
  description: "Brand Iron's go-to-market strategy services align positioning, messaging, and execution into a connected GTM framework built for AI-driven buyers.",
  alternates: { canonical: "/services/gtm" },
  openGraph: { type: "article" },
};

export default function GTMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
