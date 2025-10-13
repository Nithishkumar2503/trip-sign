import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import type { IconType } from "react-icons";
//Address location
export const latLong = "11.0168,76.9558";
export const locationAddress =
  "First floor, Vignesh park, Ram Nagar,Ghandipuram,Coimbatore - 6410009";
//Redirect to items
export const emailRedirectTo: string =
  "mailto:tripwithsign@gmail.com?subject=Guidance%20for%20Studying/Career%20Abroad&body=Dear%20Consultant%2C%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%2C%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20I%20would%20like%20to%20know%20more%20about%20available%20courses%2C%20universities%2C%20application%20requirements%2C%20and%20the%20overall%20process.%0D%0A%0D%0ACould%20you%20please%20guide%20me%20on%20how%20to%20get%20started%20and%20let%20me%20know%20what%20documents%20or%20details%20you%20need%20from%20me%3F%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Contact%20Number]";
export const whatsappRedirectTo: string =
  "https://wa.me/919876543210?text=Hello%2C%20my%20name%20is%20[Your%20Name]%20and%20I%20am%20interested%20in%20studying/Career%20abroad.%20Could%20you%20please%20guide%20me%20about%20courses%2C%20universities%2C%20and%20the%20application%20process%3F";
export const phoneRedirectToOne: string = "tel:+916384044005";
export const phoneRedirectToTwo: string = "tel:+916384044005";
export const phoneRedirectToThree: string = "tel:+916384044005";
export const instaLink: string = "https://www.instagram.com/trip_with_sign?igsh=cWtnbGlkbWxuMjI5";
export const facebooklink: string = "tel:+916384044005";

export const lat_long = `https://www.google.com/maps?q=${latLong}`;

//Contact Details
export const whatsaapno: string = "6384044005";
export const emailAddress: string = "tripwithsign@gmail.com";
export const phoneNoOne: string = "6374080040";
export const phoneNoTwo: string = "6384044005";
export const phoneNoThree: string = "04224690439";
export const phoneCode:string='+91'




export interface ContactItem {
  icon: IconType; // store the component, not JSX
  title: string;
  info: string;
  redirect:string
}

export const contactDetailsData:ContactItem[] = [
  {
    icon:FaEnvelope,
    title: "Email",
    info: emailAddress,
    redirect:emailRedirectTo
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    info: phoneCode+" "+phoneNoOne,
    redirect:phoneRedirectToOne

  },
   {
    icon: FaPhoneAlt,
    title: "Phone",
    info: phoneCode+" "+phoneNoTwo,
    redirect:phoneRedirectToTwo

  }, {
    icon: FaPhoneAlt,
    title: "Phone",
    info: phoneCode+" "+phoneNoThree,
    redirect:phoneRedirectToThree

  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    info: whatsaapno,
    redirect:whatsaapno

  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    info: locationAddress,
    redirect:lat_long

  },
];



  // ✅ Regular Expressions
  export const regex = {
    name: /^[A-Za-z\s]{3,30}$/, // only letters and spaces, 3-30 chars
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email pattern
    phone: /^[6-9]\d{9}$/, // 10-digit Indian mobile numbers (starting 6–9)
    message: /^.{10,500}$/, // at least 10 chars
  };

export const validateField = (name: string, value: string) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (!regex.name.test(value)) return "Enter a valid name (3–30 letters)";
      break;
    case "email":
      if (!value.trim()) return "Email is required";
      if (!regex.email.test(value)) return "Enter a valid email address";
      break;
    case "phone":
      if (!value.trim()) return "Phone number is required";
      if (!regex.phone.test(value)) return "Enter a valid 10-digit phone number";
      break;
    case "message":
      if (!value.trim()) return "Message is required";
      if (!regex.message.test(value)) return "Message must be at least 10 characters";
      break;
    default:
      break;
  }
  return "";
};
