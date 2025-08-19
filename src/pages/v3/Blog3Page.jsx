import { LockKeyhole, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import blog from "../../assets/blog2.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import gal1 from "../../assets/gals1.png";
import gal2 from "../../assets/gals2.png";
import gal3 from "../../assets/gals3.png";
import gal4 from "../../assets/gals4.png";
import gal5 from "../../assets/gals5.png";
import gal6 from "../../assets/gals6.png";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, Link } from "react-router-dom";

const uniqueNewsItems = [
  {
    title: "Defcomm Attends AWS Summit in LONDON",
    description:
      "Africa has a chance to build a digital future rooted in freedom, not surveillance capitalism. Every step toward secure communication and away from Big Tech surveillance sets a precedent.",
    image: new2,
    link: "/defcomm-attend",
  },
  {
    title: "Defcomm Launches POC End-to-End Encryption Devices",
    description:
      "Defcomm embodies the company’s commitment to safeguarding digital communications with unparalleled encryption protocols.",
    image: new3,
    link: "/launches-defcomm",
  },
];

const swiperItems = [...uniqueNewsItems, ...uniqueNewsItems];

const Blog3Page = () => {
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
              className="font-extrabold text-[45px] text-start w-full mb-14"
            >
              Defcomm Unveils Advanced Military Encryption System to Nigeriansystem
              Army Signal Corps.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center space-x-2 bg-[#54622D] rounded-full mx-auto w-fit py-2 px-4 mb-16 cursor-pointer"
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
                April 25, 2025
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
            Defcomm Unveils Advanced Military Encryption System to Nigerian Army
            Signal Corps Lagos, Nigeria —April 26th 2025 <br /> <br />
            Defcomm, a leading innovator in secure communications, has
            officially presented its state-of-the-art end-to-end encryption
            system to the Nigerian Army Signal Corps. This milestone marks a
            pivotal advancement in Nigeria’s military communication
            infrastructure, delivering unmatched protection against modern cyber
            threats. <br /> <br />
            Developed by Silex Secure Lab, the Defcomm system is designed to
            safeguard classified transmissions across defence networks, ensuring
            confidentiality, integrity, and operational resilience. The
            encryption suite integrates seamlessly with both legacy systems and
            emerging technologies, offering real-time security without
            compromising usability. <br /> <br />
            Speaking at the presentation, Defcomm representatives highlighted
            the system’s battlefield-tested capabilities, scalable deployment
            options, and strategic value in enhancing national defence
            readiness. <br /> <br />
            This collaboration with the Nigerian Army Signal Corps underscores
            Defcomm’s commitment to strengthening national cybersecurity and
            equipping military forces with the tools to operate securely in an
            increasingly digital battle space.
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
            onClick={(e) => e.stopPropagation()}
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
            Related news
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

export default Blog3Page;