import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://servixa-bzem.onrender.com").replace(/\/$/, "");
  const lastModified = new Date("2026-08-24T00:00:00Z");

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
