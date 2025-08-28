import React from "react";
import { tabs } from "../../utils/fields";

const PhoneTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex py-2 items-center bg-black border-l-4 border-l-[#759719]">
      <div className="flex gap-2 px-2 overflow-x-auto">
        {tabs
          .filter(
            (tab) =>
              tab.id !== "default" &&
              tab.id !== "category1-first" &&
              tab.id !== "category1-second" &&
              tab.id !== "voicechat" // Exclude voicechat
          )
          .map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center rounded-lg justify-center w-10 h-10 p-2 bg-oliveLight hover:bg-lime-600 group ${
                activeTab === tab.id ? "ring-0 ring-lime-400" : ""
              }`}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-10 text-white group-hover:brightness-40"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default PhoneTabs;
