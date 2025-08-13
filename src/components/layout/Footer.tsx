"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-6 text-gray-400 text-center">
      <div className="flex justify-center gap-6 mb-3 text-xl">
        <a href="mailto:Biswag690@gmail.com" className="hover:text-cyan-400">
          <FaEnvelope />
        </a>
        <a href="https://github.com/" target="_blank" className="hover:text-cyan-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/biswajit-goswami-8233632a7" target="_blank" className="hover:text-cyan-400">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Biswajit Goswami. All Rights Reserved.
      </p>
    </footer>
  );
}
