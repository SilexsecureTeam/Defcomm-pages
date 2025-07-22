import { motion } from "framer-motion";
import { NOT_ALLOWED, REQUIRED } from "../../../utils/dummies";

const RulesOfEngagement = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
      <motion.div
        className="mb-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span className="border border-[#C6A24B] rounded-full px-4 py-1 text-xs text-[#C6A24B] mb-3">
          Rules of Engagement
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2">
          <span className="text-[#C6A24B]">Play</span>{" "}
          <span className="text-white">By The Rules</span>
        </h2>
        <p className="text-gray-200 text-center max-w-2xl text-base mb-4">
          Our bug bounty program has clear guidelines to ensure fair play and
          protect our systems. Violation of these rules may result in
          disqualification.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Not Allowed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">
            What's Not Allowed
          </h3>
          <div className="flex flex-col gap-6">
            {NOT_ALLOWED.map((item, idx) => (
              <RuleCard key={idx} {...item} variant="danger" />
            ))}
          </div>
        </motion.div>

        {/* Required */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-[#89AF20] text-lg font-semibold mb-4">
            What's Required
          </h3>
          <div className="flex flex-col gap-6">
            {REQUIRED.map((item, idx) => (
              <RuleCard key={idx} {...item} variant="success" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RuleCard = ({ title, description, variant }) => {
  const colors = {
    danger: "#C24B4B",
    success: "#89AF20",
  };

  return (
    <motion.div
      className="bg-[#181818] border rounded-xl p-6 flex gap-4 items-start hover:scale-[1.02] transition-transform duration-200"
      style={{ borderColor: colors[variant] }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <span
        className="flex items-center justify-center w-10 h-10 rounded-full"
        style={{ backgroundColor: `${colors[variant]}20` }}
      >
        <svg width="24" height="24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={colors[variant]}
            strokeWidth="2"
          />
          {variant === "danger" ? (
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke={colors[variant]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M7 12l3 3 5-5"
              stroke={colors[variant]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </span>
      <div>
        <div className="text-white font-bold mb-1">{title}</div>
        <div className="text-gray-200 text-sm">{description}</div>
      </div>
    </motion.div>
  );
};

export default RulesOfEngagement;
