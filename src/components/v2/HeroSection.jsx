import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroHand from "../../assets/hero-hand.png";
import TopNav from "./TopNav";
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="min-h-[600px] bg-limeAccent text-[#1a1a1a] relative overflow-hidden">
      <TopNav />

      <div className="max-w-peak mx-auto px-6 md:px-0 pt-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.span
            variants={textVariants}
            custom={0}
            className="inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full bg-[#36460A] text-white font-medium"
          >
            <LockIcon className="w-4 h-4" />
            Military-Grade Security
          </motion.span>

          <motion.h1
            variants={textVariants}
            custom={1}
            className="text-4xl md:text-5xl font-bold leading-tight text-black"
          >
            Secure Your <br />
            <span className="text-[#5a6834]">Digital Future</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            custom={2}
            className="text-gray-700 max-w-xl"
          >
            Trusted by leading enterprises and security-first organizations.
            Defcomm delivers encryption and communication tools built to protect
            what matters most.
          </motion.p>

          <motion.div
            variants={textVariants}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#1f2e12] to-[#3d5d1c] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-gray-300 hover:border-black text-[#1a1a1a] font-medium px-6 py-3 rounded-xl"
            >
              Watch Video
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.img
            src={heroHand}
            alt="Defcomm phone"
            className="max-h-[600px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

const LockIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m9 0h-9m9 0H18a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h1.5"
    />
  </svg>
);
