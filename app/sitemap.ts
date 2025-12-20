import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gatrahitawasana.com", lastModified: new Date() },
    { url: "https://gatrahitawasana.com/about", lastModified: new Date() },
  ];
}
