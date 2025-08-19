/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { User } from "lucide-react";
import icon from "../../assets/logo-icon.png"

export default function CallsTab() {
  const recentCalls = [
    { name: "Boženka Maxxxxx", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Pioxxxx", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Euxxxxx", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Koxxxxx", time: "Yesterday", avatar: "bg-gray-600" },
    { name: "Boženka Masxxx", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Pioxxxx", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Euxxxx", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Kowxxx", time: "01 Feb", avatar: "bg-gray-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white"
    >
      <div className="mt-4">
        <h2 className="text-white text-sm font-medium mb-3">Recent Calls</h2>
        <div className="space-y-3">
          {recentCalls.map((call, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 ${call.avatar} rounded-full flex items-center justify-center`}
                >
                  <img src={icon} alt='image' className="w-5.5 h-5.5 text-black" />
                </div>
                <span className="text-white text-xs">{call.name}</span>
              </div>
              <span className="text-gray-300 text-xs">{call.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
