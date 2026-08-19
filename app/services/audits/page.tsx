import type { Metadata } from "next";
import CategoryPage from "../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Security Audits, ISO Audit and Compliance Readiness | Cybergaar",
  description: "Cybergaar audit and compliance readiness services for ISO 27001, ISO audit support, Cyber Essentials, SOC 2, PCI DSS, GDPR, NIST, DORA, NIS2 and related frameworks.",
  keywords: ["security audit", "ISO audit", "ISO 27001", "ISO 27001 implementation", "Cyber Essentials", "SOC 2", "PCI DSS", "GDPR compliance", "NIST CSF", "DORA", "NIS2"],
  alternates: { canonical: "/services/audits" },
};

export default function AuditsPage() {
  return <CategoryPage category="audits" />;
}
