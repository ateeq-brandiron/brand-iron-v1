import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outbound Growth Services | LinkedIn, Email and SDR Programs",
  description: "Build a stronger B2B pipeline with Brand Iron's LinkedIn outreach, email campaigns, SDR programs, appointment setting, and sales enablement services.",
  alternates: { canonical: "/services/outbound-growth" },
  openGraph: { type: "article" },
};

export default function OutboundGrowthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
