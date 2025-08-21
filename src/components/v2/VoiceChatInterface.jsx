import React, { useState, useEffect } from "react";
import {
  Users,
  MoreHorizontal,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import call1 from "../../assets/call1.png";
import call2 from "../../assets/call2.png";
import acall from "../../assets/acall.png";
import talkie from "../../assets/talkie.png";
import talkie1 from "../../assets/talkie1.png";
import talkie2 from "../../assets/talkie2.png";
import talkie3 from "../../assets/talkie3.png";
import talkie4 from "../../assets/talkie4.png";
import voice1 from "../../assets/voice1.png";
import voice2 from "../../assets/voice2.png";
import voice3 from "../../assets/voice3.png";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const CallHeader = () => (
  <div className="">
    <div className="flex items-center justify-between bg-[#89AF20] rounded-full px-3 py-2 inter">
      <div className="flex items-center gap-1.5">
        <img src={call1} alt="call" className="w-4 h-4 text-black" />
        <span className="text-black text-xs font-medium">
          Secure Calling...
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-black text-xs font-medium">0:00</span>
        <img src={call2} alt="call" className="w-4 h-4 text-black" />
      </div>
    </div>
    <div className="flex items-center mt-1">
      <img src={acall} alt="call" className="w-12 h-12" />
      <div>
        <p className="text-gray-400 text-xs">10:04 GMT 16 17 2023</p>
      </div>
    </div>
  </div>
);

export default function VoiceChatInterface({ setActiveTab }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevels, setAudioLevels] = useState(Array(40).fill(0));
  const [callDuration, setCallDuration] = useState("00:30");

  // Simulate audio levels animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioLevels((levels) => levels.map(() => Math.random() * 60 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Simulate call timer
  useEffect(() => {
    let seconds = 30;
    const timer = setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      setCallDuration(
        `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-1 flex-1 flex flex-col text-white"
    >
      <CallHeader />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Avatar Section */}
        <div className="relative mb-8 flex items-center justify-end w-full space-x-2">
          <div className=" text-[9px] text-gray-400">
            <span>SGT A1765273DH5 </span>
            <br />
            <span className="text-green-400 text-[12px]">
              Talking {callDuration}
            </span>
          </div>
          <div className="">
            <img src={talkie} alt="talkie-img" className="w-16" />
          </div>
        </div>

        {/* Audio Visualization */}
        <div className="w-full max-w-xs mb-2">
          <div className="flex items-end justify-center space-x-1 h-12">
            {audioLevels.map((level, index) => (
              <div
                key={index}
                className={`w-1 bg-gradient-to-t ${
                  index < 20
                    ? "from-green-400 to-green-300"
                    : "from-gray-500 to-gray-400"
                } rounded-full transition-all duration-100`}
                style={{ height: `${level}px` }}
              ></div>
            ))}
          </div>
          <div className="text-center mt-2">
            <div className="w-2 h-2 bg-white rounded-full mx-auto mb-1"></div>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center space-x-3 w-full ">
          <div className="grid grid-cols-2 ">
            <img src={talkie3} alt="caller-image" className="w-6 h-6" />
            <img src={talkie4} alt="caller-image" className="w-6 h-6" />
            <img src={talkie2} alt="caller-image" className="w-6 h-6" />
            <img src={talkie1} alt="caller-image" className="w-6 h-6" />
          </div>
          <div className="text-[11px]">
            <div className="text-gray-300">Emergency Situation Room</div>
            <div className="text-green-400">4.7k Live</div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className=" pb-8 pt-4 flex items-end justify-between">
        <button onClick={() => setIsMuted(!isMuted)} className="p-3">
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
        {/* Main Record Button */}
        <div className="">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-red-600 shadow-lg shadow-red-600/50"
                  : "bg-red-500"
              }`}
            >
              {isRecording ? (
                <MicOff className="w-7 h-7" />
              ) : (
                <Mic className="w-7 h-7" />
              )}
            </button>
          </div>
          <div className="text-center">
            <div className="text-xs text-white">Press & hold to talk</div>
          </div>
        </div>

        {/* Secondary Controls */}
        <div className="flex flex-col items-center space-y-3">
          <img src={voice1} alt="img" className="w-4 h-4" />
          <img src={voice2} alt="img" className="w-4 h-4" />
          <img src={voice3} alt="img" className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
