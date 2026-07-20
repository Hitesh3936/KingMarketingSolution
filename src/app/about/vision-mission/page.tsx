import React from 'react';
import Image from 'next/image';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { generatePageMetadata } from '@/config/seo.config';
import styles from './VisionMission.module.css';

export const metadata = generatePageMetadata({
  title: 'Vision & Mission',
  description: 'To become one of the largest and most trusted food manufacturing companies in India and the Globe, delivering products that nourish, delight, and inspire confidence in every household.',
  path: '/about/vision-mission'
});

export default function VisionMissionPage() {
  return (
    <>
      <PageTitleBar title="Vision & Mission" parentLabel="About" parentHref="/about" />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.topRow}>
            <div className={styles.introCol}>
              <SectionTitle
                title="Guided by Purpose - Driven by Excellence."
                description="King Marketing Solution is a trusted name in households across India—delivering quality, authenticity, and care through every product we craft. We are a diversified FMCG enterprise, touching lives with staples and snacks that carry the flavor of tradition and the promise of excellence across the Globe."
                align="left"
              />
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/about/legacy-2.png"
                  alt="Guided by Purpose"
                  width={570}
                  height={427}
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          <div className={styles.cardsGrid}>
            {/* Vision Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  To become one of the largest and most trusted food manufacturing companies in India and the Globe, delivering products that nourish, delight, and inspire confidence in every household.
                </li>
                <li className={styles.listItem}>
                  We envision a future where our brands—Cookwell and Indian Buzz—are synonymous with quality, authenticity, and innovation. As we grow, we remain rooted in our values: Ethical Manufacturing, sustainable practices, and a deep respect for tradition.
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  To manufacture and distribute high-quality food products that meet the evolving needs of modern consumers while honoring India’s rich culinary heritage.
                </li>
                <li className={styles.listItem}>
                  To uphold the highest standards of hygiene, safety, and process control across all our manufacturing units—from wheat milling to pasta, vermicelli, noodles, rusk, and chikki.
                </li>
                <li className={styles.listItem}>
                  To invest in cutting-edge technology and continuous improvement, ensuring efficiency, consistency, and excellence in every batch.
                </li>
                <li className={styles.listItem}>
                  To create a workplace where every employee is valued, empowered, and supported—because our people are the heart of our success.
                </li>
              </ul>
            </div>
          </div>

          {/* Promise segment */}
          <div className={styles.promiseBlock}>
            <h3 className={styles.promiseTitle}>A Promise to All</h3>
            <p className={styles.promiseText}>
              <strong>We don’t just make food—we build trust. Our promise is simple:</strong><br />
              To deliver products that are safe, delicious, and responsibly made, while nurturing the people and values that make our company truly exceptional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
