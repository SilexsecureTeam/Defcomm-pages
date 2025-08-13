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

export default function CategoryFirstTab() {
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
}
