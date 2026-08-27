import type { MetadataRoute } from "next";
import { serviceDetails } from "./services/service-data";
import { marketingServiceDetails } from "./services/marketing-service-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://servixa-bzem.onrender.com").replace(/\/$/, "");
  const lastModified = new Date("2026-08-28T00:00:00Z");
  const retired = new Set(["dynamics-365-erp-crm", "it-staff-augmentation"]);
  const activeServices = [...marketingServiceDetails, ...serviceDetails.filter((service) => !retired.has(service.slug))];

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...activeServices.map((service) => ({
      url: `${siteUrl}/services/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: ["mobile-app-development", "web-development", "google-ads-ppc", "seo-search-growth"].includes(service.slug) ? 0.9 : 0.8,
    })),
    { url: `${siteUrl}/site-map/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
