import React from 'react';
import ImageWithText from '../../../components/common/images/ImageWithText';
import crabImage from '../../../assets/animals/CangrejoWEB.jpg';
import ActivitySection from '../../../components/activities/ActivitySection';

const activities = [
  {
    title: 'Actividad 1',
    description:
      'En el vasto universo de las posibilidades, siempre hemos buscado comprender nuestra posición y el propósito que nos mueve. A lo largo de la historia, las grandes mentes de la humanidad han tratado de desentrañar los misterios del cosmos, desde la antigua Grecia hasta las teorías más modernas de la física cuántica. Cada descubrimiento nos acerca un poco más a la verdad, pero a la vez nos abre nuevas preguntas que desafían nuestra percepción de la realidad. Sin embargo, al igual que un río que fluye de manera constante, seguimos avanzando en nuestra búsqueda del conocimiento, siempre con la esperanza de que algún día encontraremos respuestas a esas preguntas fundamentales.',
    imageUrl: crabImage,
  },
  {
    title: 'Actividad 2',
    description:
      'En el vasto universo de las posibilidades, siempre hemos buscado comprender nuestra posición y el propósito que nos mueve. A lo largo de la historia, las grandes mentes de la humanidad han tratado de desentrañar los misterios del cosmos, desde la antigua Grecia hasta las teorías más modernas de la física cuántica. Cada descubrimiento nos acerca un poco más a la verdad, pero a la vez nos abre nuevas preguntas que desafían nuestra percepción de la realidad. Sin embargo, al igual que un río que fluye de manera constante, seguimos avanzando en nuestra búsqueda del conocimiento, siempre con la esperanza de que algún día encontraremos respuestas a esas preguntas fundamentales.',
    imageUrl: crabImage,
  },
  {
    title: 'Actividad 3',
    description:
      'En el vasto universo de las posibilidades, siempre hemos buscado comprender nuestra posición y el propósito que nos mueve. A lo largo de la historia, las grandes mentes de la humanidad han tratado de desentrañar los misterios del cosmos, desde la antigua Grecia hasta las teorías más modernas de la física cuántica. Cada descubrimiento nos acerca un poco más a la verdad, pero a la vez nos abre nuevas preguntas que desafían nuestra percepción de la realidad. Sin embargo, al igual que un río que fluye de manera constante, seguimos avanzando en nuestra búsqueda del conocimiento, siempre con la esperanza de que algún día encontraremos respuestas a esas preguntas fundamentales.',
    imageUrl: crabImage,
  },
];

const AgendaOfActivitiesScreen: React.FC = () => {
  return (
    <body className="grid grid-cols-1 space-y-8 mb-8">
      <ImageWithText
        imageUrl={crabImage}
        altText="Imagen de fondo"
        text="Agenda de Actividades"
        subtitle="adadad"
      />
      <section className="grid grid-cols-1 p-10 sm:p-20">
        <ActivitySection activities={activities} />
      </section>
    </body>
  );
};

export default AgendaOfActivitiesScreen;
