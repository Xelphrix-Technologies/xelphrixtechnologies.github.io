// app/contact/page.tsx
import ContactTemplate from "@/components/ContactTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Xelphrix Technologies | Cloud & SaaS Consulting",
  description:
    "Contact Xelphrix Technologies for cloud architecture consulting, SaaS development, DevOps automation, and enterprise digital transformation solutions.",
  keywords: [
    "Contact Cloud Consulting Company",
    "AWS Consulting India",
    "SaaS Development Inquiry"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/contact",
  },
};

export default function ContactPage() {
  return <ContactTemplate />;
}