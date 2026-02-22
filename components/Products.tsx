"use client";

import Link from "next/link";
import HorizontalScroller from "@/components/HorizontalScroller";

export default function Products() {
  const products = [
    {
        name: "Xelphrix Outreach Engine",
        desc: "Enterprise-grade cold outreach and email infrastructure with inbox warm-up, deliverability optimization, automated sequencing, domain management, and advanced performance analytics.",
        link: "#",
    },
    {
        name: "Xelphrix FitCore",
        desc: "Comprehensive fitness center management platform featuring membership automation, recurring billing, attendance tracking, trainer management, and real-time operational insights.",
        link: "#",
    },
    {
        name: "Xelphrix Commerce Suite",
        desc: "Secure, scalable e-commerce platform with product lifecycle management, payment integrations, order processing, inventory automation, and performance analytics.",
        link: "#",
    },
    ];

  const productCards = products.map((product, i) => (
    <div
      key={i}
      className="group bg-white rounded-2xl border border-[#BFC9D1]/40 p-7 shadow-md hover:shadow-xl hover:border-[#FF9B51] transition-all duration-300 h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-[#25343F] mb-4 break-words">
          {product.name}
        </h3>

        <p className="text-[#596A78] text-sm leading-relaxed break-words">
          {product.desc}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={product.link}
          className="text-[#FF9B51] text-sm font-medium hover:text-[#25343F] transition"
        >
          Explore Product →
        </Link>

        <div className="mt-4 h-[2px] w-0 bg-[#FF9B51] transition-all duration-300 group-hover:w-full"></div>
      </div>
    </div>
  ));

  return (
    <section className="py-24 px-6 bg-[#EAEFEF]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#25343F] mb-6">
        Our Digital Product Suite
        </h2>

        <p className="text-[#596A78] max-w-2xl mx-auto mb-14">
        A portfolio of scalable SaaS solutions engineered for performance,
        automation, and measurable business growth.
        </p>

        <HorizontalScroller items={productCards} bgColor="#EAEFEF" />

      </div>
    </section>
  );
}