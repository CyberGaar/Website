export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-enterprise-readiness",
    sector: "Financial services",
    title: "Making a fast-growing fintech ready for enterprise scrutiny",
    summary: "A focused audit and remediation plan gave leadership a clear route from security questions to confident answers.",
    challenge: "A growing fintech needed to answer increasingly detailed customer security reviews without slowing its commercial momentum.",
    approach: "Cybergaar reviewed the control environment, organised the evidence and translated gaps into a prioritised remediation plan.",
    outcome: "Leadership gained a repeatable assurance process and a clearer way to respond to enterprise security expectations.",
  },
  {
    slug: "healthcare-exposure-validation",
    sector: "Healthcare",
    title: "Finding critical exposure before it reached patient-facing systems",
    summary: "Targeted testing connected technical findings to operational risk, helping the team act in the right order.",
    challenge: "A healthcare environment needed an independent view of weaknesses that could affect sensitive and patient-facing services.",
    approach: "Cybergaar combined vulnerability analysis with targeted validation, then ranked findings by plausible operational impact.",
    outcome: "The security team received a focused remediation sequence that put the most consequential exposure first.",
  },
  {
    slug: "saas-secure-delivery",
    sector: "SaaS",
    title: "Building repeatable security into a high-velocity release cycle",
    summary: "A continuous testing cadence helped engineering teams spot issues earlier and ship with greater confidence.",
    challenge: "A SaaS team needed stronger security coverage without adding a heavy gate to a fast product-release cycle.",
    approach: "Cybergaar introduced a practical testing cadence, clear ownership and developer-ready remediation guidance.",
    outcome: "Security findings moved earlier in the delivery cycle and the team gained a more predictable route to closure.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);

