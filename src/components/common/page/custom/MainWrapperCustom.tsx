import React from 'react';

type MainWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MainWrapperCustom: React.FC<MainWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`bg-white ${className ?? ''} min-h-screen`}>
      <main>{children}</main>
    </div>
  );
};

export default MainWrapperCustom;
