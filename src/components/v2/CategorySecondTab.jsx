/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Phone, Volume2, MicOff, UserPlus } from "lucide-react";
import wifi from "../../assets/wifi.png";
import de from "../../assets/de.png";
import call1 from "../../assets/call1.png";
import call2 from "../../assets/call2.png";
import acall from "../../assets/acall.png";

const CallHeader = () => (
  <div className="">
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

export default function CategorySecondTab({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white w-full flex flex-col"
    >
      <CallHeader />
      <div className="">
        <div className="bg-[#36460A] mx-auto w-fit rounded-lg px-3 py-2 flex items-center gap-2">
          <img src={wifi} alt="wifi-image" />
          <span className="text-white text-xs font-medium">
            Checking call...
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-3 ">
          <button className="bg-white rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
            <Phone className="w-4 h-4 text-black" />
            <span className="text-black text-xs font-medium">Receiver</span>
          </button>
          <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
            <Volume2 className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-medium">Speaker</span>
          </button>
          <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
            <MicOff className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-medium">Mute</span>
          </button>
          <button className="bg-[#36460A] rounded-lg p-3 flex flex-col items-center justify-center space-y-1 w-16 h-16">
            <UserPlus className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-medium">New Call</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center ">
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
}
