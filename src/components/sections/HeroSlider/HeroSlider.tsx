'use client';

import React from 'react';
import { brandConfig } from '@/config/brand.config';
import styles from './HeroSlider.module.css';

export function HeroSlider() {
  return (
    <section className={styles.heroBannerSection}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brandConfig.logos.main}
              alt={brandConfig.companyName}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
