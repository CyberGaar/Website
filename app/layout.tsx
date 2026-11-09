import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { socialProfiles } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cybergaar.com"),
  title: "Cybergaar | Cyber assurance, made clear",
  description: "Security audits, ISO 27001 implementation, ISO audit support, application security, penetration testing and vulnerability scanning from Cybergaar.",
  keywords: ["ISO audit", "ISO 27001", "security audit", "application security", "vulnerability scanning", "penetration testing", "Cyber Essentials", "PCI DSS", "SOC 2"],
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "Cybergaar | Security audits and testing",
    description: "ISO 27001, security audits, application security, penetration testing and vulnerability scanning.",
    url: "https://cybergaar.com",
    siteName: "Cybergaar",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 675, alt: "Cybergaar — See every gap. Secure every move." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybergaar | Security audits and testing",
    description: "ISO 27001, application security, penetration testing and vulnerability scanning.",
    images: ["/og.png"],
  },
};

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Cybergaar",
      url: "https://cybergaar.com",
      "@id": "https://cybergaar.com/#organization",
      alternateName: "CyberGaar",
      logo: "https://cybergaar.com/logo.png",
      sameAs: socialProfiles,
      areaServed: ["Global", "United Kingdom", "Pakistan"],
      email: "hello@cybergaar.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@cybergaar.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cybergaar.com/#website",
      name: "Cybergaar",
      url: "https://cybergaar.com",
      publisher: { "@id": "https://cybergaar.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }} />
      </body>
    </html>
  );
}
