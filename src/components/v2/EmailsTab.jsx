/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function EmailsTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="emails-section"
    >
      <p className="text-lime-300">Encrypted Emails Inbox</p>
      <ul>
        <li>Subject: Mission Update</li>
        <li>From: defcomm@army.mil</li>
      </ul>
    </motion.div>
  );
}
