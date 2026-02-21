import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/contact", data);
      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-44 bg-white relative overflow-hidden"
    >
      {/* Mesh Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let’s Build Something Scalable
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Partner with Xelphrix to design intelligent systems, deploy resilient
            cloud infrastructure, and engineer digital products built for growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-slate-900">
              Start Your Digital Transformation
            </h3>

            <p className="text-slate-600 leading-relaxed">
              We help organizations modernize infrastructure, automate workflows,
              and build scalable SaaS platforms engineered for long-term success.
            </p>

            <div className="space-y-4 text-slate-700">
              <p>✔ Architecture-First Engineering</p>
              <p>✔ Cloud & DevOps Expertise</p>
              <p>✔ SaaS & Enterprise Platforms</p>
              <p>✔ Automation & Performance Optimization</p>
            </div>

            <p className="text-sm text-slate-500 pt-4">
              Typically responding within 24 hours.
            </p>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-12 shadow-xl border border-slate-200 relative overflow-hidden"
          >
            {/* SUCCESS OVERLAY */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white flex items-center justify-center rounded-2xl z-20"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl"
                    >
                      ✓
                    </motion.div>
                    <p className="text-lg font-semibold text-slate-900">
                      Message Sent Successfully!
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      We’ll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

              {/* Floating Input Component Pattern */}
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    {...register(field.name, {
                      required: `${field.label} is required`,
                    })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-3 rounded-lg border border-slate-300 bg-white 
                    focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                  />
                  <label
                    className="absolute left-3 px-2 bg-slate-50 text-slate-500 text-sm transition-all duration-200
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-600
                    peer-valid:-top-2 peer-valid:text-xs
                    z-10"
                  >
                    {field.label}
                  </label>
                  {errors[field.name] && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors[field.name].message}
                    </p>
                  )}
                </div>
              ))}

              {/* Dropdown */}
              <div className="relative">
                <select
                  {...register("projectType", {
                    required: "Please select project type",
                  })}
                  className="appearance-none w-full px-4 py-4 pr-12 rounded-lg 
                  border border-slate-300 bg-white text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-red-600 
                  focus:border-red-600 transition"
                >
                  <option value="">Select Project Type</option>
                  <option>SaaS Development</option>
                  <option>Cloud Migration</option>
                  <option>DevOps Automation</option>
                  <option>Enterprise Software</option>
                  <option>Media & Digital Systems</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {errors.projectType && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="4"
                  {...register("message", {
                    required: "Please enter project details",
                  })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 rounded-lg border border-slate-300 bg-white 
                  focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
                <label
                  className="absolute left-3 px-2 bg-slate-50 text-slate-500 text-sm transition-all duration-200
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
                  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-600
                  peer-valid:-top-2 peer-valid:text-xs
                  z-10"
                >
                  Project Details
                </label>

                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 
                text-white font-medium rounded-lg shadow-lg 
                hover:scale-[1.03] hover:shadow-2xl transition duration-300
                flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  "Schedule Consultation"
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}