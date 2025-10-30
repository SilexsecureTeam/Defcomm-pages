import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import notifications from "../../utils/data/notifications.json";

const TopBanner = () => {
  const [bannerDisabled, setBannerDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSlideClick = (slide) => {
    if (slide.link) {
      navigate(slide.link);
    }
  };

  if (bannerDisabled) {
    return (
      <div
        className="relative w-[90%] max-w-peak mx-auto text-white text-sm md:text-base px-6 py-3 mb-2 flex justify-center items-center gap-2 md:gap-6 text-center rounded-full backdrop-blur-lg bg-black/40 hover:bg-[#2d3f14] cursor-pointer transition-colors duration-300"
        onClick={() => setBannerDisabled(false)}
        title="Enable banner"
      >
        <span className="text-lime-400 font-semibold whitespace-nowrap text-xs md:text-sm">
          Banner Disabled
        </span>
        <p className="text-white leading-snug text-[10px] md:text-sm">
          Click to enable announcements
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-[90%] max-w-peak mx-auto mb-2">
      <div className="relative bg-[#2d3f14] rounded-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
          }}
          loop={true}
          speed={500}
          className="banner-swiper"
        >
          {notifications.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="text-white text-sm md:text-base px-6 py-3 flex justify-center items-center gap-2 md:gap-6 text-center cursor-pointer transition-all duration-300 hover:bg-[#3a4f1a] rounded-full"
                onClick={() => handleSlideClick(slide)}
              >
                <span
                  className="font-semibold whitespace-nowrap text-xs md:text-sm"
                  style={{ color: slide.color }}
                >
                  {slide.label}
                </span>
                <p className="text-white leading-snug text-[10px] md:text-sm truncate max-w-xs sm:max-w-md md:max-w-3xl">
                  {slide.text}
                </p>
                {slide.link && (
                  <svg
                    className="w-4 h-4 text-green-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="banner-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full hover:bg-white/10 transition-colors duration-200">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="banner-next absolute right-8 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full hover:bg-white/10 transition-colors duration-200">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Close Button */}
        <button
          onClick={() => setBannerDisabled(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
          title="Disable banner"
        >
          <IoClose size={16} />
        </button>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .banner-swiper {
          border-radius: 9999px;
        }

        .banner-swiper .swiper-slide {
          border-radius: 9999px;
        }

        .banner-prev:hover,
        .banner-next:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .banner-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default TopBanner;
