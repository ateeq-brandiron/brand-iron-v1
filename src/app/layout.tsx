import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Brand Iron | Forging Brands. Driving Revenue.",
  description:
    "Helping organizations become discoverable, trusted, and chosen in today's AI-driven buying landscape.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
