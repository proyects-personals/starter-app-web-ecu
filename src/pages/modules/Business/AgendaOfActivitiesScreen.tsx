import React from 'react';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';
import ImageWithText from '../../../components/common/images/ImageWithText';

const AgendaOfActivitiesScreen: React.FC = () => {
  return (
    <div>
      <ImageWithText
        imageUrl="https://crehana-blog.imgix.net/media/filer_public/60/bf/60bf9069-e76c-47a3-afb6-f02a7cacb8c6/3_como_usar_una_agenda_de_actividades_diarias.jpg?auto=format&q=50"
        altText="Imagen de fondo"
        text="Agenda de Actividades"
      />
      <PageWrapperCustom className="relative">
        <div className="relative z-10 p-4">trabajando......</div>
      </PageWrapperCustom>
    </div>
  );
};

export default AgendaOfActivitiesScreen;
