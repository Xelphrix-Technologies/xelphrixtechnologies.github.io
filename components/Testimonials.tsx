"use client";

import HorizontalScroller from "@/components/HorizontalScroller";

export default function Testimonials() {
  const testimonials = [
  {
    feedback:
      "We partnered with Xelphrix to rebuild our cloud infrastructure. Their approach was structured, transparent, and technically strong. Within two months, our deployment cycles became faster and system stability improved significantly.",
    name: "Amit Verma",
    company: "Mid-Sized SaaS Company",
  },
  {
    feedback:
      "The outreach automation system they built helped us scale our campaigns without deliverability issues. The performance tracking and reporting features gave us much better visibility into our lead pipeline.",
    name: "Rohit Sharma",
    company: "B2B Growth Agency",
  },
  {
    feedback:
      "Xelphrix delivered our e-commerce platform with clean architecture and excellent performance optimization. The checkout experience improved noticeably, and our team now manages operations with ease.",
    name: "Priya Mehta",
    company: "Retail & Lifestyle Brand",
  },
];

  const testimonialCards = testimonials.map((item, i) => (
    <div
      key={i}
      className="group bg-[#2F3A44] rounded-2xl border border-[#BFC9D1]/20 p-7 shadow-md hover:shadow-lg hover:border-[#FF9B51] transition-all duration-300 h-full flex flex-col justify-between"
    >
      <p className="text-[#EAEFEF] text-sm leading-relaxed mb-6 break-words">
        “{item.feedback}”
      </p>

      <div>
        <h4 className="text-[#FF9B51] font-semibold text-sm">
          {item.name}
        </h4>
        <p className="text-[#BFC9D1] text-xs">
          {item.company}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="py-24 px-6 bg-[#25343F]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#EAEFEF] mb-6">
          What Our Clients Say
        </h2>

        <p className="text-[#BFC9D1] max-w-2xl mx-auto mb-14">
  Trusted by growing businesses and enterprises to build scalable cloud platforms, automation systems, and high-performance digital solutions.
</p>

        <HorizontalScroller items={testimonialCards} bgColor="#25343F" />

      </div>
    </section>
  );
}