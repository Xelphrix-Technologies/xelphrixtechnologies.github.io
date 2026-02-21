import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import WhyXelphrix from "./components/WhyXelphrix";
import CaseStudies from "./components/CaseStudies";

import ProductsPage from "./pages/Products";

import Product_CloudSuite from "./pages/products/Product_CloudSuite";

import ServicesPage from "./pages/Services";

import AboutPage from "./pages/About";






import CaseStudy_CloudMigration from "./pages/caseStudy/CaseStudy_CloudMigration";

// gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const inner = section.querySelector(".section-inner");

    if (!inner) return;

    gsap.fromTo(
      inner,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  ScrollTrigger.refresh();
}, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services /> 
      <WhyXelphrix />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case/cloud-migration" element={<CaseStudy_CloudMigration />} />
          <Route path="/product/cloudsuite" element={<Product_CloudSuite />} />
        </Routes>
    </BrowserRouter>
  );
}
