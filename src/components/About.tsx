import { FaUsers } from "react-icons/fa"; // For the icon
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import { faqData, officeData, stats, testimonials,  } from "./data&type";
import { motion } from "framer-motion";

const AboutScreen = () => {
  return (
    <>
      <motion.div
        className="lg:min-h-[60vh] h-[80vh] flex flex-col justify-center items-center bg-gray-50 p-8 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="max-w-2xl text-center text-gray-600 lg:text-lg text-md leading-relaxed">
          At <span className="font-bold">Trip with Sign</span>, we help{" "}
          <span className="font-bold">
            students and professionals achieve their dream of studying and
            working abroad.
          </span>{" "}
          Our team guides you step by step – from{" "}
          <span className="font-bold">
            choosing the right course or job, applying to universities,
            preparing documents,
          </span>{" "}
          to{" "}
          <span className="font-bold">
            finding career opportunities overseas.
          </span>
          Studying and working abroad is more than travel – it’s about learning,
          growing, and building a better future. With{" "}
          <span className="font-bold">Trip with Sign</span>, the journey becomes
          easy, clear, and stress-free.
        </p>
      </motion.div>
    </>
  );
};

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
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:flex items-center content-center">
      <div className="w-full lg:w-1/2  flex flex-col justify-center px-10 py-20">
        <img
          src="/faq.jpg"
          className="w-full h-full rounded-2xl"
          alt=""
        />
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

const OfficeLocations = () => {

  const office:any = officeData["Coimbatore"];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Checkout Our Locations
          </p>
          <div className="w-10 h-1 bg-red-500 mx-auto my-2 rounded-full"></div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Worldwide Visa Consultancy
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            There are numerous versions of these passages, but most have been
            altered in some way, often including random or irrelevant words that
            affect their clarity.
          </p>
        </div>

        {/* Office Content */}
        
        <div className="bg-white rounded-xl   hover:shadow-2xl shadow-xl p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start ">
          {/* Image */}
          <div className="md:col-span-1 my-auto">
            <img
              src={office?.image}
              alt={`Coimbatore office`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Address & Contact */}
          <div className="md:col-span-1 space-y-4 my-auto">
            <h3 className="text-xl font-semibold text-gray-900">{'Coimbatore'}</h3>
            <p className="text-gray-600 flex items-start">
              <span className="text-red-500 mr-2">📍</span>
              {office?.address}
            </p>
            <p className="text-gray-600 flex items-center">
              <span className="text-red-500 mr-2">✉️</span> {office?.email}
            </p>
            {office?.phones.map((phone:any, idx:any) => (
              <p className="text-gray-600 flex items-center" key={idx}>
                <span className="text-red-500 mr-2">📞</span> {phone}
              </p>
            ))}
          </div>

          {/* Working Hours */}
          <div className="md:col-span-1 border-l md:pl-6">{Open24x7()}</div>
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
          Our consultants are available around the clock to assist you with your
          visa, immigration, and documentation needs. Contact us anytime, from
          anywhere.
        </p>

        <div className="items-center space-x-4 ">
          <span className="text-xl text-red-600 font-semibold py-2">
            📞 +91 6384044005
          </span>
          <a
            href="/#"
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
      {AboutScreen()}
      <section className="bg-white py-16 px-6 lg:px-16 relative h-fit  items-center content-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
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

            {/* <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Discover More
            </button> */}
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col gap-4">
            <img
              src="/hero1.jpg"
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
