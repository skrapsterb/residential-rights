import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.residentialrights.com";

  const now = new Date();

  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
