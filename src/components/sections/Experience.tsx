"use client";

import { motion, Variants, Easing } from "framer-motion";

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "MERN Stack Developer",
    company: "LegacyYards",
    period: "Mar 2025 – Present",
    location: "Bengaluru",
    points: [
      "Engineered the full-featured real estate platform at legacyyards.homes, supporting dynamic property search, filters, and detailed listings—handling end-to-end development solo.",
      "Developed advanced search functionality with location-based filtering and property-type selection, resulting in a 50% faster property discovery experience.",
      "Integrated API-driven lead-capture and appointment booking workflows, generating 200+ qualified lead inquiries per month.",
      "Optimized mobile-first responsiveness and site speed (lazy-loaded images, caching), boosting mobile engagement by over 40%.",
      "Implemented analytics dashboards to monitor user behavior, improving conversion rates by 30% within six months.",
      "Leveraged Next.js for SSR, Redux Toolkit for state management, Cloudinary for media handling, and Git for version control—enhancing code efficiency and reducing deployment cycles by 40%."
    ],
  },
  {
    role: "Mid Sr. Web Developer",
    company: "PRISM Lead India",
    period: "2023 – 2024",
    location: "Bengaluru",
    points: [
      "Led the development of 4+ full-stack web applications using React, Node.js, MongoDB, and Next.js, improving feature delivery speed by 30%.",
      "Collaborated with the digital marketing team to optimize lead funnel integrations, boosting qualified lead conversions by 35%.",
      "Architected and maintained 15+ API integrations with third-party services (CRMs, ad tracking, payments), reducing downtime by 40%.",
      "Implemented reusable UI components and modular structure with Tailwind CSS and Redux, cutting front-end development time by 25%."
    ],
  },
  {
    role: "Jr. Front End Developer",
    company: "PRISM Lead India",
    period: "2022 – 2023",
    location: "Bengaluru",
    points: [
      "Assisted in developing and maintaining core modules across 3 full-stack projects with MERN stack under senior developer guidance.",
      "Integrated and tested REST APIs using Postman and Swagger, reducing API-related bugs by 20%.",
      "Built responsive interfaces using React and Tailwind CSS, ensuring 100% mobile responsiveness and improved UI consistency.",
      "Supported marketing-led landing page campaigns and lead forms, contributing to 15% more inbound leads during high-traffic periods."
    ],
  },
];

// Type-safe easing
const easing: Easing = [0.42, 0, 0.58, 1];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easing } },
};

const jobVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: easing },
  }),
};

const pointVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: easing },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Animated Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Work <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="relative border-l border-gray-700 pl-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={jobVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,255,255,0.3)" }}
              transition={{ duration: 0.3 }}
              className="mb-12 relative p-6 bg-gray-900 rounded-lg"
            >
              {/* Animated Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
                className="absolute -left-4 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-950"
              />

              {/* Job Title */}
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.1, ease: easing }}
                className="text-xl font-semibold ml-6"
              >
                {job.role} – <span className="text-cyan-400">{job.company}</span>
              </motion.h3>

              {/* Period & Location */}
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2, ease: easing }}
                className="text-sm text-gray-400 mb-3 ml-6"
              >
                {job.period} | {job.location}
              </motion.p>

              {/* Points */}
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-6">
                {job.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
