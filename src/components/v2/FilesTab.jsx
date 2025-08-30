/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import file1 from "../../assets/file1.png";
import file2 from "../../assets/file2.png";
import file3 from "../../assets/file3.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon1.png";
export default function FilesTab() {
  // Control the 5-second loader duration
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="files-section inter"
    >
      <div className=" text-white font-sans">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <div className="flex">
            <div className="bg-black w-12 h-10 flex justify-center items-center">
              <img src={file1} className="text-white h-6" />
            </div>
            <div className="bg-[#89AF20] w-12 h-10 flex justify-center items-center">
              <img src={file2} className="text-white h-6" />
            </div>
          </div>

          <img src={file3} className="text-white w-8 h-8" />
        </div>

        {/* Title */}
        <div className="px-4 py-4 min-h-20 flex flex-col justify-center items-center">
          <h1 className="text-[#89AF20] text-sm text-start font-medium">
            Signal Encrypted Messages
          </h1>
          <p className="text-[#929FA3] text-[10px]">
            Eyes Only Cryptographic Elements
          </p>
        </div>

        {/* Messages */}
        <div className=" space-y-6 mb-2">
          {/* Monday Message */}
          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-2">
              <div className="">
                <h2 className="text-white text-[10px] font-semibold">
                  Monday at 03:32
                </h2>
                <h2 className="text-[#89AF20] text-[9px]">Mar 30 - C4A2B646</h2>
              </div>

              <Lock className="text-green-400 w-4 h-4" />
            </div>

            <div className="w-full bg-white h-1 rounded flex overflow-hidden">
              <div className="bg-white flex-[1]"></div>
              <div className="bg-[#89AF20] flex-[3]"></div>
              <div className="bg-white flex-[1]"></div>
              <div className="bg-black flex-[2]"></div>
              <div className="bg-white flex-[1]"></div>
            </div>

            <div className="text-gray-300 text-[9px] leading-relaxed mt-2">
              QmFsZTVqGvuY29kZWQgWVzc2FnZ5B3a
              <br />
              QmN9GvZcHt8k2wFuY3VmZ
              <br />
              Strike at dawn. Coordinates: 34.0522° N,
              <br />
              118.2437° W.
            </div>

            <div className="bg-[#89AF20] rounded-2xl p-3 w-full  mt-2 flex px-2 items-center justify-between space-x-1">
              <img src={icon} alt="icon" className="w-3" />
              <div className="text-white text-[9px] font-medium">
                U2FsdGVkX1+QST1KuGmD91ZPNB8o
                <br />
                XJIZwWQMkzGQIjg= GMT SAMBISA
              </div>
              <img src={icon1} alt="icon" className="w-3" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between space-x-2">
              <div className="">
                <h2 className="text-white text-[10px] font-semibold">
                  Wednesday at 06:00
                </h2>
                <h2 className="text-[#89AF20] text-[9px]">Mar 30 - C4A2B646</h2>
              </div>

              <Lock className="text-green-400 w-4 h-4" />
            </div>

            <div className="w-full bg-white h-1 rounded flex overflow-hidden">
              <div className="bg-white flex-[1]"></div>
              <div className="bg-[#89AF20] flex-[3]"></div>
              <div className="bg-white flex-[1]"></div>
              <div className="bg-[#8A211C] flex-[2]"></div>
              <div className="bg-white flex-[1]"></div>
            </div>

            <div className="text-gray-300 text-[9px] leading-relaxed mt-2">
              QmFsZTVqGvuY29kZWQgWVzc2FnZ5B3a
              <br />
              QmN9GvZcHt8k2wFuY3VmZ
              <br />
              Strike at dawn. Coordinates: 34.0522° N,
              <br />
              118.2437° W.
            </div>

            <div className="bg-[#89AF20] rounded-2xl p-3 w-full  mt-2 flex px-2 items-center justify-between space-x-1">
              <img src={icon} alt="icon" className="w-3" />
              <div className="text-white text-[9px] font-medium">
                U2FsdGVkX1+QST1KuGmD91ZPNB8o
                <br />
                XJIZwWQMkzGQIjg= GMT SAMBISA
              </div>
              <img src={icon1} alt="icon" className="w-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
