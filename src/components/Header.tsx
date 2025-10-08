import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import {
  emailAddress,
  emailRedirectTo,
  phoneNoOne,
  phoneRedirectTo,
  whatsappRedirectTo,
} from "./data&type";

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
      <div className="lg:h-20 h-18 rounded-b-xl  z-40 w-full bg-white  fixed">
        <div className="pt-2 cursor-default hidden lg:block lg:flex lg:justify-end gap-6  lg:w-[66vw] mx-auto items-center content-center  px-2">
          {/* <div className="p-1 cursor-pointer flex gap-2 items-center  content-center">
            <TbViewfinder className="text-red-500" />
            <h1>Find us</h1>
          </div> */}
          <a href={phoneRedirectTo}>
            <div className="p-1 cursor-pointer flex gap-2 items-center content-center border px-2  rounded-xl border-gray-300">
              <FaPhone className="text-green-500" />
              <h1>{phoneNoOne}</h1>
            </div>
          </a>
          <a href={emailRedirectTo}>
            <div className="p-1 cursor-pointer flex gap-2 items-center content-center border px-2 rounded-xl border-gray-300">
              <MdEmail className="text-primary" />
              <h1>{emailAddress}</h1>
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
        <div className="lg:bg-white lg:h-full h-full items-center content-center">
          <div className="lg:h-full h-full  items-center content-center w-[90vw] lg:w-[66vw] mx-auto  px-2 lg:flex lg:justify-between ">
            <div className="flex justify-between items-center content-center gap-10">
              <a href="/">
                <div className="flex gap-1 items-center content-center h-full">
                  <img
                    className="md:w-12 w-12 block my-auto "
                    src="/trip-sign.png"
                    alt=""
                  />

                  <div className=" grid font-semibold hidden lg:block">
                    Trip with Sign
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
                <a
                  href="/"
                  className={`${
                    useLocation().pathname == "/"
                      ? "px-4  hover:scale-104 hover:bg-primary bg-primary text-white"
                      : ""
                  } cursor-pointer lg:block  p-2 rounded-lg px-4 hover:bg-gray-100 hidden`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`${
                    useLocation().pathname == "/about"
                      ? "px-4  hover:scale-104 hover:bg-primary bg-primary text-white"
                      : ""
                  } cursor-pointer lg:block  p-2 rounded-lg px-4 hover:bg-gray-100 hidden`}
                >
                  About us
                </a>
                <a
                  href="/country"
                  className={`${
                    useLocation().pathname == "/country"
                      ? "px-4  hover:scale-104 hover:bg-primary bg-primary text-white"
                      : ""
                  } cursor-pointer lg:block  p-2 rounded-lg px-4 hover:bg-gray-100 hidden`}
                >
                  Countries
                </a>
                <a
                  href="/contact"
                  className={`${
                    useLocation().pathname == "/contact"
                      ? "px-4  hover:scale-104 hover:bg-primary bg-primary text-white"
                      : ""
                  } cursor-pointer lg:block  p-2 rounded-lg px-4 hover:bg-gray-100 hidden`}
                >
                  Contact
                </a>
              </div>
            </div>
            <a href="/contact">
              <div className="border rounded-lg active:bg-primary p-2 active:text-white   px-4 border-primary text-primary lg:block hidden">
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
