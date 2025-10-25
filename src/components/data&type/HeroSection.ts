export interface HeroContentProps {
  id: number;
  heading: string;
  subHeading: string;
  img: string;
}
export const heroContent: HeroContentProps[] = [
  {
    id: 1,
    heading: "Work and Study Abroad Opportunities",
    subHeading:
      "Start your international career or education journey with expert guidance and opportunities in top global destinations.",
    img: "/hero1.jpg",
  },
  {
    id: 2,
    heading: "Nursing Jobs Abroad",
    subHeading:
      "Gain international healthcare experience, work in reputed hospitals, and make a meaningful impact in patient care.",
    img: "/hero2.jpg",
  },
  {
    id: 3,
    heading: "Warehouse & Storage Solutions",
    subHeading:
      "Work in modern warehouses managing storage, logistics, and dispatch efficiently while gaining global work exposure.",
    img: "/hero3.jpg",
  },
  {
    id: 4,
    heading: "Cleaning & Maintenance Services",
    subHeading:
      "Join professional teams abroad ensuring hygiene and safety across corporate and residential spaces with high standards.",
    img: "/hero4.jpg",
  },
  {
    id: 5,
    heading: "Beauty & Salon Professionals",
    subHeading:
      "Work in international salons and spas, enhance beauty skills, and deliver top-notch hair, skincare, and styling services.",
    img: "/hero5.jpg",
  },
  {
    id: 6,
    heading: "Cooking & Culinary Opportunities",
    subHeading:
      "Step into global kitchens, learn world-class culinary techniques, and work under master chefs while earning abroad.",
    img: "/hero6.jpg",
  },
  {
    id: 7,
    heading: "Waiter & Hotel Management",
    subHeading:
      "Build a career in hospitality, serving guests, managing operations, and gaining international hotel management experience.",
    img: "/hero7.jpg",
  },
  {
    id: 8,
    heading: "Study Abroad Programs",
    subHeading:
      "Pursue undergraduate, postgraduate, and diploma courses in top universities worldwide with expert guidance.",
    img: "/hero8.jpg",
  },
  {
    id: 9,
    heading: "Career-Focused Learning Pathways",
    subHeading:
      "Choose programs that match your passion from healthcare, hospitality, business, IT, and engineering with placement assistance.",
    img: "/hero9.jpg",
  },
];
export interface StudyAbroadFormProps {
  title: string;
  desc: string;
  icon: string;
}
export const studyAbroadFormData: StudyAbroadFormProps[] = [
  {
    title: "Choose Your Path",
    desc: "Select the programme that inspires you and advances your career or education.",
    icon: "📋",
  },
  {
    title: "Level Up Your Future",
    desc: "From student life to career advancement, explore top universities with expert support.",
    icon: "🚀",
  },
  {
    title: "Test & Application Support",
    desc: "Boost your English test performance and present your best self through your Statement of Purpose.",
    icon: "📝",
  },
  // {
  //   title: "Secure Funding",
  //   desc: "manage your finances for a smooth visa process.",
  //   icon: "💰",
  // },
  {
    title: "Visa & Beyond",
    desc: "Prepare confidently for your visa interview and take the first step towards your international future.",
    icon: "🧳",
  },
];

// Country data with flag emojis

export interface CountriesProp {
  id: number;
  name: string;
  flag: string;
  description: string;
  studyOpportunities: {
    universities: number;
    topUniversities: string[];
    avgTuition: string;
    scholarships: string;
    language: string;
  };
  jobOpportunities: {
    industries: string[];
    avgSalary: string;
    workPermit: string;
    jobGrowth: string;
  };
}
export const countries: CountriesProp[] = [
  {
    id: 1,
    name: "Singapore",
    flag: "🇸🇬",
    description: "Global education hub with top-ranked universities",
    studyOpportunities: {
      universities: 6,
      topUniversities: ["NUS", "NTU", "SMU"],
      avgTuition: "$25,000 - $40,000",
      scholarships: "Available",
      language: "English",
    },
    jobOpportunities: {
      industries: ["Technology", "Finance", "Healthcare"],
      avgSalary: "$45,000 - $80,000",
      workPermit: "Available",
      jobGrowth: "85%",
    },
  },
  {
    id: 2,
    name: "Germany",
    flag: "🇩🇪",
    description: "Tuition-free education with strong engineering programs",
    studyOpportunities: {
      universities: 380,
      topUniversities: ["TUM", "LMU Munich", "Heidelberg"],
      avgTuition: "Free (Public)",
      scholarships: "DAAD Available",
      language: "German/English",
    },
    jobOpportunities: {
      industries: ["Engineering", "Manufacturing", "IT"],
      avgSalary: "$50,000 - $75,000",
      workPermit: "18 months post-study",
      jobGrowth: "90%",
    },
  },
  {
    id: 3,
    name: "Denmark",
    flag: "🇩🇰",
    description: "High quality of life with innovative education",
    studyOpportunities: {
      universities: 8,
      topUniversities: ["Copenhagen", "DTU", "Aarhus"],
      avgTuition: "Free (EU) / $8,000 - $16,000",
      scholarships: "Limited",
      language: "Danish/English",
    },
    jobOpportunities: {
      industries: ["Green Energy", "IT", "Pharmaceuticals"],
      avgSalary: "$55,000 - $85,000",
      workPermit: "Available",
      jobGrowth: "82%",
    },
  },
  {
    id: 4,
    name: "France",
    flag: "🇫🇷",
    description: "Rich cultural heritage with world-class education",
    studyOpportunities: {
      universities: 70,
      topUniversities: ["Sorbonne", "PSL", "École Polytechnique"],
      avgTuition: "$200 - $15,000",
      scholarships: "Eiffel Excellence",
      language: "French/English",
    },
    jobOpportunities: {
      industries: ["Luxury", "Aerospace", "Tourism"],
      avgSalary: "$35,000 - $60,000",
      workPermit: "Available",
      jobGrowth: "75%",
    },
  },
  {
    id: 5,
    name: "Italy",
    flag: "🇮🇹",
    description: "Historic universities with art and design excellence",
    studyOpportunities: {
      universities: 90,
      topUniversities: ["Bologna", "Sapienza", "Politecnico"],
      avgTuition: "$1,000 - $4,000",
      scholarships: "Available",
      language: "Italian/English",
    },
    jobOpportunities: {
      industries: ["Fashion", "Design", "Automotive"],
      avgSalary: "$30,000 - $55,000",
      workPermit: "Available",
      jobGrowth: "70%",
    },
  },
  {
    id: 6,
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Prestigious institutions with global recognition",
    studyOpportunities: {
      universities: 160,
      topUniversities: ["Oxford", "Cambridge", "Imperial"],
      avgTuition: "$20,000 - $40,000",
      scholarships: "Chevening Available",
      language: "English",
    },
    jobOpportunities: {
      industries: ["Finance", "Technology", "Creative"],
      avgSalary: "$45,000 - $75,000",
      workPermit: "2 years post-study",
      jobGrowth: "88%",
    },
  },
  {
    id: 7,
    name: "USA",
    flag: "🇺🇸",
    description: "Leading research universities with diverse programs",
    studyOpportunities: {
      universities: 4000,
      topUniversities: ["MIT", "Stanford", "Harvard"],
      avgTuition: "$30,000 - $60,000",
      scholarships: "Fulbright Available",
      language: "English",
    },
    jobOpportunities: {
      industries: ["Technology", "Healthcare", "Finance"],
      avgSalary: "$60,000 - $100,000",
      workPermit: "OPT/H1B Available",
      jobGrowth: "92%",
    },
  },
  {
    id: 8,
    name: "Russia",
    flag: "🇷🇺",
    description:
      "Affordable education with strong programs in science and engineering",
    studyOpportunities: {
      universities: 950,
      topUniversities: ["MSU", "SPSU", "Bauman MSTU"],
      avgTuition: "$2,000 - $8,000",
      scholarships: "Russian Government Available",
      language: "Russian/English",
    },
    jobOpportunities: {
      industries: ["Energy", "IT", "Manufacturing"],
      avgSalary: "$20,000 - $45,000",
      workPermit: "Available",
      jobGrowth: "68%",
    },
  },
];




export const highlightImages = [
  "/hl1.png",
  "/hl2.png",
  "/hl3.png",
  "/hl4.png",
  "/hl5.png",
  "/hl6.png",
  "/hl7.png",
  "/hl8.png",
  "/hl9.png",
];
