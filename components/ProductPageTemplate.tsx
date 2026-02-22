"use client";

import Link from "next/link";
import { products } from "@/app/lib/Products";

export default function ProductsTemplate() {
  const productEntries = Object.entries(products);

  return (
    <div className="bg-[#EAEFEF]">

      {/* HERO */}
      <section className="bg-[#25343F] py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEFEF] mb-6">
            Enterprise Product Suite
          </h1>

          <p className="text-xl text-[#FF9B51] mb-6">
            Scalable Platforms Built for Modern Enterprises
          </p>

          <p className="text-[#BFC9D1] max-w-2xl mx-auto">
            Our products are engineered with architectural discipline,
            performance optimization, and enterprise-grade scalability.
          </p>

        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {productEntries.map(([slug, product]) => (
            <ProductCard
              key={slug}
              slug={slug}
              product={product}
            />
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#25343F] text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF] mb-6">
          Looking for a Custom Enterprise Solution?
        </h2>

        <Link
          href="/contact"
          className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-8 py-3 rounded-xl font-semibold transition"
        >
          Speak With Our Experts
        </Link>
      </section>

    </div>
  );
}

/* ----------- COMPONENTS ----------- */

function ProductCard({ slug, product }: any) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">

        {/* IMAGE */}
        <div className="h-52 bg-[#25343F]/10 flex items-center justify-center overflow-hidden">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            />
          ) : (
            <div className="text-[#25343F] font-semibold">
              {product.name}
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-8">

          <h3 className="text-xl font-semibold text-[#25343F] mb-3">
            {product.name}
          </h3>

          <p className="text-[#FF9B51] mb-4">
            {product.tagline}
          </p>

          <p className="text-[#596A78] text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <span className="text-[#FF9B51] font-medium group-hover:underline">
            Explore Product →
          </span>

        </div>

      </div>
    </Link>
  );
}