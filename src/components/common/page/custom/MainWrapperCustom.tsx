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
      className={`${isDarkTheme ? 'bg-dark-white' : 'bg-light-white'} ${className ?? ''} min-h-screen`}
    >
      <main>{children}</main>
    </div>
  );
};

export default MainWrapperCustom;
