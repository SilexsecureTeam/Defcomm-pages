import LiveFireHeader from "../../components/v2/live_fire/LiveFireHeader";
import CountDownTimer from "../../components/v2/live_fire/CountDownTimer";
import ProgramDetails from "../../components/v2/live_fire/ProgramDetails";
import RewardTiers from "../../components/v2/live_fire/RewardTiers";
import RulesOfEngagement from "../../components/v2/live_fire/RulesOfEngagement";
import BestPractices from "../../components/v2/live_fire/BestPractices";
import FAQSection from "../../components/v2/live_fire/FAQSection";
import ContactSection from "../../components/v2/live_fire/ContactSection";
import Footer from "../../components/landing/Footer/Footer";
import { Helmet } from "react-helmet";

const targetDate = new Date("2025-11-01T12:00:00").getTime();
const LiveFire = () => {
  return (
    <div>
       <Helmet>
        <title>Defcomm® Bug Bounty Program | Report Vulnerabilities & Earn Rewards</title>
        <meta
          name="description"
          content="Join the Defcomm® Bug Bounty Program where security researchers in Africa  and ethical hackers help strengthen our encrypted systems. Report vulnerabilities, protect critical data, and earn rewards for advancing cybersecurity."
        />
         </Helmet>
    <div className="min-h-screen bg-gradient-to-b from-[#111] to-[#222] flex flex-col">
      <main className="flex flex-col items-center justify-center flex-1 pt-36 pb-10 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#AC7C2E] drop-shadow-lg">
          Think you can break us?
          <br />
          <span className="text-[#AC7C2E] animate-pulse">
            Prove it. Get paid.
          </span>
        </h1>
        <p className="text-white text-center max-w-2xl mb-10 text-base md:text-lg">
          We're opening the gates in 2025 for a live-fire bug bounty challenge —
          where top-tier hackers, researchers, and security pros go head-to-head
          with real Defcomm systems in real time. You bring the skills. We bring
          the targets. The clock is ticking.
        </p>

        <CountDownTimer targetDate={targetDate} />

        <div className="flex gap-4 mt-4 text-sm">
          <a
            href="#register"
            className="bg-[#AC7C2E] text-white px-8 py-3 rounded-xl font-normal hover:bg-yellow-500 transition transform hover:scale-105"
          >
            REGISTER NOW
          </a>
          <a
            href="#learn"
            className="bg-[#222] text-white px-8 py-3 rounded-xl font-normal border border-white hover:bg-[#333] transition transform hover:scale-105"
          >
            LEARN MORE
          </a>
        </div>
      </main>

      <ProgramDetails />
      <RewardTiers />
      <RulesOfEngagement />
      <BestPractices />
      <FAQSection />
      <ContactSection />
    </div>
    </div>
  );
};

export default LiveFire;
