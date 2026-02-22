"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-24 px-6 bg-[#EAEFEF] text-center overflow-hidden">

      {/* Subtle Accent Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#FF9B51]/10 rounded-full blur-3xl top-[-150px] left-[-150px]" />

      <div className="relative max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#25343F]"
        >
          Ready to Build Enterprise-Grade Solutions?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#596A78] mb-10 max-w-2xl mx-auto"
        >
          Let’s architect scalable cloud infrastructure, powerful SaaS platforms,
          and high-performance enterprise systems tailored for your business.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
        >
          Book Free Consultation
        </motion.button>

      </div>
    </section>
  );
}