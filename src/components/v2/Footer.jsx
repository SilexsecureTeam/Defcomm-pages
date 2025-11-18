import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logoIcon from "../../assets/logo-icon.png";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About Us", route: "/about" },
  { name: "Careers", route: "/career" },
  { name: "Blogs", route: "/blogs" },
  { name: "Contact", route: "/form" },
];

const featureLinks = [
  { name: "Secure Messaging", link="/" },
  { name: "File Encryption", link="/" },
  { name: "Video Conferencing", link="/" },
  { name: "Defcomm Browser", link="/browser" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-[#3D3D3D] text-white px-6 py-12 text-sm font-light"
    >
      <div className="max-w-peak mx-auto">
        {/* Top Newsletter Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={logoIcon} alt="" className="w-20" />
              <h2 className="text-lg font-semibold text-white">
                Stay Secure,
                <br />
                <span className="text-[#C6FC2B]">Stay Informed</span>
              </h2>
            </div>
            <p className="max-w-md text-[#EEEEEE] text-[18px] leading-snug">
              Get the latest security insights, product updates, and best
              practices delivered to your inbox.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 w-full md:w-auto text-white">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl font-semibold text-[#C6FC2B]"
            >
              +234 802 098 9037
            </motion.p>
            <p className="text-sm text-gray-300">
              Call or WhatsApp for inquiries
            </p>
          </div>
        </div>

        <hr className="border-gray-500 mb-10" />

        {/* Bottom Grid */}
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-[3fr_3fr] gap-8">
          {/* Left Column - Description */}
          <div className="text-[#EEEEEE] leading-normal max-w-sm text-[16px]">
            <p>
              Military-grade security for the digital age. Protecting your most
              sensitive communications with enterprise-level encryption and
              zero-knowledge architecture.
            </p>
          </div>

          {/* Right Group - Solutions, Company, Login */}
          <div className="flex flex-wrap md:justify-evenly justify-start gap-12">
            {/* Solutions */}
            <div className="flex flex-col items-start justify-center w-full max-w-[200px]">
              <h4 className="text-[#89AF20] font-semibold mb-2 text-xl">
                Solutions
              </h4>
              <ul className="space-y-2 list-disc pl-5 text-left">
                {featureLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item?.link}
                      className="hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col lg:items-end items-start w-full max-w-[200px]">
              <h4 className="text-[#89AF20] font-semibold mb-2 text-xl">
                Company
              </h4>
              <ul className="space-y-2 list-disc pl-5 text-left">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.route}
                      className="hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Login Button with Icon */}
        <div className="flex flex-col items-end mt-6 justify-end w-full">
          <a
            href="https://cloud.defcomm.ng/"
            target="_blank"
            className="flex items-center w-fit gap-2 bg-[#89AF20] hover:bg-[#7ea91a] text-black font-semibold py-2 px-6 rounded transition"
          >
            <FaSignInAlt size={20} />
            Login
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
