import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { navItems } from "../../utils/constants";
import newImage from "../../assets/new.jpg";
import serve from "../../assets/serve.png";
import serve1 from "../../assets/serve1.png";
import serve2 from "../../assets/serve2.png";
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

const HomeService2 = () => {
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
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center w-full h-[80%]"
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
        <div className="max-w-peak mx-auto py-16">
          <div className="relative flex flex-col justify-start pt-8 items-start px-8 md:px-12 text-[#D9D9E9] lg:ml-[0px] h-fit pb-10 lg:h-[450px] space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[35px] font-semibold md:max-w-[500px] leading-[1.4]"
            >
              Technology-Driven Security.{" "}
              <span className="text-[#C6FC2B]">
                Built for What Matters Most.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[#D1D5DB] md:max-w-[460px]"
            >
              Our services are engineered to deliver resilient, encrypted, and
              intelligent communication infrastructure — where failure is not an
              option.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Key Services Overview */}
      <section className="bg-white w-full">
        <div className="max-w-peak mx-auto py-16 px-4 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-12 text-black "
          >
            Defcomm Solutions – Key Services Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-black"
          >
            Defcomm Solutions is a cutting-edge technology company specializing
            in end-to-end encrypted communication, embedded systems, and
            mobile-satellite communication infrastructure. We deliver highly
            secure, mission-critical solutions designed to meet the demanding
            needs of defense, intelligence, emergency response, and national
            security operations. Our core services are designed to enable
            confidentiality, integrity, and resilience across terrestrial,
            mobile, and satellite communication networks.
          </motion.p>
        </div>
      </section>

      {/* Secure Mobile Devices */}
      <section className="bg-[#F5F5F5] w-full">
        <div className="max-w-peak mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F2FADE] text-[#3D3D3D] p-6 w-full md:w-1/2 h-fit"
          >
            <p className="font-bold mb-6">Secure Mobile Devices</p>
            <p className="text-lg">
              We develop and supply military-grade secure mobile phones and
              tablets, hardened with custom operating systems and encrypted
              communication apps. These devices are equipped with secure boot,
              tamper detection, and remote wipe functionalities. Designed for
              field operatives, they offer encrypted voice, video, messaging,
              and satellite fallback communication for uninterrupted security.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src={serve}
            alt="Defcomm secure mobile phone"
            className="w-full md:w-1/2"
          />
        </div>
      </section>

      {/* End-to-End Encrypted Communication Platforms */}
      <section className="bg-[#EFEFEF] w-full">
        <div className="max-w-peak mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 px-4 md:px-0">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src={serve1}
            alt="Defcomm encrypted communication platform"
            className="w-full md:w-1/2"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F2FADE] text-[#3D3D3D] border-b-8 border-b-[#36460A] p-6 w-full md:w-1/2 h-fit"
          >
            <p className="font-bold mb-6">
              End-to-End Encrypted Communication Platforms
            </p>
            <p className="text-lg">
              Our flagship secure communication platform delivers end-to-end
              encryption for real-time voice, video, messaging, and data
              transmission. Built on zero-trust architecture, it is designed for
              high-assurance communication between command centers, field units,
              and intelligence networks. It integrates with mobile, desktop, and
              embedded systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Embedded Communication Systems */}
      <section className="bg-[#F5F5F5] w-full">
        <div className="max-w-peak mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F2FADE] text-[#3D3D3D] p-6 w-full md:w-1/2 h-fit"
          >
            <p className="font-bold mb-6">Embedded Communication Systems</p>
            <p className="text-lg">
              We engineer embedded secure communication modules for tactical
              equipment, drones (UAVs), autonomous systems, and mission-critical
              hardware. Our embedded solutions ensure encrypted data
              transmission within military hardware and field-deployable
              systems, with full resistance against jamming, spoofing, and cyber
              threats.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src={serve2}
            alt="Defcomm embedded communication module"
            className="w-full md:w-1/2"
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#E8EEE1] w-full">
        <div className="max-w-peak mx-auto py-16 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 px-4 md:px-0">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src={serve3}
            alt="Defcomm secure infrastructure overview"
            className="w-full md:w-1/3 h-96 pt-6"
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

export default HomeService2;
