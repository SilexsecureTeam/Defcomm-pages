// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Folder,
  Wifi,
  Battery,
  Bluetooth,
  Shield,
  Shuffle,
  RotateCcw,
  Triangle,
  Users,
  Settings,
  Radio,
  FolderOpen,
  Grid3X3,
  ToggleLeft,
} from "lucide-react"; // Added icons for tabs
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
import { useState, useEffect } from "react"; // For state and real-time updates

const textVariants = {
  hidden: { opacity: 0, y: 40 },
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

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState("21:00"); // Set to 09:00 PM WAT initially
  const [currentDate, setCurrentDate] = useState("Sun, 10 August 2025"); // Set to today's date
  const [activeTab, setActiveTab] = useState("default"); // Tracks clicked tab

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
    const interval = setInterval(updateDateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  // Tab content renderer
  const renderTabContent = () => {
    switch (activeTab) {
      case "messages":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Category Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={cat} alt="vategory" className="w-3 h-3" />
                <span className="text-white text-sm">Category</span>
              </div>
              <button className="text-white text-sm underline">Show All</button>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-[#C6FC2B] rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat1} alt="icon" className="w-6 h-6 text-black" />
                {/* <Settings /> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat2} alt="icon" className="w-6 h-6 text-black" />
                {/* <Radio className="w-8 h-8 text-black" /> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat3} alt="icon" className="w-6 h-6 text-black" />
                {/* <div className="flex flex-col items-center">
                  <Folder className="w-6 h-6 text-black" />
                  <FolderOpen className="w-4 h-4 text-black -mt-1" />
                </div> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat4} alt="icon" className="w-6 h-6 text-black" />
                {/* <Shield className="w-8 h-8 text-black" /> */}
              </div>
            </div>

            {/* Meeting Notice */}
            <div className="bg-[#DDF2AB] rounded-lg p-4 mb-6">
              <h3 className="text-black text-sm font-semibold mb-2">
                Defcomm Meet Defence Signal
              </h3>
              <p className="text-[#484A4B] text-xs">
                The Defcomm team is scheduled to meet with the Army Signal
                Intelligence Corps on April 22, 2025, at the Signal Office in
                Lagos.
              </p>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </motion.div>
        );
      case "calls":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="calls-section"
          >
            {/* Recreate Figma calls page */}
            <p className="text-lime-300">Recent Secure Calls</p>
            <ul>
              <li>Call to HQ - 10:45 AM</li>
              <li>Missed call from Intelligence</li>
            </ul>
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
            {/* Recreate Figma emails page */}
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
            {/* Recreate Figma files page */}
            <p className="text-lime-300">Secure File Storage</p>
            <ul>
              <li>Report.pdf - 2MB</li>
              <li>SignalMap.jpg - 500KB</li>
            </ul>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Category Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={cat} alt="vategory" className="w-3 h-3" />
                <span className="text-white text-sm">Category</span>
              </div>
              <button className="text-white text-sm underline">Show All</button>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-[#C6FC2B] rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat1} alt="icon" className="w-6 h-6 text-black" />
                {/* <Settings /> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat2} alt="icon" className="w-6 h-6 text-black" />
                {/* <Radio className="w-8 h-8 text-black" /> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat3} alt="icon" className="w-6 h-6 text-black" />
                {/* <div className="flex flex-col items-center">
                  <Folder className="w-6 h-6 text-black" />
                  <FolderOpen className="w-4 h-4 text-black -mt-1" />
                </div> */}
              </div>
              <div className="bg-white rounded-lg p-2.5 flex items-center justify-center">
                <img src={cat4} alt="icon" className="w-6 h-6 text-black" />
                {/* <Shield className="w-8 h-8 text-black" /> */}
              </div>
            </div>

            {/* Meeting Notice */}
            <div className="bg-[#DDF2AB] rounded-lg p-4 mb-6">
              <h3 className="text-black text-sm font-semibold mb-2">
                Defcomm Meet Defence Signal
              </h3>
              <p className="text-[#484A4B] text-xs">
                The Defcomm team is scheduled to meet with the Army Signal
                Intelligence Corps on April 22, 2025, at the Signal Office in
                Lagos.
              </p>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section className="min-h-[500px] bg-limeAccent pb-8 text-black relative overflow-hidden px-6">
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
            className="sm:inline-flex items-center gap-2 text-sm px-4 py-2 hidden rounded-full bg-[#36460A] text-white font-medium "
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

        {/* RIGHT PHONE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="phone-frame relative max-w-[320px] max-h-[550px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="screen bg-gradient-to-t from-[#36460A] to-black text-white rounded-[2rem] h-full overflow-hidden flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 py-2 text-sm">
                <span className="font-medium">{currentTime}</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-sm"></div>
                  </div>
                  <div className="text-white">✱</div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-6 h-3 bg-white rounded-sm"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-4 pt-4 flex-1 overflow-y-auto">
                {/* Top Section */}
                <div className="flex space-x-3 mb-4">
                  {/* Secure Mode Widget */}
                  <div className="bg-[#36460A] rounded-lg p-4 flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <img src={scan} alt="scan-img" />
                      <span className="text-[#89AF20] text-[10px] uppercase tracking-wide">
                        SECURE MODE ACTIVE
                      </span>
                    </div>
                    <div className="text-white text-3xl font-light mb-1">
                      {currentTime}
                    </div>
                    <div className="text-white text-xs">{currentDate}</div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col space-y-3">
                    {/* Icon Grid */}
                    <div className="bg-[#36460A] rounded-lg p-3 grid grid-cols-2 gap-2">
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

                    {/* SecureGroup Widget */}
                    <div className="bg-white rounded-lg py-2 px-1 flex items-center space-x-1">
                      <Users className="w-3 h-3 text-black" />
                      <span className="text-black text-[10px] font-medium">
                        SecureGroup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secure Communications Section */}
                <div className="mb-6">
                  <h2 className="text-white text-xs font-medium mb-3">
                    SECURE COMMUNICATIONS
                  </h2>
                  <div className="flex space-x-3 py-2 items-center overflow-x-auto bg-black border-l-4 border-l-[#759719]">
                    {/* <div className="w-2 h-16 bg-green-500 rounded-full"></div> */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setActiveTab("messages")}
                        className={` flex items-center justify-center ${
                          activeTab === "messages" ? "ring-0 ring-lime-400" : ""
                        }`}
                      >
                        <img
                          src={sec1}
                          alt="sec"
                          className="w-10 h-10 ml-2.5 text-white"
                        />
                        {/* <MessageCircle  /> */}
                      </button>
                      <button
                        onClick={() => setActiveTab("calls")}
                        className={` flex items-center justify-center ${
                          activeTab === "calls" ? "ring-0 ring-lime-400" : ""
                        }`}
                      >
                        <img
                          src={sec2}
                          alt="sec"
                          className="w-10 h-10 text-white"
                        />
                        {/* <Phone className="w-6 h-6 text-white" /> */}
                      </button>
                      <button
                        onClick={() => setActiveTab("emails")}
                        className={` flex items-center justify-center ${
                          activeTab === "emails" ? "ring-0 ring-lime-400" : ""
                        }`}
                      >
                        <img
                          src={sec3}
                          alt="sec"
                          className="w-10 h-10 text-white"
                        />
                        {/* <Triangle className="w-6 h-6 text-white" /> */}
                      </button>
                      <button
                        onClick={() => setActiveTab("files")}
                        className={` flex items-center justify-center ${
                          activeTab === "files" ? "ring-0 ring-lime-400" : ""
                        }`}
                      >
                        <img
                          src={sec4}
                          alt="sec"
                          className="w-10 h-10 text-white"
                        />
                        {/* <Mail className="w-6 h-6 text-white" /> */}
                      </button>
                      <img
                        src={sec5}
                        alt="sec"
                        className="w-10 h-10 text-white"
                      />
                      {/* <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded opacity-50"></div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}

                {/* Bottom Navigation */}
                <div className=" pb-4 flex space-x-3 mt-4">
                  <div className="bg-gray-900 rounded-lg p-2 flex items-center space-x-2 flex-1">
                    <span className="text-white text-[9px]">SECURE MODE</span>
                    <ToggleLeft className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-2 flex items-center space-x-2 flex-1">
                    <Grid3X3 className="w-5 h-5 text-white" />
                    <span className="text-white text-[9px]">
                      ALL APPLICATIONS
                    </span>
                  </div>
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
