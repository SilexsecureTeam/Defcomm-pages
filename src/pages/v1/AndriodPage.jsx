import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { navItems } from "../../utils/constants";
import newImage from "../../assets/andriod.jpg";

const JobPosting = () => {
  return (
    <div className="bg-[#E8EEE1] py-10">
      <div className="max-w-peak mx-auto  ">
        <div className="  p-4 ">
          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#89AF20] mb-4">About Us</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center mb-4"
            >
              <div className="flex space-x-2">
                <div className="w-12 h-2 bg-black rounded"></div>
                <div className="w-4 h-2 bg-[#89AF20] rounded"></div>
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#3D3D3D] text-lg leading-relaxed"
            >
              Defcomm, we design military-grade encrypted devices and secure
              communication platforms used by defense, government, and
              high-security enterprises. We're seeking a talented Android
              Developer to help us build the next generation of secure mobile
              applications.
            </motion.p>
          </motion.div>

          {/* Your Role Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#89AF20] mb-4">
              Your Role:
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center mb-4"
            >
              <div className="flex space-x-2">
                <div className="w-12 h-2 bg-black rounded"></div>
                <div className="w-4 h-2 bg-[#89AF20] rounded"></div>
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[#3D3D3D] text-lg leading-relaxed"
            >
              You'll work closely with our cybersecurity and hardware teams to
              develop high-performance, end-to-end encrypted Android apps that
              integrate seamlessly with Defcomm devices and backend systems.
            </motion.p>
          </motion.div>

          {/* Requirements Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#89AF20] mb-4">
              Requirements:
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center mb-4"
            >
              <div className="flex space-x-2">
                <div className="w-12 h-2 bg-black rounded"></div>
                <div className="w-4 h-2 bg-[#89AF20] rounded"></div>
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
            </motion.div>
            <ul className="space-y-3 text-[#3D3D3D] text-lg">
              {[
                "Proven experience in Android development (Kotlin/Java).",
                "Strong understanding of secure coding practices.",
                "Experience with API integration, offline storage, and cloud sync.",
                "Knowledge of encryption protocols (AES-256, RSA, E2EE) is a plus.",
                "Familiarity with biometric APIs and device security features.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Why Join Defcomm Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h2 className="text-2xl font-bold text-[#89AF20] mb-4">
              Why Join Defcomm:
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-center mb-4"
            >
              <div className="flex space-x-2">
                <div className="w-12 h-2 bg-black rounded"></div>
                <div className="w-4 h-2 bg-[#89AF20] rounded"></div>
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
            </motion.div>
            <ul className="space-y-3 text-[#3D3D3D] text-lg">
              {[
                "Work on mission-critical security projects that protect lives and information.",
                "Collaborate with experts in defense, cybersecurity, and secure hardware.",
                "Competitive salary, benefits, and career growth opportunities.",
                "Be part of a company shaping the future of secure communications",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const AndriodPage = () => {
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
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center w-full h-[80%] px-4"
        style={{ backgroundImage: `url(${newImage})` }}
      >
        {/* Header */}
        <header className="w-full z-50 pt-4 bg-transparent">
          {/* Top banner */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              bannerDisabled
                ? "backdrop-blur-lg bg-black/40 hover:bg-[#2d3f14] cursor-pointer transition-colors duration-300"
                : "bg-[#2d3f14]"
            } relative w-[90%] max-w-peak mx-auto text-white text-sm md:text-base px-6 py-3 mb-2 flex justify-center items-center gap-2 md:gap-6 text-center rounded-full`}
          >
            <IoClose
              size={20}
              className="absolute md:right-4 right-1 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setBannerDisabled(!bannerDisabled)}
              title={bannerDisabled ? "Enable banner" : "Disable banner"}
            />
            <span className="text-lime-400 font-semibold whitespace-nowrap text-xs md:text-sm">
              NEW
            </span>
            <p className="text-white leading-snug text-[10px] md:text-sm max-w-xs sm:max-w-md md:max-w-3xl truncate">
              Defcomm Unveils Secure App Stores with Military-Grade Protection
              for End Users
            </p>
          </motion.div>

          {/* Main Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                {navItems.map(({ name, path, external }, index) =>
                  name === "Products" ? (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
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
                    </motion.li>
                  ) : (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => navigate("/book")}
                className="bg-gradient-to-r from-[#9BA54B] to-[#3E432B] hover:bg-[#C6FC2B]/70 text-white px-4 md:px-5 py-2.5 text-sm ml-auto lg:ml-0 rounded-md font-semibold flex items-center gap-2 transition-all"
              >
                BOOK DEMO <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Mobile Menu Icon */}
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="lg:hidden text-gray-400 ml-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:hidden mt-4 space-y-4 px-4 text-black font-medium text-base"
              >
                {navItems.map(({ name, path, external }, index) =>
                  name === "Products" ? (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
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
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {external ? (
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black text-black block"
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
                        >
                          {name}
                        </NavLink>
                      )}
                    </motion.li>
                  )
                )}
              </motion.ul>
            )}
          </motion.nav>
        </header>
        <div className="max-w-peak mx-auto pt-12">
          <div className="relative flex flex-col justify-start pt-8 items-start px-8 md:px-12 text-white lg:ml-[0px] h-fit pb-10 lg:h-[360px] space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] font-semibold md:max-w-[500px] leading-[1.4]"
            >
              Android Mobile
              <br />
              <span className="text-[#C6FC2B]">Developer.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:max-w-[460px]"
            >
              Employment Type: Paid Intent
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl md:max-w-[460px]"
            >
              Job Location: Abuja
            </motion.p>
          </div>
        </div>
      </div>

      {/* Job Posting Section */}
      <JobPosting />

      {/* Why Work With Us */}
      <section className="bg-[#36460A] w-full py-10 ">
        <div className="mx-auto max-w-peak px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-[#D9D9D9] text-xl font-semibold"
          >
            How to Apply
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#D9D9D9] mt-2 mb-10 max-w-[840px] text-lg"
          >
            Please submit your resume and a cover letter detailing your relevant
            experience and passion for the Cybersecurity industry to:{" "}
            <b>businesss@defcomm.ng</b>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#D9D9D9] mt-2 font-light text-lg max-w-[590px]"
          >
            Applications close on September 15, 2025
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#D9D9D9] font-light text-lg max-w-[590px]"
          >
            Only shortlisted candidates will be contacted.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AndriodPage;
