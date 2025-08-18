import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import nxt from "../../assets/nxt.png";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
import HeadNav from "../../components/v2/HeadNav";
import Feature from "../../components/v3/Feature";

const VideoCard = ({
  title,
  duration,
  thumbnail,
  videoId,
  isPlaying,
  onPlay,
  onPause,
  onSkipForward,
  onSkipBackward,
  onVolumeChange,
  volume,
}) => (
  <div
    className={`relative bg-black rounded-lg overflow-hidden group cursor-pointer ${
      isPlaying ? "border-2 border-green-600" : ""
    }`}
  >
    <div className="aspect-video relative">
      <img
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={isPlaying ? onPause : () => onPlay(videoId)}
        >
          {isPlaying ? (
            <Pause className="w-12 h-12 md:w-16 md:h-16 text-white" />
          ) : (
            <Play className="w-12 h-12 md:w-16 md:h-16 text-white" />
          )}
        </button>
      </div>
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
        {duration}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-medium mb-3">{title}</h3>
      <div className="flex items-center space-x-3">
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={isPlaying ? onPause : () => onPlay(videoId)}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white cursor-pointer" />
          ) : (
            <Play className="w-5 h-5 text-white cursor-pointer" />
          )}
        </button>
        <button
          aria-label="Skip backward 15 seconds"
          onClick={onSkipBackward}
          disabled={!isPlaying}
        >
          <SkipBack className="w-4 h-4 text-white cursor-pointer" />
        </button>
        <button
          aria-label="Skip forward 15 seconds"
          onClick={onSkipForward}
          disabled={!isPlaying}
        >
          <SkipForward className="w-4 h-4 text-white cursor-pointer" />
        </button>
        <div className="flex items-center space-x-1">
          <Volume2 className="w-4 h-4 text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={onVolumeChange}
            className="max-w-20 h-2"
            aria-label="Video volume"
            disabled={!isPlaying}
          />
        </div>
      </div>
    </div>
  </div>
);

export default function VideoPage() {
  const [modalVideo, setModalVideo] = useState(null);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);
  const [heroVolume, setHeroVolume] = useState(0);
  const [modalVolume, setModalVolume] = useState(0.5);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalError, setModalError] = useState(null);
  const heroPlayerRef = useRef(null);
  const modalPlayerRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Nigeria’s First End-to-End Secure Communication Platform & Privacy ......",
      duration: "43:50",
      thumbnail: "https://img.youtube.com/vi/RgTOwZRsRRE/hqdefault.jpg",
      embedId: "RgTOwZRsRRE",
    },
    {
      id: 2,
      title: "Defcomm's latest innovation in military technology",
      duration: "2:57",
      thumbnail: "https://img.youtube.com/vi/aAljC9JNVlE/hqdefault.jpg",
      embedId: "aAljC9JNVlE",
    },
    {
      id: 3,
      title: "Because privacy isn’t a privilege—it’s your right, we don’t store or track a single byte.",
      duration: "1:41",
      thumbnail: "https://img.youtube.com/vi/RfaZMz_u5O8/hqdefault.jpg",
      embedId: "RfaZMz_u5O8",
    },
    {
      id: 4,
      title: "DefComm: Privacy. Security. Freedom. Take back control today",
      duration: "1:44",
      thumbnail: "https://img.youtube.com/vi/HrJgQTLG5Pw/hqdefault.jpg",
      embedId: "HrJgQTLG5Pw",
    },
    {
      id: 5,
      title: "In an era where communication defines success and security, one name stands .....",
      duration: "1:00",
      thumbnail: "https://img.youtube.com/vi/Cdk2dfkOmWw/hqdefault.jpg",
      embedId: "Cdk2dfkOmWw",
    },
  ];

  const handleVideoPlay = (videoId) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      setModalVideo(video);
      setIsModalLoading(true);
      if (heroPlayerRef.current) {
        heroPlayerRef.current.pauseVideo();
        setIsHeroPlaying(false);
      }
    }
  };

  const handleVideoPause = () => {
    if (modalPlayerRef.current) {
      modalPlayerRef.current.pauseVideo();
    }
    setModalVideo(null);
    setIsModalLoading(false);
    setModalError(null);
    if (heroPlayerRef.current) {
      heroPlayerRef.current.playVideo();
      setIsHeroPlaying(true);
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
    }
  };

  const handleModalPlay = () => {
    if (modalPlayerRef.current) {
      modalPlayerRef.current.playVideo();
    }
  };

  const handleModalPause = () => {
    if (modalPlayerRef.current) {
      modalPlayerRef.current.pauseVideo();
    }
  };

  const handleModalSkipForward = () => {
    if (modalPlayerRef.current) {
      const currentTime = modalPlayerRef.current.getCurrentTime();
      modalPlayerRef.current.seekTo(currentTime + 15, true);
    }
  };

  const handleModalSkipBackward = () => {
    if (modalPlayerRef.current) {
      const currentTime = modalPlayerRef.current.getCurrentTime();
      modalPlayerRef.current.seekTo(Math.max(currentTime - 15, 0), true);
    }
  };

  const handleModalVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setModalVolume(newVolume);
    if (modalPlayerRef.current) {
      modalPlayerRef.current.setVolume(newVolume * 100);
    }
  };

  const onHeroPlayerReady = (event) => {
    console.log("Hero Player Ready");
    heroPlayerRef.current = event.target;
    event.target.setVolume(heroVolume * 100);
    event.target.playVideo();
  };

  const onModalPlayerReady = (event) => {
    console.log("Modal Player Ready");
    modalPlayerRef.current = event.target;
    event.target.setVolume(modalVolume * 100);
    event.target.playVideo();
    setIsModalLoading(false);
  };

  const onModalPlayerError = (event) => {
    console.error("Modal Player Error:", event.data);
    setModalError("This video cannot be played. It may be restricted or unavailable.");
    setIsModalLoading(false);
  };

  const onModalPlayerStateChange = (event) => {
    if (event.data === YouTube.PlayerState.BUFFERING) {
      setIsModalLoading(true);
    } else if (
      event.data === YouTube.PlayerState.PLAYING ||
      event.data === YouTube.PlayerState.PAUSED
    ) {
      setIsModalLoading(false);
    }
  };

  const heroVideo = videos[0];

  return (
    <div className="min-h-screen bg-black">
      <HeadNav />
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <YouTube
            videoId={heroVideo.embedId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0,
                loop: 1,
                playlist: heroVideo.embedId,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                playsinline: 1,
              },
            }}
            className="w-full h-full object-cover"
            onReady={onHeroPlayerReady}
            onStateChange={(event) =>
              setIsHeroPlaying(event.data === YouTube.PlayerState.PLAYING)
            }
            onError={(e) => {
              console.error("Hero Player Error:", e);
              setModalError("Failed to load hero video. Please try again.");
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <button
              className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              aria-label="Skip backward 15 seconds"
              onClick={handleHeroSkipBackward}
            >
              <img src={nxt} alt="back" className="rotate-180" />
            </button>
            <button
              className="w-20 h-20 bg-[#36460ACC] rounded-full flex items-center justify-center hover:bg-[#5a770b] transition-all"
              aria-label={
                isHeroPlaying ? "Pause hero video" : "Play hero video"
              }
              onClick={isHeroPlaying ? handleHeroPause : handleHeroPlay}
            >
              {isHeroPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
            <button
              className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              aria-label="Skip forward 15 seconds"
              onClick={handleHeroSkipForward}
            >
              <img src={nxt} alt="forward" />
            </button>
            <div className="flex items-center space-x-1">
              <Volume2 className="w-4 h-4 text-white" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={heroVolume}
                onChange={handleHeroVolumeChange}
                className="max-w-20 h-2"
                aria-label="Hero video volume"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#232E05] py-16">
        <div className="max-w-peak mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.length > 0 ? (
              videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  thumbnail={video.thumbnail}
                  videoId={video.id}
                  isPlaying={modalVideo && modalVideo.id === video.id}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onSkipForward={handleModalSkipForward}
                  onSkipBackward={handleModalSkipBackward}
                  onVolumeChange={handleModalVolumeChange}
                  volume={modalVolume}
                />
              ))
            ) : (
              <p className="text-white">No videos available</p>
            )}
          </div>
        </div>
      </div>

      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4 md:mx-8">
            {isModalLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <svg
                  className="animate-spin h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>
            )}
            {modalError ? (
              <div className="w-full aspect-video bg-black flex items-center justify-center text-red-500">
                {modalError}
              </div>
            ) : (
              <YouTube
                videoId={modalVideo.embedId}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    playsinline: 1,
                  },
                }}
                className="w-full aspect-video"
                onReady={onModalPlayerReady}
                onError={onModalPlayerError}
                onStateChange={onModalPlayerStateChange}
              />
            )}
           
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              aria-label="Close video modal"
              onClick={handleVideoPause}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <SecurityFeatures />
      <Feature />
    </div>
  );
}