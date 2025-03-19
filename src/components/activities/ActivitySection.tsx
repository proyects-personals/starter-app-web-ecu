import React from 'react';

type Activity = {
  title: string;
  description: string;
  imageUrl: string;
};

type ActivitySectionProps = {
  activities: Activity[];
};

const ActivitySection: React.FC<ActivitySectionProps> = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => (
        <div
          key={activity.title}
          className="grid grid-cols-1 sm:grid-cols-2 mb-10"
        >
          <div className="flex justify-center">
            <img
              src={activity.imageUrl}
              alt="Imagen actividad"
              className="h-80 w-96 object-cover"
            />
          </div>
          <div className="flex flex-col p-5 text-justify">
            <h1 className="text-4xl">{activity.title}</h1>
            <div className="border-t-4 border-light-red w-full mt-4 mb-2"></div>
            <p className="text-lg text-gray-700">{activity.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivitySection;
