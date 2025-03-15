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
    <animated.div className="text-2xl sm:text-5xl font-bold">
      {props.number.to((n) => Math.floor(n))}
    </animated.div>
  );
};

const IconNumber = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 text-center space-x-2 mt-12">
      <div className="grid-cols-1">
        <div>
          <i className="fas fa-home text-5xl"></i>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center space-x-1 text-2xl sm:text-4xl font-bold">
            <span className="text-4xl">+</span>
            <AnimatedNumbers target={100} />
          </div>
          <div>
            <h1 className="text-xl">Estadísticas</h1>
          </div>
        </div>
      </div>
      <div className="grid-cols-1">
        <div>
          <i className="fas fa-home text-5xl"></i>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center space-x-1 text-2xl sm:text-4xl font-bold">
            <span className="text-5xl">+</span>
            <AnimatedNumbers target={100} />
          </div>
          <div>
            <h1 className="text-xl">Países</h1>
          </div>
        </div>
      </div>
      <div className="grid-cols-1">
        <div>
          <i className="fas fa-home text-5xl"></i>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-center space-x-1 text-2xl sm:text-4xl font-bold">
            <span className="text-5xl">+</span>
            <AnimatedNumbers target={100} />
          </div>
          <div>
            <h1 className="text-xl">Clientes</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconNumber;
