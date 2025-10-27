import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { heroContent, studyAbroadFormData } from "./data&type";
import CountryItem from "./CountryItem";
import StatsSection from "./StatsSection";
import HighlightCarousel from "./HighlightCarousel";
import { viewportOnce, useViewport } from "./utils";
const { isMobile } = useViewport();
const FreeFeelCard = () => {
  return (
    <div className="relative mt-14 lg:mt-0 mx-auto  w-fit  items-center content-center ">
      <div className="absolute lg:w-92 z-20 w-80 top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 lg:h-92 h-80   bg-pink-400 rounded-full opacity-30 animate-pulse"></div>
      <motion.div className="lg:mx-auto w-fit relative lg:sticky top-1/2 lg:top-0 lg:left-1/2  mx-auto lg:rotate-12 z-30 transition-transform  hover:rotate-0 duration-500 lg:w-fit h-fit lg:mt-4   items-center content-center bg-white  rounded-3xl shadow-2xl p-8 text-center text-white ">
        <h2 className=" text-xl  mb-4 drop-shadow-lg text-primary">
          Feel Free to Ask
        </h2>
        <p className="lg:text-lg text-sm mb-6 drop-shadow-md text-secondary lg:w-[15rem] w-[10rem]">
          Have any questions or need guidance? We're here to help you out
          anytime.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="border border-primary z-50 lg:z-0 text-primary lg:text-lg text-sm px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Ask Now
        </motion.a>
      </motion.div>
    </div>
  );
};

// StudyAbroadForm.jsx
const StudyAbroadForm = () => {
  return (
    <div className="bg-primary text-white px-2 lg:py-26 py-12 lg:items-center lg:justify-center gap-40 lg:px-20">
      <motion.div
        className="lg:w-[66vw] gap-8 lg:flex mx-auto lg:p-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: viewportOnce }}
      >
        {/* Left Section */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: -80 } : { opacity: 0, x: -80 }}
          whileInView={isMobile ? { opacity: 1, y: 0 }:{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: viewportOnce }}
        >
          <h2 className="lg:text-3xl text-xl font-bold">
            Your Next Steps to Studying Abroad
          </h2>
          <p className="lg:text-lg text-sm mb-2">
            Unlock a world of global opportunities, personal growth, and career
            success with a study experience beyond borders. The investment you
            make today pays off tomorrow with job prospects and extended visa
            options.
          </p>

          <ul className="space-y-6 lg:pt-0 pt-2">
            {studyAbroadFormData.map((step, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-4"
                initial={isMobile ? { opacity: 0, x: -40 }:{ opacity: 0, x: -40 }}
                whileInView={isMobile ? { opacity: 1, x: 0 }:{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: viewportOnce }}
              >
                <div className="lg:text-2xl text-md bg-white text-purple-700 p-2 rounded-md">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{step.title}</h4>
                  <p className="text-sm text-red-200">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 80 }:{ opacity: 0, x: 80 }}
          whileInView={isMobile ? { opacity: 1, y: 0 }:{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: viewportOnce }}
        >
          {FreeFeelCard()}
        </motion.div>
      </motion.div>
    </div>
  );
};

const HeroSect = () => {
  return (
    <section className="bg-white py-8 lg:px-12 h-fit items-center content-center">
      {/* Hero content */}
      <div className="lg:w-[66vw] p-2 mx-auto lg:flex justify-between items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="text-center px-2 lg:text-left max-w-xl text-wrap"
          initial={isMobile ? { opacity: 0, y: -80 }:{ opacity: 0, x: -80 }}
          whileInView={isMobile ? { opacity: 1, y: 0 }:{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: viewportOnce }}
        >
          <div className="text-center lg:text-left max-w-xl">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-600 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: viewportOnce }}
            >
              Start Your Study/Career Abroad <br /> Journey with{" "}
              <span className="text-primary">Trip With Sign</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-700 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: viewportOnce }}
            >
              Your Trusted Partner for Overseas Education, Career Guidance, and
              Global Opportunities
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center content-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: viewportOnce }}
          >
            <a
              href="/contact"
              className="border cursor-pointer border-primary text-primary mx-auto font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
            >
              Contact us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={isMobile ? { opacity: 0, y: 80 }:{ opacity: 0, x: 80 }}
          whileInView={isMobile ? { opacity: 1, y: 0 }:{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: viewportOnce }}
        >
          <img
            src="/abroad-career.png"
            alt="Student smiling"
            className="lg:h-[600px] rounded-xl object-cover"
          />
        </motion.div>
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
      {/* Animated decorative background */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-64 bg-blue-50 rounded-b-full -z-10"
      />

      <div className="lg:w-[66vw] py-2 mx-auto lg:px-4 w-full items-center content-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl lg:text-4xl font-bold text-center mb-12"
        >
          Citizenship & Immigration Services
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewportOnce }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-wrap lg:justify-between justify-center gap-8"
        >
          {immigrationContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: viewportOnce, amount: 0.3 }} // animate only first time, 30% visible
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: idx * 0.05, // stagger cards
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-300 flex items-start gap-4 w-[27rem]"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                {item.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                  {item.heading}
                </h3>
                <p className="text-gray-600">{item.subheading}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  const [count, setCount] = useState(1);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => (prev === heroContent.length ? 1 : prev + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [count]);

  // Manual navigation
  const nextSlide = () => {
    setCount(count === heroContent.length ? 1 : count + 1);
  };

  const prevSlide = () => {
    setCount(count === 1 ? heroContent.length : count - 1);
  };

  return (
    <div>
      <div className="relative w-full lg:h-[70vh] h-[60vh] overflow-hidden bg-black">
        {/* Static background for smooth fade transition */}
        <img
          src={heroContent[count - 1]?.img}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-700"
        />

        {/* Animated slide transition */}
        <AnimatePresence mode="wait">
          {heroContent.map((item) =>
            count === item.id ? (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex justify-center items-center"
                animate={isMobile ? { opacity: 1, y: 0 }:{ opacity: 1, x: 0 }}
                exit={isMobile ?{ opacity: 0, y: -80 }:{ opacity: 0, x: -80 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Image layer */}
                <motion.img
                  src={item.img}
                  alt={item.heading}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-20 text-center text-white px-8"
                >
                  <h2 className="lg:text-6xl text-[8vw] font-bold mb-4 drop-shadow-lg">
                    {item.heading}
                  </h2>
                  {item.subHeading && (
                    <p className="lg:text-lg text-sm text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                      {item.subHeading}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30"
        >
          &#10094;
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30"
        >
          &#10095;
        </motion.button>
      </div>

      {/* Other sections below */}
      {HeroSect()}
      {ImmigrationServices()}
      {StudyAbroadForm()}
      {CountryItem()}
      {HighlightCarousel()}
    </div>
  );
}
