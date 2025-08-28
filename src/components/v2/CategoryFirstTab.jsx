/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import wifi from "../../assets/wifi.png";
import load from "../../assets/load.png";
import de from "../../assets/de.png";
import call1 from "../../assets/call1.png";
import call2 from "../../assets/call2.png";
import acall from "../../assets/acall.png";

const CallHeader = () => (
  <div className="mb-4">
    <div className="flex items-center justify-between bg-[#89AF20] rounded-full px-3 py-2 inter">
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

export default function CategoryFirstTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white w-full flex flex-col px-4 py-6"
    >
      <CallHeader />
      <div className="  p-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 bg-[#36460A]/50 p-2">
          <img src={wifi} alt="wifi-image" className="w-3" />
          <span className="text-white text-xs font-medium">
            Checking call...
          </span>
        </div>
        {/* <div className="text-gray-300 text-xs text-center">
          Initiating End-to-End Encryption
        </div> */}
        <img
          src={load}
          alt="load-image"
          className="animate-spin w-10 h-10"
          style={{ animation: "spin 2s linear infinite" }}
        />
        <div className="text-gray-400 text-[9px] text-center">
          Encryption Strength: AES-256
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto pt-4">
        <p className="text-white text-xs">Secured by</p>
        <img src={de} alt="defcomm-logo" className="w-24 mt-2" />
      </div>
    </motion.div>
  );
}
