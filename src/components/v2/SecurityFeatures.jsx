import { motion } from "framer-motion";
import { features } from "../../utils/dummies";

export default function SecurityFeatures() {
  return (
    <section className="bg-[#EEEEEE] py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Built for <br />
          <span className="text-[#5a6834] font-bold text-2xl md:text-3xl">
            Maximum Security
          </span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Every feature is designed with security-first principles, ensuring
          your communications remain private and protected.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={`rounded-xl p-6 flex flex-col justify-around gap-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              feature.dark
                ? "bg-oliveLight text-white"
                : "bg-[#FEFEFE] text-gray-800"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-md flex items-center justify-center text-xl ${
                feature.dark ? "bg-white text-[#2d3f14]" : "bg-[#E8E8E8]"
              }`}
            >
              {<feature.icon />}
            </div>
            <h3
              className={`text-base md:text-lg font-bold ${
                feature.dark ? "text-white" : "text-[#2d3f14]"
              }`}
            >
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
