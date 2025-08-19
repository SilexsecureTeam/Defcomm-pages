/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Phone, Volume2, MicOff, Pause } from "lucide-react";
import wifi from "../../assets/wifi.png";
import de from "../../assets/de.png";
import call1 from "../../assets/call1.png";
import call2 from "../../assets/call2.png";
import acall from "../../assets/acall.png";

const CallHeader = () => (
  <div className="mb-1">
    <div className="flex items-center justify-between bg-[#89AF20] rounded-full px-3 py-2">
      <div className="flex items-center gap-1.5">
        <img src={call1} alt="call" className="w-4 h-4 text-black" />
        <span className="text-black text-xs font-medium">
          Secure Calling...
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-black text-xs font-medium">0:00</span>
        <img src={call2} alt="call" className="w-4 h-4 text-black" />
      </div>
    </div>
    <div className="flex items-center mt-3">
      <img src={acall} alt="call" className="w-12 h-12" />
      <div>
        <span className="text-white text-sm font-medium">Col Adamu John</span>
        <p className="text-gray-400 text-xs">Secure Call Active</p>
      </div>
    </div>
  </div>
);

export default function CategorySecondTab({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white w-full flex flex-col px-4 py-2"
    >
      <CallHeader />
      <div className="bg-[#36460A]/50 rounded-lg p-2 flex items-center justify-center gap-2">
        <img src={wifi} alt="wifi-image" className="w-4 h-4" />
        <span className="text-white text-sx font-medium">Call Connected</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white rounded-lg px-4 py-2 flex flex-col items-center justify-center space-y-1 w-14 h-14">
            <Phone className="w-4 h-4 text-black" />
            <span className="text-black text-[10px] font-medium">Receiver</span>
          </button>
          <button className="bg-[#36460A] rounded-lg px-4 py-2 flex flex-col items-center justify-center space-y-1 w-14 h-14">
            <Volume2 className="w-4 h-4 text-white" />
            <span className="text-white text-[10px] font-medium">Speaker</span>
          </button>
          <button className="bg-[#36460A] rounded-lg px-4 py-2 flex flex-col items-center justify-center space-y-1 w-14 h-14">
            <MicOff className="w-4 h-4 text-white" />
            <span className="text-white text-[10px] font-medium">Mute</span>
          </button>
          {/* <button className="bg-[#36460A] rounded-lg p-4 flex flex-col items-center justify-center space-y-1 w-20 h-20">
            <UserPlus className="w-6 h-6 text-white" />
            <span className="text-white text-xs font-medium">New Call</span>
          </button> */}
          <button className="bg-[#36460A] rounded-lg px-4 py-2 flex flex-col items-center justify-center space-y-1 w-14 h-14">
            <Pause className="w-4 h-4 text-white" />
            <span className="text-white text-[px] font-medium">Hold</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white text-xs">Secured by</p>
        <img src={de} alt="defcomm-logo" className="w-24 mt-2" />
      </div>
      <button
        onClick={() => setActiveTab("default")}
        className="w-full bg-red-600 hover:bg-red-700 rounded-full py-2 mb-4 flex items-center justify-center"
      >
        <span className="text-white text-xs font-medium">End Call</span>
      </button>
    </motion.div>
  );
}
