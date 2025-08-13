"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/components/animations/framer";
import Parallax from "@/components/animations/Parallax";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "XYZ University",
    duration: "2018 – 2022",
    description:
      "Focused on software development, algorithms, database systems, and full-stack application design.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "ABC School",
    duration: "2016 – 2018",
    description:
      "Completed with distinction in Science stream, focusing on Physics, Chemistry, and Mathematics.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Parallax Glow Elements */}
      <Parallax speed={-40} className="absolute -top-20 left-10 opacity-30">
        <div className="w-72 h-72 bg-cyan-500 blur-3xl rounded-full" />
      </Parallax>
      <Parallax speed={50} className="absolute bottom-0 right-10 opacity-20">
        <div className="w-96 h-96 bg-purple-500 blur-[120px] rounded-full" />
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
            Education <span className="text-cyan-400">& Qualifications</span>
          </motion.h2>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <Parallax key={index} speed={index % 2 === 0 ? 40 : -40}>
                <motion.div
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="p-6 bg-gray-800 rounded-lg shadow-lg shadow-black/40 hover:shadow-cyan-500/20 transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-cyan-400">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
