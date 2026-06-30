"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springRingX = useSpring(ringX, { stiffness: 280, damping: 30 });
  const springRingY = useSpring(ringY, { stiffness: 280, damping: 30 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "34px";
        dotRef.current.style.height = "34px";
        dotRef.current.style.background = "rgba(45,90,61,.1)";
        dotRef.current.style.border = "1.5px solid #2D5A3D";
      }
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.width = "6px";
        dotRef.current.style.height = "6px";
        dotRef.current.style.background = "#2D5A3D";
        dotRef.current.style.border = "none";
      }
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <div className="hidden md:block">
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: "6px",
          height: "6px",
          background: "#2D5A3D",
          transition: "width .22s ease, height .22s ease, background .2s ease, border .18s ease",
        }}
      />
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: springRingX,
          y: springRingY,
          translateX: "-50%",
          translateY: "-50%",
          width: "30px",
          height: "30px",
          border: "1.5px solid rgba(45,90,61,.3)",
          transition: "opacity .2s",
        }}
      />
    </div>
  );
}
