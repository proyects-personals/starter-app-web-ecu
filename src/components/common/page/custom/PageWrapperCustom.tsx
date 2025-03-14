import React from 'react';

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const PageWrapperCustom: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`min-h-screen mx-12 ${className ?? ''}`}>
      <main>{children}</main>
    </div>
  );
};

export default PageWrapperCustom;
