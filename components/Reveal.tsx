"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gentle fade-up when the block scrolls into view.
 * Content is visible by default; only blocks that start below the fold are hidden and revealed,
 * so nothing disappears if JavaScript fails or motion is reduced.
 */
export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("reveal-wait");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("reveal-in");
        io.disconnect();
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
