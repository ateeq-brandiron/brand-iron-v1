import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChunkErrorRecovery from "@/components/ChunkErrorRecovery";
import OrganizationSchema from "@/components/OrganizationSchema";
import WebSiteSchema from "@/components/WebSiteSchema";

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

const HOME_TITLE = "Brand Iron | Denver Brand Strategy & B2B Marketing Agency";
const HOME_DESCRIPTION =
  "Denver-based brand strategy and B2B marketing agency helping Colorado companies build discoverable, trusted brands that drive revenue. Book a strategy session.";
// Interim OG/Twitter image - the site doesn't have a dedicated 1200x630 social
// card graphic yet, so this reuses the embossed-logo footer image (dark
// background, full wordmark, reads fine as a link-preview thumbnail). Swap
// for a purpose-built social card image when one exists.
const HOME_SOCIAL_IMAGE = "/images/shared/shared-footer-logo.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandiron.net"),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://brandiron.net/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_SOCIAL_IMAGE],
    siteName: "Brand Iron",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrandIron",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_SOCIAL_IMAGE],
  },
  verification: {
    google: "m_klKTKoL_FJOzCG_xUsnWkqCvJCLgUbxu9dXg_Ug5U",
  },
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
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`try { history.scrollRestoration = "manual"; } catch (e) {}`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDTVFDLTDK"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BDTVFDLTDK');
          `}
        </Script>
        {/* Site2CRM visitor identification (Asana: Integrate Site2CRM to Brand
            Iron and Sage Websites). Loaded site-wide for outbound-campaign
            lead tracking. No data-container div is rendered yet - pending
            confirmation from Site2CRM support on whether identification
            fires without the matching lead-capture form being present. */}
        <Script
          src="https://api.site2crm.io/api/public/forms/widget.js"
          data-form-key="283735460edd66c996e8"
          strategy="afterInteractive"
        />
        <OrganizationSchema />
        <WebSiteSchema />
        <ChunkErrorRecovery />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
