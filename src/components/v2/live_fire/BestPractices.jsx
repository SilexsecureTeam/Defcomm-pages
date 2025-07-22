import { motion } from "framer-motion";
import { PRACTICES } from "../../../utils/dummies";

const BestPractices = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
      <div className="w-full max-w-5xl">
        <motion.div
          className="bg-[#181818] border border-[#89AF20] rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#89AF20] font-bold text-lg md:text-2xl mb-6">
            Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {PRACTICES.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <PracticeItem number={index + 1} text={practice} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PracticeItem = ({ number, text }) => (
  <div className="flex items-start gap-3">
    <div className="min-w-[28px] h-[28px] flex items-center justify-center text-sm font-bold bg-[#89AF20] text-black rounded-full">
      {number}
    </div>
    <p className="text-[#DDF2AB] text-sm sm:text-base leading-relaxed">
      {text}
    </p>
  </div>
);

export default BestPractices;
