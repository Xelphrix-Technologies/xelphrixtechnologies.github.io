import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Soft animated background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Digital Products.
            <br />
            <span className="text-red-600">
              Intelligent Systems.
            </span>
            <br />
            Scalable Growth.
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl">
            Xelphrix Technologies builds SaaS platforms, enterprise software,
            scalable applications, cloud-native systems, and digital experiences
            designed to drive innovation and long-term business growth.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#products"
              className="px-8 py-4 bg-red-600 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:border-red-600 hover:text-red-600 transition"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Capability Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              "SaaS Platforms",
              "App Development",
              "Cloud & DevOps",
              "Video & Graphics",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Animated Visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-10 shadow-2xl border border-slate-200">
            
            {/* Fake SaaS Dashboard Mock */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-slate-300 rounded-full" />
              <div className="w-3 h-3 bg-slate-300 rounded-full" />
            </div>

            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
              <div className="h-4 bg-slate-200 rounded w-5/6" />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-500">Deployments</p>
                <p className="text-2xl font-semibold text-slate-900">Global</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-500">Uptime</p>
                <p className="text-2xl font-semibold text-slate-900">99.9%</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}