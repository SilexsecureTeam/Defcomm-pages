import React, { useState, useEffect } from "react";
import logo from "../../assets/browser-logo.png";

const BrowserHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full py-6 px-6 lg:px-12 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#0f140b]/95 backdrop-blur-md shadow-lg" 
        : "bg-gradient-to-b from-[#0f140b] to-transparent"
    }`}>
      <div className="max-w-7xl px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Defcomm" className="w-12 h-12" />
        </div>

        <nav className="hidden md:flex !ml-20 items-center gap-6 bg-[#22300c]/60 rounded-full px-8 py-3">
          <a href="#" className="px-4 py-1.5 rounded-full bg-[#89AF20] text-black font-semibold text-sm hover:bg-[#7a9518] transition">Home</a>
          <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition">Community</a>
          <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition">Blog</a>
          <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition">Pricing</a>
        </nav>

        <a href="#" className="hidden md:inline-block bg-[#89AF20] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7a9518] transition">Download Defcomm</a>

        {/* Hamburger Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span className={`w-6 h-0.5 bg-[#89AF20] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#89AF20] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#89AF20] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gradient-to-b from-[#0f140b]/98 to-[#162012]/98 backdrop-blur-md border-b border-[#233016] overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-6 space-y-4">
          <a href="#" className="block px-4 py-3 bg-[#89AF20] text-black font-semibold rounded-lg hover:bg-[#7a9518] transition transform hover:scale-105">
            Home
          </a>
          <a href="#" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-[#172012] transition">
            Community
          </a>
          <a href="#" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-[#172012] transition">
            Blog
          </a>
          <a href="#" className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-[#172012] transition">
            Pricing
          </a>
          <a href="#" className="block px-4 py-3 bg-white/10 text-[#89AF20] font-semibold rounded-lg hover:bg-white/20 transition transform hover:scale-105 border border-[#89AF20]/30">
            Download Defcomm
          </a>
        </div>
      </div>
    </header>
  );
};

export default BrowserHeader;
