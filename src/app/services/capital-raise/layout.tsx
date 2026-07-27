import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Raise Support Services | Brand Iron",
  description: "Brand Iron helps founders prepare for investment with compelling pitch decks, fundraising strategy, and targeted investor outreach for capital raise support.",
  alternates: { canonical: "/services/capital-raise" },
  openGraph: { type: "article" },
};

export default function CapitalRaiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
