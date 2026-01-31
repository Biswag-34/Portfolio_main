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
      { name: "Shopify", icon: "/icons/shopify.png" },
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
      className="relative py-16 sm:py-20 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12"
        >
          Skills <span className="text-cyan-400">& Tools</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-gray-900/50 rounded-xl p-4 sm:p-6 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.name} // shows tooltip on hover (helps when name hidden on mobile)
                    className="
                      flex items-center gap-2
                      px-2 sm:px-3 py-2
                      bg-gray-800 rounded-lg
                      hover:bg-gray-700 transition-colors
                    "
                  >
                    {/* Icon */}
                    <div className="relative w-7 h-7 sm:w-6 sm:h-6 md:w-6 md:h-6">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Text: hidden on mobile, visible on sm+ */}
                    <span className="hidden sm:inline text-sm">{skill.name}</span>
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
