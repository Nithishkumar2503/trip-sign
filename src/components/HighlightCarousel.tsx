import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { highlightImages } from "./data&type"; // Ensure this exports an array of image URLs

const HighlightCarousel = () => {
  const [current, setCurrent] = useState(0); // start at first image

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? highlightImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === highlightImages.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
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
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]); // ✅ include current so auto slide stays synced

  return (
    <div className="flex flex-col h-fit w-full items-center justify-center bg-gray-100">
      <div className="relative px-2 flex items-center justify-center w-full lg:w-[66vw] mx-auto h-fit rounded-lg">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 cursor-pointer z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Carousel */}
        <div className="flex items-center py-20 px-2 justify-center space-x-4 overflow-hidden w-full">
          {visibleImages.map((index) => {
            const isCenter = index === current;
            return (
              <motion.img
                key={index}
                src={highlightImages[index]}
                alt={`Slide ${index}`}
                className={`rounded-2xl px-2 w-[70vw] lg:w-[40rem] cursor-pointer transition-all duration-500 ${
                  isCenter
                    ? "z-20 scale-105"
                    : "opacity-70 z-10 scale-95"
                }`}
                animate={{
                  scale: isCenter ? 1.1 : 1,
                  opacity: isCenter ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => handleDragEnd(_, info)}
              />
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 cursor-pointer z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HighlightCarousel;
