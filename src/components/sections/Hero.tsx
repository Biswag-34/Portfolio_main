"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInRight } from "@/components/animations/framer";
import Parallax from "@/components/animations/Parallax";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Parallax Background Glow */}
      <Parallax speed={80} className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/10 blur-3xl" />
      </Parallax>

      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I’m <span className="text-cyan-400">Biswajit Goswami</span>
        </motion.h1>
        <motion.p
          variants={fadeInRight}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-300 mb-8"
        >
          MERN Stack Developer | Building Modern Web Experiences
        </motion.p>
        <motion.a
          href="#projects"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-colors"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
