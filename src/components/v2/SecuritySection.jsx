import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { motion } from "framer-motion";
import { stats } from "../../utils/dummies";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SecuritySection = () => {
  return (
    <section className="bg-gradient-to-br from-oliveLight to-black text-white px-6 py-16">
      <div className="max-w-peak mx-auto lg:flex lg:items-center lg:justify-between lg:gap-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-12 lg:mb-0"
        >
          <div className="inline-flex items-center bg-[#54622D] rounded-full px-4 py-2 text-sm font-medium mb-4">
            <BsShieldFillCheck className="w-4 h-4 text-[#DDF2AB] mr-2" />
            Trusted By The Armed Forces
          </div>

          <h2 className="text-4xl font-bold leading-tight mb-4">
            Security You Can <span className="text-lime-400">Trust</span>
          </h2>

          <p className="text-gray-300 mb-6">
            Built with enterprise-grade security from the ground up. Our
            platform meets the highest industry standards and regulatory
            requirements, giving you peace of mind in an uncertain digital
            landscape.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Certifications & Compliance</h4>
            <div className="flex gap-4 flex-wrap">
              <span className="px-4 py-2 bg-[#54622D] rounded-full text-sm">
                ISO 27001
              </span>
              <span className="px-4 py-2 bg-[#54622D] rounded-full text-sm">
                SOC 2 Type II
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              custom={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 min-h-48 flex flex-col justify-center border border-white/30 rounded-xl p-6 transition-all"
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
