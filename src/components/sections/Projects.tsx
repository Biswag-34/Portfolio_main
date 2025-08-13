"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/components/animations/framer";
import Parallax from "@/components/animations/Parallax";
import Image from "next/image";

const projects = [
  {
    title: "Legacy Yards",
    description: "Real estate platform with property listings, filters, and advanced search capabilities.",
    image: "/images/web1.png",
    link: "https://legacyyards.homes",
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white overflow-hidden">
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
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Parallax key={project.title} speed={index % 2 === 0 ? 50 : -50}>
                <motion.div
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black/40 hover:shadow-cyan-500/20 transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
