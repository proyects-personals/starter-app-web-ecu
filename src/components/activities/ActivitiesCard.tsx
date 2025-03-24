import React from 'react';

type Activity = {
  title: string;
  cardTitle: string;
  description: string;
  imageUrl: string;
  color?: string;
};

type ActivitySectionProps = {
  activities: Activity[];
};

const ActivitiesCard: React.FC<ActivitySectionProps> = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => (
        <div
          key={activity.cardTitle}
          className="grid grid-cols-1 sm:grid-cols-1 mb-10"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-4xl text-dark">{activity.title}</h1>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-[4fr_1fr] border mt-6 p-10 rounded-xl shadow-lg"
            style={{ backgroundColor: activity.color || '#f5f5f5' }}
          >
            {/* Sección de texto ampliada */}
            <div className="flex flex-col p-5 text-justify">
              <h1 className="text-4xl text-white">{activity.cardTitle}</h1>
              <div className="border-t-4 border-white w-80 mt-4 mb-2"></div>
              <p className="text-lg text-white">{activity.description}</p>
            </div>
            {/* Imagen más pequeña */}
            <div className="flex justify-center">
              <img
                src={activity.imageUrl}
                alt="Imagen actividad"
                className="h-full w-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivitiesCard;
