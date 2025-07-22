import React from "react";
import sampleImage from "../../assets/solution.jpg";
import { cards } from "../../utils/dummies";
import { motion } from "framer-motion";

const ProductSolution = () => {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-sm text-gray-700 mb-1 uppercase tracking-wide">
          Products and solutions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2d3f14]">
          Highest Level of Security
        </h2>
        <p className="text-gray-700 max-w-3xl">
          Webex One is the only AI event that provides complete solutions, and
          training for best-in-class employee and customer experiences.
        </p>
        <hr className="mt-6 border-gray-200" />
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col justify-between rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${card.bgColor}`}
          >
            <div className="p-8 py-12">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-100">{card.description}</p>
            </div>
            <img
              src={sampleImage}
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
