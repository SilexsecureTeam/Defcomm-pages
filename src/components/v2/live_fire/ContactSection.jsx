import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-[#111] to-[#222]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full max-w-3xl mx-auto border border-[#DDF2AB] rounded-xl p-8 md:p-10 flex flex-col items-center bg-[#181818]"
      >
        <h2 className="text-[#DDF2AB] text-2xl md:text-3xl font-semibold text-center mb-3">
          Still Have Questions?
        </h2>
        <p className="text-white text-center mb-6 text-base md:text-lg">
          If you couldn't find the answer to your question, feel free to reach
          out to our team directly.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:security@defcomm.com"
          className="bg-[#89AF20] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-base md:text-lg shadow hover:bg-[#6e8e1a] transition text-center"
        >
          Contact Us at business@defcomm.ng
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
