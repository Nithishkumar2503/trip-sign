import { FaUsers } from "react-icons/fa"; // For the icon
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  faqData,
  lat_long,
  officeData,
  phoneCode,
  phoneNoOne,
  phoneRedirectToOne,
  testimonials,
} from "./data&type";
import { viewportOnce } from "./utils";

const AboutScreen = () => {
  return (
    <>
      <motion.div
        className="lg:min-h-[60vh] h-[80vh] flex flex-col justify-center items-center bg-gray-50 p-8 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="max-w-2xl text-center text-gray-600 lg:text-lg text-md leading-relaxed">
          At <span className="text-primary font-semibold">Trip with Sign</span>,
          we help{" "}
          <span className="">
            students and professionals achieve their dream of studying and
            working abroad.
          </span>{" "}
          Our team guides you step by step – from{" "}
          <span className="">
            choosing the right course or job, applying to universities,
            preparing documents,
          </span>{" "}
          to <span className="">finding career opportunities overseas.</span>
          Studying and working abroad is more than travel – it’s about learning,
          growing, and building a better future. With{" "}
          <span className="text-primary font-semibold">Trip with Sign</span>,
          the journey becomes easy, clear, and stress-free.
        </p>
      </motion.div>
    </>
  );
};

function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-50 py-28 px-6 lg:px-20 w-full items-center content-center">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          Our Feedbacks
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          What They’re Talking About Trip with sign
        </h2>
      </div>

      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:w-[66vw] px-4 p-2 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 relative"
            variants={cardVariants}
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Variants for parent container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  // Variants for each FAQ item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      className="items-center content-center lg:w-[66vw] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-4 p-2 lg:flex space-y-2 mx-auto py-12 gap-8">
        <motion.div
          className="w-full lg:flex lg:flex-col justify-center"
          variants={itemVariants}
        >
          <img src="/faq.jpg" className="w-full h-full rounded-2xl" alt="" />
        </motion.div>

        <motion.div
          className="w-full flex flex-col justify-center"
          variants={itemVariants}
        >
          <p className="text-sm uppercase text-gray-500 tracking-wider">
            Common FAQs
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-10">
            Frequently Asked Questions?
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                variants={itemVariants}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">{item.heading}</p>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-600 text-xl"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-sm py-2 overflow-hidden"
                    >
                      {item.subHeading}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const OfficeLocations = () => {
  const office: any = officeData["Coimbatore"];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-8 lg:py-28 overflow-hidden">
      <div className="lg:w-[66vw] mx-auto lg:px-4 px-2">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[3px] text-red-600 font-medium">
            Checkout Our Locations
          </p>
          <div className="w-14 h-[3px] bg-red-500 mx-auto my-3 rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Worldwide Visa Consultancy
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            Discover our global presence and connect with our professional
            offices near you. We're here to guide your journey every step of the
            way.
          </p>
        </div>

        {/* Office Content */}
        <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
          {/* Image */}
          <div className="lg:col-span-1 relative group overflow-hidden">
            <img
              src={office?.image}
              alt="Coimbatore Office"
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
          </div>

          {/* Address & Contact */}
          <div className="lg:col-span-1 p-8 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coimbatore Office
            </h3>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-red-500 mr-2 text-lg">📍</span>
                {office?.address}
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2 text-lg">✉️</span>
                {office?.email}
              </p>
              {office?.phones.map((phone: any, idx: number) => (
                <p key={idx} className="flex items-center">
                  <span className="text-red-500 mr-2 text-lg">📞</span>
                  {phone}
                </p>
              ))}
            </div>

            <a
              target="_blank"
              href={lat_long}
              className="mt-6 self-start px-6 py-2.5 bg-secondary hover:bg-primary text-white text-sm font-semibold rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            >
              Get Directions
            </a>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 p-8 flex flex-col justify-center">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Working Hours
              </h4>
              <div className="text-gray-600">{Open24x7()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Open24x7 = () => {
  return (
    <section className="w-full">
      <div className="mx-auto text-white">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Always Available
        </p>

        <div className="w-10 h-1 bg-red-500 mx-auto my-3 rounded-full"></div>

        <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
          We’re Open 24/7 at <span className="text-primary">Online</span>
        </h2>

        <p className="text-gray-600 text-wrap mb-8 h-auto txt">
          Our consultants are available around the clock to assist you with your
          visa, immigration, and documentation needs. Contact us anytime, from
          anywhere.
        </p>

        <div className="items-center space-x-4 content-center ">
          <a
            href={phoneRedirectToOne}
            className="text-xl text-red-600 cursor-pointer font-semibold py-2"
          >
            📞 {phoneCode + " " + phoneNoOne}
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <>
      {AboutScreen()}
      <section className="bg-white py-16 lg:px-16 relative h-fit items-center content-center">
        <div className="lg:w-[66vw] px-4 p-2 mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: viewportOnce }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 uppercase mb-2">
              Get to know us
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Unlock Global Learning and Career Opportunities
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
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: viewportOnce }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/hero1.jpg"
              alt="Team"
              className="w-full rounded-lg shadow-lg object-cover"
            />

            <motion.div
              className="absolute lg:top-4 lg:bottom-0 bottom-1 h-fit lg:right-4 right-1 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-3xl font-bold text-red-500">10</span>
              <span className="text-gray-500 text-sm">Years of Experience</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Decorative plane icon */}
      {Testimonials()}
      {FAQ()}
      {/* {StatsSection()}   */}
      {OfficeLocations()}
    </>
  );
};

export default AboutUs;
