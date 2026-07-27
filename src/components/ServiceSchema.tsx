export default function ServiceSchema({
  name,
  serviceType,
  description,
}: {
  name: string;
  serviceType: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Brand Iron",
    },
    description,
    areaServed: {
      "@type": "Country",
      name: "US",
    },
    brand: {
      "@type": "Brand",
      name: "Brand Iron",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
