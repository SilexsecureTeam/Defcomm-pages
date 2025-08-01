import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { navItems } from "../../utils/constants";

export default function Nav() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDisabled, setBannerDisabled] = useState(false);

  return (
    <header className="w-full z-50 pt-4 bg-[#141413]">
      {/* Top banner */}
      <div
        className={`relative w-[90%] max-w-peak mx-auto text-white text-sm md:text-base px-4 py-3 mb-2 flex justify-center items-center gap-2 md:gap-6 text-center rounded-full
    ${
      bannerDisabled
        ? "backdrop-blur-lg bg-black/40 hover:bg-[#2d3f14] cursor-pointer transition-colors duration-300"
        : "bg-[#2d3f14]"
    }`}
        // So hover works even when banner is disabled
        onMouseEnter={() => {
          if (bannerDisabled) {
            // Optional: if you want to "temporarily" show normal color on hover
            // You can handle this with CSS alone, no JS needed
          }
        }}
        onMouseLeave={() => {
          // no action needed here
        }}
      >
        <IoClose
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setBannerDisabled(!bannerDisabled)}
          title={bannerDisabled ? "Enable banner" : "Disable banner"}
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
        <div className="max-w-peak mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={logo}
                alt="Defcomm Logo"
                className="w-28 md:w-40 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-white font-medium text-sm md:text-base">
            {navItems.map(({ name, path, external }) => (
              <li key={name}>
                {external ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-400 transition-colors"
                  >
                    {name}
                  </a>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lime-400 font-semibold"
                        : "hover:text-lime-400 transition-colors"
                    }
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Book Demo Button */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#C6FC2B] hover:bg-[#C6FC2B]/70 text-black px-4 md:px-5 py-2.5 text-sm ml-auto lg:ml-0 rounded-md font-semibold flex items-center gap-2 transition-all"
          >
            BOOK DEMO <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-white ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-4 px-4 text-white font-medium text-base">
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
