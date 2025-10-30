import React from "react";
import { itemVariants, steps } from "../../utils/formatter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProgressBar = ({ currentStep }) => {
  return (
    <motion.div className="mb-8" variants={itemVariants}>
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full font-medium flex items-center justify-center ${
                  currentStep >= step.number
                    ? "bg-green-500 text-white"
                    : "bg-gray-400/50 text-gray-200"
                } transition-colors duration-300`}
              >
                {step.number}
              </div>
              <span className="text-xs mt-2 text-gray-300 hidden sm:block">
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  currentStep > step.number ? "bg-green-500" : "bg-gray-700"
                } transition-colors duration-300`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgressBar;
