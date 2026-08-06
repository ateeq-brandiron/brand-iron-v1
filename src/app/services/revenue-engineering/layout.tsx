import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Engineering & RevOps Consulting | Brand Iron",
  description: "Connect marketing, sales, CRM, automation, and analytics into a measurable revenue system built to improve conversion and accelerate growth.",
  alternates: { canonical: "/services/revenue-engineering" },
  openGraph: { type: "article" },
};

export default function RevenueEngineeringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
