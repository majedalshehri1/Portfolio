import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.majedalshehri.com/", lastModified: new Date() },
    { url: "https://www.majedalshehri.com/works", lastModified: new Date() },
    { url: "https://www.majedalshehri.com/contact", lastModified: new Date() },
  ];
}
