import { LockKeyhole } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import blog from "../../assets/blog1.png";
import new1 from "../../assets/new1.png";
// import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
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
  //   {
  //     title: "Defcomm Attends AWS Summit in LONDON",
  //     description:
  //       "Africa has a chance to build a digital future rooted in freedom, not surveillance capitalism. Every step toward secure communication and away from Big Tech surveillance sets a precedent.",
  //     image: new2,
  //   },
  {
    title: "Defcomm Launches POC End-to-End Encryption Devices",
    description:
      "Defcomm embodies the company’s commitment to safeguarding digital communications with unparalleled encryption protocols.",
    image: new3,
    link: "/launches-defcomm",
  },
];

const swiperItems = [...uniqueNewsItems, ...uniqueNewsItems];

const Blog2Page = () => {
  const navigate = useNavigate();
  SwiperCore.use([Autoplay]);

  const handleBack = () => {
    navigate(-1);
  };

// Animation variants for gallery images
  const galleryVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
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
              Defcomm Attend’s AWS Summit in LONDON.
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
                April 30, 2025
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
            Defcomm, the cutting-edge end-to-end encryption platform , made its
            mark at the AWS Summit London, joining global leaders in cloud
            technology and digital infrastructure. <br /> <br />
            Held at the ExCeL London, the AWS Summit gathered thousands of
            innovators, decision-makers, and tech experts to explore the future
            of cloud computing. Defcomm’s presence brought a spotlight on
            national-grade encryption and secure digital communications a
            fast-growing priority in an increasingly connected and vulnerable
            world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-bold"
          >
            Why Defcomm Stood Out
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            As governments, defense sectors, and enterprises race to modernize
            their infrastructure, secure communication remains a top concern, By
            aligning secure messaging with scalable AWS services, Defcomm offers
            a future-proof solution that supports both national security and
            enterprise compliance.
          </motion.p>

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
            className="font-semibold"
          >
            “AWS Summit London gave us the perfect stage to show how encryption
            isn’t just about privacy—it’s about sovereignty, trust, and
            operational continuity,” <br /> <br />
            Looking Ahead
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            With ransomware attacks and digital espionage on the rise, the need
            for secure, scalable, and adaptable communication platforms has
            never been greater. Defcomm’s participation at AWS Summit London
            marks a key step in its mission to bring trusted encryption to the
            global stage
          </motion.p>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[gal1, gal2, gal3, gal4, gal5, gal6].map((image, index) => (
              <motion.div
                key={index}
                variants={galleryVariants}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full"
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

export default Blog2Page;
