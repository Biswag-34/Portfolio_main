// components/SharedBackground.tsx
"use client";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from "./animations/Parallax";

gsap.registerPlugin(ScrollTrigger);

export default function SharedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Main Gradient Background (non-parallax) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Floating Parallax Elements using your Parallax component */}
      <Parallax speed={-20} className="absolute top-[10%] left-[10%] opacity-30">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-500 blur-[70px] rounded-full" />
      </Parallax>
      
      <Parallax speed={15} className="absolute bottom-[15%] right-[15%] opacity-25">
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500 blur-[90px] rounded-full" />
      </Parallax>
      
      <Parallax speed={-10} className="absolute top-[30%] left-[60%] opacity-20">
        <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] bg-cyan-400 blur-[80px] rounded-full" />
      </Parallax>
      
      <Parallax speed={25} className="absolute bottom-[25%] right-[60%] opacity-20">
        <div className="w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-purple-400 blur-[100px] rounded-full" />
      </Parallax>
      
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay" />
    </div>
  );
}