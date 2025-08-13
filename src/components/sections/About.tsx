"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/components/animations/framer";
import Image from "next/image";
import Parallax from "@/components/animations/Parallax";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Floating Shapes with Parallax */}
      <Parallax speed={-60} className="absolute top-10 left-10 opacity-30">
        <div className="w-32 h-32 rounded-full bg-cyan-500 blur-2xl" />
      </Parallax>
      <Parallax speed={40} className="absolute bottom-20 right-20 opacity-30">
        <div className="w-40 h-40 rounded-full bg-purple-500 blur-3xl" />
      </Parallax>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Profile Image */}
            <motion.div variants={fadeInLeft} className="flex justify-center">
              <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
                <Image
                  src="/images/profile.jpeg"
                  alt="Biswajit Goswami"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-2xl font-semibold mb-4">MERN Stack Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mid-level MERN Stack Developer with 3 years of experience and 4+ full-stack projects delivered.
                Skilled in building responsive, high-performance, and scalable web applications using modern
                JavaScript frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Biswajit-Goswami-Resume.pdf"
                  download
                  className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-colors"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
