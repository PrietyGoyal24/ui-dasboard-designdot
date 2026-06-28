"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function AboutFirm() {
  const [selectedLocation, setSelectedLocation] = useState("INDIA");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const stats = [
    { value: "250+", label: "Professional Staff Members Globally" },
    { value: "1000+", label: "Clients in the HLS Global Network" },
    { value: "35+", label: "Years of Experience Connecting Japan and the World" },
    { value: "15+", label: "Countries Covered With Our Alliance Network" },
  ];

  const locations = ["INDIA", "JAPAN", "USA", "MEXICO", "GERMANY"];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Grey label card */}
          <div className="lg:col-span-2 flex justify-start">
            <div className="w-40 h-40 bg-[#eceef1] rounded-3xl flex flex-col justify-center p-8 shadow-sm">
              <span className="text-xl font-black text-gray-900 tracking-tight leading-tight font-outfit">
                ABOUT
              </span>
              <span className="text-xl font-black text-gray-900 tracking-tight leading-tight font-outfit">
                FIRM
              </span>
            </div>
          </div>

          {/* Middle Column - Text and statistics */}
          <div className="lg:col-span-6 space-y-10 relative">
            {/* Backdrop World Map (faint SVG overlay) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-auto text-gray-400 fill-current">
                {/* Simplified representation of continents */}
                <path d="M150,150 Q180,120 220,130 T280,180 T300,250 T250,320 T200,380 T150,300 Z" /> {/* N America */}
                <path d="M250,320 Q280,350 270,400 T290,460 T250,480 T220,430 T240,360 Z" /> {/* S America */}
                <path d="M450,180 Q520,130 580,150 T650,200 T600,280 T520,290 T480,240 Z" /> {/* Eurasia */}
                <path d="M480,250 Q530,280 550,340 T540,420 T490,440 T460,380 T460,300 Z" /> {/* Africa */}
                <path d="M700,320 Q750,350 780,340 T820,380 T800,420 T740,380 Z" /> {/* Australia */}
                <circle cx="680" cy="180" r="15" /> {/* Japan */}
                <circle cx="600" cy="240" r="10" /> {/* India */}
              </svg>
            </div>

            {/* Title & Description */}
            <div className="space-y-4 relative z-10">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight font-outfit">
                HLS Global Group
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-xl">
                is an international accounting and business advisory firm with a focus on providing superior services
                in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves
                in delivering the highest levels of quality and customer service while remaining cost-effective. We
                have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India,
                Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the
                United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese
                multinational companies operating in Japan.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="relative z-10">
              {/* Horizontal dividing blue line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary-blue hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col space-y-1.5 py-4">
                    <span className="text-3xl font-black text-gray-900 tracking-tight font-outfit">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Selector and Building image */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-stretch lg:items-end">
            {/* Location Dropdown selector */}
            <div className="relative self-start lg:self-auto z-20">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-10 bg-accent-orange hover:bg-accent-orange-hover text-white flex items-center transition-all duration-200 cursor-pointer rounded-r-md slant-left-edge shadow-md pl-6 pr-6 gap-6 w-56 justify-between"
              >
                <span className="text-[10px] font-black tracking-widest uppercase font-outfit">
                  WE ARE LOCATED
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black tracking-wider text-black">
                    {selectedLocation}
                  </span>
                  <ChevronDown className="w-4 h-4 text-black stroke-[3]" />
                </div>
              </button>

              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-2xl py-1 z-30">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-extrabold text-gray-700 hover:bg-gray-50 hover:text-primary-blue cursor-pointer"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Office Facade image */}
            <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/office-building.png"
                alt="HLS Global Building Facade"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
