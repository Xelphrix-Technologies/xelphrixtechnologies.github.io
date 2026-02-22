"use client";

import { useState } from "react";
import Link from "next/link";
import ProductSlideshow from "./ProductSlideshow";
import AnimatedCounter from "./AnimatedCounter";

interface ProductProps {
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  heroCTA?: {
    primary?: string;
    secondary?: string;
  };
  images?: string[];
  video?: {
    thumbnail: string;
    url: string;
  };
  metrics?: { label: string; value: string }[];
  overview?: string;
  features?: { title: string; desc: string }[];
  useCases?: string[];
  architecture?: {
    description: string;
    diagram: string;
  };
  faq?: { question: string; answer: string }[];
}

export default function ProductTemplate({
  name,
  badge,
  tagline,
  description,
  heroCTA,
  images = [],
  video,
  metrics = [],
  overview,
  features = [],
  useCases = [],
  architecture,
  faq = [],
}: ProductProps) {

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {badge && (
            <span className="bg-[#FF9B51]/20 text-[#FF9B51] px-4 py-1 rounded-full text-sm">
              {badge}
            </span>
          )}

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mt-6 mb-6">
            {name}
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            {tagline}
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto mb-10">
            {description}
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {heroCTA?.primary && (
              <Link
                href="/contact"
                className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold"
              >
                {heroCTA.primary}
              </Link>
            )}

            {heroCTA?.secondary && (
              <Link
                href="#"
                className="border border-[#BFC9D1]/40 text-white px-8 py-3 rounded-xl"
              >
                {heroCTA.secondary}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* METRICS */}
{metrics.length > 0 && (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
      {metrics.map((metric, i) => {
        const rawValue = metric.value;

        // If already a number → animate directly
        if (typeof rawValue === "number") {
          return (
            <div key={i}>
              <div className="text-4xl font-bold text-[#FF9B51]">
                <AnimatedCounter value={rawValue} />
              </div>
              <div className="text-[#596A78] mt-2 text-sm">
                {metric.label}
              </div>
            </div>
          );
        }

        // If string → check if it contains numeric value
        if (typeof rawValue === "string") {
          const numericValue = parseFloat(
            rawValue.replace(/[^\d.]/g, "")
          );

          const isNumeric = !isNaN(numericValue);

          const suffix = rawValue.replace(/[\d.]/g, "");

          return (
            <div key={i}>
              <div className="text-4xl font-bold text-[#FF9B51]">
                {isNumeric ? (
                  <>
                    <AnimatedCounter value={numericValue} />
                    {suffix}
                  </>
                ) : (
                  rawValue
                )}
              </div>
              <div className="text-[#596A78] mt-2 text-sm">
                {metric.label}
              </div>
            </div>
          );
        }

        // Fallback
        return (
          <div key={i}>
            <div className="text-4xl font-bold text-[#FF9B51]">
              {String(rawValue)}
            </div>
            <div className="text-[#596A78] mt-2 text-sm">
              {metric.label}
            </div>
          </div>
        );
      })}
    </div>
  </section>
)}

      {/* OVERVIEW */}
      {overview && (
        <section className="py-28 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#25343F] mb-8">
              Overview
            </h2>
            <p className="text-[#596A78] text-lg leading-relaxed">
              {overview}
            </p>
          </div>
        </section>
      )}

      {/* VISUAL SECTION */}
      {(images.length > 0 || video) && (
        <section className="py-28 px-6 bg-white text-center">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-[#25343F] mb-12">
              Product Experience
            </h2>

            {images.length > 0 && (
              <ProductSlideshow images={images} />
            )}

            {/* {video && (
              <div className="mt-16 max-w-4xl mx-auto">
                {!playVideo ? (
                  <div
                    onClick={() => setPlayVideo(true)}
                    className="relative cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-semibold">
                      ▶ Play Demo
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-2xl"
                      src={`https://www.youtube.com/embed/${video.url.split("v=")[1]}?autoplay=1`}
                      allow="autoplay"
                    />
                  </div>
                )}
              </div>
            )} */}

          </div>
        </section>
      )}

      {/* FEATURES */}
{features.length > 0 && (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-[#25343F] mb-6">
        Key Capabilities
      </h2>

      <p className="text-[#596A78] max-w-2xl mx-auto mb-16">
        Designed with scalability, performance, and operational efficiency in mind.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group bg-[#EAEFEF] p-10 rounded-2xl text-left transition duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[#FF9B51]/30"
          >
            {/* Icon Placeholder */}
            <div className="w-12 h-12 mb-6 rounded-xl bg-[#FF9B51]/10 flex items-center justify-center text-[#FF9B51] font-bold text-lg">
              {i + 1}
            </div>

            <h3 className="text-xl font-semibold text-[#25343F] mb-4 group-hover:text-[#FF9B51] transition">
              {feature.title}
            </h3>

            <p className="text-[#596A78] leading-relaxed">
              {feature.desc}
            </p>

            {/* Subtle underline animation */}
            <div className="mt-6 h-[2px] w-0 bg-[#FF9B51] group-hover:w-12 transition-all duration-300"></div>
          </div>
        ))}
      </div>

    </div>
  </section>
)}

      {/* ARCHITECTURE */}
      {architecture && (
        <section className="py-28 px-6 bg-white text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#25343F] mb-6">
              Architecture
            </h2>
            <p className="text-[#596A78] mb-12">
              {architecture.description}
            </p>
            <img
              src={architecture.diagram}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="py-28 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#25343F] mb-12">
              Frequently Asked Questions
            </h2>

            {faq.map((item, i) => (
              <div
                key={i}
                className="border border-[#BFC9D1]/40 rounded-xl p-6 mb-6 cursor-pointer"
                onClick={() =>
                  setOpenFAQ(openFAQ === i ? null : i)
                }
              >
                <div className="font-semibold text-[#25343F]">
                  {item.question}
                </div>

                {openFAQ === i && (
                  <div className="text-[#596A78] mt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#25343F] text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF] mb-6">
          Let’s Transform Your Enterprise Operations
        </h2>

        <Link
          href="/contact"
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold"
        >
          Book a Live Demo
        </Link>
      </section>

    </div>
  );
}