/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function SecureGroupTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 text-white inter"
    >
      <div className="space-y-3">
        <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">
                Invitation to Join Defcomm
              </h3>
              <p className="text-gray-300 text-xs">
                Opera Passage station reserved successfully.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Meeting Invitation</h3>
              <p className="text-gray-300 text-xs">
                You are invited to join a meeting. If the meeting details below
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700/80 rounded-lg p-3 border border-gray-600/50">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <X className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">
                Charger is under maintenance
              </h3>
              <p className="text-gray-400 text-xs">
                Please select another charger.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700/80 opacity-0 rounded-lg p-3 border border-gray-600/50">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <X className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">
                Charger is under maintenance
              </h3>
              <p className="text-gray-400 text-xs">
                Please select another charger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
