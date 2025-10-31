import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ExhibitionRegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      organization: "",
      designation: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitError("");
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/eventform`, data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(
        err.response?.data?.message ||
          "Unable to process registration. Please try again."
      );
    }
  };

  const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      rules: { required: "Full name is required" },
      type: "text",
    },
    {
      name: "organization",
      label: "Organization / Company",
      rules: { required: "Organization is required" },
      type: "text",
    },
    {
      name: "designation",
      label: "Designation / Role",
      rules: { required: "Designation is required" },
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email address",
        },
      },
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      rules: { required: "Phone number is required" },
      type: "tel",
    },
    {
      name: "website",
      label: "Website (if applicable)",
      rules: {},
      type: "url",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-800 rounded-xl p-12 shadow-2xl max-w-md text-center border border-amber-500/20"
        >
          <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/30">
            <svg
              className="w-10 h-10 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-amber-400 mb-3">THANK YOU!</h1>
          <p className="text-gray-300 mb-2 font-medium">
            Registration Successful
          </p>
          <p className="text-gray-400 mb-6 text-sm">
            Thank you for visiting our booth at DEFCOMM Exhibition.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
            <p className="text-amber-400 text-sm font-mono">
              🛡️ VISIT US AT: <strong>BOOTH A24</strong>
            </p>
            <p className="text-amber-300/80 text-xs mt-1">
              MAIN EXHIBITION HALL
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition font-semibold text-sm border border-amber-500/30"
          >
            REGISTER ANOTHER VISITOR
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-amber-500/20"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-8 py-6 text-white relative overflow-hidden border-b border-amber-500/20">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 30 L70 90 L30 90 L10 30 Z' fill='none' stroke='%23f59e0b' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "120px",
              }}
            ></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-bold mb-2 tracking-tight text-white">
              DEFCOMM EXHIBITION
            </h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-3"></div>
            <p className="text-amber-300 text-lg font-light mb-1">
              OPERATION IRON SHIELD
            </p>
            <p className="text-amber-400 text-sm font-semibold tracking-wide">
              SECURING COMMUNICATIONS, SYSTEMS & SKIES
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 bg-gray-800">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-amber-400 text-sm font-semibold">
                VISITOR REGISTRATION
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              BOOTH REGISTRATION FORM
            </h2>
            <p className="text-gray-400 text-sm">
              Please provide your details to register at our booth
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm"
                >
                  ⚠️ {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              {formFields.map((field, index) => (
                <Controller
                  key={field.name}
                  name={field.name}
                  control={control}
                  rules={field.rules}
                  render={({ field: input }) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-amber-400 mb-2">
                        {field.label}
                        {field.rules?.required && (
                          <span className="text-red-400 ml-1">*</span>
                        )}
                      </label>

                      <input
                        {...input}
                        type={field.type}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-gray-700 text-white placeholder-gray-500 ${
                          errors[field.name]
                            ? "border-red-500"
                            : "border-gray-600"
                        }`}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />

                      {errors[field.name] && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-xs mt-1"
                        >
                          ⚠️ {errors[field.name].message}
                        </motion.p>
                      )}
                    </motion.div>
                  )}
                />
              ))}
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-3 rounded-lg font-semibold text-sm tracking-wide transition shadow-lg border border-amber-500/30"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    PROCESSING...
                  </div>
                ) : (
                  "SUBMIT REGISTRATION"
                )}
              </motion.button>

              <div className="mt-3 text-center">
                <p className="text-gray-500 text-xs">
                  Your information will be kept secure and confidential
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 border-t border-amber-500/20 px-6 py-3">
          <div className="text-center text-xs text-gray-500">
            <span>
              DEFCOMM Exhibition 2024 • Booth A24 • Main Exhibition Hall
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExhibitionRegistrationForm;
