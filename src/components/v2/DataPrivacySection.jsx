// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../../components/v2/privacy-slide.css";

import data_img from "../../assets/data-img.png";
import data_img1 from "../../assets/data-img1.png";
import bg1 from "../../assets/data-banner.png";
import bg2 from "../../assets/privacy1.jpg";
import bg3 from "../../assets/privacy2.png";

const backgroundImages = [bg1, bg2, bg3];

const DataPrivacySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
          className="bg-white h-max p-2 rounded-2xl shadow-xl border max-w-96 md:max-w-[450px] hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <img
              src={activeIndex === 1 ? data_img1 : data_img}
              alt="data"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="mt-4 px-2">
            {activeIndex === 1 ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900">
                  Frontline Capabilities
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Defcomm is built to support frontline teams operating in
                  high-risk, high-pressure environments where secure, real-time
                  communication can mean the difference between mission success
                  and failure.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-900">
                  Secure Your Data and Privacy
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Keep full ownership of your classified data. Our advanced
                  security protocols ensure your information remains safe and
                  confidential.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="absolute md:bottom-14 bottom-20 md:left-24 z-50 max-w-peak mx-auto w-full px-6">
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default DataPrivacySection;
