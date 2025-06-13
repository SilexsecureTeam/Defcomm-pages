import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {
  MessageSquare,
  Folder,
  Mic,
  Monitor,
  Smartphone,
  Cpu,
  Store,
  CircleSlash,
  Mail
} from 'lucide-react';
import feat1 from '../../../assets/landing/feat1.png'
import feat2 from '../../../assets/landing/feat2.png'
import feat3 from '../../../assets/landing/feat3.png'
import feat4 from '../../../assets/landing/feat4.png'
import feat5 from '../../../assets/landing/feat5.png'
import feat6 from '../../../assets/landing/feat6.png'
import feat7 from '../../../assets/landing/feat1.png'
import feat8 from '../../../assets/landing/feat2.png'
import feat9 from '../../../assets/landing/feat3.png'
import icon1 from "../../../assets/landing/icon1.png"
import icon2 from "../../../assets/landing/icon2.png";

const features = [
  {
    title: 'End-to-End Encrypted Messaging',
    desc: 'Highly secure comms with user-controlled keys, self-destructing messages, and no server-side storage.',
    icon: feat1,
    bg: 'bg-black',
    iconBg: 'text-[#D1D5DB]'
  },
  {
    title: 'Encrypted File Sharing & Work Drive',
    desc: 'Military-grade encrypted cloud-free file sharing with document watermarking and access logs.',
    icon: feat2,
    bg: 'bg-[#36460A]',
    iconBg: 'text-[#B5A4A4]'
  },
  {
    title: 'Push-to-Talk Communication',
    desc: 'Real-time encrypted audio comms for field operations with offline queuing and group channels.',
    icon: feat3,
    bg: 'bg-[#36460A]',
    iconBg: 'text-[#D1D5DB]'
  },
  {
    title: 'Private OS & Secure Computing',
    desc: 'Custom OS with secure boot, encrypted storage, and full biometric access.',
    icon: feat4,
    bg: 'bg-black',
    iconBg: 'text-[#D1D5DB]'
  },
  {
    title: 'Dynamic Watermark & Screenshot Protection',
    desc: 'Screens are auto-blocked from capture with moving ID watermarks to trace leaks.',
    icon: feat5,
    bg: 'bg-black',
    iconBg: 'text-[#D1D5DB]'
  },
  {
    title: 'iSurvive AI System',
    desc: 'Offline AI assistant for personnel in crisis gives medical help, maps, and alerts.',
    icon: feat6,
    bg: 'bg-[#36460A]',
    iconBg: 'text-[#B5A4A4]'
  },
  {
    title: 'DefComm Stores',
    desc: 'Marketplace for encrypted, verified mission-critical apps with role-based access.',
    icon: feat7,
    bg: 'bg-[#36460A]',
    iconBg: 'text-[#B5A4A4]'
  },
  {
    title: 'Emergency Erase + Signal Blocking',
    desc: 'Instantly wipe devices, block mics and GPS with one physical switch.',
    icon: feat8,
    bg: 'bg-black',
    iconBg: 'text-[#D1D5DB]'
  },
  {
    title: 'Encrypted Email + Metadata Protection',
    desc: 'No cloud storage, no third-party servers, full traceability with metadata scrubbing.',
    icon: feat9,
    bg: 'bg-black md:col-span-2',
    iconBg: 'text-[#D1D5DB]'
  },
];

function CoreValue2() {
  const textVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.9,
      },
    },
  };

  const imgtwoVariants = {
    slidehidden: {
      x: 0,
      opacity: 0,
    },
    slidevisible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <div>
      <div className="text-[#D9D9E9] text-center bg-linear-gradientone py-10 px-4">
        <p className="text-[19px] font-bold">Comprehensive <span className="text-[#C6FC2B]">Solutions</span> for Secure Communication</p>
        <p className="w-full md:max-w-[70%] mx-auto mt-3">From real-time voice encryption to private operating systems and secure file sharing, Defcomm offers a complete suite of services designed to meet the most demanding communication and cybersecurity needs of defense and government institutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 md:mt-20 md:px-12 pb-10">
          {features.map(({ title, desc, icon: Icon, bg, iconBg }, idx) => (
            <div
              key={idx}
              className={`${bg} ${iconBg} p-5 py-7 flex items-center space-x-4 space-y-4 hover:shadow-lg transition-shadow duration-200`}
            >
              <img src={Icon} alt="" className='w-[80px] h-auto' />
              <div>
                <h3 className="text-lg font-semibold text-left mb-1 -mt-5">{title}</h3>
                <p className="text-sm text-left">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-8 font-[poppins] bg-linear-gradientone min-h-full py-20 pt-10 px-4 lg:px-10'>
        <motion.div
          className='lg:w-1/2 flex flex-col justify-center lg:justify-start lg:border-l-2 border-lime-600'
          variants={textVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >

          <div className='border-l-2 border-lime-600 p-6 lg:p-10 rounded-md text-white'>
            <h1 className='text-gray-400 font-bolder text-3xl lg:text-4xl'>Why Choose Us?</h1>
            <br />
            <p className='text-xs lg:text-base mt-4 leading-6'>
              Defcomm is a leading provider of secure communication solutions
              tailored for defense organizations. We specialize in end-to-end encryption technologies designed to protect sensitive military and
              governmental communications from cyber threats,interception, Andunauthorized access. With years of expertise in cybersecurity and
              defense technology, we ensure that critical data remains secure in an increasingly complex digital landscape.
            </p>
            <div className='group py-3 px-6 w-max rounded-[100px] flex items-center gap-2 text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-105 transition duration-200'>
              <span className="group-hover:pr-2 transition duration-200">Learn More</span> <FaArrowRight />
            </div>
          </div>
        </motion.div>

        <motion.div
          className='lg:w-1/2 rounded-lg flex flex-col items-center gap-2'

        >
          {/* Image or other content goes here */}
          <div className='flex flex-col gap-3 bg-oliveLight text-white p-8 min-h-24 w-[90%]'>
            <img src={icon1} alt="" className="w-10" />
            <h2 className="text-xl font-medium">Innovation</h2>
            <p className="text-sm">Harness cutting edge technologies tostay ahead in rapidly evolving cybersecurity landscape.</p>
          </div>

          <div className='flex flex-col gap-3 bg-black text-white p-8 min-h-24 w-[90%]'>
            <img src={icon2} alt="" className="w-10" />
            <h2 className="text-xl font-medium">Simplicity</h2>
            <p className="text-sm">Simplify complex processes with intuitive interfaces and streamlined workflows.</p>
          </div>
        </motion.div>
      </div>
      <div className='bg_op2 text-right py-10 md:py-0 h-fit md:h-[500px] text-black flex flex-col justify-center space-y-5 px-12 items-end'>
        <p className='text-black text-[28px] font-semibold leading-[1.3] md:-mt-20'>Your Operations <br />
          Deserve Unbreakable Security</p>
        <p className='text-[18px] font-light'>Our team is ready to deploy a custom solution built <br /> for your mission’s success.</p>
        <button className='bg-[#36460A] px-8 py-2.5 font-medium text-white'>Schedule a Consultation</button>
      </div>
    </div>
  );
}

export default CoreValue2;
