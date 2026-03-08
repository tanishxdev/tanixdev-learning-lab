import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">

      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40"

            /* Fade background */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Modal Box */}
            <motion.div
              className="bg-white p-8 rounded-2xl w-96 shadow-xl"

              /* Modal animation */
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}

              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <h2 className="text-xl  text-black font-bold mb-3">Animated Modal</h2>
              <p className="text-gray-600 mb-6">
                This modal smoothly animates when opening and closing.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Close
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default AnimatedModal;
