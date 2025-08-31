import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import nxt from "../../assets/nxt.png";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
import HeadNav from "../../components/v2/HeadNav";
import Feature from "../../components/v3/Feature";
import VideoCard from "./VideoCard";
import { videos } from "../../utils/constants";
import {
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
} from "react-icons/fa";
import { RiForward15Fill, RiReplay15Fill } from "react-icons/ri";

export default function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [heroVolume, setHeroVolume] = useState(50);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const heroPlayerRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  // ✅ Centralized volume logic
  const applyVolume = () => {
    if (heroPlayerRef.current && playerReady) {
      if (isMuted || heroVolume === 0) {
        heroPlayerRef.current.mute();
        setIsMuted(true);
      } else {
        heroPlayerRef.current.unMute();
        heroPlayerRef.current.setVolume(heroVolume);
        setIsMuted(false);
      }
    }
  };

  const handleVideoPlay = (videoId) => {
    setIsLoading(true);
    setCurrentVideo(videoId);

    document
      .querySelector("#scrollable-container")
      .scrollTo({ top: 0, behavior: "smooth" });

    if (heroPlayerRef.current && playerReady) {
      const video = videos.find((v) => v.id === videoId);
      if (video) {
        heroPlayerRef.current.loadVideoById({
          videoId: video.embedId,
          startSeconds: 0,
        });

        setIsHeroPlaying(true);

        // ✅ always reapply volume
        applyVolume();
      }
    }
  };

  const handleHeroPlay = (e) => {
    e.stopPropagation();
    if (heroPlayerRef.current && playerReady) {
      heroPlayerRef.current.playVideo();
      setIsHeroPlaying(true);
      applyVolume();
    }
  };

  const handleHeroPause = (e) => {
    e.stopPropagation();
    if (heroPlayerRef.current && playerReady) {
      heroPlayerRef.current.pauseVideo();
      setIsHeroPlaying(false);
    }
  };

  const handleHeroSkipForward = (e) => {
    e.stopPropagation();
    if (heroPlayerRef.current && playerReady) {
      const currentTime = heroPlayerRef.current.getCurrentTime();
      heroPlayerRef.current.seekTo(currentTime + 15, true);
    }
  };

  const handleHeroSkipBackward = (e) => {
    e.stopPropagation();
    if (heroPlayerRef.current && playerReady) {
      const currentTime = heroPlayerRef.current.getCurrentTime();
      heroPlayerRef.current.seekTo(Math.max(currentTime - 15, 0), true);
    }
  };

  const handleHeroVolumeChange = (e) => {
    e.stopPropagation();
    const newVolume = parseInt(e.target.value);
    setHeroVolume(newVolume);
    if (heroPlayerRef.current && playerReady) {
      heroPlayerRef.current.setVolume(newVolume);
      if (newVolume > 0) {
        heroPlayerRef.current.unMute();
        setIsMuted(false);
      } else {
        heroPlayerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (heroPlayerRef.current && playerReady) {
      setIsMuted((prev) => {
        const newMuted = !prev;
        if (newMuted) {
          heroPlayerRef.current.mute();
        } else {
          heroPlayerRef.current.unMute();
          heroPlayerRef.current.setVolume(heroVolume > 0 ? heroVolume : 50);
        }
        return newMuted;
      });
      setUserInteracted(true);
    }
  };

  const handleUserInteraction = () => {
    if (!userInteracted && heroPlayerRef.current && playerReady) {
      setUserInteracted(true);

      // force unmute + update states
      heroPlayerRef.current.unMute();
      heroPlayerRef.current.setVolume(heroVolume > 0 ? heroVolume : 50);
      setIsMuted(false);
    }
  };

  const onHeroPlayerReady = (event) => {
    heroPlayerRef.current = event.target;
    setPlayerReady(true);

    // ✅ start muted (required by autoplay)
    event.target.mute();
    event.target.playVideo();

    // ✅ but also sync slider volume
    applyVolume();

    setIsLoading(false);
  };

  const onHeroPlayerStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsHeroPlaying(true);
      setIsLoading(false);
      applyVolume(); // ✅ enforce volume once playback starts
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      setIsHeroPlaying(false);
    } else if (event.data === YouTube.PlayerState.BUFFERING) {
      setIsLoading(true);
    } else if (event.data === YouTube.PlayerState.ENDED) {
      setIsHeroPlaying(false);
    } else if (event.data === YouTube.PlayerState.CUED) {
      setIsLoading(false);
      heroPlayerRef.current?.playVideo();
      applyVolume(); // ✅ reapply here too
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
      <div
        className="relative w-screen h-[80vh] overflow-hidden"
        onClick={handleUserInteraction}
      >
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
                controls: 0,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
                playsinline: 1,
                enablejsapi: 1,
                start: 0,
              },
            }}
            className="w-full h-full object-cover"
            onReady={onHeroPlayerReady}
            onStateChange={onHeroPlayerStateChange}
            onError={onHeroPlayerError}
          />
        </div>

<div
  className="absolute bottom-0 left-0 w-full h-[20%] 
             bg-gradient-to-b from-transparent to-black/90 
             z-10 pointer-events-none"
/>

        {/* Video Controls */}
        <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
          <div className="flex items-center justify-center md:justify-between opacity-50 hover:opacity-100 bg-black/70 backdrop-blur-sm rounded-full px-4 py-3 md:px-6 md:py-4 max-w-md mx-auto">
            {/* Skip Backward - Hidden on mobile, shown on desktop */}
            <button
              onClick={handleHeroSkipBackward}
              className="hidden md:block p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              disabled={!playerReady}
              aria-label="Skip backward 15 seconds"
            >
              <RiReplay15Fill className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Play/Pause - Centered on mobile */}
            <button
              onClick={isHeroPlaying ? handleHeroPause : handleHeroPlay}
              className="p-3 md:p-4 bg-green-600 rounded-full hover:bg-green-700 transition-all mx-2 md:mx-0"
              disabled={!playerReady}
              aria-label={isHeroPlaying ? "Pause video" : "Play video"}
            >
              {isHeroPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white md:ml-1" />
              )}
            </button>

            {/* Skip Forward - Hidden on mobile, shown on desktop */}
            <button
              onClick={handleHeroSkipForward}
              className="hidden md:block p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              disabled={!playerReady}
            >
              <RiForward15Fill className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Volume Controls - Always visible */}
            <div className="flex items-center space-x-2 md:space-x-3 ml-2">
              <button
                onClick={handleToggleMute}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
                disabled={!playerReady}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <FaVolumeMute className="w-4 h-4 md:w-5 md:h-5 text-white" />
                ) : heroVolume === 0 ? (
                  <FaVolumeOff className="w-4 h-4 md:w-5 md:h-5 text-white" />
                ) : heroVolume < 50 ? (
                  <FaVolumeDown className="w-4 h-4 md:w-5 md:h-5 text-white" />
                ) : (
                  <FaVolumeUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={heroVolume}
                onChange={handleHeroVolumeChange}
                className="w-16 md:w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                aria-label="Volume control"
                disabled={!playerReady}
              />
            </div>
          </div>

          {/* Mobile-only skip buttons */}
          <div className="flex justify-center space-x-8 mt-4 md:hidden">
            <button
              onClick={handleHeroSkipBackward}
              className="p-2 bg-white/20 rounded-full"
              disabled={!playerReady}
              aria-label="Skip backward 15 seconds"
            >
              <RiReplay15Fill className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={handleHeroSkipForward}
              className="p-2 bg-white/20 rounded-full"
              disabled={!playerReady}
              aria-label="Skip forward 15 seconds"
            >
              <RiForward15Fill className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Click to unmute overlay */}
        {isMuted && !userInteracted && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer z-10"
            onClick={handleUserInteraction}
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
                onPlay={() => handleVideoPlay(video.id)}
                onPause={handleHeroPause}
                onSkipForward={handleHeroSkipForward}
                onSkipBackward={handleHeroSkipBackward}
                onVolumeChange={handleHeroVolumeChange}
                volume={heroVolume / 100}
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
