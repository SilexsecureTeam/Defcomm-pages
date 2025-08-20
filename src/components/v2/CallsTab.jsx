/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { User } from "lucide-react";
import icon from "../../assets/call.png";

export default function CallsTab() {
  const recentCalls = [
    { name: "Boženka Maxx***", time: "11:47 PM", avatar: "text-white" },
    { name: "Odeusz Pio*****", time: "11:47 PM", avatar: "text-white" },
    { name: "Krysia Eu*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
    { name: "Jarosław Kox*****", time: "Yesterday", avatar: "text-white" },
    { name: "Odeusz Pio*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
    { name: "Boženka Mas*****", time: "11:47 PM", avatar: "text-white" },
    { name: "Krysia Eu*****", time: "11:47 PM", avatar: "text-white" },
    { name: "Jarosław Kow*****", time: "01 Feb", avatar: "text-white" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white inter"
    >
      <div className="mt-4">
        <h2 className="text-white text-sm font-medium mb-3">Recent Calls</h2>
        <div className="space-y-3">
          {recentCalls.map((call, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <img
                    src={icon}
                    alt="image"
                    className="w-5.5 h-5.5 text-black"
                  />
                </div>
                <span className={`${call.avatar} text-xs `}>{call.name}</span>
              </div>
              <span className="text-gray-300 text-xs">{call.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
