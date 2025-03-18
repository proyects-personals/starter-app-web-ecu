import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';
import UnderConstructionScreen from '../construction/UnderConstructionScreen';

const CommercialProposalScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://emprendepyme.net/wp-content/uploads/2023/03/propuesta-comercial-1200x742.jpg"
        altText="Imagen de fondo"
        text="Propuesta comercial"
      />
      <UnderConstructionScreen />
    </div>
  );
};

export default CommercialProposalScreen;
