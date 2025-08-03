import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabData = {
  Dates: (
    <>
      <h3 className="text-[#DDF2AB] text-lg font-semibold mb-6">
        Program Dates
      </h3>
      <div className="mb-6">
        <span className="text-white font-bold">Start Date</span>
        <br />
        <span className="text-gray-200">Coming soon </span>
      </div>
      <div className="mb-6">
        <span className="text-white font-bold">End Date</span>
        <br />
        <span className="text-gray-200">Coming soon </span>
        <br />
        <span className="text-[#C6A24B] text-sm">
          Submissions accepted throughout the month — first come, first
          verified.
        </span>
      </div>
      <button className="bg-[#C6A24B] text-black px-6 py-2 rounded-[16px] mt-2 font-medium shadow hover:bg-[#b8953e] transition">
        Add To Calendar
      </button>
    </>
  ),
  Reward: (
    <>
      <h3 className="text-[#DDF2AB] text-lg font-semibold mb-6">
        Reward Tiers
      </h3>
      <p className="text-gray-200 mb-4">
        Rewards range from <strong>$500 to $50,000+</strong> depending on
        severity, exploitability, and creativity.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Critical RCEs or systemic flaws: Up to $50,000</li>
        <li>Privilege escalations: $5,000–$15,000</li>
        <li>XSS, CSRF, auth issues: $500–$5,000</li>
      </ul>
    </>
  ),
  Rules: (
    <>
      <h3 className="text-[#DDF2AB] text-lg font-semibold mb-6">
        Rules of Engagement
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>No social engineering or physical intrusion</li>
        <li>Attacks must be reproducible</li>
        <li>Target only in-scope domains</li>
        <li>No DDoS or service disruption</li>
      </ul>
    </>
  ),
  Scope: (
    <>
      <h3 className="text-[#DDF2AB] text-lg font-semibold mb-6">
        Scope & Targets
      </h3>
      <p className="text-gray-200 mb-4">
        Full target list will be released before launch. Expect:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Web applications (subdomains, APIs)</li>
        <li>Cloud resources</li>
        <li>Authentication and authorization flows</li>
      </ul>
    </>
  ),
};

const ProgramDetails = () => {
  const [activeTab, setActiveTab] = useState("Dates");

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
      <h2 className="text-[#C6A24B] text-2xl md:text-3xl font-semibold text-center mb-2">
        Program Details
      </h2>
      <p className="text-gray-200 text-center max-w-xl mb-8 text-base">
        Everything you need to know about the Defcomm Live Bug Bounty 2025
        program.
      </p>

      <div className="w-full max-w-3xl">
        {/* Tab Bar */}
        <div className="flex flex-wrap sm:flex-nowrap w-full rounded-[24px] overflow-hidden border border-[#C6A24B] mb-8">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-base font-semibold transition ${
                activeTab === tab
                  ? "bg-[#C6A24B] text-[#111]"
                  : "bg-transparent text-[#C6A24B] hover:bg-[#222]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#181818] border border-[#C6A24B] rounded-[16px] p-6 md:p-8 mt-0 shadow-lg text-sm md:text-base"
          >
            {tabData[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramDetails;
