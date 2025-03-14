import React from 'react';
import { motion } from 'framer-motion'; // Importamos framer-motion
import HeroSection from '../../../components/home/HeroSection';
import bgVideo from '../../../assets/videos/bgVideo.mp4';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import IconNumber from '../../../components/home/IconNumber';
import monkeyImage from '../../../assets/animals/Mono.jpg';
import LocationInfo from '../../../components/home/LocationInfo';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <HeroSection videoUrl={bgVideo} />
      <IconNumber />
      <PageWrapperCustom>
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-sky-50 rounded-lg shadow-lg rounded-md">
            <div className="text-left p-4">
              <h1 className="text-4xl">Ecuador Travel</h1>
              <p className="pt-4 text-md text-gray-800">
                Ecuador travel es una plataforma innovadora que conecta la
                oferta ecuatoriana con dos públicos clave: empresas del sector
                (B2B) y viajeros finales (B2C) durante 4 días.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img
                src={monkeyImage}
                alt="monkey"
                className="w-72 h-80 object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <h1 className="text-4xl text-center">Patrocinadores</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-48 mt-6">
              {/* Fila de patrocinadores con animación */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }} // Agregamos animación en hover
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex justify-center items-center"
              >
                <img
                  src={monkeyImage}
                  alt="patrocinador"
                  className="w-36 h-36 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex justify-center items-center"
              >
                <img
                  src={monkeyImage}
                  alt="patrocinador"
                  className="w-36 h-36 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex justify-center items-center"
              >
                <img
                  src={monkeyImage}
                  alt="patrocinador"
                  className="w-36 h-36 object-cover"
                />
              </motion.div>
            </div>
          </div>

          <LocationInfo />
        </div>
      </PageWrapperCustom>
    </div>
  );
};

export default HomeScreen;
