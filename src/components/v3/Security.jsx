import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { stat } from "../../utils/dummies";

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

const Security = () => {
  return (
    <section className="bg-white text-black px-6 py-16">
      <div className="max-w-peak mx-auto lg:flex lg:items-start lg:justify-between lg:gap-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-12 lg:mb-0"
        >
          <h2 className="text-4xl font-normal leading-tight mb-4 max-w-[400px]">
            There’s a reason top security teams choose DefComm systems.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stat.map((stat, i) => (
            <React.Fragment key={i}>
              {/* Top line (before the first item) */}
              {i === 0 && (
                <motion.div
                  className="h-[2px] w-full my-5 bg-zinc-300 col-span-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              )}

              {/* Stat Card */}
              <motion.div
                variants={cardVariants}
                custom={i}
                whileHover={{ scale: 1.03 }}
                className=" min-h-32 flex flex-col justify-center  rounded-xl p-6 transition-all"
              >
                <h3 className="md:text-5xl text-3xl font-light bg-gradient-to-r from-lime-400 to-black text-transparent bg-clip-text">
                  {stat.value}
                </h3>
                <p className="mt-2 text-base font-medium text-black">
                  {stat.label}
                </p>
              </motion.div>

              {/* Middle line (after index 1 in 2-column layout) */}
              {i === 1 && (
                <motion.div
                  className="h-[2px] w-full my-5 bg-zinc-300 col-span-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              )}

              {/* Bottom line (after last item) */}
              {i === stat.length - 1 && (
                <motion.div
                  className="h-[2px] w-full my-5 bg-zinc-300 sm:col-span-2 col-span-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
