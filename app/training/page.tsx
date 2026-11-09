import type { Metadata } from "next";
import { withSocial } from "../seo";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { trainingSessions } from "../data/community";

export const metadata: Metadata = withSocial({
  title: "Cybersecurity Training & Workshops | Cybergaar",
  description: "Hands-on Cybergaar training: AI red teaming, OWASP Top 10 for LLM applications, social engineering awareness and community sessions for students and professionals.",
  keywords: ["cybersecurity training", "AI red team workshop", "OWASP LLM top 10 training", "LLM security workshop", "cyber awareness training Karachi"],
  alternates: { canonical: "/training" },
});

const trainingStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...trainingSessions.filter((session) => session.isoDate).map((session) => ({
      "@type": "Event",
      name: session.title,
      description: session.summary,
      ...(session.isoDate ? { startDate: session.isoDate } : {}),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: session.venue, address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" } },
      organizer: { "@type": "Organization", name: "Cybergaar", url: "https://cybergaar.com" },
      url: session.href,
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cybergaar.com" },
        { "@type": "ListItem", position: 2, name: "Training", item: "https://cybergaar.com/training" },
      ],
    },
  ],
};

export default function TrainingPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero case-studies-hero">
        <div><p className="eyebrow"><span /> TRAINING</p><h1>Hands-on security training, taught by practitioners.</h1></div>
        <p>Workshops on AI red teaming, LLM application security and cyber awareness for universities, communities and teams. Interested in a session for your organisation? Get in touch.</p>
      </section>
      <section className="case-study-list">
        {trainingSessions.map((session, index) => (
          <article className="case-study-row" key={session.href}>
            <div className="case-study-index">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p>{session.date.toUpperCase()} · {session.venue.toUpperCase()}</p>
              <h2>{session.title}</h2>
              <span>{session.summary} Audience: {session.audience}. Topics: {session.topics.join(", ")}.</span>
            </div>
            <a href={session.href} target="_blank" rel="noreferrer">See the post on {session.source} <span aria-hidden="true">⟶</span></a>
          </article>
        ))}
      </section>
      <section className="case-study-list">
        <article className="case-study-row">
          <div className="case-study-index">+</div>
          <div><p>BOOK A SESSION</p><h2>Bring a workshop to your campus or team.</h2></div>
          <a href="/contact">Contact us <span aria-hidden="true">⟶</span></a>
        </article>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingStructuredData) }} />
      <SiteFooter />
    </main>
  );
}
