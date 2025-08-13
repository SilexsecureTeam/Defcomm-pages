/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function CallsTab() {
  const recentCalls = [
    { name: "Boženka Maxxxxx", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Piotrowski", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Eurydyka", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Kowalski", time: "Yesterday", avatar: "bg-gray-600" },
    { name: "Boženka Malina", time: "11:47 PM", avatar: "bg-gray-400" },
    { name: "Odeusz Piotrowski", time: "11:47 PM", avatar: "bg-blue-300" },
    { name: "Krysia Eurydyka", time: "11:47 PM", avatar: "bg-purple-300" },
    { name: "Jarosław Kowalski", time: "01 Feb", avatar: "bg-gray-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white"
    >
      <div className="mt-4">
        <h2 className="text-white text-base font-medium mb-3">Recent Calls</h2>
        <div className="space-y-3">
          {recentCalls.map((call, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 ${call.avatar} rounded-full flex items-center justify-center`}
                >
                  <User className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm">{call.name}</span>
              </div>
              <span className="text-gray-300 text-sm">{call.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
