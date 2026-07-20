import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './About.module.css';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description: 'King Marketing Solution is a trusted name in households across India—delivering quality, authenticity, and care through every product we craft.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <>
      <PageTitleBar title="About Us" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.contentCol}>
              <h2 className={styles.heading}>Our Legacy of Quality</h2>
              <p className={styles.text}>
                King Marketing Solution is a trusted name in households across India—delivering quality, authenticity, and care through every product we craft. We are a diversified FMCG enterprise, touching lives with staples and snacks that carry the flavor of tradition and the promise of excellence across the Globe. Des se Bides Tak…
              </p>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/about/about-us.jpg"
                  alt="The Legacy of King Marketing Solution"
                  width={570}
                  height={427}
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.row} ${styles.reversed}`}>
            <div className={styles.contentCol}>
              <h3 className={styles.heading}>Our Journey of Growth</h3>
              <p className={styles.text}>
                Through persistent dedication to standard practices and sourcing directly from farmers, we ensure only the best reaches your table. Over the decades, we have continuously integrated advanced milling and packaging technologies to maintain the highest hygiene and quality benchmarks.
              </p>
              <p className={styles.text}>
                Our journey has been guided by a clear focus: to bring purity and health into every household. We continue to innovate, expanding our product catalog from traditional flours to modern instant foods and snacks, satisfying the evolving demands of our consumers.
              </p>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/about/legacy-2.png"
                  alt="Our Journey"
                  width={570}
                  height={427}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
