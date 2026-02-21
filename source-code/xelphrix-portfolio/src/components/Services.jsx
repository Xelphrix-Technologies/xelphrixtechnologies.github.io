import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "We design and build SaaS platforms, enterprise applications, and scalable systems engineered for long-term growth.",
    items: [
      "SaaS Platform Development",
      "Web & Mobile Applications",
      "Microservices Architecture",
      "Product Scaling & Optimization",
    ],
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    description:
      "Modern cloud infrastructure built with automation-first DevOps practices for reliability and cost efficiency.",
    items: [
      "AWS Architecture",
      "Cloud Migration",
      "CI/CD Automation",
      "Infrastructure Monitoring",
    ],
  },
  {
    id: 3,
    title: "Digital & Media Systems",
    description:
      "Strategic digital assets and motion systems that elevate product positioning and brand presence.",
    items: [
      "Product Explainer Videos",
      "Motion Graphics",
      "UI Visual Systems",
      "Digital Brand Assets",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(1);

  return (
    <section id="services" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Structured engineering capabilities built to power digital products
            and intelligent systems at scale.
          </p>
        </motion.div>

        {/* Panels */}
        <div className="space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-12 transition-all duration-500 border relative overflow-hidden cursor-pointer
              ${
                active === service.id
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl scale-[1.02]"
                  : "bg-slate-50 border-slate-200 text-slate-900"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Left */}
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      active === service.id
                        ? "text-red-100"
                        : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Right */}
                <motion.ul
                  initial="hidden"
                  animate={active === service.id ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="space-y-4"
                >
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-center text-sm ${
                        active === service.id
                          ? "text-white"
                          : "text-slate-700"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${
                          active === service.id
                            ? "bg-white"
                            : "bg-red-600"
                        }`}
                      ></span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

              </div>

              {/* Glow effect */}
              {active === service.id && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 bg-white/10 blur-3xl -z-10"
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}