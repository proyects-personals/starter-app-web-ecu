import React from 'react';
import ImageWithText from '../../../components/common/images/ImageWithText';
import crabImage from '../../../assets/animals/CangrejoWEB.jpg';
import ActivitiesCard from '../../../components/activities/ActivitiesCard';

const activities = [
  {
    title: 'Business to Business',
    cardTitle: 'B2B',
    description:
      'En el vasto universo de las posibilidades, siempre hemos buscado comprender nuestra posición y el propósito que nos mueve. A lo largo de la historia, las grandes mentes de la humanidad han tratado de desentrañar los misterios del cosmos, desde la antigua Grecia hasta las teorías más modernas de la física cuántica. Cada descubrimiento nos acerca un poco más a la verdad, pero a la vez nos abre nuevas preguntas que desafían nuestra percepción de la realidad. Sin embargo, al igual que un río que fluye de manera constante, seguimos avanzando en nuestra búsqueda del conocimiento, siempre con la esperanza de que algún día encontraremos respuestas a esas preguntas fundamentales.',
    imageUrl: crabImage,
    color: '#003B3F',
  },
  {
    title: 'Business to Business',
    cardTitle: 'B2B',
    description:
      'En el vasto universo de las posibilidades, siempre hemos buscado comprender nuestra posición y el propósito que nos mueve. A lo largo de la historia, las grandes mentes de la humanidad han tratado de desentrañar los misterios del cosmos, desde la antigua Grecia hasta las teorías más modernas de la física cuántica. Cada descubrimiento nos acerca un poco más a la verdad, pero a la vez nos abre nuevas preguntas que desafían nuestra percepción de la realidad. Sin embargo, al igual que un río que fluye de manera constante, seguimos avanzando en nuestra búsqueda del conocimiento, siempre con la esperanza de que algún día encontraremos respuestas a esas preguntas fundamentales.',
    imageUrl: crabImage,
    color: '#5B191B',
  },
];

const CommercialProposalScreen: React.FC = () => {
  const subtitle = 'B2B - B2C';
  return (
    <body className="grid grid-cols-1 space-y-8 mb-8">
      <ImageWithText
        imageUrl={crabImage}
        altText="Imagen de fondo"
        text="Enfoque Comercial"
        subtitle={subtitle}
      />
      <section className="grid grid-cols-1 p-10 sm:p-20">
        <ActivitiesCard activities={activities} />
      </section>
    </body>
  );
};

export default CommercialProposalScreen;
