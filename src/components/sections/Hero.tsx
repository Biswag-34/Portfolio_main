"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInRight } from "@/components/animations/framer";
import Parallax from "@/components/animations/Parallax";
import { useEffect, useMemo, useState } from "react";

function LoadingDots() {
  // Dots animate: appear one-by-one -> then fade out -> repeat
  const base = {
    duration: 1.1,
    repeat: Infinity,
    ease: "easeInOut",
    repeatDelay: 0.15,
  } as const;

  return (
    <span className="inline-flex items-end">
      {["1", "2", "3"].map((k, i) => (
        <motion.span
          key={k}
          className="inline-block"
          initial={{ opacity: 0, y: 2 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [2, 0, 0, 2],
          }}
          transition={{
            ...base,
            delay: i * 0.18,
          }}
        >
          .
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  // Mobile-only: lightweight typewriter effect for the subtitle
  const lines = useMemo(
    () => [
      "Full-Stack Web Engineer | MERN + Shopify",
      "Building fast, scalable, conversion-ready websites",
      "Performance • SEO • Clean Architecture",
    ],
    []
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    // Run typewriter only on small screens
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const full = lines[lineIndex];
    let i = 0;
    setTyped("");

    const typing = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typing);
        // pause then move to next line
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length);
        }, 1100);
      }
    }, 22);

    return () => clearInterval(typing);
  }, [lineIndex, lines]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Parallax Background Glow */}
      <Parallax speed={80} className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/10 blur-3xl" />
      </Parallax>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center pt-8 sm:pt-0">
        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="
            font-bold
            text-[clamp(2.2rem,7.2vw,4.6rem)]
            leading-[1.05]
            mb-3 sm:mb-4
          "
        >
          {/* Line 1 */}
        Welcome to<span className="block text-cyan-400">Biswajit&apos;s</span>

          {/* Line 2 (smaller) */}
          <span
            className="
              block font-semibold text-white/90
              text-[clamp(1.15rem,4.8vw,1.8rem)]
              leading-tight mt-3
            "
          >
            Workmap <LoadingDots />
          </span>
        </motion.h1>

        {/* Subtitle: desktop stays same style; mobile gets animated typewriter */}
        <motion.p
          variants={fadeInRight}
          initial="hidden"
          animate="show"
          className="
            text-gray-300 mb-5 sm:mb-8
            text-[clamp(1rem,3.8vw,1.125rem)]
            max-w-2xl mx-auto
          "
        >
          {/* Mobile animated text */}
          <span className="md:hidden">
            {typed}
            <motion.span
              aria-hidden
              className="inline-block w-[1px] h-[1.1em] align-[-0.18em] bg-cyan-400 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </span>

          {/* Desktop static text */}
          <span className="hidden md:inline">
            Full-Stack Web Engineer | MERN + Shopify | Performance & SEO
          </span>
        </motion.p>

        <motion.a
          href="#projects"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="
            inline-flex items-center justify-center
            px-6 sm:px-8 py-3
            rounded-full
            bg-cyan-500 hover:bg-cyan-400
            text-black font-medium
            transition-colors
            active:scale-[0.98]
          "
        >
          View My Work
        </motion.a>

        {/* Mobile-only: availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white/5 border border-white/10 backdrop-blur
                     text-sm text-gray-200 mt-4 mb-4"
        >
          <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
          Available for Full-Stack roles
        </motion.div>

        {/* Mobile-only: subtle scroll hint */}
        <motion.div
          className="md:hidden mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 text-xs"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll</span>
            <span className="text-cyan-400">↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
