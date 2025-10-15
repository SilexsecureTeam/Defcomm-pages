import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import InputField from "../InputField";
import { professionalFields } from "../../../utils/fields";

const ProfessionalBackgroundStep = ({
  formData,
  handleInputChange,
  handleProfessionalFieldChange,
  prevStep,
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
          Professional Background
        </h3>
        <p className="text-gray-600 mb-6">
          Help us tailor the experience for you
        </p>

        <FieldsOfInterest
          formData={formData}
          handleProfessionalFieldChange={handleProfessionalFieldChange}
        />

        {formData.professional_background.fields.includes("Other") && (
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
            <InputField
              label="Please specify other field"
              value={formData.professional_background.other}
              onChange={(e) =>
                handleInputChange(
                  "professional_background",
                  "other",
                  e.target.value
                )
              }
            />
          </div>
        )}
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Back
        </button>
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

const FieldsOfInterest = ({ formData, handleProfessionalFieldChange }) => (
  <div className="mb-8">
    <label className="block text-lg font-medium text-gray-800 mb-4">
      Fields of Interest (Select all that apply)
    </label>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {professionalFields.map((field) => (
        <FieldCheckbox
          key={field}
          field={field}
          checked={formData.professional_background.fields.includes(field)}
          onChange={handleProfessionalFieldChange}
        />
      ))}
    </div>
  </div>
);

const FieldCheckbox = ({ field, checked, onChange }) => {
  const handleClick = () => onChange(field);

  return (
    <div
      className={`flex items-center p-3 border rounded-xl transition-colors duration-300 cursor-pointer
        ${
          checked
            ? "border-green-500 bg-green-50"
            : "border-gray-200 hover:bg-green-50"
        }`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        className="h-5 w-5 text-green-600 focus:ring-green-500 rounded pointer-events-none"
        checked={checked}
        readOnly
      />
      <span className="ml-3 block text-sm font-medium text-gray-700 select-none">
        {field}
      </span>
    </div>
  );
};

export default ProfessionalBackgroundStep;
