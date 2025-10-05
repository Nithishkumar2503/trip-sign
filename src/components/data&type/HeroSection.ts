export interface HeroContentProps {
  id: number;
  heading: string;
  subHeading: string;
  img: string;
}
export const heroContent: HeroContentProps[] = [
  {
    img: "/hero1.jpg",
    id: 1,
    heading: "Turn Your Study Abroad Dreams into Reality",
    subHeading:
      "Expert guidance for admissions, visas, and career opportunities in top universities worldwide.",
  },
  {
    img: "/hero2.png",
    id: 2,
    heading: "Global Education, Personalized for You",
    subHeading:
      "We help you choose the right course and destination to achieve your international career goals.",
  },
  {
    img: "/hero3.png",
    id: 3,
    heading: "Your Journey to Study and Work Abroad Starts Here",
    subHeading:
      "From university selection to visa support, we make your path to success smooth and stress-free.",
  },
  {
    img: "/hero4.png",
    id: 4,
    heading: "Launch Your Career Abroad with Confidence",
    subHeading:
      "We provide end-to-end support for securing international job opportunities and work visas.",
  },
  // {
  //   img: "",
  //   id: 5,
  //   heading: "Work Abroad Opportunities Made Easy",
  //   subHeading:
  //     "Get expert advice on global job markets, resume building, and interview preparation.",
  // },
  // {
  //   img: "",
  //   id: 6,
  //   heading: "Your International Career Starts Here",
  //   subHeading:
  //     "Connect with top employers abroad and kickstart your professional journey with guidance and support.",
  // },
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
