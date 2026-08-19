import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { caseStudies } from "../data/caseStudies";

export const metadata: Metadata = {
  title: "Security Case Studies | Cybergaar",
  description: "Representative Cybergaar case studies for security audits, application security, vulnerability scanning, penetration testing and compliance readiness work.",
  keywords: ["security case studies", "cybersecurity case studies", "security audit case study", "application security case study", "vulnerability scanning case study", "penetration testing case study"],
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero case-studies-hero">
        <div><p className="eyebrow"><span /> CASE STUDIES</p><h1>Security work measured by what changed.</h1></div>
        <p>Representative engagements showing how Cybergaar turns technical findings into clear business action. These can be expanded with approved client detail over time.</p>
      </section>
      <section className="case-study-list">
        {caseStudies.map((study, index) => (
          <article className="case-study-row" key={study.slug}>
            <div className="case-study-index">{String(index + 1).padStart(2, "0")}</div>
            <div><p>{study.sector.toUpperCase()} · REPRESENTATIVE ENGAGEMENT</p><h2>{study.title}</h2><span>{study.summary}</span></div>
            <a href={`/case-studies/${study.slug}`}>Read case study <span aria-hidden="true">⟶</span></a>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
