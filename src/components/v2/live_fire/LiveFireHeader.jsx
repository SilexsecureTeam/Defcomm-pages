import { useState } from "react";
import defcommlogo from "../../../assets/landing/Defcomm-03 1.png";
import { navList } from "../../../utils/constants";

const LiveFireHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#111] to-[#222] z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <a href="/">
          <img
            src={defcommlogo}
            alt="Defcomm Logo"
            className="w-[130px] md:w-[220px] transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navList.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.route}
                className="text-white text-sm font-medium hover:text-[#C6FC2B] transition duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#register"
          className="hidden lg:inline-block bg-white text-gray-800 px-6 py-2 rounded-full font-semibold shadow hover:bg-[#C6FC2B] hover:text-black transition duration-200"
        >
          Register Now
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#111] border-t border-[#333] px-6 pb-4 animate-fade-down">
          <ul className="flex flex-col gap-4">
            {navList.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.route}
                  className="block text-white text-sm font-medium hover:text-[#C6FC2B] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="block w-full text-center mt-2 bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-[#C6FC2B] hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default LiveFireHeader;
