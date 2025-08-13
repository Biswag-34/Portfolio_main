"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-gray-900/90 backdrop-blur border-b border-gray-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <span className="text-cyan-400 font-bold text-xl cursor-pointer">
          Biswajit Goswami
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
