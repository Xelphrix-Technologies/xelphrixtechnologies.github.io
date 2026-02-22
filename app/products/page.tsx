import ProductPageTemplate from "@/components/ProductPageTemplate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise SaaS Products | Xelphrix Technologies",
  description:
    "Explore Xelphrix enterprise SaaS products including outreach automation, gym management systems, and scalable e-commerce platforms.",
  keywords: [
    "Cold Email Automation Platform",
    "Gym Management Software",
    "E-Commerce SaaS Platform",
    "Enterprise Software Products"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/products",
  },
};

export default function ProductsPage() {
  return <ProductPageTemplate />;
}