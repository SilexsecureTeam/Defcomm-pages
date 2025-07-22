import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTimeLeft } from "../../../utils/formatter";

const pad = (num) => num.toString().padStart(2, "0");

const animationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      aria-live="polite"
      className="flex gap-4 md:gap-6 mb-8 justify-center flex-wrap"
    >
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          className="flex flex-col items-center min-w-[4.5rem] md:min-w-[6rem]"
        >
          <div className="relative w-16 h-16 md:w-24 md:h-20 border-2 border-[#AC7C2E] rounded-lg flex items-center justify-center bg-[#111]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={timeLeft[unit]} // triggers animation on change
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="absolute text-3xl md:text-4xl font-bold text-white select-none"
              >
                {pad(timeLeft[unit])}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-xs md:text-sm text-white mt-2 tracking-widest">
            {unit.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountDownTimer;
