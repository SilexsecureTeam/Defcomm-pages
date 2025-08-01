import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";

const uniqueNewsItems = [
  {
    title: "Defcomm Unveils Innovative End-to-End Encryption System",
    description:
      "Defcomm officially presented its groundbreaking end-to-end Encryption System to the Nigerian Army Signal Corps, marking a major step forward in secure military communications.",
    image: new1,
  },
  {
    title: "Defcomm Attends AWS Summit in LONDON",
    description:
      "Africa has a chance to build a digital future rooted in freedom, not surveillance capitalism. Every step toward secure communication and away from Big Tech surveillance sets a precedent.",
    image: new2,
  },
  {
    title: "Defcomm Launches POC End-to-End Encryption Devices",
    description:
      "Defcomm embodies the company’s commitment to safeguarding digital communications with unparalleled encryption protocols.",
    image: new3,
  },
];

const swiperItems = [...uniqueNewsItems, ...uniqueNewsItems];

export default function NewsEventsSection() {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <div className="bg-gradient-to-r from-[#36460A] to-[#000000] min-h-screen p-4 md:p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          News & Events
        </motion.h1>

        <motion.div
          className="h-[2px] w-full my-5 bg-zinc-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.p
          className="text-white text-xl font-medium leading-tight max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Stay informed about our latest developments and get updates on current
          news and events related to Defcomm activities.
        </motion.p>

        <motion.p
          className="text-white text-base mb-20 hidden mt-1 font-normal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Defcomm Unveils Innovative End-to-End Encryption System to Nigerian
          Army Signal Corps
        </motion.p>

        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: false,
            renderBullet: (index, className) => {
              if (index < uniqueNewsItems.length) {
                return `<span class="${className} bg-green-500 hidden"></span>`;
              }
              return "";
            },
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {swiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
                className="border border-white rounded-2xl shadow-xl pt-4 h-full flex flex-col justify-between"
              >
                <h3 className="text-white text-xl px-4 font-bold mb-4">
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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 right-4 hidden">
          <div className="swiper-pagination hidden" />
        </div>
      </div>

      <style>{`
        .custom-bullet {
          width: 40px;
          height: 10px;
          background: white;
          border-radius: 10%;
          display: none;
          margin: 0 4px;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .custom-bullet-active {
          background: #a3e635; /* lime-400 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
