import React from 'react';
import OverlayContent from '../common/content/OverlayContent';
import FullScreenVideo from '../common/video/FullScreenVideo';

const HeroSection: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-light-red">
      <div className="absolute inset-0 z-0">
        <FullScreenVideo
          url={videoUrl}
          fallbackImage={
            'https://crehana-blog.imgix.net/media/filer_public/60/bf/60bf9069-e76c-47a3-afb6-f02a7cacb8c6/3_como_usar_una_agenda_de_actividades_diarias.jpg?auto=format&q=50'
          }
        />
      </div>
      <div className="absolute inset-0 z-20">
        <OverlayContent />
      </div>
    </div>
  );
};

export default HeroSection;
