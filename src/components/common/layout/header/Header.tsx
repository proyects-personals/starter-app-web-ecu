import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ease-in-out ${
        scrolled ? 'bg-dark text-white' : 'bg-transparent text-black'
      }`}
    >
      {/* Logos */}
      <div className="grid grid-cols-2 py-1 px-4 sm:px-16">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logoCCM}
              alt="Logo"
              className="h-20 sm:h-28 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-start">
          <Link to="/">
            <img
              src={logoEcuFestb}
              alt="Logo"
              className="h-20 sm:h-28 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Barra de Navegación */}
      <nav className="w-full bg-dark p-3 text-white flex justify-center">
        <div className="flex space-x-6 sm:space-x-10 lg:space-x-16">
          {[
            { to: '/', icon: <HomeIcon />, text: 'Home' },
            {
              to: '/agenda-activities',
              icon: <EventIcon />,
              text: 'Agenda de actividades',
            },
            {
              to: '/discover-Ecuador-travel',
              icon: <InfoIcon />,
              text: 'Conoce Ecuador Travel',
            },
            { to: '/catalog', icon: <BookIcon />, text: 'Catálogo' },
            {
              to: '/commercial-proposal',
              icon: <HandshakeIcon />,
              text: 'Propuesta Comercial',
            },
            { to: '/packages', icon: <LocalOfferIcon />, text: 'Paquetes' },
            { to: '/contact', icon: <MailIcon />, text: 'Contáctanos' },
          ].map(({ to, icon, text }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center hover:text-gray-400 transition-all ${
                location.pathname === to ? 'text-yellow-400 font-bold' : ''
              }`}
            >
              <span className="block text-lg md:text-xl">{icon}</span>
              <span className="hidden md:inline ml-2 text-base lg:text-lg font-semibold">
                {text}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
