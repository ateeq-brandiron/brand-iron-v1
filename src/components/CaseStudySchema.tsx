export default function CaseStudySchema({
  name,
  description,
  image,
  client,
  url,
}: {
  name: string;
  description: string;
  image: string;
  client: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    image,
    url,
    about: {
      "@type": "Organization",
      name: client,
    },
    author: {
      "@type": "Organization",
      name: "Brand Iron",
      url: "https://brandiron.net/",
    },
    publisher: {
      "@type": "Organization",
      name: "Brand Iron",
      url: "https://brandiron.net/",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
