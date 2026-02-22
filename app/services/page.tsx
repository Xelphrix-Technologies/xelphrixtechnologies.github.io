import ServicesTemplate from "@/components/ServicesTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Architecture, SaaS & DevOps Services | Xelphrix Technologies",
  description:
    "Professional cloud architecture, SaaS development, DevOps automation, and enterprise product engineering services built on AWS and modern scalable systems.",
  keywords: [
    "AWS Architecture Services",
    "SaaS Development Services",
    "DevOps Consulting",
    "Cloud Migration Experts",
    "Enterprise Software Engineering"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}