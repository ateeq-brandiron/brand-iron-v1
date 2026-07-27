import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const BASE_URL = "https://brandiron.net";

// Priority/changeFrequency scheme follows the SEO team's audit for the pages
// they scored explicitly; service subpages inherit the "/services" hub's
// scoring, and blog posts inherit "/blog"'s tier one step down (they're
// evergreen once published, so "monthly" fits better than "weekly").
const PAGES: { path: string; changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>; priority: number }[] = [
  { path: "", changeFrequency: "monthly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/brand-strategy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ai-visibility", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/gtm", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/capital-raise", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/website-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/outbound-growth", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/revenue-engineering", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const articleRoutes = articles.map(article => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
