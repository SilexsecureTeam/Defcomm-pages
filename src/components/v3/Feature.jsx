import React from "react";
import about from "../../assets/about.png";
import fea1 from "../../assets/fea1.png";
import fea2 from "../../assets/fea2.png";
import fea3 from "../../assets/fea3.png";
import fea4 from "../../assets/fea4.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const features = [
  {
    img: fea3,
    title: "Military-Grade Security",
    text: "Uses AES-256 and quantum-resistant encryption to counter emerging cyber threats.",
  },
  {
    img: fea2,
    title: "Multi-Layer Authentication",
    text: " Ensures that no single entity has full access, minimising risks of breaches.",
  },
  {
    img: fea4,
    title: "Tamper-Proof System",
    text: "Self-destructing messages, secure storage, and hardware encryption ensure data remains protected.",
  },
  {
    img: fea1,
    title: "Zero Trust Architecture",
    text: "Ensures that no single entity has full access, minimising risks of breaches.",
  },
];

const Feature = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-peak mx-auto grid lg:grid-cols-2 gap-12 lg:items-start">
        {/* Left: Feature badge and heading */}
        <div className="flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-[#36460A] rounded-full"></div>
              <h2 className="text-sm font-semibold text-[#36460A] tracking-widest">
                FEATURES
              </h2>
            </div>
          </motion.div>

          {/* Animated Image */}
          <motion.img
            src={about}
            alt="About"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-8 rounded-lg mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>

        {/* Right: Features grid */}
        <div className="flex flex-col space-y-6">
          <motion.h2
            className="mb-7 text-2xl sm:text-4xl font-medium max-w-[449px] text-gray-800 leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            How we take{" "}
            <span className="text-[#36460A]">
              your business to the next level
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 space-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-12 w-12 mb-4"
                />
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
