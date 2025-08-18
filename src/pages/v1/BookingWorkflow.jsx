import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isPast,
} from "date-fns";
import { Tooltip } from "react-tooltip";
import TopNav from "../../components/v2/TopNav";
import { Calendar, FileText, CheckCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookingWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    location: "",
    mobile: "",
    meetingType: "Direct Call",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const times = ["5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"];

  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  };

  const handleDateSelect = (day) => {
    if (!isPast(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.meetingType) newErrors.meetingType = "Meeting type is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.reason.trim()) newErrors.reason = "Booking reason is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCurrentStep(3);
    }
  };

  const confirmBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Booking submitted:", {
        selectedDate,
        selectedTime,
        formData,
      });
      setIsSubmitting(false);
      setCurrentStep(4);
    }, 1000);
  };

  // Animation variants for step transitions
  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  // Animation variants for progress bar icons
  const iconVariants = {
    inactive: { scale: 0.8, opacity: 0.7 },
    active: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Animation variants for form fields
  const fieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  };

  // Animation variants for confirmation
  const confirmationVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNav />
      <div className="min-h-screen flex items-center justify-center bg-limeAccent p-4 sm:p-6 md:p-8 lg:p-10 font-sans">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:border-r-2 md:border-r-[#9ca3af] md:pr-6 w-full md:w-1/3">
              <motion.div
                className="flex flex-col items-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-base font-semibold text-gray-800">
                  Booking Process - Step {currentStep} of 4
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {currentStep === 1 && "Please select your preferred date and time."}
                  {currentStep === 2 && "Please fill in your booking details."}
                  {currentStep === 3 && "Review your booking details."}
                  {currentStep === 4 && "Your booking has been confirmed!"}
                </p>
              </motion.div>

              {/* Progress Bar */}
              <div className="mb-8 flex flex-col items-center justify-between">
                {[
                  { step: 1, Icon: Calendar },
                  { step: 2, Icon: FileText },
                  { step: 3, Icon: CheckCircle },
                  { step: 4, Icon: Check },
                ].map(({ step, Icon }, index) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          step <= currentStep ? "bg-[#2d3f14]" : "bg-[#e6e9e0]"
                        }`}
                        variants={iconVariants}
                        initial="inactive"
                        animate={step <= currentStep ? "active" : "inactive"}
                      >
                        <Icon size={20} />
                      </motion.div>
                      {index < 3 && (
                        <motion.div
                          className={`w-1 h-12 ${
                            step < currentStep ? "bg-[#2d3f14]" : "bg-[#e6e9e0]"
                          }`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1, transition: { duration: 0.4, delay: 0.2 } }}
                        ></motion.div>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold text-center">
                  {currentStep === 1 && "Select Date & Time"}
                  {currentStep === 2 && "Enter Booking Details"}
                  {currentStep === 3 && "Confirm Booking"}
                  {currentStep === 4 && ""}
                </h2>
              </motion.div>

              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                      <div className="w-full md:w-2/3">
                        <div className="flex items-center justify-between mb-4">
                          <motion.button
                            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                            className="p-2 hover:bg-[#e6e9e0] rounded-full"
                            aria-label="Previous month"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            &lt;
                          </motion.button>
                          <span className="text-lg font-medium">
                            {format(currentMonth, "MMMM yyyy")}
                          </span>
                          <motion.button
                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                            className="p-2 hover:bg-[#e6e9e0] rounded-full"
                            aria-label="Next month"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            &gt;
                          </motion.button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                            (day) => (
                              <div key={day} className="font-medium text-gray-600">
                                {day}
                              </div>
                            )
                          )}
                          {getDaysInMonth().map((day) => (
                            <motion.button
                              key={day}
                              onClick={() => handleDateSelect(day)}
                              disabled={isPast(day)}
                              className={`p-2 rounded-full text-sm transition-colors duration-200 ${
                                selectedDate &&
                                format(selectedDate, "yyyy-MM-dd") ===
                                  format(day, "yyyy-MM-dd")
                                  ? "bg-[#2d3f14] text-white"
                                  : isPast(day)
                                  ? "bg-[#e6e9e0] text-gray-400 cursor-not-allowed"
                                  : "hover:bg-[#4a6b24]"
                              }`}
                              data-tooltip-id="calendar-tooltip"
                              data-tooltip-content={
                                isPast(day) ? "Past date" : "Available"
                              }
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {format(day, "d")}
                            </motion.button>
                          ))}
                        </div>
                        <Tooltip id="calendar-tooltip" />
                      </div>
                      <div className="w-full md:w-1/3 md:pl-6">
                        {selectedDate && (
                          <>
                            <h4 className="text-sm font-medium mb-4">
                              {format(selectedDate, "EEEE, MMMM d")}
                            </h4>
                            <div className="space-y-2">
                              {times.map((time) => (
                                <motion.button
                                  key={time}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`w-full p-3 border rounded-md text-left text-sm transition-colors duration-200 ${
                                    selectedTime === time
                                      ? "bg-[#4a6b24] border-[#2d3f14]"
                                      : "border-[#9ca3af] hover:bg-[#e6e9e0]"
                                  }`}
                                  variants={buttonVariants}
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                  {time}
                                </motion.button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <motion.button
                      onClick={handleNext}
                      disabled={!selectedDate || !selectedTime}
                      className="w-full py-3 bg-[#2d3f14] text-white rounded-md disabled:opacity-50 hover:bg-[#3f5c1f] transition-colors duration-200"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Next
                    </motion.button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.form
                    key="step2"
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {[
                      { name: "name", placeholder: "Enter your name...", type: "text", label: "Name *" },
                      { name: "email", placeholder: "example@xyz.com", type: "email", label: "Email *" },
                      { name: "role", placeholder: "Enter your role...", type: "text", label: "Role *" },
                      { name: "location", placeholder: "Enter the location...", type: "text", label: "Location *" },
                      { name: "mobile", placeholder: "+254 804 8099", type: "tel", label: "Mobile *" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        className="w-full"
                        variants={fieldVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: index * 0.1 }}
                      >
                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a6b24] ${
                            errors[field.name] ? "border-red-500" : "border-[#9ca3af]"
                          } transition-colors duration-200`}
                          required
                          aria-invalid={errors[field.name] ? "true" : "false"}
                        />
                        <AnimatePresence>
                          {errors[field.name] && (
                            <motion.p
                              className="text-red-500 text-sm mt-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {errors[field.name]}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                    <motion.div
                      className="w-full"
                      variants={fieldVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium mb-1">Meeting Type *</label>
                      {["Direct Call", "Defcomm", "Physical Meeting"].map((type) => (
                        <div key={type} className="flex items-center mb-2">
                          <input
                            type="radio"
                            name="meetingType"
                            value={type}
                            checked={formData.meetingType === type}
                            onChange={handleChange}
                            className="mr-2 accent-[#2d3f14]"
                            required
                          />
                          <span>{type}</span>
                        </div>
                      ))}
                      <AnimatePresence>
                        {errors.meetingType && (
                          <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {errors.meetingType}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className="w-full"
                      variants={fieldVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium mb-1">Why are you booking us? *</label>
                      <textarea
                        name="reason"
                        value={formData.reason || ""}
                        onChange={handleChange}
                        placeholder="Please provide the reason for your booking..."
                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a6b24] min-h-[100px] ${
                          errors.reason ? "border-red-500" : "border-[#9ca3af]"
                        } transition-colors duration-200`}
                        required
                      />
                      <AnimatePresence>
                        {errors.reason && (
                          <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {errors.reason}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <motion.div
                      className="flex flex-col sm:flex-row justify-between mt-6 gap-4"
                      variants={fieldVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.7 }}
                    >
                      <motion.button
                        type="button"
                        onClick={handlePrevious}
                        className="py-3 px-6 bg-[#e6e9e0] rounded-md hover:bg-[#d1d5db] transition-colors duration-200"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        className="py-3 px-6 bg-[#2d3f14] text-white rounded-md hover:bg-[#3f5c1f] transition-colors duration-200"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Next
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    className="space-y-6"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h3 className="text-lg font-medium">Review Your Booking</h3>
                    <motion.div
                      className="bg-[#e6e9e0] p-4 rounded-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>
                        <strong>Date:</strong>{" "}
                        {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                      </p>
                      <p>
                        <strong>Time:</strong> {selectedTime}
                      </p>
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Meeting Type:</strong> {formData.meetingType}
                      </p>
                      <p>
                        <strong>Role:</strong> {formData.role}
                      </p>
                      <p>
                        <strong>Location:</strong> {formData.location}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {formData.mobile}
                      </p>
                      <p>
                        <strong>Reason:</strong> {formData.reason}
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex flex-col sm:flex-row justify-between gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <motion.button
                        onClick={handlePrevious}
                        className="py-3 px-6 bg-[#e6e9e0] rounded-md hover:bg-[#d1d5db] transition-colors duration-200"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        onClick={confirmBooking}
                        disabled={isSubmitting}
                        className="py-3 px-6 bg-[#2d3f14] text-white rounded-md hover:bg-[#3f5c1f] disabled:opacity-50 transition-colors duration-200"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {isSubmitting ? "Submitting..." : "Confirm Booking"}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    className="text-center space-y-6"
                    variants={confirmationVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.h3
                      className="text-2xl font-semibold text-[#2d3f14]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      Booking Confirmed!
                    </motion.h3>
                    <motion.div
                      className="text-[#2d3f14] w-12 h-12 mx-auto my-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    >
                      <CheckCircle />
                    </motion.div>
                    <motion.p
                      className="text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Your booking has been successfully submitted. You'll receive a
                      confirmation email soon.
                    </motion.p>
                    <motion.button
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
                      className="py-3 px-6 bg-[#2d3f14] text-white rounded-md hover:bg-[#3f5c1f] transition-colors duration-200"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Book Another
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingWorkflow;