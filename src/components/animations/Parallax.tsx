"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Positive = slower, Negative = reverse
  className?: string;
}

export default function Parallax({ children, speed = 50, className }: ParallaxProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!elRef.current) return;

    // Scope GSAP animations to this component only
    const ctx = gsap.context(() => {
      gsap.to(elRef.current, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top bottom",
          scrub: true,
        },
      });
    }, elRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
