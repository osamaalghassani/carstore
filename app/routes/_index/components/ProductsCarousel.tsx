/* eslint-disable react/hook-use-state */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import Next from '@/assets/ArrowL.svg';
import Prev from '@/assets/ArrowR.svg';
import { useGetCarsQuery } from '@/stores/useHompageStore';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperClass } from 'swiper/types';

export const ProductsCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const { data: cars } = useGetCarsQuery();

  const handlePrevious = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  useEffect(() => {
    const updateSwiperState = () => {
      if (swiperRef) {
        // Since we are looping, we don't need to track isBeginning and isEnd
      }
    };

    if (swiperRef) {
      swiperRef.on('slideChange', updateSwiperState);
    }

    return () => {
      if (swiperRef) {
        swiperRef.off('slideChange', updateSwiperState);
      }
    };
  }, [swiperRef]);

  return (
    <section
      className="container relative py-5"
      id="products"
    >
      <TitleSection
        details="احدث السيارات الواصلة لدينا"
        title="سيارات"
      />
      <div className="relative flex items-center">
        <button
          className="bg-blue-800 absolute hover:shadow-lg transition-shadow z-10 start-2 lg:start-[-2rem] rounded-[15px] lg:w-12 lg:h-11 h-10 w-10 flex items-center justify-center"
          onClick={handlePrevious}
          type="button"
        >
          <img
            alt="arrow-prev"
            className="lg:w-5 w-4"
            src={Next}
          />
        </button>
        <Swiper
          autoplay={{
            delay: 2_100,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1_024: {
              slidesPerView: 2,
            },
          }}
          dir="rtl"
          loop
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={setSwiperRef}
          pagination={{ clickable: true }}
          slidesPerView="auto"
          speed={1_000}
        >
          {cars?.data?.map((item) => (
            <SwiperSlide key={item.id}>
              <CardProduct
                description={item.descreption}
                image={item.imageUrl}
                price={item.price}
                carId={item.id}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="bg-blue-800 absolute z-10 hover:shadow-lg transition-shadow end-2 lg:end-[-2.6rem] rounded-[15px] lg:w-12 lg:h-11 h-10 w-10 flex items-center justify-center"
          onClick={handleNext}
          type="button"
        >
          <img
            alt="arrow-next"
            className="lg:w-5 w-4"
            src={Prev}
          />
        </button>
      </div>
    </section>
  );
};
