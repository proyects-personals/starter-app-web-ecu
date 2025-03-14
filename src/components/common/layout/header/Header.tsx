import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoEcuFest from '../../../../assets/logos/Logo-Ecuador-Fest1.png';
import {
  Home as HomeIcon,
  Event as EventIcon,
  Info as InfoIcon,
  Book as BookIcon,
  Handshake as HandshakeIcon,
  LocalOffer as LocalOfferIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ease-in-out ${
        scrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-black'
      }`}
    >
      <div className="flex justify-between items-center py-1 px-18 mx-2 sm:mx-28">
        <div className="flex items-center space-x-6 gap-12">
          {/* Enlace al Home */}
          <Link to="/">
            <img
              src={logoEcuFest}
              alt="Logo"
              className="h-20 w-20 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <p className="text-white">ECUADOR TRAVEL</p>
        </div>
      </div>
      <div className="w-full bg-gray-800 p-4 text-white flex justify-center">
        <nav className="flex space-x-6 mx-2">
          {/* Enlace 1: Home */}
          <Link
            to="/"
            className="hover:text-gray-400 flex items-center"
            title="Home"
          >
            <HomeIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Enlace 2: Agenda de actividades */}
          <Link
            to="/agenda-activities"
            className="hover:text-gray-400 flex items-center"
            title="Agenda de actividades"
          >
            <EventIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Agenda de actividades</span>
          </Link>

          {/* Enlace 3: Conoce Ecuador Travel */}
          <Link
            to="/discover-Ecuador-travel"
            className="hover:text-gray-400 flex items-center"
            title="Conoce Ecuador Travel"
          >
            <InfoIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Conoce Ecuador Travel</span>
          </Link>

          {/* Enlace 4: Catálogo */}
          <Link
            to="/catalog"
            className="hover:text-gray-400 flex items-center"
            title="Catálogo"
          >
            <BookIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Catálogo</span>
          </Link>

          {/* Enlace 5: Propuesta Comercial */}
          <Link
            to="/commercial-proposal"
            className="hover:text-gray-400 flex items-center"
            title="Propuesta Comercial"
          >
            <HandshakeIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Propuesta Comercial</span>
          </Link>

          {/* Enlace 6: Paquetes */}
          <Link
            to="/packages"
            className="hover:text-gray-400 flex items-center"
            title="Paquetes"
          >
            <LocalOfferIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Paquetes</span>
          </Link>

          {/* Enlace 7: Contáctanos */}
          <Link
            to="/contact"
            className="hover:text-gray-400 flex items-center"
            title="Contáctanos"
          >
            <MailIcon className="sm:hidden mr-2" />
            <span className="hidden sm:inline">Contáctanos</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
