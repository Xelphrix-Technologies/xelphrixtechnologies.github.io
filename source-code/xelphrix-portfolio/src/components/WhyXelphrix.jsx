import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Deployment Uptime", value: 99.9, suffix: "%" },
  { label: "Regions Deployed", value: 5, suffix: "+" },
  { label: "Automation Coverage", value: 85, suffix: "%" },
];

export default function WhyXelphrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < metrics[i].value
            ? count + metrics[i].value / 40
            : metrics[i].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-44 bg-[#f9fafb] relative overflow-hidden"
    >
      {/* Soft radial background accent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-100/40 rounded-full blur-3xl" />

      {/* Top Divider Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Built for Scale. Engineered for Impact.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Xelphrix combines product engineering, cloud architecture,
            and automation-first systems to deliver digital infrastructure
            that drives measurable business growth.
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-36">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-10 text-center shadow-md hover:shadow-xl border border-slate-200 transition"
            >
              <h3 className="text-4xl font-bold text-red-600 mb-2">
                {Math.round(counts[i] * 10) / 10}
                {metric.suffix}
              </h3>
              <p className="text-slate-600 text-sm">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strength Pillars */}
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              title: "Architecture-First Approach",
              desc: "Systems designed for scalability, reliability and long-term maintainability from day one.",
            },
            {
              title: "Automation-Driven Operations",
              desc: "CI/CD pipelines, infrastructure automation and monitoring reduce manual friction and increase velocity.",
            },
            {
              title: "Performance & Optimization",
              desc: "High-performance architecture engineered for efficiency, resilience and cost control.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="h-1 w-12 bg-red-600" />
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}