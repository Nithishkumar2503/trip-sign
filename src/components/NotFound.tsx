import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[60vh] bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page Not Found</p>
        <p className="text-gray-500 mb-8">
Sorry, we couldn’t locate the page you requested.

        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center border border-primary text-primary hover:text-white cursor-pointer px-6 py-3 rounded-lg shadow-lg hover:bg-primary transition"
        >
          <FaHome className="mr-2" />
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
