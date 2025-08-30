import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
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
            <Play className="w-12 h-12 md:w-16 md-h-16 text-white" />
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

export default VideoCard;
