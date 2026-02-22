import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xelphrix Technologies | Powering Businesses with Intelligent Cloud Solutions",
  description:
    "Xelphrix Technologies builds scalable SaaS platforms, AWS cloud infrastructure, DevOps automation systems, and enterprise-grade digital solutions.",
  keywords: [
    "AWS Cloud Architecture",
    "SaaS Development Company",
    "DevOps Automation",
    "Enterprise Software Development",
    "Cloud Migration Services",
    "Technology Consulting India"
  ],
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com",
  },
  openGraph: {
    title: "Xelphrix Technologies",
    description:
      "Enterprise cloud architecture, SaaS engineering, and scalable automation systems.",
    url: "https://www.xelphrixtechnologies.com",
    siteName: "Xelphrix Technologies",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Products />
      <Services />
      <CaseStudies />
      <Testimonials />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}