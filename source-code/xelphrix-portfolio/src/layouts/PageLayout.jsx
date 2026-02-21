import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function PageLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">

        {/* Subtle Accent */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-100/40 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          {children}
        </motion.div>
      </section>

      {/* GLOBAL CTA */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}