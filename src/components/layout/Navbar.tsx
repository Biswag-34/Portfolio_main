"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/portfolio";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation" onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>(".nav-menu")?.focus();
        }
      }}>
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          <Image className="brand-logo" src="/images/bg-monogram.webp" alt="" width={26} height={44} unoptimized />
          <span>{profile.name}</span>
        </a>
        <button type="button" className="icon-button nav-menu" aria-expanded={open} aria-controls="site-links"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div id="site-links" className="nav-links" data-open={open}>
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="button nav-contact" href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
