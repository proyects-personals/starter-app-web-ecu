import React from 'react';

const LocationInfo: React.FC = () => {
  const googleMapsLink = 'https://maps.app.goo.gl/j7qdQGjyczNYM4d56';

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.805203979529!2d-78.4896722!3d-0.14691559999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5854cc3770f7b%3A0xded72d14b4f1d7a7!2sCentro%20de%20Convenciones%20Metropolitano%20de%20Quito%20CCMQ!5e0!3m2!1ses-419!2sec!4v1741983302029!5m2!1ses-419!2sec"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
