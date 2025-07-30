import { AiOutlineTeam } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoFlashOutline, IoShieldOutline } from "react-icons/io5";
import sampleImage from "../assets/solution.jpg";
import sampleImage1 from "../assets/solution.png";
import sampleImage2 from "../assets/solution1.png";

export const features = [
  {
    title: "Embedded Technology",
    description:
      "Every Defcomm Phone is not just a device it’s a mobile command centre secured by Defcomm’s embedded encryption stack, ready for government, defence, and high-security enterprise use.",
    icon: IoShieldOutline,
    dark: true,
  },
  {
    title: "Zero-Knowledge Architecture",
    description:
      "Our architecture eliminates insider threats, surveillance risks, and platform-level compromise. It positions Defcomm as a trusted solution for high-security communications, offering the privacy assurances needed for national defence, intelligence, and enterprise resilience. Defcomm is built on a strict Zero-Knowledge Architecture.",
    icon: CiLock,
  },
  {
    title: "⁠Signal Intelligence",
    description:
      "Defcomm offers secure messaging platforms and signal protection solutions for classified communications. Our systems provide real-time threat detection, intrusion resistance, and secure channel management to prevent interception, spoofing,  Defcomm doesn’t store your secrets—because it never knows them in the first place.",
    icon: IoFlashOutline,
  },
  {
    title: "Tamper-Proof Communication",
    description:
      "Defcomm delivers tamper-proof communication capabilities, embedded directly into its secure devices, ensuring every message, call, and data exchange is protected against interception, manipulation, or unauthorised access. designed for those who can’t afford uncertainty.",
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
    title: "Air-Gap & Offline Mode",
    description:
      "Defcomm is built for environments where maximum isolation and security are critical. With Air-Gap and Offline Mode, it delivers uncompromising protection—even without internet connectivity.",
    bgColor: "bg-[#131312] text-white",
    image: sampleImage,
  },
  {
    title: "Defcomm Chat",
    description:
      "Whether you're coordinating across agencies or communicating sensitive corporate intel, Defcomm Chat keeps your conversations safe, confidential, and fully controlled",
    bgColor: "bg-[#131312] text-white",
    image: sampleImage1,
  },
  {
    title: "End-to-End Encryption",
    description:
      "Control the digital exhaust with a secure closed-loop private network that keeps data transmission and processing on-base without sacrificing functionality.",
    bgColor: "bg-[#131312] text-white",
    image: sampleImage2,
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
