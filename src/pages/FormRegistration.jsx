import React from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { STEPS, stepValidations } from "../utils/fields";
import bounty from "../assets/bounty-bg.svg";
import {
  PersonalStep,
  ProfessionalStep,
  ProgressBar,
  SuccessScreen,
} from "../components/common/FormComponents";
import {
  AvailabilityStep,
  DeclarationStep,
  EmergencyContactStep,
  TshirtIdStep,
  VolunteerAreasStep,
} from "../components/common/FromComponentTwo";
import parsePhoneNumberFromString from "libphonenumber-js";

const useVolunteerForm = () => {
  const [currentStep, setCurrentStep] = React.useState(3);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      // Personal Information
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      gender: "",
      otherGender: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      cityState: "",
      nationality: "",
      hasDisability: "no",
      disabilityDetails: "",
      // Professional Background
      occupation: "",
      otherOccupation: "",
      organization: "",
      portfolioUrl: "",
      skills: "",
      previousVolunteer: "no",
      previousVolunteerDetails: "",
      // Volunteer Areas
      volunteerAreas: {
        registration: false,
        logistics: false,
        technical: false,
        media: false,
        documentation: false,
        hackathon: false,
        hospitality: false,
        security: false,
      },
      otherArea: "",
      // Availability
      availableDays: {
        day0: false,
        day1: false,
        day2: false,
        day3: false,
      },
      preferredShifts: {
        morning: false,
        afternoon: false,
        evening: false,
        flexible: false,
      },
      preEventTraining: "no",
      // Emergency Contact
      emergencyFullName: "",
      emergencyRelationship: "",
      emergencyPhone: "",
      emergencyEmail: "",
      // Logistics
      tshirtSize: "",
      hasVolunteerId: "no",
      // Declaration
      agreeToTerms: false,
      signature: "",
      signatureDate: "",
    },
  });

  const { trigger, getValues } = methods;

  const validateStep = async (step) => {
    const fields = stepValidations[step];
    if (fields.length === 0) return true;

    const result = await trigger(fields);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const formData = getValues();

      // Parse phone number
      const phoneNumber = parsePhoneNumberFromString(formData.phoneNumber);

      // Build payload
      const payload = {
        name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
        email: formData.email.toLowerCase(),
        phone: phoneNumber ? phoneNumber.format("E.164") : formData.phoneNumber,
        // form_id,
        // plan_id,
        personal_information: {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          preferredName: formData.preferredName,
          gender: formData.gender,
          otherGender: formData.otherGender,
          dateOfBirth: formData.dateOfBirth,
          phoneNumber: phoneNumber
            ? phoneNumber.format("E.164")
            : formData.phoneNumber,
          email: formData.email.toLowerCase(),
          cityState: formData.cityState,
          nationality: formData.nationality,
          hasDisability: formData.hasDisability,
          disabilityDetails: formData.disabilityDetails,
        },
        professional_background: {
          occupation: formData.occupation,
          otherOccupation: formData.otherOccupation,
          organization: formData.organization,
          portfolioUrl: formData.portfolioUrl,
          skills: formData.skills,
          previousVolunteer: formData.previousVolunteer,
          previousVolunteerDetails: formData.previousVolunteerDetails,
        },
        volunteer_areas: {
          ...formData.volunteerAreas,
          otherArea: formData.otherArea,
        },
        availability: {
          availableDays: formData.availableDays,
          preferredShifts: formData.preferredShifts,
          preEventTraining: formData.preEventTraining,
        },
        emergency_contact: {
          emergencyFullName: formData.emergencyFullName,
          emergencyRelationship: formData.emergencyRelationship,
          emergencyPhone: formData.emergencyPhone,
          emergencyEmail: formData.emergencyEmail,
        },
        logistics: {
          tshirtSize: formData.tshirtSize,
          hasVolunteerId: formData.hasVolunteerId,
        },
        declaration: {
          agreeToTerms: formData.agreeToTerms,
          signature: formData.signature,
          signatureDate: formData.signatureDate,
        },
      };

      console.log(payload);

      const response = await axios.post(
        "https://backend.defcomm.ng/api/web/eventform",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setIsSubmitted(true);
        console.log(response.data.message || "Registration successful!");
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Optionally, set an error state to display in the UI
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentStep,
    setCurrentStep,
    isSubmitting,
    isSubmitted,
    setIsSubmitted,
    methods,
    nextStep,
    prevStep,
    submitForm,
  };
};

// ---------- Main Form Component ----------
const VolunteerRegistrationForm = () => {
  const {
    currentStep,
    isSubmitting,
    isSubmitted,
    setIsSubmitted,
    methods,
    nextStep,
    prevStep,
    submitForm,
  } = useVolunteerForm();

  const onFormSubmit = async (data) => {
    await submitForm();
  };

  const { control, handleSubmit, reset } = methods;

  const stepComponents = {
    1: <PersonalStep control={control} nextStep={nextStep} />,
    2: (
      <ProfessionalStep
        control={control}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: (
      <VolunteerAreasStep
        control={control}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    4: (
      <AvailabilityStep
        control={control}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    5: (
      <EmergencyContactStep
        control={control}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    6: (
      <TshirtIdStep control={control} nextStep={nextStep} prevStep={prevStep} />
    ),
    7: (
      <DeclarationStep
        control={control}
        prevStep={prevStep}
        submitForm={handleSubmit(onFormSubmit)}
        isSubmitting={isSubmitting}
      />
    ),
  };

  const resetForm = () => {
    reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-200">
            <SuccessScreen onReset={resetForm} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-8 px-4 relative"
      style={{
        backgroundImage: `
      linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), rgba(21, 128, 61, 0.2)),
      url(${bounty})
    `,
        backgroundSize: "cover, 300px 300px",
        backgroundPosition: "center, center",
        backgroundAttachment: "fixed",
        backgroundColor: "#f0fdf4",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-8 text-white shadow-xl border border-green-700 mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-3xl">DC</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold mb-2">
                  DEFCOMM Volunteer Registration
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                  <p className="text-green-200 text-lg">
                    Operation Iron Shield
                  </p>
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                </div>
                <p className="text-green-200 mt-2">By DEFCOMM Solutions Ltd.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white/60 rounded-2xl shadow-xl overflow-hidden border border-green-200">
          <div className="bg-gradient-to-r from-green-800 to-green-900 py-6 px-8 border-b border-green-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {STEPS[currentStep - 1]?.title}
                </h2>
                <p className="text-green-200 text-sm mt-1">
                  Step {currentStep} of {STEPS.length} • DEFCOMM Volunteer
                  Program
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <ProgressBar currentStep={currentStep} />
            <AnimatePresence mode="wait">
              <motion.form
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onFormSubmit)}
                className="space-y-6"
              >
                {stepComponents[currentStep]}
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
