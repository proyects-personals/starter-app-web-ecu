import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const DEFAULT_SCALE_LARGE_SCREEN = 2.2;
const DEFAULT_SCALE_SMALL_SCREEN = 4.4;
const MOBILE_BREAKPOINT = 768;

const FullScreenVideo: React.FC<{ url: string }> = ({ url }) => {
  const [scale, setScale] = useState(DEFAULT_SCALE_LARGE_SCREEN);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setScale(DEFAULT_SCALE_SMALL_SCREEN);
      } else {
        setScale(DEFAULT_SCALE_LARGE_SCREEN);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100vw"
        height="100vh"
        className="absolute top-0 left-0"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default FullScreenVideo;
