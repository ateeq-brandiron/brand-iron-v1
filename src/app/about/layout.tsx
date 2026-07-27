import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brand Iron | Our Story & Mission",
  description: "Learn about Brand Iron's approach to forging brands and driving revenue for growth-focused businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
