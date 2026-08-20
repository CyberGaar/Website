import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { industries } from "../data/industries";

export const metadata: Metadata = {
  title: "Industries | Cyber Security for Regulated and Digital Teams | Cybergaar",
  description: "Cybergaar supports financial services, healthcare, SaaS, public sector, retail, ecommerce and critical infrastructure teams with security audits, application security, vulnerability scanning and penetration testing.",
  keywords: ["cyber security industries", "financial services security", "healthcare cyber security", "SaaS security", "application security", "retail cyber security", "critical infrastructure security", "security audit"],
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero">
        <div>
          <p className="eyebrow"><span /> INDUSTRIES</p>
          <h1>Security shaped around how your business operates.</h1>
        </div>
        <p>Cybergaar adapts audit, scanning, application security and penetration testing work to the systems, regulations and operating realities of each sector.</p>
      </section>
      <section className="industry-list">
        {industries.map((industry, index) => (
          <article className="industry-row" key={industry.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{industry.title}</h2>
              <p>{industry.summary}</p>
            </div>
            <a href={`/industries/${industry.slug}`}>View applicable services <b aria-hidden="true">⟶</b></a>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
