import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Outbound Lead Generation Services | Brand Iron",
  description: "Generate qualified B2B opportunities with targeted prospecting, LinkedIn outreach, email campaigns, follow-up systems, and campaign optimization.",
  alternates: { canonical: "/services/outbound-growth" },
  openGraph: { type: "article" },
};

export default function OutboundGrowthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
