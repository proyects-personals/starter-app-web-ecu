import { useSpring, animated } from 'react-spring';
import iconArea from '../../assets/icons/areaIcon.png';
import iconStand from '../../assets/icons/standIcon.png';

// Constantes para los números
const STANDS_COUNT = 150;
const AREA_M2 = 2500;
const ANIMATION_DURATION = 2000;

const ICONS_DATA = [
  {
    icon: iconStand,
    target: STANDS_COUNT,
    label: 'Stands',
  },
  {
    icon: iconArea,
    target: AREA_M2,
    label: 'M² de Feria',
  },
];

const AnimatedNumbers = ({ target }: { target: number }) => {
  const props = useSpring({
    number: target,
    from: { number: 0 },
    config: { duration: ANIMATION_DURATION },
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
      {ICONS_DATA.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-auto px-4 sm:px-12"
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-12 sm:w-16 md:w-24 mb-2"
          />
          <AnimatedNumbers target={item.target} />
          <p className="mt-4 text-lg sm:text-2xl text-gray-500 text-center">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IconNumber;
