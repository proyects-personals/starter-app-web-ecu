import React from 'react';
import { useTheme } from '../../../hook/theme';
import ThemeController from '../../themeController/ThemeController';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <header
      className={`flex items-center justify-between px-8 h-16 w-full ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}
    >
      <div className="flex-2">
        <h1
          className={`hidden md:block ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl font-bold`}
        >
          header
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fab fa-facebook ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <i
            className={`fab fa-linkedin ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <i
            className={`fab fa-twitter ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}
          ></i>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
