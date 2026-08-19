import type { MetadataRoute } from "next";
import { caseStudies } from "./data/caseStudies";
import { services } from "./data/services";

const baseUrl = "https://cybergaar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/uk",
    "/pk",
    "/services",
    "/services/audits",
    "/services/vulnerability-scanning",
    "/services/penetration-testing",
    "/global-standards",
    "/product-studio",
    "/msp",
    "/case-studies",
    "/contact",
    "/careers",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...caseStudies.map((study) => ({ url: `${baseUrl}/case-studies/${study.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
