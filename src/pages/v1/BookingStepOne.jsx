import { motion } from "framer-motion";
import { buttonVariants, stepVariants, times } from "../../utils/fields";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isPast,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { Tooltip } from "react-tooltip";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BookingStepOne = ({
  setCurrentStep,
  setCurrentMonth,
  currentMonth,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
}) => {
  const getDaysInMonthGrid = () => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  };

  const handleTimeSelect = (time) => {
    if (selectedDate) {
      setSelectedTime(time);
    }
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(2);
    }
  };

  const handleDateSelect = (day) => {
    if (!isPast(day) && format(currentMonth, "M") === format(day, "M")) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <motion.div
      key="step1"
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar Section - 2/3 width on large screens */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-center justify-between mb-4">
            <motion.button
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className="p-2 hover:bg-[#e6e9e0] rounded-full"
              aria-label="Previous month"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaChevronLeft />
            </motion.button>
            <span className="text-lg font-medium">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <motion.button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="p-2 hover:bg-[#e6e9e0] rounded-full"
              aria-label="Next month"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
            {weekdays.map((day) => (
              <div key={day} className="font-medium text-gray-600 p-1">
                {day}
              </div>
            ))}
            {getDaysInMonthGrid().map((day) => {
              const isCurrentMonth =
                format(currentMonth, "M") === format(day, "M");
              const isSelected =
                selectedDate &&
                format(selectedDate, "yyyy-MM-dd") ===
                  format(day, "yyyy-MM-dd");
              const isDisabled = isPast(day) || !isCurrentMonth;

              return (
                <motion.button
                  key={day.toString()}
                  onClick={() => handleDateSelect(day)}
                  disabled={isDisabled}
                  className={`p-2 rounded-full text-sm transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#2d3f14] text-white"
                      : isDisabled
                      ? "text-gray-300 cursor-not-allowed"
                      : "hover:bg-[#e6e9e0] text-gray-700"
                  }`}
                  data-tooltip-id="calendar-tooltip"
                  data-tooltip-content={
                    isPast(day)
                      ? "Past date"
                      : isCurrentMonth
                      ? "Available"
                      : "Not in current month"
                  }
                  whileHover={!isDisabled ? { scale: 1.1 } : {}}
                  whileTap={!isDisabled ? { scale: 0.9 } : {}}
                >
                  {format(day, "d")}
                </motion.button>
              );
            })}
          </div>
          <Tooltip id="calendar-tooltip" />
        </div>

        {/* Time Selection Section - Always visible but disabled when no date selected */}
        <div className="w-full lg:w-1/3 lg:border-l lg:pl-6 lg:pt-0 pt-4 border-t lg:border-t-0">
          {selectedDate ? (
            <h4 className="text-sm font-medium mb-4 text-center">
              {format(selectedDate, "EEEE, MMMM d")}
            </h4>
          ) : (
            <h4 className="text-sm font-medium mb-4 text-center">
              Pick one of the available dates
            </h4>
          )}
          <div className="grid grid-cols-1 gap-2">
            {times.map((time) => (
              <motion.button
                key={time}
                disabled={!selectedDate}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 border rounded-md text-center text-sm transition-colors duration-200 disabled:opacity-50 ${
                  selectedTime === time
                    ? "bg-[#2d3f14] text-white border-[#2d3f14]"
                    : "border-gray-300 hover:bg-[#e6e9e0]"
                }`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={handleNext}
        disabled={!selectedDate || !selectedTime}
        className="w-full mt-6 py-3 bg-[#2d3f14] text-white rounded-md disabled:opacity-50 hover:bg-[#3f5c1f] transition-colors duration-200"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default BookingStepOne;
