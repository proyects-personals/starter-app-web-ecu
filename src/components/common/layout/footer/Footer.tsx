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
    <footer className="bg-dark text-white py-8 text-sm">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 sm:p-0">
        <div>
          <p>
            Nos destacamos por la capacidad para organizar eventos de gran
            magnitud de manera exitosa, gracias a nuestra experiencia y
            servicios especializados creamos momentos únicos.
          </p>
          <p>ventas@ccmq.ec</p>
          <p>Parque Bicentenario</p>
          <p>Av. Río Amazonas, Quito 170104, Ecuador</p>
          <p>+593 96 186 2730</p>
          <p>08:00 - 18:00</p>
        </div>

        <div className="flex sm:justify-center">
          <ul className="space-y-1">
            <li>
              <Link
                to="/agenda-activities"
                className="text-white hover:underline"
              >
                Agenda de actividades
              </Link>
            </li>
            <li>
              <Link
                to="/discover-Ecuador-travel"
                className="text-white hover:underline"
              >
                Conoce Travel Ecuador
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="text-white hover:underline">
                Catalogo
              </Link>
            </li>
            <li>
              <Link
                to="/commercial-proposal"
                className="text-white hover:underline"
              >
                Propuesta Comercial
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-white hover:underline">
                Paquetes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline">
                Contactanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="flex sm:justify-center">
          <ul className="space-y-2">
            <li>Síguenos</li>
            <li className="flex items-center space-x-2">
              <Facebook className="text-light-red" /> <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram className="text-light-red" /> <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <LinkedIn className="text-light-red" /> <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <YouTube className="text-light-red" /> <span>Youtube</span>
            </li>
            <li className="flex items-center space-x-2">
              <Twitter className="text-light-red" /> <span>Twitter</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t-2 border-gray-700 pt-4 flex flex-col md:flex-row justify-between">
        <div className="container mx-auto text-center md:text-left">
          <p>© 2025 Feria Ecuador Travel, Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
