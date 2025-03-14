import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';

const PackagesScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://www.clinicaangeleslm.com/templates/yootheme/cache/03/paquete-empresarial-037d5616.png"
        altText="Imagen de fondo"
        text="Paquetes"
      />
      <PageWrapperCustom className="relative">
        <div className="relative z-10 p-4">trabajando......</div>
      </PageWrapperCustom>
    </div>
  );
};

export default PackagesScreen;
