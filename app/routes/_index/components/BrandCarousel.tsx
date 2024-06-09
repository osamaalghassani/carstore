import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';
import { useGetBrandQuery } from '@/stores/useHompageStore';
import { Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function BrandCarousel() {
  const { data: brands ,isLoading} = useGetBrandQuery();
  console.log(isLoading)
  console.log(brands?.data)
  const renderSwiperBrands = () => {
    return brands?.data?.map(
      (image: { id: number; imageUrl: string }) => (
        <SwiperSlide key={image.id}>
          <img src={image.imageUrl} />
        </SwiperSlide>
      ),
    );
  };

  return (
    <section
      className="text-center py-5 marquee"
      id="brand"
    >
      <h3 className="text-2xl lg:text-3xl font-normal">الماركات</h3>
      <div className="container py-5">
        <Swiper
          allowTouchMove={false}
          autoplay={{
            delay: 0.01,
            disableOnInteraction: false,
            reverseDirection: true, // Reverse direction for RTL
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            767: { slidesPerView: 3 },
            1_026: { slidesPerView: 4 },
          }}
          centeredSlides
          className="mySwiper"
          dir="rtl"
          loop
          modules={[Autoplay, Parallax]}
          slidesPerView={2}
          spaceBetween={0}
          speed={3_000}
        >
          {renderSwiperBrands()}
        </Swiper>
      </div>
    </section>
  );
}
