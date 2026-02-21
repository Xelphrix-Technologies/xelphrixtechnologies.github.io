import PageLayout from "../layouts/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "SaaS & Product Engineering",
      description:
        "End-to-end product development using React, Node.js, scalable backend architecture and cloud-native deployment.",
      points: [
        "Full-stack architecture design",
        "Scalable backend systems",
        "Microservices & API development",
        "Enterprise UI/UX engineering",
      ],
    },
    {
      title: "Cloud Infrastructure & Migration",
      description:
        "High-availability AWS infrastructure with multi-region architecture and zero-downtime migration.",
      points: [
        "AWS architecture design",
        "Multi-AZ deployments",
        "Disaster recovery setup",
        "Cloud cost optimization",
      ],
    },
    {
      title: "DevOps & Automation",
      description:
        "CI/CD pipelines, containerization, monitoring and infrastructure-as-code implementation.",
      points: [
        "Docker & container orchestration",
        "CI/CD pipeline automation",
        "Monitoring & logging systems",
        "Infrastructure as Code",
      ],
    },
    {
      title: "Digital Media & Experience Systems",
      description:
        "Enterprise-grade digital content production and automation systems for modern brands.",
      points: [
        "Video production workflows",
        "Motion graphics systems",
        "Content automation pipelines",
        "Brand experience engineering",
      ],
    },
  ];

  return (
    <PageLayout
      title="Our Services"
      subtitle="Strategic engineering services designed to build scalable, resilient, and intelligent digital systems."
    >
      <div className="space-y-28">

        {/* SERVICE PILLARS */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all"
                >
                  Discuss This Service
                  <ArrowRight size={16} />
                </button>
              </div>

              <ul className="space-y-4 text-slate-600">
                {service.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* PROCESS SECTION */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-12 text-center">
            Our Engineering Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Discovery & Architecture",
              "System Design & Planning",
              "Agile Development",
              "Deployment & Optimization",
            ].map((step, i) => (
              <div key={i}>
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Ready to Modernize Your Infrastructure?
          </h3>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700
            text-white rounded-lg shadow-lg hover:scale-[1.05] transition"
          >
            Start a Consultation
          </a>
        </div>

      </div>
    </PageLayout>
  );
}