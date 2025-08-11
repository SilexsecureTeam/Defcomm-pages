/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Folder,
  Users,
  Grid3X3,
  ToggleLeft,
  MessageSquare,
  FileText,
  User,
  CheckCircle,
  AlertTriangle,
  X,
  Volume2,
  MicOff,
  UserPlus,
  Settings,
  Shuffle,
  RotateCcw,
  Bluetooth,
  MoreVertical, // Added for SecureMessagingApp
  Paperclip, // Added
  Camera, // Added
  Send, // Added
  Shield, // Added
} from "lucide-react";
import scan from "../../assets/scan.png";
import sec1 from "../../assets/sec1.png";
import sec2 from "../../assets/sec2.png";
import sec3 from "../../assets/sec3.png";
import sec4 from "../../assets/sec4.png";
import sec5 from "../../assets/sec5.png";
import cat from "../../assets/category.png";
import cat1 from "../../assets/cat1.svg";
import cat2 from "../../assets/cat2.svg";
import cat3 from "../../assets/cat3.svg";
import cat4 from "../../assets/cat4.png";
import group from "../../assets/group.png";
import call from "../../assets/call.svg";
import call1 from "../../assets/call1.png";
import call2 from "../../assets/call2.png";
import acall from "../../assets/acall.png";
import wifi from "../../assets/wifi.png";
import load from "../../assets/load.png";
import de from "../../assets/de.png";
import check1 from "../../assets/check1.png";
import check2 from "../../assets/check2.png";
import { useState, useEffect } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const slideVariants = {
  enter: { x: 100, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState("21:00");
  const [currentDate, setCurrentDate] = useState("Sun, 10 August 2025");
  const [activeTab, setActiveTab] = useState("default");
  const [messageInput, setMessageInput] = useState(""); // Added for SecureMessagingApp

  // Real-time date/time update
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const date = now
        .toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .replace(/,/g, "");
      setCurrentTime(time);
      setCurrentDate(date);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-transition for category1-first to category1-second
  useEffect(() => {
    let timer;
    if (activeTab === "category1-first") {
      timer = setTimeout(() => {
        setActiveTab("category1-second");
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [activeTab]);

  const slides = [
    {
      title: "Defcomm Meet Defence Signal",
      description:
        "The Defcomm team is scheduled to meet with the Army Signal Intelligence Corps on April 22, 2025, at the Signal Office in Lagos.",
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

  const recentCalls = [
    { name: "Boženka Maxxxxx", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Piotrowski", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Eurydyka", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Kowalski", time: "Yesterday", avatar: "bg-gray-600" },
    { name: "Boženka Malina", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Piotrowski", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Eurydyka", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Kowalski", time: "01 Feb", avatar: "bg-gray-600" },
  ];

  // Reusable Call Header for category1-first and category1-second
  const CallHeader = () => (
    <div className="mb-4">
      <div className="flex items-center justify-between bg-[#89AF20] rounded-full px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <img src={call1} alt="call" className="w-4 h-4 text-black" />
          <span className="text-black text-xs font-medium">
            Secure Calling....
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-black text-xs font-medium">0.00</span>
          <img src={call2} alt="call" className="w-4 h-4 text-black" />
        </div>
      </div>
      <div className="flex items-center mt-3">
        <img src={acall} alt="call" className="w-12 h-12" />
        <span className="text-white text-sm font-medium">Col Adamu John</span>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "default":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={cat} alt="category" className="w-2.5 h-2.5" />
                <span className="text-white text-xs">Category</span>
              </div>
              <button className="text-white text-xs underline">Show All</button>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div
                className="bg-[#C6FC2B] rounded-lg px-2.5 py-2 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveTab("category1-first")}
              >
                <img src={cat1} alt="icon" className="w-6 h-6 text-black" />
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat2} alt="icon" className="w-6 h-6 text-black" />
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat3} alt="icon" className="w-6 h-6 text-black" />
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat4} alt="icon" className="w-6 h-6 text-black" />
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
                className="bg-[#DDF2AB] rounded-lg p-4"
              >
                <h3 className="text-black text-xs font-semibold mb-2">
                  {slides[0].title}
                </h3>
                <p className="text-[#484A4B] text-xs">
                  {slides[0].description}
                </p>
              </motion.div>
            </div>
            <div className="flex justify-center space-x-2 mb-6">
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
      case "messages":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col text-white"
          >
            {/* Messages Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center justify-between space-x-3">
                <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center">
                  <img src={group} alt="avatar" className="w-full h-full" />
                </div>
                <div>
                  <h2 className="text-white text-sm font-medium">
                    Col Adamu j
                  </h2>
                  <p className="text-gray-400 text-sm">Class OPS</p>
                </div>
              </div>
              <img src={call} alt="avatar" className="w-6 h-6" />
            </div>

            {/* Secure Messaging Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-black border-l-4 border-l-[#759719]">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab("default")}
                  className="text-white text-sm"
                >
                  SECURE MESSAGING
                </button>
              </div>
              <MoreVertical className="w-4 h-4 text-[#759719]" />
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* Capt Amos SA messages */}
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  <img
                    src={acall}
                    alt="avatar"
                    className="w-12 h-12  rounded-full"
                  />
                  <span className="text-gray-300 text-sm">Capt Amos SA</span>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#36460A] rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                    <div className="text-white text-[12px] leading-relaxed">
                      Defcomm App secures all communications with military-grade
                      encryption, ensuring your messages stay private.
                    </div>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-green-300 text-xs">19:58</span>
                      <img src={check1} alt="avatar" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#36460A] rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                    <div className="text-white text-[12px] leading-relaxed">
                      Trusted by defense teams for seamless, secure
                      collaboration.
                    </div>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-green-300 text-xs">19:58</span>
                      <img src={check1} alt="avatar" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Odeusz messages */}
              <div className="space-y-3 mt-8">
                <div className="flex items-center justify-end space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={group} alt="avatar" className="w-full h-full" />
                  </div>
                  <span className="text-gray-300 text-sm">Odeusz Pxs</span>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                    <div className="text-black text-[12px] leading-relaxed">
                      This app is a game-changer for secure comms!
                    </div>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-gray-600 text-xs">19:59</span>
                      <img src={check2} alt="avatar" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                    <div className="text-black text-[12px] leading-relaxed">
                      Just tested the file sharing feature.
                    </div>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-gray-600 text-xs">19:59</span>
                      <img src={check2} alt="avatar" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                    <div className="text-black text-[12px] leading-relaxed">
                      Super fast and secure—perfect for our field ops.
                    </div>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-gray-600 text-xs">19:59</span>
                      <img src={check2} alt="avatar" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="  sticky bottom-1 px-4 ">
              <div className="flex items-center justify-center space-x-0">
                <div className=" max-w-[210px] mx-auto flex items-center bg-gray-800 rounded-l-full px-4 py-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className=" bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                    placeholder="Type a message..."
                  />
                  <div className="flex items-center space-x-2 ml-0">
                    <Paperclip className="w-3 h-3 text-gray-400" />
                    <Camera className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <button className="bg-[#719709] rounded-r-full p-3 hover:bg-green-600 transition-colors">
                  <Send className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      case "calls":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-white"
          >
            <div className="mt-4">
              <h2 className="text-white text-base font-medium mb-3">
                Recent Calls
              </h2>
              <div className="space-y-3">
                {recentCalls.map((call, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 ${call.avatar} rounded-full flex items-center justify-center`}
                      >
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white text-sm">{call.name}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{call.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case "emails":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="emails-section"
          >
            <p className="text-lime-300">Encrypted Emails Inbox</p>
            <ul>
              <li>Subject: Mission Update</li>
              <li>From: defcomm@army.mil</li>
            </ul>
          </motion.div>
        );
      case "files":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="files-section"
          >
            <p className="text-lime-300">Secure File Storage</p>
            <ul>
              <li>Report.pdf - 2MB</li>
              <li>SignalMap.jpg - 500KB</li>
            </ul>
          </motion.div>
        );
      case "securegroup":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-white"
          >
            <div className="space-y-3">
              <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      Invitation to Join Defcomm
                    </h3>
                    <p className="text-gray-300 text-xs">
                      Opera Passage station reserved successfully.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      Meeting Invitation
                    </h3>
                    <p className="text-gray-300 text-xs">
                      You are invited to join a meeting. If the meeting details
                      below
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      Charger is under maintenance
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Please select another charger.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/80 opacity-0 rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      Charger is under maintenance
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Please select another charger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "category1-first":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-white flex-1 flex flex-col"
          >
            <CallHeader />
            <div className="mt-4">
              <div className="bg-[#36460A] mx-auto w-fit rounded-lg px-3 py-2 flex items-center gap-2">
                <img src={wifi} alt="wifi-image" />
                <span className="text-white text-xs font-medium">
                  Checking call...
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <img
                src={load}
                alt="load-image"
                className="animate-spin"
                style={{ animation: "spin 2s linear infinite" }}
              />
              <p className="text-gray-300 text-xs text-center">
                Initiating End to end Encryption
              </p>
            </div>
            <div className="flex flex-col items-center pb-4 pt-8">
              <p className="text-white text-xs">Secured by</p>
              <img src={de} alt="defcomm-logo" className="mx-auto" />
            </div>
          </motion.div>
        );
      case "category1-second":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-white flex-1 flex flex-col"
          >
            <CallHeader />
            <div className="mt-4">
              <div className="bg-[#36460A] mx-auto w-fit rounded-lg px-3 py-2 flex items-center gap-2">
                <img src={wifi} alt="wifi-image" />
                <span className="text-white text-xs font-medium">
                  Checking call...
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-white rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
                  <Phone className="w-4 h-4 text-black" />
                  <span className="text-black text-xs font-medium">
                    Receiver
                  </span>
                </button>
                <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
                  <Volume2 className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">
                    Speaker
                  </span>
                </button>
                <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
                  <MicOff className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">Mute</span>
                </button>
                <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
                  <UserPlus className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">
                    New Call
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center pb-4 pt-8">
              <p className="text-white text-xs">Secured by</p>
              <img src={de} alt="defcomm-logo" className="mx-auto" />
            </div>
            <button
              onClick={() => setActiveTab("default")}
              className="w-full bg-red-600 hover:bg-red-700 rounded-full py-2 mb-10 flex items-center justify-center"
            >
              <span className="text-white text-sm font-medium">End call</span>
            </button>
            <button className="w-full opacity-0 bg-red-600 hover:bg-red-700 rounded-full py-2 mb-10 flex items-center justify-center">
              <span className="text-white text-sm font-medium">End call</span>
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-[500px] bg-limeAccent pb-8 text-black relative overflow-hidden px-6">
      <style>
        {`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
      <div className="w-full max-w-peak mx-auto pt-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.span
            variants={textVariants}
            custom={0}
            className="sm:inline-flex items-center gap-2 text-sm px-4 py-2 hidden rounded-full bg-[#36460A] text-white font-medium"
          >
            <LockIcon className="w-4 h-4" />
            Military-Grade Security
          </motion.span>
          <motion.h1
            variants={textVariants}
            custom={1}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Secure Your <br />
            <span className="text-[#5a6834]">Digital Future</span>
          </motion.h1>
          <motion.span
            variants={textVariants}
            custom={0}
            className="inline-flex sm:hidden items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#36460A] text-white font-medium"
          >
            <LockIcon className="w-4 h-4" />
            Military-Grade Security
          </motion.span>
          <motion.p
            variants={textVariants}
            custom={2}
            className="text-[#393D1C] max-w-xl"
          >
            Trusted by leading enterprises and security-first organizations.
            Defcomm delivers encryption and communication tools built to protect
            what matters most.
          </motion.p>
          <motion.div
            variants={textVariants}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#1f2e12] to-[#3d5d1c] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-gray-300 hover:border-black text-[#1a1a1a] font-medium px-6 py-3 rounded-xl"
            >
              Watch Video
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT PHONE MOCKUP - iPhone 14 Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="phone-container relative">
            {/* iPhone 14 Frame */}
            <div className="phone-frame relative max-w-[290px] h-[510px] bg-gray-900 rounded-[35px] p-1 shadow-2xl border-2 border-gray-800">
              {/* Volume Buttons (Left Side) */}
              <div className="absolute -left-1 top-20">
                <div className="w-1 h-8 bg-gray-700 rounded-l-full"></div>
              </div>
              <div className="absolute -left-1 top-32">
                <div className="w-1 h-12 bg-gray-700 rounded-l-full"></div>
              </div>
              {/* Power Button (Right Side) */}
              <div className="absolute -right-1 top-28">
                <div className="w-1 h-12 bg-gray-700 rounded-r-full"></div>
              </div>
              {/* Speaker Grille (Bottom) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-gray-600 rounded-full"
                  ></div>
                ))}
              </div>
              {/* Screen Container */}
              <div className="screen bg-gradient-to-t from-[#36460A] to-black text-white rounded-[30px] h-full overflow-hidden flex flex-col relative">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                </div>
                {/* Enhanced Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 pt-10 text-xs bg-transparent relative z-20">
                  <div className="flex items-center space-x-1 font-semibold text-white">
                    <span>{currentTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <svg
                      className="w-2.5 h-2.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75z" />
                    </svg>
                    <svg
                      className="w-2.5 h-2.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-13.54-6.93-8.32-14.96z" />
                    </svg>
                    <svg
                      className="w-2.5 h-2.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                    </svg>
                    <div className="flex space-x-0.5">
                      <div className="w-0.5 h-2 bg-white rounded-full"></div>
                      <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
                      <div className="w-0.5 h-3 bg-white rounded-full"></div>
                      <div className="w-0.5 h-3.5 bg-white rounded-full"></div>
                    </div>
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.65-4.34-1.65-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                    </svg>
                    <span className="text-xs font-semibold">87%</span>
                    <div className="relative flex items-center">
                      <div className="w-5 h-2.5 border border-white rounded-sm bg-transparent relative">
                        <div className="w-4 h-1.5 bg-green-500 rounded-sm absolute top-0 left-0 m-0.5"></div>
                      </div>
                      <div className="w-0.5 h-1.5 bg-white rounded-r ml-0.5"></div>
                      <svg
                        className="w-2 h-2 text-green-400 absolute -right-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Main Content */}
                <div className="px-4 pt-2 flex-1 overflow-y-auto relative">
                  {activeTab === "default" && (
                    <div className="flex space-x-3 mb-4">
                      <div className="bg-[#36460A] rounded-lg py-4 px-2 flex-1">
                        <div className="flex items-center space-x-1 mb-2">
                          <img src={scan} alt="scan-img" />
                          <span className="text-[#89AF20] text-[9px] uppercase tracking-wide">
                            SECURE MODE ACTIVE
                          </span>
                        </div>
                        <div className="text-white text-3xl font-light mb-1">
                          {currentTime}
                        </div>
                        <div className="text-white text-xs">{currentDate}</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="bg-[#36460A] rounded-lg px-3 py-2 grid grid-cols-2 gap-2">
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <div className="text-white text-xs">⋯</div>
                          </div>
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <Bluetooth className="w-3 h-3 text-white" />
                          </div>
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <Shuffle className="w-3 h-3 text-white" />
                          </div>
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <RotateCcw className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveTab("securegroup")}
                          className="bg-white rounded-lg py-2 px-[1px] flex items-center space-x-1"
                        >
                          <Users className="w-3 h-3 text-black" />
                          <span className="text-black text-[10px] font-normal">
                            SecureGroup
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                  {activeTab === "calls" && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="grid grid-cols-3 gap-1 w-4 h-4">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-full w-1 h-1"
                            ></div>
                          ))}
                        </div>
                        <div>
                          <h1 className="text-sm font-medium">Col Adamu j</h1>
                          <p className="text-gray-400 text-xs">Class OPS</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-[#36460A] rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg font-light">+</span>
                      </button>
                    </div>
                  )}
                  {activeTab === "securegroup" && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="grid grid-cols-3 gap-1 w-4 h-4">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-full w-1 h-1"
                            ></div>
                          ))}
                        </div>
                        <div>
                          <h1 className="text-sm font-medium">Col Adamu J</h1>
                          <p className="text-gray-400 text-xs">Class OPS</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <img
                          src={group}
                          alt="avatar"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                  {(activeTab === "default" ||
                    activeTab === "calls" ||
                    activeTab === "emails" ||
                    activeTab === "files" ||
                    activeTab === "securegroup") && (
                    <div className="mb-4">
                      <h2 className="text-white text-xs font-medium mb-2">
                        SECURE COMMUNICATIONS
                      </h2>
                      <div className="flex space-x-6 py-2 items-center overflow-x-auto bg-black border-l-4 border-l-[#759719]">
                        <div className="flex space-x-2 overflow-x-auto">
                          <button
                            onClick={() => setActiveTab("messages")}
                            className={`flex items-center justify-center ${
                              activeTab === "messages"
                                ? "ring-0 ring-lime-400"
                                : ""
                            }`}
                          >
                            <img
                              src={sec1}
                              alt="sec"
                              className="w-10 h-10 ml-2.5 text-white"
                            />
                          </button>
                          <button
                            onClick={() => setActiveTab("calls")}
                            className={`flex items-center justify-center ${
                              activeTab === "calls"
                                ? "ring-0 ring-lime-400"
                                : ""
                            }`}
                          >
                            <img
                              src={sec2}
                              alt="sec"
                              className="w-10 h-10 text-white"
                            />
                          </button>
                          <button
                            onClick={() => setActiveTab("emails")}
                            className={`flex items-center justify-center ${
                              activeTab === "emails"
                                ? "ring-0 ring-lime-400"
                                : ""
                            }`}
                          >
                            <img
                              src={sec3}
                              alt="sec"
                              className="w-10 h-10 text-white"
                            />
                          </button>
                          <button
                            onClick={() => setActiveTab("files")}
                            className={`flex items-center justify-center ${
                              activeTab === "files"
                                ? "ring-0 ring-lime-400"
                                : ""
                            }`}
                          >
                            <img
                              src={sec4}
                              alt="sec"
                              className="w-10 h-10 text-white"
                            />
                          </button>
                          <img
                            src={sec5}
                            alt="sec"
                            className="w-10 h-10 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {renderTabContent()}
                  {activeTab === "default" ? (
                    <div className="pb-4 flex space-x-3 mt-4">
                      <div className="bg-gray-900 rounded-lg p-2 flex items-center space-x-1 w-fit">
                        <span className="text-white text-[9px]">
                          SECURE MODE
                        </span>
                        <ToggleLeft className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="bg-gray-800 rounded-lg p-2 flex items-center space-x-1 flex-1">
                        <Grid3X3 className="w-4 h-4 text-white" />
                        <span className="text-white text-[9px]">
                          ALL APPLICATIONS
                        </span>
                      </div>
                    </div>
                  ) : activeTab === "calls" ? (
                    <div className="sticky -mx-4 bottom-0 left-0 right-0 bg-black border-t border-gray-800">
                      <div className="flex justify-around py-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-6 h-6 relative">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-4 h-4 text-white"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                              />
                              <line
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <line
                                x1="12"
                                y1="2"
                                x2="12"
                                y2="22"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Settings className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                {/* Home Indicator (iPhone bottom swipe bar) */}
                <div className="flex justify-center pb-2">
                  <div className="w-32 h-1 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const LockIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m9 0h-9m9 0H18a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h1.5"
    />
  </svg>
);
