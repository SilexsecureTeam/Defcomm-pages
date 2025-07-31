import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#141413]">
      <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with bracket borders */}
          <motion.div
            className="relative mb-8 w-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white flex flex-wrap sm:items-center sm:justify-center gap-2 sm:text-center ">
              {/* Left bracket */}
              <span className="relative hidden sm:block">
                <span className="text-[#C6FC2B] text-5xl md:text-7xl font-extrabold">
                  「
                </span>
              </span>

              {/* Main text */}
              <span className="flex flex-wrap items-baseline leading-relaxed font-extrabold">
                <span className="text-white">
                  3<span className="text-[#36460A]">6</span>0-Degree
                </span>
                <span className="ml-2 text-[#36460A]">Protection</span>
              </span>

              {/* Right bracket */}
              <span className="relative hidden sm:block">
                <span className="text-[#C6FC2B] text-5xl md:text-7xl font-extrabold">
                  」
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.h3
            className="text-xl text-start font-bold text-white poppins mb-2 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Defcomm Solutions stands as the epitome of secure connectivity
            for defence operational communication.
          </motion.h3>

          {/* Body text */}
          <motion.div
            className="text-white leading-relaxed font-normal poppins max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Safeguarding military communication is paramount, ensuring the
              preservation of sensitive information and the steadfast
              maintenance of operational security.
            </p>
            <p>
              Defcomm is a leading provider of secure communication solutions
              tailored for defense organizations. We specialize in end-to-end
              encryption technologies designed to protect sensitive military and
              governmental communications from cyber threats, interception. And
              unauthorized access. With years of expertise in cybersecurity and
              defence technology, we ensure that critical data remains secure in
              an increasingly complex digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
