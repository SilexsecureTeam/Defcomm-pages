import ExhibitionRegistrationForm from "../../pages/ExhibitionRegistrationForm";
import MasterclassApplicationForm from "../../pages/MasterClassApplicationForm";
import VolunteerRegistrationForm from "../../pages/VolunteerRegistrationForm";

export const routesConfig = [
  {
    path: "/events/ged",
    type: "event",
    eventDetails: {
      title: "GLOBAL ENCRYPTION DAY 2025",
      organizer: "DEFCOMM SOLUTIONS",
      slogan: "STRONG ENCRYPTION • STRONGER FUTURE",
      tagline: "DEFENDING TRUST IN A CONNECTED WORLD",
      date: "TUESDAY, 21 OCTOBER 2025",
      accentColor: "from-green-600 to-oliveDark",
    },
    apiConfig: {},
  },
  {
    path: "/events/ph-cybersecurity",
    type: "event",
    eventDetails: {
      title: "PORT-HARCOURT CYBER SECURITY MEET & GREET",
      organizer: "DITS ACADEMY & KOCKA IT SERVICES",
      slogan: "Opportunities, Careers, and Growth Paths",
      tagline: "THE PORT-HARCOURT CYBER SECURITY LANDSCAPE",
      date: "SATURDAY, 25 OCTOBER 2025 | 12PM - 3PM",
      venue: "DITS Academy, Suite 15, DDS Shopping Mall, Rukpokwu",
      accentColor: "from-cyan-600 to-blue-700",
      socialLinks: {
        instagram: "https://www.instagram.com/ditsacademyph/",
        twitter: "https://x.com/ditsacademyph",
        linkedin: "https://www.linkedin.com/company/ditsacademy/",
      },
      contact: {
        email: "info@ditsacademy.com",
        website: "https://www.ditsacademy.com",
      },
    },
    apiConfig: {
      form_id:
        "eyJpdiI6ImRPRTVzM3JRNzYrVFZNVGp6NGFTYUE9PSIsInZhbHVlIjoiZ1lEZ2xuYTVHc1RTSXVXV1VRWTJ3Zz09...",
    },
  },
  {
    path: "/programme/bug-bounty",
    type: "programme",
    contact: {
      email: "business@defcomm.ng",
      phone: "+234 803 507 5198",
    },
    apiConfig: {
      form_id:
        "eyJpdiI6IlhuR1ZPVUlRUXU0bTZEZXVxdEdaMEE9PSIsInZhbHVlIjoiUHN4d0xsRGNhK3NmS1NqUFFycUFuZz09IiwibWFjIjoiMGFmNTQ2ZTdmOTM5NTNkYmVhMDYxYzJhN2IxNzY0NGZiOWM3N2Y4NjU0OTM4NDJlNzVlMGEzYzNjNTNjNTU2ZiIsInRhZyI6IiJ9",
      plan_id: "",
    },
    component: VolunteerRegistrationForm,
  },
  {
    path: "/programme/exhibition",
    type: "programme",
    eventDetails: {
      title: "DEFCOMM EXHIBITION REGISTRATION",
      organizer: "DEFCOMM SOLUTIONS",
      slogan: "Operation Iron Shield",
      tagline: "Securing Communications, Systems & Skies",
      accentColor: "from-green-700 to-green-900",
    },
    contact: {
      email: "business@defcomm.ng",
      phone: "+234 803 507 5198",
    },
    apiConfig: {
      form_id:
        "eyJpdiI6IkdIbFJvY0thOEJUSFZld2J4U2VvVnc9PSIsInZhbHVlIjoiU1ZMQ3gzQkREbUt5V0pCb1puSU5yUT09IiwibWFjIjoiZDdhYzA1MjQ5ZjFiNzljYzA3YzlmMjYzMDE3OWY5ZDM5ZTc3NTM5NWRmYmMyZjhlNTI3NTk0MWM5NmE3YjZmNyIsInRhZyI6IiJ9",
    },
    component: ExhibitionRegistrationForm,
  },
  {
    path: "/programme/skitlab/masterclass",
    type: "programme",

    eventDetails: {
      title: "The Skit Lab Masterclass",
      organizer: "Spoke-Wise Media & PR x U.S. Mission Nigeria",
      slogan: "Advanced Techniques in Ideation, Timing & Editing",
      tagline: "A Master Class Designed to Foster U.S.–Nigeria Trade Relations",
      date: "8th – 9th December, 2025",
      venue: "Novare Training Hall, Zone 5, Abuja",

      // elegant warm gradient matching the flyer
      accentColor: "from-amber-500 to-orange-600",

      // official social handles
      socialLinks: {
        us_mission_instagram: "https://instagram.com/usinnigeria",
        us_mission_twitter: "https://x.com/USinNigeria",
        us_mission_facebook: "https://facebook.com/usinnigeria",

        spokewise_instagram: "https://instagram.com/spokewise_media",
      },

      // optional: used in success screen / meta descriptions
      description:
        "A U.S. Mission Nigeria–supported masterclass for emerging Nigerian content creators featuring expert training, a special Independence 250 skit challenge, and exclusive in-person engagement in Abuja.",
    },

    contact: {
      email: "info@spokewise.com",
      phone: "+234 803 507 5198", // change if needed
    },

    apiConfig: {
      form_id: import.meta.env.VITE_SKITLAB_FORM_ID, // or your encrypted key
    },

    component: MasterclassApplicationForm,
  },
];
