import React, { useEffect, useState } from 'react';

const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;

const OverlayContent: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-EC', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(formattedDate);
  }, []);

  useEffect(() => {
    const targetDate = new Date('June 26, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(
        difference /
          (MILLISECONDS_IN_A_SECOND *
            SECONDS_IN_A_MINUTE *
            MINUTES_IN_AN_HOUR *
            HOURS_IN_A_DAY)
      );
      const hours = Math.floor(
        (difference %
          (MILLISECONDS_IN_A_SECOND *
            SECONDS_IN_A_MINUTE *
            MINUTES_IN_AN_HOUR *
            HOURS_IN_A_DAY)) /
          (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)
      );
      const minutes = Math.floor(
        (difference %
          (MILLISECONDS_IN_A_SECOND *
            SECONDS_IN_A_MINUTE *
            MINUTES_IN_AN_HOUR)) /
          (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE)
      );
      const seconds = Math.floor(
        (difference % (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE)) /
          MILLISECONDS_IN_A_SECOND
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, MILLISECONDS_IN_A_SECOND);

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

      {/* Botones de acción */}
      <div className="grid grid-cols-1 items-center w-full p-2">
        <div className="flex space-x-4 items-justify-center justify-center">
          <button className="text-xs sm:text-base font-semibold px-6 py-2 bg-light-yellow rounded-lg hover:bg-amber-300 transition-colors border  sm:w-62">
            Botón Call to Actión
          </button>
          <button className="text-xs sm:text-base font-semibold px-6 py-2 bg-light-yellow rounded-lg hover:bg-amber-300 transition-colors border  w-62">
            Registro de vendedor
          </button>
        </div>
        <div className="flex justify-center">
          <button className="text-sm sm:text-base px-6 py-2 bg-dark rounded-lg hover:bg-gray-800 transition-colors">
            Ecuador, {date}
          </button>
        </div>
      </div>
      {/* Contador */}
      <div className="flex flex-wrap justify-center h-auto p-4 w-full gap-8 space-x-4 text-white">
        {/* Días */}
        <div className="text-center rounded-lg">
          <div className="text-xl sm:text-6xl">{timeLeft.days}</div>
          <div className="text-sm sm:text-md">Días</div>
        </div>

        {/* Horas */}
        <div className="text-center rounded-lg">
          <div className="text-xl sm:text-6xl">{timeLeft.hours}</div>
          <div className="text-sm sm:text-md">Horas</div>
        </div>

        {/* Minutos */}
        <div className="text-center rounded-lg">
          <div className="text-xl sm:text-6xl">{timeLeft.minutes}</div>
          <div className="text-sm sm:text-md">Minutos</div>
        </div>

        {/* Segundos */}
        <div className="text-center rounded-lg">
          <div className="text-xl sm:text-6xl">{timeLeft.seconds}</div>
          <div className="text-sm sm:text-md">Segundos</div>
        </div>
      </div>

      {/* Línea final */}
      <div className="grid grid-cols-1 w-full text-white p-4">
        <div className="flex space-x-6 justify-end text-3xl">
          <a
            href="https://www.facebook.com/profile.php?id=61557433015850"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ehite hover:text-gray-800 transition-colors"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ccmquito/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 transition-colors"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayContent;
