"use client";

import HorizontalScroller from "@/components/HorizontalScroller";

export default function CaseStudies() {
  const cases = [
  {
    title: "Scalable SaaS Platform Architecture for Rapid Growth",
    desc:
      "Designed and deployed a cloud-native SaaS platform with secure multi-tenant architecture, automated CI/CD pipelines, and high-availability infrastructure on AWS.",
    result: "Handled 10x user growth without performance degradation",
  },
  {
    title: "High-Performance E-Commerce Optimization",
    desc:
      "Re-engineered backend systems and database architecture to improve checkout speed, payment reliability, and inventory synchronization.",
    result: "40% improvement in checkout performance and increased sales conversion",
  },
  {
    title: "Automated Outreach & Lead Generation Infrastructure",
    desc:
      "Built a scalable cold outreach engine with inbox warm-up automation, deliverability optimization, and intelligent campaign tracking.",
    result: "3x increase in qualified leads with improved email deliverability",
  },
];

  const caseCards = cases.map((item, i) => (
    <div
      key={i}
      className="group bg-white rounded-2xl border border-[#BFC9D1]/40 p-7 shadow-md hover:shadow-xl hover:border-[#FF9B51] transition-all duration-300 h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-[#25343F] mb-4 break-words">
          {item.title}
        </h3>

        <p className="text-[#596A78] text-sm leading-relaxed mb-6 break-words">
          {item.desc}
        </p>
      </div>

      <div className="bg-[#FF9B51]/10 text-[#25343F] text-sm font-medium px-4 py-2 rounded-lg inline-block">
        {item.result}
      </div>
    </div>
  ));

  return (
    <section className="py-24 px-6 bg-[#EAEFEF]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#25343F] mb-6">
          Case Studies
        </h2>

        <p className="text-[#596A78] max-w-2xl mx-auto mb-14">
          Real enterprise solutions delivering measurable business impact.
        </p>

        <HorizontalScroller items={caseCards} bgColor="#EAEFEF" />

      </div>
    </section>
  );
}