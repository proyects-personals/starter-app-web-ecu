import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const DEFAULT_SCALE_LARGE_SCREEN = 2.2;
const DEFAULT_SCALE_SMALL_SCREEN = 4.4;
const MOBILE_BREAKPOINT = 768;

const FullScreenVideo: React.FC<{ url: string }> = ({ url }) => {
  const [scale, setScale] = useState(DEFAULT_SCALE_LARGE_SCREEN);

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

  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-light-red opacity-60 z-10"></div>
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        playsinline
        controls={false}
        pip={false}
        onStart={() => console.log('Video started')}
        width="100vw"
        height="100vh"
        className="absolute top-0 left-0"
        style={{ transform: `scale(${scale})`, zIndex: 0 }}
      />
    </div>
  );
};

export default FullScreenVideo;
