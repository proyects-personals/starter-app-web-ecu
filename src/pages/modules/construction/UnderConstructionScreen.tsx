const UnderConstructionScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6 md:p-12">
      <h1 className="text-4xl md:text-6xl font-bold">En construcción</h1>
      <p className="text-lg md:text-xl mt-4">El sitio estará listo pronto</p>

      <div className="w-full max-w-md bg-gray-700 rounded-full h-4 mt-6 overflow-hidden">
        <div className="bg-blue-500 h-4 w-1/2"></div>
      </div>

      <div className="flex space-x-6 mt-6">
        <a
          href="https://www.instagram.com/ccmquito/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-gray-300 transition duration-300"
        >
          <i className="fa-brands fa-instagram text-3xl"></i>{' '}
          {/* Ícono más grande */}
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61557433015850"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-gray-300 transition duration-300"
        >
          <i className="fa-brands fa-facebook text-3xl"></i>{' '}
          {/* Ícono más grande */}
        </a>
      </div>

      <p className="mt-8 text-gray-400 text-sm md:text-base">
        &copy; 2024 Travel Ecuador
      </p>
    </div>
  );
};

export default UnderConstructionScreen;
