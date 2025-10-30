// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { addToGoogleCalendar, formStepVariants } from "../../utils/formatter";

const SuccessScreen = ({ formData, resetForm }) => {
  return (
    <motion.div
      key="success"
      initial="enter"
      animate="center"
      exit="exit"
      variants={formStepVariants}
      transition={{ duration: 0.3 }}
      className="text-center py-12"
    >
      <SuccessIcon />
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Registration Successful!
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Thank you for registering for Global Engagement Day 2025. We've sent a
        confirmation email to {formData.personal_information.email}.
      </p>

      {formData.consent.add_to_calendar && <CalendarSection />}

      <div className="space-y-4 max-w-md mx-auto">
        <button
          onClick={resetForm}
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Register Another Person
        </button>
        <p className="text-gray-500 text-sm">
          Need help? Contact us at support@defcomm.ng
        </p>
      </div>
    </motion.div>
  );
};

const SuccessIcon = () => (
  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
    <svg
      className="w-10 h-10 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </div>
);

const CalendarSection = () => (
  <div className="bg-green-50 p-6 rounded-2xl max-w-md mx-auto mb-8">
    <h4 className="font-semibold text-green-800 mb-2">
      📅 Event Added to Calendar
    </h4>
    <p className="text-green-700 text-sm mb-4">
      The event has been added to your Google Calendar. You can also manually
      add it using the button below.
    </p>
    <button
      onClick={addToGoogleCalendar}
      className="px-6 py-2 bg-white border border-green-300 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300"
    >
      Open Google Calendar
    </button>
  </div>
);

export default SuccessScreen;
