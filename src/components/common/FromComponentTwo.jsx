// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  CheckboxField,
  InputField,
  RadioGroup,
  SelectField,
} from "./FormComponents";

export const VolunteerAreasStep = ({ control, nextStep, prevStep }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
        <h3 className="text-xl font-bold">Volunteer Areas</h3>
        <p className="text-green-100 text-sm mt-1">
          Choose the area(s) you’d like to volunteer in
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CheckboxField
          label="Registration & Guest Relations"
          name="volunteerAreas.registration"
          control={control}
        />
        <CheckboxField
          label="Logistics & Venue Setup"
          name="volunteerAreas.logistics"
          control={control}
        />
        <CheckboxField
          label="Technical Support (IT / Network)"
          name="volunteerAreas.technical"
          control={control}
        />
        <CheckboxField
          label="Media & Communications"
          name="volunteerAreas.media"
          control={control}
        />
        <CheckboxField
          label="Documentation & Reporting"
          name="volunteerAreas.documentation"
          control={control}
        />
        <CheckboxField
          label="Hackathon Support Team"
          name="volunteerAreas.hackathon"
          control={control}
        />
        <CheckboxField
          label="Hospitality & Refreshments"
          name="volunteerAreas.hospitality"
          control={control}
        />
        <CheckboxField
          label="Health, Safety & Security"
          name="volunteerAreas.security"
          control={control}
        />
        <InputField
          label="Other Area (please specify)"
          name="otherArea"
          control={control}
          placeholder="Optional"
        />
      </div>

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
          Continue to Availability
        </button>
      </div>
    </motion.div>
  );
};

export const AvailabilityStep = ({ control, nextStep, prevStep }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 "
    >
      <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
        <h3 className="text-xl font-bold">Availability</h3>
        <p className="text-green-100 text-sm mt-1">
          Help us schedule your shifts properly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y divide-gray-800">
        <label className="font-medium text-gray-700">Event Days:</label>
        <div className="space-y-2 ">
          <CheckboxField
            label="Day 0 (Setup & Rehearsal)"
            name="availableDays.day0"
            control={control}
          />
          <CheckboxField
            label="Day 1 (Opening / Registration)"
            name="availableDays.day1"
            control={control}
          />
          <CheckboxField
            label="Day 2 (Main Hackathon / Competitions)"
            name="availableDays.day2"
            control={control}
          />
          <CheckboxField
            label="Day 3 (Closing / Awards / Cleanup)"
            name="availableDays.day3"
            control={control}
          />
        </div>

        <label className="font-medium text-gray-700">Preferred Shifts:</label>
        <div className="space-y-2">
          <CheckboxField
            label="Morning (7 AM – 12 PM)"
            name="preferredShifts.morning"
            control={control}
          />
          <CheckboxField
            label="Afternoon (12 PM – 5 PM)"
            name="preferredShifts.afternoon"
            control={control}
          />
          <CheckboxField
            label="Evening (5 PM – 10 PM)"
            name="preferredShifts.evening"
            control={control}
          />
          <CheckboxField
            label="Flexible / Any time needed"
            name="preferredShifts.flexible"
            control={control}
          />
        </div>

        <RadioGroup
          label="Would you be available for pre-event training or briefing?"
          name="preEventTraining"
          control={control}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
      </div>

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
          Continue to Emergency Contact
        </button>
      </div>
    </motion.div>
  );
};

export const EmergencyContactStep = ({ control, nextStep, prevStep }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
      <h3 className="text-xl font-bold">Emergency Contact</h3>
      <p className="text-green-100 text-sm mt-1">
        In case of emergencies, we may need to reach someone
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        label="Full Name"
        name="emergencyFullName"
        control={control}
        rules={{ required: "Required" }}
      />
      <InputField
        label="Relationship"
        name="emergencyRelationship"
        control={control}
        rules={{ required: "Required" }}
      />
      <InputField
        label="Phone Number"
        name="emergencyPhone"
        control={control}
        rules={{ required: "Required" }}
      />
      <InputField
        label="Email Address"
        name="emergencyEmail"
        control={control}
        type="email"
        placeholder="Optional"
      />
    </div>

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
        Continue to T-Shirt & ID
      </button>
    </div>
  </motion.div>
);

export const TshirtIdStep = ({ control, nextStep, prevStep }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
      <h3 className="text-xl font-bold">T-Shirt & ID Info</h3>
      <p className="text-green-100 text-sm mt-1">
        Your T-shirt size and previous DEFCOMM Volunteer ID
      </p>
    </div>

    <SelectField
      label="T-Shirt Size"
      name="tshirtSize"
      control={control}
      options={[
        { value: "XS", label: "XS" },
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" },
      ]}
      placeholder="Select size"
      rules={{ required: "T-shirt size is required" }}
    />

    <RadioGroup
      label="Do you already have a DEFCOMM Volunteer ID from a previous event?"
      name="hasVolunteerId"
      control={control}
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]}
      rules={{ required: "This field is required" }}
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
        Continue to Declaration
      </button>
    </div>
  </motion.div>
);

export const DeclarationStep = ({
  control,
  prevStep,
  submitForm,
  isSubmitting,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 py-5 rounded-xl text-white shadow-lg border border-green-700">
      <h3 className="text-xl font-bold">Declaration & Consent</h3>
      <p className="text-green-100 text-sm mt-1">
        Read carefully and consent to our terms
      </p>
    </div>

    <CheckboxField
      label="I agree and consent to the Code of Conduct, Media Consent, and Data Privacy Notice"
      name="agreeToTerms"
      control={control}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        label="Signature"
        name="signature"
        control={control}
        placeholder="Type your full name"
        rules={{ required: "Signature is required" }}
      />
      <InputField
        label="Date"
        name="signatureDate"
        control={control}
        type="date"
        rules={{ required: "Date is required" }}
      />
    </div>

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
        onClick={submitForm}
        disabled={isSubmitting}
        className="px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg border border-green-600"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </div>
  </motion.div>
);
