import type { Metadata } from "next";
import { withSocial } from "../seo";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { mediaItems } from "../data/community";
import { socials } from "../data/socials";

export const metadata: Metadata = withSocial({
  title: "News, Events & Media | Cybergaar",
  description: "Cybergaar in the news: GISEC Global 2026, NIC Karachi, TechFest'26 and community events.",
  alternates: { canonical: "/media" },
});

const mediaStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cybergaar news, events and media",
  url: "https://cybergaar.com/media",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: mediaItems.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: item.href })),
  },
};

export default function MediaPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero case-studies-hero">
        <div><p className="eyebrow"><span /> NEWS & MEDIA</p><h1>Cybergaar in the community.</h1></div>
        <p>Press coverage, events and posts from our work with the Pakistan cybersecurity and startup ecosystem. Follow us on {socials.filter((s) => ["LinkedIn", "Instagram"].includes(s.label)).map((s, i) => (i ? " and " : "") + s.label).join("")} for more.</p>
      </section>
      <section className="case-study-list">
        {mediaItems.map((item, index) => (
          <article className="case-study-row" key={item.href}>
            <div className="case-study-index">{String(index + 1).padStart(2, "0")}</div>
            <div><p>{item.kind.toUpperCase()} · {item.outlet.toUpperCase()} · {item.date.toUpperCase()}</p><h2>{item.title}</h2><span>{item.summary}</span></div>
            <a href={item.href} target="_blank" rel="noreferrer">Read more <span aria-hidden="true">⟶</span></a>
          </article>
        ))}
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaStructuredData) }} />
      <SiteFooter />
    </main>
  );
}
