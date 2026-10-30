import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = "https://www.giordanobc.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/prima-hub", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...pages.map((p) => ({ url: `${base}${p.path}`, priority: p.priority })),
    ...projects.map((p) => ({
      url: `${base}/portfolio/${p.slug}`,
      priority: 0.7,
    })),
  ];
}
