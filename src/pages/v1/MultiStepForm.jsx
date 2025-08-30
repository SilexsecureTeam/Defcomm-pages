import React, { useState, useRef, useEffect } from "react";
import HeadNav from "../../components/v2/HeadNav";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    company: "",
    detail: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  // Scroll to top on step change
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

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
    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[0-9]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!formData.company.trim()) newErrors.company = "Company is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.detail.trim()) newErrors.detail = "This field is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep2()) {
      try {
        setLoading(true);
        await axios.post(
          "https://backend.defcomm.ng/api/web/contact",
          formData
        );
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ api: "Failed to submit form. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="">
      <Helmet>
        <title>
          Contact Us | Defcomm® Secure Communication & Encryption Experts
        </title>
        <meta
          name="description"
          content="Get in touch with Defcomm® for inquiries on encrypted devices, secure communication platforms, partnerships, or support. Our team is here to help governments, enterprises, and organizations stay protected with end-to-end encryption."
        />
      </Helmet>
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
              ref={formRef}
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
                    {/* Step 1 fields */}
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-white"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="e.g Mubarak"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.first_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-white"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="e.g Afolabi"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.last_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.last_name}
                        </p>
                      )}
                    </div>
                    {/* Email */}
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
                        placeholder="e.g afowebdev@gmail.com"
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g +2348106244890"
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 
               border-b border-b-gray-300 rounded-md shadow-sm 
               focus:outline-none focus:ring-[#2d3f14] 
               focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Company */}
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
                        placeholder="e.g Silexsecure"
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
                    {/* Step 2 fields */}
                    <div>
                      <textarea
                        id="detail"
                        name="detail"
                        value={formData.detail}
                        onChange={handleChange}
                        rows="4"
                        placeholder="type your answer here"
                        className="mt-1 block w-full bg-transparent text-white px-3 py-2 border-b border-b-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2d3f14] focus:border-[#2d3f14] sm:text-sm"
                      />
                      {errors.detail && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.detail}
                        </p>
                      )}
                    </div>
                    {errors.api && (
                      <p className="text-sm text-red-600">{errors.api}</p>
                    )}
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
                        disabled={loading}
                        className={`py-2 px-4 flex items-center justify-center gap-2 bg-[#89AF20] text-black font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#89AF20] ${
                          loading
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:bg-[#89AF20]/70"
                        }`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="animate-spin" /> Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
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
