import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';

const DiscoverEcuadorTravelScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://mytrip2ecuador.com/wp-content/uploads/2022/03/ecuador-mainland.jpg"
        altText="Imagen de fondo"
        text="Conoce Ecuador Travel"
      />
      <PageWrapperCustom className="relative">
        <div className="relative z-10 p-4">trabajando......</div>
      </PageWrapperCustom>
    </div>
  );
};

export default DiscoverEcuadorTravelScreen;
