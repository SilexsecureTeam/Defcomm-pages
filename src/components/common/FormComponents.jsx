import React from "react";
import { Controller } from "react-hook-form";
import { occupations, STEPS } from "../../utils/fields";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const InputField = ({
  label,
  name,
  control,
  rules,
  type = "text",
  placeholder,
  className = "",
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {rules?.required && <span className="text-red-500">*</span>}
        </label>
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border bg-white/90 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-300 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export const SelectField = ({
  label,
  name,
  control,
  rules,
  options,
  placeholder,
  className = "",
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {rules?.required && <span className="text-red-500">*</span>}
        </label>
        <select
          {...field}
          className={`w-full h-12 px-4 border bg-white/90 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export const CheckboxField = ({ label, name, control, description }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange } }) => (
      <label className="flex items-start space-x-3 p-3 hover:bg-green-50 rounded-lg transition-colors duration-200 cursor-pointer border border-gray-200">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="mt-1 h-4 w-4 text-green-700 focus:ring-green-700 border-gray-300 rounded"
        />
        <div className="flex-1">
          <span className="text-sm font-medium text-gray-900">{label}</span>
          {description && (
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </label>
    )}
  />
);

export const RadioGroup = ({
  label,
  name,
  control,
  rules,
  options,
  className = "",
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { value, onChange }, fieldState: { error } }) => (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label} {rules?.required && <span className="text-red-500">*</span>}
        </label>
        <div className="space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="h-4 w-4 text-green-700 focus:ring-green-700 border-gray-300"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export const SuccessScreen = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-12"
  >
    <div className="w-20 h-20 bg-green-700 rounded-full mx-auto flex items-center justify-center mb-6">
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">
      Application Submitted!
    </h2>
    <p className="text-gray-600 mb-6">
      Thank you for your interest in volunteering with DEFCOMM. We've received
      your application and will be in touch soon.
    </p>
    <button
      onClick={onReset}
      className="px-6 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 border border-green-600"
    >
      Register Another Volunteer
    </button>
  </motion.div>
);

// ---------- Progress Bar Component ----------
export const ProgressBar = ({ currentStep }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        Step {currentStep} of {STEPS.length}
      </div>
      <div className="text-sm font-semibold text-green-700">
        DEFCOMM Volunteer Program
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 bg-gradient-to-r from-green-700 to-green-800 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
      />
    </div>
    <div className="flex justify-between items-start mt-4 overflow-x-auto">
      {STEPS.map((step, index) => (
        <React.Fragment>
          <div key={step.key} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 border-2 ${
                currentStep > index + 1
                  ? "bg-green-700 text-white border-green-700"
                  : currentStep === index + 1
                  ? "bg-white text-green-700 border-green-700 shadow-lg"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {currentStep > index + 1 ? "✓" : step.icon}
            </div>
            <span
              className={`text-[10px] md:text-xs mt-2 max-w-20 font-medium hidden md:block text-center ${
                currentStep === index + 1 ? "text-green-700" : "text-gray-500"
              }`}
            >
              {step.title}
            </span>
          </div>

          {index < STEPS.length - 1 && (
            <div
              className={`self-center flex-1 h-[2px] mx-2 ${
                currentStep > index + 1 ? "bg-green-700" : "bg-gray-200"
              } transition-colors duration-300`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// ---------- Step Components ----------
export const PersonalStep = ({ control, nextStep }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
        <h3 className="text-xl font-bold">Personal Information</h3>
        <p className="text-green-100 text-sm mt-1">
          Basic details for identification and communication
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
        />
        <InputField label="Middle Name" name="middleName" control={control} />
        <InputField
          label="Last Name"
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Preferred Name"
          name="preferredName"
          control={control}
          placeholder="Optional"
        />
        <RadioGroup
          label="Gender"
          name="gender"
          control={control}
          rules={{ required: "Gender is required" }}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            // { value: "prefer_not", label: "Prefer not to say" },
            // { value: "other", label: "Other" },
          ]}
        />
      </div>

      <Controller
        name="gender"
        control={control}
        render={({ field: { value } }) =>
          value === "other" && (
            <InputField
              label="Please specify your gender"
              name="otherGender"
              control={control}
              rules={{ required: "Please specify your gender" }}
            />
          )
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          control={control}
          type="date"
          rules={{ required: "Date of birth is required" }}
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          control={control}
          placeholder="+234..."
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^\+?[\d\s-()]+$/,
              message: "Please enter a valid phone number",
            },
          }}
        />
        <InputField
          label="Email Address"
          name="email"
          control={control}
          type="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email address",
            },
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="City / State"
          name="cityState"
          control={control}
          rules={{ required: "City/State is required" }}
        />
        <InputField
          label="Nationality"
          name="nationality"
          control={control}
          rules={{ required: "Nationality is required" }}
        />
        <RadioGroup
          label="Do you have any disability or medical condition?"
          name="hasDisability"
          control={control}
          rules={{ required: "This field is required" }}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ]}
        />
      </div>

      <Controller
        name="hasDisability"
        control={control}
        render={({ field: { value } }) =>
          value === "yes" && (
            <InputField
              label="Please specify your disability or medical condition"
              name="disabilityDetails"
              control={control}
              rules={{ required: "Please provide details" }}
            />
          )
        }
      />

      <div className="flex justify-between pt-6">
        <div />
        <button
          type="button"
          onClick={nextStep}
          className="px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg border border-green-600"
        >
          Continue to Professional Info
        </button>
      </div>
    </motion.div>
  );
};

export const ProfessionalStep = ({ control, nextStep, prevStep }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
        <h3 className="text-xl font-bold">Professional Background</h3>
        <p className="text-green-100 text-sm mt-1">
          Helps organisers assign suitable roles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Current Occupation / Field"
          name="occupation"
          control={control}
          rules={{ required: "Occupation is required" }}
          options={occupations}
          placeholder="Select your occupation"
        />
        <InputField
          label="Organization / Institution"
          name="organization"
          control={control}
          placeholder="Optional"
        />
      </div>

      <Controller
        name="occupation"
        control={control}
        render={({ field: { value } }) =>
          value === "other" && (
            <InputField
              label="Please specify your occupation"
              name="otherOccupation"
              control={control}
              rules={{ required: "Please specify your occupation" }}
            />
          )
        }
      />

      <InputField
        label="LinkedIn or Portfolio URL"
        name="portfolioUrl"
        control={control}
        type="url"
        placeholder="https://"
      />

      <InputField
        label="Technical / Soft Skills"
        name="skills"
        control={control}
        rules={{ required: "Skills are required" }}
        placeholder="e.g., networking, event coordination, writing, photography, etc."
      />

      <RadioGroup
        label="Have you volunteered at a tech, cybersecurity, or community event before?"
        name="previousVolunteer"
        control={control}
        options={[
          { value: "no", label: "No" },
          { value: "yes", label: "Yes" },
        ]}
      />

      <Controller
        name="previousVolunteer"
        control={control}
        render={({ field: { value } }) =>
          value === "yes" && (
            <InputField
              label="Please provide details of your previous volunteer experience"
              name="previousVolunteerDetails"
              control={control}
              rules={{ required: "Please provide details" }}
              placeholder="Where / When / Role"
            />
          )
        }
      />

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg border border-green-600"
        >
          Continue to Volunteer Areas
        </button>
      </div>
    </motion.div>
  );
};
