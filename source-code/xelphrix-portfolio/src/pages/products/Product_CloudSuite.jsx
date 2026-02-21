import PageLayout from "../../layouts/PageLayout";
import { motion } from "framer-motion";

export default function ProductDetail() {
  return (
    <PageLayout
      title="Xelphrix CloudSuite"
      subtitle="Enterprise-grade cloud management platform designed for scalability, automation, and operational intelligence."
    >
      <div className="space-y-24">

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Platform Overview
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Xelphrix CloudSuite enables enterprises to manage multi-region
            infrastructure, automate deployments, monitor performance,
            and optimize cloud cost — all from a unified control layer.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-12">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Region Deployment",
                desc: "Automate high-availability deployments across global AWS regions."
              },
              {
                title: "Real-Time Monitoring",
                desc: "Operational dashboards with performance and cost analytics."
              },
              {
                title: "Infrastructure as Code",
                desc: "Version-controlled environment provisioning and rollback."
              },
              {
                title: "Security Compliance",
                desc: "Role-based access control and audit logging."
              },
              {
                title: "Auto Scaling Engine",
                desc: "Dynamic resource scaling based on load metrics."
              },
              {
                title: "Cost Optimization",
                desc: "Identify waste, right-size resources, reduce cloud spend."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Architecture & Scalability
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Built using a microservices architecture powered by React,
            Node.js, and AWS-native services including ECS, RDS,
            S3, and CloudFront — ensuring resilience, performance,
            and global scalability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white border border-slate-200 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold text-red-600">99.9%</p>
              <p className="text-sm text-slate-600">Uptime SLA</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold text-red-600">Multi-AZ</p>
              <p className="text-sm text-slate-600">Deployment</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl text-center">
              <p className="text-2xl font-bold text-red-600">Global</p>
              <p className="text-sm text-slate-600">Scalability</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            Enterprise Use Cases
          </h2>

          <ul className="space-y-4 text-slate-600">
            <li>✔ SaaS infrastructure management</li>
            <li>✔ Enterprise cloud migration</li>
            <li>✔ DevOps automation workflows</li>
            <li>✔ High-availability application hosting</li>
          </ul>
        </section>

        <section className="text-center pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Ready to Deploy at Scale?
          </h3>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700
            text-white rounded-lg shadow-lg hover:scale-[1.05] transition"
          >
            Request a Demo
          </a>
        </section>

      </div>
    </PageLayout>
  );
}