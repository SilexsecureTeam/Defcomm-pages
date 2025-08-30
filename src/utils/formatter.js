export const getTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

// Format time like "5:30 PM - 5:55 PM" (assuming 25 minute meetings)
export const formatTimeRange = (time) => {
  if (!time) return "";

  // Parse the time (e.g., "5:30 PM")
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":");

  // Calculate end time (25 minutes later)
  let endHours = parseInt(hours);
  let endMinutes = parseInt(minutes) + 60;

  if (endMinutes >= 60) {
    endHours += 1;
    endMinutes -= 60;
  }
  const formattedEndTime = `${endHours}:${endMinutes
    .toString()
    .padStart(2, "0")} ${modifier}`;
  return `${time} - ${formattedEndTime}`;
};
