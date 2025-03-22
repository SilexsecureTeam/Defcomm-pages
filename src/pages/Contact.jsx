import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-gradient p-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-[1000px] w-full bg-white p-10 shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">Have any questions? Reach out to us.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-oliveLight text-3xl mb-2" />
            <p className="text-gray-700">28 Katampe Rd, Kado, Jahi 900108,<br/> Federal Capital Territory</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-oliveLight text-3xl mb-2" />
            <p className="text-gray-700">business@defcomm.ng</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-oliveLight text-3xl mb-2" />
            <p className="text-gray-700">+234 818 882 2411</p>
          </div>
        </div>

        <form className="space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-oliveGreen"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-oliveLight text-white py-2 rounded-md hover:bg-oliveDark transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
