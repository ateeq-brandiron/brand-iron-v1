import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Raise & Investor Outreach Services | Brand Iron",
  description: "Prepare for fundraising with an investor-ready pitch deck, compelling investment story, targeted investor research, and strategic outreach support.",
  alternates: { canonical: "/services/capital-raise" },
  openGraph: { type: "article" },
};

export default function CapitalRaiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
