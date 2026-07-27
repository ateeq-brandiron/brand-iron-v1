import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Visibility Service | AI Engine Optimization | Brand Iron",
  description: "Our AI Visibility service ensures your brand is discoverable, trusted, and chosen by AI assistants and search engines.",
  alternates: { canonical: "/services/ai-visibility" },
  openGraph: { type: "article" },
};

export default function AIVisibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
