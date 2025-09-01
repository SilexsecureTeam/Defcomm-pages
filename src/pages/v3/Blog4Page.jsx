import { LockKeyhole, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import blog from "../../assets/blog4.png";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gal1 from "../../assets/gallery1.png";
import gal2 from "../../assets/gallery2.png";
import gal3 from "../../assets/gallery3.png";
import gal4 from "../../assets/gallery4.png";
import gal5 from "../../assets/gallery5.png";
import gal6 from "../../assets/gallery6.png";
import gal7 from "../../assets/gallery7.png";
import { useState } from "react";
import { galleryVariants, modalVariants } from "../../utils/dummies";

const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6, gal7];

const Blog4Page = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  SwiperCore.use([Autoplay]);
  const handleBack = () => {
    navigate(-1);
  };

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

  return (
    <div>
      <section className="bg-limeAccent w-full">
        <div className="max-w-peak mx-auto py-10 md:py-20">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.1 }}
              className="font-extrabold text-xl md:text-4xl text-start w-full mb-14"
            >
              Defcomm Solution Champions African Cybersecurity and Secure
              Defence Communications Following African Defence Chiefs Summit
              2025.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.1 }}
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
              viewport={{ once: false, amount: 0.1 }}
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
            viewport={{ once: false, amount: 0.1 }}
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
        <div className="max-w-peak mx-auto flex flex-col space-y-6 text-[#3D3D3D] text-sm md:text-lg px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <strong>Press Release</strong>
            <br />
            <br />
            Defcomm Solution Champions African Cybersecurity and Secure Defence
            Communications Following African Defence Chiefs Summit 2025
            <br />
            <br />
            Abuja, Nigeria – August 28, 2025 – Defcomm Solution has pledged to
            intensify its drive for homegrown cybersecurity innovation and
            secure defence communication platforms in response to the landmark
            African Defence Chiefs Summit 2025, hosted in Abuja, Nigeria.
            <br />
            <br />
            The Summit convened defence chiefs, policymakers, and security
            experts from across Africa, who collectively agreed that the
            continent’s future security depends on indigenous solutions, digital
            resilience, and unified defence strategies. Central to the
            discussions was the need for Africa to safeguard its cyberspace and
            communication channels against fast-evolving threats.
            <br />
            <br />
            Defcomm Solution, a leading African technology defence firm, has
            identified critical takeaways that align with its mission:
            <br />
            <br />
            <strong>1. Secure Communication as a Defense Imperative</strong>
            <br />
            <br />
            Alongside cyber defence, Defcomm is rolling out a secure, encrypted
            communication platform designed specifically for military and
            defence institutions. This platform ensures safe, reliable, and
            resilient communication channels for command, control, and
            intelligence sharing shielded from interception or compromise.
            <br />
            <br />
            “No military strategy succeeds without trusted communication,”
            Nsikak Joseph Nelson added. “Defcomm’s secure communication platform
            guarantees that African defence forces can coordinate seamlessly,
            confidently, and independently.”
            <br />
            <br />
            Strategic Next Steps
            <br />
            <br />
            Collaboration with Regional Bodies: Support the proposed permanent
            African Chiefs of Defence Staff Forum with secure digital
            infrastructure for cross-border defence communication and
            intelligence exchange.
            <br />
            <br />
            Capacity Building: Partner with defence institutions to train cyber
            professionals and communication specialists, strengthening Africa’s
            indigenous defence capacity.
            <br />
            <br />
            About Defcomm Solution
            <br />
            <br />
            Defcomm Solution is a pioneering African defence technology company
            dedicated to delivering homegrown cybersecurity and secure
            communication platforms. Built for the African context, Defcomm
            empowers defence institutions to safeguard sovereignty, protect
            digital assets, and ensure trusted, uninterrupted communication in
            an age of evolving threats.
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
                viewport={{ once: false, amount: 0.1 }}
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
    </div>
  );
};

export default Blog4Page;
