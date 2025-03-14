import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Twitter,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Primera Columna con Cuatro Filas Centradas */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contacto</h3>
          <p>📍 Av. Paseo de la República 6348, Miraflores, Lima, Perú</p>
          <p>📧 supplier@perutravelmart.com.pe</p>
          <p>📧 buyer@perutravelmart.com.pe</p>
          <p>📧 ptm@perutravelmart.com.pe</p>
          <p>📞 +51 908 874 658</p>
          <p>📞 +51 715-6555</p>
        </div>

        {/* Columna 2: Info */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Perú Travel Mart</h3>
          <ul className="space-y-1">
            <li>➤ Presentación</li>
            <li>➤ Programa 2025</li>
            <li>➤ Seminarios</li>
            <li>➤ Exhibición</li>
            <li>➤ Tours Educativos</li>
            <li>➤ Preguntas Frecuentes</li>
          </ul>
        </div> */}

        {/* Columna 3: Enlaces */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/agenda-activities"
                className="text-white hover:underline"
              >
                ➤ Agenda de actividades
              </Link>
            </li>
            <li>
              <Link
                to="/discover-Ecuador-travel"
                className="text-white hover:underline"
              >
                ➤ Conoce Travel Ecuador
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="text-white hover:underline">
                ➤ Catalogo
              </Link>
            </li>
            <li>
              <Link
                to="/commercial-proposal"
                className="text-white hover:underline"
              >
                ➤ Propuesta comercial
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-white hover:underline">
                ➤ Paquetes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline">
                ➤ Contactanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Facebook className="text-red-500" /> <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram className="text-red-500" /> <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <LinkedIn className="text-red-500" /> <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <YouTube className="text-red-500" /> <span>Youtube</span>
            </li>
            <li className="flex items-center space-x-2">
              <Twitter className="text-red-500" /> <span>Twitter</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Fila inferior con Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between px-6">
        <p>© 2025 Ecuador Travel Mart, Todos los derechos reservados</p>
        <p className="text-gray-400">Ecuador Travel</p>
      </div>
    </footer>
  );
};

export default Footer;
