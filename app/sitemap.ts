import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const baseUrl = "https://gatrahitawasana.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await prisma.article.findMany({
    where: { status: "PUBLISHED" },
    select: { slug: true, updatedAt: true },
  });

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },

    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    { url: `${baseUrl}/business`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/business/digital-solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/hr-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/managed-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/telco-infra`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    { url: `${baseUrl}/career`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },

    { url: `${baseUrl}/media`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },

    ...articles.map((article) => ({
      url: `${baseUrl}/media/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
