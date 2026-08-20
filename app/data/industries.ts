export type Industry = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  auditSlugs: string[];
  scanSlugs: string[];
  pentestSlugs: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial services",
    summary: "Security audits, PCI DSS readiness, SOC 2 readiness, cloud security review and penetration testing for regulated financial environments.",
    detail: "Financial services teams usually need assurance that covers payment data, customer data, cloud platforms, suppliers, internal networks and high-value applications.",
    auditSlugs: ["pci-dss", "iso-27001", "soc-2", "gdpr-compliance", "nist-csf-800-53"],
    scanSlugs: ["network-vulnerability-scanning", "web-application-vulnerability-scanning", "authenticated-vulnerability-scanning", "cloud-native-vulnerability-scanning"],
    pentestSlugs: ["web-application-penetration-testing", "network-penetration-testing", "cloud-infrastructure-penetration-testing", "social-engineering-penetration-testing"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "HIPAA readiness, application security, vulnerability scanning and risk review for teams protecting health and patient data.",
    detail: "Healthcare environments need protection for patient data, clinical applications, connected devices, suppliers and availability-sensitive infrastructure.",
    auditSlugs: ["hipaa", "hitrust", "iso-27001", "gdpr-compliance"],
    scanSlugs: ["host-based-vulnerability-scanning", "database-vulnerability-scanning", "web-application-vulnerability-scanning", "cloud-native-vulnerability-scanning"],
    pentestSlugs: ["web-application-penetration-testing", "mobile-app-penetration-testing", "iot-embedded-penetration-testing", "network-penetration-testing"],
  },
  {
    slug: "technology-saas",
    title: "Technology and SaaS",
    summary: "SOC 2 readiness, ISO 27001 implementation, web application testing, API testing and secure product delivery support.",
    detail: "SaaS companies need credible assurance for buyers while keeping application, API, cloud and development risks under control.",
    auditSlugs: ["soc-2", "iso-27001", "iso-42001", "gdpr-compliance"],
    scanSlugs: ["web-application-vulnerability-scanning", "cloud-native-vulnerability-scanning", "authenticated-vulnerability-scanning", "database-vulnerability-scanning"],
    pentestSlugs: ["web-application-penetration-testing", "cloud-infrastructure-penetration-testing", "mobile-app-penetration-testing", "social-engineering-penetration-testing"],
  },
  {
    slug: "public-sector",
    title: "Public sector",
    summary: "Security control mapping, supplier readiness, NIST alignment, Cyber Essentials and vulnerability management support.",
    detail: "Public sector and supplier environments often need baseline certification, control mapping, supplier assurance and practical vulnerability management.",
    auditSlugs: ["cyber-essentials", "cyber-essentials-plus", "iso-27001", "nist-csf-800-53"],
    scanSlugs: ["network-vulnerability-scanning", "authenticated-vulnerability-scanning", "host-based-vulnerability-scanning", "cloud-native-vulnerability-scanning"],
    pentestSlugs: ["network-penetration-testing", "web-application-penetration-testing", "social-engineering-penetration-testing"],
  },
  {
    slug: "retail-ecommerce",
    title: "Retail and ecommerce",
    summary: "PCI DSS readiness, payment-flow testing, web application penetration testing and customer-data protection review.",
    detail: "Retail and ecommerce teams need to protect payment flows, customer accounts, web applications, integrations and operational availability.",
    auditSlugs: ["pci-dss", "iso-27001", "gdpr-compliance", "ccpa-cpra"],
    scanSlugs: ["web-application-vulnerability-scanning", "database-vulnerability-scanning", "unauthenticated-vulnerability-scanning", "cloud-native-vulnerability-scanning"],
    pentestSlugs: ["web-application-penetration-testing", "mobile-app-penetration-testing", "wireless-network-penetration-testing", "social-engineering-penetration-testing"],
  },
  {
    slug: "critical-infrastructure",
    title: "Critical infrastructure",
    summary: "Risk assessment, network testing, cloud review and operational resilience support for essential systems.",
    detail: "Critical infrastructure work needs careful scoping across operational networks, business systems, suppliers, resilience requirements and safety-sensitive environments.",
    auditSlugs: ["iso-27001", "nist-csf-800-53", "nis2", "dora"],
    scanSlugs: ["network-vulnerability-scanning", "authenticated-vulnerability-scanning", "host-based-vulnerability-scanning", "cloud-native-vulnerability-scanning"],
    pentestSlugs: ["network-penetration-testing", "wireless-network-penetration-testing", "cloud-infrastructure-penetration-testing", "iot-embedded-penetration-testing"],
  },
];

export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);
