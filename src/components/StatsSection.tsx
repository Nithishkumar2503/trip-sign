import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { viewportOnce } from "./utils";

const CountUp = ({ target, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      count.set(target);
    }
  }, [isInView, target, count]);

  // Listen for changes and update state for re-render
  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  return (
    <h3 ref={ref} className="text-3xl font-bold text-primary">
      {displayValue}
      {suffix}
    </h3>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 30, label: "Visa Categories" },
    { value: 68, label: "Visa Process" },
    { value: 99, label: "Success Rate" },
    { value: 23, label: "Pro Consultants" },
  ];

  return (
    <div className="p-2 mx-2 lg:mx-auto px-2 lg:w-[66vw]">
      <motion.div
        className="mx-auto border py-10 rounded-lg border-primary w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: viewportOnce }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: viewportOnce }}
          >
            <CountUp target={item.value} />
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
