import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoCCM from '../../../../assets/logos/LogoCCM.png';
import logoEcuFestb from '../../../../assets/logos/Logo-Ecuador-Festb1.png';
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
      <div className="grid grid-cols-2 py-1 px-18 mx-2 sm:mx-16">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoCCM}
              alt="Logo"
              className="h-28 w-28 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              src={logoEcuFestb}
              alt="Logo"
              className="h-28 w-28 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-800 p-4 text-white flex justify-center">
        <nav className="flex space-x-28 mx-2">
          {/* Enlace 1: Home */}
          <Link
            to="/"
            className="hover:text-gray-400 flex items-center"
            title="Home"
          >
            <HomeIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">Home</span>
          </Link>

          {/* Enlace 2: Agenda de actividades */}
          <Link
            to="/agenda-activities"
            className="hover:text-gray-400 flex items-center"
            title="Agenda de actividades"
          >
            <EventIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Agenda de actividades
            </span>
          </Link>

          {/* Enlace 3: Conoce Ecuador Travel */}
          <Link
            to="/discover-Ecuador-travel"
            className="hover:text-gray-400 flex items-center"
            title="Conoce Ecuador Travel"
          >
            <InfoIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Conoce Ecuador Travel
            </span>
          </Link>

          {/* Enlace 4: Catálogo */}
          <Link
            to="/catalog"
            className="hover:text-gray-400 flex items-center"
            title="Catálogo"
          >
            <BookIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Catálogo
            </span>
          </Link>

          {/* Enlace 5: Propuesta Comercial */}
          <Link
            to="/commercial-proposal"
            className="hover:text-gray-400 flex items-center"
            title="Propuesta Comercial"
          >
            <HandshakeIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Propuesta Comercial
            </span>
          </Link>

          {/* Enlace 6: Paquetes */}
          <Link
            to="/packages"
            className="hover:text-gray-400 flex items-center"
            title="Paquetes"
          >
            <LocalOfferIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Paquetes
            </span>
          </Link>

          {/* Enlace 7: Contáctanos */}
          <Link
            to="/contact"
            className="hover:text-gray-400 flex items-center"
            title="Contáctanos"
          >
            <MailIcon className="!hidden sm:block mr-2" />
            <span className="hidden sm:inline text-lg font-semibold">
              Contáctanos
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
