export default function ArticleSchema({
  headline,
  description,
  image,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: `https://brandiron.net${image}`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(datePublished && { datePublished }),
    author: {
      "@type": "Person",
      name: "Michael Doyle",
      url: "https://brandiron.net/about/",
    },
    publisher: {
      "@type": "Organization",
      name: "Brand Iron",
      url: "https://brandiron.net/",
      logo: {
        "@type": "ImageObject",
        url: "https://brandiron.net/images/shared/shared-logo-white.png",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
