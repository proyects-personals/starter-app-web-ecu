import React from 'react';

type ImageWithTextProps = {
  imageUrl: string;
  altText: string;
  text: string;
};

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageUrl,
  altText,
  text,
}) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt={altText} className="w-full h-80 object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50">
        <span className="text-white text-4xl font-semibold mb-4">{text}</span>
      </div>
    </div>
  );
};

export default ImageWithText;
