"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-gray-900/75 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <span className="text-cyan-400 font-bold text-lg sm:text-xl cursor-pointer select-none">
          Biswajit Goswami
        </span>

        {/* Desktop Menu (unchanged structure, just responsive spacing) */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                offset={-64}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (sleek) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full
                     bg-white/5 border border-white/10 text-white
                     hover:bg-white/10 active:scale-95 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE: Backdrop + Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-[100dvh] w-[86%] max-w-sm md:hidden
                         bg-gray-900/90 backdrop-blur-xl border-l border-white/10
                         shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
                <div>
                  <p className="text-base font-semibold text-white">Jump</p>
                  <p className="text-sm text-gray-300">To</p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full
                             bg-white/5 border border-white/10 text-white
                             hover:bg-white/10 active:scale-95 transition"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                className="px-4 py-4 space-y-2"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.to}
                    variants={{
                      hidden: { opacity: 0, x: 18 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      onClick={closeMenu}
                      className="group flex items-center justify-between w-full
                                 px-4 py-3 rounded-xl cursor-pointer
                                 text-white/90 hover:text-white
                                 bg-white/0 hover:bg-white/5
                                 border border-white/0 hover:border-white/10
                                 transition"
                    >
                      <span className="text-[15px] font-medium">{link.name}</span>
                      <span className="text-cyan-300/0 group-hover:text-cyan-300/80 transition">
                        →
                      </span>
                    </ScrollLink>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Drawer footer (subtle CTA style, no data change) */}
              <div className="mt-auto px-5 pb-6">
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/10 p-4">
                  <p className="text-sm text-gray-200">
                    Tip: Tap any section to scroll smoothly.
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
