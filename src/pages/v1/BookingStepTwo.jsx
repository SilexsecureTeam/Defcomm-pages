import { motion } from "framer-motion";
import {
  buttonVariants,
  fieldVariants,
  stepVariants,
} from "../../utils/fields";
import { AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaBuilding,
  FaPhone,
  FaLaptop,
  FaVideo,
  FaMapMarkerAlt,
} from "react-icons/fa";

const BookingStepTwo = ({
  handleSubmit,
  formData,
  handleChange,
  handlePrevious,
  errors,
}) => {
  return (
    <motion.form
      key="step2"
      onSubmit={handleSubmit}
      className="space-y-6 w-full"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Name Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
      >
        <label className="block text-sm font-medium mb-1">Name *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 px-3 border-r my-3 border-[#BDC3C6] flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-[#BDC3C6]" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name..."
            className={`w-full pl-12 p-3 border rounded-lg focus:ring-0 focus:border-[#4a6b24] ${
              errors.name ? "border-red-500" : "border-[#BDC3C6]"
            } transition-colors duration-200 bg-white`}
            required
            aria-invalid={errors.name ? "true" : "false"}
          />
        </div>
        <AnimatePresence>
          {errors.name && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 px-3 border-r my-3 border-[#BDC3C6] flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-[#BDC3C6]" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@xyz.com"
            className={`w-full pl-12 p-3 border rounded-lg focus:ring-0 focus:border-[#4a6b24] ${
              errors.email ? "border-red-500" : "border-[#BDC3C6]"
            } transition-colors duration-200 bg-white`}
            required
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>
        <AnimatePresence>
          {errors.email && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Meeting Type */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm font-medium mb-1">Meeting Type *</label>
        <div className="space-y-2">
          {[
            { type: "Direct Call", icon: FaPhone, id: "direct-call" },
            { type: "Defcomm Meet", icon: FaVideo, id: "defcomm-meet" },
            {
              type: "Physical Meeting",
              icon: FaMapMarkerAlt,
              id: "physical-meeting",
            },
          ].map(({ type, icon: Icon, id }) => (
            <label
              key={type}
              htmlFor={id}
              className="flex items-center font-medium cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                id={id}
                name="meetingType"
                value={type}
                checked={formData.meetingType === type}
                onChange={handleChange}
                className="mr-3 h-4 w-4 accent-[#2d3f14]"
                required
              />
              <Icon className="w-4 h-4 text-[#2d3f14] mr-3" />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
        <AnimatePresence>
          {errors.meetingType && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.meetingType}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Role Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <label className="block text-sm font-medium mb-1">Role *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 px-3 border-r my-3 border-[#BDC3C6] flex items-center pointer-events-none">
            <FaBriefcase className="h-5 w-5 text-[#BDC3C6]" />
          </div>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter your role..."
            className={`w-full pl-12 p-3 border rounded-lg focus:ring-0 focus:border-[#4a6b24] ${
              errors.role ? "border-red-500" : "border-[#BDC3C6]"
            } transition-colors duration-200 bg-white`}
            required
            aria-invalid={errors.role ? "true" : "false"}
          />
        </div>
        <AnimatePresence>
          {errors.role && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.role}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Company Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.6 }}
      >
        <label className="block text-sm font-medium mb-1">Address *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 px-3 border-r my-3 border-[#BDC3C6] flex items-center pointer-events-none">
            <FaBuilding className="h-5 w-5 text-[#BDC3C6]" />
          </div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your company..."
            className={`w-full pl-12 p-3 border rounded-lg focus:ring-0 focus:border-[#4a6b24] ${
              errors.location ? "border-red-500" : "border-[#BDC3C6]"
            } transition-colors duration-200 bg-white`}
            required
            aria-invalid={errors.location ? "true" : "false"}
          />
        </div>
        <AnimatePresence>
          {errors.location && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.location}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.7 }}
      >
        <label className="block text-sm font-medium mb-1">Mobile *</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 px-3 border-r my-3 border-[#BDC3C6] flex items-center pointer-events-none">
            <FaPhone className="h-5 w-5 text-[#BDC3C6]" />
          </div>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className={`w-full pl-12 p-3 border rounded-lg focus:ring-0 focus:border-[#4a6b24] ${
              errors.mobile ? "border-red-500" : "border-[#BDC3C6]"
            } transition-colors duration-200 bg-white`}
            required
            aria-invalid={errors.mobile ? "true" : "false"}
          />
        </div>
        <AnimatePresence>
          {errors.mobile && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.mobile}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Device Information Section */}
      <motion.div
        className="w-full bg-gray-50 p-4 rounded-md"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center mb-2">
          <FaLaptop className="h-5 w-5 text-gray-600 mr-2" />
          <h3 className="text-sm font-medium">Identify Your Device Model</h3>
        </div>
        <p className="text-xs text-gray-600 mb-2">
          The exact model designation is usually located on a label on the back
          of your notebook. You need this to identify the notebook model.
        </p>
        <div className="p-2 border border-dashed border-gray-300 rounded text-xs text-gray-500">
          Enter your device model here...
        </div>
      </motion.div>

      {/* Reason Field */}
      <motion.div
        className="w-full"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.9 }}
      >
        <label className="block text-sm font-medium mb-1">
          Additional Information *
        </label>
        <textarea
          name="reason"
          value={formData.reason || ""}
          onChange={handleChange}
          placeholder="Please provide any additional information about your booking..."
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#4a6b24] min-h-[80px] ${
            errors.reason ? "border-red-500" : "border-[#9ca3af]"
          } transition-colors duration-200`}
          required
        />
        <AnimatePresence>
          {errors.reason && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.reason}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-between mt-8 gap-4"
        variants={fieldVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.0 }}
      >
        <motion.button
          type="button"
          onClick={handlePrevious}
          className="py-3 px-6 bg-[#e6e9e0] rounded-md hover:bg-[#d1d5db] transition-colors duration-200"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Back
        </motion.button>
        <motion.button
          type="submit"
          className="py-3 px-6 bg-[#2d3f14] text-white rounded-md hover:bg-[#3f5c1f] transition-colors duration-200"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Book Appointment
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default BookingStepTwo;
