import { motion } from "framer-motion";

// Parent animation controller
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,   // delay between children
      delayChildren: 0.2
    }
  }
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function AnimatedList() {
  const features = [
    "Fast Performance",
    "Smooth Animations",
    "Modern UI",
    "Tailwind Styling"
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">

      <motion.div
        className="bg-white  text-black p-8 rounded-2xl w-96 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl font-bold mb-6">Framer Features</h2>

        <ul className="space-y-4">
          {features.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="p-3 bg-gray-300 text-black rounded-lg"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
}

export default AnimatedList;
