import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/constants";
import { projects } from "@/data/projects";
import { historicalProjects } from "@/data/project-history";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/programs", "/projects", "/impact", "/partners", "/news", "/news/bambasi-inclusion-solidarity", "/news/sponsor-appreciation-day", "/news/summer-scholars-opening", "/contact", "/donate", "/sponsorship", "/reports", "/gallery", "/safeguarding", "/privacy", "/terms", ...[...projects, ...historicalProjects].map(p => `/projects/${p.slug}`)];
  return paths.map(path => ({url: `${siteConfig.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7}));
}
