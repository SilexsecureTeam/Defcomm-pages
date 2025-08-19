/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Bluetooth,
  Shuffle,
  RotateCcw,
  Users,
  FileText,
  Phone,
  User,
  Settings,
  ToggleLeft, // Added ToggleLeft import
  Grid3X3,
} from "lucide-react";
import scan from "../../assets/scan.png";
import group from "../../assets/group.png";
import sec1 from "../../assets/sec1.png";
import sec2 from "../../assets/sec2.png";
import sec3 from "../../assets/sec3.png";
import sec4 from "../../assets/sec4.png";
import sec5 from "../../assets/sec5.png";
import DefaultTab from "./DefaultTab";
import MessagesTab from "./MessagesTab";
import CallsTab from "./CallsTab";
import EmailsTab from "./EmailsTab";
import FilesTab from "./FilesTab";
import SecureGroupTab from "./SecureGroupTab";
import CategoryFirstTab from "./CategoryFirstTab";
import CategorySecondTab from "./CategorySecondTab";

export default function PhoneMockup({
  activeTab,
  setActiveTab,
  currentTime,
  currentDate,
  messageInput,
  setMessageInput,
}) {
  const tabs = [
    { id: "default", icon: sec5, label: "Home" },
    { id: "messages", icon: sec1, label: "Messages" },
      { id: "category1-first", icon: sec5, label: "Dial" },
    { id: "calls", icon: sec2, label: "Calls" },
    { id: "emails", icon: sec3, label: "Emails" },
    { id: "files", icon: sec4, label: "Files" },
    { id: "securegroup", icon: sec5, label: "Secure Group" },
  
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "default":
        return <DefaultTab setActiveTab={setActiveTab} />;
      case "messages":
        return (
          <MessagesTab
            setActiveTab={setActiveTab}
            messageInput={messageInput}
            setMessageInput={setMessageInput}
          />
        );
      case "calls":
        return <CallsTab />;
      case "emails":
        return <EmailsTab />;
      case "files":
        return <FilesTab />;
      case "securegroup":
        return <SecureGroupTab />;
      case "category1-first":
        return <CategoryFirstTab />;
      case "category1-second":
        return <CategorySecondTab setActiveTab={setActiveTab} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex justify-center lg:justify-start relative"
    >
      <div className="phone-container relative">
        <div className="phone-frame relative max-w-[270px] h-[528px] bg-gray-900 rounded-[35px] p-1 shadow-2xl border-2 border-gray-800">
          <div className="absolute -left-1 top-20">
            <div className="w-1 h-8 bg-gray-700 rounded-l-full"></div>
          </div>
          <div className="absolute -left-1 top-32">
            <div className="w-1 h-12 bg-gray-700 rounded-l-full"></div>
          </div>
          <div className="absolute -right-1 top-28">
            <div className="w-1 h-12 bg-gray-700 rounded-r-full"></div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
            ))}
          </div>
          <div className="screen bg-gradient-to-t from-[#36460A] to-black text-white rounded-[30px] h-full overflow-hidden flex flex-col relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            </div>
            <div className="flex justify-between items-center px-6 py-3 pt-10 text-xs bg-transparent relative z-20">
              <div className="flex items-center space-x-1 font-semibold text-white">
                <span>{currentTime}</span>
              </div>
              <div className="flex items-center space-x-1 text-white">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75z" />
                </svg>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-13.54-6.93-8.32-14.96z" />
                </svg>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                </svg>
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-2 bg-white rounded-full"></div>
                  <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-3 bg-white rounded-full"></div>
                  <div className="w-0.5 h-3.5 bg-white rounded-full"></div>
                </div>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9 Exemplar2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.65-4.34-1.65-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
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
            <div className="px-4 pt-2 flex-1 overflow-y-auto relative">
              {activeTab === "default" && (
                <div className="flex space-x-3 mb-4">
                  <div className="bg-[#36460A] rounded-lg py-4 px-2 flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      <img src={scan} alt="scan-img" className="w-[9px]" />
                      <span className="text-[#89AF20] text-[8px] uppercase tracking-wide">
                        SECURE MODE ACTIVE
                      </span>
                    </div>
                    <div className="text-white text-xl text-center font-light mb-1">
                      {currentTime}
                    </div>
                    <div className="text-white text-[10px] text-center">{currentDate}</div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <div className="bg-[#36460A] rounded-lg px-3 py-2 grid grid-cols-2 gap-2">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <div className="text-white text-xs">⋯</div>
                      </div>
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <Bluetooth className="w-3 h-3 text-white" />
                      </div>
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <Shuffle className="w-3 h-3 text-white" />
                      </div>
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <RotateCcw className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab("securegroup")}
                      className="bg-white rounded-lg py-2 px-2 flex items-center space-x-1"
                    >
                      <Users className="w-3 h-3 text-black" />
                      <span className="text-black text-[9px] font-normal">
                        SecureGroup
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {(activeTab === "calls" || activeTab === "securegroup") && (
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
                  {activeTab === "calls" ? (
                    <button className="px-3 py-1 bg-[#36460A] rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-light">+</span>
                    </button>
                  ) : (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <img src={group} alt="avatar" className="w-full h-full" />
                    </div>
                  )}
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
                      {tabs
                        .filter((tab) => tab.id !== "default")
                        .map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-center ${
                              activeTab === tab.id ? "ring-0 ring-lime-400" : ""
                            }`}
                          >
                            <img
                              src={tab.icon}
                              alt={tab.label}
                              className="w-10 h-8 ml-2.5 text-white"
                            />
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              {renderTabContent()}
              {activeTab === "default" ? (
                <div className="pb-4 flex space-x-3 mt-4">
                  <div className="bg-gray-900 rounded-lg p-2 flex items-center space-x-1 w-fit">
                    <span className="text-white text-[9px]">SECURE MODE</span>
                    <ToggleLeft className="w-2.5 h-2.5 text-green-500" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-2 flex items-center space-x-1 flex-1">
                    <Grid3X3 className="w-2.5 h-2.5 text-white" />
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
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
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
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
        {activeTab !== "default" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-[280px] top-16 transform -translate-y-1/2 flex flex-col space-y-4 bg-gray-900 rounded-lg p-2 shadow-lg"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center w-12 h-12 rounded-md ${
                  activeTab === tab.id ? "bg-[#759719]" : "bg-gray-800"
                } hover:bg-[#89AF20] transition-colors`}
                title={tab.label}
              >
                <img src={tab.icon} alt={tab.label} className="w-8 h-8" />
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}