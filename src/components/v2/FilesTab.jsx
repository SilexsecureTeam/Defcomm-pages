/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function FilesTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="files-section inter"
    >
      <p className="text-lime-300">Secure File Storage</p>
      <ul>
        <li>Report.pdf - 2MB</li>
        <li>SignalMap.jpg - 500KB</li>
      </ul>
    </motion.div>
  );
}
