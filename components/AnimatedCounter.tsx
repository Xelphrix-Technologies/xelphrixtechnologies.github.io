"use client";

import { useEffect, useState } from "react";

interface Props {
  value: string | number;
}

export default function AnimatedCounter({ value }: Props) {
  const [count, setCount] = useState(0);

  let numericValue = 0;
  let suffix = "";

  // Handle number directly
  if (typeof value === "number") {
    numericValue = value;
  }

  // Handle string safely
  if (typeof value === "string") {
    const parsed = parseFloat(value.replace(/[^\d.]/g, ""));
    numericValue = isNaN(parsed) ? 0 : parsed;
    suffix = value.replace(/[\d.]/g, "");
  }

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(counter);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(counter);
  }, [numericValue]);

  return (
    <>
      {numericValue % 1 === 0
        ? Math.floor(count)
        : count.toFixed(1)}
      {suffix}
    </>
  );
}