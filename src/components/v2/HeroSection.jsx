// src/HeroSection.jsx
import { useState, useEffect } from "react";
import LeftContent from "./LeftContent";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState("21:00");
  const [currentDate, setCurrentDate] = useState("Sun, 10 August 2025");
  const [activeTab, setActiveTab] = useState("default");
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const date = now
        .toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .replace(/,/g, "");
      setCurrentTime(time);
      setCurrentDate(date);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (activeTab === "category1-first") {
      timer = setTimeout(() => {
        setActiveTab("category1-second");
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="min-h-[500px] bg-limeAccent pb-8 text-black relative overflow-hidden px-6">
      <style>
        {`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
      <div className="w-full max-w-peak mx-auto pt-4 grid lg:grid-cols-2 gap-10 items-center">
        <LeftContent />
        <PhoneMockup
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentTime={currentTime}
          currentDate={currentDate}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
        />
      </div>
    </section>
  );
}
