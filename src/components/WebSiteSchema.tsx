// Organization schema already lives site-wide in OrganizationSchema.tsx (root
// layout), so this only adds the WebSite entity, scoped to the homepage.
// No SearchAction/potentialAction here - the site has no search feature, and
// publishing one would tell Google to offer a sitelinks searchbox that leads
// nowhere real.
export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brand Iron",
    url: "https://brandiron.net/",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
