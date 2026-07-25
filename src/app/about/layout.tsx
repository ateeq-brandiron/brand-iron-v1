import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brand Iron | Our Team & Growth Marketing Approach",
  description: "Meet the Brand Iron team and see how our brand strategy approach helps growth marketing agency clients become discoverable, trusted, and chosen.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
