import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactDetailsData } from "./data&type";

const ContactForm = () => {
  // Reusable animation variant for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-[80vh]  flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="max-w-5xl w-full">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm tracking-widest uppercase text-gray-500"
          >
            Contact With Us
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-1 bg-primary mx-auto my-2 rounded-full origin-left"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Feel Free to Get in Touch with Us
          </motion.h2>
        </div>

        {/* --- Animated Contact Info Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 text-center">
          {contactDetailsData.map((card, i) => {
            const Icon = card.icon; // get the component
            return (
              <motion.a
                target="_blank"
                href={card.redirect}
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col cursor-pointer bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="items-center content-center">
                  <Icon className="text-primary text-3xl mb-3 mx-auto" />{" "}
                  {/* Render here */}
                  <h3 className="font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.info}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* --- Contact Form --- */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <textarea
            placeholder="Write a Message"
            rows="5"
            className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          ></textarea>

          <div className="text-center mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary hover:bg-primary text-white font-medium py-3 px-10 rounded-md transition duration-300 shadow-md"
              >
              Send a Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
