import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { ProductsGrid } from '@/components/sections/ProductsGrid/ProductsGrid';
import { generatePageMetadata } from '@/config/seo.config';

export const metadata = generatePageMetadata({
  title: 'Our Products',
  description: 'At Bajrang Agro, we milling quality and safety into every flour, oil, vermicelli, pasta, noodles, rusk, and chikki product we craft.',
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
