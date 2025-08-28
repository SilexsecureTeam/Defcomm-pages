/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Joyride, { STATUS } from "react-joyride";
import { useState, useEffect } from "react";

import Loader from "./Loader";
import PhoneHeader from "./PhoneHeader";
import { joyRideStyles, tabs } from "../../utils/fields";

export default function PhoneMockup({
  activeTab,
  setActiveTab,
  currentTime,
  currentDate,
  messageInput,
  setMessageInput,
}) {
  const [runTour, setRunTour] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const steps = tabs.map((tab, index) => ({
    target: `#tab-${tab.id}`,
    content: (
      <div>
        <h3 className="text-sm font-medium">{tab.label}</h3>
        <p className="text-xs">{tab.description}</p>
      </div>
    ),
    disableBeacon: index === 0,
    placement: "right-start",
    offset: 6,
    styles: {
      tooltipContainer: {
        textAlign: "left",
      },
    },
  }));

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
    }
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={runTour && !isLoading}
        continuous
        showSkipButton
        showProgress
        styles={joyRideStyles}
        callback={handleJoyrideCallback}
        locale={{
          next: "Next",
          back: "Back",
          skip: "Skip Tour",
          last: "Finish",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex justify-center lg:justify-start relative inter"
      >
        <div className="phone-container relative">
          <div className="phone-frame relative max-w-[270px] h-[528px] bg-gray-900 rounded-[35px] p-1 shadow-2xl border-2 border-gray-800">
            <div className="absolute -left-1 top-20">
              <div className="w-1 h-8 bg-gray-700 rounded-l-full"></div>
            </div>
            <div className="absolute -left-1 top-32">
              <div className="w-1 h-12 bg-gray-700 rounded-l-full"></div>
            </div>
            <div className="absolute -right-1 top-28">
              <div className="w-1 h-12 bg-gray-700 rounded-r-full"></div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
              ))}
            </div>
            <div
              className="screen bg-gradient-to-t from-[#36460A] to-black text-white rounded-[30px] h-full overflow-hidden flex flex-col relative"
              style={{
                background: `linear-gradient(to bottom, #36460A 10%, #000000 65%)`,
              }}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <PhoneHeader
                  activeTab={activeTab}
                  messageInput={messageInput}
                  setMessageInput={setMessageInput}
                  setActiveTab={setActiveTab}
                  currentTime={currentTime}
                  currentDate={currentDate}
                />
              )}
            </div>
          </div>
          {activeTab && !isLoading && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-[280px] top-10 transform -translate-y-1/2 flex flex-col space-y-4 bg-gray-900 rounded-lg p-2 shadow-lg"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center w-10 h-10 p-2 rounded-md ${
                    activeTab === tab.id ? "bg-[#759719]" : "bg-gray-800"
                  } hover:bg-[#89AF20] transition-colors`}
                  title={tab.label}
                >
                  <img src={tab.icon} alt={tab.label} className="w-8" />
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}
