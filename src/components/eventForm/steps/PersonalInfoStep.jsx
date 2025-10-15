import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import InputField from "../InputField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PersonalInfoStep = ({
  formData,
  errors,
  handleInputChange,
  nextStep,
}) => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Personal Information
        </h3>
        <p className="text-gray-600 mb-6">Tell us about yourself</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            type="text"
            required={true}
            value={formData.personal_information.full_name}
            onChange={(e) =>
              handleInputChange(
                "personal_information",
                "full_name",
                e.target.value
              )
            }
            error={errors.full_name}
          />

          <InputField
            label="Professional Title"
            type="text"
            value={formData.personal_information.title}
            required={true}
            error={errors.title}
            onChange={(e) =>
              handleInputChange("personal_information", "title", e.target.value)
            }
          />

          <InputField
            label="Organization"
            type="text"
            required={true}
            value={formData.personal_information.organization}
            onChange={(e) =>
              handleInputChange(
                "personal_information",
                "organization",
                e.target.value
              )
            }
            error={errors.organization}
          />

          <InputField
            label="Country"
            type="text"
            required={true}
            value={formData.personal_information.country}
            onChange={(e) =>
              handleInputChange(
                "personal_information",
                "country",
                e.target.value
              )
            }
            error={errors.country}
          />

          <InputField
            label="Email Address"
            type="email"
            required={true}
            value={formData.personal_information.email}
            onChange={(e) =>
              handleInputChange("personal_information", "email", e.target.value)
            }
            error={errors.email}
          />

          {/* Phone Input */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div
              className={`w-full rounded-xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            >
              <PhoneInput
                country={"ng"}
                value={formData.personal_information.phone}
                onChange={(phone) =>
                  handleInputChange("personal_information", "phone", phone)
                }
                containerClass="!w-full"
                inputClass="!w-full !h-12 !px-4 !py-3 !pl-14 !border-0 !rounded-xl"
                buttonClass="!border-0 !bg-transparent !rounded-l-xl !w-12"
                dropdownClass="!rounded-xl !min-w-[280px]"
                specialLabel=""
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  paddingLeft: "52px",
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent",
                  borderRadius: "12px 0 0 12px",
                  width: "48px",
                }}
                containerStyle={{
                  width: "100%",
                }}
                dropdownStyle={{
                  minWidth: "280px",
                }}
                enableSearch={true}
                searchStyle={{
                  width: "90%",
                  margin: "0px auto",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <div></div>
        <button
          type="button"
          onClick={nextStep}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default PersonalInfoStep;
