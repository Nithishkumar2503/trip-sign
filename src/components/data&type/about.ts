interface itemProp {
  image: string;
  address: string;
  email: string;
  phones: string[];
 
}
export interface OfficeDataProps {
  Coimbatore: itemProp;
  Namakkal: itemProp;
  Singapore: itemProp;
  Dubai: itemProp;
}
export const officeData: OfficeDataProps = {
  Coimbatore: {
    image: "/src/assets/hero2.png",
    address: "First floor,Vignesh Park,Ram Nagar,Gandhipuram,Coimbatore-641009",
    email: "tripwithsign@gmail.com",
    phones: ["+916384044005", "+91 6374080040", "04224690439"],
    
  },
  
};


export interface TestingmonialsProps{
    name:string
    role:string
    feedback:string
    img:string
}
export const testimonials:TestingmonialsProps[] = [
  {
    name: "Gauthami",
    role: "Student",
    feedback:
      "From India to my destination country, they ensured every detail was covered, making my transition seamless and allowing me to focus on my studies.",
    img: "/src/assets/person.png", // Replace with actual profile image
  },
  {
    name: "Krishna",
    role: "Student from Singapore",
    feedback:
      "Navigating the study abroad landscape can be overwhelming, but Trip with sign's experts are true navigators.",
    img: "/src/assets/person.png", // Replace with actual profile image
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
      "Trip with sign is a comprehensive education and career platform that empowers students and professionals to explore international education opportunities, secure placements, enhance skills, and navigate global career paths. We offer a range of services to help you achieve your academic and professional goals.",
  },
  {
    heading: "What services does Trip with sign provide?",
    subHeading:
      "Trip with sign offers a variety of services, including study abroad program selection, admission assistance, career counseling, guaranteed placements, skill development programs, visa support, pre/post departure services, and more. Our aim is to guide you at every stage of your journey towards academic and career success.",
  },

  {
    heading: "How can Trip with sign help me study abroad?",
    subHeading:
      "Our study abroad services assist you in selecting the right educational program, preparing your application documents, navigating admission requirements, and ensuring a smooth transition to your chosen study destination. We offer guidance, resources, and personalized support throughout the process.",
  },

  {
    heading: "Can Trip with sign assist with visa applications?",
    subHeading:
      "Yes, we provide support with visa applications for your chosen study destination. Our experts offer guidance on the necessary documentation, requirements, and processes, ensuring a smooth visa application experience. Professional people",
  },
];


export interface statsProps{
    icon:string
    value:string
    label:string

}
  export const stats:statsProps[]= [
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
