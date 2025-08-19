import { LockKeyhole, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import blog from "../../assets/blog.png";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import gal1 from "../../assets/gal1.png";
import gal2 from "../../assets/gal2.png";
import gal3 from "../../assets/gal3.png";
import gal4 from "../../assets/gal4.png";
import gal5 from "../../assets/gal5.png";
import gal6 from "../../assets/gal6.png";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, Link } from "react-router-dom";

const uniqueNewsItems = [
  {
    title: "Defcomm Unveils Innovative End-to-End Encryption System",
    description:
      "Defcomm officially presented its groundbreaking end-to-end Encryption System to the Nigerian Army Signal Corps, marking a major step forward in secure military communications.",
    image: new1,
    link: "/defcomm-unveil",
  },
  {
    title: "Defcomm Attends AWS Summit in LONDON",
    description:
      "Africa has a chance to build a digital future rooted in freedom, not surveillance capitalism. Every step toward secure communication and away from Big Tech surveillance sets a precedent.",
    image: new2,
    link: "/defcomm-attend",
  },
];

const swiperItems = [...uniqueNewsItems, ...uniqueNewsItems];

const Blog1Page = () => {
  const navigate = useNavigate();
  SwiperCore.use([Autoplay]);

  // State for modal and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];

  const handleBack = () => {
    navigate(-1);
  };

  // Open modal with selected image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Animation variants for gallery images
  const galleryVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Animation for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <section className="bg-limeAccent w-full">
        <div className="max-w-peak mx-auto py-10 md:py-20">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-extrabold text-5xl text-start w-full mb-14"
            >
              Launches Defcomm: End-to-End Encryption Solution For Government
              and Defence.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center space-x-2 bg-[#54622D] rounded-full w-fit mx-auto py-2 px-4 mb-16 cursor-pointer"
              onClick={handleBack}
            >
              <LockKeyhole className="w-6 h-6 text-white" />
              <h1 className="text-sm text-[#F0F2F5] uppercase tracking-wide cursor-pointer">
                Back to News
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex justify-end"
            >
              <h1 className="text-sm text-[#3D3D3D] uppercase tracking-wide">
                December 10, 2025
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full flex justify-center mb-10"
          >
            <img
              src={blog}
              alt="Blog"
              className="w-full h-96 md:h-[410px] object-top object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-peak mx-auto flex flex-col space-y-6 text-[#3D3D3D] text-lg px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            In an age where digital threats are rising and sensitive data is a
            constant target, one thing is clear—secure communication is not
            optional. It’s essential. That’s why Silex Secure Lab is proud to
            officially launch Defcomm, a purpose-built end-to-end encryption
            solution engineered for the high-stakes world of government,
            military, and defense operations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            What Is Defcomm?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Defcomm is not just another encryption app. It’s a secure
            communication platform developed over seven years to meet the unique
            demands of institutions where confidentiality, integrity, and
            reliability are non-negotiable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            Key Features:
          </motion.p>
          <ul className="list-disc pl-6 space-y-2">
            {[
              "True End-to-End Encryption: From sender to recipient—zero access, zero compromise.",
              "Military-Grade Security Protocols: Engineered to resist even nation-state level threats.",
              "Seamless Integration: Works with existing communication systems, reducing friction.",
              "User-Centric Interface: Powerful encryption doesn’t have to be difficult to use.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            Who Is It For?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Defcomm is tailored specifically for:
          </motion.p>
          <ul className="list-disc pl-6 space-y-2">
            {[
              "Government agencies handling classified information",
              "Military and defense forces requiring secure field-to-command communications",
              "Law enforcement units protecting operational data and intelligence",
              "Strategic departments that need to prevent data leaks, espionage, and sabotage",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Whether it’s coordinating a military mission, transmitting
            intelligence, or securing policy-level communications, Defcomm
            provides the infrastructure to do it safely.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            💬 What the Team Says
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-semibold"
          >
            “This is more than software—it’s a security shield for national
            interests,” — Nsikak Joseph Nelson, CEO of Defcomm Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            Why Now?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Recent events—ranging from ransomware surges to high-profile data
            breaches—have made it clear: traditional communication tools are no
            longer enough. Governments and defense institutions are increasingly
            targeted, and off-the-shelf solutions can’t handle the threat level.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Defcomm fills that gap with a robust, scalable, and secure
            alternative designed from the ground up for high-trust environments.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={galleryVariants}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for large image view */}
      {isModalOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex items-center justify-between">
              <button
                onClick={prevImage}
                className="text-white bg-[#54622D] p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={nextImage}
                className="text-white bg-[#54622D] p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <section className="bg-white pb-16 py-6">
        <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold mb-16 text-3xl"
          >
            Related News
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <Swiper
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {swiperItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={item.link}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="border border-white bg-gradient-to-b from-[#36460A] to-[#000000] rounded-2xl shadow-xl pt-4 h-full flex flex-col justify-between"
                    >
                      <h3 className="text-white text-xl h-[50px] px-4 font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm px-4 h-[100px] mb-4">
                        {item.description}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 px-1 pb-2 object-cover rounded-lg"
                      />
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog1Page;