import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';
import UnderConstructionScreen from '../construction/UnderConstructionScreen';

const CatalogScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://outvio.com/static/8429e0eba67267293714bc8a45b11240/e30c4/cl0v2l2ei00097ad22w6cbncr.jpg"
        altText="Imagen de fondo"
        text="Catálogo"
      />
      <UnderConstructionScreen />
    </div>
  );
};

export default CatalogScreen;
