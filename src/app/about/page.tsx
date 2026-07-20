import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './About.module.css';

export const metadata = generatePageMetadata({
  title: 'The Legacy',
  description: 'For over 40 years, Bajrang Agro has been a trusted name in households across India—delivering quality, authenticity, and care through every product we craft.',
  path: '/about'
});

export default function AboutLegacyPage() {
  return (
    <>
      <PageTitleBar title="The Legacy" />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.contentCol}>
              <SectionTitle
                subtitle="The Legacy"
                title="Nourishing Generations Empowering Futures."
                description="For over 40 years, Bajrang Agro has been a trusted name in households across India—delivering quality, authenticity, and care through every product we craft. What began as a humble Oil Extraction and a Wheat milling operation has grown into a diversified FMCG enterprise, touching lives with staples and snacks that carry the flavor of tradition and the promise of excellence across the Globe. Des se Bides Tak…"
                align="left"
              />
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/about/legacy-1.png"
                  alt="The Legacy of Bajrang Agro"
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
