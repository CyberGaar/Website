import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Industries | Cyber Security for Regulated and Digital Teams | Cybergaar",
  description: "Cybergaar supports financial services, healthcare, SaaS, public sector, retail, ecommerce and critical infrastructure teams with security audits, application security, vulnerability scanning and penetration testing.",
  keywords: ["cyber security industries", "financial services security", "healthcare cyber security", "SaaS security", "application security", "retail cyber security", "critical infrastructure security", "security audit"],
  alternates: { canonical: "/industries" },
};

const industries = [
  ["Financial services", "Security audits, PCI DSS readiness, SOC 2 readiness, cloud security review and penetration testing for regulated financial environments."],
  ["Healthcare", "HIPAA readiness, application security, vulnerability scanning and risk review for teams protecting health and patient data."],
  ["Technology and SaaS", "SOC 2 readiness, ISO 27001 implementation, web application testing, API testing and secure product delivery support."],
  ["Public sector", "Security control mapping, supplier readiness, NIST alignment, Cyber Essentials and vulnerability management support."],
  ["Retail and ecommerce", "PCI DSS readiness, payment-flow testing, web application penetration testing and customer-data protection review."],
  ["Critical infrastructure", "Risk assessment, network testing, cloud review and operational resilience support for essential systems."],
];

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
        {industries.map(([title, copy], index) => (
          <article className="industry-row" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <a href="/contact">Discuss this sector <b aria-hidden="true">⟶</b></a>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
