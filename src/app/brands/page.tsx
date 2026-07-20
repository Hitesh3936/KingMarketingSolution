import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { brands } from '@/data/brands';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './Brands.module.css';

export const metadata = generatePageMetadata({
  title: 'Our Brands',
  description: 'Learn more about our flagship brands Cookwell and Indian Buzz - representing trust, purity, innovation, and taste.',
  path: '/brands'
});

export default function BrandsPage() {
  return (
    <>
      <PageTitleBar title="Our Brands" />

      <section className={styles.section}>
        <div className="container">
          <SectionTitle
            subtitle="BRANDS"
            title="Where Tradition Meets Taste - Where Innovation Sparks Joy."
            description="At Bajrang Agro, our brands are a promise of purity, quality, and rich heritage. We curate our brands to deliver nutrition and delicious flavors to every kitchen and snack-time across India."
            align="center"
            className={styles.intro}
          />

          <div className={styles.brandList}>
            {brands.map((brand, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={brand.slug}
                  className={`${styles.row} ${isEven ? '' : styles.reversed}`}
                >
                  <div className={styles.logoCol}>
                    <div className={styles.logoWrapper}>
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={280}
                        height={252}
                        className={styles.logo}
                      />
                    </div>
                  </div>

                  <div className={styles.contentCol}>
                    <h3 className={styles.brandName}>{brand.name}</h3>
                    <p className={styles.description}>{brand.description}</p>
                    <div className={styles.features}>
                      {brand.slug === 'cookwell' ? (
                        <>
                          <div className={styles.featureItem}>
                            <strong>Pure Staples</strong>: Ground and milled with ultimate hygienic care.
                          </div>
                          <div className={styles.featureItem}>
                            <strong>Trusted Quality</strong>: Delivering staple values to Indian kitchens for 40+ years.
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={styles.featureItem}>
                            <strong>Bold Flavors</strong>: Deliciously spicy instant noodles and crispy peanut chikkis.
                          </div>
                          <div className={styles.featureItem}>
                            <strong>Active Snack</strong>: Perfectly designed for modern lifestyles and fast-paced snacks.
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
