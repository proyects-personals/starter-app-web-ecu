import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    MSStream?: unknown;
  }
}

const DEFAULT_SCALE_LARGE_SCREEN = 2.2;
const DEFAULT_SCALE_SMALL_SCREEN = 4.4;
const MOBILE_BREAKPOINT = 768;

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const FullScreenVideo: React.FC<{ url: string; fallbackImage: string }> = ({
  url,
  fallbackImage,
}) => {
  const [scale, setScale] = useState(DEFAULT_SCALE_LARGE_SCREEN);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const playerRef = useRef<typeof ReactPlayer | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsIOSDevice(isIOS());
  }, []);

  useEffect(() => {
    const updateScale = () => {
      setScale(
        window.innerWidth < MOBILE_BREAKPOINT
          ? DEFAULT_SCALE_SMALL_SCREEN
          : DEFAULT_SCALE_LARGE_SCREEN
      );
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    if (!isIOSDevice && location.pathname === '/home') {
      const enableAutoplay = () => {
        if (playerRef.current) {
          const video =
            playerRef.current.getInternalPlayer() as HTMLVideoElement;
          if (video && video.paused) {
            video.muted = true;
            video.play().catch((error) => {
              console.warn('Autoplay bloqueado:', error);
            });
          }
        }
      };

      enableAutoplay();
    }
  }, [location.pathname, isIOSDevice]);

  if (isIOSDevice) {
    return (
      <div className="relative inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-light-red opacity-60 z-10"></div>
        <img
          src={fallbackImage}
          alt="Fallback Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ transform: `scale(${scale})`, zIndex: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-light-red opacity-60 z-10"></div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing
        loop
        muted={true}
        playsinline
        controls={false}
        pip={false}
        width="100vw"
        height="100vh"
        className="absolute top-0 left-0"
        style={{ transform: `scale(${scale})`, zIndex: 0 }}
        onReady={() => {
          if (playerRef.current) {
            const video =
              playerRef.current.getInternalPlayer() as HTMLVideoElement;
            video.muted = true;
            video?.play().catch((error) => {
              console.warn('Autoplay bloqueado en iOS:', error);
            });
          }
        }}
      />
    </div>
  );
};

export default FullScreenVideo;
