import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import vector from "../../assets/vector1.png";
import { containers } from "../../utils/fields";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Use = () => {
  const [activeId, setActiveId] = useState(null);

  // Handle mobile toggle (onClick)
  const handleToggle = (id) => {
    // On mobile: toggle active state
    if (window.innerWidth <= 768) {
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-peak mx-auto">
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <div className="flex justify-between flex-wrap w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-black"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Use Cases
            </motion.h2>
            <motion.div
              className="flex items-center space-x-2 bg-[#54622D] rounded-full py-2 px-4"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={vector} alt="vector" className="w-4 h-4" />
              <p className="text-sm text-[#F0F2F5] uppercase tracking-wide">
                Defcomm use Cases
              </p>
            </motion.div>
          </div>
          <motion.hr
            className="my-4 h-[2px] bg-black"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.p
            className="text-[#3E4246] text-lg max-w-4xl"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Defcomm is a secure end-to-end encryption platform designed to
            protect sensitive communications across high-risk environments. Its
            key use cases include:
          </motion.p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="flex flex-wrap -mx-2">
          {containers.map((container, index) => {
            const isActive = container.id === activeId;

            return (
              <motion.div
                key={container.id}
                className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => handleToggle(container.id)}
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setActiveId(container.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      setActiveId(null);
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative cursor-pointer overflow-hidden shadow-xl border border-gray-700/30 flex flex-col transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white max-h-[750px] overflow-y-auto"
                      : "bg-[#2F2F2F] text-white max-h-[550px] overflow-hidden"
                  } transition-[max-height] duration-500 ease-in-out scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/60`}
                >
                  {/* Top Half */}
                  <div className="relative h-[250px] flex justify-center items-center">
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ backgroundImage: `url(${container.img})` }}
                    />
                    <div className="relative inline-block z-10">
                      <div
                        className={`absolute inset-0 rounded-full backdrop-blur-md bg-black/30 transition-all duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <h2 className="relative z-10 text-white text-center py-3 px-6 rounded-full border border-white text-[12px] font-bold tracking-wide uppercase bg-transparent flex items-center gap-2">
                        {container.title}
                        {isActive ? (
                          <ChevronUp size={14} className="ml-1" />
                        ) : (
                          <ChevronDown size={14} className="ml-1" />
                        )}
                      </h2>
                    </div>
                  </div>

                  {/* Bottom Half */}
                  <div className="flex flex-col justify-start border-t-white border-t p-4 space-y-3">
                    <motion.p
                      className="text-[14px] font-normal h-[158px] leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {container.paragraph}
                    </motion.p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <h4 className="text-sm font-semibold mb-3">
                          {container.subtitle}
                        </h4>
                        {container.id === 1 ? (
                          <p className="text-[14px]">
                            {container.subtitleContent}
                          </p>
                        ) : (
                          <motion.ul
                            className="list-disc list-inside space-y-1 text-[14px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            {container.subtitleContent
                              .split("\n")
                              .map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                              ))}
                          </motion.ul>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Use;
