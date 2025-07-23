import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import defcommlogo from "../../../assets/landing/Defcomm-03 1.png";
import { navItems } from "../../../utils/constants";

function Nav() {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setDropDown(!dropDown);

  const initialVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5 } },
  };

  return (
    <>
      <motion.nav
        variants={initialVariant}
        initial="hidden"
        animate="visible"
        className="fixed top-0 z-50 w-full backdrop-blur-lg bg-transparent px-6 md:px-10 py-2 flex items-center justify-between"
      >
        {/* Logo with NavLink */}
        <NavLink
          to="/"
          onClick={() => setDropDown(false)}
          className="cursor-pointer"
        >
          <img src={defcommlogo} alt="Defcomm Logo" className="w-32 md:w-40" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map(({ path, name, external }, index) => (
            <motion.li
              key={index}
              className="text-sm"
              whileHover={{ scale: 1.04 }}
            >
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white cursor-pointer"
                >
                  {name}
                </a>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-white cursor-pointer ${isActive ? "font-bold" : ""}`
                  }
                >
                  {name}
                </NavLink>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Login Button (Desktop only) */}
        <motion.a
          href="https://defcomm.vercel.app/"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
          className="hidden lg:block bg-white text-gray-700 px-6 py-2 rounded-full shadow-md font-medium"
        >
          Login
        </motion.a>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleClick}
          className="lg:hidden cursor-pointer text-white"
          aria-label="Toggle menu"
        >
          {dropDown ? <MdClose size={24} /> : <FaBarsStaggered size={24} />}
        </div>
      </motion.nav>

      {/* Mobile Menu - vertical dropdown below nav */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={
          dropDown ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-black bg-opacity-90 text-white flex flex-col items-start py-4 px-6 space-y-4"
      >
        {navItems.map(({ path, name, external }, index) =>
          external ? (
            <li key={index} className="w-full">
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDropDown(false)}
                className="block w-full cursor-pointer hover:bg-lime-800 p-3 rounded transition"
              >
                {name}
              </a>
            </li>
          ) : (
            <li key={index} className="w-full">
              <NavLink
                to={path}
                onClick={() => {
                  navigate(path);
                  window.scrollTo(0, 0);
                  setDropDown(false);
                }}
                className={({ isActive }) =>
                  `block w-full cursor-pointer p-3 rounded transition hover:bg-lime-800 ${
                    isActive ? "bg-lime-800 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          )
        )}

        {/* Login Button in mobile menu */}
        <li className="w-full">
          <motion.a
            href="https://defcomm.vercel.app/"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="block bg-white text-gray-700 px-6 py-2 rounded-full shadow-md font-medium text-center"
            onClick={() => setDropDown(false)}
          >
            Login
          </motion.a>
        </li>
      </motion.ul>
    </>
  );
}

export default Nav;
