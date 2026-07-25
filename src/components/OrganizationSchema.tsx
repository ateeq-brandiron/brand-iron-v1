// Fill in LEADERSHIP with real names/titles/LinkedIn URLs once finalized.
// Left empty for now so no placeholder/fake data is published as structured data.
const LEADERSHIP: { name: string; jobTitle: string; url?: string }[] = [
  // { name: "Jane Doe", jobTitle: "Founder & CEO", url: "https://www.linkedin.com/in/janedoe" },
];

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brand Iron",
    legalName: "Brand Iron Marketing",
    url: "https://brandiron.net",
    logo: "https://brandiron.net/images/shared/logo-white.png",
    description: "Brand Iron helps organizations become discoverable, trusted, and chosen through brand strategy, AI visibility, and connected growth systems.",
    email: "contact@brandiron.net",
    telephone: "+1-303-534-1901",
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
