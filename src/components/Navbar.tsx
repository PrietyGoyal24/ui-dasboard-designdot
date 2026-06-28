"use client";

import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("IND");
  const [selectedLang, setSelectedLang] = useState("ENGLISH");

  const navLinks = [
    { name: "WHO WE SERVE", href: "#" },
    { name: "SOLUTIONS", href: "#" },
    { name: "RESOURCES", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="w-12 h-12">
                <path
                  d="M50 8 L88 30 L88 70 L50 92 L12 70 L12 30 Z"
                  stroke="#171717"
                  strokeWidth="5"
                  fill="none"
                />
                <text
                  x="50"
                  y="57"
                  fontSize="16"
                  fontWeight="800"
                  fontFamily="var(--font-outfit)"
                  textAnchor="middle"
                  fill="#171717"
                  letterSpacing="1"
                >
                  DEMO
                </text>
              </svg>
            </a>
          </div>

          {/* Desktop Nav Links */}
          
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-extrabold tracking-wider text-gray-700 hover:text-primary-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side Tools */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <button className="text-gray-600 hover:text-primary-blue transition-colors cursor-pointer">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Country Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-gray-700 hover:text-primary-blue transition-colors cursor-pointer uppercase">
                <span>{selectedCountry}</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-blue transition-colors" />
              </button>
              <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 rounded-md shadow-lg py-1 hidden group-hover:block transition-all duration-200">
                {["IND", "USA", "JPN"].map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:text-primary-blue cursor-pointer"
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-gray-700 hover:text-primary-blue transition-colors cursor-pointer uppercase">
                <span>{selectedLang}</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-blue transition-colors" />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-md shadow-lg py-1 hidden group-hover:block transition-all duration-200">
                {["ENGLISH", "JAPANESE", "HINDI"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:text-primary-blue cursor-pointer"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-blue transition-colors cursor-pointer">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-blue focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-gray-700 hover:text-primary-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-md px-2 py-1 text-gray-700"
                >
                  <option value="IND">IND</option>
                  <option value="USA">USA</option>
                  <option value="JPN">JPN</option>
                </select>
              </div>
              <div className="relative">
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-md px-2 py-1 text-gray-700"
                >
                  <option value="ENGLISH">ENGLISH</option>
                  <option value="JAPANESE">JAPANESE</option>
                  <option value="HINDI">HINDI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
