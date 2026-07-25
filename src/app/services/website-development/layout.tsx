import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Services | Brand Iron",
  description: "Brand Iron builds strategic websites that connect brand, messaging, and AI visibility into one platform designed to make your business discoverable and trusted.",
};

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
