import { useState } from "react";
import { countries, type CountriesProp } from "./data&type";
import { AnimatePresence, motion } from "framer-motion";
function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-500 mb-1">{title}</h4>
          <p className="text-gray-900 font-semibold">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

const CountryItem = (textOnly?: boolean) => {
  const [selectedCountry, setSelectedCountry] =
    useState<CountriesProp | null>();
  const [activeTab, setActiveTab] = useState("study");

  return (
    <div
      className={`${
        textOnly
          ? ""
          : "h-auto  bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 px-4"
      } `}
    >
      <div className={`${textOnly ? "" : "lg:w-[66vw] py-8 p-2 mx-auto 0"}`}>
        {textOnly ? (
          <ul className="space-y-2 text-gray-400">
            {countries.map((country, index) => (
              <li
                className="hover:text-red-600 transition"
                onClick={() => setSelectedCountry(country)}
                key={index}
              >
                {country?.name}
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={textOnly ? "hidden" : "text-center"}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Our Countries List
              </h1>
              <p className="text-gray-600 text-lg">World-Wide Services</p>
            </motion.div>
            {!selectedCountry && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {countries.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedCountry(country)}
                    className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow"
                  >
                    <div className="text-6xl mb-4 text-center">
                      {country.flag}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                      {country.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div className="bg-white  rounded-3xl shadow-2xl  overflow-hidden">
              <div
                onClick={() => setSelectedCountry(null)}
                className="fixed inset-0 bg-black/80 z-40 "
              ></div>
              <div
                className={`fixed ${
                  textOnly ? "" : ""
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-fit  w-[60vw] rounded-lg  bg-white shadow-lg z-50 transform transition-transform duration-300 `}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white relative">
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="lg:text-7xl text-5xl">
                      {selectedCountry.flag}
                    </div>
                    <div>
                      <h2 className="lg:text-4xl text-2xl font-bold mb-2">
                        {selectedCountry.name}
                      </h2>
                      <p className="text-blue-100 lg:text-lg text-md">
                        {selectedCountry.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("study")}
                    className={` flex-1 py-4 px-6 font-semibold transition-colors relative ${
                      activeTab === "study"
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    🎓 Study Opportunities
                    {activeTab === "study" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("job")}
                    className={`flex-1 py-4 px-6 font-semibold transition-colors relative ${
                      activeTab === "job"
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    💼 Job Opportunities
                    {activeTab === "job" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                      />
                    )}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "study" && (
                    <motion.div
                      key="study"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-8"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <InfoCard
                          icon="🏛️"
                          title="Universities"
                          value={`${selectedCountry.studyOpportunities.universities}+ institutions`}
                        />
                        <InfoCard
                          icon="⭐"
                          title="Top Universities"
                          value={selectedCountry.studyOpportunities.topUniversities.join(
                            ", "
                          )}
                        />
                        <InfoCard
                          icon="💰"
                          title="Average Tuition"
                          value={selectedCountry.studyOpportunities.avgTuition}
                        />
                        <InfoCard
                          icon="🎯"
                          title="Scholarships"
                          value={
                            selectedCountry.studyOpportunities.scholarships
                          }
                        />
                        <InfoCard
                          icon="🌐"
                          title="Language"
                          value={selectedCountry.studyOpportunities.language}
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "job" && (
                    <motion.div
                      key="job"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-8"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <InfoCard
                          icon="🏢"
                          title="Key Industries"
                          value={selectedCountry.jobOpportunities.industries.join(
                            ", "
                          )}
                        />
                        <InfoCard
                          icon="💵"
                          title="Average Salary"
                          value={selectedCountry.jobOpportunities.avgSalary}
                        />
                        <InfoCard
                          icon="📋"
                          title="Work Permit"
                          value={selectedCountry.jobOpportunities.workPermit}
                        />
                        <InfoCard
                          icon="📈"
                          title="Job Growth"
                          value={selectedCountry.jobOpportunities.jobGrowth}
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6"
                      >
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl">✨</div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Career Prospects
                              </h4>
                              <p className="text-gray-700">
                                Excellent opportunities for international
                                graduates with growing demand in multiple
                                sectors. Most programs offer post-study work
                                permits to gain valuable experience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-8 bg-gray-50 border-t border-gray-200">
                  <a href="/contact" className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-shadow"
                    >
                      Apply Now for {selectedCountry.name}
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-lg">
              Select a country to explore study and job opportunities
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CountryItem;
