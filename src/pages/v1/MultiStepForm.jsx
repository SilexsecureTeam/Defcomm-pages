import React, { useState } from "react";
import HeadNav from "../../components/v2/HeadNav";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    helpText: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.helpText.trim())
      newErrors.helpText = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      // Handle form submission logic here, e.g., send data to API
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="">
      <HeadNav />
      <div className="min-h-[80%] py-20 px-4 md:px-12 flex items-center justify-center bg-black">
        <div className="w-full max-w-peak mx-auto">
          <div className="h-10 w-10 bg-[#C6FC2B]"></div>
          {submitted ? (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold my-3 text-[#B8B8B8]">
                Thanks for submitting. We would get back to you.
              </h2>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {currentStep === 1 ? (
                <div className="">
                  <h2 className="text-2xl font-bold my-3 text-[#B8B8B8]">
                    We'd love to hear from you
                  </h2>
                  <h2 className="text-lg font-normal max-w-[750px] mb-6 text-[#B8B8B8]">
                    Do you have a story you'd like to share about our service?
                    Would you like to learn more about working with us? Enter
                    your email and company name (if applicable) and we'll be in
                    touch shortly.
                  </h2>
                </div>
              ) : (
                <h2 className="text-2xl font-bold my-3 text-[#B8B8B8]">
                  How Can We Help?
                </h2>
              )}

              <form onSubmit={handleSubmit}>
                {currentStep === 1 ? (
                  <div className="space-y-8 max-w-[1000px]">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-white"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-white"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-white"
                      >
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="py-2 px-4 bg-[#89AF20] text-black font-semibold rounded-md shadow-sm hover:bg-[#89AF20]/70 focus:outline-none focus:ring-2 focus:ring-[#89AF20]"
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8 max-w-[1000px]">
                    <div>
                      <textarea
                        id="helpText"
                        name="helpText"
                        value={formData.helpText}
                        onChange={handleChange}
                        rows="4"
                        placeholder="type your answer here"
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.helpText && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.helpText}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="py-2 px-4 bg-[#89AF20] text-black font-semibold rounded-md shadow-sm hover:bg-[#89AF20]/70 focus:outline-none focus:ring-2 focus:ring-[#89AF20]"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-4 bg-[#89AF20] text-black font-semibold rounded-md shadow-sm hover:bg-[#89AF20]/70 focus:outline-none focus:ring-2 focus:ring-[#89AF20]"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
