"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "MERN Stack Development",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Express.js", icon: "/icons/expressjs.png" },
      { name: "React", icon: "/icons/react.png" },
      { name: "Node.js", icon: "/icons/node.png" },
    ],
  },
  {
    title: "API Integration & Testing",
    skills: [
      { name: "REST", icon: "/icons/rest.png" },
      { name: "Postman", icon: "/icons/postman.png" },
      { name: "Swagger", icon: "/icons/swag.png" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux Toolkit", icon: "/icons/redux.png" },
      { name: "Context API", icon: "/icons/api.png" },
    ],
  },
  {
    title: "Performance Optimization & Code Modularization",
    skills: [{ name: "chrome DevTools", icon: "/icons/dev1.png" }],
  },
  {
    title: "Cloud Media Management",
    skills: [
      { name: "Cloudinary", icon: "/icons/cloud.png" },
      { name: "Firebase", icon: "/icons/fire.png" },
      { name: "Bunny.net", icon: "/icons/bunny.png" },
    ],
  },
  {
    title: "Next.js & SSR",
    skills: [{ name: "Next.js", icon: "/icons/next.png" }],
  },
  {
    title: "Responsive UI Design",
    skills: [
      { name: "Tailwind CSS", icon: "/icons/tail.png" },
      { name: "HTML5", icon: "/icons/html.png" },
      { name: "CSS3", icon: "/icons/css.png" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ],
  },
  {
    title: "Lead Capture & Workflow Integration",
    skills: [
      { name: "CRM Integration", icon: "/icons/crm.png" },
      { name: "Google Integration", icon: "/icons/google.png" },
      { name: "Netlify", icon: "/icons/net.png" },
    ],
  },
  {
    title: "Hosting & Deployment",
    skills: [
      { name: "Vercel", icon: "/icons/vercel.png" },
      { name: "Hostinger", icon: "/icons/host.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills <span className="text-cyan-400">& Tools</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-6 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-6 h-6 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
