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
      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200 hover:border-primary transition-colors"
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
          <ul className="space-y-2  text-gray-400">
            {countries.map((country, index) => (
              <li
                className="hover:text-red-600 hover:scale-101 cursor-pointer transition"
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
              <h1 className="text-5xl   font-bold text-gray-900 mb-3">
                Our Countries List
              </h1>
              <p className="text-gray-600 text-lg ">World-Wide Services</p>
            </motion.div>
            {!selectedCountry && (
              <div className="grid grid-cols-1 py-4  lg:grid-cols-4 gap-6 mb-8">
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
            <motion.div className="bg-white z-32 rounded-3xl shadow-2xl overflow-hidden">
              <div
                onClick={() => setSelectedCountry(null)}
                className="fixed inset-0 bg-black/80 z-40"
              ></div>
              <div
                className={`fixed ${
                  textOnly ? "" : ""
                } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          h-fit w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]
          max-w-5xl max-h-[95vh] sm:max-h-[90vh] 
          bg-white shadow-lg z-50 
          transform transition-transform duration-300 
          rounded-lg sm:rounded-xl md:rounded-2xl
          flex flex-col overflow-hidden`}
              >
                {/* Fixed Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-4 sm:p-6 md:p-8 text-white relative flex-shrink-0">
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-colors z-10"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
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
                  <div className="flex items-center gap-3 sm:gap-4 pr-8 sm:pr-0">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-shrink-0">
                      {selectedCountry.flag}
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 break-words">
                        {selectedCountry.name}
                      </h2>
                      <p className="text-blue-100 text-sm sm:text-base md:text-lg line-clamp-2 sm:line-clamp-none">
                        {selectedCountry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fixed Tab Navigation */}
                <div className="flex border-b border-gray-200 overflow-x-auto flex-shrink-0">
                  <button
                    onClick={() => setActiveTab("study")}
                    className={`flex-1 min-w-[120px] py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold transition-colors relative whitespace-nowrap ${
                      activeTab === "study"
                        ? "text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="inline">🎓</span>
                    <span className="hidden xs:inline">
                      {" "}
                      Study Opportunities
                    </span>
                    <span className="inline xs:hidden"> Study</span>
                    {activeTab === "study" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("job")}
                    className={`flex-1 min-w-[120px] py-3 sm:py-4 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-semibold transition-colors relative whitespace-nowrap ${
                      activeTab === "job"
                        ? "text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="inline">💼</span>
                    <span className="hidden xs:inline"> Job Opportunities</span>
                    <span className="inline xs:hidden"> Jobs</span>
                    {activeTab === "job" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-primary"
                      />
                    )}
                  </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {activeTab === "study" && (
                      <motion.div
                        key="study"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-4 sm:p-6 md:p-8"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                            value={
                              selectedCountry.studyOpportunities.avgTuition
                            }
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
                        className="p-4 sm:p-6 md:p-8"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                          className="mt-4 sm:mt-6"
                        >
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <div className="text-2xl sm:text-3xl flex-shrink-0">
                                ✨
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                                  Career Prospects
                                </h4>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
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

                  {/* Fixed Footer */}
                  <div className="p-4 sm:p-6 md:p-8 bg-gray-50 border-t border-gray-200">
                    <a href="/contact" className="text-center block">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg transition-shadow text-sm sm:text-base"
                      >
                        Apply Now for {selectedCountry.name}
                      </motion.div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedCountry && !textOnly && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            <div className="text-6xl mb-4 animate-bounce hover:animate-spin w-fit mx-auto cursor-zoom-in">🌍</div>
            <div className="border-t-4 w-24 border-gray-200 shadow-gray-200 -mt-2 mx-auto shadow-2xl"></div>
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
