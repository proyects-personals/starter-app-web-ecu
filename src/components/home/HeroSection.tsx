import React from 'react';
import OverlayContent from '../common/content/OverlayContent';
import FullScreenVideo from '../common/video/FullScreenVideo';

const HeroSection: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FullScreenVideo url={videoUrl} />
      </div>
      <div className="absolute inset-0 z-20">
        <OverlayContent />
      </div>
    </div>
  );
};

export default HeroSection;
