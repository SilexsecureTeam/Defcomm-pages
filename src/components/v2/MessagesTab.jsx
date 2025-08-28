/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MoreVertical, Paperclip, Camera, Send } from "lucide-react";
import group from "../../assets/group.png";
import acall from "../../assets/acall.png";
import check1 from "../../assets/check1.png";
import check2 from "../../assets/check2.png";
import icon from "../../assets/logo-icon.png";
import call from "../../assets/call.svg";
import PhoneTabs from "./PhoneTabs";
import { chatImages, recentCalls } from "../../utils/fields";

export default function MessagesTab({
  setActiveTab,
  activeTab,
  messageInput,
  setMessageInput,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex flex-col text-white inter"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-between space-x-3">
          <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center">
            <img src={group} alt="avatar" className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-white text-[9px] font-medium">Col Adamu j</h2>
            <p className="text-gray-400 text-[9px]">Class OPS</p>
          </div>
        </div>
        <img src={call} alt="avatar" className="w-4 h-4" />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-black/20">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab("default")}
            className="text-white text-[10px]"
          >
            SECURE MESSAGING
          </button>
        </div>
        <MoreVertical className="w-4 h-4 text-[#759719]" />
      </div>
      <PhoneTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* user slide */}
      <div className="flex items-center w-full gap-2 overflow-x-auto my-3">
        {chatImages?.map((user) => (
          <section
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${user?.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex-shrink-0 w-16 h-20 p-2 rounded-2xl bg-gray-500 flex justify-center items-end"
          >
            <h2 className="text-[10px] line-clamp-2 text-gray-300 mb-1">
              {user?.name}
            </h2>
          </section>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {recentCalls.map((call, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 py-1"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gray-200 rounded-full">
                <img src={icon} alt="image" className="h-8 text-black" />
              </div>
              <span className={`${call.avatar} text-xs truncate`}>
                {call.name}
              </span>
            </div>
            <span className="text-gray-300 text-xs flex-shrink-0">
              {call.time}
            </span>
          </div>
        ))}
      </div>
      {/* <div className="flex-1 p-2 space-y-2 overflow-y-auto">
        <div className="space-y-3">
          <div className="flex items-center space-x-1">
            <img src={acall} alt="avatar" className="w-8 h-8 rounded-full" />
            <span className="text-gray-300 text-[12px]">Capt Amos SA</span>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#36460A] rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
              <div className="text-white text-[10px] leading-relaxed">
                Defcomm App securexxx xxxxxx xxxxxx xxxxxxxxx xxxxxxxxx xxxxxx
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-green-300 text-[10px]">19:58</span>
                <img src={check1} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#36460A] rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
              <div className="text-white text-[10px] leading-relaxed">
                Trusted by defxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxx xxxxx
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-green-300 text-[10px]">19:58</span>
                <img src={check1} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 mt-8">
          <div className="flex items-center justify-end space-x-2 mb-2">
            <div className="w-[14px] h-[14px] rounded-full overflow-hidden">
              <img src={group} alt="avatar" className="w-full h-full" />
            </div>
            <span className="text-gray-300 text-[12px]">Odeusz Pxs</span>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
              <div className="text-black text-[10px] leading-relaxed">
                This app ixxx xxxxx xxxxxxxx xxxxx xxxxx
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-gray-600 text-[10px]">19:59</span>
                <img src={check2} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
              <div className="text-black text-[10px] leading-relaxed">
                Just tesxx xxxxx xxxxx xxxxxx xxxxxx xxxxx
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-gray-600 text-[10px]">19:59</span>
                <img src={check2} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
              <div className="text-black text-[10px] leading-relaxed">
                Super fasxx xxxxx xxxxxxx xxxxx xxxxxx xxxxxx
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-gray-600 text-[10px]">19:59</span>
                <img src={check2} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="sticky bottom-1 px-4">
        <div className="flex items-center justify-center space-x-0">
          <div className="max-w-[210px] mx-auto flex items-center bg-gray-800 rounded-l-full px-4 py-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 outline-none text-sm"
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
      </div>*/}
    </motion.div>
  );
}
