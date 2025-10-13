import { motion, type Variants } from "framer-motion";
import { contactDetailsData } from "./data&type";
import { useState } from "react";

const ContactForm = () => {
  // Reusable animation variant for cards

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  interface FormProps {
    name?: string;
    email?: string;
    phone?: string;
    fromLocation?: string;
    destiny?: string;
    message?: string;
  }

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState<Partial<FormProps>>({});
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});

    // ✅ If validation passes, send API request
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
      } else {
        alert("Email failed to send.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Try again.");
    }
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
            className="text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Feel Free to Get in Touch with Us
          </motion.h2>
        </div>

        {/* --- Animated Contact Info Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12 text-center">
          {contactDetailsData.map((card, i) => {
            const Icon = card.icon; // get the component
            return (
              <motion.a
                key={i}
                target="_blank"
                href={card.redirect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.005,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col  bg-gray-50 cursor-pointer rounded-xl p-6 shadow-sm transition-transform"
              >
                <div className="items-center content-center">
                  <Icon className="text-primary text-3xl mb-3 mx-auto" />{" "}
                  {/* Render here */}
                  <h3 className="font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm ">{card.info}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* --- Contact Form --- */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Full Name"
                className={`w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-secondary"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                placeholder="Email Address"
                className={`w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-secondary"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <input
                onChange={handleChange}
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number"
                className={`w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-secondary"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <input
              type="text"
              placeholder="Subject (optional)"
              className={`w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${
                errors.phone ? "focus:ring-red-500" : "focus:ring-secondary"
              }`}
            />
          </div>

          <div>
            <textarea
              onChange={handleChange}
              placeholder="Write a Message"
              value={formData.message}
              name="message"
              className={`w-full min-h-32 px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-secondary"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

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
