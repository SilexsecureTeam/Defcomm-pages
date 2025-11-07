import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { STEPS } from "../utils/fields";
import bounty from "../assets/bounty-bg.svg";
import bountyLogo from "../assets/bounty-img.svg";
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
import useVolunteerForm from "../hooks/useVolunteerForm";

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
    resetStep,
    submitForm,
  } = useVolunteerForm();

  const onFormSubmit = async () => {
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
    resetStep();
    setIsSubmitted(false);
    localStorage.removeItem("volunteer_form_progress");
    
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
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-8 pt-0 text-white shadow-xl border border-green-700 mb-6">
            <img src={bountyLogo} alt="bounty logo" className="w-40 mx-auto" />
            <div className="flex flex-wrap items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-3xl">DC</span>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">
                  DEFCOMM Volunteer Registration
                </h1>
                <div className="flex justify-center items-center space-x-4">
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                  <p className="text-green-200 text-lg">
                    Operation Iron Shield
                  </p>
                  <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                </div>
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
