"use client";

import Link from "next/link";

export default function AboutTemplate() {
  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mb-6">
            Powering Businesses with Intelligent Cloud Solutions
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            Cloud Architecture. SaaS Platforms. Scalable Engineering.
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto">
            Xelphrix Technologies is a product-focused engineering company
            building secure, scalable, and performance-driven digital systems.
            We help businesses modernize infrastructure, automate operations,
            and launch cloud-native platforms built for long-term growth.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-8">
            Who We Are
          </h2>

          <p className="text-[#596A78] text-lg leading-relaxed">
            Xelphrix Technologies specializes in cloud architecture,
            SaaS product development, automation systems, and scalable backend
            engineering. We combine strong system design principles with
            modern development practices to deliver resilient digital platforms
            that grow with your business.
          </p>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-bold text-[#25343F] mb-6">
              Our Vision
            </h3>
            <p className="text-[#596A78] leading-relaxed">
              To become a trusted technology partner for ambitious businesses
              seeking scalable digital infrastructure and intelligent automation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#25343F] mb-6">
              Our Mission
            </h3>
            <p className="text-[#596A78] leading-relaxed">
              To design, build, and optimize cloud-native systems that are secure,
              high-performing, and engineered for long-term operational success.
            </p>
          </div>

        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <ValueCard
              title="Architecture-First Engineering"
              desc="Every solution begins with thoughtful system design focused on scalability, performance, and resilience."
            />

            <ValueCard
              title="Execution with Discipline"
              desc="We follow structured development processes, clean code standards, and cloud best practices."
            />

            <ValueCard
              title="Cloud & Automation Expertise"
              desc="Deep hands-on experience building AWS-based infrastructure, CI/CD pipelines, and distributed systems."
            />

          </div>

        </div>
      </section>

      {/* ENGINEERING PHILOSOPHY */}
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-8">
            Our Engineering Philosophy
          </h2>

          <p className="text-[#596A78] text-lg leading-relaxed">
            At Xelphrix, leadership is grounded in engineering discipline.
            We believe in building systems that are maintainable, scalable,
            and performance-driven. Our approach prioritizes clarity,
            long-term architecture planning, and measurable outcomes
            over short-term shortcuts.
          </p>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <CoreValue title="Integrity & Transparency" />
            <CoreValue title="Continuous Innovation" />
            <CoreValue title="Technical Precision" />
            <CoreValue title="Long-Term Partnerships" />

          </div>

        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-12">
            Our Technology Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-[#596A78]">
            {[
              "AWS Cloud Architecture & High Availability",
              "Node.js & Scalable Backend Systems",
              "React & Modern Frontend Engineering",
              "SQL & NoSQL Database Design",
              "DevOps, CI/CD & Infrastructure Automation",
              "SaaS Product Architecture"
            ].map((tech, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-[#FF9B51]/10 rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#25343F] text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF] mb-6">
          Let’s Build Scalable Digital Infrastructure Together
        </h2>

        <Link
          href="/contact"
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold transition"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  );
}

/* COMPONENTS */

function ValueCard({ title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#25343F] mb-4">
        {title}
      </h3>
      <p className="text-[#596A78]">
        {desc}
      </p>
    </div>
  );
}

function CoreValue({ title }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-[#25343F] font-medium hover:shadow-md transition">
      {title}
    </div>
  );
}