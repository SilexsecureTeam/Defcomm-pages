import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import new4 from "../../assets/new4.webp";
import new5 from "../../assets/new5.png";
import new6 from "../../assets/new6.jpg";

import blog from "../../assets/blog.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog4 from "../../assets/blog4.png";

import gal1 from "../../assets/gal1.png";
import gal2 from "../../assets/gal2.png";
import gal3 from "../../assets/gal3.png";
import gal4 from "../../assets/gal4.png";
import gal5 from "../../assets/gal5.png";
import gal6 from "../../assets/gal6.png";

import gal7 from "../../assets/new4-gal1.webp";
//news 5
import gal8 from "../../assets/new5-gal1.png";
import gal9 from "../../assets/new5-gal2.png";
import gal10 from "../../assets/new5-gal3.png";
import gal11 from "../../assets/new5-gal4.png";
//news 6
import gal12 from "../../assets/new6-gal1.jpg";
import gal13 from "../../assets/new6-gal2.jpg";
import gal14 from "../../assets/new6-gal3.jpg";

import gals1 from "../../assets/gals1.png";
import gals2 from "../../assets/gals2.png";
import gals3 from "../../assets/gals3.png";
import gals4 from "../../assets/gals4.png";
import gals5 from "../../assets/gals5.png";
import gals6 from "../../assets/gals6.png";

//gal 8
import gal15 from "../../assets/new8-gal1.jpg";
import gal16 from "../../assets/new8-gal2.jpg";
import gal17 from "../../assets/new8-gal3.jpg";

import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";

export const blogs = [
  // BLOG 1
  {
    id: 1,
    slug: "launches-defcomm",
    title:
      "Launches Defcomm: End-to-End Encryption Solution For Government and Defence",
    shortDescription:
      "Defcomm embodies the company’s commitment to safeguarding digital communications with unparalleled encryption protocols.",
    coverImage: new3,
    bannerImage: blog,
    date: "December 10, 2025",
    gallery: [gal1, gal2, gal3, gal4, gal5, gal6],

    content: [
      {
        type: "paragraph",
        text: "In an age where digital threats are rising and sensitive data is a constant target, secure communication is essential. Silex Secure Lab officially launched Defcomm, an end-to-end encryption solution for government and defence operations.",
      },
      { type: "heading", text: "What Is Defcomm?" },
      {
        type: "paragraph",
        text: "Defcomm is a secure communication platform developed over seven years for institutions where confidentiality and integrity are non-negotiable.",
      },
      { type: "heading", text: "Key Features" },
      {
        type: "list",
        items: [
          "True End-to-End Encryption with zero compromise",
          "Military-grade security protocols",
          "Seamless integration with existing systems",
          "User-friendly secure interface",
        ],
      },
      { type: "heading", text: "Who Is It For?" },
      {
        type: "list",
        items: [
          "Government agencies",
          "Military and defence forces",
          "Law enforcement units",
          "Strategic intelligence departments",
        ],
      },
      {
        type: "quote",
        text: "“This is more than software—it’s a security shield for national interests.” — Nsikak Joseph Nelson",
      },
    ],
  },

  // BLOG 2
  {
    id: 2,
    slug: "defcomm-attends-aws-summit",
    title: "Defcomm Attends AWS Summit in London",
    shortDescription:
      "Defcomm showcased secure encryption at the AWS Summit London.",
    coverImage: new2,
    bannerImage: blog1,
    date: "April 30, 2025",
    gallery: [gal1, gal2, gal3],

    content: [
      {
        type: "paragraph",
        text: "Defcomm made its mark at the AWS Summit London, joining global leaders in cloud technology and digital infrastructure.",
      },
      {
        type: "paragraph",
        text: "The summit gathered innovators and cybersecurity experts to explore the future of cloud computing.",
      },
      { type: "heading", text: "Why Defcomm Stood Out" },
      {
        type: "paragraph",
        text: "Defcomm aligns secure communication with scalable cloud infrastructure, enabling enterprise-grade protection.",
      },
      {
        type: "quote",
        text: "“Encryption is not just privacy—it is sovereignty and trust.”",
      },
    ],
  },

  // BLOG 3
  {
    id: 3,
    slug: "defcomm-nigerian-army-encryption",
    title:
      "Defcomm Unveils Advanced Military Encryption System to Nigerian Army Signal Corps",
    shortDescription:
      "Defcomm presents advanced encryption technology to strengthen military communications.",
    coverImage: blog2,
    bannerImage: blog2,
    date: "April 25, 2025",
    gallery: [gals1, gals2, gals3, gals4, gals5, gals6],

    content: [
      {
        type: "paragraph",
        text: "Defcomm officially presented its advanced end-to-end encryption system to the Nigerian Army Signal Corps, marking a major milestone in military communication security.",
      },
      {
        type: "paragraph",
        text: "Developed by Silex Secure Lab, the system ensures secure transmission of classified defence communications across networks.",
      },
      {
        type: "paragraph",
        text: "The solution integrates seamlessly with existing infrastructure while maintaining high-level encryption standards.",
      },
      {
        type: "paragraph",
        text: "This collaboration strengthens Nigeria’s defence cybersecurity posture and operational resilience.",
      },
    ],
  },

  // BLOG 4
  {
    id: 4,
    slug: "african-cybersecurity-defcomm-summit",
    title:
      "Defcomm Champions African Cybersecurity Following Defence Chiefs Summit 2025",
    shortDescription:
      "Defcomm strengthens Africa’s cybersecurity and secure defence communication systems.",
    coverImage: blog4,
    bannerImage: blog4,
    date: "August 28, 2025",
    gallery: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery6,
      gallery7,
    ],

    content: [
      {
        type: "paragraph",
        text: "Defcomm has pledged to accelerate African cybersecurity innovation following the African Defence Chiefs Summit 2025 in Abuja.",
      },
      {
        type: "paragraph",
        text: "The summit emphasized the need for indigenous cybersecurity solutions and unified defence systems across Africa.",
      },
      { type: "heading", text: "Secure Communication as a Defense Imperative" },
      {
        type: "paragraph",
        text: "Defcomm is rolling out secure encrypted communication systems for military and defence institutions.",
      },
      {
        type: "heading",
        text: "Strategic Next Steps",
      },
      {
        type: "list",
        items: [
          "Collaboration with African defence bodies",
          "Cybersecurity capacity building",
          "Strengthening indigenous defence tech ecosystems",
        ],
      },
      {
        type: "quote",
        text: "“Africa must build its own secure communication infrastructure.”",
      },
    ],
  },

  {
    id: 5,
    slug: "defcomm-fail-safe-secure-comms-tech",
    title:
      "DefComm Unveils Fail-Safe Secure Comms Tech; Enters Pilot Phase with Nigerian Military",

    shortDescription:
      "DefComm advances secure military communications with its fail-safe encrypted system entering pilot deployment with the Nigerian Ministry of Defence.",

    coverImage: new4,

    bannerImage: new4, // replace if you have a better hero image

    date: "April 23, 2026",

    gallery: [gal7, new4],

    content: [
      {
        type: "paragraph",
        text: `DefComm, a defence technology startup focused on secure communications, has announced the official pilot phase of its proprietary fail-safe Secure Communication Device with the Nigerian Ministry of Defence in Abuja.`,
      },

      {
        type: "paragraph",
        text: `The deployment follows integration on tactical platforms such as AEGIS-X and XSHIELD-DICON light military vehicles, marking a significant milestone in Nigeria’s push toward indigenous defence communication systems.`,
      },

      {
        type: "paragraph",
        text: `The system is designed for high-risk environments, delivering encrypted communication channels that remain operational even under cyberattack, interception attempts, or network compromise scenarios.`,
      },

      {
        type: "heading",
        text: "Core Capabilities",
      },

      {
        type: "list",
        items: [
          "End-to-end encrypted military communications",
          "Fail-safe retrieval systems for mission continuity",
          "Tactical-grade secure mobile and field devices",
          "Resilient communication infrastructure for battlefield environments",
        ],
      },

      {
        type: "heading",
        text: "Military Collaboration",
      },

      {
        type: "paragraph",
        text: `DefComm’s engagement with the Nigerian Ministry of Defence focuses on operationalizing sovereign cyber capabilities and strengthening national communication independence across defence networks.`,
      },

      {
        type: "paragraph",
        text: `The pilot phase represents a transition from testing to real-world operational validation within active military environments.`,
      },

      {
        type: "heading",
        text: "Strategic Impact",
      },

      {
        type: "paragraph",
        text: `This development aligns with Nigeria’s broader national security objectives, prioritizing indigenous technology adoption, cyber resilience, and reduced dependence on foreign communication infrastructure.`,
      },

      {
        type: "quote",
        text: `“Modern defence operations depend on absolute communication security. DefComm is committed to providing Nigeria with locally developed, mission-critical systems that ensure operational confidentiality and strategic independence,” — Nsikak Nelson`,
      },
    ],
  },
  {
    id: 6,

    slug: "driving-africas-defence-technology-evolution",

    title:
      "Africa Defence Conference – Operation Iron Shield Sets New Agenda for Cybersecurity and Defence Technology in Africa",

    shortDescription:
      "Exploring how Africa is advancing its defence capabilities through indigenous innovation, secure communications, and technology transfer.",

    coverImage: new5,

    bannerImage: new5,

    date: "April 09, 2026",

    gallery: [new5, gal8, gal9, gal10, gal11],

    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Abuja, Nigeria – ",
            bold: true,
          },
          {
            text: "The inaugural Africa Defence Conference – Operation Iron Shield",
            bold: true,
          },
          {
            text: " successfully convened key stakeholders from across government, national security, law enforcement, regulatory institutions, and the technology ecosystem in a landmark effort to strengthen Africa’s cybersecurity and defence technology landscape.",
          },
        ],
      },

      {
        type: "paragraph",
        children: [
          {
            text: "Hosted by ",
          },
          {
            text: "DefComm Solutions",
            bold: true,
            color: "#111827",
            link: "https://defcomm.ng",
          },
          {
            text: ", the conference brought together leading voices and institutions committed to advancing ",
          },
          {
            text: "secure communications",
            bold: true,
          },
          {
            text: ", ",
          },
          {
            text: "cyber defence",
            bold: true,
          },
          {
            text: ", and ",
          },
          {
            text: "digital sovereignty",
            bold: true,
          },
          {
            text: " across the continent.",
          },
        ],
      },

      {
        type: "paragraph",
        text: "The event attracted participation from prominent national and international organizations, including:",
      },

      {
        type: "list",
        items: [
          [
            {
              text: "Nigerian Army",
              link: "https://army.mil.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Nigerian Air Force",
              link: "https://airforce.mil.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "National Drug Law Enforcement Agency (NDLEA)",
              link: "https://ndleahelpline.com.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Nigeria Data Protection Commission (NDPC)",
              link: "https://www.ndpc.gov.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Galaxy Backbone",
              link: "https://galaxybackbone.com.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Nigerian Communications Satellite Limited (NIGCOMSAT)",
              link: "https://www.nigcomsat.gov.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Global Anti-Scam Alliance (GASA)",
              link: "https://gasa.org",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "National Information Technology Development Agency (NITDA)",
              link: "https://nitda.gov.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Office for Nigerian Digital Innovation (ONDI)",
              link: "https://ondi.nitda.gov.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Nigeria Police Force",
              link: "https://nccc.npf.gov.ng",
              color: "#DC2626",
            },
          ],

          [
            {
              text: "Nigerian Communications Commission (NCC)",
              link: "https://ncc.gov.ng",
              color: "#DC2626",
            },
          ],
        ],
      },

      {
        type: "paragraph",
        children: [
          {
            text: "Distinguished experts, including ",
          },
          {
            text: "Uche Ifeanyi, Ph.D",
            bold: true,
          },
          {
            text: " also contributed valuable insights that shaped strategic discussions throughout the conference.",
          },
        ],
      },

      {
        type: "quote",
        children: [
          {
            text: "Africa’s cybersecurity future depends on indigenous innovation, resilient infrastructure, and sovereign digital capabilities.",
            italic: true,
          },
        ],
      },
    ],
  },
  {
    id: 7,

    slug: "defcomm-dess-force-partnership-mou",

    title:
      "Defcomm Signs Strategic MOU with DESS FORCE to Advance Defence Technology Capabilities",

    shortDescription:
      "Defcomm Solutions partners with DESS FORCE to strengthen secure communications and defence technology across critical security operations.",

    coverImage: new6,

    bannerImage: new6,

    date: "2026",

    gallery: [new6, gal12, gal13, gal14],

    content: [
      {
        type: "heading",
        text: "Partnership Announcement",
      },

      {
        type: "paragraph",
        text: "We are pleased to announce that Defcomm Solutions has officially signed a Memorandum of Understanding (MOU) with DESS FORCE [Deenz Escorts and Security Service Ltd] as part of our continued effort to expand Defence Technology capabilities across critical security sectors.",
      },

      {
        type: "paragraph",
        text: "This partnership marks an important step in introducing advanced Defence Technology solutions to Diplomatic Security Professionals.",
      },

      {
        type: "heading",
        text: "Key Focus Areas",
      },

      {
        type: "list",
        items: [
          "Diplomatic Security Operations",
          "Executive Protection Specialists",
          "Maritime Security Operations",
          "Medical Aiders and Emergency Response Teams",
        ],
      },

      {
        type: "paragraph",
        text: "Through this collaboration, we aim to strengthen secure communications, operational coordination, and mission-critical technologies that support those responsible for protecting lives, assets, and national interests.",
      },

      {
        type: "paragraph",
        text: "This initiative reflects our commitment to technological sovereignty and national capability development, ensuring that Africa continues to build and deploy indigenous defence and security technologies.",
      },

      {
        type: "quote",
        text: "We are proud to welcome DESS FORCE as a strategic partner in advancing this vision.",
      },

      {
        type: "paragraph",
        text: "Together, we move forward in strengthening secure and resilient communication infrastructure for modern security operations.",
      },
    ],
  },

  {
    id: 8,

    slug: "defcomm-argus-robotics-partnership",

    title:
      "Defcomm Solutions and Argus Robotics Announce Strategic $400k Partnership to Revolutionise Indigenous Defence Technology",

    shortDescription:
      "DefComm Solutions and Argus Robotics enter a strategic $400,000 partnership to strengthen sovereign defence technology, secure communications, and autonomous systems across Africa.",

    coverImage: gal15,

    bannerImage: gal15,

    date: "May 11, 2026",

    content: [
      {
        type: "heading",
        text: "FOR IMMEDIATE RELEASE",
      },

      {
        type: "paragraph",
        children: [
          {
            text: "LONDON — ",
            bold: true,
          },
          {
            text: "Following a successful high-level meeting between leadership teams in London, ",
          },
          {
            text: "DEFCOMM SOLUTIONS AND TECHNOLOGIES LIMITED",
            bold: true,
            color: "#111827",
            link: "https://defcomm.ng",
          },
          {
            text: ' ("DefComm") and ',
          },
          {
            text: "ARGUS ROBOTICS LIMITED",
            bold: true,
          },
          {
            text: ' ("Argus") are proud to announce a strategic partnership valued at ',
          },
          {
            text: "$400,000",
            bold: true,
            color: "#DC2626",
          },
          {
            text: ". This collaboration marks a significant milestone in strengthening the indigenous defence-technology ecosystem in Nigeria and across Africa.",
          },
        ],
      },

      {
        type: "heading",
        text: "A Unified Vision for Sovereign Defence",
      },

      {
        type: "paragraph",
        children: [
          {
            text: "The partnership combines ",
          },
          {
            text: "DefComm’s",
            bold: true,
          },
          {
            text: " expertise in military-grade, end-to-end encrypted communication platforms with ",
          },
          {
            text: "Argus Robotics’",
            bold: true,
          },
          {
            text: " cutting-edge autonomous aerial systems and low-earth observation infrastructure.",
          },
        ],
      },

      {
        type: "paragraph",
        children: [
          {
            text: 'Together, the companies will develop integrated "',
          },
          {
            text: "Argus + DefComm",
            bold: true,
            color: "#111827",
          },
          {
            text: '" capabilities designed for the Nigerian Defence, the Armed Forces of Nigeria, and other critical infrastructure operators.',
          },
        ],
      },

      {
        type: "heading",
        text: "Key Strategic Work-Streams",
      },

      {
        type: "paragraph",
        text: "Under the terms of the Memorandum of Understanding (MOU), the two entities will cooperate on several high-impact initiatives:",
      },

      {
        type: "list",
        items: [
          [
            {
              text: "Integrated Technology Sharing: ",
              bold: true,
            },
            {
              text: "Joint engineering exchanges and reference architectures to merge secure communication protocols with autonomous drone platforms.",
            },
          ],

          [
            {
              text: "Defence Tech Innovation: ",
              bold: true,
            },
            {
              text: "Co-hosting the Nigerian edition of the European Defense Tech Hackathon.",
            },
          ],

          [
            {
              text: "Global Exhibition: ",
              bold: true,
            },
            {
              text: "Joint representation at major Nigerian, African, and international defence trade shows.",
            },
          ],

          [
            {
              text: "Institutional Engagement: ",
              bold: true,
            },
            {
              text: "Collaborative pursuit of procurement opportunities with the Office of the National Security Adviser and other sovereign agencies.",
            },
          ],
        ],
      },

      {
        type: "heading",
        text: "Leadership Perspectives",
      },

      {
        type: "quote",
        children: [
          {
            text: '"This partnership is more than a technical integration; it is a commitment to sovereign security," ',
            italic: true,
          },
          {
            text: "said Nsikak Joseph, Co-Founder/CEO of Defcomm Solutions.",
            bold: true,
          },
          {
            text: ' "By bridging our secure communication layers with Argus’s aerial intelligence, we are providing an unparalleled, integrated capability for those on the front lines."',
            italic: true,
          },
        ],
      },

      {
        type: "quote",
        children: [
          {
            text: '"Our meeting in London solidified a shared vision for African-led innovation. This $400k investment in our joint roadmap ensures that Nigeria remains at the forefront of dual-use defence and commercial technology."',
            italic: true,
          },
          {
            text: " — Saminu Salisu, Founder/CEO of Argus Robotics",
            bold: true,
          },
        ],
      },

      {
        type: "paragraph",
        children: [
          {
            text: "The collaboration was facilitated by ",
          },
          {
            text: "Dr Salisu Uba, FCIPS",
            bold: true,
          },
          {
            text: " of ",
          },
          {
            text: "NatQuest™",
            bold: true,
          },
          {
            text: ", whose role was pivotal in aligning the strategic interests of both parties.",
          },
        ],
      },

      {
        type: "heading",
        text: "About the Companies",
      },

      {
        type: "paragraph",
        children: [
          {
            text: "DefComm Solutions and Technologies Limited: ",
            bold: true,
          },
          {
            text: "A Nigerian-based leader in developing military-grade secure communication and collaboration platforms for law enforcement and emergency response.",
          },
        ],
      },

      {
        type: "paragraph",
        children: [
          {
            text: "Argus Robotics Limited: ",
            bold: true,
          },
          {
            text: "A Nigerian-British firm specialising in drone technology, remote sensing, and sovereign defence applications.",
          },
        ],
      },

      {
        type: "heading",
        text: "Tags",
      },

      {
        type: "list",
        items: [
          [
            {
              text: "#DefenceTechnology",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#SovereignSecurity",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#MilitaryInnovation",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#SecureCommunications",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#DroneTechnology",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#AutonomousSystems",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#AfricaTech",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#NigeriaDefence",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#DualUseTechnology",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#NationalSecurity",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#DefenceIndustry",
              color: "#DC2626",
            },
          ],
          [
            {
              text: "#CyberSecurity",
              color: "#DC2626",
            },
          ],
        ],
      },
    ],
    gallery: [gal15, gal16, gal17],
  },
];
