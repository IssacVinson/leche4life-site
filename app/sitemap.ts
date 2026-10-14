import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const pages = [
  "/",
  "/about/",
  "/expecting/",
  "/baby-is-here/",
  "/services/",
  "/resources/",
  "/contact/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  return pages.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
