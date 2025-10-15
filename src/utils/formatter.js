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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const formStepVariants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};

// Progress bar steps
export const steps = [
  { number: 1, title: "Personal Info" },
  { number: 2, title: "Participation" },
  { number: 3, title: "Background" },
  { number: 4, title: "Confirmation" },
];

export const addToGoogleCalendar = () => {
  const eventDetails = {
    title: "Defcomm Solutions - Global Engagement Day 2025",
    description:
      "STRONG ENCRYPTION • STRONGER FUTURE - DEFENDING TRUST IN A CONNECTED WORLD",
    location: "Hybrid Event (Physical + Virtual)",
    startTime: "20251021T090000", // Oct 21, 2025 9:00 AM
    endTime: "20251021T170000", // Oct 21, 2025 5:00 PM
  };

  const startDate = new Date("2025-10-21T09:00:00")
    .toISOString()
    .replace(/-|:|\.\d+/g, "");
  const endDate = new Date("2025-10-21T17:00:00")
    .toISOString()
    .replace(/-|:|\.\d+/g, "");

  const calendarUrl = [
    "https://www.google.com/calendar/render",
    "?action=TEMPLATE",
    "&text=" + encodeURIComponent(eventDetails.title),
    "&dates=" + startDate + "/" + endDate,
    "&details=" + encodeURIComponent(eventDetails.description),
    "&location=" + encodeURIComponent(eventDetails.location),
    "&sprop=&sprop=name:",
  ].join("");

  window.open(calendarUrl, "_blank");
};
