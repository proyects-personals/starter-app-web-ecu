import React from 'react';
import ImageWithText from '../../../components/common/images/ImageWithText';

const ContactScreen: React.FC = () => {
  return (
    <div>
      {/* Imagen de encabezado */}
      <ImageWithText
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tZDcq_SN36asHnMYpnXrFgydw_cK1ryQXw&s"
        altText="Imagen de fondo"
        text="Contáctanos"
        subtitle="Para más información"
        textAlignment="center"
        titleSize="7xl"
      />

      {/* Sección de contacto */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna 1: Información general */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">
              ¡Habla con nosotros!
            </h2>
            <p className="mt-2 text-gray-600">
              Cada pabellón de <span className="font-bold">Ecuador Travel</span>{' '}
              ha sido diseñado para sumergir a los visitantes en la riqueza y
              diversidad de los destinos turísticos del país. Más allá de
              exhibiciones convencionales, estos espacios ofrecen experiencias
              que permiten explorar la gastronomía, cultura y servicios
              turísticos de Ecuador en su lugar.
            </p>
          </div>

          {/* Columna 2: Información de contacto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">
              Nuestra información
            </h2>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Dirección:</span> Centro de
              Convenciones Metropolitano de Quito (CCMQ).
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Teléfono:</span> +593 96 186 2730
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Email:</span> ssevillag@cormaqc.
            </p>
          </div>

          {/* Columna 3: Formulario de contacto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">
              ¿Alguna pregunta?
            </h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Nombre y apellidos..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
              <input
                type="email"
                placeholder="Correo electrónico..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
              <textarea
                placeholder="Escribe un mensaje..."
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
