import AboutTemplate from "@/components/AboutTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Xelphrix Technologies | Enterprise Cloud & SaaS Engineering",
  description:
    "Learn about Xelphrix Technologies — a cloud-first engineering firm specializing in AWS architecture, SaaS systems, DevOps automation, and enterprise-grade digital platforms.",
  keywords: [
    "Cloud Engineering Company",
    "AWS Consulting Firm",
    "Enterprise SaaS Architecture",
    "Technology Company India"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/about",
  },
};

export default function AboutPage() {
  return <AboutTemplate />;
}