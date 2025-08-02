// import Nav from "../../components/landing/Header/Nav";
// import Footer from "../../components/landing/Footer/Footer";
import phoneProduct from "../../assets/landing/phoneProduct.png";
import computerProduct from "../../assets/landing/computerProduct.png";
import tabProduct from "../../assets/landing/tabProduct.png";
import girlHoldingPhone from "../../assets/landing/girlholdingphone.png";
import phoneIllustration from "../../assets/phone.png";
import ultraLaptop from "../../assets/laptop.png";
import portableSecurity from "../../assets/portable.png";
import FeaturedPartners from "../../components/FeaturedPartners";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className=" flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#36460A] to-black text-white pb-10 pt-20  overflow-hidden">
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
              <Link to="/hardware">
                <button className="bg-[#36460A] text-white px-12 py-3 rounded-full font-semibold">
                  Buy Now
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Ultra-Secure Laptop Section */}
      <section className="w-full bg-[#1A2203] py-20 px-6 md:px-20">
        <div className="max-w-peak mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm text-[#DDF2AB] mb-2">
              Military | Government | INTEL Agency
            </p>
            <h2 className="text-[#DDF2AB] text-3xl font-semibold mb-4">
              Defcomm BlackVault
            </h2>
            <p className="text-white mb-6 leading-[1.8]">
              Built for professionals operating in high-risk environments, the
              Defcomm BlackVault combines elite security with uncompromised
              performance. Featuring advanced encryption, biometric access, and
              real-time threat isolation, it’s mission-ready whether you’re in
              the office, on the move, or deployed in the field.
            </p>
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-2">Key Features</h4>
              <ul className="list-disc pl-5 text-white">
                <li>Full end-to-end OS encryption</li>
                <li>Biometric access with secure bootloader</li>
                <li>Offline emergency lockdown protocols</li>
                <li>Live system threat detection and isolatio</li>
              </ul>
            </div>
            <Link to="/software">
              <button className="text-[#000000] bg-[#C6FC2B] px-8 py-3 rounded-full font-semibold">
                Explore Software
              </button>
            </Link>
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
            Portable security.
            <br />
            Always within reach.
          </h2>
          <p className="text-[#121417] mb-6 leading-[1.8]">
            The Defcomm ShieldPad is your ultra-light, hardened command
            terminal—built for field mobility, VVIP oversight, incident capture,
            and secure data handling. Engineered for seamless integration with
            the DefComm ecosystem, it offers encrypted cloud sync, real-time
            tamper detection, and a clean, intuitive interface.
          </p>
          <div className="mb-8">
            <h4 className="text-[#121417] font-semibold mb-2">
              Core Capabilities:
            </h4>
            <ul className="list-disc pl-5 text-[#121417]">
              <li>AES-256 full-stack encryption (OS + apps)</li>
              <li>
                Dual-layer protection: biometric auth + physical kill-switch
              </li>
              <li>Rapid lockdown mode for emergency scenarios</li>
              <li>18-hour battery life with solar-assist charging</li>
            </ul>
            <p className="text-[#121417] mb-6 mt-3 leading-[1.8]">
              When security can't fail and mobility is mission-critical, the
              Defcomm ShieldPad delivers.
            </p>
          </div>
          <button className="bg-[#36460A] text-white  px-8 py-3 rounded-full font-semibold">
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
