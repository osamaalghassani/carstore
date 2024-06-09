import { BrandCarousel } from './components/BrandCarousel';
import { HeroSection } from './components/HeroSection';
import { ProductsCarousel } from './components/ProductsCarousel';

export function Component() {
  return (
    <>
      <Header showNav />
      <HeroSection />
      <BrandCarousel />
      <ProductsCarousel />
      
   </>
  );
}
