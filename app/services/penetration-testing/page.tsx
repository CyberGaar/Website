import type { Metadata } from "next";
import CategoryPage from "../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Penetration Testing Services | Cybergaar",
  description: "Explore Cybergaar penetration testing across networks, web and mobile applications, cloud infrastructure, people, wireless and IoT.",
};

export default function PenetrationTestingPage() {
  return <CategoryPage category="penetration-testing" />;
}

