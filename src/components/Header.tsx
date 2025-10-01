import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TbViewfinder } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";

const emailRedirectTo: string =
  "mailto:tripwithsign@gmail.com?subject=Guidance%20for%20Studying/Career%20Abroad&body=Dear%20Consultant%2C%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%2C%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20I%20would%20like%20to%20know%20more%20about%20available%20courses%2C%20universities%2C%20application%20requirements%2C%20and%20the%20overall%20process.%0D%0A%0D%0ACould%20you%20please%20guide%20me%20on%20how%20to%20get%20started%20and%20let%20me%20know%20what%20documents%20or%20details%20you%20need%20from%20me%3F%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Contact%20Number]";
const whatsappRedirectTo: string =
  "https://wa.me/919876543210?text=Hello%2C%20my%20name%20is%20[Your%20Name]%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20Could%20you%20please%20guide%20me%20about%20courses%2C%20universities%2C%20and%20the%20application%20process%3F";
const phoneRedirectTo: string = "tel:+916384044005";
function sideBarContent() {
  return (
    <>
      <div className="p-2 ">
        <div className="mb-4">
          <a href="/">
            <div className="border-b border-gray-300 p-2 py-3 hover:bg-gray-100 mb-1 cursor-pointer rounded-lg">
              Home
            </div>
          </a>

          <a href="/About">
            <div className="border-b border-gray-300 p-2 py-3 hover:bg-gray-100 mb-1 cursor-pointer rounded-lg">
              About us
            </div>
          </a>

          <a href="/Country">
            <div className="border-b border-gray-300 p-2 py-3 hover:bg-gray-100 mb-1 cursor-pointer rounded-lg">
              Countries
            </div>
          </a>

          <a href="/contact">
            <div className="border-b border-gray-300 p-2 py-3 hover:bg-gray-100 mb-1 cursor-pointer rounded-lg">
              Contact
            </div>
          </a>
        </div>
        <a
          href={phoneRedirectTo}
          className="p-1 cursor-pointer flex gap-2 items-center content-center px-2  rounded-xl border-gray-300"
        >
          <FaPhone className="text-green-500" />
          <h1>6384044005</h1>
        </a>
        <a
          href={emailRedirectTo}
          target="_blank"
          className="p-1 cursor-pointer flex gap-2 items-center content-center px-2 rounded-xl border-gray-300"
        >
          <MdEmail className="text-primary" />
          <h1>tripwithsign@gmail.com</h1>
        </a>
        <a
          href={whatsappRedirectTo}
          target="_blank"
          className="p-1 cursor-pointer flex gap-2 items-center content-center px-2 rounded-xl border-gray-300"
        >
          <FaSquareWhatsapp className="text-green-500" />
          <h1>WhatsApp</h1>
        </a>
        <div className="flex gap-4 justify-center py-2">
          <a
            href="https://www.instagram.com/trip_with_sign?igsh=cWtnbGlkbWxuMjI5"
            target="_blank"
            className="w-10 h-8 hover:text-pink-400 cursor-pointer"
          >
            <IoLogoInstagram className="w-full h-full" />
          </a>
          <a
            href="https://www.facebook.com/share/1CUckrMtQJ/"
            target="_blank"
            className="w-10 h-8 hover:text-primary cursor-pointer"
          >
            <CiFacebook className="w-full h-full" />
          </a>
        </div>
      </div>
    </>
  );
}

function Header() {
  const [isOpen, setOpen] = useState(false);

  function openSideBar() {
    setOpen(true);
  }
  function closeSideBar() {
    setOpen(false);
  }

  return (
    <>
      <div className="lg:hidden">
        <Sidebar
          child={sideBarContent()}
          onDispatch={closeSideBar}
          isOpen={isOpen}
        />
      </div>
      <div className="lg:h-20 h-18 rounded-b-xl z-40 w-full bg-gray-200 fixed">
        <div className="py-2 cursor-default hidden lg:block lg:flex lg:justify-end gap-6  lg:w-[65vw] mx-auto items-center content-center  px-2">
          <div className="p-1 cursor-pointer flex gap-2 items-center  content-center">
            <TbViewfinder className="text-red-500" />
            <h1>Find us</h1>
          </div>
          <a href={phoneRedirectTo}>
            <div className="p-1 cursor-pointer flex gap-2 items-center content-center border px-2  rounded-xl border-gray-300">
              <FaPhone className="text-green-500" />
              <h1>6384044005</h1>
            </div>
          </a>
          <a href={emailRedirectTo}>
            <div className="p-1 cursor-pointer flex gap-2 items-center content-center border px-2 rounded-xl border-gray-300">
              <MdEmail className="text-primary" />
              <h1>tripwithsign@gmail.com</h1>
            </div>
          </a>
          <a
            href={whatsappRedirectTo}
            target="_blank"
            className="p-1 cursor-pointer flex gap-2 items-center content-center border px-2 rounded-xl border-gray-300"
          >
            <FaSquareWhatsapp className="text-green-500" />
            <h1>WhatsApp</h1>
          </a>
        </div>
        <div className="lg:bg-white lg:h-full h-full items-center content-center border-b-6 border-gray-200">
          <div className="lg:h-full h-full  items-center content-center w-[90vw] lg:w-[65vw] mx-auto  px-2 lg:flex lg:justify-between ">
            <div className="flex justify-between items-center content-center gap-2">
              <a href="/">
                <div className="flex gap-1 items-center content-center h-full">
                  <img
                    className="md:w-12 w-12 block my-auto "
                    src="/src/assets/trip-sign.png"
                    alt=""
                  />

                  <div className=" grid  text-[9px] font-semibold text-primary">
                    <span>Study & career</span>
                    <span>abroad</span>
                    <span>Consultant</span>
                  </div>
                </div>
              </a>

              <div className="flex gap-4 items-center content-center">
                <a
                  href={whatsappRedirectTo}
                  target="_blank"
                  className="lg:hidden cursor-pointer p-2 px-4 rounded-xl bg-green-600 text-white flex items-center content-center gap-2 "
                >
                  <FaWhatsapp className="" />
                  <h1>Whatsapp</h1>
                </a>
                <RxHamburgerMenu
                  className="lg:hidden text-2xl cursor-pointer"
                  onClick={openSideBar}
                />
                <a href="/" className="px-2 cursor-pointer lg:block hidden">
                  Home
                </a>
                <a
                  href="/about"
                  className="px-2 cursor-pointer lg:block hidden"
                >
                  About us
                </a>
                <a
                  href="/country"
                  className="px-2 cursor-pointer lg:block hidden"
                >
                  Countries
                </a>
                <a
                  href="/contact"
                  className="px-2 cursor-pointer lg:block hidden"
                >
                  Contact
                </a>
              </div>
            </div>
            <a href="/contact">
              <div className="border rounded p-1 px-2 border-primary text-primary lg:block hidden">
                Book Appoinment
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
