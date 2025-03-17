import React from 'react';
import HeroSection from '../../../components/home/HeroSection';
import IconNumber from '../../../components/home/IconNumber';
import monkeyImage from '../../../assets/animals/Mono.jpg';
import imageOso from '../.././../assets/animals/OsoWEB.jpg';
import imagePiquero from '../.././../assets/animals/PiqueroWEB.jpg';
import imageTortuga from '../.././../assets/animals/TortugaWEB.jpg';
import LocationInfo from '../../../components/home/LocationInfo';
import logoCCM from '../.././../assets/logos/LogoCCM.png';
import Carousel from '../../../components/common/carrusels/Carousel';

const HomeScreen: React.FC = () => {
  const images = [monkeyImage, imageOso, imagePiquero, imageTortuga];
  return (
    <div className="grid grid-cols-1 space-y-8 mb-8">
      <section>
        <HeroSection videoUrl={'as'} />
      </section>
      <section>
        <IconNumber />
      </section>
      <section className="grid grid-cols-2 bg-light-yellow50">
        <div className="p-20 text-white">
          <h1 className="text-4xl">Ecuador Travel</h1>
          <div className="border-t border-white w-60 mt-4"></div>
          <p className="pt-4 text-md">
            Ecuador travel es una plataforma innovadora que conecta la oferta
            ecuatoriana con dos públicos clave: empresas del sector (B2B) y
            viajeros finales (B2C) durante 4 días.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Carousel images={images} />
        </div>
      </section>
      <section className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">Partners</h1>
          <div className="border-t border-light-yellow50 w-40 mt-4"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 flex justify-center items-center">
            <img src={logoCCM} alt="Logo" className="w-32 h-auto" />
          </div>
          <div className="p-2 flex justify-center items-center">
            <img src={logoCCM} alt="Logo" className="w-32 h-auto" />
          </div>
          <div className="p-2 flex justify-center items-center">
            <img src={logoCCM} alt="Logo" className="w-32 h-auto" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-center bg-light-base50 h-40">
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot text-4xl mr-4"></i>
            <h1 className="text-4xl">Cómo Llegar</h1>
          </div>
          <div className="border-t border-light-base200 w-60 mt-4"></div>
        </div>
        <div>
          <LocationInfo />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
