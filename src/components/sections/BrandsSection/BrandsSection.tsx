import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { BrandCard } from '@/components/ui/BrandCard/BrandCard';
import { brands } from '@/data/brands';
import styles from './BrandsSection.module.css';

export function BrandsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          title="Brands"
          description="Where Tradition Meets Taste - Where Innovation Sparks Joy."
          align="center"
          className={styles.title}
        />
        <div className={styles.grid}>
          {brands.map((brand) => (
            <div key={brand.slug} className={styles.col}>
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
