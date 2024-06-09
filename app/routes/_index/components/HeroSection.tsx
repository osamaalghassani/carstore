import 'swiper/css';
import { useGetSlidersQuery } from '@/stores/useHompageStore';
import useScreenSize from '@/utils/hooks/useScreenSize ';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HeroSection = () => {
  const { width } = useScreenSize();

  const isMobile = width ? width <= 767 : false;
  const { data: Slider } = useGetSlidersQuery();
  const renderSwiperSlides = () => {
    return Slider?.data?.map((image: { id: number; imageUrl: string }) => (
      <SwiperSlide key={image?.id}>
        <img
          alt="slide"
          src={image.imageUrl}
        />
      </SwiperSlide>
    ));
  };

  return (
    <section className={` md:h-screen ${isMobile ? 'container ' : ''}`}>
      {isMobile ? (
        <Swiper
          autoplay={{
            delay: 3_500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1_026: { slidesPerView: 1 },
          }}
          className="w-full"
          key={Math.random()}
          loop
          modules={[Autoplay]}
          spaceBetween={10}
        >
          {renderSwiperSlides()}
        </Swiper>
      ) : (
        <Swiper
          autoplay={{
            delay: 3_500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1_026: { slidesPerView: 1 },
          }}
          className="w-full h-full !absolute top-0 start-0"
          key={Math.random()}
          loop
          modules={[Autoplay]}
          spaceBetween={20}
          speed={1_000}
        >
          {renderSwiperSlides()}
        </Swiper>
      )}
    </section>
  );
};
