import {
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaPlane,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import CountryItem from "./CountryItem";
import { motion } from "framer-motion";


export default function Country() {
  
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};
  return (
    <>
      {CountryItem()}
      <div className="min-h-screen bg-gray-50">
      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="lg:w-[66vw] p-2 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-primary to-primary rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeUp}
                className="p-8 lg:p-16 text-white"
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  Excellence
                  <br />
                  in Visa & Immigration
                </h1>
                <a href="/contact">
                  <button className="mt-8 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white border border-white transition-all transform hover:scale-105 shadow-lg">
                    Apply for Visa
                  </button>
                </a>
              </motion.div>

              {/* Right Content - Travel Items */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[400px] hidden lg:block"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pink Circle Background */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute w-80 h-80 bg-pink-400 rounded-full -top-10 -left-10"
                    />
                    {/* Travel Items */}
                    <motion.div
                      whileHover={{ rotate: 0, scale: 1.05 }}
                      className="relative z-10 transform rotate-12 transition-transform duration-500"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-6 w-64">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                            <div className="text-sm text-gray-600">Globe</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-10 bg-gradient-to-br from-primary to-secondary rounded"></div>
                            <div className="text-sm text-gray-600">Passport</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white border-4 border-gray-300 rounded-full"></div>
                            <div className="text-sm text-gray-600">Flight</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="lg:w-[66vw] p-2 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Our Services
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Student Visa",
                icon: <FaGraduationCap className="w-12 h-12 text-primary" />,
                desc: "Complete assistance for student visa applications",
              },
              {
                title: "Work Visa",
                icon: <FaBriefcase className="w-12 h-12 text-primary" />,
                desc: "Professional guidance for work permits",
              },
              {
                title: "Travel Visa",
                icon: <FaPlane className="w-12 h-12 text-primary" />,
                desc: "Quick processing for travel visas",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="lg:w-[66vw] p-2 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaClock className="w-10 h-10 text-primary" />,
                title: "Fast Processing",
                desc: "Quick turnaround times",
              },
              {
                icon: <FaCheckCircle className="w-10 h-10 text-primary" />,
                title: "High Success Rate",
                desc: "98% approval rate",
              },
              {
                icon: <FaUsers className="w-10 h-10 text-primary" />,
                title: "Expert Team",
                desc: "Experienced consultants",
              },
              {
                icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
                title: "Secure Process",
                desc: "Safe and confidential",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="lg:w-[66vw] p-2 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Simple Application Process
          </motion.h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { icon: <FaFileAlt className="w-10 h-10" />, title: "Submit Documents", step: "01" },
              { icon: <FaUsers className="w-10 h-10" />, title: "Consultation", step: "02" },
              { icon: <FaCheckCircle className="w-10 h-10" />, title: "Application Review", step: "03" },
              { icon: <FaPlane className="w-10 h-10" />, title: "Get Your Visa", step: "04" },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-secondary text-white rounded-xl p-8 text-center hover:bg-primary transition-colors">
                  <div className="text-4xl font-bold mb-4 opacity-50">{process.step}</div>
                  <div className="flex justify-center mb-4">{process.icon}</div>
                  <h3 className="font-bold text-lg">{process.title}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
