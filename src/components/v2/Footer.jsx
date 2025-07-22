import React from "react";
import { motion } from "framer-motion";
import logoIcon from "../../assets/logo-icon.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="bg-[#3D3D3D] text-white px-6 py-12 text-sm font-light max-w-peak mx-auto"
    >
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

        {/* Email Subscribe Form */}
        <div className="flex flex-col items-end gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-4 rounded border border-[#DDF2AB] bg-transparent text-white w-full md:w-80 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6FC2B] transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-white text-xl hover:underline mt-1 md:mt-0"
          >
            Subscribe
          </motion.button>
        </div>
      </div>

      <hr className="border-gray-500 mb-10" />

      {/* Bottom Grid */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
        {/* Left Column - Description */}
        <div className="text-[#EEEEEE] leading-normal max-w-sm text-[18px]">
          <p>
            Military-grade security for the digital age. Protecting your most
            sensitive communications with enterprise-level encryption and
            zero-knowledge architecture.
          </p>
        </div>

        {/* Middle Column - Solutions */}
        <div className="flex flex-col items-center">
          <h4 className="text-[#89AF20] font-semibold mb-2 text-xl">
            Solutions
          </h4>
          <ul className="space-y-2 list-disc">
            {[
              "Secure Messaging",
              "File Encryption",
              "Video Conferencing",
              "Enterprise Suite",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Company */}
        <div className="flex flex-col items-center">
          <h4 className="text-[#89AF20] font-semibold mb-2 text-xl">Company</h4>
          <ul className="space-y-2 list-disc">
            {["About Us", "Careers", "Security Blog", "Contact"].map(
              (item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
