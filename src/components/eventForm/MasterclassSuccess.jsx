import { motion } from "framer-motion";
import { FiCheckCircle, FiMail, FiArrowLeft } from "react-icons/fi";

const MasterclassSuccess = ({ setIsSubmitted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center space-y-5 py-8"
    >
      {/* Icon + badge */}
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
          <FiCheckCircle className="text-emerald-600 text-3xl" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
          <FiMail className="text-[13px]" />
          Confirmation sent to your email
        </span>
      </div>

      {/* Copy */}
      <div className="space-y-2 max-w-md">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
          Application received for{" "}
          <span className="text-emerald-700">The Skit Lab</span>
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600">
          Thank you for registering. Our team will review your details and share
          event information, access instructions, and any next steps with you
          via email.
        </p>
        <p className="text-xs text-slate-500">
          Please keep an eye on your inbox (and spam/junk folders) for messages
          from the organizing team.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 pt-2">
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <FiArrowLeft className="text-[14px]" />
          Submit another response
        </button>
      </div>
    </motion.div>
  );
};

export default MasterclassSuccess;
