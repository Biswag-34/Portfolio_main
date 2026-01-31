"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/components/animations/framer";
import Parallax from "@/components/animations/Parallax";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MAKAUT University (WB)",
    duration: "2021 – 2024",
    description:
      "Focused on software development, algorithms, database systems, and full-stack application design.",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Siliguri Govt. Polytechnic",
    duration: "2018 – 2021",
    description:
      "Completed with distinction in Science stream, focusing on critical code logic and Mathematics.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Siliguri Boys' High School",
    duration: "205",
    description:
      "Completed with distinction in Science stream, focusing on Physics, Chemistry, and Mathematics.",
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Progress height (0 -> 1) and glow intensity
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.85, 1]);

  // Icons per level (based on order; no data changes)
  const icons = useMemo(
    () => [
      { Icon: HiAcademicCap, label: "Degree" },
      { Icon: FaGraduationCap, label: "Diploma" },
      { Icon: FaSchool, label: "School" },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-16 sm:py-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Parallax Glow Elements (keep only here for clean spacing) */}
      <Parallax speed={-40} className="absolute -top-20 left-10 opacity-30">
        <div className="w-72 h-72 bg-cyan-500 blur-3xl rounded-full" />
      </Parallax>
      <Parallax speed={50} className="absolute bottom-0 right-10 opacity-20">
        <div className="w-96 h-96 bg-purple-500 blur-[120px] rounded-full" />
      </Parallax>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12"
          >
            Education <span className="text-cyan-400">& Qualifications</span>
          </motion.h2>

          {/* Timeline wrapper */}
          <div className="relative">
            {/* Base timeline line */}
            <div className="absolute left-2 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />

            {/* Scroll progress glow line */}
            <motion.div
              className="absolute left-2 sm:left-1/2 top-0 bottom-0 w-px origin-top"
              style={{ scaleY: progressScale, opacity: glowOpacity }}
            >
              <div className="h-full w-full bg-cyan-400/60" />
              <div className="absolute inset-0 blur-[10px] bg-cyan-400/25" />
            </motion.div>

            {/* ✅ Uniform spacing controlled ONLY here */}
            <div className="space-y-10 sm:space-y-12">
              {education.map((edu, index) => {
                const isLeft = index % 2 === 0;
                const Icon = icons[index]?.Icon ?? FaGraduationCap;
                const iconLabel = icons[index]?.label ?? "Education";

                return (
                  <motion.div
                    key={index}
                    variants={isLeft ? fadeInLeft : fadeInRight}
                    className={[
                      "relative",
                      "pl-8 sm:pl-0",
                      "sm:grid sm:grid-cols-2 sm:gap-10",
                      "items-stretch",
                    ].join(" ")}
                  >
                    {/* Dot + Icon */}
                    <div className="absolute left-[3px] sm:left-1/2 top-6 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-gray-900 border border-white/10 grid place-items-center">
                        <Icon className="text-cyan-400 text-base" aria-label={iconLabel} />
                      </div>
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className={isLeft ? "hidden sm:block" : ""} />

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={[
                        "bg-gray-800/60 backdrop-blur",
                        "border border-white/10",
                        "rounded-2xl",
                        "p-5 sm:p-6",
                        "shadow-lg shadow-black/25",
                        "hover:shadow-cyan-500/20",
                        "transition-shadow duration-300",
                        isLeft ? "sm:col-start-1" : "sm:col-start-2",
                      ].join(" ")}
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                          {edu.degree}
                        </h3>

                        {/* Duration pill */}
                        <span className="shrink-0 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">
                          {edu.duration}
                        </span>
                      </div>

                      <p className="text-cyan-400 mt-2 font-medium">
                        {edu.institution}
                      </p>

                      <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
                        {edu.description}
                      </p>

                      {/* Accent line */}
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
