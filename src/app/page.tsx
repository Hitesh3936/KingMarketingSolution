import React from 'react';
import { HeroSlider } from '@/components/sections/HeroSlider/HeroSlider';
import { AboutSection } from '@/components/sections/AboutSection/AboutSection';
import { ClientNetworkMap } from '@/components/sections/ClientNetworkMap/ClientNetworkMap';
import { BrandsSection } from '@/components/sections/BrandsSection/BrandsSection';
import { ProductsSlider } from '@/components/sections/ProductsSlider/ProductsSlider';
import { BrowseCatalogue } from '@/components/sections/BrowseCatalogue/BrowseCatalogue';
import { LeadershipSection } from '@/components/sections/LeadershipSection/LeadershipSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ClientNetworkMap />
      <BrandsSection />
      <ProductsSlider />
      <BrowseCatalogue />
      <LeadershipSection />
    </>
  );
}
