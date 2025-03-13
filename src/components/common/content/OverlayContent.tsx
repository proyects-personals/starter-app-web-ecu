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
    <div className="relative w-full p-8 flex flex-col items-center justify-center text-white space-y-14 mt-52 z-0">
      <div className="font-bold text-center space-y-6">
        <h2 className="text-xl sm:text-3xl">Bienvenido a Ecuador</h2>
        <h1 className="text-2xl sm:text-4xl">1 Destino, 4 Aventuras</h1>
      </div>
      <div className="flex space-x-4">
        <button className="text-sm sm:text-base px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
          Botón Call to Actión
        </button>
        <button className="text-sm sm:text-base px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
          Registro de vendedor
        </button>
      </div>
      <div>
        <button className="text-sm sm:text-base px-6 py-2 bg-gray-500 rounded-lg hover:bg-green-500 transition-colors">
          Ecuador, {date}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {/* Días */}
        <div className="bg-transparent p-4 text-center rounded-lg">
          <div className="text-xl sm:text-6xl text-gray-300 sm:text-4xl">
            {timeLeft.days}
          </div>
          <div className="text-sm sm:text-2xl text-gray-500">Días</div>
        </div>

        {/* Hora */}
        <div className="bg-transparent p-4 text-center rounded-lg">
          <div className="text-xl sm:text-6xl text-gray-300 sm:text-4xl">
            {timeLeft.hours}
          </div>
          <div className="text-sm sm:text-2xl text-gray-500 sm:text-sm">
            Horas
          </div>
        </div>

        {/* Minutos */}
        <div className="bg-transparent p-4 text-center rounded-lg">
          <div className="text-xl sm:text-6xl text-gray-300 sm:text-4xl">
            {timeLeft.minutes}
          </div>
          <div className="text-sm sm:text-2xl text-gray-500 sm:text-sm">
            Minutos
          </div>
        </div>

        {/* Segundos */}
        <div className="bg-transparent p-4 text-center rounded-lg">
          <div className="text-xl sm:text-6xl text-gray-300 sm:text-4xl">
            {timeLeft.seconds}
          </div>
          <div className="text-sm sm:text-2xl text-gray-500 sm:text-sm">
            Segundos
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayContent;
