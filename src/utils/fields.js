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
    label: "Emails",
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
    label: "Calls",
    description: "Make and view secure calls",
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
  { name: "Boženka Maxx***", time: "11:47 PM", avatar: "text-white" },
  { name: "Odeusz Pio*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Krysia Eu*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
  { name: "Jarosław Kox*****", time: "Yesterday", avatar: "text-white" },
  { name: "Odeusz Pio*****", time: "11:47 PM", avatar: "text-[#DDF2AB]" },
  { name: "Boženka Mas*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Krysia Eu*****", time: "11:47 PM", avatar: "text-white" },
  { name: "Jarosław Kow*****", time: "01 Feb", avatar: "text-white" },
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
