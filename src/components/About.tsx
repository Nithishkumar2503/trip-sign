import { FaUsers } from "react-icons/fa"; // For the icon
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
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

function Testimonials() {
  return (
    <div className="bg-gray-50 py-28 px-6 lg:px-20 w-full  items-center content-center">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          Our Feedbacks
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          What They’re Talking About Trip with sign
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 relative"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {t.name}
                </h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
                <div className="flex text-red-500 mt-1">{"★★★★★"}</div>
              </div>
            </div>
            <p className="text-gray-600">{t.feedback}</p>
            <div className="absolute top-6 right-6 text-red-500 text-2xl">
              <FaQuoteLeft />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
interface FQAProps {
  heading: string;
  subHeading: string;
}
const faqData: FQAProps[] = [
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:flex items-center content-center">
      <div className="w-full lg:w-1/2  flex flex-col justify-center px-10 py-20">
        <img src="/src/assets/hero1.jpg" className="w-full h-full" alt="" />
      </div>
      <div className="w-full  lg:w-1/2 bg-gree flex flex-col justify-center px-10 py-20">
        <div>
          <p className="text-sm uppercase text-gray-500 tracking-wider">
            Common FAQs
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-10">
            Frequently Asked Questions?
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">{item.heading}</p>
                  <span className="text-red-600 text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 text-sm py-2">
                    {/* Placeholder answer - customize as needed */}
                    {item.subHeading}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function StatsSection() {
  const stats = [
    {
      icon: '🛂',
      value: '30+',
      label: 'Visa Categories',
    },
    {
      icon: '🌍',
      value: '68k',
      label: 'Visa Process',
    },
    {
      icon: '🎯',
      value: '99+',
      label: 'Success Rate',
    },
    {
      icon: '👥',
      value: '23+',
      label: 'Pro Consultants',
    },
  ];

  return (
    <section className="bg-blue-950 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-white/40 text-white p-6 flex flex-col items-center text-center rounded-lg"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const officeData = {
 
  Coimbatore: {
   image: '/src/assets/hero2.png',
    address: 'First floor,Vignesh Park,Ram Nagar,Gandhipuram,Coimbatore-641009',
    email: 'tripwithsign@gmail.com',
    phones: ['+916384044005','+91 6374080040', '04224690439'],
    hours: {
      Monday: '12:00 pm – 19:00 pm',
      'Tuesday to Friday': '8:00 am – 19:00 pm',
      Saturday: '8:00 am to 3:30 pm',
    },
  },
   Namakkal: {
    image: '/src/assets/hero2.png',
    address: 'First floor,Vignesh Park,Ram Nagar,Gandhipuram,Coimbatore-641009',
    email: 'tripwithsign@gmail.com',
    phones: ['+916384044005','+91 6374080040', '04224690439'],
    hours: {
      Monday: '12:00 pm – 19:00 pm',
      'Tuesday to Friday': '8:00 am – 19:00 pm',
      Saturday: '8:00 am to 3:30 pm',
    },
  },
  Singapore: {
    image: 'https://via.placeholder.com/400x250?text=Singapore+Office',
    address: '123 Singapore Road, SG - 567890',
    email: 'sg.office@email.com',
    phones: ['+65 1234 5678'],
    hours: {
      Monday: '10:00 am – 6:00 pm',
      'Tuesday to Friday': '10:00 am – 6:00 pm',
    },
  },
  Dubai: {
    image: 'https://via.placeholder.com/400x250?text=Dubai+Office',
    address: 'Dubai Business Center, Dubai - UAE',
    email: 'dubai@office.com',
    phones: ['+971 50 123 4567'],
    hours: {
      Sunday: '9:00 am – 5:00 pm',
      'Monday to Thursday': '9:00 am – 5:00 pm',
    },
  },
};

const OfficeLocations = () => {
  const [activeTab, setActiveTab] = useState('Namakkal');

  const office = officeData[activeTab];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500">Checkout Our Locations</p>
          <div className="w-10 h-1 bg-red-500 mx-auto my-2 rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Visa Consultancy <br className="hidden md:block" />
            Offices in World
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            There are many variations of passages of available but the majority have suffered
            alteration in some form, by injected hum randomised words which don't slightly.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {Object.keys(officeData).map((location) => (
            <button
              key={location}
              onClick={() => setActiveTab(location)}
              className={`px-6 py-3 font-medium border transition-all duration-300 ${
                activeTab === location
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Office Content */}
        <div className="bg-white rounded-md   shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start border">
          {/* Image */}
          <div className="md:col-span-1 my-auto">
            <img
              src={office.image}
              alt={`${activeTab} office`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Address & Contact */}
          <div className="md:col-span-1 space-y-4 my-auto">
            <h3 className="text-xl font-semibold text-gray-900">{activeTab}</h3>
            <p className="text-gray-600 flex items-start">
              <span className="text-red-500 mr-2">📍</span>
              {office.address}
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="text-red-500 mr-2">✉️</span> {office.email}
            </p>
            {office.phones.map((phone, idx) => (
              <p className="text-gray-600 flex items-center" key={idx}>
                <span className="text-red-500 mr-2">📞</span> {phone}
              </p>
            ))}
          </div>

          {/* Working Hours */}
          <div className="md:col-span-1 border-l md:pl-6">
           {Open24x7()}
          </div>
        </div>
      </div>
    </section>
  );
};
const Open24x7 = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Always Available
        </p>

        <div className="w-10 h-1 bg-red-500 mx-auto my-3 rounded-full"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          We’re Open 24/7 at <span className="text-primary">Online</span>
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Our consultants are available around the clock to assist you with your visa, immigration, and documentation needs. Contact us anytime, from anywhere.
        </p>

        <div className="flex justify-center items-center space-x-4">
          <span className="text-xl text-red-600 font-semibold">📞 +91 98765 43210</span>
          <a
            href="#"
            className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};


const AboutUs = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 lg:px-16 relative h-[100vh]  items-center content-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 uppercase mb-2">
              Get to know us
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Your Pathway to Worldwide Education and Opportunities
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <FaUsers className="text-red-500 text-2xl" />
              <p className="text-red-500">
                The Best in Visa & Immigration Since 2020
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              At Trip with sign, we believe that education is the key to
              unlocking a world of opportunities. Our mission is to empower
              students and professionals to explore, learn, and excel on a
              global scale. With a deep commitment to excellence, innovation,
              and personalized guidance, we're more than just an education
              platform – we're your partners in shaping a brighter future.
            </p>

            <div className="flex gap-6 mb-6">
              <p className="flex items-center gap-2 font-semibold">
                <span className="text-red-500">✔</span> Fast Processing
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <span className="text-red-500">✔</span> Guarantee Approval
              </p>
            </div>

            {/* <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Discover More
            </button> */}
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col gap-4">
            <img
              src="/src/assets/hero1.jpg"
              alt="Team"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-red-500">10</span>
              <span className="text-gray-500 text-sm">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>
      {/* Decorative plane icon */}
      {Testimonials()}
      {FAQ()}
      {StatsSection()}
      {OfficeLocations()}
    </>
  );
};

export default AboutUs;
