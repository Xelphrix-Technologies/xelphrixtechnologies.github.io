import PageLayout from "../../layouts/PageLayout";

export default function CaseStudyDetail() {
  return (
    <PageLayout
      title="Case Study: Enterprise Cloud Migration"
      subtitle="Zero-downtime AWS migration with multi-region scalability."
    >

      <div className="space-y-12">

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Overview
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The client required migration of legacy on-prem infrastructure
            to AWS while maintaining uptime and reducing operational cost.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Challenges
          </h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>High downtime risk</li>
            <li>Legacy monolithic architecture</li>
            <li>Scalability limitations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Results
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-red-600">38%</p>
              <p className="text-sm text-slate-600">Cost Reduction</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-red-600">99.9%</p>
              <p className="text-sm text-slate-600">Uptime</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-red-600">Multi-Region</p>
              <p className="text-sm text-slate-600">Deployment</p>
            </div>
          </div>
        </section>

      </div>

    </PageLayout>
  );
}