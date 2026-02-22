"use client";

import Link from "next/link";

export default function ServicesTemplate() {
  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mb-6">
            Enterprise Technology Services
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            Cloud, SaaS, DevOps & Digital Engineering
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto mb-10">
            We design, architect, and scale enterprise-grade systems —
            from cloud infrastructure to high-performance SaaS platforms.
          </p>

          <Link
            href="/contact"
            className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold"
          >
            Schedule Consultation
          </Link>

        </div>
      </section>

      {/* SERVICES OVERVIEW GRID */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <ServiceCard
              title="Software Development"
              desc="Custom web applications, enterprise systems, and scalable SaaS platforms."
            />

            <ServiceCard
              title="Enterprise Cloud Infrastructure"
              desc="AWS architecture, migration, high-availability design, and optimization."
            />

            <ServiceCard
              title="DevOps & Automation"
              desc="CI/CD pipelines, containerization, monitoring, and infrastructure automation."
            />

            <ServiceCard
              title="SaaS Product Engineering"
              desc="Full-cycle product design, backend systems, APIs, and integrations."
            />

            <ServiceCard
              title="UI/UX & Branding"
              desc="Modern digital interfaces, branding systems, and enterprise design."
            />

            <ServiceCard
              title="Video & Motion Design"
              desc="Corporate explainer videos, product demos, and presentation assets."
            />

          </div>
        </div>
      </section>

      {/* DETAILED SERVICE SECTION */}
      <DetailedService
        title="Cloud Architecture & Migration"
        description="We architect highly available, secure, and scalable cloud environments designed to support enterprise workloads."
        points={[
          "Multi-region high availability",
          "RDS, EC2, VPC architecture design",
          "Security & compliance implementation",
          "Cost optimization & monitoring"
        ]}
        reverse={false}
      />

      <DetailedService
        title="Custom SaaS Development"
        description="From MVP to enterprise-scale SaaS, we build systems engineered for performance and growth."
        points={[
          "Scalable backend architecture",
          "Multi-tenant system design",
          "Role-based access control",
          "Real-time analytics & reporting"
        ]}
        reverse={true}
      />

      <DetailedService
        title="DevOps & CI/CD Automation"
        description="We streamline software delivery through automation and infrastructure-as-code."
        points={[
          "Automated deployments",
          "Docker & container orchestration",
          "Monitoring & observability",
          "Secure release management"
        ]}
        reverse={false}
      />

      {/* PROCESS */}
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            Our Methodology
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <ProcessStep step="01" title="Discovery" />
            <ProcessStep step="02" title="Architecture" />
            <ProcessStep step="03" title="Implementation" />
            <ProcessStep step="04" title="Scale & Optimize" />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-10">
            Why Xelphrix?
          </h2>

          <p className="text-[#596A78] text-lg leading-relaxed">
            We combine deep technical expertise with enterprise architecture
            discipline. Our approach ensures scalable, secure, and future-ready
            systems aligned with your business objectives.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#25343F] text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF] mb-6">
          Ready to Engineer Your Next Enterprise Platform?
        </h2>

        <Link
          href="/contact"
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold"
        >
          Book a Strategy Call
        </Link>
      </section>

    </div>
  );
}

/* COMPONENTS */

function ServiceCard({ title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold text-[#25343F] mb-4">
        {title}
      </h3>
      <p className="text-[#596A78]">
        {desc}
      </p>
    </div>
  );
}

function DetailedService({ title, description, points, reverse }: any) {
  return (
    <section className={`py-28 px-6 ${reverse ? "bg-white" : "bg-[#EAEFEF]"}`}>
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center`}>
        <div>
          <h2 className="text-3xl font-bold text-[#25343F] mb-6">
            {title}
          </h2>
          <p className="text-[#596A78] mb-8">
            {description}
          </p>
          <ul className="space-y-3 text-[#596A78]">
            {points.map((point: string, i: number) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#25343F]/10 h-64 rounded-2xl"></div>
      </div>
    </section>
  );
}

function ProcessStep({ step, title }: any) {
  return (
    <div>
      <div className="text-3xl font-bold text-[#FF9B51] mb-4">
        {step}
      </div>
      <div className="text-[#25343F] font-semibold">
        {title}
      </div>
    </div>
  );
}