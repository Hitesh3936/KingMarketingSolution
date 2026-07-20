'use client';

import React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/config/brand.config';
import styles from './HeroSlider.module.css';

export function HeroSlider() {
  return (
    <section className={styles.heroBannerSection}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image
              src={brandConfig.logos.main}
              alt={brandConfig.companyName}
              width={500}
              height={200}
              className={styles.logo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
