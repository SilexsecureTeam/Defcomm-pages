import React from "react";
import bg from "../../assets/data-banner.png";
import data_img from "../../assets/data-img.png";
import { motion } from "framer-motion";

const DataPrivacySection = () => {
  return (
    <div
      className="w-full min-h-[600px] flex p-6 py-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white h-max p-2 rounded-2xl shadow-xl border max-w-96 hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Icon Network */}
        <div className="bg-gray-100 p-8 rounded-xl relative">
          <img
            src={data_img}
            alt="data"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="mt-4 px-2 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Secure Your Data and Privacy
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Keep full ownership of your email data. Our advanced security
            protocols ensure your information remains safe and confidential.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DataPrivacySection;
