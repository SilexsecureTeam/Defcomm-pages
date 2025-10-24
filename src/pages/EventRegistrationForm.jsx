import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  addToGoogleCalendar,
  containerVariants,
  formStepVariants,
  itemVariants,
} from "../utils/formatter";
import FormHeader from "../components/eventForm/FormHeader";
import ProgressBar from "../components/eventForm/ProgressBar";
import PersonalInfoStep from "../components/eventForm/steps/PersonalInfoStep";
import ParticipationStep from "../components/eventForm/steps/ParticipationStep";
import ProfessionalBackgroundStep from "../components/eventForm/steps/ProfessionalBackgroundStep";
import ConfirmationStep from "../components/eventForm/steps/ConfirmationStep";
import SuccessScreen from "../components/eventForm/SuccessScreen";
import axios from "axios";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import EventFooter from "../components/eventForm/EventFooter";

const EventRegistrationForm = ({ eventDetails = {}, apiConfig = {} }) => {
  const {
    title = "Event Title",
    organizer = "Organizer Name",
    slogan,
    tagline,
    date,
    accentColor = "from-green-600 to-oliveDark",
    socialLinks = {},
    contact = {},
  } = eventDetails;

  const {
    form_id = "eyJpdiI6IldEeE5rY2kreXZMNVJqbEIyVnVTbVE9PSIsInZhbHVlIjoiUHJyM3lJaTVpbWhtL0lOck1mMlM5dz09IiwibWFjIjoiZGVkMzA4MGM0Y2JjM2E2ODkxZWExZjU3MzA3ODkzNzQ1YzhlNGYxYzc0NTE5YjcyNGJhNWE3NzBjN2JjYTJmNiIsInRhZyI6IiJ9",
    plan_id = "3SdxGT1V6fQx0z4sGVNXco",
  } = apiConfig;

  const [formData, setFormData] = useState({
    personal_information: {
      full_name: "",
      title: "",
      organization: "",
      country: "",
      email: "",
      phone: "",
    },
    participation_details: {
      attendance_mode: "",
      registration_type: "",
    },
    professional_background: {
      fields: [],
      other: "",
    },
    consent: {
      information_use: false,
      follow_up_updates: false,
      add_to_calendar: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: {
        if (!formData.personal_information.full_name.trim()) {
          newErrors.full_name = "Full name is required";
        }
        if (!formData.personal_information.title.trim()) {
          newErrors.title = "Professional title is required";
        }
        if (!formData.personal_information.organization.trim()) {
          newErrors.organization = "Organization is required";
        }
        if (!formData.personal_information.country.trim()) {
          newErrors.country = "Country is required";
        }
        if (!formData.personal_information.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.personal_information.email)) {
          newErrors.email = "Email is invalid";
        }

        // Phone number validation
        const phone = formData.personal_information.phone;
        if (!phone || !isValidPhoneNumber(phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }

        break;
      }

      case 2:
        if (!formData.participation_details.attendance_mode) {
          newErrors.attendance_mode = "Please select attendance mode";
        }
        if (!formData.participation_details.registration_type) {
          newErrors.registration_type = "Please select registration type";
        }
        break;

      case 4:
        if (!formData.consent.information_use) {
          newErrors.information_use = "please agree to information use";
        }
        if (!formData.consent.follow_up_updates) {
          newErrors.follow_up_updates = "please agree to receive updates";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleProfessionalFieldChange = (field) => {
    setFormData((prev) => {
      const currentFields = [...prev.professional_background.fields];
      const fieldIndex = currentFields.indexOf(field);

      if (fieldIndex > -1) {
        currentFields.splice(fieldIndex, 1);
      } else {
        currentFields.push(field);
      }

      return {
        ...prev,
        professional_background: {
          ...prev.professional_background,
          fields: currentFields,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    // Validate current step (should be step 4 for final submit)
    if (!validateStep(currentStep)) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Parse and format phone number
      const phoneNumber = parsePhoneNumberFromString(
        formData.personal_information.phone
      );

      const payload = {
        ...formData,
        email: formData.personal_information.email.toLowerCase(),
        name: formData.personal_information.full_name,
        phone: phoneNumber
          ? phoneNumber.format("E.164")
          : formData.personal_information.phone,
        personal_information: {
          ...formData.personal_information,
          phone: phoneNumber
            ? phoneNumber.format("E.164")
            : formData.personal_information.phone,
        },
        form_id,
        plan_id,
      };

      const response = await axios.post(
        "https://backend.defcomm.ng/api/web/eventform",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      // Use response.data for axios
      if (response.data.success) {
        setIsSubmitted(true);

        // Optional: add to Google Calendar if consented
        if (formData.consent.add_to_calendar) addToGoogleCalendar();

        // Optionally: show a success toast
        console.log(response.data.message || "Registration successful!");
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Display backend error or generic message
      setErrors({
        submit:
          error.response?.data?.message ||
          error.message ||
          "Registration failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      personal_information: {
        full_name: "",
        title: "",
        organization: "",
        country: "",
        email: "",
        phone: "",
      },
      participation_details: {
        attendance_mode: "",
        registration_type: "",
      },
      professional_background: {
        fields: [],
        other: "",
      },
      consent: {
        information_use: false,
        follow_up_updates: false,
        add_to_calendar: false,
      },
    });
    setErrors({});
  };

  const renderStep = () => {
    const stepProps = {
      formData,
      errors,
      handleInputChange,
      handleProfessionalFieldChange,
      nextStep,
      prevStep,
      isSubmitting,
    };

    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <ParticipationStep {...stepProps} />;
      case 3:
        return <ProfessionalBackgroundStep {...stepProps} />;
      case 4:
        return <ConfirmationStep {...stepProps} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };
  // Check if event has passed
  const eventPassed = date ? new Date(date).getTime() < Date.now() : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive via-gray-900 to-olive py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <FormHeader
          title={title}
          organizer={organizer}
          slogan={slogan}
          tagline={tagline}
          date={date}
          accentColor={accentColor}
        />
        <ProgressBar currentStep={currentStep} />

        <motion.div
          className="bg-white/95 z-0 relative backdrop-blur-sm rounded-2xl shadow-2xl overflow-visible border border-white/20"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-green-600 to-oliveDark py-5 px-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="bg-white/20 p-2 rounded-lg mr-3">📅</span>
              Event Registration
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={formStepVariants}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                  {eventPassed && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
                      <p className="text-red-600 text-xl font-bold text-center px-4">
                        Registration for this event has closed.
                      </p>
                    </div>
                  )}
                </motion.form>
              ) : (
                <SuccessScreen formData={formData} resetForm={resetForm} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <EventFooter socialLinks={socialLinks} contact={contact} />
      </motion.div>
    </div>
  );
};

export default EventRegistrationForm;
