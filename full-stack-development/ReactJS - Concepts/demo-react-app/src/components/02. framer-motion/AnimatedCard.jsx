// Import motion from framer-motion
import { motion } from "framer-motion";

function AnimatedCard() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      
      {/* motion.div replaces normal div and allows animation */}
      <motion.div

        /* initial = starting state when component loads */
        initial={{ opacity: 0, y: 50 }}

        /* animate = final state */
        animate={{ opacity: 1, y: 0 }}

        /* transition controls speed and smoothness */
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}

        className="bg-gray-100  p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-lg text-black font-semibold mb-2">
          Framer Motion Card
        </h2>
        <p className="text-gray-600">
          This card fades and slides up when page loads.
        </p>
      </motion.div>

    </div>
  );
}

export default AnimatedCard;
