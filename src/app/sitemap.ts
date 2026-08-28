import type { MetadataRoute } from "next";
import { docSections } from "../lib/docs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://useatom.dev";

  const staticPages = [
    "",
    "/docs",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map(
    (path) => ({
      url: `${base}${path}/`.replace(/\/\/$/, "/"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const docPages = docSections.map((section) => ({
    url: `${base}/docs/${section.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...docPages];
}
