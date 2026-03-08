import { motion } from "framer-motion";

function ScrollReveal() {
  return (
    <div className="space-y-40 py-20">

      {/* Section 1 */}
      <motion.div
        className="max-w-3xl mx-auto bg-white text-black bg p-10 rounded-2xl shadow-lg"

        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, margin: "-100px" }}

        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Scroll Section One</h2>
        <p className="text-gray-600">
          This content animates when it enters the viewport.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="max-w-3xl mx-auto bg-white text-black p-10 rounded-2xl shadow-lg"

        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}

        viewport={{ once: true }}

        transition={{
          duration: 0.6
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Scroll Section Two</h2>
        <p className="text-gray-600">
          This section slides from left when it appears.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="max-w-3xl mx-auto bg-white text-black p-10 rounded-2xl shadow-lg"

        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}

        viewport={{ once: true }}

        transition={{
          duration: 0.5
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Scroll Section Three</h2>
        <p className="text-gray-600">
          Zoom reveal on scroll.
        </p>
      </motion.div>

    </div>
  );
}

export default ScrollReveal;
