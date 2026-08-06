import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Visibility, AEO & GEO Services | Brand Iron",
  description: "Improve your visibility across Google, ChatGPT, Gemini, Claude, and Perplexity with integrated SEO, AEO, GEO, content, and authority building.",
  alternates: { canonical: "/services/ai-visibility" },
  openGraph: { type: "article" },
};

export default function AIVisibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
