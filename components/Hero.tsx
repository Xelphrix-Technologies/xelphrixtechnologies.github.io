"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#25343F] overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#FF9B51]/10 rounded-full blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#FFF9B5]/10 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />

      <div className="relative z-10 max-w-4xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#EAEFEF]"
        >
          Powering Businesses with{" "}
          <span className="text-[#FF9B51]">
            Intelligent Cloud
          </span>{" "}
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-[#BFC9D1] max-w-2xl mx-auto"
        >
          Specializing in cloud architecture, full-stack development, and enterprise system design, we deliver secure, scalable, and high-performance solutions tailored for modern businesses.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
            <motion.a
                href="/contact"   // Change to your consultation page or calendly link
                whileHover={{ scale: 1.05 }}
                className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-medium transition inline-block text-center"
            >
                Book Free Consultation
            </motion.a>

            <motion.a
                href="/services"   // Change to your services page or section ID like #services
                whileHover={{ scale: 1.05 }}
                className="border border-[#BFC9D1]/40 text-[#EAEFEF] px-8 py-3 rounded-xl font-medium hover:bg-[#2F3A44] transition inline-block text-center"
            >
                Explore Services
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
}