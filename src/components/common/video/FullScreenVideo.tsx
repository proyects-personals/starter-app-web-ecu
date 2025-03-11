import React from 'react';
import ReactPlayer from 'react-player';

const FullScreenVideo: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="absolute inset-0">
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100%"
        height="160%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default FullScreenVideo;
