import React, {useState } from "react";
import BrowserHeader from "../components/BrowserHeader/BrowserHeader";
import BrowserFooter from "../components/BrowserHeader/BrowserFooter";
import windowsImg from "../assets/windows.png";
import macImg from "../assets/mac.png";
import androidImg from "../assets/android.png";
import linuxImg from "../assets/linux.png";
import mockupImg from "../assets/mockup.png";
import phoneImg from "../assets/browser-phone.png";

const Card = ({ img, title, description }) => (
  <div className="bg-[#172012] border border-[#233016] rounded-xl p-6 shadow-md flex flex-col items-center gap-4 hover:translate-y-[-4px] transition-transform text-center">
    <img src={img} alt={title} className="w-20 h-20 object-contain" />
    <h4 className="text-white text-xl font-semibold mt-2">{title}</h4>
    <p className="text-[#cfd9c1] text-sm flex-1">{description}</p>
    <button className="bg-[#89AF20] text-white px-6 py-2 rounded-md font-semibold">Download Defcomm</button>
  </div>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What is a Defcomm Browser?",
      answer: "Defcomm Browser is a privacy-first web browser designed to protect your data and online activities. It blocks trackers, encrypts your connection, and ensures your browsing remains private and secure."
    },
    {
      question: "Who can use Defcomm Browser?",
      answer: "Anyone can use Defcomm Browser! Whether you're a privacy enthusiast, professional, or just someone who values their security, Defcomm works for everyone on Windows, Mac, Android, and Linux."
    },
    {
      question: "How is Defcomm Browser different from other browsers?",
      answer: "Defcomm Browser combines military-grade encryption, built-in tracker blocking, optimized performance, and a focus on user privacy—all without compromising your browsing speed or experience."
    },
    {
      question: "Does Defcomm collect my data?",
      answer: "No. Defcomm Browser does not collect, store, or share your browsing data. Your privacy is our priority, and we operate with zero-knowledge architecture."
    },
    {
      question: "Can I use Defcomm Browser for regular web surfing?",
      answer: "Absolutely! Defcomm Browser is designed for everyday browsing. It's fast, efficient, and secure whether you're checking email, shopping, or streaming content."
    },
    {
      question: "What operating systems support Defcomm Browser?",
      answer: "Defcomm Browser is available on Windows, macOS, Android, and Linux. Download it today and enjoy privacy across all your devices."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white/80 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-4 text-left font-semibold text-[#1a1a1a] flex justify-between items-center hover:bg-white/90 transition"
          >
            <span>{faq.question}</span>
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-[#1a1a1a] text-sm border-t border-gray-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const BrowserHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f140b] to-[#0f1710] text-white flex flex-col">
      <BrowserHeader />

      <main className="max-w-7xl mx-auto px-6 py-20 flex-1 pt-32">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-sm text-[#9fb27a] tracking-wider mb-4">DOWNLOAD</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Browse. Privately. Confidently.</h1>
          <p className="text-[#cfd9c1] mt-4">Defcomm Browser keeps your data private and your browsing experience seamless — without compromise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            img={windowsImg}
            title="Windows"
            description="Stay secure and anonymous on every connection. Defcomm for Windows gives you full-speed browsing with military-grade protection built in."
          />
          <Card
            img={macImg}
            title="MacOS"
            description="Experience privacy with performance. Defcomm for Mac keeps your work and personal data safe — with seamless design for macOS users."
          />
          <Card
            img={androidImg}
            title="Android"
            description="Take Defcomm anywhere. Browse privately, connect securely, and protect your digital footprint — right from your Android device."
          />
          <Card
            img={linuxImg}
            title="Linux"
            description="Built for the privacy purist. Defcomm for Linux delivers uncompromised speed, flexibility, and security for open-source enthusiasts."
          />
        </div>
      </main>

      {/* How Defcomm Optimizes Section */}
      <section className="w-full bg-[#d4e5b5] text-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Defcomm Optimizes and Secures Your Browsing Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-[#1a1a1a] text-white rounded-lg p-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white mb-4">
                <div className="w-3 h-3 rounded-full bg-[#1a1a1a]" />
              </div>
              <h3 className="text-lg font-bold mb-3">Advanced Privacy Protection</h3>
              <p className="text-sm text-[#cfd9c1]">Blocks trackers, prevents cookie injection and fingerprinting scripts — keeping your identity and activity completely private.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#1a1a1a] text-white rounded-lg p-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white mb-4">
                <div className="w-3 h-3 rounded-full bg-[#1a1a1a]" />
              </div>
              <h3 className="text-lg font-bold mb-3">Network Optimization Engine</h3>
              <p className="text-sm text-[#cfd9c1]">Optimizes for faster connections, ensures faster page loads, stable connections, and efficient data use — even on weak networks.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#1a1a1a] text-white rounded-lg p-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white mb-4">
                <div className="w-3 h-3 rounded-full bg-[#1a1a1a]" />
              </div>
              <h3 className="text-lg font-bold mb-3">Built-in Security Shield</h3>
              <p className="text-sm text-[#cfd9c1]">Real-time threat detection protects against malicious sites, phishing attempts, and insecure connections — automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Browsing Section */}
      <section className="w-full bg-[#0f1710] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Browsing.<br />Without Compromise.</h2>
              <p className="text-[#cfd9c1] mb-6">Experience the next generation of privacy-focused browsing. Defcomm Browser encrypts your connection, blocks trackers, and ensures your data stays yours — always.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2"><path d="M12 2L22 7v10c0 5-10 7-10 7s-10-2-10-7V7l10-5z"/></svg>
                  <span className="text-[#cfd9c1]">Fast, private, and censorship-free</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2"><path d="M12 2L22 7v10c0 5-10 7-10 7s-10-2-10-7V7l10-5z"/></svg>
                  <span className="text-[#cfd9c1]">Built with military-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2"><path d="M12 2L22 7v10c0 5-10 7-10 7s-10-2-10-7V7l10-5z"/></svg>
                  <span className="text-[#cfd9c1]">Trusted by thousands of secure users</span>
                </div>
              </div>

              <button className="bg-[#89AF20] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#7a9518] transition">Download Defcomm</button>
            </div>

            {/* Right Mockup */}
            <div className="flex justify-center">
              {/* <div className="relative bg-gradient-to-br from-[#1a2015] to-[#0f1710] rounded-xl border border-[#233016] p-4 shadow-2xl max-w-md">
                <div className="bg-[#0a0f08] rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs text-[#89AF20]">Secure Server</div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#89AF20]" />
                      <div className="w-2 h-2 rounded-full bg-[#89AF20]" />
                      <div className="w-2 h-2 rounded-full bg-[#89AF20]" />
                    </div>
                  </div>
                  <div className="h-32 bg-[#172012] rounded flex items-center justify-center">
                    <div className="text-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2" className="mx-auto mb-2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      <p className="text-[#89AF20] text-xs font-semibold">Explore Securely</p>
                    </div>
                  </div>
                  <div className="text-xs text-[#666] mt-3">
                    <p>Connection encrypted and verified.</p>
                    <p>No trackers detected. Data secure.</p>
                  </div>
                </div>
              </div> */}
              <img src={mockupImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Your Privacy Section */}
      <section className="w-full bg-[#0f1710] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xs">
                <img src={phoneImg} alt="Phone Mockup" className="w-full" />
              </div>
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Privacy. One Tap Away.</h2>
              <p className="text-[#cfd9c1] mb-6">Control your privacy settings with a single tap. Defcomm Browser puts power in your hands, letting you customize encryption, block trackers, and manage permissions — all from an intuitive interface.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2" className="mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#cfd9c1]">One-tap privacy controls</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2" className="mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#cfd9c1]">Personal of anonymously</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#89AF20" strokeWidth="2" className="mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[#cfd9c1]">Lightweight, fast and reliable</span>
                </div>
              </div>

              <button className="bg-[#89AF20] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#7a9518] transition">Download Defcomm App</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#d4e5b5] text-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <BrowserFooter />
    </div>
  );
};

export default BrowserHome;
