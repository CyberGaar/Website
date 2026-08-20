import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Cybergaar — See every gap. Secure every move." }],
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
      logo: "https://cybergaar.com/logo.png",
      email: "hello@cybergaar.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@cybergaar.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      name: "Cybergaar",
      url: "https://cybergaar.com",
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
