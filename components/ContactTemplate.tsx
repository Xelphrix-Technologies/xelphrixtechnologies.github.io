"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactTemplate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Your inquiry has been submitted successfully.");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mb-6">
            Let’s Build Something Scalable
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            Cloud Architecture • SaaS Platforms • Automation Systems
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto">
            Share your requirements and our team will respond with a tailored
            consultation strategy aligned to your business objectives.
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#25343F] text-center mb-16">
            Request a Consultation
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">

            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
              <InputField label="Business Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>

            <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} />

            <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
  className="p-4 rounded-xl border border-[#BFC9D1]/40 focus:outline-none focus:ring-2 focus:ring-[#FF9B51]"
>
  <option value="">Select Inquiry Type</option>

  {/* SERVICES */}
  <optgroup label="Engineering Services">
    <option>Custom Software Engineering</option>
    <option>Cloud Architecture & AWS Solutions</option>
    <option>DevOps & Infrastructure Automation</option>
    <option>Security & Compliance Engineering</option>
    <option>Data, Analytics & Reporting Systems</option>
    <option>Visual Media & Brand Experience</option>
  </optgroup>

  {/* PRODUCTS */}
  <optgroup label="Product Platforms">
    <option>Xelphrix Outreach Engine</option>
    <option>Xelphrix FitCore</option>
    <option>Xelphrix Commerce Suite</option>
  </optgroup>

  {/* OTHER */}
  <optgroup label="Other">
    <option>General Consultation</option>
    <option>Partnership Inquiry</option>
    <option>Careers / Join Team</option>
  </optgroup>
</select>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-4 rounded-xl border border-[#BFC9D1]/40 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>

            {success && (
              <p className="text-green-600 font-medium text-center mt-4">
                {success}
              </p>
            )}

          </form>
        </div>
      </section>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-[#25343F] font-medium">{label}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="p-4 rounded-xl border border-[#BFC9D1]/40 focus:outline-none focus:ring-2 focus:ring-[#FF9B51]"
      />
    </div>
  );
}