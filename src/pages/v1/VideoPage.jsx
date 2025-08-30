import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import nxt from "../../assets/nxt.png";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
import HeadNav from "../../components/v2/HeadNav";
import Feature from "../../components/v3/Feature";
import VideoCard from "./VideoCard";
import { videos } from "../../utils/constants";

export default function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [heroVolume, setHeroVolume] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const heroPlayerRef = useRef(null);

  const handleVideoPlay = (videoId) => {
    setIsLoading(true);
    setCurrentVideo(videoId);

    // Scroll to top
    document
      .querySelector("#scrollable-container")
      .scrollTo({ top: 0, behavior: "smooth" });

    // If player is ready, load the new video
    if (heroPlayerRef.current) {
      const video = videos.find((v) => v.id === videoId);
      if (video) {
        heroPlayerRef.current.loadVideoById(video.embedId);
        // Play video after a short delay to ensure it's loaded
        setTimeout(() => {
          if (heroPlayerRef.current) {
            heroPlayerRef.current.playVideo();
          }
        }, 100);
      }
    }
  };

  const handleHeroPlay = () => {
    if (heroPlayerRef.current) {
      heroPlayerRef.current.playVideo();
      setIsHeroPlaying(true);
    }
  };

  const handleHeroPause = () => {
    if (heroPlayerRef.current) {
      heroPlayerRef.current.pauseVideo();
      setIsHeroPlaying(false);
    }
  };

  const handleHeroSkipForward = () => {
    if (heroPlayerRef.current) {
      const currentTime = heroPlayerRef.current.getCurrentTime();
      heroPlayerRef.current.seekTo(currentTime + 15, true);
    }
  };

  const handleHeroSkipBackward = () => {
    if (heroPlayerRef.current) {
      const currentTime = heroPlayerRef.current.getCurrentTime();
      heroPlayerRef.current.seekTo(Math.max(currentTime - 15, 0), true);
    }
  };

  const handleHeroVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setHeroVolume(newVolume);
    if (heroPlayerRef.current) {
      heroPlayerRef.current.setVolume(newVolume * 100);
      if (newVolume > 0) {
        heroPlayerRef.current.unMute();
        setIsMuted(false);
      } else {
        heroPlayerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleToggleMute = () => {
    if (heroPlayerRef.current) {
      if (isMuted) {
        heroPlayerRef.current.unMute();
        heroPlayerRef.current.setVolume(heroVolume * 100);
      } else {
        heroPlayerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const onHeroPlayerReady = (event) => {
    heroPlayerRef.current = event.target;

    // Start muted for autoplay compliance
    event.target.mute();
    event.target.setVolume(0);

    // Play the video (playVideo doesn't return a promise)
    event.target.playVideo();

    setIsLoading(false);
    setIsHeroPlaying(true);
  };

  const onHeroPlayerStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsHeroPlaying(true);
      setIsLoading(false);
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      setIsHeroPlaying(false);
    } else if (event.data === YouTube.PlayerState.BUFFERING) {
      setIsLoading(true);
    } else if (event.data === YouTube.PlayerState.ENDED) {
      setIsHeroPlaying(false);
    }
  };

  const onHeroPlayerError = (event) => {
    console.error("YouTube player error:", event.data);
    setIsLoading(false);
  };

  const currentVideoData = videos.find((v) => v.id === currentVideo);

  return (
    <div className="min-h-screen bg-black">
      <HeadNav />

      {/* Hero Video Section */}
      <div className="relative h-screen overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="absolute inset-0">
          <YouTube
            videoId={currentVideoData.embedId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                mute: 1, // Start muted for autoplay compliance
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                playsinline: 1,
                enablejsapi: 1,
              },
            }}
            className="w-full h-full object-cover"
            onReady={onHeroPlayerReady}
            onStateChange={onHeroPlayerStateChange}
            onError={onHeroPlayerError}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        {/* Video Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6 bg-black/50 backdrop-blur-sm rounded-full px-6 py-4">
            <button
              onClick={handleHeroSkipBackward}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              aria-label="Skip backward 15 seconds"
            >
              <img src={nxt} alt="Back" className="w-5 h-5 rotate-180" />
            </button>

            <button
              onClick={isHeroPlaying ? handleHeroPause : handleHeroPlay}
              className="p-4 bg-green-600 rounded-full hover:bg-green-700 transition-all"
              aria-label={isHeroPlaying ? "Pause video" : "Play video"}
            >
              {isHeroPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </button>

            <button
              onClick={handleHeroSkipForward}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              aria-label="Skip forward 15 seconds"
            >
              <img src={nxt} alt="Forward" className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleToggleMute}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={heroVolume}
                onChange={handleHeroVolumeChange}
                className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                aria-label="Volume control"
              />
            </div>
          </div>
        </div>

        {/* Click to unmute overlay */}
        {isMuted && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer z-10"
            onClick={handleToggleMute}
          >
            <div className="text-center text-white">
              <VolumeX className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Click to unmute</p>
            </div>
          </div>
        )}
      </div>

      {/* Video Gallery Section */}
      <div className="bg-[#232E05] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                duration={video.duration}
                thumbnail={video.thumbnail}
                videoId={video.id}
                isPlaying={currentVideo === video.id}
                onPlay={handleVideoPlay}
                onPause={handleHeroPause}
                onSkipForward={handleHeroSkipForward}
                onSkipBackward={handleHeroSkipBackward}
                onVolumeChange={handleHeroVolumeChange}
                volume={heroVolume}
              />
            ))}
          </div>
        </div>
      </div>

      <SecurityFeatures />
      <Feature />
    </div>
  );
}
