import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const DEFAULT_SCALE_LARGE_SCREEN = 2.2;
const DEFAULT_SCALE_SMALL_SCREEN = 4.4;
const MOBILE_BREAKPOINT = 768;

const FullScreenVideo: React.FC<{ url: string }> = ({ url }) => {
  const [scale, setScale] = useState(DEFAULT_SCALE_LARGE_SCREEN);
  const playerRef = useRef<typeof ReactPlayer | null>(null); // Usamos typeof ReactPlayer

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
    const enableAutoplay = () => {
      if (playerRef.current) {
        const video = playerRef.current.getInternalPlayer() as HTMLVideoElement;
        if (video && video.paused) {
          video.muted = true; // Asegura que siga silenciado
          video.play().catch(() => {
            console.warn(
              'Autoplay bloqueado en Safari, esperando interacción del usuario.'
            );
          });
        }
      }
    };

    // Intenta reproducirlo al montar
    enableAutoplay();

    // Asegura la reproducción automática en el primer intento
    document.addEventListener('click', enableAutoplay);
    document.addEventListener('touchstart', enableAutoplay);

    return () => {
      document.removeEventListener('click', enableAutoplay);
      document.removeEventListener('touchstart', enableAutoplay);
    };
  }, []);

  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-light-red opacity-60 z-10"></div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing
        loop
        muted={true} // 🔇 Video siempre silenciado
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
            video.muted = true; // 🔇 Asegura que esté silenciado
            video?.play().catch(() => {
              console.warn('Autoplay bloqueado en Safari');
            });
          }
        }}
      />
    </div>
  );
};

export default FullScreenVideo;
