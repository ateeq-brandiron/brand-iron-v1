import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChunkErrorRecovery from "@/components/ChunkErrorRecovery";
import OrganizationSchema from "@/components/OrganizationSchema";

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-variable.woff2",
  variable: "--font-montserrat",
  display: "swap",
});

const burfordBlack = localFont({
  src: "../../public/fonts/BurfordRusticBookBlack.woff",
  variable: "--font-burford-black",
  display: "swap",
});

const burfordInline = localFont({
  src: "../../public/fonts/BurfordRusticInline.woff2",
  variable: "--font-burford-inline",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandiron.net"),
  title: "Brand Iron | Brand Strategy & Growth Marketing Agency",
  description:
    "Brand Iron helps organizations become discoverable, trusted, and chosen through brand strategy, AI visibility, and connected growth systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${burfordBlack.variable} ${burfordInline.variable}`}
    >
      <body>
        <OrganizationSchema />
        <ChunkErrorRecovery />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
