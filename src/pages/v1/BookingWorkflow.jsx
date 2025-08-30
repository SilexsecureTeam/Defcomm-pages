import React, { useState } from "react";
import axios from "axios";
import TopNav from "../../components/v2/TopNav";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import BookingStepTwo from "./BookingStepTwo";
import BookingStepFour from "./BookingStepFour";
import BookingStepThree from "./BookingStepThree";
import BookingStepOne from "./BookingStepOne";
import { useEffect } from "react";
import BookingProgress from "./BookingProgress";

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
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document
      .querySelector("#scrollable-container")
      .scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.meetingType)
      newErrors.meetingType = "Meeting type is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.reason.trim())
      newErrors.reason = "Booking reason is required";
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
  const confirmBooking = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Function to convert 12-hour time format to 24-hour format
      const convertTo24Hour = (time12h) => {
        const [time, modifier] = time12h.split(" ");
        let [hours, minutes] = time.split(":");

        if (modifier === "PM" && hours !== "12") {
          hours = parseInt(hours, 10) + 12;
        } else if (modifier === "AM" && hours === "12") {
          hours = "00";
        }

        return `${hours.toString().padStart(2, "0")}:${minutes}:00`;
      };

      // Format the date and time according to the API requirements (24-hour format)
      const time24Hour = convertTo24Hour(selectedTime);
      const formattedDateTime = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(
        2,
        "0"
      )} ${time24Hour}`;

      // Map meeting type to API format
      const meetingTypeMap = {
        "Direct Call": "call",
        "Defcomm Meet": "defcomm",
        "Physical Meeting": "physical",
      };

      const bookingData = {
        dateTime: formattedDateTime,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        phone: formData.mobile,
        location: formData.location,
        meeting_type: meetingTypeMap[formData.meetingType] || "call",
        reason: formData.reason,
      };

      console.log("Sending payload:", bookingData); // For debugging

      const response = await axios.post(
        "https://backend.defcomm.ng/api/web/booking",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Booking submitted successfully:", response.data);
        setCurrentStep(4);
      } else {
        throw new Error(`Server returned status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);

      // More detailed error handling
      if (error.response) {
        // The server responded with an error status
        setSubmitError(
          error.response.data?.message ||
            `Server error: ${error.response.status} - ${error.response.statusText}`
        );
      } else if (error.request) {
        // The request was made but no response was received
        setSubmitError(
          "Network error: Could not connect to the server. Please check your connection."
        );
      } else {
        // Something happened in setting up the request
        setSubmitError(
          error.message || "Failed to submit booking. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          Book a Demo | Defcomm® Secure Communication & Encryption Solutions
        </title>
        <meta
          name="description"
          content="Experience Defcomm® in action. Book a demo to explore our end-to-end encrypted devices, secure communication platforms, and privacy-first technologies built for government, enterprise, and defense."
        />
      </Helmet>
      <TopNav />
      <div className="min-h-screen flex items-center justify-center bg-limeAccent p-4 sm:p-6 md:p-8 lg:p-10 font-sans">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:space-x-6">
            {currentStep < 4 && (
              <BookingProgress
                currentStep={currentStep}
                user={formData?.name || "Booking Guest"}
              />
            )}

            <div className="w-full md:w-2/3 mx-auto">
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
                  <BookingStepOne
                    setSelectedDate={setSelectedDate}
                    setSelectedTime={setSelectedTime}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    setCurrentStep={setCurrentStep}
                    setCurrentMonth={setCurrentMonth}
                    currentMonth={currentMonth}
                  />
                )}

                {currentStep === 2 && (
                  <BookingStepTwo
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    errors={errors}
                    formData={formData}
                    handlePrevious={handlePrevious}
                  />
                )}

                {currentStep === 3 && (
                  <BookingStepThree
                    isSubmitting={isSubmitting}
                    confirmBooking={confirmBooking}
                    handlePrevious={handlePrevious}
                    formData={formData}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    submitError={submitError}
                  />
                )}

                {currentStep === 4 && (
                  <BookingStepFour
                    setErrors={setErrors}
                    setCurrentStep={setCurrentStep}
                    setSelectedDate={setSelectedDate}
                    setSelectedTime={setSelectedTime}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    setFormData={setFormData}
                  />
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
