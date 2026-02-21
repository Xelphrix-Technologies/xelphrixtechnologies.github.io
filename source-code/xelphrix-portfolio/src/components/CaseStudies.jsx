import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: "cloud-migration",
    name: "Enterprise Cloud Migration",
    tagline: "Cloud & DevOps",
    description:
      "Migrated legacy infrastructure to AWS with zero downtime and optimized operational cost.",
    impact: [
      "38% Cost Reduction",
      "Zero Downtime",
      "Multi-Region Deployment",
    ],
  },
  {
    id: "saas-platform",
    name: "Scalable SaaS Platform",
    tagline: "Product Engineering",
    description:
      "Designed and deployed a high-performance SaaS platform handling large-scale concurrent traffic.",
    impact: [
      "1M+ Requests/Day",
      "99.9% Uptime",
      "Microservices Architecture",
    ],
  },
  {
    id: "automation-system",
    name: "CI/CD Automation System",
    tagline: "DevOps",
    description:
      "Implemented deployment automation reducing release cycles and improving infrastructure reliability.",
    impact: [
      "60% Faster Deployments",
      "Automated Pipelines",
      "Reduced Operational Errors",
    ],
  },
];

export default function CaseStudies() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemsPerView = 2;
  const total = caseStudies.length;
  const maxIndex = total - itemsPerView;

  // Auto scroll
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Case Studies
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Real implementations delivering measurable results across cloud,
          engineering and automation systems.
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 md:-left-14 top-1/2 -translate-y-1/2 z-10 
          bg-gradient-to-r from-red-600 to-red-700 
          text-white p-4 rounded-full shadow-lg 
          hover:scale-110 transition duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 md:-right-14 top-1/2 -translate-y-1/2 z-10 
          bg-gradient-to-r from-red-600 to-red-700 
          text-white p-4 rounded-full shadow-lg 
          hover:scale-110 transition duration-300"
        >
          <ChevronRight size={20} />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden px-6">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex"
            style={{ width: `${(total * 100) / itemsPerView}%` }}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-1/2 flex-shrink-0 px-4"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-slate-50 p-10 rounded-2xl shadow-xl border border-slate-200 
                  hover:shadow-2xl transition duration-300 h-full"
                >
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {study.name}
                  </h3>

                  <p className="text-red-600 font-medium mb-4">
                    {study.tagline}
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Impact Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {study.impact.map((item, i) => (
                      <span
                        key={i}
                        className="bg-red-50 text-red-600 border border-red-100 px-3 py-1 text-xs font-medium rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/case/${study.id}`)
                    }
                    className="flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all"
                  >
                    View Case Study
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}