import React, { useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo-black.png";
import { navItems } from "../../utils/constants";
import TopBanner from "./TopBanner";

export default function TopNav() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 200); // delay before closing
  };

  return (
    <header className="w-full z-50 pt-4 bg-limeAccent">
      {/* Top banner */}
      <TopBanner />

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
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-700 font-medium text-sm md:text-base">
            {navItems.map(({ name, path, external }) =>
              name === "Products" ? (
                <li
                  key={name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
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

                  {/* Desktop Dropdown */}
                  {productDropdownOpen && (
                    <div className="absolute -left-[280px] mt-2 w-[620px]  bg-gradient-to-r from-[#1f2e12] to-[#3d5d1c] shadow-lg rounded-md py-5 z-50">
                      <div className="grid grid-cols-3 gap-8 px-4">
                        {/* PRODUCTS Column */}
                        <div>
                          <h3 className="text-xs font-light mb-2 tracking-wider text-white">
                            PRODUCTS
                          </h3>
                          <ul className="space-y-2 font-medium">
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Device
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Apps
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Operating System
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        {/* APPS Column */}
                        <div>
                          <h3 className="text-xs font-light mb-2 tracking-wider text-white">
                            APPS
                          </h3>
                          <ul className="space-y-2 font-medium">
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                iSurvive
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                PPT
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Defcomm Messenger
                              </NavLink>
                            </li>
                          </ul>
                        </div>

                        {/* DEVICES Column */}
                        <div>
                          <h3 className="text-xs font-light mb-2 tracking-wider text-white">
                            DEVICES
                          </h3>
                          <ul className="space-y-2 font-medium">
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Defcomm ShieldPad
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Defcomm SecureEdge
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="text-sm text-white transition-colors block"
                              >
                                Defcomm TrustOS
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
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
              )
            )}
          </ul>

          {/* Book Demo Button */}
          <button
            onClick={() => navigate("/book")}
            className="bg-[#2d3f14] hover:bg-[#3e5720] text-white px-4 md:px-5 py-2.5 text-sm ml-auto lg:ml-0 rounded-md font-semibold flex items-center gap-2 transition-all"
          >
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
            {navItems.map(({ name, path, external }) =>
              name === "Products" ? (
                <li key={name}>
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  >
                    <span>{name}</span>
                    <span>{mobileProductOpen ? "-" : "+"}</span>
                  </button>
                  {mobileProductOpen && (
                    <div className="pl-4 mt-2 space-y-4">
                      {/* PRODUCTS Section */}
                      <div>
                        <h3 className="text-sm font-medium mb-2 tracking-wider text-gray-800">
                          PRODUCTS
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Device
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Apps
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Operating System
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* APPS Section */}
                      <div>
                        <h3 className="text-sm font-medium mb-2 tracking-wider text-gray-800">
                          APPS
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              iSurvive
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              PPT
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Defcomm Messenger
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* DEVICES Section */}
                      <div>
                        <h3 className="text-sm font-medium mb-2 tracking-wider text-gray-800">
                          DEVICES
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Defcomm ShieldPad
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Defcomm SecureEdge
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-black transition-colors block"
                            >
                              Defcomm TrustOS
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={name}>
                  {external ? (
                    <a
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black block"
                      onClick={() => setMobileMenuOpen(false)}
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
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {name}
                    </NavLink>
                  )}
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}
