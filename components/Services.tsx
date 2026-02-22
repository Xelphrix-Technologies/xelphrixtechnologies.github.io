"use client";

import { Code, Cloud, Server, Brush, Video, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Engineering",
      desc: "Enterprise-grade web and cloud applications built with scalable architecture, clean code practices, and long-term maintainability.",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture & AWS Solutions",
      desc: "Secure, high-availability cloud infrastructure design, migrations, cost optimization, and performance engineering on AWS.",
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure Automation",
      desc: "CI/CD pipelines, containerization, monitoring, and automated infrastructure to ensure faster releases and operational stability.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance Engineering",
      desc: "End-to-end security implementation including IAM, encryption, secure APIs, vulnerability mitigation, and cloud best practices.",
    },
    {
      icon: BarChart3,
      title: "Data, Analytics & Reporting Systems",
      desc: "Real-time dashboards, reporting platforms, and data-driven systems that transform operational data into strategic business insights.",
    },
    {
      icon: Video,
      title: "Visual Media & Brand Experience",
      desc: "Professional product videos, motion graphics, UI/UX design, and enterprise branding assets that elevate digital presence and customer engagement.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#25343F]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#EAEFEF]">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group p-8 bg-[#2F3A44] rounded-2xl border border-[#BFC9D1]/20 hover:border-[#FF9B51] transition-all duration-300"
              >
                <div className="text-[#FF9B51] mb-6 group-hover:text-[#FFF9B5] transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-[#EAEFEF]">
                  {service.title}
                </h3>

                <p className="text-[#BFC9D1] text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 h-[2px] w-0 bg-[#FF9B51] transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}