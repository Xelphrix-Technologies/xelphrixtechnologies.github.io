import PageLayout from "../layouts/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const navigate = useNavigate();

  const products = [
    {
      id: "cloudsuite",
      name: "Xelphrix CloudSuite",
      tagline: "Enterprise Cloud Management Platform",
      description:
        "Multi-region infrastructure orchestration, monitoring, and cost optimization for scalable SaaS environments.",
    },
    {
      id: "engage",
      name: "Xelphrix Engage",
      tagline: "AI-Driven Experience Platform",
      description:
        "Automation workflows and intelligent analytics to power customer engagement systems.",
    },
    {
      id: "studio",
      name: "Xelphrix Studio",
      tagline: "Digital Media & Experience Systems",
      description:
        "Enterprise-grade video production and digital content automation for modern brands.",
    },
  ];

  return (
    <PageLayout
      title="Our Products"
      subtitle="Purpose-built platforms engineered for performance, scalability, and measurable growth."
    >
      <div className="space-y-20">

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-red-600 text-sm font-medium mb-4">
                  {product.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
                className="mt-8 flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all"
              >
                View Platform
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Looking for a Custom Platform?
          </h3>
          <p className="text-slate-600 mb-6">
            We design and engineer tailored SaaS and cloud systems aligned with your business objectives.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700
            text-white rounded-lg shadow-lg hover:scale-[1.05] transition"
          >
            Talk to Our Team
          </a>
        </div>

      </div>
    </PageLayout>
  );
}