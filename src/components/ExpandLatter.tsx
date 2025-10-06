import { motion } from "framer-motion";

export default function AnimatedHeading({
  text = "",
  classes,
}: {
  text?: string;
  classes?: string;
}) {
  return (
    <h2 className="text-xl mb-4 drop-shadow-lg text-primary font-semibold">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${classes}`}
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {/* preserve spaces */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}
