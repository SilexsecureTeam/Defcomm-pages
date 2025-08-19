import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team1 from "../../assets/team1.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";

// Define the fadeUp animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  { id: 1, name: "Nsikak Joseph Nelson", position: "CEO", img: team1 },
    { id: 2, name: "Nike Nsikak Nelson", position: "Co-founder /CIO", img: team4 },
  { id: 3, name: "Nuno Seidi", position: "COO", img: team2 },
  { id: 4, name: "Opeyemi T Obayan", position: "CBO", img: team3 },

  {
    id: 5,

    name: "Dr. Moses Enokela",
    position: "Head - Digital Health Strategy and Innovation",
    img: team5,
  },
  {
    id: 6,
    name: "Maurice Idorenyin",
    position: "CFO",
    img: team6,
  },
];

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
