//dashtabs
import logo from "../assets/logo-icon.png";
import call from "../assets/call-icon.png";
import comm from "../assets/walkie-talkie.png";
import file from "../assets/device.png";
import contact from "../assets/contact.png";
import secure from "../assets/mail-secure.png";
import military from "../assets/military.png";
import chat from "../assets/chat.png";

//chat images
import img1 from "../assets/chat-img-1.png";
import img2 from "../assets/chat-img-2.jpg";
import img3 from "../assets/chat-img-3.jpg";

import use from "../assets/use.png";
import defense1 from "../assets/defense1.jpg";
import defense3 from "../assets/defense3.jpg";
import defense4 from "../assets/defense4.jpg";

export const tabs = [
  {
    id: "default",
    icon: logo,
    label: "Home",
    description: "View the main dashboard and recent updates",
  },
  {
    id: "category1-first",
    icon: call,
    label: "Call",
    description: "Initiate a new secure call",
  },
  {
    id: "messages",
    icon: chat,
    label: "Messages",
    description: "Access secure messaging",
  },
  {
    id: "calls",
    icon: contact,
    label: "Contact",
    description: "Make and view call histories",
  },
  {
    id: "securegroup",
    icon: secure,
    label: "Secure Group",
    description: "Join secure group communications",
  },
  {
    id: "voicechat",
    icon: comm,
    label: "Dial",
    description: "Access secure voice chat interface",
  },
  {
    id: "files",
    icon: file,
    label: "Files",
    description: "Manage secure files",
  },

  {
    id: "emails",
    icon: military,
    label: "Emails",
    description: "Access secure email communications",
  },
];

export const joyRideStyles = {
  options: {
    primaryColor: "#89AF20",
    backgroundColor: "#1F2A44",
    textColor: "#FFFFFF",
    arrowColor: "#1F2A44",
    zIndex: 1000,
  },
  tooltip: {
    fontFamily: "'Poppins', sans-serif",
    padding: "8px 12px",
    borderRadius: "6px",
    maxWidth: "290px",
    fontSize: "12px",
  },
  tooltipContainer: {
    marginLeft: "8px",
  },
  buttonNext: {
    backgroundColor: "#89AF20",
    fontFamily: "'Poppins', sans-serif",
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "12px",
  },
  buttonBack: {
    color: "#FFFFFF",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
  },
  buttonSkip: {
    color: "#FFFFFF",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
  },
};
export const recentCalls = [
  { name: "Chinonso Maxx***", time: "11:47 PM", avatar: "text-white" },
  { name: "Tosin Pio*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Ifunanya Eu*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
  { name: "Chukwuemeka Kox*****", time: "Yesterday", avatar: "text-white" },
  { name: "Tosin Pio*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
  { name: "Chinonso Mas*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Ifunanya Eu*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Chukwuemeka Kow*****", time: "01 Feb", avatar: "text-white" },
];

export const chatImages = [
  {
    img: img2,
    name: "Nike Nelson",
  },
  {
    img: img3,
    name: "Damilare",
  },
  {
    img: img1,
    name: "Afolabi",
  },
  {
    img: img1,
    name: "Joel Nelson",
  },
];

// Animation variants for step transitions
export const stepVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

// Animation variants for progress bar icons
export const iconVariants = {
  inactive: { scale: 0.8, opacity: 0.7 },
  active: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

// Animation variants for buttons
export const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Animation variants for form fields
export const fieldVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

// Animation variants for confirmation
export const confirmationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const times = [
  "08:30 AM",
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
];

export const containers = [
  {
    id: 1,
    title: "DEFENCE & NATIONAL SECURITY",
    paragraph:
      "Defcomm is purpose built to meet the uncompromising demands of defence operations and national security agencies, providing a hardened, end-to-end encrypted communication platform for mission-critical environments.",
    subtitle: "Strategic Impact:",
    subtitleContent:
      "Whether in the field, at command centres, or across inter-agency networks, Defcomm enables secure, coordinated, and uninterrupted communication in real time ensuring national interests remain protected and operations uncompromised.",
    img: defense1,
  },
  {
    id: 2,
    title: "LAW ENFORCEMENT AGENCY",
    paragraph:
      "Defcomm equips law enforcement agencies with a secure, reliable, and tamper-proof communication platform designed to handle sensitive operations, investigations, and inter-agency coordination.",
    subtitle: "Operational Benefits:",
    subtitleContent:
      "Secure case coordination across departments and regions\nProtected exchange of warrants, intelligence, and witness statements\nCompliance with chain-of-custody and data protection standards",
    img: use,
  },
  {
    id: 3,
    title: "DIPLOMATIC COMMS",
    paragraph:
      "Defcomm provides diplomats and foreign service personnel with a secure, discreet, and resilient communication platform designed for sensitive international engagement.",
    subtitle: "Use Cases:",
    subtitleContent:
      "Confidential ambassadorial or consular communication\nSecure briefing between embassies and home ministries\nProtected handling of international agreements, visas, and negotiations",
    img: defense3,
  },
  {
    id: 4,
    title: "TOP BUSINESS EXECUTIVE",
    paragraph:
      "Defcomm delivers uncompromising communication security tailored for CEOs, board members, and high-level executives who handle sensitive corporate strategy, financial data, and confidential negotiations.",
    subtitle: "Use Cases:",
    subtitleContent:
      "M&A discussions\nStrategic planning and financial reporting\nInvestor communications\nLegal or regulatory-sensitive conversations",
    img: defense4,
  },
];

export const professionalFields = [
  "Cybersecurity",
  "Technology & Innovation",
  "Network Infrastructure",
  "Software Development",
  "Data Analytics",
  "Cloud Computing",
  "Digital Transformation",
  "Other",
];

export const STEPS = [
  { key: "personal", title: "Personal Info", icon: "👤" },
  { key: "professional", title: "Professional", icon: "💼" },
  { key: "areas", title: "Volunteer Areas", icon: "🎯" },
  { key: "availability", title: "Availability", icon: "📅" },
  { key: "emergency", title: "Emergency Contact", icon: "🚨" },
  { key: "logistics", title: "Logistics", icon: "👕" },
  { key: "declaration", title: "Declaration", icon: "📝" },
];

export const stepValidations = {
  1: [
    "firstName",
    "lastName",
    "gender",
    "dateOfBirth",
    "phoneNumber",
    "email",
    "cityState",
    "nationality",
    "hasDisability",
  ],
  2: ["occupation", "skills"],
  3: [], // Volunteer areas are optional
  4: [], // Availability is optional
  5: ["emergencyFullName", "emergencyRelationship", "emergencyPhone"],
  6: ["tshirtSize", "hasVolunteerId"],
  7: ["agreeToTerms"],
};

export const occupations = [
  { value: "student", label: "Student" },
  { value: "tech", label: "Tech Professional" },
  { value: "educator", label: "Educator / Trainer" },
  { value: "media", label: "Media / Communications" },
  { value: "legal", label: "Legal / Policy" },
  { value: "logistics", label: "Logistics / Operations" },
  { value: "other", label: "Other" },
];

export const exhibitionFields = [
  {
    name: "name",
    label: "Full Name",
    rules: { required: "Full name is required" },
    type: "text",
  },
  {
    name: "organization",
    label: "Organization / Company",
    rules: { required: "Organization is required" },
    type: "text",
  },
  {
    name: "designation",
    label: "Designation / Role",
    rules: { required: "Designation is required" },
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    rules: { required: "Phone number is required" },
    type: "tel",
  },
  {
    name: "website",
    label: "Website (if applicable)",
    rules: {},
    type: "url",
  },
];
