import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { navItems } from "../../utils/constants";
import newImage from "../../assets/new.jpg";
import serve3 from "../../assets/serve3.png";

const items = [
  {
    title: "Secure Cloud & Mission Control Integration",
    text: "We offer defense-grade private cloud platforms for secure file exchange, classified data storage, and encrypted communication across multiple channels. Our mission control systems provide encrypted dashboards for coordination, decision-making, and real-time intelligence sharing.",
  },
  {
    title: "Ground Station & Satellite Infrastructure Security",
    text: "Defcomm secures ground station communications and integrates with satellite uplink/downlink systems to ensure encrypted satellite-to-earth data transfer. We support layered security models for remote mission control centers and satellite-based reconnaissance operations.",
  },
  {
    title: "Strategic Advisory, Training & Deployment",
    text: "We provide expert consulting on the deployment of secure communication infrastructure, including training for defense personnel, technical support, and policy-level advisory for governments and security institutions. Our teams handle full lifecycle deployment and on-site integration of secure systems.",
  },
  {
    title: "Signal Intelligence and Cyber Defense Systems",
    text: "Defcomm offers secure messaging platforms and signal protection solutions for classified communications. Our systems provide real-time threat detection, intrusion resistance, and secure channel management to prevent interception, spoofing, and other cyber threats.",
  },
];

const cards = [
  {
    title: "Purpose-Driven Work",
    description:
      "Every project you touch directly safeguards lives, data, and national security",
  },
  {
    title: "Innovation at the Core",
    description:
      "Develop encryption systems using military-grade and quantum-resilient protocols.",
  },
  {
    title: "Elite Team Environment",
    description:
      "Collaborate with experts in cybersecurity, cryptography, and defense technology.",
  },
  {
    title: "Impact You Can See",
    description:
      "Your work will be deployed in critical missions, secure communications, and high-stakes environments.",
  },
];

const JobOpenings = () => {
  const jobs = [
    {
      role: "Android Developer",
      location: "Abuja",
      type: "Full Time",
      path: "andriod-dev",
    },
    {
      role: "Product Manager",
      location: "Hybrid",
      type: "Full Time",
      path: "product-manager",
    },
    {
      role: "Operating System Engineer",
      location: "Abuja",
      type: "Full Time",
      path: "operating-system",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] pt-10 pb-20 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-peak mx-auto "
      >
        <div className="">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              Our Current Openings
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-3 mt-4 mb-6"
            >
              <div className="bg-[#759719] rounded-full h-2 w-16"></div>
              <div className="bg-[#D9D9D9] rounded-full h-2 w-12"></div>
              <div className="bg-[#D9D9D9] rounded-full h-2 w-6"></div>
            </motion.div>
          </motion.div>

          {/* Table Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:grid sm:grid-cols-4 gap-4 mb-4 pb-3 px-4"
          >
            <div className="text-base font-medium text-[#36460A]">Role</div>
            <div className="text-base font-medium text-[#36460A]">Location</div>
            <div className="text-base font-medium text-[#36460A]">Type</div>
            <div></div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="   bg-[#F9F9F9] px-4 "
              >
                {/* Desktop Layout */}
                <div className="hidden sm:grid sm:grid-cols-4 gap-4 items-center py-4">
                  <div className="text-[#36460A] font-medium">{job.role}</div>
                  <div className="text-[#100E0E]">{job.location}</div>
                  <div className="text-[#100E0E]">{job.type}</div>
                  <div className="flex justify-end">
                    <Link to={job.path}>
                      <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden space-y-3 py-4">
                  <div className="font-medium text-[#36460A] text-lg">
                    {job.role}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm text-[#100E0E]">
                      <span className="font-medium">Location:</span>{" "}
                      {job.location}
                    </div>
                    <div className="text-sm text-[#100E0E]">
                      <span className="font-medium">Type:</span> {job.type}
                    </div>
                  </div>
                  <button className="w-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Career = () => {
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
          <div className="relative flex flex-col justify-start pt-8 items-start px-8 md:px-12 text-[#D9D9E9] lg:ml-[0px] h-fit pb-10 lg:h-[360px] space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] font-semibold md:max-w-[500px] leading-[1.4]"
            >
              Carrer <br />
              <span className="text-[#C6FC2B]">Opportunities.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[#D1D5DB] md:max-w-[460px]"
            >
              We’re looking for talented, driven professionals who want to work
              at the forefront of cybersecurity, defense technology, and secure
              communications
            </motion.p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <section className="bg-[#36460A] w-full py-10 px-4">
        <div className="mx-auto max-w-peak">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl font-semibold"
          >
            Why Work With Us?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-3 mt-4 mb-6"
          >
            <div className="bg-white rounded-full h-2 w-6"></div>
            <div className="bg-white rounded-full h-2 w-12"></div>
            <div className="bg-[#C6FC2B] rounded-full h-2 w-16"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex-1 py-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-[#D9D9D9] text-base">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl mt-5 font-semibold"
          >
            Stay in the Loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white mt-1"
          >
            Never miss a deal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#D9D9D9] mt-2 font-light text-base max-w-[590px]"
          >
            Join Defcomm and help shape the future of secure communication where
            privacy is absolute and protection is guaranteed.
          </motion.p>
        </div>
      </section>

      {/* Job Openings */}
      <section>
        <JobOpenings />
      </section>

      {/* Additional Services */}
      <section className="bg-[#E8EEE1] w-full">
        <div className="max-w-peak mx-auto py-16 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 px-4 ">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src={serve3}
            alt="Defcomm secure infrastructure overview"
            className="w-full md:w-1/3 h-72 pt-6"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:w-2/3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="py-6 text-[#3D3D3D] space-y-3"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
