// Mirrors the team roster already published on /about/ (src/app/about/page.tsx
// TEAM array). Add a `url` once individual LinkedIn profile links are
// confirmed - left out rather than guessed.
const LEADERSHIP: { name: string; jobTitle: string; url?: string }[] = [
  { name: "Michael Doyle", jobTitle: "CEO" },
  { name: "Carmen Barker", jobTitle: "CFO" },
  { name: "Shelly Barson", jobTitle: "Creative Director" },
  { name: "Katrina Jumawid", jobTitle: "Account Manager" },
  { name: "Olivia Briones", jobTitle: "Operations & Project Manager" },
  { name: "Ateeq Asif", jobTitle: "Operations & Technical Delivery Manager" },
];

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brand Iron",
    legalName: "Brand Iron Marketing",
    url: "https://brandiron.net/",
    logo: "https://brandiron.net/images/shared/shared-logo-white.png",
    description: "Brand Iron helps organizations become discoverable, trusted, and chosen through brand strategy, AI visibility, and connected growth systems.",
    email: "contact@brandiron.net",
    telephone: "+1-303-534-1901",
    foundingDate: "2002",
    founder: { "@type": "Person", name: "Michael Doyle" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2590 Welton St. Suite 200",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80205",
      addressCountry: "US",
    },
    sameAs: [
      "https://x.com/BrandIron",
      "https://www.facebook.com/BrandIronDenver/",
      "https://www.instagram.com/brand.iron/",
      "https://www.linkedin.com/company/brand-iron/",
      // TODO: add the Clutch profile URL once confirmed - not guessing it here.
    ],
    ...(LEADERSHIP.length > 0 && {
      employee: LEADERSHIP.map(({ name, jobTitle, url }) => ({
        "@type": "Person",
        name,
        jobTitle,
        ...(url && { sameAs: url }),
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
