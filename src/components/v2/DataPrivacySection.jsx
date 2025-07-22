import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../../components/v2/privacy-slide.css";

import data_img from "../../assets/data-img.png";
import bg1 from "../../assets/data-banner.png";
import bg2 from "../../assets/landing/about.jpg";
import bg3 from "../../assets/landing/bg_op.jpg";

const backgroundImages = [bg1, bg2, bg3];

const DataPrivacySection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {backgroundImages.map((bg, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay Content */}
      <div className="relative max-w-peak flex flex-col mx-auto z-10 w-full h-full px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white h-max p-2 rounded-2xl shadow-xl border max-w-96 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <img
              src={data_img}
              alt="data"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-4 px-2 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Secure Your Data and Privacy
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Keep full ownership of your email data. Our advanced security
              protocols ensure your information remains safe and confidential.
            </p>
          </div>
        </motion.div>
        {/* Swiper Pagination Dots */}
        <div className="swiper-pagination-bullets relative"></div>
      </div>
    </div>
  );
};

export default DataPrivacySection;
