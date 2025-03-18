import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';
import UnderConstructionScreen from '../construction/UnderConstructionScreen';

const DiscoverEcuadorTravelScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://mytrip2ecuador.com/wp-content/uploads/2022/03/ecuador-mainland.jpg"
        altText="Imagen de fondo"
        text="Conoce Ecuador Travel"
      />
      <UnderConstructionScreen />
    </div>
  );
};

export default DiscoverEcuadorTravelScreen;
