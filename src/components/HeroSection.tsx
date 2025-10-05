import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaRoute,
  FaPassport,
  FaHandsHelping,
  FaUserTie,
  FaStar,
  FaShieldAlt,
  FaCompass,
  FaChartLine,
} from "react-icons/fa";
import {
  heroContent,
  studyAbroadFormData,
  type HeroContentProps,
} from "./data&type";
import CountryItem from "./CountryItem";
import StatsSection from "./StatsSection";

const FreeFeelCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto lg:w-full lg:mt-0 mt-2 items-center content-center bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl p-8 text-center text-white"
    >
      <h2 className="lg:text-3xl text-xl font-extrabold mb-4 drop-shadow-lg">
        Free Feel to Ask
      </h2>
      <p className="lg:text-lg text-sm mb-6 drop-shadow-md">
        Have any questions or need guidance? We're here to help you out anytime.
      </p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white lg:text-lg text-sm text-indigo-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        Ask Now
      </motion.a>
    </motion.div>
  );
};

// StudyAbroadForm.jsx
const StudyAbroadForm = () => {
  return (
    <div className="rounded-xl  bg-purple-700   text-white px-6 lg:py-26 py-12 lg:items-center lg:justify-center gap-40 lg:px-20">
      <div className="lg:w-[66vw] gap-8 lg:flex mx-auto p-2">
        {/* Left Section */}
        <div className="">
          <h2 className="lg:text-3xl text-xl font-bold">
            Your Next Steps to Studying Abroad
          </h2>
          <p className="lg:text-lg text-sm">
            Unlock a world of global opportunities, personal growth, and career
            success with a study experience beyond borders. The investment you
            make today pays off tomorrow with job prospects and extended visa
            options.
          </p>

          <ul className="space-y-6 lg:pt-0 pt-2">
            {studyAbroadFormData.map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="lg:text-2xl text-md  bg-white text-purple-700 p-2 rounded-md">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{step.title}</h4>
                  <p className="text-sm text-purple-200">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        {FreeFeelCard()}
      </div>
    </div>
  );
};

const HeroSect = () => {
  return (
    <section className=" bg-white py-8 lg:px-12 h-fit items-center content-center">
      {/* Hero content */}
      <div className="lg:w-[66vw] p-2 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Start Your Study/Career Abroad <br /> Journey with{" "}
            <span className="text-purple-600">Trip With Sign</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Your Trusted Partner for Overseas Education, Career Guidance, and
            Global Opportunities
          </p>

          {/* Buttons */}
          {/* <button className="bg-purple-900 text-white px-6 py-3 h-fit  rounded-full font-medium hover:bg-purple-800 transition">
              Register for FREE
            </button> */}
          <div className="mt-8  flex flex-col sm:flex-row gap-4 justify-center items-center content-center lg:justify-start">
            <button className="bg-cyan-300 mx-auto text-black font-medium px-6 py-2 rounded-full hover:bg-cyan-400 transition">
              Contact us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/abroad-career.png"
            alt="Student smiling"
            className="lg:h-[600px]  rounded-xl object-cover"
          />
        </div>
      </div>
      {StatsSection()}
    </section>
  );
};

function ImmigrationServices() {
  const immigrationContent = [
    {
      heading: "Unlock Global Opportunities",
      subheading:
        "Trusted citizenship and immigration services tailored to your goals.",
      icon: (
        <FaGlobe className="text-blue-500 w-12 h-12 p-2 bg-blue-100 rounded-full" />
      ),
    },
    {
      heading: "Your Pathway to a New Life",
      subheading:
        "Expert guidance for citizenship, residency, and immigration success.",
      icon: (
        <FaRoute className="text-green-500 w-12 h-12 p-2 bg-green-100 rounded-full" />
      ),
    },
    {
      heading: "Seamless Immigration Solutions",
      subheading:
        "From application to approval, we simplify your journey abroad.",
      icon: (
        <FaPassport className="text-purple-500 w-12 h-12 p-2 bg-purple-100 rounded-full" />
      ),
    },
    {
      heading: "Building Bridges Beyond Borders",
      subheading:
        "Reliable citizenship and immigration assistance for individuals & families.",
      icon: (
        <FaHandsHelping className="text-pink-500 w-12 h-12 p-2 bg-pink-100 rounded-full" />
      ),
    },
    {
      heading: "Expert Support for Global Moves",
      subheading:
        "Professional immigration services to help you settle with ease.",
      icon: (
        <FaUserTie className="text-indigo-500 w-12 h-12 p-2 bg-indigo-100 rounded-full" />
      ),
    },
    {
      heading: "Turning Immigration Dreams into Reality",
      subheading:
        "Personalized services for study, work, and permanent residency.",
      icon: (
        <FaStar className="text-yellow-400 w-12 h-12 p-2 bg-yellow-100 rounded-full" />
      ),
    },
    {
      heading: "Secure Your Future Abroad",
      subheading:
        "Trusted experts in citizenship, visas, and immigration solutions.",
      icon: (
        <FaShieldAlt className="text-red-500 w-12 h-12 p-2 bg-red-100 rounded-full" />
      ),
    },
    {
      heading: "Global Citizenship, Simplified",
      subheading: "We help you achieve hassle-free immigration and residency.",
      icon: (
        <FaShieldAlt className="text-red-500 w-12 h-12 p-2 bg-red-100 rounded-full" />
      ),
    },
    {
      heading: "Guiding You Every Step of the Way",
      subheading: "From consultation to approval, your success is our mission.",
      icon: (
        <FaCompass className="text-orange-500 w-12 h-12 p-2 bg-orange-100 rounded-full" />
      ),
    },
    {
      heading: "Expanding Your Horizons",
      subheading:
        "Comprehensive citizenship and immigration support you can trust.",
      icon: (
        <FaChartLine className="text-emerald-500 w-12 h-12 p-2 bg-emerald-100 rounded-full" />
      ),
    },
  ] as const;

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="lg:w-[66vw] p-2 mx-auto lg:px-4 w-full items-center content-center ">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
          Citizenship & Immigration Services
        </h2>

        <div className="flex flex-wrap lg:justify-between justify-center gap-8 ">
          {immigrationContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              className="group   bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 w-[27rem]"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  {item.heading}
                </h3>
                <p className="text-gray-600">{item.subheading}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative curved background */}
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-50 rounded-b-full -z-10"></div>
    </section>
  );
}

export default function HeroSection() {
  const [count, setCount] = useState(1);
  setTimeout(() => {
    if (heroContent.length == count) {
      setCount(1);
      return;
    }
    setCount(count + 1);
  }, 3000);
  return (
    <>
      <div className="lg:flex  lg:w-[99.2vw] mx-auto  lg:h-[70vh] w-full  h-[80vh]  items-center content-center">
        {heroContent.map((item: HeroContentProps) =>
          count == item.id ? (
            <div
              key={item.id}
              className={
                item.id % 2 == 1
                  ? " items-center content-center pb-0 h-full w-full "
                  : " flex-row-reverse items-center content-center pb-0 h-full w-full "
              }
            >
              <div className="relative w-full  h-full flex items-center justify-center overflow-hidden shadow-lg">
                {/* Image sliding from right to left */}
                <motion.img
                  src={item.img}
                  alt=""
                  className="select-none w-full h-full object-cover"
                  initial={{ x: 10, opacity: 0 }} // start off-screen to the right
                  animate={{ x: 0, opacity: 0.8 }} // slide into place
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }} // hover zoom effect
                />
              </div>

              <div className="items-center content-center  absolute inset-0 w-fit mx-auto opacity-80 bg-gradient-to-l">
                <motion.div
                  className="text-white  text-nowrap text-8xl"
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                >
                  <h2 className="lg:text-4xl text-[6vw] font-bold text-wrap text-center lg:px-0 px-10">
                    {item?.heading}
                  </h2>
                </motion.div>
              </div>
            </div>
          ) : null
        )}
      </div>
      {HeroSect()}
      {ImmigrationServices()}
      {StudyAbroadForm()}
      {CountryItem()}
      {/* Left Section*/}
    </>
  );
}
