import React from 'react';
import { useTheme } from '../../../hook/theme';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import Header from '../../../components/common/header/Header';
import HeroSection from '../../../components/home/HeroSection';
import bgVideo from '../../../assets/videos/bgVideo.mp4';

const HomeScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapperCustom>
      <Header />
      <HeroSection videoUrl={bgVideo} />
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center pt-28">
        <p
          className={`intro-id mt-4 text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
        >
          Bienvenido a mi página con video de fondo 🎥✨
        </p>

        <div className="h-[200vh] flex items-center justify-center">
          <p className="text-xl font-semibold text-white">
            Puedes hacer scroll 🚀
          </p>
        </div>
      </div>
    </PageWrapperCustom>
  );
};

export default HomeScreen;
