import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo-black.png";
import { navItems } from "../../utils/constants";

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 my-4 bg-transparent">
      {/* Top banner */}
      <div className="relative bg-[#2d3f14] text-white text-sm md:text-base px-4 py-3 mb-2 flex justify-center items-center gap-2 md:gap-6 text-center rounded-full mx-4 md:mx-[2%]">
        <IoClose
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => alert("Close banner")} // Add close logic as needed
        />
        <span className="text-lime-400 font-semibold whitespace-nowrap text-xs md:text-sm">
          NEW
        </span>
        <p className="text-white leading-snug text-[10px] md:text-sm max-w-xs sm:max-w-md md:max-w-3xl truncate">
          Defcomm Unveils Secure App Stores with Military-Grade Protection for
          End Users
        </p>
      </div>

      {/* Main Nav */}
      <nav
        className={`py-2 md:py-4 px-4 md:px-6 transition-colors duration-300 ${
          mobileMenuOpen ? "bg-white lg:bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Defcomm Logo"
              className="w-28 md:w-40 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-medium text-sm md:text-base">
            {navItems.map(({ name, path, external }) => (
              <li key={name}>
                {external ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    {name}
                  </a>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black font-semibold"
                        : "hover:text-black transition-colors"
                    }
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Book Demo Button */}
          <button className="bg-[#2d3f14] hover:bg-[#3e5720] text-white px-4 md:px-5 py-2.5 text-sm md:text-base ml-auto lg:ml-0 rounded-md font-semibold flex items-center gap-2 transition-all">
            BOOK DEMO <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-gray-700 ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-4 px-4 text-gray-700 font-medium text-base">
            {navItems.map(({ name, path, external }) => (
              <li key={name}>
                {external ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black block"
                    onClick={() => setMobileMenuOpen(false)} // close menu on click
                  >
                    {name}
                  </a>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black font-semibold block"
                        : "hover:text-black block"
                    }
                    onClick={() => setMobileMenuOpen(false)} // close menu on click
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
