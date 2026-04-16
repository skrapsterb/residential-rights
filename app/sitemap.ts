import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.residentialrights.com";

  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/legal/terms",
    "/legal/privacy",
  ];

  const blogSlugs = getAllPostSlugs();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
