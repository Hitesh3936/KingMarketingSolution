import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { ProductsGrid } from '@/components/sections/ProductsGrid/ProductsGrid';
import { generatePageMetadata } from '@/config/seo.config';

export const metadata = generatePageMetadata({
  title: 'Products',
  description: 'At King Marketing Solution, we craft quality flour, rusks, gourmet pasta, instant noodles, and snacks with care.',
  path: '/products'
});

export default function ProductsPage() {
  return (
    <>
      <PageTitleBar title="Our Products" />
      <ProductsGrid />
    </>
  );
}
