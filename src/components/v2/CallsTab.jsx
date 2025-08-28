/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import icon from "../../assets/logo-icon.png";
import { recentCalls } from "../../utils/fields";

export default function CallsTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white inter"
    >
      <div className="mt-4 pb-10">
        <h2 className="text-white text-sm font-medium mb-3">Recent Calls</h2>
        <div className="flex flex-col gap-2">
          {recentCalls.map((call, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 py-1"
            >
              <div className="flex-shrink-0 flex items-center space-x-3">
                <div className="bg-gray-600/50 rounded-full">
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
      </div>
    </motion.div>
  );
}
