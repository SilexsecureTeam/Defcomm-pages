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

const ProductsFeatures = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#141413]">
      {/* <Nav /> */}
      {/* Hero Section */}
      <section className="w-full  pb-20 px-4 md:px-0 flex flex-col items-center">
        <h1 className="text-white text-2xl md:text-4xl font-normal mx-auto max-w-xl text-center mb-8 mt-8 md:mt-12">
          Designed for Operatives. Desired by{" "}
          <span className="text-[#C6FC2B]">Visionaries.</span>
        </h1>
        <div className="flex justify-center mb-8">
          <img
            src={tripple}
            alt="Defcomm Devices"
            className="h-40 md:h-56 object-contain"
          />
        </div>
        <h2 className="text-[#DDF2AB] text-2xl md:text-3xl font-normal text-center mb-4">
          Encrypted.Invisible.Yours.
        </h2>
        <p className="text-gray-200 text-center mb-10 max-w-2xl mx-auto">
          Defcomm devices are designed to protect not just your data, but your
          entire digital identity. With built-in AI, biometric control, and
          air-gapped architecture, you're always connected — and never exposed.
        </p>
        <div className="w-full flex justify-center">
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
        </div>
      </section>
      {/* Features Grid Section */}
      <section className="w-full px-6 md:px-40 pb-20">
        <h2 className="text-white text-xl md:text-3xl font-normal text-left mb-20 max-w-xl">
          We Built It For The Few Who Need Everything To Work — Flawlessly,
          Privately, And Without Compromise.
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#BCD6D4] rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg">
            <img
              src={grade1}
              alt="Military-Grade Encryption"
              className="h-[120px] mb-4"
            />
            <div className="text-[#36460A] text-center text-base font-medium">
              Military-Grade <br /> Encryption
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg -mt-8">
            <img src={grade2} alt="Push-To-Talk" className="h-[120px] mb-4" />
            <div className="text-[#36460A] text-center text-base font-medium">
              Push-To-Talk <br /> (Secure Audio)
            </div>
          </div>
          <div className="bg-[#36460A] rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg">
            <img
              src={grade3}
              alt="End-To-End Messaging"
              className="h-[120px] mb-4"
            />
            <div className="text-white text-center text-base font-medium">
              End-To-End <br /> Messaging
            </div>
          </div>
          <div className="bg-[#83CD9C] rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg">
            <img
              src={grade4}
              alt="Offline AI Assistant"
              className="h-[120px] mb-4"
            />
            <div className="text-[#36460A] text-center text-base font-medium">
              Offline AI Assistant <br /> (iSurvive)
            </div>
          </div>
          <div className="bg-[#29322C] rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg">
            <img
              src={grade5}
              alt="Emergency Wipe Switch"
              className="h-[120px] mb-4"
            />
            <div className="text-white text-center text-base font-medium">
              Emergency Wipe <br /> Switch
            </div>
          </div>
          <div className="bg-[#759719] rounded-xl flex flex-col items-center justify-center p-10 pt-8 h-[280px] shadow-lg">
            <img
              src={grade6}
              alt="Signal Blocking Mode"
              className="h-[120px] mb-4"
            />
            <div className="text-[#36460A] text-center text-base font-medium">
              Signal Blocking <br /> Mode
            </div>
          </div>
        </div>
      </section>
      {/* Security, Privacy, and Encryption Section */}
      <section className="w-full px-4 md:px-0 pb-20 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
          Security .Privacy
          <br />
          <span className="text-[#89AF20]">And Encryption.</span>
        </h2>
        <div className="w-full max-w-4xl grid grid-rows-3 gap-10 bg-transparent">
          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <div className="flex flex-col justify-center p-5 px-10 col-span-2 border-r-[1px] border-[#89AF20]">
              <h3 className="text-white text-lg font-semibold mb-2">
                Your favorite apps
              </h3>
              <p className="text-[#A1A1A6] font-bold hidden">
                Regular apps for your daily activities when it comes to
                communication and keeping in touch with friends and family.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-5">
              <img src={fingerprint} alt="Biometrics" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px]">
                Biometrics
              </span>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <div className="flex flex-col items-center justify-center p-5 border-r-[1px] border-[#89AF20]">
              <img src={vault} alt="Secured mode" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px] mb-2">
                Secured mode
              </span>
            </div>
            <div className="flex flex-col justify-center col-span-2  p-5 px-10 ">
              <h3 className="text-white text-lg font-semibold mb-2">
                Only secured apps
              </h3>
              <p className="text-[#A1A1A6] font-bold">
                Integrated encrypted apps that make sure your confidential data
                and communication are kept private.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 border-b-[1px] border-[#89AF20]">
            <div className="flex flex-col justify-center col-span-2  p-5 px-10 border-r-[1px] border-[#89AF20]">
              <h3 className="text-white text-lg font-semibold mb-2">
                Secured data transfer
              </h3>
              <p className="text-[#A1A1A6] font-bold mb-2">
                Enabled access for your files at any time, anywhere and from any
                device.
                <br />
                <span className="font-bold text-white">
                  Encryption and security are ensured by the decentralised
                  storage that utilises Private Key and AES-256 encryption
                  algorithm.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <img src={biometrics} alt="Biometrics" className="h-24 mb-2" />
              <span className="text-white font-bold text-[22px]">
                Biometrics
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsFeatures;
