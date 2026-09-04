import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { ProductsGrid } from '@/components/sections/ProductsGrid/ProductsGrid';
import { generatePageMetadata } from '@/config/seo.config';

export const metadata = generatePageMetadata({
  title: 'FMCG Food Products Range — Instant Noodles, Pasta, Rusk & Snacks',
  description: 'Explore King Marketing Solution’s FMCG product portfolio: Cookwell & Indian Buzz Instant Noodles, Durum Wheat Pasta, Macaroni, Vermicelli, Soya Chunks, and Elaichi Rusks available for wholesale and distribution across India.',
  path: '/products',
  keywords: [
    'Wholesale FMCG Food Products India',
    'Instant Noodles Wholesale Supplier',
    'Durum Wheat Pasta Macaroni Supplier',
    'Elaichi Rusk Bulk Supply',
    'FMCG Distribution Portfolio Rajpura',
    'Cookwell Food Products',
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageTitleBar title="Our Products" />
      <ProductsGrid />
    </>
  );
}
