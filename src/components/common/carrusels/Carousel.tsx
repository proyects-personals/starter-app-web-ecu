import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="flex items-center justify-center gap-2 relative">
        {/* Contenedor de la imagen anterior */}
        <button
          onClick={goToPrev} // Navegar al hacer clic en la imagen anterior
          className="transition-all duration-300 ease-in-out transform flex items-center cursor-pointer relative"
          aria-label="Previous Image" // Descripción accesible
        >
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            className="w-48 h-48 object-cover rounded-md opacity-70 hover:opacity-100"
          />
        </button>

        {/* Imagen principal */}
        <div className="scale-100 relative">
          <img
            src={images[currentIndex]}
            alt="Current"
            className="w-52 h-52 object-cover rounded-md shadow-lg"
          />
          {/* Puntos indicadores */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
            {images.map((image) => (
              <button
                key={image} // Usar la URL de la imagen como clave
                onClick={() => goToImage(images.indexOf(image))}
                className={`w-2 h-2 rounded-full transition-colors ${
                  images.indexOf(image) === currentIndex
                    ? 'bg-white'
                    : 'bg-gray-400'
                }`}
                aria-label={`Go to image ${images.indexOf(image) + 1}`} // Descripción accesible
              />
            ))}
          </div>
        </div>

        {/* Contenedor de la imagen siguiente */}
        <button
          onClick={goToNext} // Navegar al hacer clic en la imagen siguiente
          className="transition-all duration-300 ease-in-out transform flex items-center cursor-pointer relative"
          aria-label="Next Image" // Descripción accesible
        >
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            className="w-48 h-48 object-cover rounded-md opacity-70 hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
