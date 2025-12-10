import { motion } from "framer-motion";

function AnimatedButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <motion.button

        /* When cursor hovers */
        whileHover={{ scale: 1.1 }}

        /* When button is clicked */
        whileTap={{ scale: 0.9 }}

        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15
        }}

        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg"
      >
        Hover Me
      </motion.button>

    </div>
  );
}

export default AnimatedButton;
