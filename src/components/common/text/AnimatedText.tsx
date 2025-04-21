import React from 'react';
import classNames from 'classnames';

type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'zoom-in'
  | 'bounce'
  | 'word-by-word'
  | 'bounce-letters'
  | 'zoom-letters'
  | 'slide-in-letters';

type AnimatedTextProps = {
  text: string;
  animation?: AnimationType;
  className?: string;
};

const baseAnimations: Record<string, string> = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'slide-down': 'animate-slide-down',
  'zoom-in': 'animate-zoom-in',
  bounce: 'animate-bounce',
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animation = 'fade-in',
  className = '',
}) => {
  const isPerWord = animation === 'word-by-word';

  const isPerLetter =
    animation === 'bounce-letters' ||
    animation === 'zoom-letters' ||
    animation === 'slide-in-letters';

  if (isPerWord) {
    return (
      <span className={className}>
        {text.split(' ').map((word, i) => (
          <span
            key={i}
            className="inline-block opacity-0 animate-fade-in"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationFillMode: 'forwards',
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </span>
    );
  }

  if (isPerLetter) {
    const animationClass =
      animation === 'bounce-letters'
        ? 'animate-bounce'
        : animation === 'zoom-letters'
          ? 'animate-zoom-in'
          : 'animate-slide-up';

    return (
      <span className={className}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block opacity-0 ${animationClass}`}
            style={{
              animationDelay: `${i * 0.05}s`,
              animationFillMode: 'forwards',
            }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={classNames(baseAnimations[animation] || '', className)}>
      {text}
    </span>
  );
};

export default AnimatedText;
