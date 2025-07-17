import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import defcommlogo from "../../../assets/landing/Defcomm-03 1.png";
import { MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom'
function Nav() {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setDropDown(!dropDown);

  const initialVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5 } },
  };

  return (
    <motion.nav
      variants={initialVariant}
      initial="hidden"
      animate="visible"
      className="fixed z-20 w-full backdrop-blur-lg bg-transparent px-6 md:px-10 py-1 flex items-center justify-between"
    >
      {/* Logo */}
      <img src={defcommlogo} alt="DeffComm Logo" className="w-[150px] md:w-[250px]" />

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6">
        {[
          { route: '/', label: 'Home' },
          { route: '/about', label: 'About Us' },
          { route: '/products', label: 'Products' },
          // { route: '/services', label: 'Services' },
          { route: '/technology', label: 'Technology' },
          // { route: '/features', label: 'Features' },
          // { route: '/contact', label: 'Contact Us' }
        ].map((item, index) => (
          <motion.li
            key={index}
            className="text-sm"
            whileHover={{ scale: 1.02, fontWeight: "bold", textShadow: "0px 0px 8px rgb(255,255,255)" }}
          >
            <NavLink to={item.route}
              className="text-white cursor-pointer [&.active]:font-bold [&.active]:drop-shadow-[0px_0px_8px_rgb(255,255,255)] ">

              {item?.label}

            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Login Button */}
      <motion.a
        href="https://defcomm.vercel.app/"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        className="hidden lg:block bg-white text-gray-700 px-6 py-2 rounded-full shadow-md font-medium"
      >
        Login
      </motion.a>

      {/* Mobile Menu Toggle */}
      <div onClick={handleClick} className="lg:hidden cursor-pointer text-white">
        {dropDown ? null : <FaBarsStaggered size={24} />}
      </div>

      {/* Mobile Navigation */}
      <motion.ul
        initial={{ x: "100%" }}
        animate={{ x: dropDown ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-[250px] bg-black bg-opacity-90 shadow-xl text-white flex flex-col items-start py-6 px-4 space-y-4 lg:hidden"
      >
        <li onClick={handleClick} className=" cursor-pointer text-lg">
          <MdClose size={24} strokeWidth={2} className="text-red-500" />
        </li>
        {[
          { route: '/', label: 'Home' },
          { route: '/about', label: 'About Us' },
          { route: '/products', label: 'Products' },
          // { route: '/services', label: 'Services' },
          { route: '/technology', label: 'Technology' },
          // { route: '/features', label: 'Features' },
          // { route: '/contact', label: 'Contact Us' }
        ].map((item, index) => (
          <motion.li
            onClick={() => { navigate(item?.route); scrollTo(0, 0); setDropDown(false) }}
            key={index}
            whileHover={{ scale: 1.02, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            className="w-full flex"
          >
          <NavLink to={item.route}
              className="w-full p-4 cursor-pointer hover:bg-lime-800 transition-all duration-200 [&.active]:bg-lime-800">

            {item?.label}
            </NavLink>
          </motion.li>
        ))}
        <motion.a
          href="https://defcomm.vercel.app/"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
          className="mx-4 bg-white text-gray-700 px-6 py-2 rounded-full shadow-md font-medium"
        >
          Login
        </motion.a>
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
