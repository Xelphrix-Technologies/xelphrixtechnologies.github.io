"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeamTemplate() {
  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mb-6">
            The Minds Behind Xelphrix
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            Architecture-Driven. Cloud-Native. Product-Focused.
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto">
            Our team combines cloud architecture expertise, scalable backend
            engineering, and modern frontend systems to build secure,
            high-performance digital platforms.
          </p>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            Founder & Leadership
          </h2>

          <div className="bg-[#25343F] rounded-3xl p-12 md:p-16 shadow-2xl text-left relative overflow-hidden">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF9B51]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">

              {/* Founder Avatar */}
              {/* <div className="flex justify-center md:justify-start">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FF9B51] shadow-lg">
                  <Image
                    src="/team/gaurav.jpg"
                    alt="Gaurav Kumar - Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div> */}

              <Avatar name="Gaurav Kumar" size={160} />

              {/* Founder Info */}
              <div className="md:col-span-2">

                <h3 className="text-3xl font-semibold text-white mb-2">
                  Gaurav Kumar
                </h3>

                <p className="text-[#FF9B51] font-medium mb-6">
                  Founder & Lead Cloud Architect
                </p>

                <p className="text-[#BFC9D1] leading-relaxed">
                  Gaurav leads Xelphrix with a strong focus on cloud-native
                  architecture, scalable SaaS platforms, and system design
                  excellence. With deep expertise in AWS infrastructure,
                  backend engineering, and automation systems, he ensures
                  every solution is engineered for performance, security,
                  and long-term scalability.
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE TEAM */}
      <section className="py-28 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            Core Engineering Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            <TeamCard
              avatar="/team/cloud.jpg"
              name="Senior Cloud Architect"
              role="Infrastructure & Security"
              bio="Designs high-availability AWS environments, multi-region deployments, and secure cloud architectures."
            />

            <TeamCard
              avatar="/team/backend.jpg"
              name="Backend Engineer"
              role="API & System Architecture"
              bio="Builds scalable Node.js services, database systems, and real-time data processing pipelines."
            />

            <TeamCard
              avatar="/team/devops.jpg"
              name="DevOps Engineer"
              role="Automation & CI/CD"
              bio="Implements infrastructure-as-code, monitoring systems, and automated deployment workflows."
            />

            <TeamCard
              avatar="/team/frontend.jpg"
              name="Frontend Engineer"
              role="UI/UX & Web Applications"
              bio="Develops responsive React applications with performance optimization and scalable component architecture."
            />

          </div>

        </div>
      </section>

      {/* CULTURE */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] mb-16">
            Our Culture
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <CultureCard title="Ownership & Accountability" />
            <CultureCard title="Continuous Innovation" />
            <CultureCard title="Technical Discipline" />
            <CultureCard title="Long-Term Thinking" />
          </div>

        </div>
      </section>

      

      {/* CTA */}
      <section className="py-32 px-6 bg-[#25343F] text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF] mb-6">
          Want to Work With a High-Performance Engineering Team?
        </h2>

        <Link
          href="/contact"
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold transition"
        >
          Let’s Connect
        </Link>
      </section>

    </div>
  );
}

/* COMPONENTS */

function Avatar({ name, size = 80 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF9B51] to-[#F97316] text-white font-semibold shadow-md"
    >
      <span className="text-lg">{initials}</span>
    </div>
  );
}

function TeamCard({ avatar, name, role, bio }: any) {
  return (
    <div className="bg-[#EAEFEF] p-8 rounded-2xl text-left hover:shadow-xl transition group">

      {/* <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#FF9B51]">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div> */}

      <Avatar name={name} size={160} />

      <h3 className="text-lg font-semibold text-[#25343F] mb-1">
        {name}
      </h3>

      <p className="text-[#FF9B51] mb-3 text-sm font-medium">
        {role}
      </p>

      <p className="text-[#596A78] text-sm leading-relaxed">
        {bio}
      </p>
    </div>
  );
}

function CultureCard({ icon, title, desc }: any) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-left border border-transparent hover:border-[#FF9B51]/40">

      <div className="text-3xl mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#25343F] mb-3 group-hover:text-[#FF9B51] transition">
        {title}
      </h3>

      <p className="text-[#596A78] text-sm leading-relaxed">
        {desc}
      </p>

      <div className="mt-6 h-[2px] w-0 bg-[#FF9B51] group-hover:w-14 transition-all duration-300"></div>
    </div>
  );
}