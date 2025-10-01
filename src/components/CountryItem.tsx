import { countries } from "./data&type";

const CountryItem = () => {
  return (
    <div className="min-h-[100vh] items-center content-center  bg-gray-50 p-8">
      {/* Heading & Subheading */}
      <div className="text-center mb-12 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Countries List
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          World-Wide Services
        </p>
      </div>

      {/* Country Cards */}
      <div className="flex flex-wrap gap-8 justify-center">
        {countries.map((country) => (
          <div
            key={country.name}
            className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl p-8 w-56 h-56 hover:scale-105 transition-transform duration-300"
          >
            <span className="text-6xl mb-4">{country.flag}</span>
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {country.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryItem;
