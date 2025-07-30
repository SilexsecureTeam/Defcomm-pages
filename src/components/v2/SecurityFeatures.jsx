import { motion } from "framer-motion";
import { features } from "../../utils/dummies";

export default function SecurityFeatures() {
  return (
    <section className="bg-[#EEEEEE] py-16 px-6">
      <div className="max-w-peak mx-auto">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-peak mx-auto"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`rounded-xl p-6 flex flex-col gap-4 min-h-[300px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                feature.dark
                  ? "bg-oliveLight text-white"
                  : "bg-[#FEFEFE] text-gray-800"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-md flex mb-2 items-center justify-center text-xl flex-shrink-0 ${
                  feature.dark ? "bg-white text-[#2d3f14]" : "bg-[#E8E8E8]"
                }`}
              >
                {<feature.icon />}
              </div>

              {/* Title */}
              <h3
                className={`text-base md:text-lg font-bold min-h-[3.5rem] flex items-start ${
                  feature.dark ? "text-white" : "text-[#2d3f14]"
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
