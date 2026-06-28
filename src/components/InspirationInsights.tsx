"use client";

import { useState } from "react";
import Image from "next/image";

export default function InspirationInsights() {
  // Tabs state: 0 = Pre-market/Market, 1 = Operations, 2 = Growth & Expansion
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Pre-market Entry",
      desc: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
      shortDesc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
      cardId: 0,
    },
    {
      id: 1,
      title: "Market Entry",
      desc: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
      shortDesc: "Research demand, assess competition, choose mode, localize offering, comply regulations.",
      cardId: 0, // Maps to the first card (Pre-Market / Market Entry)
    },
    {
      id: 2,
      title: "Operations",
      desc: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
      shortDesc: "Planning, organizing, and managing processes to efficiently produce goods or services.",
      cardId: 1, // Maps to Card 2
    },
    {
      id: 3,
      title: "Growth & Expansion",
      desc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
      shortDesc: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability.",
      cardId: 2, // Maps to Card 3
    },
  ];

  // Helper to check if a card is active based on current active tab
  const getCardWidthClass = (cardId: number) => {
    // Determine which card matches the active tab
    let activeCardId = 0;
    if (activeTab === 0 || activeTab === 1) activeCardId = 0;
    else if (activeTab === 2) activeCardId = 1;
    else if (activeTab === 3) activeCardId = 2;

    return activeCardId === cardId ? "flex-[2.5]" : "flex-[0.6]";
  };

  const isCardActive = (cardId: number) => {
    let activeCardId = 0;
    if (activeTab === 0 || activeTab === 1) activeCardId = 0;
    else if (activeTab === 2) activeCardId = 1;
    else if (activeTab === 3) activeCardId = 2;
    return activeCardId === cardId;
  };

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Label Card */}
          <div className="lg:col-span-2 flex justify-start">
            <div className="w-40 h-40 bg-[#eceef1] rounded-3xl flex flex-col justify-center p-6 shadow-sm">
              <span className="text-sm font-black text-gray-900 tracking-tight leading-tight font-outfit uppercase">
                INSPIRATION &
              </span>
              <span className="text-sm font-black text-gray-900 tracking-tight leading-tight font-outfit uppercase">
                INSIGHTS
              </span>
            </div>
          </div>

          {/* Middle Column - Interactive Tab list */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className="cursor-pointer group"
                  >
                    <div className="py-4">
                      {/* Tab Title */}
                      <h3
                        className={`text-sm font-black transition-colors duration-200 ${
                          isActive
                            ? "text-primary-blue"
                            : "text-gray-900 group-hover:text-primary-blue"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      {/* Tab Description (conditionally formatted) */}
                      <p
                        className={`mt-1.5 text-[11px] leading-relaxed transition-colors duration-200 ${
                          isActive ? "text-[#003ba5] font-semibold" : "text-gray-500 font-medium"
                        }`}
                      >
                        {isActive ? tab.desc : tab.shortDesc}
                      </p>
                    </div>
                    {/* Blue / Grey border */}
                    <div
                      className={`h-[2px] transition-all duration-300 ${
                        isActive ? "bg-primary-blue w-full" : "bg-gray-300 w-full group-hover:bg-gray-400"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Accordion Image Gallery */}
          <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 h-[450px] md:h-[500px]">
            
            {/* Card 1: Pre-Market */}
            <div
              onClick={() => setActiveTab(0)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-in-out ${getCardWidthClass(
                0
              )} h-full`}
            >
              <Image
                src="/coins-calculator.png"
                alt="Pre-Market Calculator and Coins"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent flex flex-col justify-end p-6">
                {isCardActive(0) ? (
                  <div className="text-white space-y-2 transition-opacity duration-500 ease-in-out">
                    <span className="text-[10px] font-black tracking-widest uppercase bg-primary-blue/35 border border-white/10 px-2 py-0.5 rounded-md inline-block font-outfit">
                      Pre-Market
                    </span>
                    <h4 className="text-sm font-extrabold leading-tight">
                      Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
                    </h4>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-950/40 hover:bg-blue-950/20 transition-all duration-300">
                    <span className="text-lg md:text-xl font-bold text-white md:vertical-text whitespace-nowrap block select-none">
                      Pre-Market
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: Operations */}
            <div
              onClick={() => setActiveTab(2)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-in-out ${getCardWidthClass(
                1
              )} h-full`}
            >
              <Image
                src="/insights-operations.png"
                alt="Operations meeting room"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent flex flex-col justify-end p-6">
                {isCardActive(1) ? (
                  <div className="text-white space-y-2 transition-opacity duration-500 ease-in-out">
                    <span className="text-[10px] font-black tracking-widest uppercase bg-primary-blue/35 border border-white/10 px-2 py-0.5 rounded-md inline-block font-outfit">
                      Operations
                    </span>
                    <h4 className="text-sm font-extrabold leading-tight">
                      Planning and managing processes to efficiently deliver quality and cost-effectiveness
                    </h4>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-950/40 hover:bg-blue-950/20 transition-all duration-300">
                    <span className="text-lg md:text-xl font-bold text-white md:vertical-text whitespace-nowrap block select-none">
                      Operations
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Card 3: Growth & Expansion */}
            <div
              onClick={() => setActiveTab(3)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-in-out ${getCardWidthClass(
                2
              )} h-full`}
            >
              <Image
                src="/insights-growth.png"
                alt="Growth and Expansion businessman"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent flex flex-col justify-end p-6">
                {isCardActive(2) ? (
                  <div className="text-white space-y-2 transition-opacity duration-500 ease-in-out">
                    <span className="text-[10px] font-black tracking-widest uppercase bg-primary-blue/35 border border-white/10 px-2 py-0.5 rounded-md inline-block font-outfit">
                      Growth & Expansion
                    </span>
                    <h4 className="text-sm font-extrabold leading-tight">
                      Increasing business size, market reach, and long-term sustainability
                    </h4>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-950/40 hover:bg-blue-950/20 transition-all duration-300">
                    <span className="text-lg md:text-xl font-bold text-white md:vertical-text whitespace-nowrap block select-none">
                      Growth & Expansion
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
