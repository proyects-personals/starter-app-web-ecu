import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumbers = ({ target }: { target: number }) => {
  const [number, setNumber] = useState(0);

  const props = useSpring({
    number: number,
    from: { number: 0 },
    to: { number: target },
    config: { duration: 2000 },
  });

  useEffect(() => {
    setNumber(target);
  }, [target]);

  return (
    <animated.div className="text-2xl sm:text-6xl font-bold">
      {props.number.to((n) => Math.floor(n))}
    </animated.div>
  );
};

const IconNumber = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 gap-12 sm:gap-16 md:gap-24 mx-6 sm:mx-12 md:mx-24 mt-8">
      {/* Primera Columna */}
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-6xl text-blue-600 mb-2">
          <i className="fas fa-home"></i>
        </div>
        <AnimatedNumbers target={100} />
      </div>

      {/* Segunda Columna */}
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-6xl text-red-500 mb-2">
          <i className="fas fa-heart"></i>
        </div>
        <AnimatedNumbers target={200} />
      </div>

      {/* Tercera Columna */}
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-6xl text-yellow-500 mb-2">
          <i className="fas fa-star"></i>
        </div>
        <AnimatedNumbers target={300} />
      </div>
    </div>
  );
};

export default IconNumber;
