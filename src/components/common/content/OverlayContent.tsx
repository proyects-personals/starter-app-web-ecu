import React, { useEffect, useState } from 'react';

const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const COUNTDOWN_TARGET = new Date('april 15, 2025 00:00:00').getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = COUNTDOWN_TARGET - now;

  return {
    days: Math.floor(
      difference /
        (MILLISECONDS_IN_A_SECOND *
          SECONDS_IN_A_MINUTE *
          MINUTES_IN_AN_HOUR *
          HOURS_IN_A_DAY)
    ),
    hours: Math.floor(
      (difference %
        (MILLISECONDS_IN_A_SECOND *
          SECONDS_IN_A_MINUTE *
          MINUTES_IN_AN_HOUR *
          HOURS_IN_A_DAY)) /
        (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)
    ),
    minutes: Math.floor(
      (difference %
        (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)) /
        (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE)
    ),
    seconds: Math.floor(
      (difference % (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE)) /
        MILLISECONDS_IN_A_SECOND
    ),
  };
};

const OverlayContent: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setDate(
      new Date(COUNTDOWN_TARGET).toLocaleDateString('es-EC', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      MILLISECONDS_IN_A_SECOND
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-rows-4 gap-4 text-center text-white w-full h-full overflow-hidden">
      <div></div>
      <div className="text-center space-y-2 p-8 w-full">
        <h1 className="text-2xl sm:text-6xl font-bold">Bienvenido a Ecuador</h1>
        <h2 className="text-xl sm:text-5xl font-semibold">
          1 Destino, 4 Aventuras
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center w-full p-2">
        {/* <div className="flex flex-wrap justify-center gap-4">
          <button className="text-xs sm:text-base font-semibold px-6 py-2 bg-light-yellow rounded-lg hover:bg-amber-300 transition-colors border">
            Botón Call to Action
          </button>
          <button className="text-xs sm:text-base font-semibold px-6 py-2 bg-light-yellow rounded-lg hover:bg-amber-300 transition-colors border">
            Registro de vendedor
          </button>
        </div> */}
        <div className="flex justify-center mt-4">
          <button className="text-sm sm:text-base px-6 py-2 bg-dark rounded-lg hover:bg-gray-800 transition-colors">
            Ecuador, {date}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center h-auto p-4 w-full gap-8 text-white">
        {['Días', 'Horas', 'Minutos', 'Segundos'].map((unit, index) => (
          <div key={unit} className="text-center rounded-lg">
            <div className="text-xl sm:text-6xl">
              {Object.values(timeLeft)[index]}
            </div>
            <div className="text-sm sm:text-md">{unit}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 w-full text-white p-4">
        <div className="flex space-x-6 justify-end text-3xl">
          {[
            {
              href: 'https://www.facebook.com/profile.php?id=61557433015850',
              icon: 'fa-facebook',
            },
            {
              href: 'https://www.instagram.com/ccmquito/',
              icon: 'fa-instagram',
            },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-800 transition-colors"
            >
              <i className={`fa-brands ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayContent;
