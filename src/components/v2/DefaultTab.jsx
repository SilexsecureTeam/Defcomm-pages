/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import cat from "../../assets/category.png";
import cat1 from "../../assets/cat1.svg";
import connect from "../../assets/connect.png";
import cat4 from "../../assets/logo-icon.png";

import comm from "../../assets/walkie-talkie.png";

const slideVariants = {
  enter: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export default function DefaultTab({ setActiveTab, activeTab }) {
  const slides = [
    {
      title: "Defcomm Meet Defence Signal",
      description:
        "The Defcomm team is scheduled to meet with the Army Signal.....",
    },
    {
      title: "Defcomm Strategy Session",
      description:
        "Join the strategy session with the Defence HQ on May 15, 2025, at the Main Conference Room in Abuja.",
    },
    {
      title: "Defcomm Tech Review",
      description:
        "Technical review meeting with the Signal Corps on June 5, 2025, at the Tech Lab in Kaduna.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-center mb-4 inter">
        <div className="flex items-center space-x-2">
          <img src={cat} alt="category" className="w-2.5 h-2.5" />
          <span className="text-white text-xs">Category</span>
        </div>
        <button className="text-white text-xs underline">Show All</button>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-4">
        <div
          className={`py-2 flex items-center justify-center cursor-pointer hover:bg-[#C6FC2B] ${
            activeTab === "category1-first" ? "bg-[#C6FC2B]" : "bg-white"
          }`}
          onClick={() => setActiveTab("category1-first")}
        >
          <img src={cat1} alt="icon" className="w-6 h-6 text-black" />
        </div>
        <div
          className={`px-2.5 py-1.5 flex items-center justify-center cursor-pointer hover:bg-[#C6FC2B] ${
            activeTab === "voicechat" ? "bg-[#C6FC2B]" : "bg-white"
          }`}
          onClick={() => setActiveTab("voicechat")} // Link cat2 to VoiceChatInterface
        >
          <img
            src={comm}
            alt="icon"
            className="w-6 h-6 text-black brightness-0"
          />
        </div>
        <div className="bg-white px-2.5 py-1.5 flex items-center justify-center hover:bg-[#C6FC2B] cursor-pointer">
          <img
            src={connect}
            alt="icon"
            className="w-6 h-6 text-black brightness-0"
          />
        </div>
        <div className="bg-white px-2.5 py-1.5 flex items-center justify-center hover:bg-[#C6FC2B] cursor-pointer">
          <img
            src={cat4}
            alt="icon"
            className="w-6 h-6 text-black brightness-0"
          />
        </div>
      </div>
      <div className="relative overflow-hidden mb-6">
        <motion.div
          key={slides[0].title}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#DDF2AB] p-4"
        >
          <h3 className="text-black text-xs font-semibold mb-2">
            {slides[0].title}
          </h3>
          <p className="text-[#484A4B] text-xs">{slides[0].description}</p>
        </motion.div>
      </div>
      <div className="justify-center hidden space-x-2 mb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? "bg-green-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
