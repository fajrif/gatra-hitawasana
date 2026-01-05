import { MetadataRoute } from "next";

const baseUrl = "https://gatrahitawasana.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },

    // About
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Contact
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Business/Services
    { url: `${baseUrl}/business`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/business/digital-solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/hr-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/managed-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/telco-infra`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Career
    { url: `${baseUrl}/career`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },

    // Media/Blog
    { url: `${baseUrl}/media`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
