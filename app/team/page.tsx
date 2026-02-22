// app/team/page.tsx
import TeamTemplate from "@/components/TeamTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Engineering Team | Xelphrix Technologies",
  description:
    "Meet the leadership and engineering team behind Xelphrix Technologies — experts in cloud architecture, SaaS engineering, and enterprise automation systems.",
  keywords: [
    "Technology Leadership Team",
    "Cloud Architects",
    "Software Engineering Team",
    "Enterprise SaaS Experts"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/team",
  },
};

export default function TeamPage() {
  return <TeamTemplate />;
}