import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const BASE_URL = "https://brandiron.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/gtm",
    "/services/brand-strategy",
    "/services/capital-raise",
    "/services/website-development",
    "/services/ai-visibility",
    "/services/outbound-growth",
    "/services/revenue-engineering",
    "/blog",
  ].map(path => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articleRoutes = articles.map(article => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
