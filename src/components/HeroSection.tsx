import { heroContent,  studyAbroadFormData, type HeroContentProps } from "./data&type";

// StudyAbroadForm.jsx
const StudyAbroadForm = () => {
  return (
    <div className="rounded-xl bg-purple-700  text-white px-6 py-12 lg:flex lg:items-center lg:justify-between lg:px-20">
      {/* Left Section */}
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl font-bold">
          Your Next Steps to Studying Abroad
        </h2>
        <p className="text-lg">
          Unlock a world of global opportunities, personal growth, and career
          success with a study experience beyond borders. The investment you
          make today pays off tomorrow with job prospects and extended visa
          options.
        </p>

        <ul className="space-y-6">
          {studyAbroadFormData.map((step, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="text-2xl bg-white text-purple-700 p-2 rounded-md">
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
      <div className="bg-white text-gray-800 mt-12 lg:mt-0 rounded-xl p-8 w-full max-w-md shadow-lg mx-auto md:mx-0">
        <h3 className="text-lg font-semibold text-center mb-4">
          Book Your{" "}
          <span className="text-purple-600 font-bold">FREE Consultation</span>{" "}
          Call with Our Certified Counsellors
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <div className="flex space-x-2">
            <span className="px-4 py-2 bg-gray-100 border rounded">+91</span>
            <input
              type="tel"
              placeholder="Mobile Number *"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <input
            type="email"
            placeholder="Email ID *"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue=""
          >
            <option value="" disabled>
              Destination *
            </option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            {/* Add more as needed */}
          </select>

          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              className="mt-1 accent-purple-600"
              defaultChecked
            />
            <p>
              I agree to AECC’s{" "}
              <a href="#" className="text-purple-600 underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-600 underline">
                Terms and Conditions
              </a>{" "}
              *
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-2 rounded font-semibold transition"
          >
            Book a FREE Consultation →
          </button>
        </form>
      </div>
    </div>
  );
};

const HeroSect = () => {
  return (
    <section className="bg-white pt-16 pb-12 px-6 lg:px-12 lg:px-20 h-[100vh] items-center content-center">
      {/* Hero content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Start Your Study/Career Abroad <br /> Journey with{" "}
            <span className="text-purple-600">Trip With Sign</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Know about Destinations, Courses, Scholarships, Study/Career Visa
            and Deadlines for 2026 — all in our International Education Fair
          </p>

          {/* Buttons */}
          {/* <button className="bg-purple-900 text-white px-6 py-3 h-fit  rounded-full font-medium hover:bg-purple-800 transition">
              Register for FREE
            </button> */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center content-center lg:justify-start">
            <div className="bg-purple-600 text-white p-4 rounded-xl shadow-md text-left">
              <p className="mb-2 font-medium">
                Book Your Free Study/Career Abroad Consultation
              </p>
              <button className="bg-cyan-300 text-black font-medium px-6 py-2 rounded-full hover:bg-cyan-400 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/hero2.png"
            alt="Student smiling"
            className="w-[320px] lg:w-[400px] rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 bg-[#f4f3fc] py-10 rounded-lg">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-700">1,100+</h3>
            <p className="text-sm text-gray-600 mt-1">Institution Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">760,000+</h3>
            <p className="text-sm text-gray-600 mt-1">Students Assisted</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">200,000+</h3>
            <p className="text-sm text-gray-600 mt-1">
              Institution Courses Offered
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">10+</h3>
            <p className="text-sm text-gray-600 mt-1">Destinations Served</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">
          (As of Mar’25)*
        </p>
      </div>
    </section>
  );
};

export default function HeroSection() {
  return (
    <>
      <div className="lg:px-[20vw] px-[10vw] w-[100vw]  items-center content-center mt-20">
        {heroContent.map((item: HeroContentProps) => (
          <div
            key={item.id}
            className={
              item.id % 2 == 1
                ? "lg:flex items-center content-center gap-10 pb-2 "
                : "lg:flex flex-row-reverse items-center content-center gap-10 pb-2"
            }
          >
            <div className="w-full items-center content-center">
              <img src={item.img} alt="" className="select-none " />
            </div>
            <div className="w-full items-center content-center">
              <h1 className="text-primary lg:text-4xl text-2xl py-2">
                {item?.heading}
              </h1>
              <h2 className="text-secondary lg:text-xl text-sm py-2">
                {item?.subHeading}
              </h2>
            </div>
          </div>
        ))}
        {HeroSect()}
        {StudyAbroadForm()}
      </div>
      {/* Left Section*/}
    </>
  );
}
