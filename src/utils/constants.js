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
  { route: "/program-details", label: "Program Details" },
  { route: "/rewards", label: "Rewards" },
  { route: "/rules", label: "Rules" },
  { route: "/faqs", label: "FAQs" },
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
