import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emails = [
  {
    id: 1,
    subject: "Mission Update",
    from: "defcomm@army.mil",
    body: "All units are to report to base by 0600 hours. Ensure encryption protocols are followed.",
  },
  {
    id: 2,
    subject: "Secure Intel Briefing",
    from: "intel@army.mil",
    body: "Classified briefing available for download. Use your secure credentials.",
  },
  {
    id: 3,
    subject: "Equipment Check",
    from: "logistics@army.mil",
    body: "Verify all issued equipment before deployment. Submit reports by EOD.",
  },
];

export default function EmailsTab() {
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="emails-section inter bg-gray-900 text-white rounded-xl p-4 shadow-lg"
    >
      <p className="text-lime-300 text-center font-bold mb-4">
        Encrypted Emails Inbox
      </p>

      <ul className="space-y-2">
        {emails.map((email) => (
          <li key={email.id} className="bg-gray-800 rounded-lg">
            <div
              className="p-3 cursor-pointer hover:bg-gray-700 transition flex justify-between items-center"
              onClick={() =>
                setSelectedEmailId(
                  selectedEmailId === email.id ? null : email.id
                )
              }
            >
              <div>
                <p className="font-semibold">{email.subject}</p>
                <p className="text-gray-400 text-sm">{email.from}</p>
              </div>
              <span className="text-gray-400">
                {selectedEmailId === email.id ? "▲" : "▼"}
              </span>
            </div>

            <AnimatePresence>
              {selectedEmailId === email.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 pb-3 text-gray-200 overflow-hidden"
                >
                  {email.body}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
