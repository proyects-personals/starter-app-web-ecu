import React from 'react';
import { useTheme } from '../../../hook/theme';
import PageWrapperCustom from '../../../components/common/page/custom/PageWrapperCustom';

const HomeScreen: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <PageWrapperCustom>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p
          className={`intro-id mt-4 text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-black'}`}
        >
          hola
        </p>
      </div>
    </PageWrapperCustom>
  );
};

export default HomeScreen;
