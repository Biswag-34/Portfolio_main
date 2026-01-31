"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "N-Stride Shopify Store",
    description:
      "Full-fledged custom Shopify store with optimized UX, SEO, and performance enhancements with complete e-commerce functionality.",
    image: "/images/web2.png",
    link: "https://nstride.in",
    tags: ["Shopify", "Liquid", "SEO", "Performance"],
  },
  {
    title: "Legacy Yards",
    description:
      "Real estate platform with listings, filters, advanced search, and lead capture workflows.",
    image: "/images/web1.png",
    link: "https://legacyyards.homes",
    tags: ["Next.js", "Node.js", "MongoDB", "SSR"],
  },
  {
    title: "Antharanga Hospital",
    description:
      "Modern hospital website focused on services, storytelling, and donation functionality.",
    image: "/images/web3.png",
    link: "https://hospital-ruby.vercel.app/",
    tags: ["Next.js", "UI/UX", "Animations", "Vercel"],
  },
];

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    // Find the first card width (including gap) to scroll by one item
    const firstCard = el.querySelector<HTMLElement>("[data-card='project']");
    const cardWidth = firstCard ? firstCard.offsetWidth : 360;

    const gap = 16; // should match `gap-4` (≈16px)
    const delta = (cardWidth + gap) * (dir === "left" ? -1 : 1);

    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Subtle fade edges using Tailwind gradients
  const edgeFade = useMemo(
    () => ({
      left:
        "pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-gray-900 to-transparent",
      right:
        "pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-gray-900 to-transparent",
    }),
    []
  );

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            {/* Desktop controls */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollByCard("left")}
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition grid place-items-center"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                onClick={() => scrollByCard("right")}
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition grid place-items-center"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={edgeFade.left} />
            <div className={edgeFade.right} />

            {/* Horizontal scroller */}
            <div
              ref={scrollerRef}
              className="
                no-scrollbar
                flex gap-4 md:gap-5
                overflow-x-auto overflow-y-hidden
                scroll-smooth
                snap-x snap-mandatory
                pb-4
                [-ms-overflow-style:none] [scrollbar-width:none]
              "
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              

              {projects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  data-card="project"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
                  className="
                    snap-start
                    min-w-[84%] sm:min-w-[70%] md:min-w-[420px]
                    bg-gray-800/70 backdrop-blur
                    border border-white/10
                    rounded-2xl overflow-hidden
                    shadow-lg shadow-black/30
                    hover:shadow-cyan-500/15
                    transition
                  "
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-56 md:h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />

                      {/* Top-right pill */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/60 text-white border border-cyan-400/20">
                          View ↗
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {!!project.tags?.length && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                </motion.article>
              ))}

              {/* End padding so last card can center nicely */}
              <div className="min-w-[1px] md:min-w-[8px]" />
            </div>

            {/* Mobile controls */}
            <div className="mt-3 flex md:hidden items-center justify-center gap-3">
              <button
                onClick={() => scrollByCard("left")}
                className="h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition grid place-items-center"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                onClick={() => scrollByCard("right")}
                className="h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition grid place-items-center"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>

            <p className="mt-3 text-center text-sm text-gray-400">
              Swipe horizontally (mobile) or use arrows (desktop).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
