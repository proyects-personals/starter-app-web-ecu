import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';

const ContactScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tZDcq_SN36asHnMYpnXrFgydw_cK1ryQXw&s"
        altText="Imagen de fondo"
        text="Contáctanos"
      />
      <PageWrapperCustom className="relative">
        <div className="relative z-10 p-4">trabajando......</div>
      </PageWrapperCustom>
    </div>
  );
};

export default ContactScreen;
