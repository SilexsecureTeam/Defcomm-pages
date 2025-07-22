import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../../utils/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
      <h2 className="text-[#DDF2AB] text-3xl md:text-5xl font-semibold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-white text-center max-w-2xl text-base mb-10">
        Find answers to common questions about the Defcomm Live Bug Bounty 2025
        program. Can't find what you're looking for? Contact us directly.
      </p>

      <div className="w-full max-w-3xl flex flex-col divide-y divide-[#DDF2AB]/30 rounded-lg">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-white text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                {isOpen ? (
                  <FaChevronUp className="text-[#DDF2AB]" />
                ) : (
                  <FaChevronDown className="text-[#DDF2AB]" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
