import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type PartnersSliderProps = {
  images: string[];
};

const PartnersSlider = ({ images }: PartnersSliderProps) => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl text-dark">Partners</h1>
        <div className="border-t-2 border-light-red w-44 mt-4"></div>
      </div>

      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        slidesPerView={2}
        spaceBetween={40}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        mousewheel={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="w-full max-w-xl pb-8"
      >
        {images.map((imgSrc: string, index: number) => (
          <SwiperSlide key={index} className="flex justify-center h-full">
            <img
              src={imgSrc}
              alt={`Partner ${index + 1}`}
              className="w-64 h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="custom-pagination flex justify-center mt-8"
        style={{ position: 'relative', bottom: '5px' }}
      ></div>
    </section>
  );
};

export default PartnersSlider;
