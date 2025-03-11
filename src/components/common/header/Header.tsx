import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
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
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex space-x-4">
          <p className="text-white">Some Info</p>
          <p className="text-white">Another Info</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-white">User</p>{' '}
        </div>
      </div>
      <div className="w-full bg-gray-800 p-4 text-white flex justify-center">
        <nav className="flex space-x-8">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
