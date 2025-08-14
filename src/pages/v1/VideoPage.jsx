import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"; // Removed ArrowRight
import nxt from "../../assets/nxt.png";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
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
      title: "Nigeria’s First End-to-End Secure Communication Platform & .....",
      duration: "2:30 | 1:45:42",
      thumbnail: "https://img.youtube.com/vi/RgTOwZRsRRE/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=RgTOwZRsRRE",
      embedId: "RgTOwZRsRRE",
    },
    {
      id: 2,
      title: "Defcomm's latest innovation in military technology",
      duration: "3:33",
      thumbnail: "https://img.youtube.com/vi/aAljC9JNVlE/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=aAljC9JNVlE",
      embedId: "aAljC9JNVlE",
    },
    {
      id: 3,
      title: "Because privacy isn’t a privilege—it’s your right .....",
      duration: "3:15 | 1:22:30",
      thumbnail: "https://img.youtube.com/vi/RfaZMz_u5O8/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=RfaZMz_u5O8",
      embedId: "RfaZMz_u5O8",
    },
    {
      id: 4,
      title: "DefComm: Privacy. Security. Freedom. Take back control ....",
      duration: "2:50 | 1:15:20",
      thumbnail: "https://img.youtube.com/vi/HrJgQTLG5Pw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=HrJgQTLG5Pw",
      embedId: "HrJgQTLG5Pw",
    },
    {
      id: 5,
      title: "In an era where communication defines success and security ....",
      duration: "5:20 | 2:45:30",
      thumbnail: "https://img.youtube.com/vi/Cdk2dfkOmWw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Cdk2dfkOmWw",
      embedId: "Cdk2dfkOmWw",
    },
  ];

  useEffect(() => {
    // Load YouTube API only once
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onerror = () => {
        console.error("Failed to load YouTube Player API");
        setModalError("Failed to load YouTube API. Please check your network.");
      };
      document.body.appendChild(tag);
    }

    // Initialize hero player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (heroPlayerRef.current) return; // Prevent reinitialization
      heroPlayerRef.current = new window.YT.Player("hero-iframe", {
        events: {
          onReady: () => {
            console.log("Hero Player Ready");
            heroPlayerRef.current.setVolume(heroVolume * 100);
            heroPlayerRef.current.playVideo();
          },
          onError: (e) => {
            console.error("Hero Player Error:", e);
            setModalError("Failed to load hero video. Please try again.");
          },
          onStateChange: (event) => {
            setIsHeroPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, [heroVolume]);

  useEffect(() => {
    // Initialize modal player when modalVideo changes
    if (modalVideo && !modalPlayerRef.current) {
      setModalError(null);
      setIsModalLoading(true);
      const initializeModalPlayer = () => {
        modalPlayerRef.current = new window.YT.Player("modal-iframe", {
          events: {
            onReady: () => {
              console.log("Modal Player Ready");
              modalPlayerRef.current.setVolume(modalVolume * 100);
              modalPlayerRef.current.playVideo();
              setIsModalLoading(false);
              if (heroPlayerRef.current) {
                heroPlayerRef.current.pauseVideo();
                setIsHeroPlaying(false);
              }
            },
            onError: (e) => {
              console.error("Modal Player Error:", e);
              setModalError(
                "This video cannot be played. It may be restricted or unavailable."
              );
              setIsModalLoading(false);
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.BUFFERING) {
                setIsModalLoading(true);
              } else if (
                event.data === window.YT.PlayerState.PLAYING ||
                event.data === window.YT.PlayerState.PAUSED
              ) {
                setIsModalLoading(false);
              }
            },
          },
        });
      };

      // Ensure YouTube API is loaded before initializing modal player
      if (window.YT && window.YT.Player) {
        initializeModalPlayer();
      } else {
        const interval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(interval);
            initializeModalPlayer();
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }

    return () => {
      if (modalPlayerRef.current) {
        modalPlayerRef.current.destroy();
        modalPlayerRef.current = null;
      }
    };
  }, [modalVideo, modalVolume]);

  const handleVideoPlay = (videoId) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      setModalVideo(video);
      setIsModalLoading(true);
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

  const getIframeSrc = (video) => {
    const baseUrl = `https://www.youtube.com/embed/${video.embedId}`;
    const params = new URLSearchParams({
      autoplay: "1",
      controls: modalVideo ? "1" : "0",
      loop: modalVideo ? "0" : "1",
      playlist: modalVideo ? "" : video.embedId,
      modestbranding: "1",
      showinfo: "0",
      rel: "0",
      iv_load_policy: "3",
      playsinline: "1",
      enablejsapi: "1",
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const heroVideo = videos[0];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            id="hero-iframe"
            key={heroVideo.id}
            src={getIframeSrc(heroVideo)}
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media; fullscreen"
            title={heroVideo.title}
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
              <iframe
                id="modal-iframe"
                src={getIframeSrc(modalVideo)}
                className="w-full aspect-video"
                allow="autoplay; encrypted-media; fullscreen"
                title={modalVideo.title}
              />
            )}
            <div className="flex items-center space-x-3 mt-2">
              <button aria-label="Play modal video" onClick={handleModalPlay}>
                <Play className="w-5 h-5 text-white cursor-pointer" />
              </button>
              <button aria-label="Pause modal video" onClick={handleModalPause}>
                <Pause className="w-5 h-5 text-white cursor-pointer" />
              </button>
              <button
                aria-label="Skip backward 15 seconds"
                onClick={handleModalSkipBackward}
              >
                <SkipBack className="w-4 h-4 text-white cursor-pointer" />
              </button>
              <button
                aria-label="Skip forward 15 seconds"
                onClick={handleModalSkipForward}
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
                  value={modalVolume}
                  onChange={handleModalVolumeChange}
                  className="max-w-20 h-2"
                  aria-label="Modal video volume"
                />
              </div>
            </div>
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
