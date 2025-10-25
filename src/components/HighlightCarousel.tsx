import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { highlightImages } from "./data&type";

const HighlightCarousel = () => {
  const [current, setCurrent] = useState(1); // Center image index

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? highlightImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === highlightImages.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  const getVisibleImages = () => {
    const prevIndex = current === 0 ? highlightImages.length - 1 : current - 1;
    const nextIndex = current === highlightImages.length - 1 ? 0 : current + 1;
    return [prevIndex, current, nextIndex];
  };

  const visibleImages = getVisibleImages();

  // Auto swipe every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4000ms = 4s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col h-fit w-full items-center justify-center bg-gray-100">
      <div className="relative flex items-center justify-center w-full lg:w-[66vw] mx-auto h-fit rounded-lg">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 cursor-pointer z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Carousel */}
        <div className="flex items-center  py-20 px-2 justify-center space-x-4 overflow-hidden w-full">
          {visibleImages.map((index) => {
            const isCenter = index === current;
            return (
              <motion.img
                key={index}
                src={highlightImages[index]}
                alt={`Slide ${index}`}
                className={`lg:h-[40rem] rounded-2xl px-2 w-[70vw] mx-auto lg:w-[40rem] cursor-pointer ${
                  isCenter
                    ? " z-10 mx-auto "
                    : "opacity-80 z-20  "
                }`}
                animate={{
                  scale: isCenter ? 1.1 : 1,
                  opacity: isCenter ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              />
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-0 z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HighlightCarousel;
