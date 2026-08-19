import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { caseStudies, getCaseStudy } from "../../data/caseStudies";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? {
    title: `${study.title} | Security Case Study | Cybergaar`,
    description: `${study.summary} Representative Cybergaar work covering security assessment, remediation and business risk reduction.`,
    keywords: [study.sector, "security case study", "cybersecurity case study", "security assessment", "vulnerability scanning", "penetration testing", "security audit"],
    alternates: { canonical: `/case-studies/${study.slug}` },
  } : {};
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="case-detail-hero">
        <div className="service-breadcrumbs"><a href="/case-studies">Case studies</a><span>/</span><span>{study.sector}</span></div>
        <p className="eyebrow"><span /> {study.sector.toUpperCase()}</p>
        <h1>{study.title}</h1>
        <p>{study.summary}</p>
      </section>
      <section className="case-detail-grid">
        <article><span>01</span><p>THE CHALLENGE</p><h2>What needed to change</h2><div>{study.challenge}</div></article>
        <article><span>02</span><p>THE APPROACH</p><h2>How Cybergaar responded</h2><div>{study.approach}</div></article>
        <article><span>03</span><p>THE OUTCOME</p><h2>The result</h2><div>{study.outcome}</div></article>
      </section>
      <section className="case-placeholder-note"><p>STORY STATUS</p><h2>This representative case study is ready for approved client detail, evidence and metrics.</h2><a href="/contact">Discuss a similar challenge <span aria-hidden="true">⟶</span></a></section>
      <SiteFooter />
    </main>
  );
}
