import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { STEPS, stepValidations } from "../utils/fields";
import parsePhoneNumberFromString from "libphonenumber-js";
import axios from "axios";

const STORAGE_KEY = "volunteer_form_progress";

const useVolunteerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1️⃣ Load saved data from localStorage
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      // Merge saved data with default values
      ...{
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
        hasDisability: "",
        disabilityDetails: "",
        occupation: "",
        otherOccupation: "",
        organization: "",
        portfolioUrl: "",
        skills: "",
        previousVolunteer: "",
        previousVolunteerDetails: "",
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
        preEventTraining: "",
        emergencyFullName: "",
        emergencyRelationship: "",
        emergencyPhone: "",
        emergencyEmail: "",
        tshirtSize: "",
        hasVolunteerId: "",
        agreeToTerms: false,
        signature: "",
        signatureDate: "",
      },
      ...savedData?.formValues,
    },
  });

  const { trigger, getValues, watch } = methods;

  // 2️⃣ Auto-save whenever the form changes
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentStep,
          formValues: value,
        })
      );
    });
    return () => subscription.unsubscribe();
  }, [watch, currentStep]);

  // 3️⃣ Restore current step
  useEffect(() => {
    if (savedData?.currentStep) {
      setCurrentStep(savedData.currentStep);
    }
  }, []);

  // 4️⃣ Step validation
  const validateStep = async (step) => {
    const fields = stepValidations[step];
    if (!fields || fields.length === 0) return true;
    return await trigger(fields);
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

  const resetStep = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 5️⃣ Submit final payload
  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const formData = getValues();
      const phoneNumber = parsePhoneNumberFromString(formData.phoneNumber);

      const payload = {
        name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
        email: formData.email.toLowerCase(),
        phone: phoneNumber ? phoneNumber.format("E.164") : formData.phoneNumber,
        form_id: import.meta.env.VITE_BOUNTY_FORM_ID,
        plan_id: import.meta.env.VITE_BOUNTY_PLAN_ID,
        fields: {
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
        },
      };

      const response = await axios.post(
        "https://backend.defcomm.ng/api/web/eventform",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setIsSubmitted(true);
        localStorage.removeItem(STORAGE_KEY); // ✅ Clear saved data after success
        console.log(response.data.message || "Registration successful!");
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
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
    resetStep,
    submitForm,
  };
};

export default useVolunteerForm;
