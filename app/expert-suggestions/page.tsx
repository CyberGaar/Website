import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { expertSuggestions } from "../data/expertSuggestions";

export const metadata: Metadata = {
  title: "Expert Suggestions | Cyber Security Guidance | Cybergaar",
  description: "Practical Cybergaar expert suggestions for ISO audit readiness, vulnerability scanning, penetration testing, application security and security implementation.",
  keywords: ["cyber security blog", "expert suggestions", "ISO audit", "ISO 27001", "vulnerability scanning", "penetration testing", "application security", "security implementation"],
  alternates: { canonical: "/expert-suggestions" },
};

export default function ExpertSuggestionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Cybergaar Expert Suggestions",
    description: "Practical guidance for audit readiness, vulnerability scanning and penetration testing.",
    publisher: { "@type": "Organization", name: "Cybergaar", url: "https://cybergaar.com" },
    blogPost: expertSuggestions.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      url: `https://cybergaar.com/expert-suggestions/${post.slug}`,
    })),
  };

  return (
    <main className="inner-page expert-page" id="top">
      <SiteHeader />
      <section className="inner-hero">
        <div>
          <p className="eyebrow"><span /> EXPERT SUGGESTIONS</p>
          <h1>Practical guidance before you scope security work.</h1>
        </div>
        <p>Short, useful notes from Cybergaar on ISO audit readiness, vulnerability scanning, penetration testing, application security and implementation decisions.</p>
      </section>
      <section className="expert-list">
        {expertSuggestions.map((post, index) => (
          <article className="expert-card" key={post.slug}>
            <span>{String(index + 1).padStart(2, "0")} · {post.category} · {post.readingTime}</span>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <a href={`/expert-suggestions/${post.slug}`}>Read suggestion <b aria-hidden="true">⟶</b></a>
          </article>
        ))}
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteFooter />
    </main>
  );
}
