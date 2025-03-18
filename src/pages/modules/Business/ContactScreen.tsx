import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';
import UnderConstructionScreen from '../construction/UnderConstructionScreen';

const ContactScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tZDcq_SN36asHnMYpnXrFgydw_cK1ryQXw&s"
        altText="Imagen de fondo"
        text="Contáctanos"
      />
      <UnderConstructionScreen />
    </div>
  );
};

export default ContactScreen;
