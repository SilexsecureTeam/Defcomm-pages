import React, { useEffect } from "react";

// Sample video data (replace VIDEO_ID_X with your actual YouTube video IDs)
const videoData = [
  { id: "VIDEO_ID_1", title: "God Little Heart", duration: "4:12:45:36" },
  { id: "VIDEO_ID_2", title: "World War 2", duration: "10:20:15" },
  { id: "VIDEO_ID_3", title: "World War 2 Part 2", duration: "4:12:01" },
];

export default function VideoPage() {
  useEffect(() => {
    // Auto-play background video using YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubeIframeAPIReady = () => {
      // eslint-disable-next-line no-undef
      player = new YT.Player("background-video", {
        videoId: "RgTOwZRsRRE", // Background video ID from the provided URL
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          mute: 1, // Mute is required for autoplay in most browsers
          playlist: "RgTOwZRsRRE", // Loop the same video
          modestbranding: 1, // Hide YouTube logo
          fs: 0, // Disable fullscreen button
        },
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
    };

    return () => {
      if (player) player.destroy(); // Cleanup on unmount
    };
  }, []);

  // Handle click to play a selected video
  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div id="background-video" className="w-full h-full opacity-50"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white relative">
          Why Work With Us?
          <span className="block w-16 h-1 bg-green-500 mt-2 mx-auto"></span>
        </h1>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4 py-8">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="relative w-full pt-[56.25%] bg-gray-700">
                {/* Thumbnail placeholder (replace with actual YouTube thumbnail API) */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white text-lg font-semibold">Play</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
