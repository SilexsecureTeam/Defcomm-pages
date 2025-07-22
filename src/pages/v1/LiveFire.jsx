import { useState, useEffect } from "react";
import defcommlogo from "../assets/landing/Defcomm-03 1.png";
import Footer from "../../components/landing/Footer/Footer";

const LiveFireHeader = () => (
  <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-r from-[#111] to-[#222] z-30">
    <img
      src={defcommlogo}
      alt="Defcomm Logo"
      className="w-[150px] md:w-[250px]"
    />
    <ul className="hidden lg:flex items-center gap-8">
      {[
        { route: "/", label: "Home" },
        { route: "/program-details", label: "Program Details" },
        { route: "/rewards", label: "Rewards" },
        { route: "/rules", label: "Rules" },
        { route: "/faqs", label: "FAQs" },
      ].map((item, idx) => (
        <li key={idx}>
          <a
            href={item.route}
            className="text-white text-sm font-medium hover:text-[#C6FC2B] transition"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    <a
      href="#register"
      className="hidden lg:block bg-white text-gray-700 px-6 py-2 rounded-full shadow-md font-medium"
    >
      Register Now
    </a>
  </nav>
);

const getTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

const LiveFire = () => {
  // Placeholder: July 31, 2025, 12:00:00
  const targetDate = new Date("2025-07-31T12:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111] to-[#222] flex flex-col">
      <LiveFireHeader />
      <main className="flex flex-col items-center justify-center flex-1 pt-28 pb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#AC7C2E]">
          Think you can break us?
          <br />
          <span className="text-[#AC7C2E]">Prove it. Get paid.</span>
        </h1>
        <p className="text-[#fff] text-center max-w-2xl mb-10 text-base md:text-lg">
          We're opening the gates in 2025 for a live-fire bug bounty challenge —
          where top-tier hackers, researchers, and security pros go head-to-head
          with real Defcomm systems in real time. You bring the skills. We bring
          the targets. The clock is ticking.
        </p>
        <div className="flex gap-6 mb-8">
          {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-24 h-20 border-2 border-[#AC7C2E] rounded-lg flex items-center justify-center text-3xl md:text-4xl font-bold text-white bg-transparent">
                {timeLeft[unit]}
              </div>
              <span className="text-xs md:text-sm text-white mt-2 tracking-widest">
                {unit.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="#register"
            className="bg-[#AC7C2E] text-[#fff] px-8 py-3 rounded-xl font-normal text-xl hover:bg-[#AC7C2E] transition"
          >
            REGISTER NOW
          </a>
          <a
            href="#learn"
            className="bg-[#222] text-white px-8 py-3 rounded-xl font-normal text-xl border border-white hover:bg-[#333] transition"
          >
            LEARN MORE
          </a>
        </div>
      </main>
      {/* Program Details Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <h2 className="text-[#C6A24B] text-2xl md:text-3xl font-semibold text-center mb-2">
          Program Details
        </h2>
        <p className="text-gray-200 text-center max-w-xl mb-8 text-base">
          Everything you need to know about the Defcomm Live Bug Bounty 2025
          program. Get ready to test your skills against our systems.
        </p>
        <div className="w-full max-w-3xl mb-8">
          {/* Tab Bar */}
          <div className="flex w-full rounded-[24px] overflow-hidden border border-[#C6A24B] bg-transparent mb-8">
            <button className="flex-1 py-2 text-[#111] bg-[#C6A24B] font-semibold text-base transition">
              Dates
            </button>
            <button className="flex-1 py-2 text-[#C6A24B] bg-transparent font-semibold text-base hover:bg-[#222] transition">
              Reward
            </button>
            <button className="flex-1 py-2 text-[#C6A24B] bg-transparent font-semibold text-base hover:bg-[#222] transition">
              Rules
            </button>
            <button className="flex-1 py-2 text-[#C6A24B] bg-transparent font-semibold text-base hover:bg-[#222] transition">
              Scope
            </button>
          </div>
          {/* Content Card */}
          <div className="bg-[#181818] border border-[#C6A24B] rounded-[16px] p-8 mt-0 shadow-lg">
            <h3 className="text-[#DDF2AB] text-lg font-semibold mb-6">
              Program Dates
            </h3>
            <div className="mb-6">
              <span className="text-white font-bold">Start Date</span>
              <br />
              <span className="text-gray-200">Coming soon – March 2025</span>
            </div>
            <div className="mb-6">
              <span className="text-white font-bold">End Date</span>
              <br />
              <span className="text-gray-200">Coming soon – March 2025</span>
              <br />
              <span className="text-[#C6A24B] text-sm">
                Submissions accepted throughout the month first come, first
                verified.
              </span>
            </div>
            <button className="bg-[#C6A24B] text-black px-6 py-2 rounded-[16px] mt-2 font-medium shadow hover:bg-[#b8953e] transition">
              Add To Calendar
            </button>
          </div>
        </div>
      </section>
      {/* Reward Tiers Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <h2 className="text-[#DDF2AB] text-2xl md:text-3xl font-semibold text-center mb-2">
          Reward Tiers
        </h2>
        <p className="text-gray-200 text-center max-w-xl mb-10 text-base">
          Find bugs, get paid. Our bounty program rewards security researchers
          based on the severity of discovered vulnerabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-8">
          {/* Critical */}
          <div className="bg-[#181818] border border-[#C6A24B] rounded-xl p-8 flex flex-col min-h-[260px]">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#C6A24B] text-white px-4 py-1 rounded-full font-semibold">
                Critical
              </span>
              <span className="text-[#C6A24B] font-bold text-lg">
                $5,000 – $25,000
              </span>
            </div>
            <div className="text-white font-bold mb-2">
              Example vulnerabilities
            </div>
            <ul className="text-gray-200 text-sm list-disc pl-5">
              <li>Remote code execution</li>
              <li>Authentication bypass</li>
              <li>Database compromise</li>
              <li>Privilege escalation</li>
            </ul>
          </div>
          {/* High */}
          <div className="bg-[#181818] border border-[#C6A24B] rounded-xl p-8 flex flex-col min-h-[260px]">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#C6A24B] text-white px-4 py-1 rounded-full font-semibold">
                High
              </span>
              <span className="text-[#C6A24B] font-bold text-lg">
                $5,000 – $25,000
              </span>
            </div>
            <div className="text-white font-bold mb-2">
              Example vulnerabilities
            </div>
            <ul className="text-gray-200 text-sm list-disc pl-5">
              <li>Sensitive data exposure</li>
              <li>Stored XSS</li>
              <li>CSRF with significant impact</li>
              <li>Business logic flaws</li>
            </ul>
          </div>
          {/* Medium */}
          <div className="bg-[#181818] border border-[#89AF20] rounded-xl p-8 flex flex-col min-h-[260px]">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#89AF20] text-white px-4 py-1 rounded-full font-semibold">
                Medium
              </span>
              <span className="text-[#89AF20] font-bold text-lg">
                $500 – $2,000
              </span>
            </div>
            <div className="text-white font-bold mb-2">
              Example vulnerabilities
            </div>
            <ul className="text-gray-200 text-sm list-disc pl-5">
              <li>Reflected XSS</li>
              <li>CSRF with limited impact</li>
              <li>Server misconfiguration</li>
              <li>Information disclosure</li>
            </ul>
          </div>
          {/* Low */}
          <div className="bg-[#181818] border border-[#1C2C3C] rounded-xl p-8 flex flex-col min-h-[260px]">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#1C2C3C] text-white px-4 py-1 rounded-full font-semibold">
                Low
              </span>
              <span className="text-[#1C2C3C] font-bold text-lg">
                Swag + Recognition
              </span>
            </div>
            <div className="text-white font-bold mb-2">
              Example vulnerabilities
            </div>
            <ul className="text-gray-200 text-sm list-disc pl-5">
              <li>Minor security misconfigurations</li>
              <li>Lack of security headers</li>
              <li>Non-sensitive information disclosure</li>
              <li>UI/UX security improvements</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 text-center text-sm max-w-2xl mt-4">
          All payouts are subject to verification and validation by our security
          team.
          <br />
          First reporter of a unique issue receives the bounty.
        </p>
      </section>
      {/* Rules of Engagement Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <div className="mb-4 flex flex-col items-center">
          <span className="border border-[#C6A24B] rounded-full px-4 py-1 text-xs text-[#C6A24B] mb-3">
            Rules of Engagement
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2">
            <span className="text-[#C6A24B]">Play</span>{" "}
            <span className="text-white">By The Rules</span>
          </h2>
          <p className="text-gray-200 text-center max-w-2xl text-base mb-4">
            Our bug bounty program has clear guidelines to ensure fair play and
            protect our systems. Violation of these rules may result in
            disqualification.
          </p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* What's Not Allowed */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              What's Not Allowed
            </h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="bg-[#181818] border border-[#C24B4B] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C24B4B]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C24B4B"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8l8 8M16 8l-8 8"
                      stroke="#C24B4B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    No social engineering
                  </div>
                  <div className="text-gray-200 text-sm">
                    Do not attempt to manipulate Defcomm employees or users into
                    revealing sensitive information or performing actions.
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#181818] border border-[#C24B4B] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C24B4B]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C24B4B"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8l8 8M16 8l-8 8"
                      stroke="#C24B4B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    No DDoS attacks
                  </div>
                  <div className="text-gray-200 text-sm">
                    Denial of service attacks are strictly prohibited and will
                    result in immediate disqualification.
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#181818] border border-[#C24B4B] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C24B4B]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C24B4B"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8l8 8M16 8l-8 8"
                      stroke="#C24B4B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    No physical attacks
                  </div>
                  <div className="text-gray-200 text-sm">
                    Physical security testing is out of scope. Focus on digital
                    assets only.
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[#181818] border border-[#C24B4B] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C24B4B]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#C24B4B"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 8l8 8M16 8l-8 8"
                      stroke="#C24B4B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    Protect user data
                  </div>
                  <div className="text-gray-200 text-sm">
                    Do not access, modify, or delete user data. If you encounter
                    user data, stop and report immediately.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* What's Required */}
          <div>
            <h3 className="text-[#89AF20] text-lg font-semibold mb-4">
              What's Required
            </h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="bg-[#181818] border border-[#89AF20] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#89AF20]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#89AF20"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 12l3 3 5-5"
                      stroke="#89AF20"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    Report privately
                  </div>
                  <div className="text-gray-200 text-sm">
                    All vulnerabilities must be reported through our secure
                    disclosure platform. No public disclosure until authorized.
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#181818] border border-[#89AF20] rounded-xl p-6 flex gap-4 items-start">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#89AF20]/20">
                  <svg width="24" height="24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#89AF20"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 12l3 3 5-5"
                      stroke="#89AF20"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-white font-bold mb-1">
                    Include proof-of-concept
                  </div>
                  <div className="text-gray-200 text-sm">
                    All reports must include detailed reproduction steps and a
                    complete proof-of-concept.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best Practices Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <div className="w-full max-w-5xl">
          <div className="bg-[#181818] border border-[#89AF20] rounded-xl p-8">
            <div className="text-[#89AF20] font-bold text-lg mb-6">
              Best Practices
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[#89AF20] text-base">
              <div>
                <div className="mb-4">1. Test only within designated scope</div>
                <div className="mb-4">
                  2. Report issues as soon as they're discovered
                </div>
                <div className="mb-4">
                  3. Respect rate limits and avoid automated scanning tools
                  without permission
                </div>
              </div>
              <div>
                <div className="mb-4">4. Document your findings thoroughly</div>
                <div className="mb-4">5. One vulnerability per report</div>
                <div className="mb-4">
                  6. Maintain confidentiality of all findings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section - Updated to match design */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <h2 className="text-[#DDF2AB] text-3xl md:text-5xl font-semibold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-white text-center max-w-2xl text-base mb-8">
          Find answers to common questions about the Defcomm Live Bug Bounty
          2025 program. Can't find what you're looking for? Contact us directly.
        </p>
        <div className="w-full max-w-3xl flex flex-col gap-2">
          {/*
            Updated FAQ items to match the provided design:
            - Large green heading
            - White subtitle
            - Single-line questions with green underline and chevron icon
            - Clean and minimal style
          */}
          {/*
            Note: The actual answers to the FAQs are not provided in the code block.
            You may need to add the answer content as per your requirements.
          */}
          {/*
            Example FAQ item structure:
            <div className="w-full">
              <div className="flex items-center justify-between py-5">
                <span className="text-white text-base md:text-lg">Your question here?</span>
                <svg width="24" height="24" fill="none" className="text-[#DDF2AB]">
                  <path d="M8 10l4 4 4-4" stroke="#DDF2AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="border-b border-[#DDF2AB]" />
            </div>
          */}
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                How Do I Register For The Defcomm Live Bug Bounty 2025?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                What Types Of Vulnerabilities Are Eligible For Rewards?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                How Are Bounty Amounts Determined?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                How Long Does It Take To Review My Submission?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                Can I Participate In The Program Remotely?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                What Happens If Multiple Researchers Report The Same
                Vulnerability?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                Are There Any Tools Or Techniques That Are Prohibited?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-5">
              <span className="text-white text-base md:text-lg">
                Will I Be Able To Publicly Disclose The Vulnerabilities I Find?
              </span>
              <svg
                width="24"
                height="24"
                fill="none"
                className="text-[#DDF2AB]"
              >
                <path
                  d="M8 10l4 4 4-4"
                  stroke="#DDF2AB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-b border-[#DDF2AB]" />
          </div>
        </div>
      </section>
      {/* Contact Section - After FAQs */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-[#111] to-[#222]">
        <div className="w-full max-w-3xl mx-auto bg-transparent border border-[#DDF2AB] rounded-xl p-8 flex flex-col items-center">
          <h2 className="text-[#DDF2AB] text-2xl md:text-3xl font-semibold text-center mb-3">
            Still Have Questions?
          </h2>
          <p className="text-white text-center mb-6 text-base">
            If you couldn't find the answer to your question, feel free to reach
            out to our team directly.
          </p>
          <a
            href="mailto:security@defcomm.com"
            className="bg-[#89AF20] text-white px-8 py-3 rounded-lg font-medium text-base shadow hover:bg-[#6e8e1a] transition text-center"
          >
            Contact Us at security@defcomm.com
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LiveFire;
