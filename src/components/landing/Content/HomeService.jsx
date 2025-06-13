import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import PhoneIntro from "./PhoneIntro";
import LogoSlider from "./LogoSlider";
import deffcommhomeimage from "../../../assets/landing/phone1.png";
import RedBlack from "../../../assets/landing/Red&BlackLogo.png";
import privacy from "../../../assets/landing/privacy.png";
import RedBlackTwo from "../../../assets/landing/Red&BlackLogoTwo.png";
import RedBlackThree from "../../../assets/landing/Red&BlackLogoThree.png";
import NavyLogo from "../../../assets/landing/navylogo.png";
import SarsLogo from "../../../assets/landing/sarslogo.png";
import SvgOne from "../Pages/SvgOne";
import SvgTwo from "../Pages/SvgTwo";
import SvgThree from "../Pages/SvgThree";
import SvgFive from "../Pages/SvgFive";
import vector from "../../../assets/vector.png";
import HeroSlider from "./HeroSlider";



function HomeService() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();

  // Darkening Effect: Changes overlay opacity as user scrolls
  const darkenOverlay = useTransform(scrollY, [0, 300], [0, 0.9]);

  // Rotation Effect for Icon
  const rotateScroll = useTransform(scrollY, [1, 200], ["0deg", "360deg"]);

  // Auto-slide images for LogoSlider
  const images = [NavyLogo, RedBlack, RedBlackTwo, RedBlackThree, SarsLogo];
  return (
    <>
      <div className="relative pt-[80px] bg-linear-gradientthree">
        {/* Darkening Overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: darkenOverlay }}
        ></motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            stiffness: 120,
          }}
        >
          <div className="lg:hidden absolute pt-[180px]">
            <SvgFive />
          </div>
          <div className="relative flex flex-col justify-center items-center text-[#D9D9E9] px-4 mt-0 md:-mt-10 lg:ml-[0px] h-fit lg:h-[500px] !space-y-4 md:space-y-7">

            <h2 className="text-[35px] text-center mx-auto font-semibold md:max-w-[35%] leading-[1.4]">
              Mission-Critical Communication, <span className="text-[#C6FC2B]">Reinvented</span>
            </h2>
            <p className="text-[#D1D5DB] md:max-w-[53%] mx-auto text-center">From encrypted messaging to secure operating systems and real-time defense support tools, Defcomm delivers advanced communication infrastructure tailored for defense and government operations.</p>
            <div className="flex flex-col md:flex-row justify-center gap-x-7 gap-y-2">
              <button className="bg-[#36460A] text-white px-8 py-2.5">Request a Demo</button>
              <button className="border border-[#FFFFFF80] px-8 py-2.5 text-[#FFFFFF80]">Explore Platform</button>
            </div>
            {/* <img src={vector} alt="" className="absolute bottom-10 left-0 max-w-[350px]" /> */}
          </div>
         


          {/* <div className="relative text-white ml-[10%] lg:ml-[0px] h-96 lg:h-[500px] lg:pl-[100px]">
            
            <div className="w-[90%] md:w-[500px] lg:w-[600px] mx-auto flex justify-center">
              <PhoneIntro />
            </div>

            <div className="hidden lg:flex absolute bottom-[2px] lg:left-[-1px]">
              <SvgFive />
            </div>

           
            <motion.div className="hidden md:block absolute text-white bottom-[9%] left-[4%] lg:left-[10%] text-sm md:w-48 lg:w-60">
              <SvgOne width="100%" />
              <p className="pt-4">USB Detectors Automatic.</p>
              <p>Wipes With Foreign Elements</p>
            </motion.div>

            <motion.div className="hidden lg:flex absolute lg:right-[4%] mt-[-200px] right-[10%] text-xs flex-col items-end md:w-48 lg:w-[200px]">
              <SvgTwo width="100%" />
              <p className="pt-2">Built-In TPM Chips Provide Secure Key Storage</p>
            </motion.div>

            <motion.div className="hidden md:block absolute lg:left-[15%] top-[4%] text-sm md:w-48 lg:w-60">
              <p className="pb-4">Killer Switch</p>
              <SvgThree width="100%" />
            </motion.div>

            <motion.div
              className="absolute -top-[15px] right-4 lg:top-6 lg:right-40 text-white"
              style={{ rotate: rotationYscroll }}
              ref={targetRef}
            >
              <div className="relative w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center bg-lime-800 text-white text-4xl rounded-full">
                <p className="bg-black p-1 rounded-full text-[18px]">
                  <LiaLongArrowAltDownSolid />
                </p>
                <svg className="absolute w-[60px] h-[60px]" viewBox="0 0 60 60">
                  <defs>
                    <path id="circlePath" d="M30,5 A25,25 0 1,1 29.99,5" fill="transparent" />
                  </defs>
                  <text className="text-[6px] lg:text-[8px] tracking-[6px] fill-white">
                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                      Absolute Privacy
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </div>
    </>
  );
}

export default HomeService;
