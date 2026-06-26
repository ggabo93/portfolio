"use client";

import { useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  unit?: string;
  className?: string;
}

export function AnimatedNumber({ value, unit = "", className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const displayed = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(displayed, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + unit;
      },
    });
    return controls.stop;
  }, [inView, value, unit, displayed]);

  return (
    <span ref={ref} className={className}>
      0{unit}
    </span>
  );
}
