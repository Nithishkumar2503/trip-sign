import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaYoutube,
  FaInstagram,
  FaLock,
  FaPhone,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { countryItem, visaItem } from "./data&type/footerData";
import { MdFlight } from "react-icons/md";

const emailRedirectTo: string =
  "mailto:tripwithsign@gmail.com?subject=Guidance%20for%20Studying/Career%20Abroad&body=Dear%20Consultant%2C%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%2C%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20I%20would%20like%20to%20know%20more%20about%20available%20courses%2C%20universities%2C%20application%20requirements%2C%20and%20the%20overall%20process.%0D%0A%0D%0ACould%20you%20please%20guide%20me%20on%20how%20to%20get%20started%20and%20let%20me%20know%20what%20documents%20or%20details%20you%20need%20from%20me%3F%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Contact%20Number]";
const whatsappRedirectTo: string =
  "https://wa.me/919876543210?text=Hello%2C%20my%20name%20is%20[Your%20Name]%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20Could%20you%20please%20guide%20me%20about%20courses%2C%20universities%2C%20and%20the%20application%20process%3F";
const phoneRedirectTo: string = "tel:+916384044005";
const Footer = () => {

  return (
    <>
      <footer className="bg-[#0f0f11] hidden text-gray-300 pt-10 pb-6 relative">
        <div className="max-w-7xl mx-auto">
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
                <img
                  src="/trip-sign.png"
                  alt="Trip with Sign Logo"
                  className="md:w-12 w-12 block my-auto "
                />
                <h2 className="text-xl font-bold text-white mt-3">
                  Trip with Sign
                </h2>
                <p className="text-sm text-gray-400">Study Abroad Pvt Ltd</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                At Trip with Sign, we’re your dedicated partner in building a
                global future. We unlock opportunities, empower dreams, and
                support your success from application to arrival.
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
            © {new Date().getFullYear()} Trip with Sign Study Abroad.{" "}
            {/* <span className="text-white font-semibold">HUNGRYBYTE</span> */}
          </div>

          {/* Back to Top Button */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full fixed bottom-6 right-6 z-50 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to Top"
          >
            <MdFlight />
          </button>
        </div>
      </footer>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/trip-sign.png"
                  className="w-8 h-8 text-red-600"
                  alt=""
                />
                <span className="text-xl font-bold">Trip With Sign</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for visa and immigration services
                worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    Student Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    Work Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    Travel Visa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Countries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    United States
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition">
                    Australia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2 gap-1">
                  <FaMapMarkerAlt className="w-6 h-6" />
                  <span>
                    First floor, Vignesh park, Ram Nagar,Ghandipuram,Coimbatore
                    - 6410009
                  </span>
                </li>
                <li className="flex items-center space-x-2 gap-1">
                  <IoLogoWhatsapp className="w-5 h-5" />
                  <a href={whatsappRedirectTo}>Whatsapp</a>
                </li>
                <li className="flex items-center space-x-2 gap-1">
                  <FaEnvelope className="w-4 h-4" />
                  <a href={emailRedirectTo} target="_blank">
                    tripwithsign@gmail.com
                  </a>
                </li>

                <li className="flex items-center space-x-2 gap-1">
                  <FaPhone className="w-4 h-4" />
                  <a href={phoneRedirectTo}>+916384044005</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Back to Top Button */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full fixed bottom-6 right-6 z-50 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to Top"
          >
            <MdFlight />
          </button>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Trip With Sign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
