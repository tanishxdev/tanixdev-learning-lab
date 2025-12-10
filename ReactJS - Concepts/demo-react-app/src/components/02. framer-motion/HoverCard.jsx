import { motion } from "framer-motion";

function HoverCard() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <motion.div

        whileHover={{
          scale: 1.05,
          boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"
        }}

        transition={{
          duration: 0.3
        }}

        className="bg-white p-8 rounded-2xl w-96"
      >
        <h3 className="text-lg text-black font-bold mb-2">
          Hover Interaction Card
        </h3>
        <p className="text-gray-600">
          This card reacts when you move your mouse over it.
        </p>
      </motion.div>

    </div>
  );
}

export default HoverCard;
