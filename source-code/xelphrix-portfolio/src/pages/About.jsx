import PageLayout from "../layouts/PageLayout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Xelphrix Technologies"
      subtitle="Engineering intelligent systems, scalable infrastructure, and enterprise-grade digital platforms."
    >
      <div className="space-y-28">

        {/* Company Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who We Are
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Xelphrix Technologies is a cloud-first engineering company
            focused on building scalable SaaS platforms, resilient
            infrastructure systems, and intelligent automation frameworks.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We combine modern frontend engineering, backend architecture,
            and AWS-native cloud systems to deliver solutions that are
            performance-driven, secure, and built for long-term growth.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To engineer scalable digital systems that empower businesses
              to innovate faster, operate efficiently, and grow sustainably.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To become a trusted global partner for enterprise cloud
              transformation and intelligent system engineering.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering Excellence",
                desc: "We design systems that are scalable, secure, and future-ready."
              },
              {
                title: "Strategic Thinking",
                desc: "Every solution is aligned with long-term business goals."
              },
              {
                title: "Transparency",
                desc: "Clear communication and measurable outcomes."
              },
              {
                title: "Cloud-First Approach",
                desc: "Modern infrastructure built for global scalability."
              },
              {
                title: "Performance Driven",
                desc: "Optimized architectures for reliability and speed."
              },
              {
                title: "Continuous Innovation",
                desc: "Leveraging AI, automation, and emerging technologies."
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our Engineering Philosophy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We believe architecture defines scalability. Our systems are
            built with modular design principles, microservices patterns,
            and cloud-native technologies to ensure flexibility and resilience.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From frontend performance to backend reliability and DevOps
            automation, every layer of our stack is engineered for efficiency.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Why Xelphrix?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Cloud-Native Expertise",
              "Scalable SaaS Engineering",
              "Automation-First Approach",
              "Enterprise-Grade Architecture"
            ].map((item, i) => (
              <div key={i}>
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Let’s Engineer the Future Together
          </h3>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700
            text-white rounded-lg shadow-lg hover:scale-[1.05] transition"
          >
            Start a Conversation
          </a>
        </section>

      </div>
    </PageLayout>
  );
}