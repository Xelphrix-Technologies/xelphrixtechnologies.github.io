"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  items: React.ReactNode[];
  bgColor?: string;
}

export default function HorizontalScroller({ items, bgColor = "#EAEFEF" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const duplicated = [...items, ...items];
  const SPEED = 40; // px per second

  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    setX((prev) => {
      const next = prev - (SPEED * delta) / 1000;

      if (!containerRef.current) return next;

      const width = containerRef.current.scrollWidth / 2;

      // wrap instead of reset
      if (next <= -width) {
        return next + width;
      }

      return next;
    });
  });

  const manualShift = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 2;
    const shiftAmount = 300;

    setX((prev) => {
      let next =
        direction === "left" ? prev + shiftAmount : prev - shiftAmount;

      // wrap safely
      if (next <= -width) {
        next += width;
      }
      if (next > 0) {
        next -= width;
      }

      return next;
    });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* LEFT BUTTON */}
      <button
        onClick={() => manualShift("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#25343F] text-white p-3 rounded-full shadow-lg hover:bg-[#FF9B51] transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => manualShift("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#25343F] text-white p-3 rounded-full shadow-lg hover:bg-[#FF9B51] transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* TRACK */}
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-8"
      >
        {duplicated.map((item, index) => (
          <div key={index} className="w-[280px] flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>

      {/* EDGE FADE */}
      <div
        style={{
          background: `linear-gradient(to right, ${bgColor}, transparent)`
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-20"
      />
      <div
        style={{
          background: `linear-gradient(to left, ${bgColor}, transparent)`
        }}
        className="pointer-events-none absolute right-0 top-0 h-full w-20"
      />
    </div>
  );
}