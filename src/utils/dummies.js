import { AiOutlineTeam } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoFlashOutline, IoShieldOutline } from "react-icons/io5";

export const features = [
  {
    title: "End-to-End Encryption",
    description:
      "All communications are encrypted from sender to recipient, ensuring that only intended parties can access the information.",
    icon: IoShieldOutline,
    dark: true,
  },
  {
    title: "Zero-Knowledge Architecture",
    description:
      "Our systems are designed so that even we cannot access your encrypted data, providing maximum privacy and security.",
    icon: CiLock,
  },
  {
    title: "Signal Intelligence",
    description:
      "Defcomm offers secure messaging platforms and signal protection solutions for classified communications. Our systems provide real-time threat detection, intrusion resistance, and secure channel management to prevent interception, spoofing.",
    icon: IoFlashOutline,
  },
  {
    title: "Team Collaboration",
    description:
      "Secure group messaging, file sharing, and collaboration tools designed for teams that need to protect sensitive information.",
    icon: AiOutlineTeam,
  },
];

export const stats = [
  {
    value: "99.9%",
    label: "Trusted For Mission-Critical Operations",
  },
  {
    value: "97%",
    label: "Reported Improved Response Coordination",
  },
  {
    value: "95%",
    label: "Tamper-Resistant Encryption Protocols Deployed",
  },
  {
    value: "100%",
    label: "Rated Our Gear As Durable Under Extreme Conditions",
  },
];

export const cards = [
  {
    title: "Experience AI",
    description:
      "Control the digital exhaust with a secure closed-loop private network that keeps data transmission and processing on-base without sacrificing functionality.",
    bgColor: "bg-[#131312] text-white",
  },
  {
    title: "Experience AI",
    description:
      "Control the digital exhaust with a secure closed-loop private network that keeps data transmission and processing on-base without sacrificing functionality.",
    bgColor: "bg-oliveLight text-white",
  },
  {
    title: "Encryption",
    description:
      "Control the digital exhaust with a secure closed-loop private network that keeps data transmission and processing on-base without sacrificing functionality.",
    bgColor: "bg-[#131312] text-white",
  },
];

export const rewardLevels = [
  {
    level: "Critical",
    color: "#C6A24B",
    reward: "$5,000 – $25,000",
    examples: [
      "Remote code execution",
      "Authentication bypass",
      "Database compromise",
      "Privilege escalation",
    ],
  },
  {
    level: "High",
    color: "#C6A24B",
    reward: "$5,000 – $25,000",
    examples: [
      "Sensitive data exposure",
      "Stored XSS",
      "CSRF with significant impact",
      "Business logic flaws",
    ],
  },
  {
    level: "Medium",
    color: "#89AF20",
    reward: "$500 – $2,000",
    examples: [
      "Reflected XSS",
      "CSRF with limited impact",
      "Server misconfiguration",
      "Information disclosure",
    ],
  },
  {
    level: "Low",
    color: "#1C2C3C",
    reward: "Swag + Recognition",
    examples: [
      "Minor security misconfigurations",
      "Lack of security headers",
      "Non-sensitive information disclosure",
      "UI/UX security improvements",
    ],
  },
];

export const NOT_ALLOWED = [
  {
    title: "No social engineering",
    description:
      "Do not attempt to manipulate Defcomm employees or users into revealing sensitive information or performing actions.",
  },
  {
    title: "No DDoS attacks",
    description:
      "Denial of service attacks are strictly prohibited and will result in immediate disqualification.",
  },
  {
    title: "No physical attacks",
    description:
      "Physical security testing is out of scope. Focus on digital assets only.",
  },
  {
    title: "Protect user data",
    description:
      "Do not access, modify, or delete user data. If you encounter user data, stop and report immediately.",
  },
];

export const REQUIRED = [
  {
    title: "Report privately",
    description:
      "All vulnerabilities must be reported through our secure disclosure platform. No public disclosure until authorized.",
  },
  {
    title: "Include proof-of-concept",
    description:
      "All reports must include detailed reproduction steps and a complete proof-of-concept.",
  },
];

export const PRACTICES = [
  "Test only within designated scope",
  "Report issues as soon as they're discovered",
  "Respect rate limits and avoid automated scanning tools without permission",
  "Document your findings thoroughly",
  "One vulnerability per report",
  "Maintain confidentiality of all findings",
];
