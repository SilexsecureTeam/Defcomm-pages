import React from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import software from "../../assets/software.png";
import soft from "../../assets/soft.png";
import soft1 from "../../assets/soft1.png";
import soft2 from "../../assets/soft2.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: soft,
    title: "Future-Proof Technology",
    text: "Constant updates to stay ahead of evolving threats, including quantum computing vulnerabilities.",
  },
  {
    id: 2,
    image: soft1,
    title: "Trusted by Defense Agencies",
    text: "Our solutions are  design and deployed for military and government organisations in Africa.",
  },
  {
    id: 3,
    image: soft2,
    title: "Unparalleled Security Standards",
    text: "Developed with input from top cybersecurity experts and defense specialists.",
  },
];

const cards = [
  {
    id: 1,
    title: "Shield Messaging",
    text: "DefComm messages are protected by default with advanced shielding to prevent attacks like shoulder surfing. Users can set custom gestures to control how messages are revealed such as drag to read or push to read adding a physical  layer of protection against unauthorised viewing.",
    bg: "bg-[#121417] ",
  },
  {
    id: 2,
    title: "iSurvive",
    text: "iSurvive is an offline AI system designed to support military personnel during operations. It provides on-demand access to critical resources, including medical guides, facility locations, and operational protocols all without needing an internet connection. When an officer is in danger, iSurvive activates automated voice prompts with step-by-step instructions. Its advanced coordination system can guide the personnel to the nearest safe house or military facility, offering real-time support in high-risk situations.",
    bg: "bg-gradient-to-r from-[#121417] to-[#36460A]",
  },
  {
    id: 3,
    title: "Screenshot Protection",
    text: "DefComm’s screenshot protection gives admins the ability to block screenshots for enhanced internal security. If a screenshot is attempted, the user is immediately notified. Screen recording is disabled by default. If an external device is used to capture the screen, the system’s AI automatically activates a dynamic watermark overlay, making the content unreadable and deterring unauthorised capture.",
    List: "Hardware-anchored root of trust \nTamper-evident bootloader with fail-safe rollback\nRuntime integrity checks to detect injection or manipulation",
    bg: "bg-[#36460A]",
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Software = () => {
  return (
    <div className="w-full">
      <div className="bg-limeAccent w-full">
        <div className="max-w-peak mx-auto py-10 flex justify-between flex-col md:flex-row ">
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="flex space-x-2 bg-[#36460A] rounded-full w-fit  py-2 px-4 mb-16 cursor-pointer">
              <LockKeyhole className="w-4 h-4 text-white" />
              <h1 className="text-sm text-[#F0F2F5] uppercase tracking-wide cursor-pointer">
                Military-Grade Security
              </h1>
            </div>
            <div className="">
              <div className="md:text-5xl text-3xl max-w-[590px] font-bold text-[#393D1C] ">
                Core Softwares Features{" "}
                <span className="text-[#5a6834] font-semibold">
                  On Defcomm Apps
                </span>
              </div>
              <p className="text-[#393D1C] text-lg max-w-[560px] mt-8">
                End-to-end encryption with user-held keys meaning only the
                sender and recipient can access message content. No one in
                between (not even DefComm’s servers) can decrypt it.
              </p>
              <div className="flex space-x-4 mt-8">
                <button className="bg-gradient-to-r px-6 text-lg text-white font-medium rounded-xl py-4 from-[#36460A] to-black">
                  Get started
                  <ArrowRight className="inline ml-2 w-6 h-8" />
                </button>
                <button className="bg-white px-6 text-[#393D1C] text-lg font-medium rounded-xl py-4 ">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="opacity-0">
              <div className="flex space-x-4 mt-8">
                <button className="bg-gradient-to-r px-6 text-lg text-white font-medium rounded-xl py-4 from-[#36460A] to-black">
                  Get started
                  <ArrowRight className="inline ml-2 w-6 h-8" />
                </button>
                <button className="bg-white px-6 text-[#393D1C] text-lg font-medium rounded-xl py-4 ">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={software}
              alt="software"
              className="w-full md:w-auto max-h-[450px] mx-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Animated Second Section */}
      <div className="bg-[#1F1E24] py-16">
        <div className="max-w-peak mx-auto flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-[#C6FC2B] rounded-full"></div>
              <h2 className="text-sm font-semibold text-white tracking-widest">
                WHY CHOOSE US
              </h2>
            </div>
            <p className="max-w-[380px] mt-4 text-white text-4xl">
              We take{" "}
              <span className="text-[#6C6C81]">
                your Comms to the next level
              </span>
            </p>
          </div>
          <div className="grid w-full md:w-1/2 gap-4 px-6">
            {data.map((item) => (
              <motion.div
                key={item.id}
                className="bg-[#131216] rounded-2xl p-6 shadow-md overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeVariants}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 mb-2 object-cover"
                />
                <div className="">
                  <h3 className="text-xl text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Section (Fully Animated) */}
      <motion.section
        className="bg-white py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <div className="p-6 bg-screen min-h-screen">
          <motion.h1
            className="text-3xl font-bold text-center text-black mb-2"
            variants={fadeVariants}
          >
            Zero Compromise on Privacy & Security
          </motion.h1>
          <motion.p
            className="max-w-[830px] mx-auto text-center text-lg mb-8"
            variants={fadeVariants}
          >
            We refuse to choose between convenience and safety. Our technology
            delivers both—end-to-end encryption, strict data minimalism, and
            uncompromising transparency—so you never have to sacrifice one for
            the other.
          </motion.p>
          <div className="max-w-peak mx-auto space-y-6">
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              variants={fadeVariants}
            >
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  className={`flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md ${card.bg}`}
                  variants={fadeVariants}
                >
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-[15px]">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row gap-4"
              variants={fadeVariants}
            >
              <motion.div
                className="flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-l from-[#102735] to-[#B87944]"
                variants={fadeVariants}
              >
                <h2 className="text-2xl font-bold mb-2">
                  Dynamic Watermark Security
                </h2>
                <p className="mb-1 text-[15px]">
                  Every shared document or image is stamped with a unique,
                  user-specific watermark. This includes identifiers like
                  usernames, timestamps, and session IDs making leaks traceable.
                  The watermark adjusts in size and position based on screen
                  size, zoom level, or attempted capture maintaining visibility
                  under all conditions.Every document shared with watermark
                  protection is logged with full tracking of who accessed,
                  viewed, or attempted to capture it.
                </p>
              </motion.div>
              <motion.div
                className="flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-r from-[#102735] to-[#B87944]"
                variants={fadeVariants}
              >
                <h2 className="text-2xl font-bold mb-2">
                  Encrypted File Sharing Peripheral Lockdown
                </h2>
                <p className="mb-1 text-[15px]">
                  DefComm allows fully encrypted file sharing with total user
                  control. The original sender retains ownership and can grant
                  or revoke access at any time. Files are protected under the
                  sender’s keychain, and an advanced logging system tracks every
                  share action—ensuring transparency and security with every
                  transfer.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="p-6 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-r from-[#121417] to-[#00313A]"
              variants={fadeVariants}
            >
              <h2 className="text-2xl font-bold mb-2">
                Operating System Development & Secure Computing
              </h2>
              <p className="mb-2 text-[15px]">
                End-to-end encrypted to keep conversations private.All calls are
                end-to-end encrypted to ensure privacy. When a user initiates a
                call, DefComm’s encryption protocol instantly verifies the
                identity of both parties. If authentication is successful, a
                unique activation key is exchanged before the call
                begins—ensuring that only verified users can connect and
                communicate securely.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Software;
