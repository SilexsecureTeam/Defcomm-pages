import { motion } from "framer-motion";
import React from "react";
import { buttonVariants, stepVariants } from "../../utils/fields";
import { format } from "date-fns";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaBuilding,
  FaFileAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaExclamationTriangle,
} from "react-icons/fa";

const BookingStepThree = ({
  selectedDate,
  selectedTime,
  formData,
  handlePrevious,
  confirmBooking,
  isSubmitting,
  submitError, // Add this prop for error handling
}) => {
  const bookingDetails = [
    {
      icon: FaCalendarAlt,
      label: "Date",
      value: selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy"),
    },
    {
      icon: FaClock,
      label: "Time",
      value: selectedTime,
    },
    {
      icon: FaUser,
      label: "Name",
      value: formData.name,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: formData.email,
    },
    {
      icon: FaBriefcase,
      label: "Meeting Type",
      value: formData.meetingType,
    },
    {
      icon: FaFileAlt,
      label: "Role",
      value: formData.role,
    },
    {
      icon: FaBuilding,
      label: "Company",
      value: formData.location,
    },
    {
      icon: FaPhone,
      label: "Mobile",
      value: formData.mobile,
    },
  ];

  return (
    <motion.div
      key="step3"
      className="space-y-8"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-16 h-16 bg-[#2d3f14] rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FaCheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Review Your Booking
        </h3>
        <p className="text-gray-600">
          Please verify all details before confirming your appointment
        </p>
      </div>

      {/* Booking Details Card */}
      <motion.div
        className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#2d3f14] to-[#3f5c1f] px-6 py-4">
          <h4 className="text-white font-medium text-lg">
            Appointment Summary
          </h4>
        </div>

        {/* Details List */}
        <div className="p-6 space-y-4">
          {bookingDetails.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-start space-x-4 py-3 border-b border-gray-100 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 bg-[#e6e9e0] rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#2d3f14]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-600">
                  {item.label}
                </p>
                <p className="text-gray-800 font-medium truncate">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Notes */}
        {formData.reason && (
          <motion.div
            className="px-6 pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h5 className="text-sm font-medium text-blue-800 mb-2">
                Additional Notes
              </h5>
              <p className="text-blue-700 text-sm">{formData.reason}</p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Error Message */}
      {submitError && (
        <motion.div
          className="bg-red-50 border border-red-200 rounded-lg p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-3" />
            <div>
              <h4 className="text-red-800 font-medium text-sm">
                Submission Error
              </h4>
              <p className="text-red-700 text-sm mt-1">{submitError}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between gap-4 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <motion.button
          onClick={handlePrevious}
          disabled={isSubmitting}
          className="flex items-center justify-center py-3 px-6 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-all duration-200 font-medium"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaArrowLeft className="mr-2" /> Back to Edit
        </motion.button>

        <motion.button
          onClick={confirmBooking}
          disabled={isSubmitting}
          className="flex items-center justify-center py-3 px-8 bg-gradient-to-r from-[#2d3f14] to-[#3f5c1f] text-white rounded-lg hover:from-[#3f5c1f] hover:to-[#4a6b24] disabled:opacity-50 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Confirming...
            </>
          ) : (
            <>
              <FaCheckCircle className="w-5 h-5 mr-2" />
              Confirm Appointment
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Help Text */}
      <motion.div
        className="text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <p>You will receive a confirmation email with meeting details</p>
      </motion.div>
    </motion.div>
  );
};

export default BookingStepThree;
