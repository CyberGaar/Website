import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { trainingSessions } from "../data/community";

export const metadata: Metadata = {
  title: "Cybersecurity Training & Workshops | Cybergaar",
  description: "Hands-on Cybergaar training: AI red teaming, OWASP Top 10 for LLM applications, social engineering awareness and community sessions for students and professionals.",
  keywords: ["cybersecurity training", "AI red team workshop", "OWASP LLM top 10 training", "LLM security workshop", "cyber awareness training Karachi"],
  alternates: { canonical: "/training" },
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
      <SiteFooter />
    </main>
  );
}
