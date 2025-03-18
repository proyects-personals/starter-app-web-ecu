import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';
import UnderConstructionScreen from '../construction/UnderConstructionScreen';

const PackagesScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://www.clinicaangeleslm.com/templates/yootheme/cache/03/paquete-empresarial-037d5616.png"
        altText="Imagen de fondo"
        text="Paquetes"
      />
      <UnderConstructionScreen />
    </div>
  );
};

export default PackagesScreen;
