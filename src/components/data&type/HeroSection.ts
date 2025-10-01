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
export const countries = [
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "France", flag: "🇫🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "USA", flag: "🇺🇸" },
];
