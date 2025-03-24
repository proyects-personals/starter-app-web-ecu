import React from 'react';

type ImageWithTextProps = {
  imageUrl: string;
  altText: string;
  text: string;
  subtitle?: string;
  textAlignment?: 'start' | 'center' | 'end';
  titleSize?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
};

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imageUrl,
  altText,
  text,
  subtitle,
  textAlignment = 'start',
  titleSize = '4xl',
}) => {
  const titleClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  return (
    <div className="relative">
      <img src={imageUrl} alt={altText} className="w-full h-96 object-cover" />
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-50 p-10 ${
          textAlignment === 'center' ? 'justify-center text-center' : ''
        } ${textAlignment === 'end' ? 'justify-end text-right' : ''}`}
      >
        <div className="mt-28 flex flex-col">
          <span
            className={`text-white font-semibold ${titleClasses[titleSize]}`}
          >
            {text}
          </span>
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
