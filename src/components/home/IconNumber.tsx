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
    <animated.div className="text-2xl sm:text-6xl font-bold text-dark">
      {props.number.to((n) => Math.floor(n))}
    </animated.div>
  );
};

const IconNumber = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-18 sm:gap-16 md:gap-24 mt-8 w-full">
      <div className="flex flex-col items-center w-full sm:w-auto">
        <div className="text-4xl sm:text-6xl text-blue-600 mb-2">
          <i className="fas fa-home"></i>
        </div>
        <AnimatedNumbers target={100} />
        <p className="mt-4 text-lg text-dark text-center">Casas Vendidas</p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-auto">
        <div className="text-4xl sm:text-6xl text-red-500 mb-2">
          <i className="fas fa-heart"></i>
        </div>
        <AnimatedNumbers target={200} />
        <p className="mt-4 text-lg text-dark text-center">Me Gusta</p>
      </div>
    </div>
  );
};

export default IconNumber;
