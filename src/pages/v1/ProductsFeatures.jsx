// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Nav from "../../components/landing/Header/Nav";
import Footer from "../../components/landing/Footer/Footer";
import tripple from "../../assets/landing/tripple.png";
import fingerprint from "../../assets/landing/fingerprint.png";
import vault from "../../assets/landing/vault.png";
import grade1 from "../../assets/landing/grade1.png";
import grade2 from "../../assets/landing/grade2.png";
import grade3 from "../../assets/landing/grade3.png";
import grade4 from "../../assets/landing/grade4.png";
import grade5 from "../../assets/landing/grade5.png";
import grade6 from "../../assets/landing/grade6.png";
import biometrics from "../../assets/landing/biometrics.png";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const ProductsFeatures = () => {
  const fullText = "Designed for Operatives. Desired by Visionaries.";
  const staticPart = "Designed for Operatives. Desired by ";
  const highlightPart = "Visionaries.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (isTyping) {
      // Typing phase
      if (index < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        }, 100); // Typing speed: 100ms per character
      } else {
        // Pause after typing
        timer = setTimeout(() => {
          setIsTyping(false);
          setIndex(fullText.length - 1);
        }, 2000); // Pause for 2 seconds
      }
    } else {
      // Clearing phase
      if (index >= 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, index));
          setIndex((prev) => prev - 1);
        }, 50); // Clearing speed: 50ms per character
      } else {
        // Restart typing
        timer = setTimeout(() => {
          setIsTyping(true);
          setIndex(0);
        }, 500); // Pause for 0.5 seconds before restarting
      }
    }

    return () => clearTimeout(timer); // Cleanup timeout
  }, [index, isTyping, fullText]);

  return (
    <div>
       <Helmet>
        <title>Defcomm® Technology | End-to-End Encryption, Secure Systems & Privacy</title>
        <meta
          name="description"
          content="Explore Defcomm® technology powering next-gen security end-to-end encryption, secure boot, air-gapped architecture, and cryptographic communication protocols. Built for military, enterprise, and government use."
        />
      </Helmet>
    <div className="min-h-screen flex flex-col bg-[#141413]">
      {/* <Nav /> */}
      {/* Hero Section */}
      <section className="w-full pb-20 px-4 md:px-0 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl md:text-4xl font-normal mx-auto max-w-xl text-center mb-8 mt-8 md:mt-12"
        >
          {displayedText.length <= staticPart.length ? (
            displayedText
          ) : (
            <>
              {staticPart}
              <span className="text-[#C6FC2B]">
                {displayedText.slice(
                  staticPart.length,
                  staticPart.length + highlightPart.length
                )}
              </span>
            </>
          )}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <img
            src={tripple}
            alt="Defcomm Devices"
            className="h-40 md:h-56 object-contain"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#DDF2AB] text-2xl md:text-3xl font-normal text-center mb-4"
        >
          Encrypted.Invisible.Yours.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-200 text-center mb-10 max-w-2xl mx-auto"
        >
          Defcomm devices don’t just secure your data—they safeguard your entire
          digital identity. With onboard AI, biometric access, and air-gapped
          architecture, you stay connected without ever being exposed
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full flex justify-center"
        >
          <div className="bg-[#CAF9B5] rounded-xl w-full max-w-4xl p-6 md:p-10">
            <table className="w-full text-left text-[#36460A] text-base">
              <tbody>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Os</td>
                  <td className="py-3">DefOS (Hardened Android)</td>
                </tr>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Encryption</td>
                  <td className="py-3">RSA 4096-bit + IDEA</td>
                </tr>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Display</td>
                  <td className="py-3">5.7" Gorilla Glass</td>
                </tr>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Memory</td>
                  <td className="py-3">6GB RAM / 128GB Storage</td>
                </tr>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Connectivity</td>
                  <td className="py-3">4G LTE, GPS, Wi-Fi, BT</td>
                </tr>
                <tr className="border-b border-[#36460A]/30">
                  <td className="py-3 font-semibold">Battery</td>
                  <td className="py-3">5000mAh</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Security</td>
                  <td className="py-3">Biometric + Tamper Sensors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
      {/* Features Grid Section */}
      <section className="w-full px-6 md:px-40 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-white text-xl md:text-4xl font-normal text-left mb-20 max-w-xl"
        >
          Built for the few who can’t afford failure—only precision, privacy,
          and control.
        </motion.h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              src: grade1,
              alt: "Military-Grade Encryption",
              text: "Military-Grade<br />Encryption",
              bg: "#BCD6D4",
              textColor: "#36460A",
            },
            {
              src: grade2,
              alt: "Push-To-Talk",
              text: "Push-To-Talk<br />(Secure Audio)",
              bg: "white",
              textColor: "#36460A",
              offset: "-mt-8",
            },
            {
              src: grade3,
              alt: "End-To-End Messaging",
              text: "End-To-End<br />Messaging",
              bg: "#36460A",
              textColor: "white",
            },
            {
              src: grade4,
              alt: "Offline AI Assistant",
              text: "Offline AI Assistant<br />(iSurvive)",
              bg: "#83CD9C",
              textColor: "#36460A",
            },
            {
              src: grade5,
              alt: "Emergency Wipe Switch",
              text: "Emergency Wipe<br />Switch",
              bg: "#29322C",
              textColor: "white",
            },
            {
              src: grade6,
              alt: "Signal Blocking Mode",
              text: "Signal Blocking<br />Mode",
              bg: "#759719",
              textColor: "#36460A",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              style={{ backgroundColor: item.bg }}
              className={` !important rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg ${
                item.offset || ""
              }`}
            >
              <img src={item.src} alt={item.alt} className="h-[120px] mb-4" />
              <div
                style={{ color: item.textColor }}
                className="text-center text-base font-medium"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </motion.div>
          ))}
        </div>
      </section>
      {/* Security, Privacy, and Encryption Section */}
      <section className="w-full px-4 md:px-0 pb-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Security .Privacy
          <br />
          <span className="text-[#89AF20]">And Encryption.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl grid grid-rows-3 gap-10 bg-transparent"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center p-5 px-10 col-span-2 border-r-[1px] border-[#89AF20]"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Your favorite apps
              </h3>
              <p className="text-[#A1A1A6] font-bold">
                Engineered for both speed and security, Defcomm Biometric is
                your front line against unauthorised access where identity is
                your strongest password.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center p-5"
            >
              <img src={fingerprint} alt="Biometrics" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px]">
                Biometrics
              </span>
            </motion.div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center p-5 border-r-[1px] border-[#89AF20]"
            >
              <img src={vault} alt="Secured mode" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px] mb-2">
                Secured mode
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center col-span-2 p-5 px-10"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Only secured apps
              </h3>
              <p className="text-[#A1A1A6] font-bold">
                Encrypted apps built in—keeping your data and communications
                fully private.
              </p>
            </motion.div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center col-span-2 p-5 px-10 border-r-[1px] border-[#89AF20]"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Secured data transfer
              </h3>
              <p className="text-[#A1A1A6] font-bold mb-2">
                Access your files anytime, anywhere, on any device—securely.
                <br />
                <span className="font-bold text-white">
                  Decentralized storage, protected by private key authentication
                  and AES-256 encryption, ensures your data stays safe and under
                  your control.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center p-8"
            >
              <img src={biometrics} alt="Biometrics" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px]">
                Biometrics
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* <Footer /> */}
    </div>
    </div>
  );
};

export default ProductsFeatures;
