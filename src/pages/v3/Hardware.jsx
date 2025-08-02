import React from "react";
import hardware from "../../assets/hardware.png";
import about from "../../assets/make.png";
import arrow from "../../assets/arrow.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const features = [
  {
    title: "No Central Key Storage",
    text: "Unlike WhatsApp or Signal, where servers may facilitate key exchanges or store backups, DefComm never holds encryption keys. They're generated and stored only on user devices.",
  },
  {
    title: "Metadata Minimization",
    text: " DefComm also strips out message metadata (timestamps, IP addresses, user IDs) wherever possible. Most messaging apps log metadata, even if messages are encrypted.",
  },
  {
    title: "Multi-Layer Encryption",
    text: "Messages may be wrapped in multiple encryption layers (like an onion) if routed through any relays, further protecting content even if a path is compromised",
  },
  {
    title: "Military-Grade Protocols, Civilian-Ready",
    text: " DefComm adapts encryption protocols designed for defense or critical infrastructure, applying them in user friendly form. This gives it a higher security baseline.",
  },
];

const cards = [
  {
    id: 1,
    title: "Killer Switch",
    text: "The Killer Switch is a built-in, hardware-level feature that instantly disables all critical functions of the DefComm device in high-risk or compromised scenarios.",
    subtitle: "Microphone Disabled",
    subtext:
      "Immediately cuts power to the mic, preventing any form of audio capture or surveillance hardware-level lockdown",
    subtitle1: "Camera Disabled",
    subtext1:
      "Both front and rear cameras are shut down. No image or video data can be captured, transmitted, or accessed.",
    subtitle2: "Location Services Disabled",
    subtext2: "GPS and all location-tracking functions are fully disabled. ",
    bg: "bg-[#121417]",
  },
  {
    id: 2,
    title: "Biometric Authentication",
    text: "Defcomm’s biometric system provides hardened identity verification using fingerprint, facial, or iris recognition secured by military-grade encryption and isolated from the main OS for tamper resistance. Designed for zero lag access and high-threat environments, it’s built to verify the right person, every time.",
    bg: "bg-gradient-to-r from-[#121417] to-[#36460A]",
  },
  {
    id: 3,
    title: "Secure Boot & Encrypted Storage",
    text: "Defcomm devices leverage a cryptographically verified secure boot process, ensuring only trusted firmware and operating system components can initialise. From the moment the device powers on, a layered trust chain authenticates each stage preventing boot-kits, rootkits, or unauthorized OS modifications",
    List: "Hardware-anchored root of trust \nTamper-evident bootloader with fail-safe rollback\nRuntime integrity checks to detect injection or manipulation",
    bg: "bg-[#36460A]",
  },
];

const Hardware = () => {
  // Simplified animation variants
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    // Wrapper to counteract potential browser margins without changing styling
    <div className="Hardware-wrapper">
      {/* First Section */}
      <motion.div
        className="min-h-screen bg-[#141413] p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <div className="max-w-peak mx-auto">
          {/* Header */}
          <motion.header
            className="md:text-4xl text-3xl max-w-[450px] font-bold text-white mb-6"
            variants={fadeVariants}
          >
            Core Hardware Features{" "}
            <span className="text-[#89AF20] font-semibold">
              of Defcomm Device
            </span>
          </motion.header>

          {/* Main container */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mt-20 mb-10"
            variants={fadeVariants}
          >
            {/* First Container */}
            <motion.div
              className="flex flex-col justify-between flex-1 p-4 rounded"
              variants={fadeVariants}
            >
              {/* Subcontainer 1 */}
              <motion.div
                className="p-4 rounded text-sm text-[#B8B8B8] mb-4"
                variants={fadeVariants}
              >
                <div className="bg-[#89AF20] w-8 h-8"></div>
                <h2 className="font-bold text-xl my-1">
                  DEFCOMM Killer Switch
                </h2>
                <p>
                  With this switch, users can instantly disable:
                  <ul className="list-disc pl-5 my-2">
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Location Services</li>
                  </ul>
                  <span className="text-[#C6FC2B]">
                    To prevent unauthorized use, ensure no audio recording and
                    disable GPS.
                  </span>
                </p>
              </motion.div>

              {/* Subcontainer 2 */}
              <motion.div
                className="p-4 rounded text-sm text-[#B8B8B8]"
                variants={fadeVariants}
              >
                <div className="bg-[#36460A] w-8 h-8"></div>
                <h2 className="font-bold text-xl my-1">Encrypted Storage</h2>
                <p>On-device encryption ensures all data is protected.</p>
                <div className="my-3">
                  <h2 className="font-bold text-xl my-1">
                    Secure Boot Process:
                  </h2>
                  <p>
                    Prevents unauthorised operating systems or modifications
                    from loading
                  </p>
                </div>

                <p className="text-[#C6FC2B] font-bold text-xl">
                  Communication Protection
                </p>
                <div className="my-3">
                  <h2 className="font-bold text-xl my-1">Signal Blocking:</h2>
                  <p>
                    Signal Blocking: Integrated mechanisms to prevent
                    eavesdropping and signal interception.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Container (Image) */}
            <motion.div
              className="flex-1 rounded flex items-center justify-center"
              variants={fadeVariants}
            >
              <motion.img
                src={hardware}
                alt="Hardware"
                className="object-contain h-full w-full max-h-[650px]"
                variants={fadeVariants}
              />
            </motion.div>

            {/* Third Container */}
            <motion.div
              className="flex-1 p-4 rounded flex items-center justify-center text-[#B8B8B8]"
              variants={fadeVariants}
            >
              <p>
                <span className="font-bold text-xl">Device Security</span>
                <ul className="list-disc pl-5 my-2">
                  <li>
                    <span className="font-bold">
                      USB Detection and Self-Wipe:
                    </span>{" "}
                    Automatically wipes the device if connected to unauthorised
                    peripherals.
                  </li>
                  <li>
                    <span className="font-bold">Biometric Authentication:</span>{" "}
                    Advanced fingerprint and facial recognition for secure
                    access.
                  </li>
                  <li>
                    <span className="font-bold">Remote Management:</span> Remote
                    wipe, lock, and locate in case of lost or stolen devices.
                  </li>
                </ul>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Next Section */}
      <motion.section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <div className="max-w-peak mx-auto grid lg:grid-cols-2 gap-12 lg:items-start">
          {/* Left: Feature badge and heading */}
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-[#36460A] rounded-full"></div>
                <h2 className="text-sm font-semibold text-[#36460A] tracking-widest">
                  ABOUT US
                </h2>
              </div>
            </motion.div>

            {/* Animated Image */}
            <motion.div
              className="w-full h-full flex justify-center items-center"
              variants={fadeVariants}
            >
              <motion.img
                src={about}
                alt="About"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-8 rounded-lg mx-auto"
                variants={fadeVariants}
              />
            </motion.div>
          </div>

          {/* Right: Features grid */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={fadeVariants}
          >
            <div>
              <motion.h2
                className="mb-4 text-2xl sm:text-3xl font-semibold text-[#111111] leading-snug"
                variants={fadeVariants}
              >
                What Makes Defcomm Different
              </motion.h2>

              <motion.div className="flex space-x-3" variants={fadeVariants}>
                <button className="bg-black text-base text-white py-2 px-4 rounded">
                  LEARN MORE
                </button>
                <motion.img
                  src={arrow}
                  alt="Arrow"
                  className="h-10 w-10 cursor-pointer"
                  variants={fadeVariants}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeVariants}
                  className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 space-y-2"
                >
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Third Section */}
      <motion.section
        className="bg-white py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeVariants}
      >
        <div className="p-6 bg-screen min-h-screen">
          <motion.h1
            className="text-3xl font-bold text-center text-black mb-2"
            variants={fadeVariants}
          >
            Zero Compromise on Privacy & Security
          </motion.h1>
          <motion.p
            className="max-w-[830px] mx-auto text-center text-lg mb-8"
            variants={fadeVariants}
          >
            We refuse to choose between convenience and safety. Our technology
            delivers both—end-to-end encryption, strict data minimalism, and
            uncompromising transparency—so you never have to sacrifice one for
            the other.
          </motion.p>
          <div className="max-w-peak mx-auto space-y-6">
            {/* Top 3 Cards */}
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              variants={fadeVariants}
            >
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  className={`flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md ${card.bg}`}
                  variants={fadeVariants}
                >
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-[15px]">{card.text}</p>
                  {card.subtitle && (
                    <div className="text-sm">
                      <p className="mt-4 font-extrabold">{card.subtitle}</p>
                      <p className="font-medium">{card.subtext}</p>
                    </div>
                  )}
                  {card.subtitle1 && (
                    <div className="text-sm">
                      <p className="mt-4 font-extrabold">{card.subtitle1}</p>
                      <p className="font-medium">{card.subtext1}</p>
                    </div>
                  )}
                  {card.subtitle2 && (
                    <div className="text-sm">
                      <p className="mt-4 font-extrabold">{card.subtitle2}</p>
                      <p className="font-medium">{card.subtext2}</p>
                    </div>
                  )}
                  {card.List && (
                    <ul className="list-disc pl-5 mt-2">
                      {card.List.split("\n").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Middle 2 Cards */}
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              variants={fadeVariants}
            >
              <motion.div
                className="flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-l from-[#102735] to-[#B87944]"
                variants={fadeVariants}
              >
                <h2 className="text-2xl font-bold mb-2">
                  Signal Blocking & Device Isolation
                </h2>
                <p className="mb-1 text-[15px]">
                  Designed for maximum operational security, Defcomm’s Signal
                  Blocking and Device Isolation capabilities ensure that no
                  unauthorised transmission, reception, or data leakage can
                  occur whether during transit, field operations, or secure
                  facility use. Defcomm devices are embedded with hardware-based
                  RF shielding and configurable airplane-grade isolation modes.
                  When activated, all wireless interfaces Wi-Fi, Bluetooth,
                  cellular, GPS, NFC are physically and electronically disabled,
                  not just software-muted.
                </p>
              </motion.div>
              <motion.div
                className="flex-1 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-r from-[#102735] to-[#B87944]"
                variants={fadeVariants}
              >
                <h2 className="text-2xl font-bold mb-2">
                  USB & Peripheral Lockdown
                </h2>
                <p className="mb-1 text-[15px]">
                  Prevent unauthorised data transfers and firmware attacks. When
                  enabled, Defcomm blocks all USB ports and external connections
                  unless verified. Attempting to connect unapproved devices will
                  trigger a wipe protocol or full lockdown, adding another line
                  of defence against hardware-based intrusion. Combined with
                  real-time system monitoring and audit logging, this lockdown
                  system ensures complete control over physical interfaces
                  eliminating common vectors for malware injection, data theft,
                  or rogue device access.
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom Full Width Card */}
            <motion.div
              className="p-6 text-[#f5f4f4] px-6 py-12 rounded-lg shadow-md bg-gradient-to-r from-[#121417] to-[#00313A]"
              variants={fadeVariants}
            >
              <h2 className="text-2xl font-bold mb-2">
                Cross-Platform Deployment
              </h2>
              <p className="mb-2 text-[15px]">
                Built for operational flexibility, Defcomm’s Cross-Platform
                Deployment framework ensures seamless integration across diverse
                environments enabling secure, consistent performance whether
                you're operating on Windows, Linux, Android, or hardened custom
                OS platforms. Whether used by executive teams, field agents, or
                secured installations, Defcomm’s cross-platform capability
                ensures mission continuity, streamlined onboarding, and
                uncompromising protection no matter the device or OS.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hardware;
