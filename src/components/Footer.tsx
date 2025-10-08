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
import { MdFlight } from "react-icons/md";
import CountryItem from "./CountryItem";
import { emailRedirectTo, lat_long, phoneRedirectTo, whatsappRedirectTo } from "./data&type";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-12 px-4 ">
        <div className="lg:w-[66vw] p-2 mx-auto">
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
              {CountryItem(true)}
              
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2 gap-1 hover:text-primary">
                  <a target="_blank" className="flex items-center space-x-2 gap-1 hover:text-primary" href={lat_long}>

                  <FaMapMarkerAlt className="w-6 h-6" />
                  <span>
                    First floor, Vignesh park, Ram Nagar,Ghandipuram,Coimbatore
                    - 6410009
                  </span>
                  </a>

                </li>
                <li className="flex items-center space-x-2 gap-1 hover:text-primary">
                  <IoLogoWhatsapp className="w-5 h-5" />
                  <a href={whatsappRedirectTo}>Whatsapp</a>
                </li>
                <li className="flex items-center space-x-2 gap-1 hover:text-primary">
                  <FaEnvelope className="w-4 h-4" />
                  <a href={emailRedirectTo} target="_blank">
                    tripwithsign@gmail.com
                  </a>
                </li>

                <li className="flex items-center space-x-2 gap-1 hover:text-primary">
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
