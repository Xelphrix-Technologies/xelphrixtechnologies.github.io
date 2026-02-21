import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "cloudsuite",
    name: "Xelphrix CloudSuite",
    tagline: "Enterprise Cloud Management Platform",
    description:
      "Unified infrastructure management platform enabling multi-region deployments, monitoring and cost optimization.",
  },
  {
    id: "engage",
    name: "Xelphrix Engage",
    tagline: "AI-Driven Customer Experience Platform",
    description:
      "Intelligent engagement system powering automation workflows and analytics dashboards.",
  },
  {
    id: "studio",
    name: "Xelphrix Studio",
    tagline: "Digital Media & Experience Platform",
    description:
      "Video production, motion graphics and digital experience systems for modern brands.",
  },
];

export default function Products() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemsPerView = 2;
  const total = products.length;
  const maxIndex = total - itemsPerView;

  // Auto scroll
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="products" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Products
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Purpose-built SaaS platforms engineered for performance and measurable growth.
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
            {products.map((product) => (
              <div
                key={product.id}
                className="w-1/2 flex-shrink-0 px-4"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 
                  hover:shadow-2xl transition duration-300 h-full"
                >
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-red-600 font-medium mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                    className="flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all"
                  >
                    View Platform
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