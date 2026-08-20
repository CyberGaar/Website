export type ExpertSuggestion = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  points: string[];
  relatedServices: Array<{ label: string; href: string }>;
};

export const expertSuggestions: ExpertSuggestion[] = [
  {
    slug: "iso-27001-readiness-before-certification",
    title: "What to prepare before an ISO 27001 certification audit",
    summary: "A practical readiness checklist for teams that want fewer surprises before formal ISO 27001 assessment.",
    category: "ISO audit",
    readingTime: "5 min read",
    points: [
      "Define the ISMS scope in plain business terms before collecting evidence.",
      "Map people, business processes and technology assets to the controls you claim are operating.",
      "Run an internal gap assessment before involving the certification body.",
      "Keep evidence current, named and traceable to control ownership.",
    ],
    relatedServices: [
      { label: "ISO 27001", href: "/services/iso-27001" },
      { label: "Audit & compliance", href: "/services/audits" },
    ],
  },
  {
    slug: "vulnerability-scanning-without-noise",
    title: "How to make vulnerability scanning useful instead of noisy",
    summary: "Scanning only helps when assets, credentials, validation and remediation ownership are handled properly.",
    category: "Vulnerability scanning",
    readingTime: "4 min read",
    points: [
      "Start with an asset list that separates public-facing, internal, cloud and endpoint scope.",
      "Use authenticated scanning where deeper patch and configuration evidence is required.",
      "Validate high-risk findings before sending teams a long remediation queue.",
      "Track repeat findings because they show process gaps, not just technical gaps.",
    ],
    relatedServices: [
      { label: "Vulnerability scanning", href: "/services/vulnerability-scanning" },
      { label: "Authenticated scanning", href: "/services/authenticated-vulnerability-scanning" },
    ],
  },
  {
    slug: "pentest-scope-that-matches-business-risk",
    title: "How to scope a penetration test around business risk",
    summary: "A pentest should reflect what the business actually relies on: people, applications, cloud, network paths and data flows.",
    category: "Penetration testing",
    readingTime: "5 min read",
    points: [
      "List the applications, identities, integrations and data flows that create real business exposure.",
      "Separate external attacker perspective from internal compromise scenarios.",
      "Include cloud and API scope when the product depends on managed services.",
      "Agree proof-of-impact rules before testing begins so reporting is useful and safe.",
    ],
    relatedServices: [
      { label: "Penetration testing", href: "/services/penetration-testing" },
      { label: "Web application pentest", href: "/services/web-application-penetration-testing" },
    ],
  },
];

export const getExpertSuggestion = (slug: string) => expertSuggestions.find((suggestion) => suggestion.slug === slug);
