"use client";

import { ArrowRight } from "lucide-react";

export default function HotTopics() {
  const topics = [
    {
      title: "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
      href: "#",
    },
    {
      title: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
      href: "#",
    },
    {
      title: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
      href: "#",
    },
    {
      title: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
      href: "#",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {/* Section Badge */}
          <div className="flex-shrink-0 flex items-start">
            <div className="h-10 bg-accent-orange text-white flex items-center rounded-r-md slant-left-edge shadow-md pl-6 pr-6 font-outfit text-xs font-black tracking-widest uppercase">
              HOT TOPICS
            </div>
          </div>

          {/* News Topics Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {topics.map((topic, index) => (
              <a
                key={index}
                href={topic.href}
                className="group flex flex-col justify-between p-4 md:px-6 md:py-2 hover:bg-gray-100/50 transition-colors duration-200"
              >
                <h3 className="text-[13px] font-semibold text-gray-800 group-hover:text-primary-blue leading-snug transition-colors line-clamp-3">
                  {topic.title}
                </h3>
                <div className="flex justify-end mt-4">
                  <ArrowRight className="w-5 h-5 text-gray-800 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-200 stroke-[2.5]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
