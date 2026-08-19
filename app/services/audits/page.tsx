import type { Metadata } from "next";
import CategoryPage from "../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Security Audits & Compliance Readiness | Cybergaar",
  description: "Explore Cybergaar audit and compliance readiness services, from Cyber Essentials and ISO 27001 to SOC 2, PCI DSS and more.",
};

export default function AuditsPage() {
  return <CategoryPage category="audits" />;
}

