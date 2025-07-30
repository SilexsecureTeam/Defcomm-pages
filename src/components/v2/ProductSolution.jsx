import React from "react";
import { cards } from "../../utils/dummies";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProductSolution = () => {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Top Section */}
      <div className="max-w-peak mx-auto mb-12">
        <p className="text-sm text-[#36460A] mb-1 uppercase tracking-wide">
          Products and solutions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Highest Level of Security
        </h2>
        <hr className="my-4 h-[2px] bg-black" />
        <p className="text-[#3E4246] max-w-5xl">
          Defcomm delivers the highest level of security for digital
          communication, built specifically for environments where failure is
          not an option. Using military-grade end-to-end encryption, Defcomm
          ensures that data is fully protected from sender to receiver with no
          backdoors, no third-party access, and zero compromise.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-peak mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col justify-between rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${card.bgColor}`}
          >
            <div className="p-8 py-12">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-sm text-gray-100">{card.description}</p>
            </div>
            <img
              src={card.image}
              alt="Solution"
              className="object-cover w-full h-48"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSolution;
