import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ParamsProps {
  child?: ReactNode;
  isOpen?: boolean;
  onDispatch?: () => void;
}

export default function Sidebar({ isOpen = false, child, onDispatch }: ParamsProps) {
  const onClose = () => {
    onDispatch?.();
  };

  return (
    <div className="relative">
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-[60vw] rounded-l-lg bg-white shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.35,
              ease: "easeInOut",
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={onClose}>
                <AiOutlineClose className="h-6 w-6 cursor-pointer text-gray-700" />
              </button>
            </div>

            {/* Content */}
            {child}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
