import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import StateSelect from "../components/common/StateSelect";
import SocialLinksInput from "../components/common/SocialLinksInput";
import MasterclassFooter from "../components/eventForm/MasterclassFooter";
import MasterclassSuccess from "../components/eventForm/MasterclassSuccess";

const containerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i + 0.2, duration: 0.35, ease: "easeOut" },
  }),
};
export default function MasterclassApplicationForm() {
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      socialLinks: [],
      location: "",
      followersConfirmed: false,
    },
  });

  const onSubmit = async (data) => {
    setSubmitError("");
    setIsSubmitted(false);

    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/eventform`, {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        data: {
          socialLinks: data?.socialLinks,
          location: data?.location,
          followersConfirmed: data?.followersConfirmed,
        },
        form_id: import.meta.env.VITE_SKITLAB_FORM_ID,
      });

      setIsSubmitted(true);

      reset({
        name: "",
        email: "",
        phone: "",
        socialLinks: [],
        location: "",
        followersConfirmed: false,
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(
        err?.response?.data?.message ||
          "Unable to process registration. Please try again."
      );
    }
  };

  const baseInputClasses =
    "w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition bg-white/90 backdrop-blur placeholder:text-slate-400";
  const normalBorder =
    "border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-800/25";
  const errorBorder =
    "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/30";

  const selectedLocation = watch("location");

  const handleLocationChange = (state) => {
    setValue("location", state, { shouldValidate: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-sky-100 px-4 py-10">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -4 }}
        className="relative w-full max-w-4xl"
      >
        {/* subtle glowing frame */}
        <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-r from-purple-500/25 via-emerald-400/25 to-sky-500/25 blur-xl opacity-60" />

        <div className="rounded-[24px] bg-white/95 border border-slate-200/80 shadow-xl overflow-hidden">
          {/* Top bar accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-red-600 to-blue-900" />

          <div className="px-5 py-7 md:px-10 md:py-9">
            {/* Logos + title strip */}
            <div className="mb-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/events/us-embassy.svg"
                  alt="U.S. Mission Nigeria"
                  className="h-14 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-3 justify-end ml-auto">
                <img
                  src="/src/assets/events/spoke-wise.png"
                  alt="Spoke-Wise Media and PR"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            {/* Skit Lab strip */}
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 text-white px-4 py-1.5 shadow-md"
              >
                <span className="rounded-full bg-lime-400 text-slate-900 text-[9px] md:text-[11px] font-bold text-center px-2 py-0.5 uppercase tracking-[0.08em]">
                  The Skit Lab
                </span>
                <span className="text-xs md:text-[13px] font-medium">
                  Advanced techniques in ideation, timing & editing
                </span>
              </motion.div>
            </div>

            {/* Header text */}
            <div className="mb-6 space-y-2 text-left md:text-center">
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-blue-900">
                U.S. Mission Nigeria · Masterclass
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
                A Master Class Designed to Foster{" "}
                <span className="text-emerald-700">
                  U.S–Nigeria Trade Relations
                </span>
              </h1>
              <p className="text-sm text-slate-600">
                Sponsored by{" "}
                <span className="font-semibold text-slate-900">
                  The U.S. Mission Nigeria
                </span>{" "}
                in partnership with Spoke-Wise Media &amp; PR.
              </p>
            </div>

            {/* Date & Venue pills */}
            <div className="mb-7 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-amber-400 bg-amber-50 px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-700">
                  Date
                </p>
                <p className="text-sm md:text-base font-bold text-slate-900">
                  8th – 9th December, 2025
                </p>
              </div>
              <div className="rounded-xl border border-purple-500 bg-purple-50 px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-purple-700">
                  Venue
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-900">
                  Novare Training Hall, Zone 5, Abuja
                </p>
              </div>
            </div>

            {/* Eligibility Note */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-xs md:text-sm text-slate-800 flex gap-3 items-start"
            >
              <span className="shrink-0 mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-emerald-300 text-[0.7rem] font-semibold text-emerald-700 shadow-sm">
                i
              </span>
              <p>
                <span className="font-semibold">Eligibility:</span> All
                applicants must be emerging Nigerian{" "}
                <span className="font-semibold">content / skit creators</span>{" "}
                with at least{" "}
                <span className="font-semibold">1,000 followers</span> on one
                social network.
              </p>
            </motion.div>

            {/* ---------- SUCCESS SCREEN VS FORM ---------- */}
            {isSubmitted ? (
              <MasterclassSuccess setIsSubmitted={setIsSubmitted} />
            ) : (
              <>
                {/* Error banner (only when not in success state) */}
                {submitError && (
                  <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs md:text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    custom={1}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1.5"
                  >
                    <label className="block text-sm font-medium text-slate-800">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Full name is required.",
                        minLength: {
                          value: 3,
                          message: "Please enter at least 3 characters.",
                        },
                      })}
                      placeholder="Enter your full name"
                      className={`${baseInputClasses} ${
                        errors.name ? errorBorder : normalBorder
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-0.5">
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    custom={2}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1.5"
                  >
                    <label className="block text-sm font-medium text-slate-800">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email address is required.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      placeholder="you@example.com"
                      className={`${baseInputClasses} ${
                        errors.email ? errorBorder : normalBorder
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-0.5">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    custom={3}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1.5"
                  >
                    <label className="block text-sm font-medium text-slate-800">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required.",
                        minLength: {
                          value: 7,
                          message: "Please enter a valid phone number.",
                        },
                      })}
                      placeholder="+234 810 000 0000"
                      className={`${baseInputClasses} ${
                        errors.phone ? errorBorder : normalBorder
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-0.5">
                        {errors.phone.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Social Media Links – special chip input */}
                  <motion.div
                    custom={4}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <input
                      type="hidden"
                      {...register("socialLinks", {
                        validate: (val) =>
                          Array.isArray(val) && val.length > 0
                            ? true
                            : "Please add at least one social media link.",
                      })}
                    />

                    <SocialLinksInput
                      value={watch("socialLinks") || []}
                      onChange={(links) =>
                        setValue("socialLinks", links, {
                          shouldValidate: true,
                        })
                      }
                      error={errors.socialLinks?.message}
                      baseInputClasses={baseInputClasses}
                      normalBorder={normalBorder}
                      errorBorder={errorBorder}
                    />
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    custom={5}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <input
                      type="hidden"
                      {...register("location", {
                        required: "Please select your state.",
                      })}
                    />

                    <StateSelect
                      value={selectedLocation}
                      onChange={handleLocationChange}
                      error={errors.location?.message}
                      baseInputClasses={baseInputClasses}
                      normalBorder={normalBorder}
                      errorBorder={errorBorder}
                    />
                  </motion.div>

                  {/* Followers confirmation */}
                  <motion.div
                    custom={6}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start gap-2 text-xs md:text-sm text-slate-700"
                  >
                    <input
                      id="followers-confirm"
                      type="checkbox"
                      {...register("followersConfirmed", {
                        required:
                          "You must confirm that you meet the follower requirement.",
                      })}
                      className="mt-0.5 h-4 w-4 rounded border-slate-400 text-blue-900 focus:ring-blue-800"
                    />
                    <div>
                      <label
                        htmlFor="followers-confirm"
                        className="cursor-pointer"
                      >
                        I confirm that I am an emerging Nigerian skit maker with
                        at least{" "}
                        <span className="font-semibold">1,000 followers</span>{" "}
                        across my social media platforms.
                      </label>
                      {errors.followersConfirmed && (
                        <p className="text-xs text-red-600 mt-0.5">
                          {errors.followersConfirmed.message}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    custom={7}
                    variants={fieldVariant}
                    initial="hidden"
                    animate="visible"
                    className="pt-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </motion.button>
                    <p className="mt-2 text-[0.7rem] text-center text-slate-500">
                      By submitting this form, you consent to be contacted with
                      further information about The Skit Lab masterclass.
                    </p>
                  </motion.div>
                </form>
              </>
            )}
            {/* Footer under form */}
            <MasterclassFooter />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
