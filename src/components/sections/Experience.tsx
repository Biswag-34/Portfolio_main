"use client";

import { motion, Variants, Easing } from "framer-motion";
import { useMemo } from "react";

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "Lead Full-Stack Web Engineer (Digital Growth & SEO)",
    company: "N-Stride",
    period: "Aug 2025 – Present",
    location: "Bengaluru",
    points: [
      "Architected and maintained custom Shopify themes using Liquid, enabling scalable, high-performance storefronts with optimized UX, accessibility standards, and multidevice compatibility",
      "Implemented technical SEO and indexing frameworks leveraging Google Search Console, Google Analytics (GA4), Lighthouse, and schema markup, improving crawl efficiency, Core Web Vitals, and organic traffic quality.",
      "Implemented analytics dashboards and performance metrics tracking to monitor user behavior, improving conversion rates by 30% within three months",
      "Owned website performance optimization, including page speed, Core Web Vitals, and cross-browser compatibility. Integrated analytics, tracking, and monitoring tools to derive actionable insights and support data-driven digital growth strategies.",
      "Collaborated with marketing and content initiatives to align web architecture with digital campaigns and lead generation. Managed ongoing enhancements, updates, and troubleshooting to ensure high availability and continuous improvement.",
      "Executed performance optimization strategies including page speed tuning, asset optimization, caching, and CDN integration, driven by Lighthouse and real-user metrics.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "LegacyYards",
    period: "Mar 2025 – Aug 2025",
    location: "Bengaluru",
    points: [
      "Engineered the full-featured real estate platform at legacyyards.homes, supporting dynamic property search, filters, and detailed listings—handling end-to-end development solo.",
      "Developed advanced search functionality with location-based filtering and property-type selection, resulting in a 50% faster property discovery experience.",
      "Integrated API-driven lead-capture and appointment booking workflows, generating 200+ qualified lead inquiries per month.",
      "Optimized mobile-first responsiveness and site speed (lazy-loaded images, caching), boosting mobile engagement by over 40%.",
      "Implemented analytics dashboards to monitor user behavior, improving conversion rates by 30% within six months.",
      "Leveraged Next.js for SSR, Redux Toolkit for state management, Cloudinary for media handling, and Git for version control—enhancing code efficiency and reducing deployment cycles by 40%.",
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
      "Implemented reusable UI components and modular structure with Tailwind CSS and Redux, cutting front-end development time by 25%.",
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
      "Supported marketing-led landing page campaigns and lead forms, contributing to 15% more inbound leads during high-traffic periods.",
    ],
  },
];

// Type-safe easing
const easing: Easing = [0.22, 1, 0.36, 1]; // smoother than default

// Smooth “text reveal” animation used everywhere
const textReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } },
};

// Card animation
const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing, delay: i * 0.08 },
  }),
};

// Stagger children
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export default function Experience() {
  // helper: make mobile points one-line “story beats”
  const mobilePoint = useMemo(() => {
    return (p: string) =>
      p
        .replace(/\s+/g, " ")
        .replace(/—/g, "-")
        .trim();
  }, []);

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          variants={textReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16"
        >
          Work <span className="text-cyan-400">Experience</span>
        </motion.h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-px bg-gray-700" />
          {/* Vertical line (mobile) */}
          <div className="sm:hidden absolute left-2 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-10 sm:space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, ease: easing, delay: index * 0.05 }}
                  className="absolute left-[6px] sm:left-[11px] top-4 w-3 h-3 sm:w-4 sm:h-4
                             bg-cyan-400 rounded-full border-[3px] border-gray-950"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: easing }}
                  className="
                    bg-gray-900/60 backdrop-blur
                    border border-white/10
                    rounded-2xl
                    p-4 sm:p-6
                    shadow-lg shadow-black/20
                    hover:shadow-cyan-500/10
                    transition-shadow
                  "
                >
                  {/* Title row */}
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.h3
                      variants={textReveal}
                      className="text-lg sm:text-xl font-semibold"
                    >
                      {job.role} –{" "}
                      <span className="text-cyan-400">{job.company}</span>
                    </motion.h3>

                    <motion.p
                      variants={textReveal}
                      className="text-xs sm:text-sm text-gray-400 mt-2"
                    >
                      {job.period} | {job.location}
                    </motion.p>
                  </motion.div>

                  {/* Points */}
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-4"
                  >
                    {/* Desktop / tablet: full bullet list */}
                    <ul className="hidden sm:block list-disc list-inside text-gray-300 space-y-2">
                      {job.points.map((point, idx) => (
                        <motion.li key={idx} variants={textReveal}>
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Mobile: one-line story beats */}
                    <div className="sm:hidden space-y-3">
                      {job.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          variants={textReveal}
                          className="
                            flex items-start gap-2
                            text-[13px] leading-snug text-gray-200/90
                          "
                        >
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400/90 shrink-0" />
                          <p className="line-clamp-1">{mobilePoint(point)}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small hint for mobile */}
        <motion.p
          variants={textReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="sm:hidden mt-10 text-center text-xs text-gray-500"
        >
          Tip: Tap and scroll — each role is a story of impact.
        </motion.p>
      </div>
    </section>
  );
}
