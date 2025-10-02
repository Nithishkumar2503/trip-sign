interface itemProp {
  image: string;
  address: string;
  email: string;
  phones: string[];
}
export interface OfficeDataProps {
  Coimbatore?: itemProp;
  Namakkal?: itemProp;
  Singapore?: itemProp;
  Dubai?: itemProp;
}
export const officeData: OfficeDataProps = {
  Coimbatore: {
    image: "/hero2.png",
    address: "First floor,Vignesh Park,Ram Nagar,Gandhipuram,Coimbatore-641009",
    email: "tripwithsign@gmail.com",
    phones: ["+916384044005", "+91 6374080040", "04224690439"],
  },
};

export interface TestingmonialsProps {
  name: string;
  role: string;
  feedback: string;
  img: string;
}
export const testimonials: TestingmonialsProps[] = [
  {
    name: "Gauthami",
    role: "Student",
    feedback:
      "From India to my destination country, they ensured every detail was covered, making my transition seamless and allowing me to focus on my studies.",
    img: "/person.png", // Replace with actual profile image
  },
  {
    name: "Krishna",
    role: "Student from Singapore",
    feedback:
      "Navigating the study abroad landscape can be overwhelming, but Trip with sign's experts are true navigators.",
    img: "/person.png", // Replace with actual profile image
  },
];

export interface FQAProps {
  heading: string;
  subHeading: string;
}
export const faqData: FQAProps[] = [
  {
    heading: "What is Trip with sign?",
    subHeading:
      "Trip with Sign helps students and professionals fulfill their dreams of studying and working abroad. We provide complete end-to-end support — from admissions and visas to career guidance and settlement assistance.",
  },
  {
    heading: "What services does Trip with sign provide?",
    subHeading:
      "Trip with Sign offers end-to-end support for studying and working abroad. Our services include career counseling, university admissions, visa assistance, job guidance, scholarships, accommodation support, and pre-departure orientation to make your international journey smooth and successful.",
  },

  {
    heading: "How can Trip with sign help me study abroad?",
    subHeading:
      "Trip with Sign guides you through every step of your study abroad journey — from choosing the right course and university, preparing your application, securing scholarships, handling visa formalities, to arranging accommodation and pre-departure support.",
  },

  {
    heading: "Can Trip with sign assist with visa applications?",
    subHeading:
      "Yes, Trip with Sign provides complete visa assistance. Our team helps you with document preparation, application filing, interview guidance, and follow-ups to ensure a smooth visa approval process.",
  },
];

export interface statsProps {
  icon: string;
  value: string;
  label: string;
}
export const stats: statsProps[] = [
  {
    icon: "🛂",
    value: "30+",
    label: "Visa Categories",
  },
  {
    icon: "🌍",
    value: "68k",
    label: "Visa Process",
  },
  {
    icon: "🎯",
    value: "99+",
    label: "Success Rate",
  },
  {
    icon: "👥",
    value: "23+",
    label: "Pro Consultants",
  },
];
