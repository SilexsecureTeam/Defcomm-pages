import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa"; // import react-icon

const ConfirmationStep = ({
  formData,
  errors,
  handleInputChange,
  prevStep,
  isSubmitting,
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
          Almost Done!
        </h3>
        <p className="text-gray-600 mb-6">
          Review your information and confirm
        </p>

        <SummaryCard formData={formData} />
        <ConsentSection
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </div>

      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 text-sm">{errors.submit}</p>
        </div>
      )}

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Back
        </button>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </motion.div>
  );
};

const SummaryCard = ({ formData }) => (
  <div className="bg-gray-50 p-6 rounded-2xl mb-6">
    <h4 className="text-lg font-semibold text-gray-800 mb-4">
      Registration Summary
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <SummaryItem
        label="Name"
        value={formData.personal_information.full_name}
      />
      <SummaryItem
        label="Organization"
        value={formData.personal_information.organization}
      />
      <SummaryItem label="Email" value={formData.personal_information.email} />
      <SummaryItem
        label="Country"
        value={formData.personal_information.country}
      />
      <SummaryItem
        label="Attendance"
        value={formData.participation_details.attendance_mode}
      />
      <SummaryItem
        label="Registration Type"
        value={formData.participation_details.registration_type}
      />
    </div>
  </div>
);

const SummaryItem = ({ label, value }) => (
  <div>
    <p className="text-gray-600">{label}:</p>
    <p className="font-medium">{value}</p>
  </div>
);

const ConsentSection = ({ formData, errors, handleInputChange }) => (
  <div className="space-y-6">
    <ConsentCheckbox
      id="information_use"
      checked={formData.consent.information_use}
      onChange={(e) =>
        handleInputChange("consent", "information_use", e.target.checked)
      }
      label="I consent to the use of my information for event registration and communication purposes."
      required={true}
      error={errors.information_use}
    />

    <ConsentCheckbox
      id="follow_up_updates"
      checked={formData.consent.follow_up_updates}
      onChange={(e) =>
        handleInputChange("consent", "follow_up_updates", e.target.checked)
      }
      label="I would like to receive follow-up information and updates about future events."
      required={true}
      error={errors.follow_up_updates}
    />

    <CalendarCheckbox
      checked={formData.consent.add_to_calendar}
      onChange={(e) =>
        handleInputChange("consent", "add_to_calendar", e.target.checked)
      }
    />
  </div>
);

const ConsentCheckbox = ({ id, checked, onChange, label, required, error }) => {
  const handleClick = () => onChange({ target: { checked: !checked } });

  return (
    <div
      className={`p-4 border rounded-xl cursor-pointer transition-colors duration-300
        ${error ? "border-red-200 bg-red-50" : "border-gray-200"}
        ${checked ? "border-green-500 bg-green-50" : ""}`}
      onClick={handleClick}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 relative h-5 w-5 mt-1 flex items-center justify-center border rounded text-white bg-green-600">
          {checked && <FaCheck className="text-white text-xs" />}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor={id}
            className="block text-sm text-gray-700 select-none"
          >
            <span className="font-medium">{label}</span> {required && "*"}
          </label>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

const CalendarCheckbox = ({ checked, onChange }) => {
  const handleClick = () => onChange({ target: { checked: !checked } });

  return (
    <div
      className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-colors duration-300 relative
        ${
          checked
            ? "border-green-500 bg-green-100"
            : "border-green-200 bg-green-50"
        }`}
      onClick={handleClick}
    >
      <div className="relative h-5 w-5 mt-1 flex items-center justify-center border rounded text-white bg-green-600">
        {checked && <FaCheck className="text-white text-xs" />}
      </div>

      <label
        htmlFor="add_to_calendar"
        className="ml-3 block text-sm text-gray-700 select-none"
      >
        <span className="font-medium">
          Add this event to my Google Calendar
        </span>
        <p className="text-gray-500 text-sm mt-1">
          We'll open Google Calendar where you can save the event details
        </p>
      </label>
    </div>
  );
};

const SubmitButton = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
    }`}
  >
    {isSubmitting ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
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
        Processing...
      </>
    ) : (
      <>
        <span>Complete Registration</span>
        <span className="ml-2">✓</span>
      </>
    )}
  </button>
);

export default ConfirmationStep;
