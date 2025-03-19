import React from 'react';

type ImageWithTextProps = {
  imageUrl: string;
  altText: string;
  text: string;
  subtitle?: string;
};

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageUrl,
  altText,
  text,
  subtitle,
}) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt={altText} className="w-full h-96 object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start bg-black bg-opacity-50 p-10">
        <div className="mt-10 flex flex-col">
          <span className="text-white text-4xl font-semibold">{text}</span>
          {subtitle && (
            <span className="text-white text-lg font-semibold mt-2">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
