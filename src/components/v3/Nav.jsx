import React, { useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logo-black.png";
import { navItems } from "../../utils/constants";
import TopBanner from "../v2/TopBanner";
import { motion } from "framer-motion";
export default function Nav() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDisabled, setBannerDisabled] = useState(false);
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
    }, 200);
  };

  return (
    <header className="w-full z-50 pt-4 bg-[#141413]">
      {/* Top banner */}
      <TopBanner />

      {/* Main Nav */}
      <nav
        className={`py-2 md:py-4 px-4 md:px-6 transition-colors duration-300 ${mobileMenuOpen ? "bg-white lg:bg-transparent" : "bg-transparent"
          }`}
      >
        <motion.div initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} className="max-w-peak mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              {mobileMenuOpen ? (
                <img
                  src={logoBlack}
                  alt="Defcomm Logo"
                  className="w-24 md:w-36 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ) : (
                <img
                  src={logo}
                  alt="Defcomm Logo"
                  className="w-28 md:w-40 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
              )}
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-white font-medium text-sm md:text-base">
            {navItems.map(({ name, path, external }, index) =>
              name === "Products" ? (
                <motion.li
                  key={`${name}-${index}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
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
                  {/* 
                  {productDropdownOpen && (
                    <div className="absolute -left-[280px] mt-2 w-[620px]  bg-gradient-to-r from-[#1f2e12] to-[#3d5d1c] shadow-lg rounded-md py-5 z-50">
                      <div className="grid grid-cols-3 gap-8 px-4">
                        
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
                  )} */}
                </motion.li>
              ) : (
                <motion.li
                  key={`${name}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
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
                </motion.li>
              )
            )}
          </ul>

          {/* Book Demo Button */}
          <button
            onClick={() => navigate("/book")}
            className="bg-[#C6FC2B] hover:bg-[#C6FC2B]/70 text-black px-4 md:px-5 py-2.5 text-sm ml-auto lg:ml-0 rounded-md font-semibold flex items-center gap-2 transition-all"
          >
            BOOK DEMO <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-gray-400 ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-4 px-4 text-black font-medium text-base">
            {navItems.map(({ name, path, external }, index) =>
              name === "Products" ? (
                <motion.li
                  key={Math.random()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  >
                    <span>{name}</span>
                    <span>{mobileProductOpen ? "-" : "+"}</span>
                  </button>
                  {mobileProductOpen && (
                    <div className="pl-4 mt-2 space-y-4">
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
                </motion.li>
              ) : (
                <motion.li
                  key={`${name}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {external ? (
                    <a
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black text-black block"
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
                </motion.li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}
