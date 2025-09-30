import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaYoutube,
  FaInstagram,
  FaLock,
} from "react-icons/fa";
import { countryItem, visaItem } from "./data&type/footerData";
import { MdFlight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f11] text-gray-300 pt-10 pb-6 relative">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 text-sm border-b border-gray-700 pb-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/30?img=${i + 1}`}
                alt="avatar"
                className="w-7 h-7 rounded-full border-2 border-white shadow-md"
              />
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Approved Traveler Visa Applications.{" "}
            <a href="#" className="text-white hover:underline font-medium">
              Get Your Visa
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <FaEnvelope className="text-red-500" />
          <span className="text-gray-400">Have Questions?</span>
          <span className="font-semibold">+91 95005 16250</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20 py-12">
        {/* Company Info */}
        <div>
          <div className="mb-5">
            <img src="/logo.png" alt="Trip with Sign Logo" className="h-7" />
            <h2 className="text-xl font-bold text-white mt-3">
              Trip with Sign
            </h2>
            <p className="text-sm text-gray-400">Study Abroad Pvt Ltd</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            At Trip with Sign, we’re your dedicated partner in building a global
            future. We unlock opportunities, empower dreams, and support your
            success from application to arrival.
          </p>
          <div className="flex space-x-3 mt-5">
            <a href="#" className="group">
              <div className="p-2 rounded-full border border-red-500 group-hover:bg-red-600 transition">
                <FaLock className="text-white text-lg" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-2 rounded-full border border-red-500 group-hover:bg-red-600 transition">
                <FaYoutube className="text-white text-lg" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="p-2 rounded-full border border-red-500 group-hover:bg-red-600 transition">
                <FaInstagram className="text-white text-lg" />
              </div>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {countryItem.map((country, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition"
                >
                  {country}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visa */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Visa</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {visaItem.map((visa, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition"
                >
                  {visa}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-red-500 mt-1" />
              <span>tripwithsign@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
                Trip With Sign Study Abroad,First floor,Vignesh Park,Ram
                Nagar,Gandhipuram,Coimbatore-641009
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>TRIP WITH SIGN STUDY ABROAD COIMBATORE – 641018</span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="text-red-500 mt-1" />
              <span>
                Mon – Sat: 8:00 am – 6:00 pm <br />
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4 px-4">
        © {new Date().getFullYear()} Trip with Sign Study Abroad. Designed by{" "}
        <span className="text-white font-semibold">HUNGRYBYTE</span>
      </div>

      {/* Back to Top Button */}
      <button
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full fixed bottom-6 right-6 z-50 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to Top"
      >
        <MdFlight />
      </button>
    </footer>
  );
};

export default Footer;
