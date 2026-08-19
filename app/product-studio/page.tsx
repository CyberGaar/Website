import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Product Studio | Open-source Compliance Automation | Cybergaar",
  description: "Cybergaar Product Studio is an open-source compliance automation workspace for ISO 27001, audit evidence, controls, readiness, remediation and MSP delivery.",
  keywords: ["open-source compliance automation", "ISO 27001 automation", "audit evidence", "compliance management", "control mapping", "MSP compliance platform", "security implementation"],
  alternates: { canonical: "/product-studio" },
};

const workflow = [
  ["Map", "Select a framework and map requirements to a reusable control library."],
  ["Collect", "Assign evidence requests, capture ownership and keep audit material organised."],
  ["Assess", "Review implementation, record gaps and see readiness across the full audit scope."],
  ["Improve", "Track remediation and carry completed work into the next framework or assessment."],
];

export default function ProductStudioPage() {
  return (
    <main className="inner-page product-page" id="top">
      <SiteHeader />
      <section className="product-hero">
        <div>
          <p className="eyebrow"><span /> CYBERGAAR PRODUCT STUDIO</p>
          <h1>The open-source workspace for an entire compliance audit.</h1>
          <p>Move from framework selection to evidence, gaps and remediation in one transparent system—built for security teams, auditors and MSPs.</p>
          <a href="mailto:hello@cybergaar.com?subject=Product%20Studio">Request early access <span aria-hidden="true">⟶</span></a>
        </div>
        <div className="product-console" aria-label="Product Studio workflow preview">
          <div className="console-top"><span /><span /><span /><b>CYBERGAAR / AUDIT WORKSPACE</b></div>
          <div className="console-score"><p>READINESS</p><strong>78%</strong><span>ISO 27001 · 64 of 82 controls ready</span></div>
          <div className="console-bars"><i /><i /><i /><i /><i /></div>
          <div className="console-status"><span>Evidence ready <b>48</b></span><span>Needs review <b>16</b></span><span>Open gaps <b>18</b></span></div>
        </div>
      </section>
      <section className="product-workflow">
        <div className="catalog-heading"><p>ONE CONTINUOUS WORKFLOW</p><h2>Every stage of audit readiness, connected.</h2></div>
        <div className="workflow-grid">
          {workflow.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="open-source-statement">
        <p>OPEN BY DESIGN</p>
        <h2>Your compliance programme should not be trapped in a black box.</h2>
        <span>Product Studio is designed as open-source infrastructure: inspectable, extensible and ready to fit the way your organisation or MSP already works.</span>
      </section>
      <SiteFooter />
    </main>
  );
}
