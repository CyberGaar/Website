import type { Metadata } from "next";
import CategoryPage from "../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Penetration Testing Services | Cybergaar",
  description: "Cybergaar penetration testing for web applications, APIs, networks, mobile apps, cloud infrastructure, wireless environments, social engineering and IoT systems.",
  keywords: ["penetration testing", "web application penetration testing", "API penetration testing", "network penetration testing", "mobile app penetration testing", "cloud penetration testing", "application security"],
  alternates: { canonical: "/services/penetration-testing" },
};

export default function PenetrationTestingPage() {
  return <CategoryPage category="penetration-testing" />;
}
