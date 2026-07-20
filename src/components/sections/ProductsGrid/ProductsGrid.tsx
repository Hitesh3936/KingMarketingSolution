import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';
import { products } from '@/data/products';
import styles from './ProductsGrid.module.css';

export function ProductsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          subtitle="PRODUCTS"
          title="Crafted with Care - Trusted for Generations."
          description="At King Marketing Solution, every product is a reflection of our commitment to quality."
          align="center"
          className={styles.title}
        />
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.slug} className={styles.col}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
