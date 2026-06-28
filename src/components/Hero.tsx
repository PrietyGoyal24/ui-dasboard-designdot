"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#003ba5] overflow-hidden flex flex-col md:flex-row items-stretch min-h-[500px] md:min-h-[580px] lg:min-h-[640px]">
      {/* Left panel (Text details) */}
      <div className="w-full md:w-[42%] bg-[#003ba5] px-6 sm:px-12 md:pl-16 md:pr-6 py-12 md:py-16 lg:py-24 flex flex-col justify-between text-white z-10">
        <div className="space-y-6 md:space-y-8 my-auto">
          {/* Subtitle */}
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-brand-yellow uppercase block font-outfit">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-outfit">
            EMPOWERED <br />
            <span className="relative inline-block border-b-4 border-white pb-1">
              WORKPLACES
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-sans max-w-md">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>

          {/* Slanted Button */}
          <div className="pt-2">
            <button className="h-12 bg-accent-orange hover:bg-accent-orange-hover text-white flex items-center transition-all duration-200 cursor-pointer rounded-r-md slant-left-edge shadow-lg pl-6 pr-6 gap-4">
              <span className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-blue-950 stroke-[3]" />
              </span>
              <div className="h-6 w-[1px] bg-white/30" />
              <span className="text-[11px] font-black tracking-widest uppercase font-outfit">
                LETS CONNECT
              </span>
            </button>
          </div>
        </div>

        {/* Footer info in Hero */}
        <div className="mt-12 md:mt-auto pt-6 border-t border-white/10">
          <p className="text-[9px] sm:text-[10px] font-extrabold tracking-wider text-blue-100/80 uppercase">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN, AND THE WORLD
          </p>
        </div>
      </div>

      {/* Right panel (Office Image with S-curve overlay) */}
      <div className="w-full md:w-[58%] relative min-h-[300px] md:min-h-auto flex items-stretch">
        {/* Background office image */}
        <div className="relative w-full h-full min-h-[350px] md:min-h-full">
          <Image
            src="/hero-office.png"
            alt="Empowered Workplaces Office"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Desktop S-Curve overlay mask (only visible on md and up) */}
        <div className="absolute top-0 bottom-0 left-0 h-full w-24 lg:w-32 hidden md:block select-none pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full text-[#003ba5] fill-current"
          >
            <path d="M0,0 H40 C80,0 20,40 10,60 C0,80 60,100 80,100 H0 Z" />
          </svg>
        </div>

        {/* Mobile curved overlay mask (horizontal curve at top on small screens) */}
        <div className="absolute top-0 left-0 right-0 w-full h-12 block md:hidden select-none pointer-events-none">
          <svg
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            className="w-full h-full text-[#003ba5] fill-current"
          >
            <path d="M0,0 V20 Q50,0 100,20 V0 Z" />
          </svg>
        </div>

        {/* Float Avatars Badge */}
        <div className="absolute bottom-6 right-6 md:right-12 bg-blue-950/80 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center gap-4 border border-white/10 shadow-2xl max-w-sm">
          {/* Avatar stack */}
          <div className="flex items-center -space-x-3">
            {/* Avatar 1 */}
            <div className="w-10 h-10 rounded-full border-2 border-blue-950 bg-gray-300 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-500">
                <circle cx="16" cy="12" r="6" fill="#4B5563" />
                <path d="M16 20c-6 0-10 4-10 6v2h20v-2c0-2-4-6-10-6z" fill="#4B5563" />
              </svg>
            </div>
            {/* Avatar 2 */}
            <div className="w-10 h-10 rounded-full border-2 border-blue-950 bg-gray-300 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-500">
                <circle cx="16" cy="12" r="6" fill="#374151" />
                <path d="M16 20c-6 0-10 4-10 6v2h20v-2c0-2-4-6-10-6z" fill="#374151" />
              </svg>
            </div>
            {/* "MORE" Circle */}
            <div className="w-10 h-10 rounded-full border-2 border-blue-950 bg-accent-orange flex items-center justify-center text-[8px] font-black text-white uppercase tracking-wider">
              MORE
            </div>
          </div>

          {/* Text */}
          <div className="text-white">
            <p className="text-lg font-black leading-none font-outfit">250 +</p>
            <p className="text-[10px] text-gray-300 font-bold leading-tight">
              Enjoy Working <br /> with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
