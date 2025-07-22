import { motion } from "framer-motion";
import { rewardLevels } from "../../../utils/dummies";

const RewardTiers = () => {
  return (
    <section
      id="rewards"
      className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]"
    >
      <motion.h2
        className="text-[#DDF2AB] text-2xl md:text-3xl font-semibold text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Reward Tiers
      </motion.h2>

      <motion.p
        className="text-gray-200 text-center max-w-xl mb-10 text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Find bugs, get paid. Our bounty program rewards security researchers
        based on the severity of discovered vulnerabilities.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-8">
        {rewardLevels.map((reward, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 * index }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <RewardCard {...reward} />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-gray-300 text-center text-sm max-w-2xl mt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        All payouts are subject to verification and validation by our security
        team.
        <br />
        First reporter of a unique issue receives the bounty.
      </motion.p>
    </section>
  );
};

const RewardCard = ({ level, color, reward, examples }) => (
  <div
    className={`bg-[#181818] border rounded-xl hover:scale-[1.02] hover:shadow-lg transition-transform`}
    style={{ borderColor: color }}
  >
    <div className="p-6 md:p-8 flex flex-col min-h-[260px] h-full">
      <div className="flex justify-between items-center mb-4">
        <span
          className="px-4 py-1 rounded-full font-semibold text-white text-sm"
          style={{ backgroundColor: color }}
        >
          {level}
        </span>
        <span className="font-bold text-lg" style={{ color }}>
          {reward}
        </span>
      </div>
      <div className="text-white font-bold mb-2 text-sm">
        Example vulnerabilities
      </div>
      <ul className="text-gray-200 text-sm list-disc pl-5 space-y-1">
        {examples.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default RewardTiers;
