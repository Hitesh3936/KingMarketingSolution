'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';
import styles from './BrowseCatalogue.module.css';

export function BrowseCatalogue() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.tag}>PRODUCT CATALOGUE</span>
            <h2 className={styles.title}>Browse Our Product Catalogue</h2>
            <p className={styles.description}>
              Explore our full range of staples, pastas, instant noodles, and snacks. Download the complete print-ready catalogue to see detailed product specifications, pack sizes, and nutritional information.
            </p>
          </div>
          <div className={styles.actions}>
            <Button
              href="/assets/documents/catalogue.pdf"
              download="King_Marketing_Catalogue.pdf"
              variant="secondary"
              className={styles.downloadBtn}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.icon}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Catalogue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
