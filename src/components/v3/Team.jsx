import { motion } from "framer-motion";
import { teamMembers } from "../../utils/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-peak mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-start mb-12 max-w-3xl"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Team.
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col transition-transform duration-300 hover:scale-[1.03]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover object-top"
              />
              <motion.h4
                className="text-lg pl-3 mt-3 font-semibold text-black"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {member.name}
              </motion.h4>
              <motion.p
                className="text-sm pl-3 text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {member.position}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
