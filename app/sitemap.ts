import type { MetadataRoute } from "next";
import { projectSlugs, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];

  return routes.concat(
    projectSlugs.map((slug) => ({
      url: `${siteConfig.website}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    }))
  );
}
