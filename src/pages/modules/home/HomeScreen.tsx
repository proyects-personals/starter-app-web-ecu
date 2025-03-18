import React from 'react';
import HeroSection from '../../../components/home/HeroSection';
import IconNumber from '../../../components/home/IconNumber';
import monkeyImage from '../../../assets/animals/Mono.jpg';
import imageOso from '../.././../assets/animals/OsoWEB.jpg';
import imagePiquero from '../.././../assets/animals/PiqueroWEB.jpg';
import imageTortuga from '../.././../assets/animals/TortugaWEB.jpg';
import LocationInfo from '../../../components/home/LocationInfo';
import Carousel from '../../../components/common/carrusels/Carousel';
import videoHome from '../../../assets/animations/bgVideo.mp4';
import halfOfTheWorld from '../../../assets/places/MitadMundoWEB.jpg';
import Partners1Image from '../../../assets/logos/Partners1.png';

const HomeScreen: React.FC = () => {
  const images = [monkeyImage, imageOso, imagePiquero, imageTortuga];
  return (
    <div className="grid grid-cols-1 space-y-8 mb-8">
      <section>
        <HeroSection videoUrl={videoHome} />
      </section>
      <section>
        <IconNumber />
      </section>
      <section
        className="grid grid-cols-1 sm:grid-cols-2  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${halfOfTheWorld})` }}
      >
        <div className="absolute inset-0 bg-light-yellow50 opacity-60"></div>{' '}
        {/* Capa de opacidad */}
        <div className="p-10 sm:p-20 text-white relative z-10">
          <h1 className="text-4xl">Ecuador Travel</h1>
          <div className="border-t-2 border-white w-60 mt-4"></div>
          <p className="pt-4 text-md">
            Es una plataforma turistica innovadora que conecta la oferta
            ecuatoriana con dos públicos clave: empresas del sector (B2B) y
            viajeros finales (B2C), durante 4 días. En el ámbito B2B, el evento
            reúne a tour operadores, agencias y hoteles en un mismo lugar para
            facilitar alianzas comerciales, ruedas de negocios y acuerdos
            estratégicos.
          </p>
        </div>
        <div className="flex justify-center items-center relative z-10 p-2 sm:p-0">
          <Carousel images={images} />
        </div>
      </section>

      <section className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl text-dark">Partners</h1>
          <div className="border-t-2 border-light-red w-44 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-center items-center">
            <img src={Partners1Image} alt="Logo" className="w-52 h-auto" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1">
        <div className="flex flex-col justify-center items-center bg-light-base50 h-40">
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot text-4xl mr-4 text-light-red"></i>{' '}
            <h1 className="text-4xl text-dark">Cómo Llegar</h1>
          </div>
          <div className="border-t-2 border-light-red w-72 mt-4"></div>
        </div>
        <div>
          <LocationInfo />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
