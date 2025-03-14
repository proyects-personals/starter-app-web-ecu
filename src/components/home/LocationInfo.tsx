import React from 'react';

const LocationInfo: React.FC = () => {
  const googleMapsLink =
    'https://www.google.com/maps?q=Avenida+Amazonas,+Quito'; // Sustituye esto con la URL de tu ubicación

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-sky-50 shadow-lg rounded-md">
        {/* Fila 1: Información sobre cómo llegar */}
        <div className="flex flex-col text-left p-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
            Cómo llegar
          </h2>
          <button
            onClick={() => window.open(googleMapsLink, '_blank')}
            className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md mb-4 hover:bg-indigo-700 transition duration-300"
          >
            Ver en Google Maps
          </button>
          <p className="text-md pt-4 text-gray-800">
            Cercanía con el Aeropuerto y accesibilidad mediante el Metro de
            Quito. Ubicado dentro del Parque Bicentenario,. Un espacio de alta
            afluencia.
          </p>
          <h1 className="text-2xl font-semibold mt-4">Contacto:</h1>
          <ul className="text-gray-700 mt-2">
            <li>Email: ptm@perutravelmart.com.pe</li>
            <li>Teléfono 1: +51 1 908 874 658</li>
            <li>Teléfono 2: +51 1 715-6555</li>
          </ul>
        </div>

        {/* Fila 2: Mapa con dirección */}
        <div className="flex justify-center items-center bg-white p-4 rounded-md shadow-lg">
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.2311921260877!2d-79.89943576053024!3d-2.1955162795527593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d591d06d2fc0b1%3A0xcfc4ad8dbb194f8c!2sAvenida%20Amazonas%2C%20Quito!5e0!3m2!1ses-419!2sec!4v1679922729020!5m2!1ses-419!2sec"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
