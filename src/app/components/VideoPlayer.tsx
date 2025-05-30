'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';
import { MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff, MdVolumeDown, MdFullscreen, MdFullscreenExit, MdClosedCaption } from 'react-icons/md';

interface VideoPlayerProps {
  videoId: string;
  onVideoComplete?: () => void;
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  setPlaybackRate: (rate: number) => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  isMuted: () => boolean;
  mute: () => void;
  unMute: () => void;
  destroy: () => void;
  getVideoData: () => { video_id: string };
}

interface YouTubeEvent {
  target: YouTubePlayer;
  data: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          playerVars: {
            controls: number;
            modestbranding: number;
            rel: number;
            showinfo: number;
            cc_load_policy: number;
          };
          events: {
            onReady: (event: YouTubeEvent) => void;
            onStateChange: (event: YouTubeEvent) => void;
          };
        }
      ) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
        BUFFERING: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoPlayer = ({ videoId, onVideoComplete }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem('video-player-volume');
    console.log('Initial savedVolume from localStorage:', savedVolume);
    const initialVolume = savedVolume ? parseInt(savedVolume) : 100;
    console.log('Setting initial volume to:', initialVolume);
    return initialVolume;
  });
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initializedRef = useRef(false);

  // Function to save current time to localStorage
  const savePlaybackPosition = () => {
    if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
      const currentTime = playerRef.current.getCurrentTime();
      localStorage.setItem(`video-position-${videoId}`, currentTime.toString());
    }
  };

  // Function to load saved position from localStorage
  const loadPlaybackPosition = () => {
    const savedTime = localStorage.getItem(`video-position-${videoId}`);
    return savedTime ? parseFloat(savedTime) : 0;
  };

  useEffect(() => {
    // Function to initialize the player
    const initializePlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      
      const savedPosition = loadPlaybackPosition();
      
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          cc_load_policy: showSubtitles ? 1 : 0,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            if (typeof event.target.getDuration === 'function') {
              setDuration(event.target.getDuration());
            }
            // Set the initial volume on the player
            if (typeof event.target.setVolume === 'function') {
              event.target.setVolume(volume);
              // Don't override our saved volume with the player's default
              // setVolume(event.target.getVolume());
            }
            setIsLoading(false);
            // Restore saved position
            if (savedPosition > 0 && typeof event.target.seekTo === 'function') {
              event.target.seekTo(savedPosition);
            }
            initializedRef.current = true;
          },
          onStateChange: (event: YouTubeEvent) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            setIsLoading(event.data === window.YT.PlayerState.BUFFERING);
            
            // Save position when video is paused
            if (event.data === window.YT.PlayerState.PAUSED) {
              savePlaybackPosition();
            }
            
            // Handle video completion
            if (event.data === window.YT.PlayerState.ENDED) {
              setHasEnded(true);
              if (onVideoComplete) {
                onVideoComplete();
              }
              // Clear saved position when video is completed
              localStorage.removeItem(`video-position-${videoId}`);
              // Pause the video at the end
              if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
                playerRef.current.pauseVideo();
              }
            } else {
              setHasEnded(false);
            }
          },
        },
      });
    };

    // Only initialize if not already initialized or if videoId changes
    if (!initializedRef.current || videoId !== playerRef.current?.getVideoData()?.video_id) {
      // If YouTube API is already loaded
      if (window.YT && window.YT.Player) {
        initializePlayer();
      } else {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer();
        };
      }
    }

    return () => {
      // Save position when component unmounts
      savePlaybackPosition();
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      initializedRef.current = false;
    };
  }, [videoId]); // Only depend on videoId changes

  useEffect(() => {
    const updateTime = () => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function' && isPlaying) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function' && typeof playerRef.current.pauseVideo === 'function') {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(time);
      setCurrentTime(time);
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    if (playerRef.current && typeof playerRef.current.setPlaybackRate === 'function') {
      playerRef.current.setPlaybackRate(rate);
      setPlaybackRate(rate);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    console.log('Volume changed to:', newVolume);
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      playerRef.current.setVolume(newVolume);
      setVolume(newVolume);
      localStorage.setItem('video-player-volume', newVolume.toString());
      console.log('Saved volume to localStorage:', newVolume);
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const handleMuteToggle = () => {
    if (playerRef.current && typeof playerRef.current.mute === 'function' && typeof playerRef.current.unMute === 'function') {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
        // Restore the previous volume when unmuting
        if (typeof playerRef.current.setVolume === 'function') {
          playerRef.current.setVolume(volume);
        }
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={styles.videoContainer}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div id="youtube-player" className={styles.player} />
      
      {isLoading && <div className={styles.loadingSpinner} />}
      
      <div className={styles.progressBar}>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className={styles.progressSlider}
        />
        <div className={styles.timeDisplay}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      
      {showControls && (
        <div className={styles.controls}>
          <div className={styles.controlButtons}>
            <button onClick={handlePlayPause} className={styles.controlButton}>
              {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
            </button>
            
            <div className={styles.volumeControl}>
              <button onClick={handleMuteToggle} className={styles.controlButton}>
                {isMuted ? <MdVolumeOff size={24} /> : 
                 volume > 50 ? <MdVolumeUp size={24} /> : 
                 volume > 0 ? <MdVolumeDown size={24} /> : 
                 <MdVolumeOff size={24} />}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={handleVolumeChange}
                className={styles.volumeSlider}
              />
            </div>
            
            <div className={styles.playbackRates}>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handlePlaybackRateChange(rate)}
                  className={`${styles.rateButton} ${playbackRate === rate ? styles.activeRate : ''}`}
                >
                  {rate}x
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`${styles.controlButton} ${showSubtitles ? styles.active : ''}`}
            >
              <MdClosedCaption size={24} />
            </button>

            <button
              onClick={handleFullscreen}
              className={`${styles.controlButton} ${styles.fullscreenButton}`}
            >
              {isFullscreen ? <MdFullscreenExit size={24} /> : <MdFullscreen size={24} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 