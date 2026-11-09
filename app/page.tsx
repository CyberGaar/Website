import type { Metadata } from "next";
import HomePage from "./components/HomePage";
import { regionLanguages } from "./seo";
export const metadata: Metadata = {
  title: "Cybergaar | Security Audits, ISO 27001, Pentesting and Vulnerability Scanning",
  description: "Cybergaar provides ISO audit support, ISO 27001 implementation, security audits, application security testing, penetration testing and vulnerability scanning.",
  keywords: [
    "ISO audit",
    "ISO 27001",
    "ISO 27001 implementation",
    "security audit",
    "application security",
    "vulnerability scanning",
    "penetration testing",
    "Cyber Essentials",
    "PCI DSS readiness",
    "SOC 2 readiness",
  ],
  alternates: { canonical: "/", languages: regionLanguages },
  openGraph: {
    title: "Cybergaar | Security Audits, ISO 27001, Pentesting and Vulnerability Scanning",
    description: "ISO audit support, ISO 27001 implementation, security audits, application security testing, penetration testing and vulnerability scanning.",
    url: "https://cybergaar.com",
    siteName: "Cybergaar",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Cybergaar — See every gap. Secure every move." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybergaar | Security Audits, ISO 27001, Pentesting and Vulnerability Scanning",
    description: "ISO audit support, ISO 27001 implementation, security audits, application security testing, penetration testing and vulnerability scanning.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return <HomePage />;
}
