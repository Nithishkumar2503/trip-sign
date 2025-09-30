export interface HeroContentProps {
  id: number;
  heading: string;
  subHeading: string;
  img: string;
}
export const heroContent: HeroContentProps[] = [
  {
    img: "/src/assets/hero1.jpg",
    id: 1,
    heading: "Turn Your Study Abroad Dreams into Reality",
    subHeading:
      "Expert guidance for admissions, visas, and career opportunities in top universities worldwide.",
  },
  {
    img: "/src/assets/hero2.png",
    id: 2,
    heading: "Global Education, Personalized for You",
    subHeading:
      "We help you choose the right course and destination to achieve your international career goals.",
  },
  {
    img: "/src/assets/hero3.png",
    id: 3,
    heading: "Your Journey to Study and Work Abroad Starts Here",
    subHeading:
      "From university selection to visa support, we make your path to success smooth and stress-free.",
  },
  {
    img: "/src/assets/hero4.png",
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
    title: "Choose Your Programme",
    desc: "Select the course that inspires you and shapes your future.",
    icon: "📋",
  },
  {
    title: "Find Your University",
    desc: "Discover and shortlist top universities with expert guidance.",
    icon: "🏛️",
  },
  {
    title: "Prepare for Tests & Applications",
    desc: "Get support to ace your English language test and craft a strong Statement of Purpose.",
    icon: "📝",
  },
  {
    title: "Secure Funding",
    desc: "Apply for scholarships and manage your finances for a smooth visa process.",
    icon: "💰",
  },
  {
    title: "Visa & Beyond",
    desc: "Prepare confidently for your visa interview and take the first step towards your international future.",
    icon: "🧳",
  },
];
