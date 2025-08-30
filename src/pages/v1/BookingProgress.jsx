import React from "react";
import { Calendar, FileText, CheckCircle, Check } from "lucide-react";
import { iconVariants } from "../../utils/fields";
import { motion } from "framer-motion";
import { MdPerson } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const BookingProgress = ({ currentStep, user }) => {
  return (
    <div className="md:border-r-2 md:border-r-[#9ca3af] md:pr-6 w-full md:w-1/3">
      <motion.div
        className="flex flex-col items-center md:items-start mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center md:items-start mb-2">
          <figure className=" my-2 flex items-center justify-center bg-gray-200 rounded-full w-20 h-20 border border-[#044343]">
            <MdPerson className="size-10" />
          </figure>
          <small className="text-xs font-semibold text-gray-800">
            Defcomm Solutions
          </small>
          <h2 className="text-xl">{user}</h2>
        </div>
        <p className="text-green-900 font-bold text-xs flex items-center gap-2">
          <GoDotFill />
          Client Check-in{" "}
        </p>
        <h3 className="text-base flex flex-wrap items-center font-semibold text-gray-800 text-center">
          Booking Process - <p>Step {currentStep} of 4</p>
        </h3>
        <p className="text-sm text-gray-600">
          {currentStep === 1 && "Please select your preferred date and time."}
          {currentStep === 2 && "Please fill in your booking details."}
          {currentStep === 3 && "Review your booking details."}
          {currentStep === 4 && "Your booking has been confirmed!"}
        </p>
      </motion.div>

      <div className="mb-8">
        {/* Progress Bar - Horizontal on small screens, vertical on medium+ */}
        <div className="flex flex-col items-center justify-between md:justify-start md:space-y-0">
          <div className="flex flex-row md:flex-col items-center justify-between w-full max-w-64 md:w-auto md:space-y-4">
            {[
              { step: 1, Icon: Calendar },
              { step: 2, Icon: FileText },
              { step: 3, Icon: CheckCircle },
              { step: 4, Icon: Check },
            ].map(({ step, Icon }, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-row md:flex-col items-center">
                  {/* Step Circle */}
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                      step <= currentStep ? "bg-[#2d3f14]" : "bg-[#e6e9e0]"
                    }`}
                    variants={iconVariants}
                    initial="inactive"
                    animate={step <= currentStep ? "active" : "inactive"}
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Connector Line - Horizontal on small screens, vertical on medium+ */}
                  {index < 3 && (
                    <motion.div
                      className={`h-1 w-8 md:w-1 md:h-12 mx-2 md:mx-0 ${
                        step < currentStep ? "bg-[#2d3f14]" : "bg-[#e6e9e0]"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        transition: { duration: 0.4, delay: 0.2 },
                      }}
                    ></motion.div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;
