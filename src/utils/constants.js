import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team1 from "../assets/team1.png";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.jpg";

export const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Defcomm Store",
    path: "https://appstore.defcomm.ng/",
    external: true,
  },
  { name: "Products", path: "/products" },
  { name: "Technology", path: "/technology" },
  { name: "Services", path: "/services" },
  { name: "Bounty", path: "/bounty" },
];

export const navList = [
  { route: "/", label: "Home" },
  { label: "Program Details" },
  { label: "Rewards" },
  { label: "Rules" },
  { label: "FAQs" },
];

export const faqs = [
  {
    question: "How Do I Register For The Defcomm Live Bug Bounty 2025?",
    answer:
      "Registration is open on the official Defcomm website. Simply visit the event page and follow the instructions to sign up.",
  },
  {
    question: "What Types Of Vulnerabilities Are Eligible For Rewards?",
    answer:
      "We accept a wide range of vulnerabilities including XSS, SQL injection, authentication bypass, and more. Refer to the rules section for specifics.",
  },
  {
    question: "How Are Bounty Amounts Determined?",
    answer:
      "Bounty rewards are based on the severity, impact, and uniqueness of the reported vulnerability.",
  },
  {
    question: "How Long Does It Take To Review My Submission?",
    answer:
      "Submissions are typically reviewed within 7 business days. Complex reports may take longer.",
  },
  {
    question: "Can I Participate In The Program Remotely?",
    answer:
      "Yes, the entire Bug Bounty program can be completed remotely from anywhere in the world.",
  },
  {
    question:
      "What Happens If Multiple Researchers Report The Same Vulnerability?",
    answer:
      "The first valid submission will be rewarded. We encourage researchers to submit findings promptly.",
  },
  {
    question: "Are There Any Tools Or Techniques That Are Prohibited?",
    answer:
      "Yes, tools that cause denial of service or violate laws are strictly prohibited. Refer to the participation guidelines.",
  },
  {
    question: "Will I Be Able To Publicly Disclose The Vulnerabilities I Find?",
    answer:
      "Public disclosure is subject to Defcomm’s responsible disclosure policy. Please coordinate with the security team.",
  },
];

export const teamMembers = [
  { id: 1, name: "Nsikak Joseph Nelson", position: "CEO", img: team1 },
  {
    id: 2,
    name: "Nike Nsikak Nelson",
    position: "Co-founder /CIO",
    img: team4,
  },
  { id: 3, name: "Nuno Seidi", position: "COO", img: team2 },
  { id: 4, name: "Opeyemi T Obayan", position: "CBO", img: team3 },

  {
    id: 5,

    name: "Dr. Moses Enokela",
    position: "Head - Digital Health Strategy and Innovation",
    img: team5,
  },
  {
    id: 6,
    name: "Maurice Idorenyin",
    position: "CFO",
    img: team6,
  },
  {
    id: 7,
    name: "Amaebi Kindness",
    position: "Legal",
    img: team7,
  },
];

export const videos = [
  {
    id: 1,
    title: "Defcomm's latest innovation in military technology",
    duration: "2:57",
    thumbnail: "https://img.youtube.com/vi/aAljC9JNVlE/hqdefault.jpg",
    embedId: "aAljC9JNVlE",
  },
  {
    id: 2,
    title:
      "Nigeria's First End-to-End Secure Communication Platform & Privacy Solution",
    duration: "43:50",
    thumbnail: "https://img.youtube.com/vi/RgTOwZRsRRE/hqdefault.jpg",
    embedId: "RgTOwZRsRRE",
  },

  {
    id: 3,
    title:
      "Because privacy isn't a privilege—it's your right, we don't store or track a single byte.",
    duration: "1:41",
    thumbnail: "https://img.youtube.com/vi/RfaZMz_u5O8/hqdefault.jpg",
    embedId: "RfaZMz_u5O8",
  },
  {
    id: 4,
    title: "DefComm: Privacy. Security. Freedom. Take back control today",
    duration: "1:44",
    thumbnail: "https://img.youtube.com/vi/HrJgQTLG5Pw/hqdefault.jpg",
    embedId: "HrJgQTLG5Pw",
  },
  {
    id: 5,
    title:
      "In an era where communication defines success and security, one name stands above",
    duration: "1:00",
    thumbnail: "https://img.youtube.com/vi/Cdk2dfkOmWw/hqdefault.jpg",
    embedId: "Cdk2dfkOmWw",
  },
];
