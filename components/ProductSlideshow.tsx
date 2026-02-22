"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

export default function ProductSlideshow({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((current + 1) % images.length);

  return (
    <div className="relative max-w-5xl mx-auto">

      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={images[current]}
          alt="Product Screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#25343F] text-white p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#25343F] text-white p-3 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#FF9B51]" : "bg-[#BFC9D1]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}