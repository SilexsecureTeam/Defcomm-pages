import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const ParticipationStep = ({
  formData,
  errors,
  handleInputChange,
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
          Participation Details
        </h3>
        <p className="text-gray-600 mb-6">How will you be joining us?</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AttendanceModeSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
          <RegistrationTypeSection
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
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

const AttendanceModeSection = ({ formData, errors, handleInputChange }) => (
  <div className="bg-gray-50 p-6 rounded-2xl">
    <label className="block text-lg font-medium text-gray-800 mb-4">
      Attendance Mode *
    </label>
    {errors.attendance_mode && (
      <p className="text-red-500 text-sm mb-2">{errors.attendance_mode}</p>
    )}
    <div className="space-y-4">
      <RadioOption
        id="physical"
        name="attendance_mode"
        value="Physical"
        label="Physical Attendance"
        description="Join us in person at our venue"
        checked={formData.participation_details.attendance_mode === "Physical"}
        onChange={() =>
          handleInputChange(
            "participation_details",
            "attendance_mode",
            "Physical"
          )
        }
        hasError={!!errors.attendance_mode}
      />
      <RadioOption
        id="virtual"
        name="attendance_mode"
        value="Virtual"
        label="Virtual Attendance"
        description="Join remotely via our online platform"
        checked={formData.participation_details.attendance_mode === "Virtual"}
        onChange={() =>
          handleInputChange(
            "participation_details",
            "attendance_mode",
            "Virtual"
          )
        }
        hasError={!!errors.attendance_mode}
      />
    </div>
  </div>
);

const RegistrationTypeSection = ({ formData, errors, handleInputChange }) => (
  <div className="bg-gray-50 p-6 rounded-2xl">
    <label className="block text-lg font-medium text-gray-800 mb-4">
      Registration Type *
    </label>
    {errors.registration_type && (
      <p className="text-red-500 text-sm mb-2">{errors.registration_type}</p>
    )}
    <div className="space-y-4">
      <RadioOption
        id="individual"
        name="registration_type"
        value="Individual Participant"
        label="Individual Participant"
        description="Registering for myself only"
        checked={
          formData.participation_details.registration_type ===
          "Individual Participant"
        }
        onChange={() =>
          handleInputChange(
            "participation_details",
            "registration_type",
            "Individual Participant"
          )
        }
        hasError={!!errors.registration_type}
      />
      <RadioOption
        id="group"
        name="registration_type"
        value="Group Registration"
        label="Group Registration"
        description="Registering for multiple participants"
        disabled={true}
        checked={
          formData.participation_details.registration_type ===
          "Group Registration"
        }
        onChange={() =>
          handleInputChange(
            "participation_details",
            "registration_type",
            "Group Registration"
          )
        }
        hasError={!!errors.registration_type}
      />
    </div>
  </div>
);

const RadioOption = ({
  id,
  name,
  label,
  description,
  checked,
  onChange,
  hasError,
  disabled = false,
}) => (
  <div
    onClick={onChange}
    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors duration-300
      ${
        hasError
          ? "border-red-400"
          : checked
          ? "border-green-500"
          : "border-gray-200"
      } ${
      disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "hover:bg-green-50"
    }
      hover:border-green-400`}
  >
    <div
      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center mr-3
        ${
          checked ? "border-green-500 bg-green-500" : "border-gray-300 bg-white"
        }`}
    >
      {checked && <FaCheck className="text-white text-xs" />}
    </div>
    <div>
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  </div>
);

export default ParticipationStep;
