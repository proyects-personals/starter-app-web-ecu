import React from 'react';

const LocationInfo: React.FC = () => {
  const googleMapsLink = 'https://maps.app.goo.gl/j7qdQGjyczNYM4d56';

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-md">
        {/* Fila 1: Información sobre cómo llegar */}
        <div className="flex flex-col text-left p-20">
          <h1 className="text-2xl text-dark">
            Centro de Convenciones Metropolitano de Quito CCMQ
          </h1>
          <div className="border-t border-light-base200 w-full mt-4 mb-4"></div>
          <button
            onClick={() => window.open(googleMapsLink, '_blank')}
            className="bg-light-base200 text-white py-2 px-6 rounded-md shadow-md mb-4 hover:bg-teal-500 transition duration-300 flex items-center space-x-2 justify-center"
          >
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
            <span>Ver en Google Maps</span>
          </button>

          <p className="text-md pt-4 text-gray-800">
            Cercanía con el Aeropuerto y accesibilidad mediante el Metro de
            Quito. Ubicado dentro del Parque Bicentenario,. Un espacio de alta
            afluencia.
          </p>
          <ul className="text-gray-700 mt-2">
            <li className="flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i>
              <span>ssevilla@ccmq.ec</span>
            </li>
            <li className="flex items-center">
              <i className="fa-solid fa-phone mr-2"></i>
              <span>T+593 00 000 0000</span>
            </li>
            <li className="flex items-center">
              <i className="fa-brands fa-whatsapp mr-2"></i>
              <span>+593 00 000 0000</span>
            </li>
          </ul>
        </div>

        {/* Fila 2: Mapa con dirección */}
        <div className="flex justify-center items-center rounded-md">
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
