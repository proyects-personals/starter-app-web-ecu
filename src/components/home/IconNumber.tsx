import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import iconArea from '../../assets/icons/areaIcon.png';
import iconStand from '../../assets/icons/standIcon.png';

const AnimatedNumbers = ({ target }: { target: number }) => {
  const props = useSpring({
    number: target,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  return (
    <div className="relative flex flex-col items-center">
      <animated.div className="text-xl sm:text-4xl md:text-6xl font-bold text-gray-800">
        {props.number.to((n) => `+${Math.floor(n)}`)}
      </animated.div>
    </div>
  );
};

const IconNumber = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-20 mt-8 w-full">
      <div className="flex flex-col items-center w-full sm:w-auto px-4 sm:px-12">
        <img src={iconStand} alt="Área" className="w-12 sm:w-16 md:w-24 mb-2" />
        <AnimatedNumbers target={150} />
        <p className="mt-4 text-lg sm:text-2xl text-gray-500 text-center">
          Stands
        </p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-auto px-4 sm:px-12">
        <img src={iconArea} alt="Stand" className="w-12 sm:w-16 md:w-24 mb-2" />
        <AnimatedNumbers target={2500} />
        <p className="mt-4 text-lg sm:text-2xl text-gray-500 text-center">
          M² de Feria
        </p>
      </div>
    </div>
  );
};

export default IconNumber;
