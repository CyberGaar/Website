import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "../components/HomePage";
import { regionLanguages, siteUrl } from "../seo";

const regionContent: Record<string, { name: string; locale: string; description: string }> = {
  uk: {
    locale: "en_GB",
    name: "United Kingdom",
    description: "ISO 27001 implementation, Cyber Essentials readiness, ISO audit support, application security testing, vulnerability scanning and penetration testing for United Kingdom organisations from Cybergaar.",
  },
  pk: {
    locale: "en_PK",
    name: "Pakistan",
    description: "ISO 27001 implementation, ISO audit support, application security testing, vulnerability scanning and penetration testing for Pakistan organisations from Cybergaar.",
  },
};

type RegionPageProps = { params: Promise<{ region: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ region: "uk" }, { region: "pk" }];
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { region } = await params;
  const content = regionContent[region];
  if (!content) return {};
  return {
    title: `Cybergaar | Security Audits, ISO 27001, Pentesting and Vulnerability Scanning | ${content.name}`,
    description: content.description,
    keywords: [
      "ISO audit",
      "ISO 27001",
      "security audit",
      "application security",
      "vulnerability scanning",
      "penetration testing",
      content.name,
    ],
    alternates: { canonical: `/${region}`, languages: regionLanguages },
    openGraph: {
      title: `Cybergaar | Security audits and testing in ${content.name}`,
      description: content.description,
      url: `${siteUrl}/${region}`,
      siteName: "Cybergaar",
      locale: content.locale,
      type: "website",
      images: [{ url: "/og.png", width: 1672, height: 941, alt: "Cybergaar — See every gap. Secure every move." }],
    },
    twitter: { card: "summary_large_image", title: `Cybergaar | Security audits and testing in ${content.name}`, description: content.description, images: ["/og.png"] },
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region } = await params;
  if (!regionContent[region]) notFound();
  return <HomePage region={region as "uk" | "pk"} />;
}
