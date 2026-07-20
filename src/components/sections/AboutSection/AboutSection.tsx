import React from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/Button/Button';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <div className={styles.contentCol}>
            <SectionTitle
              subtitle="WHO ARE WE"
              title="Nourishing Generations Empowering Futures."
              description="King Marketing Solution is a trusted name in households across India—delivering quality, authenticity, and care through every product we craft. We are a diversified FMCG enterprise, touching lives with staples and snacks that carry the flavor of tradition and the promise of excellence across the Globe. Des se Bides Tak…"
              align="left"
              className={styles.title}
            />
            <Button href="/about" variant="primary" className={styles.btn}>
              More About Us
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/about/about-us.jpg"
                alt="About King Marketing Solution"
                width={768}
                height={600}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
