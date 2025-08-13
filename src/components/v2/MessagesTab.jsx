/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MoreVertical, Paperclip, Camera, Send } from "lucide-react";
import group from "../../assets/group.png";
import acall from "../../assets/acall.png";
import check1 from "../../assets/check1.png";
import check2 from "../../assets/check2.png";
import call from "../../assets/call.svg";

export default function MessagesTab({
  setActiveTab,
  messageInput,
  setMessageInput,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex flex-col text-white"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center justify-between space-x-3">
          <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center">
            <img src={group} alt="avatar" className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-white text-sm font-medium">Col Adamu j</h2>
            <p className="text-gray-400 text-sm">Class OPS</p>
          </div>
        </div>
        <img src={call} alt="avatar" className="w-6 h-6" />
      </div>
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
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="space-y-3">
          <div className="flex items-center space-x-1">
            <img src={acall} alt="avatar" className="w-12 h-12 rounded-full" />
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
                Trusted by defense teams for seamless, secure collaboration.
              </div>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-green-300 text-xs">19:58</span>
                <img src={check1} alt="avatar" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </motion.div>
  );
}
