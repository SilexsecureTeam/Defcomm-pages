import { buttonVariants, confirmationVariants } from "../../utils/fields";
import { motion } from "framer-motion";
import done from "../../assets/done.png";
import { FaRegCalendar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { formatTimeRange } from "../../utils/formatter";

const BookingStepFour = ({
  setCurrentStep,
  setSelectedDate,
  setSelectedTime,
  setFormData,
  setErrors,
  selectedDate,
  selectedTime,
}) => {
  // Format date like "18 Sep, 2023" (English month abbreviation)
  const formatEnglishDate = (date) => {
    if (!date) return "";

    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  };

  return (
    <motion.div
      key="step4"
      className="text-center space-y-6 mx-auto"
      variants={confirmationVariants}
      initial="initial"
      animate="animate"
    >
      <img src={done} alt="Completed" className="mx-auto h-32" />

      {/* Date and Time */}
      <motion.div
        className="text-[#2d3f14] flex flex-wrap items-center gap-2 rounded-lg p-4 mx-auto w-max"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="flex gap-2 items-center text-sm font-medium">
          <FaRegCalendar
            size={14}
            className="border border-[#2d3f14] w-max h-max flex items-center justify-center p-2 rounded-full"
          />
          {selectedDate && formatEnglishDate(selectedDate)}
        </p>
        <p className="flex gap-2 items-center text-sm font-medium">
          <IoTime
            size={14}
            className="border border-[#2d3f14] w-max h-max flex items-center justify-center p-2 rounded-full"
          />
          {selectedTime && formatTimeRange(selectedTime)}
        </p>
      </motion.div>

      {/* Thank You Message */}
      <motion.h3
        className="text-2xl font-semibold text-[#2d3f14]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Thank you!
      </motion.h3>

      {/* Confirmation Message */}
      <motion.p
        className="text-gray-600 max-w-md mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Your booking has been completed. An email with details of your booking
        has been sent to you.
      </motion.p>

      {/* Start Over Button */}
      {/* <motion.button
        onClick={() => {
          setCurrentStep(1);
          setSelectedDate(null);
          setSelectedTime(null);
          setFormData({
            name: "",
            email: "",
            role: "",
            location: "",
            mobile: "",
            meetingType: "Direct Call",
            reason: "",
          });
          setErrors({});
        }}
        className="py-3 px-8 bg-[#2d3f14] text-white rounded-lg hover:bg-[#3f5c1f] transition-colors duration-200 font-medium"
        variants={buttonVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover="hover"
        whileTap="tap"
      >
        Start Over
      </motion.button> */}
    </motion.div>
  );
};

export default BookingStepFour;
