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
  description: "Security audits, penetration testing and vulnerability scanning that turn cyber risk into clear business action.",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "Cybergaar | Cyber assurance, made clear",
    description: "See every gap. Secure every move.",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Cybergaar — See every gap. Secure every move." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybergaar | Cyber assurance, made clear",
    description: "See every gap. Secure every move.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
