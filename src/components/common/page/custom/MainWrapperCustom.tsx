import React from 'react';
import { useTheme } from '../../../../hook/theme';

type MainWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MainWrapperCustom: React.FC<MainWrapperProps> = ({
  children,
  className,
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${isDarkTheme ? 'bg-dark-primary' : 'bg-light-primary'} ${className ?? ''} min-h-screen mb-12`}
    >
      <main>{children}</main>
    </div>
  );
};

export default MainWrapperCustom;
