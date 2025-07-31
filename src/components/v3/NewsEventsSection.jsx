import React, { useState, useEffect } from "react";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
// import team4 from "../../assets/team4.png";

const NewsEventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const newsItems = [
    {
      title: "Defcomm Unveils Innovative End-to-End Encryption System",
      subtitle: "CYBER SECURITY CONFERENCE 2024",
      description:
        "Defcomm Shows Industry Leaders The Latest In End-To-End Encryption System To The Hhighway Army Cmo Defense Course, A Move Step Forward In Regional Military Communications",
      image: new1,
      bgColor: "bg-emerald-800",
    },
    {
      title: "Defcomm Attend's AWS Summit in LONDON",
      subtitle: "AWS SUMMIT LONDON 2024",
      description:
        "Attend the 3-day Technical Summit and All These Future Behind Its Freedom, And Surveillance Capabilities Ready With Secure Channels For Every Applications You Find At Defcomm - A Procedent We're Not Just Protecting Messages",
      image: new2,
      bgColor: "bg-green-600",
    },
    {
      title: "Defcomm Lunch POC End-to-End Encryption Devices",
      subtitle: "DEFCOMM LAUNCH EVENT",
      description:
        "New Innovation And Advanced Technology For Safeguarding Digital Communications With Ultra-Latest Encryption Standards, Ensuring Reliable And Discreet Connection Information Across Industries",
      image: new3,
      bgColor: "bg-blue-700",
    },
    // {
    //   title: "Defcomm Partners with Global Tech Giants",
    //   subtitle: "PARTNERSHIP ANNOUNCEMENT 2024",
    //   description: "Strategic Partnership Announced With Leading Technology Companies To Enhance Secure Communication Infrastructure Worldwide And Expand Market Reach",
    //   image: new2,
    //   bgColor: "bg-purple-700"
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white text-4xl font-bold mb-6">News & Events</h1>
          <div className="max-w-xl">
            <p className="text-green-100 text-lg mb-2">
              WebexOne is the only AI event that provides complete solutions and
              training for best-in-class employee and customer experiences.
            </p>
            <p className="text-green-300 text-sm">
              Experience an inspiring and fun AI and encryption system to
              upgrade daily digital corps
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / 3)}%)`,
              width: `${(newsItems.length * 100) / 3}%`,
            }}
          >
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="w-1/3 px-3 flex-shrink-0"
                style={{ width: `${100 / newsItems.length}%` }}
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden h-96">
                  {/* Header */}
                  <div className={`${item.bgColor} p-4`}>
                    <h3 className="text-white text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col h-full">
                    <p className="text-green-400 text-sm font-semibold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>

                    {/* Image */}
                    <div className="mt-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-6 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-green-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEventsSection;
