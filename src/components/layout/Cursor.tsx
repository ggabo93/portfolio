"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(dotX, { stiffness: 600, damping: 35 });
  const springY = useSpring(dotY, { stiffness: 600, damping: 35 });

  const scale = useRef(1);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `scale(5)`;
        dotRef.current.style.background = "rgba(200,255,0,0.15)";
        dotRef.current.style.border = "1px solid rgba(200,255,0,0.4)";
      }
    };

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `scale(1)`;
        dotRef.current.style.background = "#c8ff00";
        dotRef.current.style.border = "none";
      }
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
  }, [dotX, dotY]);

  return (
    <motion.div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: "6px",
        height: "6px",
        background: "#c8ff00",
        transition: "transform 0.2s ease, background 0.2s ease, border 0.2s ease",
      }}
    />
  );
}
