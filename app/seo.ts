import type { Metadata } from "next";

export const siteUrl = "https://cybergaar.com";

/** hreflang map shared by the global, UK and Pakistan homepages. */
export const regionLanguages = { "x-default": "/", en: "/", "en-GB": "/uk", "en-PK": "/pk" };

export const socialProfiles = [
  "https://www.linkedin.com/company/cybergaar",
  "https://www.instagram.com/cybergaar/",
  "https://x.com/CyberGaar_",
  "https://github.com/CyberGaar",
  "https://huggingface.co/CyberGaar/CyberSecurity",
];

/** Adds page-specific Open Graph and Twitter tags derived from the title, description and canonical path. */
export function withSocial(meta: Metadata): Metadata {
  const title = typeof meta.title === "string" ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const canonical = typeof meta.alternates?.canonical === "string" ? meta.alternates.canonical : "/";
  return {
    ...meta,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonical === "/" ? "" : canonical}`,
      siteName: "Cybergaar",
      locale: "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1672, height: 941, alt: "Cybergaar — See every gap. Secure every move." }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
