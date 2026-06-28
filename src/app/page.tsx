import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HotTopics from "@/components/HotTopics";
import AboutFirm from "@/components/AboutFirm";
import InspirationInsights from "@/components/InspirationInsights";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Hot Topics Bar */}
      <HotTopics />

      {/* About Firm Section */}
      <AboutFirm />

      {/* Inspiration & Insights Section */}
      <InspirationInsights />

      {/* Minimalistic footer matching the styling */}
      <footer className="w-full bg-white border-t border-gray-100 py-8 text-center text-xs font-semibold text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DEMO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
