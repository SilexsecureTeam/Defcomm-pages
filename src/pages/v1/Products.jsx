import Nav from "../../components/landing/Header/Nav";
import Footer from "../../components/landing/Footer/Footer";
import phoneProduct from "../../assets/landing/phoneProduct.png";
import computerProduct from "../../assets/landing/computerProduct.png";
import tabProduct from "../../assets/landing/tabProduct.png";
import girlHoldingPhone from "../../assets/landing/girlholdingphone.png";
import phoneIllustration from "../../assets/landing/labelledPhone.png";
import ultraLaptop from "../../assets/landing/ultra-laptop.png";
import portableSecurity from "../../assets/landing/portable-security.png";
import FeaturedPartners from "../../components/FeaturedPartners";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#36460A] to-black text-white pb-10 pt-20 md:pt-[120px] overflow-hidden">
        <div className="max-w-peak mx-auto px-4 flex flex-col items-center">
          <div className="flex justify-center gap-4 mb-10">
            <img
              src={phoneProduct}
              alt="Phone Product"
              className="h-28 md:h-36 object-contain"
            />
            <img
              src={computerProduct}
              alt="Computer Product"
              className="h-30 md:h-40 object-contain"
            />
            <img
              src={tabProduct}
              alt="Tab Product"
              className="h-28 md:h-36 object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-normal md:max-w-[55%] text-center mb-6">
            Built for Security. Designed for the Field. Trusted by
            Professionals.
          </h1>
          <p className="text-base md:text-lg text-center mb-10 max-w-2xl">
            Explore our range of advanced products—from encrypted communication
            devices to tactical surveillance systems and mission-ready
            protective gear.
          </p>
        </div>
      </section>
      {/* Security, Privacy Section */}
      <section className="w-full bg-[#000] mx-auto px-6 md:px-20 !pr-0 ">
        <div className="max-w-peak mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-[#DDF2AB] text-4xl md:min-w-[120%] font-normal mb-4">
              Security, Privacy And Confidentiality
            </h2>
            <p className="text-gray-200 md:text-lg md:min-w-[120%]">
              Explore our range of advanced products—from encrypted
              communication devices to tactical surveillance systems and
              mission-ready protective gear.
            </p>
          </div>
          <div className="flex-1 flex justify-center !min-w-[60%]">
            <img src={girlHoldingPhone} alt="Product" className="w-full" />
          </div>
        </div>
      </section>
      {/* Security Beyond Encryption Section */}
      <section className="w-full bg-[#F7F8F6] py-20 px-6 md:px-20">
        <div className="max-w-peak mx-auto">
          <h2 className="text-[#36460A] text-4xl font-semibold mb-20 text-center">
            Security Beyond Encryption
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-[120px]">
            <div className="flex-1 flex justify-center items-center">
              <img src={phoneIllustration} alt="" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#36460A] mb-6 text-center md:text-left">
                Military | Government | INTEL Agency
              </p>
              <h3 className="text-[#36460A] text-3xl font-semibold mb-6 text-center md:text-left">
                Security-First Hardware
              </h3>
              <p className="text-[#121417] mb-8 text-center md:text-left leading-[1.8] md:max-w-[90%]">
                In an era where cyber threats are constantly evolving, having a
                secure foundation is more critical than ever. Our security-first
                hardware is engineered to provide uncompromising protection,
                ensuring the highest level of data integrity, privacy, and
                resilience against potential threats. From military operations
                to critical infrastructure and government agencies, our
                security-first hardware is trusted to deliver unmatched
                protection where it matters most.
              </p>
              <button className="bg-[#36460A] text-white px-12 py-3 rounded-full font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Ultra-Secure Laptop Section */}
      <section className="w-full bg-[#E6F6C7] py-20 px-6 md:px-20">
        <div className="max-w-peak mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm text-[#36460A] mb-2">
              Military | Government | INTEL Agency
            </p>
            <h2 className="text-[#36460A] text-3xl font-semibold mb-4">
              Ultra-Secure Laptop
            </h2>
            <p className="text-[#121417] mb-6 leading-[1.8]">
              Engineered with advanced encryption, biometric access, and onboard
              threat isolation, the SecureBook Pro is built for professionals
              who demand top-tier security without compromising speed or
              functionality. Whether you're in the office, on the field, or in
              transit, this device ensures seamless communication with
              uncompromising protection.
            </p>
            <div className="mb-8">
              <h4 className="text-[#36460A] font-semibold mb-2">
                Key Features
              </h4>
              <ul className="list-disc pl-5 text-[#36460A]">
                <li>End-to-end encrypted OS</li>
                <li>Secure bootloader and biometric lock</li>
                <li>Offline emergency protocols</li>
                <li>Real-time system threat monitoring</li>
              </ul>
            </div>
            <button className="bg-[#000000] text-white px-8 py-3 rounded-full font-semibold">
              Buy Now
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src={ultraLaptop}
              alt="Ultra-Secure Laptop"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>
      {/* Portable Security Section */}
      <section className="max-w-peak mx-auto w-full bg-[#fff] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={portableSecurity}
            alt="Portable Security Device"
            className="w-full object-contain"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-[#36460A] mb-2">
            Military | Government | INTEL Agency
          </p>
          <h2 className="text-[#36460A] text-3xl font-semibold mb-4">
            Portable Security.
            <br />
            Always Within Reach.
          </h2>
          <p className="text-[#121417] mb-6 leading-[1.8]">
            The VaultTab S1 is your lightweight, secure command center — ideal
            for on-the-go operations, VVIP monitoring, remote incident logging,
            or secure document handling. It integrates smoothly with other
            DefComm devices, offering encrypted cloud sync, tamper alerts, and a
            user-friendly interface.
          </p>
          <div className="mb-8">
            <h4 className="text-[#36460A] font-semibold mb-2">Key Features</h4>
            <ul className="list-disc pl-5 text-[#36460A]">
              <li>AES-256 encrypted OS & app layer</li>
              <li>Biometric + physical kill-switch protection</li>
              <li>Device lockdown mode for emergency use</li>
              <li>Up to 18hr battery life with solar assist</li>
            </ul>
          </div>
          <button className="bg-[#36460A] text-white px-8 py-3 rounded-full font-semibold">
            Buy Now
          </button>
        </div>
      </section>
      <FeaturedPartners />
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
